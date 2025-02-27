// 地點類型過濾功能
function setupLocationFilter() {
    // 創建過濾控制器容器
    const filterControl = L.control({ position: 'bottomright' });
    
    filterControl.onAdd = function() {
        const container = L.DomUtil.create('div', 'location-type-filter');
        
        container.innerHTML = `
            <div class="filter-title">顯示地點類型</div>
            <div class="filter-options">
                <label><input type="checkbox" data-type="all" checked> 全部</label>
                <label><input type="checkbox" data-type="主城" checked> 主城</label>
                <label><input type="checkbox" data-type="水域" checked> 水域</label>
                <label><input type="checkbox" data-type="森林" checked> 森林</label>
                <label><input type="checkbox" data-type="秘境" checked> 秘境</label>
                <label><input type="checkbox" data-type="自定義" checked> 自定義</label>
            </div>
        `;
        
        // 阻止地圖事件傳播，以便能正常使用控制項
        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.disableScrollPropagation(container);
        
        setTimeout(() => {
            // 為過濾選項添加事件監聽
            const checkboxes = container.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', handleFilterChange);
            });
        }, 100);
        
        return container;
    };
    
    filterControl.addTo(map);
    
    // 添加CSS樣式
    const style = document.createElement('style');
    style.textContent = `
        .location-type-filter {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 10px;
            border-radius: 4px;
            color: white;
            max-width: 200px;
            font-size: 14px;
        }
        
        .filter-title {
            font-weight: bold;
            margin-bottom: 8px;
            text-align: center;
        }
        
        .filter-options label {
            display: block;
            margin: 5px 0;
            cursor: pointer;
        }
        
        .filter-options input {
            margin-right: 5px;
        }
    `;
    document.head.appendChild(style);
}

// 處理過濾器變更
function handleFilterChange(e) {
    const checkbox = e.target;
    const type = checkbox.dataset.type;
    const checked = checkbox.checked;
    
    if (type === 'all') {
        // 如果切換了"全部"選項，則同步設置所有其他選項
        const allCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
        allCheckboxes.forEach(cb => {
            cb.checked = checked;
        });
    } else {
        // 如果取消選中任何單獨類型，確保"全部"選項也取消選中
        const allCheckbox = document.querySelector('input[data-type="all"]');
        if (!checked && allCheckbox.checked) {
            allCheckbox.checked = false;
        }
        
        // 如果所有單獨類型都被選中，確保"全部"選項也被選中
        const typeCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]:not([data-type="all"])');
        const allTypesChecked = Array.from(typeCheckboxes).every(cb => cb.checked);
        if (allTypesChecked) {
            allCheckbox.checked = true;
        }
    }
    
    // 應用過濾器
    applyLocationFilter();
}

// 應用地點類型過濾
function applyLocationFilter() {
    if (!window.plltWorldData || !window.plltWorldData.locations) return;
    
    // 獲取所有選中的類型
    const typeCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]:not([data-type="all"])');
    const selectedTypes = Array.from(typeCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.dataset.type);
    
    // 遍歷所有地點，根據類型顯示或隱藏
    window.plltWorldData.locations.forEach(location => {
        if (location.markerRef) {
            if (selectedTypes.includes(location.type)) {
                // 顯示該地點
                location.markerRef.setStyle({ opacity: 1, fillOpacity: 0.8 });
            } else {
                // 隱藏該地點
                location.markerRef.setStyle({ opacity: 0.2, fillOpacity: 0.1 });
            }
        }
    });
    
    showToast(`已更新顯示的地點類型`);
}// 地圖初始設置
const mapConfig = {
    minZoom: -4,      // 設定更小的最小縮放級別，以便在GitHub Pages上顯示完整地圖
    maxZoom: 8,       // 保持最大縮放級別不變
    center: [0, 0],   // 中心點
    initialZoom: -4,  // 初始縮放級別也設置為最小值，確保首次加載時顯示完整地圖
    tileSize: 256,    // 瓦片大小
    attribution: 'Map data &copy; PLLT World'
};

// 全局變量
let addingMarker = false;
let measuringDistance = false;
let distancePoints = [];
let distanceMarkers = [];
let distanceLine = null;
let userMarkers = [];

// 初始化地圖
const map = L.map('map', {
    crs: L.CRS.Simple,  // 簡單坐標系統，適合架空世界
    minZoom: mapConfig.minZoom,
    maxZoom: mapConfig.maxZoom,
    zoomControl: false,  // 禁用默認縮放控制器
    attributionControl: false,  // 禁用默認歸屬控制器
    maxBoundsViscosity: 0.3,  // 進一步降低邊界黏性，使縮放時更流暢
    bounceAtZoomLimits: false,  // 禁止在縮放時反彈
    inertia: true,  // 啟用慣性拖曳
    wheelPxPerZoomLevel: 120,  // 增加滾輪靈敏度，使縮放更順暢
    zoomSnap: 0.25,  // 設定縮放級別的最小增量，使縮放更平滑
    zoomDelta: 0.5,  // 設定縮放按鈕每次變化的級別
    wheelDebounceTime: 40  // 降低滾輪事件的去抖時間，提高響應速度
}).setView(mapConfig.center, mapConfig.initialZoom);

