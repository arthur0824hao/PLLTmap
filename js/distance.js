/**
 * 距離測量模組
 * 提供地圖距離測量功能
 */

// 全局變量
let measuringDistance = false;
let distancePoints = [];
let distanceMarkers = [];
let distanceLine = null;

// 開始測量距離 - 使用通用面板函數
function startMeasuring() {
    console.log('開始測量距離');
    
    // 如果正在添加標記，先取消
    if (window.markersModule && window.markersModule.isAddingMarker()) {
        window.markersModule.cancelAddMarker();
    }
    
    measuringDistance = true;
    distancePoints = [];
    
    // 清除之前的測量
    clearMeasurement();
    
    // 更新UI
    document.getElementById('measure-distance-btn').style.display = 'none';
    document.getElementById('cancel-measure-btn').style.display = 'block';
    document.getElementById('measure-result').style.display = 'block';
    document.getElementById('measure-result').innerHTML = '請點擊地圖上的點或已有標記以測量距離。</br>點擊 ESC 或取消按鈕退出測量模式。';
    
    // 更改游標樣式
    if (window.map) {
        window.map.getContainer().style.cursor = 'crosshair';
    }
    
    // 使用通用函數鎖定面板
    const markerControls = document.querySelector('.marker-controls');
    if (markerControls && window.uiModule && window.uiModule.setupPanelState) {
        window.uiModule.setupPanelState(
            markerControls,
            'measuring',
            '<i class="fas fa-ruler-combined"></i> 距離測量模式',
            'rgba(52, 152, 219, 0.8)',
            true // 鎖定面板
        );
    }
    
    // 顯示提示
    if (window.uiModule && window.uiModule.showToast) {
        window.uiModule.showToast('已啟動測量模式，點擊地圖以添加測量點');
    }
}

// 取消測量 - 使用通用面板函數
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
    if (window.map) {
        window.map.getContainer().style.cursor = '';
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
    
    // 顯示提示
    if (window.uiModule && window.uiModule.showToast) {
        window.uiModule.showToast('已退出測量模式');
    }
}

// 清除測量相關元素
function clearMeasurement() {
    // 移除測量點
    distanceMarkers.forEach(marker => window.map.removeLayer(marker));
    distanceMarkers = [];
    
    // 移除測量線
    if (distanceLine && window.map) {
        window.map.removeLayer(distanceLine);
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
    }).addTo(window.map);
    
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
    }).addTo(window.map);
    
    distanceMarkers.push(labelMarker);
    
    // 如果有兩個點，繪製線條並計算距離
    if (distancePoints.length === 2) {
        drawDistanceLine();
    } else {
        // 只有一個點時，提示用戶
        document.getElementById('measure-result').innerHTML = `
            已標記第一個點 (${latlng.lat.toFixed(2)}, ${latlng.lng.toFixed(2)})<br>
            請點擊另一個點以完成測量
        `;
    }
}

// 繪製距離線並顯示結果
function drawDistanceLine() {
    // 繪製線條
    distanceLine = L.polyline([distancePoints[0], distancePoints[1]], {
        color: '#3498db',
        weight: 3,
        opacity: 0.8,
        dashArray: '5, 8'
    }).addTo(window.map);
    
    // 計算距離（單位：天）
    const rawDistance = calculateDistance(distancePoints[0], distancePoints[1]);
    const distanceInDays = rawDistance / 50; // 50單位 = 1天
    
    // 計算中點，用於顯示距離標籤
    const midPoint = L.latLng(
        (distancePoints[0].lat + distancePoints[1].lat) / 2,
        (distancePoints[0].lng + distancePoints[1].lng) / 2
    );
    
    // 顯示距離標籤
    const distanceLabel = L.divIcon({
        html: `<div class="distance-info">${distanceInDays.toFixed(2)} 天</div>`,
        className: 'distance-info-container',
        iconSize: [80, 30],
        iconAnchor: [40, 15]
    });
    
    const distanceLabelMarker = L.marker(midPoint, {
        icon: distanceLabel,
        interactive: false
    }).addTo(window.map);
    
    distanceMarkers.push(distanceLabelMarker);
    
    // 更新結果顯示
    document.getElementById('measure-result').innerHTML = `
        <strong>測量結果：</strong> ${distanceInDays.toFixed(2)} 天（${rawDistance.toFixed(2)} 單位）<br>
        <small>點1: (${distancePoints[0].lat.toFixed(2)}, ${distancePoints[0].lng.toFixed(2)})</small><br>
        <small>點2: (${distancePoints[1].lat.toFixed(2)}, ${distancePoints[1].lng.toFixed(2)})</small><br>
        <small>點擊繼續測量，或ESC退出測量模式</small>
    `;
}

// 計算兩點之間的距離
function calculateDistance(point1, point2) {
    // 使用畢氏定理計算歐幾里得距離
    const dx = point2.lng - point1.lng;
    const dy = point1.lat - point2.lat;
    return Math.sqrt(dx * dx + dy * dy);
}

// 檢查是否正在測量
function isMeasuring() {
    return measuringDistance;
}

// 導出模塊
window.distanceModule = {
    startMeasuring,
    cancelMeasuring,
    addDistancePoint,
    isMeasuring
};
