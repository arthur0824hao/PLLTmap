/**
 * 標記相關功能
 */

// 全局變量
let addingMarker = false;
const typeColors = {
    "首都": "#e74c3c", // 紅色
    "城市": "#d35400", // 深橘色
    "城鎮": "#f39c12", // 黃色
    "要塞": "#8e44ad", // 深紫色
    "哨站": "#9b59b6", // 淺紫色
    "平原": "#f1c40f", // 金色
    "森林": "#2ecc71", // 綠色
    "山": "#95a5a6", // 灰色
    "水域": "#3498db", // 藍色
    "秘境": "#e67e22", // 深橙色
    "自定義": "#1abc9c" // 青色
};

// 初始化地圖標記
function initializeMapLocations() {
    console.log('【標記模組】初始化地圖標記點...');
    
    // 如果地圖未初始化，等待後重試
    if (!window.map) {
        console.error('【標記模組】地圖未初始化，無法添加標記。將在 1 秒後重試');
        setTimeout(initializeMapLocations, 1000);
        return 0;
    }

    try {
        // 檢查全局變數是否存在
        if (typeof window.plltWorldData !== 'undefined' && window.plltWorldData.locations) {
            console.log(`【標記模組】找到 ${window.plltWorldData.locations.length} 個地點，準備添加到地圖`);
            
            // 確保數據不為空
            if (window.plltWorldData.locations.length === 0) {
                console.warn('【標記模組】地點數據為空，嘗試重新加載');
                
                // 嘗試重新加載數據
                if (window.plltWorldData.reload) {
                    window.plltWorldData.reload();
                }
                
                // 如果還是為空，則檢查 hardcodedLocations
                if (window.plltWorldData.locations.length === 0 && typeof hardcodedLocations !== 'undefined') {
                    console.log('【標記模組】從 hardcodedLocations 直接加載數據');
                    
                    // 從 hardcodedLocations 直接添加標記
                    hardcodedLocations.forEach(location => {
                        const locationCopy = JSON.parse(JSON.stringify(location));
                        addLocationToMap(locationCopy);
                    });
                    
                    console.log(`【標記模組】已直接從 hardcodedLocations 添加 ${hardcodedLocations.length} 個標記點`);
                    return hardcodedLocations.length;
                }
            }
            
            let addedCount = 0;
            
            // 添加所有地點到地圖
            window.plltWorldData.locations.forEach(location => {
                const marker = addLocationToMap(location);
                if (marker) addedCount++;
            });
            
            console.log(`【標記模組】成功添加 ${addedCount} 個標記點到地圖`);
            
            // 更新標記數量顯示
            updateMarkersCount();
            
            return addedCount;
        } else {
            console.error('【標記模組】無法找到地點資料，嘗試直接訪問 hardcodedLocations');
            
            // 嘗試直接從 hardcodedLocations 加載
            if (typeof hardcodedLocations !== 'undefined' && hardcodedLocations.length > 0) {
                console.log(`【標記模組】找到 ${hardcodedLocations.length} 個 hardcodedLocations 地點`);
                
                let directAddCount = 0;
                hardcodedLocations.forEach(location => {
                    const marker = addLocationToMap(location);
                    if (marker) directAddCount++;
                });
                
                console.log(`【標記模組】已直接從 hardcodedLocations 添加 ${directAddCount} 個標記點`);
                return directAddCount;
            }
            
            return 0;
        }
    } catch (error) {
        console.error('【標記模組】初始化地圖標記點時出錯:', error);
        return 0;
    }
}

// 更新標記數量顯示
function updateMarkersCount() {
    if (window.plltWorldData && window.plltWorldData.locations) {
        console.log(`目前有 ${window.plltWorldData.locations.length} 個標記點`);
    }
}