// 添加地圖圖層 - 使用 GitHub 絕對路徑
const mapImageUrl = 'https://raw.githubusercontent.com/arthur0824hao/PLLTmap/main/images/map.jpg';
const mapWidth = 8080;
const mapHeight = 8192;

// 添加一個擴展範圍，允許更大的縮放範圍
const zoomFactor = 6;  // 增大縮放因子，以支持更小的縮放級別
const extendedWidth = mapWidth * zoomFactor;
const extendedHeight = mapHeight * zoomFactor;

// 設置實際圖片顯示的邊界
const imageBounds = [
    [-mapHeight/2, -mapWidth/2],  // 左下角坐標
    [mapHeight/2, mapWidth/2]     // 右上角坐標
];

// 設置可視範圍邊界，比實際圖片大得多
const viewBounds = [
    [-extendedHeight/2, -extendedWidth/2],  // 左下角坐標
    [extendedHeight/2, extendedWidth/2]     // 右上角坐標
];

L.imageOverlay(mapImageUrl, imageBounds).addTo(map);

// 設置地圖最大邊界，允許更廣闊的視圖
map.setMaxBounds(viewBounds);

// 添加自定義縮放控制器
L.control.zoom({
    position: 'bottomright',
    zoomInTitle: '放大',
    zoomOutTitle: '縮小'
}).addTo(map);

// 添加歸屬信息
L.control.attribution({
    position: 'bottomright',
    prefix: false
}).addAttribution(mapConfig.attribution).addTo(map);

// 添加比例尺
L.control.scale({
    imperial: false,
    position: 'bottomleft'
}).addTo(map);

// 為不同類型的地點設置不同顏色
const typeColors = {
    "主城": "#e74c3c",
    "水域": "#3498db",
    "森林": "#2ecc71",
    "秘境": "#f1c40f",
    "自定義": "#9b59b6"
};

// 使用locations-data.js中的地點數據
function initializeMapLocations() {
    console.log('初始化地圖標記點...');
    try {
        // 檢查全局變數是否存在
        if (typeof window.plltWorldData !== 'undefined' && window.plltWorldData.locations) {
            console.log(`找到${window.plltWorldData.locations.length}個地點`);
            window.plltWorldData.locations.forEach(location => {
                addDefaultLocationToMap(location);
            });
            // 更新標記數量顯示
            updateMarkersCount();
        } else {
            console.error('無法找到地點資料，請確認locations-data.js已正確加載');
        }
    } catch (error) {
        console.error('初始化地圖標記點時出錯:', error);
    }
}

// 更新標記數量顯示
function updateMarkersCount() {
    const markerCounter = document.getElementById('marker-counter');
    if (markerCounter && window.plltWorldData && window.plltWorldData.locations) {
        markerCounter.textContent = window.plltWorldData.locations.length.toString();
    }
}