// 添加地點到地圖
function addLocationToMap(location) {
    if (!location || !location.name) {
        console.error('【標記模組】嘗試添加無效地點:', location);
        return null;
    }
    
    console.log(`【標記模組】添加地點: ${location.name}`, location);
    
    // 確保map可用
    if (!window.map) {
        console.error(`【標記模組】地圖未初始化，無法添加標記 ${location.name}`);
        return null;
    }
    
    // 確保坐標有效
    if (!location.coords || !Array.isArray(location.coords) || location.coords.length < 2) {
        console.error(`【標記模組】地點 ${location.name} 的坐標無效:`, location.coords);
        return null;
    }
    
    try {
        // 獲取此類型的圖標
        let icon = "fa-map-pin"; // 默認圖標
        let markerColor = typeColors[location.type] || "#1abc9c";
        
        // 從資料庫獲取圖標
        if (window.plltWorldData && window.plltWorldData.categories && 
            window.plltWorldData.categories[location.type]) {
            icon = window.plltWorldData.categories[location.type].icon || icon;
            markerColor = window.plltWorldData.categories[location.type].color || markerColor;
        }
        
        // 創建帶圖標的標記
        const markerHtml = `<div class="custom-marker" style="background-color: ${markerColor}">
                            <i class="fa-solid ${icon}"></i>
                            </div>`;
        
        const customIcon = L.divIcon({
            html: markerHtml,
            className: 'custom-marker-container',
            iconSize: [20, 20], // 縮小图標尺寸
            iconAnchor: [10, 10]
        });
        
        const marker = L.marker(location.coords, {
            icon: customIcon
        }).addTo(window.map);
        
        // 確保所有地點都有 ID
        if (!location.id) {
            location.id = 'loc-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9);
            console.log('【標記模組】為地點生成新ID:', location.id);
        }
        
        // 所有地點都可刪除，修正刪除按鈕
        const deleteButton = `<button class="delete-marker-btn" onclick="markersModule.deleteLocation('${location.id}')">刪除標記</button>`;
        
        // 添加彈出信息
        const popupContent = `
            <div class="location-info">
                <h3>${location.name}</h3>
                <p><strong>類型:</strong> ${location.type}</p>
                <p>${location.description || ''}</p>
                ${deleteButton}
            </div>
        `;
        marker.bindPopup(popupContent);
        
        // 保存標記對象的引用
        location.markerRef = marker;
        
        return marker;
    } catch (error) {
        console.error(`【標記模組】添加 ${location.name} 到地圖時出錯:`, error);
        return null;
    }
}

// 更新標記類型選項
function updateMarkerTypeOptions() {
    const markerTypeSelect = document.getElementById('marker-type');
    if (markerTypeSelect) {
        markerTypeSelect.innerHTML = ''; // 清空現有選項
        
        // 從locationCategories中獲取所有類型
        if (window.plltWorldData && window.plltWorldData.categories) {
            Object.keys(window.plltWorldData.categories).forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type;
                markerTypeSelect.appendChild(option);
            });
        } else {
            // 備用選項，如果無法訪問categories
            const defaultTypes = ["首都", "城市", "城鎮", "要塞", "哨站", "平原", "森林", "山", "水域", "秘境", "自定義"];
            defaultTypes.forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type;
                markerTypeSelect.appendChild(option);
            });
        }
    }
}

// 開始添加標記 - 使用通用面板函數
function beginAddMarker() {
    console.log('開始添加標記');
    if (window.distanceModule && window.distanceModule.isMeasuring()) {
        window.distanceModule.cancelMeasuring();
    }
    addingMarker = true;
    document.getElementById('add-marker-btn').style.display = 'none';
    document.getElementById('cancel-marker-btn').style.display = 'block';
    
    // 確保游標顯示為準心
    if (window.map) {
        const mapContainer = window.map.getContainer();
        mapContainer.style.cursor = 'crosshair';
        mapContainer.classList.add('adding-marker-mode');
    }
    
    // 使用通用函數設置面板狀態
    const markerControls = document.querySelector('.marker-controls');
    if (markerControls && window.uiModule && window.uiModule.setupPanelState) {
        window.uiModule.setupPanelState(
            markerControls,
            'adding-marker',
            '<i class="fas fa-map-marker-alt"></i> 添加標記模式',
            'rgba(46, 204, 113, 0.8)',
            true // 鎖定面板
        );
    }
    
    // 更新標記類型選項
    updateMarkerTypeOptions();
    
    // 顯示提示
    if (window.uiModule && window.uiModule.showToast) {
        window.uiModule.showToast('點擊地圖任意位置添加標記');
    }
}