// 添加地點到地圖
function addDefaultLocationToMap(location) {
    console.log(`添加地點: ${location.name}`);
    const marker = L.circleMarker(location.coords, {
        radius: 8,
        fillColor: typeColors[location.type] || "#9b59b6",
        color: "#fff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(map);
    
    // 所有地點都可刪除
    const deleteButton = `<button class="delete-marker-btn" data-id="${location.id}" onclick="deleteLocation('${location.id}')">刪除標記</button>`;
    
    // 添加彈出信息
    const popupContent = `
        <div class="location-info">
            <h3>${location.name}</h3>
            <p><strong>類型:</strong> ${location.type}</p>
            <p>${location.description}</p>
            ${deleteButton}
        </div>
    `;
    marker.bindPopup(popupContent);
    
    // 保存標記對象的引用
    location.markerRef = marker;
    
    // 鼠標懸停效果
    marker.on('mouseover', function() {
        this.setRadius(12);
    });
    marker.on('mouseout', function() {
        this.setRadius(8);
    });
}

// 用戶標記功能實現

// 開始添加標記
function beginAddMarker() {
    console.log('開始添加標記');
    if (measuringDistance) {
        cancelMeasuring();
    }
    addingMarker = true;
    document.getElementById('add-marker-btn').style.display = 'none';
    document.getElementById('cancel-marker-btn').style.display = 'block';
    map.getContainer().style.cursor = 'crosshair';
}

// 取消添加標記
function cancelAddMarker() {
    console.log('取消添加標記');
    addingMarker = false;
    document.getElementById('add-marker-btn').style.display = 'block';
    document.getElementById('cancel-marker-btn').style.display = 'none';
    document.getElementById('marker-form').style.display = 'none';
    map.getContainer().style.cursor = '';
}

// 保存標記
function saveMarker() {
    console.log('保存標記');
    const markerForm = document.getElementById('marker-form');
    const name = document.getElementById('marker-name').value.trim();
    if (!name) {
        alert('請輸入標記名稱');
        return;
    }
    
    const type = document.getElementById('marker-type').value;
    const description = document.getElementById('marker-description').value.trim();
    const coords = [
        parseFloat(markerForm.dataset.lat),
        parseFloat(markerForm.dataset.lng)
    ];
    
    // 創建新標記
    const newMarker = {
        id: 'user-' + Date.now().toString(),
        name,
        type,
        description,
        coords,
        createTime: new Date().toISOString(),
        isDefault: false
    };
    
    // 使用locations-data.js的函數添加地點
    if (window.plltWorldData && window.plltWorldData.addUserLocation) {
        window.plltWorldData.addUserLocation(newMarker);
        
        // 添加到地圖
        addDefaultLocationToMap(newMarker);
        
        // 更新UI
        updateMarkersCount();
        
        // 顯示成功提示
        showToast(`成功添加標記：${name}`);
    } else {
        console.error('無法訪問plltWorldData.addUserLocation函數');
        alert('保存失敗：無法訪問資料庫');
    }
    
    // 重設界面
    addingMarker = false;
    document.getElementById('add-marker-btn').style.display = 'block';
    document.getElementById('cancel-marker-btn').style.display = 'none';
    markerForm.style.display = 'none';
    map.getContainer().style.cursor = '';
}

// 測量距離功能實現

// 開始測量距離
function startMeasuring() {
    console.log('開始測量距離');
    if (addingMarker) {
        cancelAddMarker();
    }
    measuringDistance = true;
    distancePoints = [];
    
    // 清除之前的測量
    clearMeasurement();
    
    // 更新UI
    document.getElementById('measure-distance-btn').style.display = 'none';
    document.getElementById('cancel-measure-btn').style.display = 'block';
    document.getElementById('measure-result').style.display = 'block';
    document.getElementById('measure-result').innerHTML = '請點擊地圖上的點或已有標記以測量距離。右鍵點擊地圖退出測量模式。';
    
    // 更改游標樣式
    map.getContainer().style.cursor = 'crosshair';
    
    // 添加右鍵退出測量
    map.on('contextmenu', cancelMeasuringOnContext);
}

// 右鍵退出測量
function cancelMeasuringOnContext(e) {
    e.originalEvent.preventDefault(); // 阻止瀏覽器默認右鍵菜單
    cancelMeasuring();
}

// 取消測量
function cancelMeasuring() {
    console.log('取消測量');
    measuringDistance = false;
    distancePoints = [];
    
    // 清除測量標記和線
    clearMeasurement();
    
    // 更新UI
    document.getElementById('measure-distance-btn').style.display = 'block';
    document.getElementById('cancel-measure-btn').style.display = 'none';
    document.getElementById('measure-result').style.display = 'none';
    
    // 恢復游標樣式
    map.getContainer().style.cursor = '';
    
    // 移除右鍵事件
    map.off('contextmenu', cancelMeasuringOnContext);
}

// 清除測量相關元素
function clearMeasurement() {
    // 移除測量點
    distanceMarkers.forEach(marker => map.removeLayer(marker));
    distanceMarkers = [];
    
    // 移除測量線
    if (distanceLine) {
        map.removeLayer(distanceLine);
        distanceLine = null;
    }
}

// 添加測量點
function addDistancePoint(latlng) {
    console.log('添加測量點', latlng);
    // 如果已經有兩個點，先清除
    if (distancePoints.length === 2) {
        clearMeasurement();
        distancePoints = [];
    }
    
    // 添加點到數組
    distancePoints.push(latlng);
    
    // 創建視覺標記
    const marker = L.circleMarker(latlng, {
        radius: 6,
        fillColor: '#3498db',
        color: '#ffffff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8,
        className: 'distance-marker'
    }).addTo(map);
    
    distanceMarkers.push(marker);
    
    // 為測量點添加序號標籤
    const pointIndex = distancePoints.length;
    const label = L.divIcon({
        html: `<div class="distance-point-label">${pointIndex}</div>`,
        className: 'distance-point-label-container',
        iconSize: [20, 20]
    });
    
    const labelMarker = L.marker(latlng, {
        icon: label,
        interactive: false
    }).addTo(map);
    
    distanceMarkers.push(labelMarker);
    
    // 如果有兩個點，繪製線條並計算距離
    if (distancePoints.length === 2) {
        // 繪製線條
        distanceLine = L.polyline([distancePoints[0], distancePoints[1]], {
            color: '#3498db',
            weight: 3,
            opacity: 0.8,
            dashArray: '5, 8'
        }).addTo(map);
        
        // 計算距離
        const distance = calculateDistance(distancePoints[0], distancePoints[1]);
        
        // 計算中點，用於顯示距離標籤
        const midPoint = L.latLng(
            (distancePoints[0].lat + distancePoints[1].lat) / 2,
            (distancePoints[0].lng + distancePoints[1].lng) / 2
        );
        
        // 顯示距離標籤
        const distanceLabel = L.divIcon({
            html: `<div class="distance-info">${distance.toFixed(2)} 單位</div>`,
            className: 'distance-info-container',
            iconSize: [80, 30],
            iconAnchor: [40, 15]
        });
        
        const distanceLabelMarker = L.marker(midPoint, {
            icon: distanceLabel,
            interactive: false
        }).addTo(map);
        
        distanceMarkers.push(distanceLabelMarker);
        
        // 更新結果顯示
        document.getElementById('measure-result').innerHTML = `
            <strong>測量結果：</strong> ${distance.toFixed(2)} 單位<br>
            <small>點1: (${distancePoints[0].lat.toFixed(2)}, ${distancePoints[0].lng.toFixed(2)})</small><br>
            <small>點2: (${distancePoints[1].lat.toFixed(2)}, ${distancePoints[1].lng.toFixed(2)})</small><br>
            <small>點擊繼續測量，或右鍵退出測量模式</small>
        `;
    } else {
        // 只有一個點時，提示用戶
        document.getElementById('measure-result').innerHTML = `
            已標記第一個點 (${latlng.lat.toFixed(2)}, ${latlng.lng.toFixed(2)})<br>
            請點擊另一個點以完成測量
        `;
    }
}

// 計算兩點之間的距離
function calculateDistance(point1, point2) {
    // 使用畢氏定理計算歐幾里得距離
    const dx = point2.lng - point1.lng;
    const dy = point2.lat - point1.lat;
    return Math.sqrt(dx * dx + dy * dy);
}

// 匯出/匯入功能實現

// 匯出標記點為JSON檔案
function exportMarkers() {
    console.log('匯出標記');
    
    if (window.plltWorldData && window.plltWorldData.locations) {
        if (window.plltWorldData.locations.length === 0) {
            alert('沒有標記可供匯出');
            return;
        }
        
        // 準備匯出的資料 (移除 markerRef)
        const exportData = window.plltWorldData.locations.map(location => {
            const { markerRef, ...rest } = location;
            return rest;
        });
        
        // 創建一個 Blob
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        
        // 創建下載連結
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'pllt_world_locations.json';
        
        // 觸發下載
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        showToast(`已匯出 ${exportData.length} 個地點`);
    } else {
        alert('無法匯出：資料庫不可用');
    }
}

// 匯入標記點
function handleFileImport(event) {
    console.log('處理文件匯入', event);
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        importMarkers(file);
    }
}

function importMarkers(file) {
    console.log('匯入標記', file);
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            const importedLocations = JSON.parse(e.target.result);
            
            // 確認資料格式是否正確
            if (!Array.isArray(importedLocations)) {
                throw new Error('無效的標記資料格式');
            }
            
            // 詢問使用者是否要覆蓋或合併
            const action = confirm('是否要清除現有標記？\n點擊「確定」以覆蓋現有標記，或點擊「取消」以合併新標記。');
            
            // 清除現有標記
            if (action && window.plltWorldData && window.plltWorldData.locations) {
                // 從地圖上移除所有現有標記
                window.plltWorldData.locations.forEach(location => {
                    if (location.markerRef) {
                        map.removeLayer(location.markerRef);
                    }
                });
                
                // 清空位置數組並只保留核心預設位置
                window.plltWorldData.locations = window.plltWorldData.locations.filter(loc => loc.isDefault);
            }
            
            // 添加匯入的標記
            let addedCount = 0;
            importedLocations.forEach(locationData => {
                // 檢查ID是否已存在
                const exists = window.plltWorldData.locations.some(
                    loc => loc.id === locationData.id
                );
                
                // 為已存在的生成新ID
                if (exists) {
                    locationData.id = 'import-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
                }
                
                // 設定為非預設地點
                locationData.isDefault = false;
                
                // 使用API添加地點
                if (window.plltWorldData.addUserLocation) {
                    window.plltWorldData.addUserLocation(locationData);
                    // 添加到地圖
                    addDefaultLocationToMap(locationData);
                    addedCount++;
                }
            });
            
            // 更新UI
            updateMarkersCount();
            
            alert(`成功匯入 ${addedCount} 個標記`);
        } catch (error) {
            console.error('匯入標記時出錯:', error);
            alert('匯入標記失敗: ' + error.message);
        }
    };
    
    reader.readAsText(file);
}// 匯出/匯入功能實現

// 匯出標記點為JSON檔案
function exportMarkers() {
    console.log('匯出標記');
    
    if (window.plltWorldData && window.plltWorldData.locations) {
        if (window.plltWorldData.locations.length === 0) {
            alert('沒有標記可供匯出');
            return;
        }
        
        // 準備匯出的資料 (移除 markerRef)
        const exportData = window.plltWorldData.locations.map(location => {
            const { markerRef, ...rest } = location;
            return rest;
        });
        
        // 創建一個 Blob
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        
        // 創建下載連結
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'pllt_world_locations.json';
        
        // 觸發下載
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        showToast(`已匯出 ${exportData.length} 個地點`);
    } else {
        alert('無法匯出：資料庫不可用');
    }
}

// 匯入標記點
function handleFileImport(event) {
    console.log('處理文件匯入', event);
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        importMarkers(file);
    }
}

function importMarkers(file) {
    console.log('匯入標記', file);
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            const importedLocations = JSON.parse(e.target.result);
            
            // 確認資料格式是否正確
            if (!Array.isArray(importedLocations)) {
                throw new Error('無效的標記資料格式');
            }
            
            // 詢問使用者是否要覆蓋或合併
            const action = confirm('是否要清除現有標記？\n點擊「確定」以覆蓋現有標記，或點擊「取消」以合併新標記。');
            
            // 清除現有標記
            if (action && window.plltWorldData && window.plltWorldData.locations) {
                // 從地圖上移除所有現有標記
                window.plltWorldData.locations.forEach(location => {
                    if (location.markerRef) {
                        map.removeLayer(location.markerRef);
                    }
                });
                
                // 清空位置數組並只保留核心預設位置
                window.plltWorldData.locations = window.plltWorldData.locations.filter(loc => loc.isDefault);
            }
            
            // 添加匯入的標記
            let addedCount = 0;
            importedLocations.forEach(locationData => {
                // 檢查ID是否已存在
                const exists = window.plltWorldData.locations.some(
                    loc => loc.id === locationData.id
                );
                
                // 為已存在的生成新ID
                if (exists) {
                    locationData.id = 'import-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
                }
                
                // 設定為非預設地點
                locationData.isDefault = false;
                
                // 使用API添加地點
                if (window.plltWorldData.addUserLocation) {
                    window.plltWorldData.addUserLocation(locationData);
                    // 添加到地圖
                    addDefaultLocationToMap(locationData);
                    addedCount++;
                }
            });
            
            // 更新UI
            updateMarkersCount();
            
            alert(`成功匯入 ${addedCount} 個標記`);
        } catch (error) {
            console.error('匯入標記時出錯:', error);
            alert('匯入標記失敗: ' + error.message);
        }
    };
    
    reader.readAsText(file);
}