// 顯示標記表單 - 增強表單交互體驗
function showMarkerForm(latlng) {
    const markerForm = document.getElementById('marker-form');
    if (!markerForm) return;
    
    // 重置表單
    document.getElementById('marker-name').value = '';
    document.getElementById('marker-type').value = '自定義';
    document.getElementById('marker-description').value = '';
    
    // 顯示表單
    markerForm.style.display = 'block';
    
    // 保存坐標
    markerForm.dataset.lat = latlng.lat;
    markerForm.dataset.lng = latlng.lng;
    
    // 自動聚焦到名稱輸入框
    setTimeout(() => {
        document.getElementById('marker-name').focus();
    }, 100);
    
    // 添加 Enter 鍵連續操作行為
    setupFormEnterKeyBehavior();
    
    // 顯示提示
    if (window.uiModule && window.uiModule.showToast) {
        window.uiModule.showToast(`輸入標記名稱後按 Enter 繼續`);
    }
}

// 設置表單 Enter 鍵行為
function setupFormEnterKeyBehavior() {
    // 1. 名稱輸入框 Enter 鍵跳到描述
    const nameInput = document.getElementById('marker-name');
    const descriptionInput = document.getElementById('marker-description');
    
    // 移除舊的事件監聽器以防重複添加
    nameInput.removeEventListener('keydown', handleNameInputEnter);
    descriptionInput.removeEventListener('keydown', handleDescriptionInputEnter);
    
    // 添加新的事件監聽器
    nameInput.addEventListener('keydown', handleNameInputEnter);
    descriptionInput.addEventListener('keydown', handleDescriptionInputEnter);
}

// 處理名稱輸入框 Enter 鍵
function handleNameInputEnter(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        // 輸入名稱不能為空
        if (e.target.value.trim() === '') {
            window.uiModule.showToast('請輸入標記名稱');
            return;
        }
        // 跳到描述輸入框
        document.getElementById('marker-description').focus();
    }
}

// 處理描述輸入框 Enter 鍵
function handleDescriptionInputEnter(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        // 保存標記
        saveMarker();
    }
}

// 取消添加標記 - 使用通用面板函數
function cancelAddMarker() {
    console.log('取消添加標記');
    addingMarker = false;
    document.getElementById('add-marker-btn').style.display = 'block';
    document.getElementById('cancel-marker-btn').style.display = 'none';
    document.getElementById('marker-form').style.display = 'none';
    
    if (window.map) {
        // 恢復默認游標
        window.map.getContainer().style.cursor = '';
        window.map.getContainer().classList.remove('adding-marker-mode');
    }
    
    // 使用通用函數解除面板鎖定
    const markerControls = document.querySelector('.marker-controls');
    if (markerControls && window.uiModule && window.uiModule.setupPanelState) {
        window.uiModule.setupPanelState(
            markerControls,
            '',
            '',
            '',
            false // 解除鎖定
        );
    }
}

// 保存標記 - 保存後解除面板鎖定
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
    
    // 創建新標記，確保ID格式一致
    const newMarker = {
        id: 'loc-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9),
        name,
        type,
        description,
        coords,
        createTime: new Date().toISOString(),
        isDefault: false
    };
    
    console.log('創建新標記:', newMarker);
    
    // 使用locations-data.js的函數添加地點
    if (window.plltWorldData && window.plltWorldData.addUserLocation) {
        const addedLocation = window.plltWorldData.addUserLocation(newMarker);
        
        if (addedLocation) {
            // 添加到地圖
            addLocationToMap(addedLocation);
            
            // 更新UI
            updateMarkersCount();
            
            // 顯示成功提示
            window.uiModule.showToast(`成功添加標記：${name}`);
        } else {
            console.error('添加標記失敗');
            window.uiModule.showToast('添加標記失敗');
        }
    } else {
        console.error('無法訪問plltWorldData.addUserLocation函數');
        alert('保存失敗：無法訪問資料庫');
    }
    
    // 重設界面並解除面板鎖定
    addingMarker = false;
    document.getElementById('add-marker-btn').style.display = 'block';
    document.getElementById('cancel-marker-btn').style.display = 'none';
    markerForm.style.display = 'none';
    if (window.map) {
        window.map.getContainer().style.cursor = '';
    }
    
    // 解除面板鎖定
    const markerControls = document.querySelector('.marker-controls');
    if (markerControls) {
        markerControls.classList.remove('locked-open');
        markerControls.dataset.activeMode = '';
        
        // 恢復原始切換按鈕
        const toggle = markerControls.querySelector('.panel-toggle');
        if (toggle) {
            toggle.innerHTML = '<i class="fas fa-cog"></i>';
            toggle.title = "";
        }
        
        // 移除模式指示器
        const modeIndicator = markerControls.querySelector('.mode-indicator');
        if (modeIndicator) {
            modeIndicator.remove();
        }
    }
}