// 初始化資料同步系統
function initializeDataSync() {
    console.log('初始化資料同步系統...');
    
    // 創建Toast通知元素
    createToastElement();
    
    // 添加資料庫狀態指示器
    const statusIndicator = document.createElement('div');
    statusIndicator.className = 'db-status-indicator';
    statusIndicator.innerHTML = `
        <span class="status-dot online"></span>
        <span id="marker-counter">0</span> 地點 | 
        <span id="db-version">v1.0</span>
    `;
    document.querySelector('.marker-controls').appendChild(statusIndicator);
    
    // 初始化過濾器
    initializeFilter();
    
    // 設置定期自動保存
    setInterval(function() {
        if (window.plltWorldData && window.plltWorldData.locations && window.plltWorldData.locations.length > 0) {
            if (window.plltWorldData.saveUserLocations) {
                window.plltWorldData.saveUserLocations(window.plltWorldData.locations);
                console.log('自動保存完成');
            }
        }
    }, 60000); // 每分鐘自動保存一次
    
    // 監聽儲存空間變更事件（例如在其他標籤頁中的操作）
    window.addEventListener('storage', function(e) {
        if (e.key === 'plltWorldUserLocations' || e.key === 'plltWorldDataVersion') {
            console.log('檢測到外部資料變更，正在重新加載...');
            
            // 清除當前地圖上的所有標記
            if (window.plltWorldData && window.plltWorldData.locations) {
                window.plltWorldData.locations.forEach(location => {
                    if (location.markerRef) {
                        map.removeLayer(location.markerRef);
                    }
                });
            }
            
            // 重新加載頁面來刷新所有數據
            window.location.reload();
        }
    });
    
    // 更新地點列表
    setTimeout(function() {
        updateMarkersList();
    }, 500);
}

// 創建Toast通知元素
function createToastElement() {
    const toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
    
    // 添加樣式
    const style = document.createElement('style');
    style.textContent = `
        .toast-container {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 9999;
        }
        .toast {
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px 15px;
            border-radius: 4px;
            margin-top: 5px;
            animation: fadeInOut 3s forwards;
            opacity: 0;
        }
        .db-status-indicator {
            margin-top: 15px;
            padding: 5px;
            font-size: 12px;
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 4px;
            display: flex;
            align-items: center;
        }
        .status-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin-right: 5px;
        }
        .status-dot.online {
            background-color: #2ecc71;
        }
        .status-dot.offline {
            background-color: #e74c3c;
        }
        @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// 顯示Toast通知
function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);
    
    // 3秒後自動移除
    setTimeout(function() {
        if (toastContainer.contains(toast)) {
            toastContainer.removeChild(toast);
        }
    }, 3000);
}

// 用戶標記處理

// 從本地存儲加載標記
function loadMarkers() {
    console.log('加載用戶標記');
    const savedMarkers = localStorage.getItem('plltMapUserMarkers');
    if (savedMarkers) {
        try {
            userMarkers = JSON.parse(savedMarkers);
            // 在地圖上顯示保存的標記
            userMarkers.forEach(addMarkerToMap);
            updateMarkersList();
        } catch (e) {
            console.error('無法加載標記:', e);
        }
    }
}

// 保存標記到本地存儲 - 實時更新
function saveMarkers() {
    console.log('實時保存標記到本地存儲');
    
    // 移除 markerRef 對象，不需要存儲
    const markersToSave = userMarkers.map(marker => {
        const { markerRef, ...markerData } = marker;
        return markerData;
    });
    
    // 保存到localStorage
    localStorage.setItem('plltMapUserMarkers', JSON.stringify(markersToSave));
    
    // 更新數據庫版本號
    const currentDbVersion = parseInt(localStorage.getItem('plltMapDbVersion') || '0') + 1;
    localStorage.setItem('plltMapDbVersion', currentDbVersion.toString());
    localStorage.setItem('plltMapLastUpdate', new Date().toISOString());
    
    // 觸發自定義事件，以便其他組件可以訂閱數據更新
    const event = new CustomEvent('plltMapDataUpdated', { 
        detail: { 
            type: 'markers',
            count: userMarkers.length,
            version: currentDbVersion
        } 
    });
    document.dispatchEvent(event);
    
    // 更新UI上的計數器（如果存在）
    const markerCounter = document.getElementById('marker-counter');
    if (markerCounter) {
        markerCounter.textContent = userMarkers.length.toString();
    }
}

// 將標記添加到地圖上
function addMarkerToMap(markerData) {
    console.log(`添加用戶標記: ${markerData.name}`);
    const markerColor = typeColors[markerData.type] || "#9b59b6";
    
    const marker = L.circleMarker(markerData.coords, {
        radius: 8,
        fillColor: markerColor,
        color: "#fff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(map);
    
    const popupContent = `
        <div class="location-info">
            <h3>${markerData.name}</h3>
            <p><strong>類型:</strong> ${markerData.type}</p>
            ${markerData.description ? `<p>${markerData.description}</p>` : ''}
            <button class="delete-marker-btn" data-id="${markerData.id}" onclick="deleteMarker('${markerData.id}')">刪除標記</button>
        </div>
    `;
    
    marker.bindPopup(popupContent);
    
    // 保存標記對象的引用，用於後續操作
    markerData.markerRef = marker;
    
    // 鼠標懸停效果
    marker.on('mouseover', function() {
        this.setRadius(12);
    });
    
    marker.on('mouseout', function() {
        this.setRadius(8);
    });
}

// 更新標記列表
function updateMarkersList() {
    console.log('更新地點列表');
    const listElement = document.getElementById('user-markers-list');
    if (!listElement) return;
    
    listElement.innerHTML = '';
    
    // 獲取過濾器值
    const filterType = document.getElementById('location-filter').value;
    
    // 檢查資料是否可用
    if (!window.plltWorldData || !window.plltWorldData.locations) {
        return;
    }
    
    // 過濾地點
    let filteredLocations = window.plltWorldData.locations;
    if (filterType === 'user') {
        filteredLocations = filteredLocations.filter(loc => !loc.isDefault);
    } else if (filterType === 'default') {
        filteredLocations = filteredLocations.filter(loc => loc.isDefault);
    }
    
    // 排序：預設地點優先顯示，然後按名稱字母順序排序
    filteredLocations.sort((a, b) => {
        if (a.isDefault && !b.isDefault) return -1;
        if (!a.isDefault && b.isDefault) return 1;
        return a.name.localeCompare(b.name);
    });
    
    // 創建列表項
    filteredLocations.forEach(location => {
        const listItem = document.createElement('li');
        
        // 根據類型添加不同的樣式
        if (location.isDefault) {
            listItem.className = 'default-location';
        } else {
            listItem.className = 'user-location';
        }
        
        listItem.innerHTML = `
            <span class="location-name">${location.name}</span>
            <span class="location-type" style="background-color: ${typeColors[location.type] || '#9b59b6'}"></span>
        `;
        
        listItem.addEventListener('click', function() {
            map.setView(location.coords, 5);
            if (location.markerRef) {
                location.markerRef.openPopup();
            }
        });
        
        listElement.appendChild(listItem);
    });
    
    // 添加列表項數量顯示
    const countDisplay = document.createElement('div');
    countDisplay.className = 'location-count';
    countDisplay.textContent = `顯示 ${filteredLocations.length} 個地點`;
    listElement.parentNode.insertBefore(countDisplay, listElement.nextSibling);
}

// 初始化過濾器
function initializeFilter() {
    const filterSelect = document.getElementById('location-filter');
    if (filterSelect) {
        filterSelect.addEventListener('change', updateMarkersList);
    }
    
    // 添加過濾器樣式
    const style = document.createElement('style');
    style.textContent = `
        .location-filter {
            margin-bottom: 10px;
        }
        .location-filter select {
            width: 100%;
            padding: 5px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.9);
        }
        .default-location {
            border-left: 3px solid #e74c3c;
        }
        .user-location {
            border-left: 3px solid #3498db;
        }
        .location-type {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-left: 5px;
        }
        .location-count {
            font-size: 12px;
            color: #aaa;
            margin-top: 5px;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
}