// 刪除地點
function deleteLocation(id) {
    console.log('嘗試刪除地點', id);
    
    if (!id) {
        console.error('無效的ID:', id);
        alert('刪除失敗：無效的ID');
        return false;
    }
    
    // 找到對應的地點對象
    let locationToDelete = null;
    if (window.plltWorldData && window.plltWorldData.locations) {
        locationToDelete = window.plltWorldData.locations.find(loc => loc.id === id);
    }
    
    if (!locationToDelete) {
        console.error('找不到ID對應的地點:', id);
        alert('刪除失敗：找不到該標記');
        return false;
    }
    
    console.log('找到要刪除的地點:', locationToDelete);
    
    // 從地圖中移除標記
    if (locationToDelete.markerRef) {
        map.removeLayer(locationToDelete.markerRef);
    }
    
    // 從資料庫中刪除
    if (window.plltWorldData && window.plltWorldData.deleteLocation) {
        try {
            window.plltWorldData.deleteLocation(id);
            
            // 額外檢查是否真的從數組中移除了
            const stillExists = window.plltWorldData.locations.some(loc => loc.id === id);
            if (stillExists) {
                console.error('刪除後地點仍然存在:', id);
                
                // 手動從數組中移除
                const index = window.plltWorldData.locations.findIndex(loc => loc.id === id);
                if (index !== -1) {
                    window.plltWorldData.locations.splice(index, 1);
                    console.log('手動從數組中移除地點');
                }
            }
            
            // 更新UI
            updateMarkersCount();
            
            // 顯示刪除成功提示
            window.uiModule.showToast(`已刪除標記：${locationToDelete.name || '未命名標記'}`);
            return true;
        } catch (error) {
            console.error('刪除地點時發生錯誤:', error);
            alert('刪除標記時發生錯誤: ' + error.message);
            return false;
        }
    } else {
        console.error('無法訪問plltWorldData.deleteLocation函數');
        alert('刪除失敗：無法訪問資料庫');
        return false;
    }
}

// 空過濾器函數，保持API相容性
function initializeFilter() {
    // 功能已移除
}

// 匯出/匯入函數
// 匯出標記 - 修改為下載格式化的代碼片段，可直接複製到硬編碼部分
function exportMarkers() {
    console.log('匯出標記');
    
    // 防止重複點擊，添加鎖定機制
    if (window._exporting) {
        console.log('匯出操作正在進行中，請稍候');
        window.uiModule?.showToast('匯出操作正在進行中，請稍候');
        return;
    }
    
    window._exporting = true;
    
    // 設置延時解鎖，無論操作成功與否
    setTimeout(() => {
        window._exporting = false;
    }, 2000);
    
    if (window.plltWorldData && window.plltWorldData.locations) {
        try {
            // 直接獲取所有地點數據
            const locations = window.plltWorldData.locations;
            
            // 清理數據 - 移除 markerRef (這是瀏覽器中的DOM元素，無法序列化)
            const exportData = locations.map(location => {
                const { markerRef, ...cleanLocation } = location;
                return cleanLocation;
            });
            
            // 檢查數據是否存在
            if (exportData.length === 0) {
                window.uiModule?.showToast('沒有標記可供匯出');
                window._exporting = false;
                return;
            }
            
            // 創建格式化的JavaScript代碼，準備作為hardcodedLocations的內容
            // 使用2空格縮進
            const formattedArray = JSON.stringify(exportData, null, 2)
                .replace(/"([^"]+)":/g, "$1:") // 將 "key": 轉換為 key:
                .replace(/^/gm, "  ") // 每行前加兩個空格
                .replace(/^  \[/, "const hardcodedLocations = [") // 首行添加變數定義
                .replace(/  \]$/, "];"); // 末行添加分號
            
            // 創建包含使用說明的完整文件內容
            const fileContent = 
`// PLLT World 地圖位置數據 - 由匯出工具生成於 ${new Date().toLocaleString()}
// 複製下列內容到 locations-data.js 文件中的 hardcodedLocations 數組部分

${formattedArray}

// 共匯出 ${exportData.length} 個地點標記
`;
            
            // 直接下載為文本文件，避免重複建立元素
            const blob = new Blob([fileContent], { type: 'text/javascript' });
            const url = URL.createObjectURL(blob);
            const filename = `pllt_locations_export_${exportData.length}_${new Date().toISOString().split('T')[0]}.js`;
            
            // 使用現有的下載連結或建立新的
            let downloadLink = document.getElementById('export-download-link');
            if (!downloadLink) {
                downloadLink = document.createElement('a');
                downloadLink.id = 'export-download-link';
                downloadLink.style.display = 'none';
                document.body.appendChild(downloadLink);
            }
            
            // 設置下載屬性並觸發下載
            downloadLink.href = url;
            downloadLink.download = filename;
            downloadLink.click();
            
            // 清理 URL 對象
            setTimeout(() => URL.revokeObjectURL(url), 1000);
            
            // 顯示成功訊息
            window.uiModule?.showToast(`已下載 ${exportData.length} 個標記，可直接複製到 locations-data.js`);
            
            // 在控制台也輸出格式化內容，作為備份
            console.log('=========== 可複製到 hardcodedLocations 的格式化代碼 ===========');
            console.log(formattedArray);
            console.log('==================================================================');
            
        } catch (error) {
            console.error('匯出標記時出錯:', error);
            window.uiModule?.showToast('匯出失敗，請檢查控制台獲取更多信息');
            
            // 顯示應急使用方式
            console.log('=== 匯出失敗，請嘗試以下指令 ===');
            console.log(`const exportData = plltWorldData.locations.map(loc => {
  const { markerRef, ...data } = loc; 
  return data;
});
console.log(JSON.stringify(exportData, null, 2));`);
        } finally {
            // 確保解鎖
            window._exporting = false;
        }
    } else {
        window.uiModule?.showToast('無法匯出：找不到標記數據');
        console.error('找不到 plltWorldData.locations 數據');
        window._exporting = false;
    }
}

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
                    const addedLocation = window.plltWorldData.addUserLocation(locationData);
                    // 添加到地圖
                    addLocationToMap(addedLocation);
                    addedCount++;
                }
            });
            
            // 更新UI
            updateMarkersCount();
            
            window.uiModule.showToast(`成功匯入 ${addedCount} 個標記`);
        } catch (error) {
            console.error('匯入標記時出錯:', error);
            alert('匯入標記失敗: ' + error.message);
        }
    };
    
    reader.readAsText(file);
}

// 添加直接點擊地圖處理函數 - 作為備用選項
function handleMapClick(e) {
    if (!addingMarker) return;
    
    console.log('標記模式下地圖點擊:', e.latlng);
    
    const markerForm = document.getElementById('marker-form');
    if (!markerForm) return;
    
    // 清空並顯示表單
    document.getElementById('marker-name').value = '';
    document.getElementById('marker-type').value = '自定義';
    document.getElementById('marker-description').value = '';
    markerForm.style.display = 'block';
        
    // 保存坐標
    markerForm.dataset.lat = e.latlng.lat;
    markerForm.dataset.lng = e.latlng.lng;
    
    // 添加使用者體驗增強：自動聚焦名稱輸入框
    setTimeout(() => {
        document.getElementById('marker-name').focus();
    }, 100);
}

// 導出模塊
window.markersModule = {
    initializeMapLocations,
    addLocationToMap,
    beginAddMarker,
    cancelAddMarker,
    saveMarker,
    deleteLocation,
    exportMarkers,
    handleFileImport,
    handleMapClick,
    showMarkerForm,
    updateMarkerTypeOptions,
    handleDescriptionInputEnter,
    handleNameInputEnter,
    setupFormEnterKeyBehavior,
    isAddingMarker: () => addingMarker
};