// 刪除地點（預設和用戶添加的都可刪除）
function deleteLocation(id) {
    console.log('刪除地點', id);
    
    if (window.plltWorldData && window.plltWorldData.deleteLocation) {
        // 尋找並刪除地點
        const deletedLocation = window.plltWorldData.deleteLocation(id);
        
        if (deletedLocation) {
            // 從地圖中移除標記
            if (deletedLocation.markerRef) {
                map.removeLayer(deletedLocation.markerRef);
            }
            
            // 更新計數
            updateMarkersCount();
            
            // 顯示刪除成功提示
            showToast(`已刪除標記：${deletedLocation.name}`);
            return true;
        } else {
            console.error('未找到要刪除的地點:', id);
        }
    } else {
        console.error('無法訪問plltWorldData.deleteLocation函數');
        alert('刪除失敗：無法訪問資料庫');
    }
    
    return false;
}

// 地圖滾輪和鍵盤事件處理

// 添加滑鼠滾輪事件監聽器，增強縮放體驗
map.on('wheel', function(e) {
    // 確保滾輪事件能夠觸發更大的縮放範圍
    if (map.getZoom() <= mapConfig.minZoom && e.originalEvent.deltaY > 0) {
        // 允許繼續縮小，但有限度地
        e.preventDefault();
        const currentZoom = map.getZoom();
        const newZoom = Math.max(currentZoom - 0.25, mapConfig.minZoom - 1); // 限制最小縮放級別
        map.setZoom(newZoom, {animate: false});
    }
    
    // 處理移動設備上的縮放手勢
    e.stopPropagation();
});

// 觸摸裝置支援
// 偵測是否為觸摸裝置
function isTouchDevice() {
    return (('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0) ||
           (navigator.msMaxTouchPoints > 0));
}

// 如果是觸摸裝置，添加觸摸縮放事件處理
if (isTouchDevice()) {
    let initialDistance = 0;
    let initialZoom = 0;
    
    // 觸摸開始事件
    document.getElementById('map').addEventListener('touchstart', function(e) {
        if (e.touches.length === 2) {
            initialDistance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
            initialZoom = map.getZoom();
        }
    });
    
    // 觸摸移動事件
    document.getElementById('map').addEventListener('touchmove', function(e) {
        if (e.touches.length === 2 && initialDistance > 0) {
            const currentDistance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
            
            // 計算縮放級別變化
            const zoomDelta = 0.01 * (currentDistance - initialDistance);
            const newZoom = initialZoom + zoomDelta;
            
            // 應用新的縮放級別
            map.setZoom(newZoom, {animate: false});
        }
    });
    
    // 觸摸結束事件
    document.getElementById('map').addEventListener('touchend', function() {
        initialDistance = 0;
    });
}

// 地圖點擊事件處理
map.on('click', function(e) {
    console.log('地圖點擊', e.latlng);
    if (addingMarker) {
        const markerForm = document.getElementById('marker-form');
        document.getElementById('marker-name').value = '';
        document.getElementById('marker-type').value = '自定義';
        document.getElementById('marker-description').value = '';
        markerForm.style.display = 'block';
        
        // 保存當前點擊的坐標
        markerForm.dataset.lat = e.latlng.lat;
        markerForm.dataset.lng = e.latlng.lng;
    } else if (measuringDistance) {
        addDistancePoint(e.latlng);
    }
});

// 為地圖標記添加點擊事件（測量模式下）
map.on('popupopen', function(e) {
    if (measuringDistance && e.popup && e.popup._source) {
        const marker = e.popup._source;
        const container = e.popup.getElement();
        
        // 添加測量按鈕
        if (container) {
            const measureBtn = document.createElement('button');
            measureBtn.textContent = '加入測量';
            measureBtn.className = 'popup-measure-btn';
            measureBtn.style.cssText = 'background-color: #3498db; color: white; border: none; padding: 5px 10px; margin-top: 8px; border-radius: 4px; cursor: pointer; width: 100%;';
            
            // 在彈出視窗中添加按鈕
            const locationInfo = container.querySelector('.location-info');
            if (locationInfo) {
                locationInfo.appendChild(measureBtn);
                
                // 點擊事件：添加該標記位置到測量點
                measureBtn.addEventListener('click', function() {
                    addDistancePoint(marker.getLatLng());
                    map.closePopup();
                });
            }
        }
    }
});

// 初始化資料同步系統
function initializeDataSync() {
    console.log('初始化資料同步系統...');
    
    // 創建Toast通知元素
    createToastElement();
    
    // 添加資料庫狀態指示器
    const statusIndicator = document.createElement('div');
    statusIndicator.className = 'db-status-indicator';
    statusIndicator.innerHTML = `
        <span class="status-dot online"></span>
        <span id="marker-counter">0</span> 標記 | 
        <span id="db-version">v0</span>
    `;
    document.querySelector('.marker-controls').appendChild(statusIndicator);
    
    // 設置定期自動保存
    setInterval(function() {
        if (userMarkers.length > 0) {
            saveMarkers();
            console.log('自動保存完成');
        }
    }, 60000); // 每分鐘自動保存一次
    
    // 監聽資料更新事件
    document.addEventListener('plltMapDataUpdated', function(e) {
        console.log('資料已更新:', e.detail);
        // 更新資料庫版本顯示
        const dbVersionElement = document.getElementById('db-version');
        if (dbVersionElement) {
            dbVersionElement.textContent = `v${e.detail.version}`;
        }
    });
    
    // 監聽儲存空間變更事件（例如在其他標籤頁中的操作）
    window.addEventListener('storage', function(e) {
        if (e.key === 'plltMapUserMarkers') {
            console.log('檢測到外部資料變更，正在重新加載...');
            // 清除當前地圖上的用戶標記
            userMarkers.forEach(marker => {
                if (marker.markerRef) {
                    map.removeLayer(marker.markerRef);
                }
            });
            // 重新加載
            loadMarkers();
            showToast('資料已同步');
        }
    });
}

// 創建Toast通知元素
function createToastElement() {
    const toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
    
    // 添加樣式
    const style = document.createElement('style');
    style.textContent = `
        .toast-container {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 9999;
        }
        .toast {
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px 15px;
            border-radius: 4px;
            margin-top: 5px;
            animation: fadeInOut 3s forwards;
            opacity: 0;
        }
        .db-status-indicator {
            margin-top: 15px;
            padding: 5px;
            font-size: 12px;
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 4px;
            display: flex;
            align-items: center;
        }
        .status-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin-right: 5px;
        }
        .status-dot.online {
            background-color: #2ecc71;
        }
        .status-dot.offline {
            background-color: #e74c3c;
        }
        @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// 顯示Toast通知
function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);
    
    // 3秒後自動移除
    setTimeout(function() {
        toastContainer.removeChild(toast);
    }, 3000);
}

// 添加CSS樣式
function addCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .popup-measure-btn:hover {
            background-color: #2980b9 !important;
        }
        
        .distance-info {
            background-color: rgba(52, 152, 219, 0.8);
            padding: 5px 8px;
            border-radius: 3px;
            color: white;
            font-size: 12px;
            font-weight: bold;
            white-space: nowrap;
        }
        
        .distance-marker {
            animation: pulse 1.5s infinite;
        }
        
        @keyframes pulse {
            0% { opacity: 0.7; r: 6; }
            50% { opacity: 1; r: 8; }
            100% { opacity: 0.7; r: 6; }
        }
    `;
    document.head.appendChild(style);
}

// 初始化頁面
function initializePage() {
    console.log('初始化頁面...');
    
    // 添加自定義樣式
    addCustomStyles();
    
    // 初始化資料同步系統
    initializeDataSync();
    
    // 載入地圖預設地點
    initializeMapLocations();
    
    // 設置地點類型過濾功能
    setupLocationFilter();
    
    // 監聽地圖載入完成事件
    map.on('load', function() {
        console.log('地圖初始化完成，當前縮放級別：', map.getZoom());
    });
    
    // 監聽縮放變更事件，用於診斷
    map.on('zoomend', function() {
        console.log('縮放級別變更為：', map.getZoom());
    });
    
    // 自動適應不同螢幕大小
    window.addEventListener('resize', function() {
        map.invalidateSize();
    });
    
    // 添加鍵盤事件監聽器，用於測試和調試
    document.addEventListener('keydown', function(e) {
        // 按 'Z' 鍵測試最大縮小
        if (e.key === 'z' || e.key === 'Z') {
            map.setZoom(mapConfig.minZoom);
        }
        // 按 'X' 鍵返回初始視圖
        if (e.key === 'x' || e.key === 'X') {
            map.setView(mapConfig.center, mapConfig.initialZoom);
        }
        // 按 'C' 鍵測試更小的縮放級別（用於除錯）
        if (e.key === 'c' || e.key === 'C') {
            map.setZoom(mapConfig.minZoom - 0.5);
        }
        // 按 'S' 鍵手動保存
        if (e.key === 's' || e.key === 'S') {
            if (window.plltWorldData && window.plltWorldData.saveUserLocations) {
                window.plltWorldData.saveUserLocations(window.plltWorldData.locations);
                showToast('手動保存完成');
            }
        }
        // 按 'Esc' 鍵取消當前操作
        if (e.key === 'Escape') {
            if (measuringDistance) {
                cancelMeasuring();
            } else if (addingMarker) {
                cancelAddMarker();
            }
        }
    });
    
    console.log('頁面初始化完成');
}

// 從本地存儲加載標記 - 此功能已由locations-data.js處理，保留此函數以兼容舊代碼
function loadMarkers() {
    console.log('用戶標記現在由locations-data.js管理');
}

// 當頁面加載完成後執行初始化
document.addEventListener('DOMContentLoaded', initializePage);

// 當頁面加載完成後執行初始化
document.addEventListener('DOMContentLoaded', initializePage);