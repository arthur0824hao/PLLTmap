/**
 * 主要初始化腳本
 * 簡化版 - 只保留核心功能
 */

// 確認和優化地圖解析度設置

// 地圖配置參數 - 確認使用最大解析度
const mapConfig = {
    minZoom: -4,
    maxZoom: 8,     // 高縮放級別，允許查看細節
    center: [0, 0],
    initialZoom: -4, // 初始顯示完整地圖
    attribution: 'Map data &copy; PLLT World',
    // 使用原始最高品質圖像
    mapImageUrl: 'https://raw.githubusercontent.com/arthur0824hao/PLLTmap/main/images/map.jpg',
    // 使用原圖完整尺寸
    mapWidth: 8080,  // 原圖完整寬度
    mapHeight: 8192  // 原圖完整高度
};

// 初始化地圖 - 優化高解析度顯示
function initializeMap() {
    console.log('初始化高解析度地圖');
    
    // 建立地圖 - 使用優化的高解析度設置
    window.map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: mapConfig.minZoom,
        maxZoom: mapConfig.maxZoom,
        zoomControl: false,
        attributionControl: false,
        // 優化大型圖像的渲染
        preferCanvas: true,
        // 增強滾輪縮放體驗
        wheelPxPerZoomLevel: 120,
        zoomDelta: 0.5,
        zoomSnap: 0.25,
        // 啟用更平滑的慣性
        inertia: true,
        inertiaDeceleration: 3000,
        // 取消邊界限制，允許自由拖動
        maxBounds: null,
        // 提高性能設置
        fadeAnimation: true,
        markerZoomAnimation: true,
        // 觸摸設備優化
        tap: true,
        tapTolerance: 15
    }).setView(mapConfig.center, mapConfig.initialZoom);

    // 添加地圖圖層 - 使用完整原始尺寸
    const imageBounds = [
        [-mapConfig.mapHeight/2, -mapConfig.mapWidth/2],
        [mapConfig.mapHeight/2, mapConfig.mapWidth/2]
    ];
    
    // 添加圖像覆蓋層 - 確保最高品質渲染
    const overlay = L.imageOverlay(mapConfig.mapImageUrl, imageBounds, {
        // 禁用交互以避免事件衝突
        interactive: false,
        // 使用高品質渲染選項
        className: 'high-resolution-map',
        // 確保完整載入
        crossOrigin: 'anonymous',
        // 啟用圖像平滑顯示
        opacity: 1
    }).addTo(window.map);
    
    console.log('設置地圖解析度:', `${mapConfig.mapWidth}x${mapConfig.mapHeight}`);

    // 添加基本控制項
    L.control.zoom({
        position: 'bottomright',
        zoomInTitle: '放大',
        zoomOutTitle: '縮小'
    }).addTo(window.map);

    L.control.attribution({
        position: 'bottomright',
        prefix: false
    }).addAttribution(mapConfig.attribution).addTo(window.map);

    // 設置基本事件
    setupBasicEvents();
    
    return window.map;
}

// 設置基本事件處理
function setupBasicEvents() {
    // 確保地圖容器可以正確處理事件
    if (window.map) {
        // 點擊事件
        window.map.on('click', function(e) {
            console.log('地圖點擊', e.latlng);
            
            // 標記模式
            if (window.markersModule && window.markersModule.isAddingMarker()) {
                showMarkerForm(e.latlng);
            } 
            // 測量模式
            else if (window.distanceModule && window.distanceModule.isMeasuring()) {
                window.distanceModule.addDistancePoint(e.latlng);
            }
        });
        
        // 彈出窗口事件
        window.map.on('popupopen', function(e) {
            handlePopupOpen(e);
        });
    }
}

// 顯示標記表單
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
    
    // 顯示提示
    if (window.uiModule && window.uiModule.showToast) {
        window.uiModule.showToast(`選擇位置: (${latlng.lat.toFixed(2)}, ${latlng.lng.toFixed(2)})`);
    }
}

// 處理彈出窗口開啟
function handlePopupOpen(e) {
    if (!window.distanceModule || !window.distanceModule.isMeasuring() || !e.popup || !e.popup._source) {
        return;
    }
    
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
                window.distanceModule.addDistancePoint(marker.getLatLng());
                window.map.closePopup();
            });
        }
    }
}

// 確保數據庫正確初始化
function ensureDatabaseInitialized() {
    if (!window.plltWorldData) {
        console.warn('找不到 plltWorldData 對象，嘗試初始化...');
        
        if (typeof locationDb !== 'undefined') {
            // 確保數據已加載
            locationDb.load();
            
            // 創建全局數據庫對象
            window.plltWorldData = {
                locations: locationDb.locations,
                categories: locationCategories || {},
                
                // 提供資料庫操作函數
                addUserLocation: (data) => locationDb.addLocation(data),
                updateLocation: (id, data) => locationDb.updateLocation(id, data),
                deleteLocation: (id) => locationDb.deleteLocation(id),
                getLocationsByType: (type) => locationDb.getLocationsByType(type),
                searchLocations: (query) => locationDb.searchLocationsByName(query),
                getStats: () => locationDb.getStats(),
                
                // 匯入/匯出功能
                importLocations: (data, clearExisting) => locationDb.importLocations(data, clearExisting),
                getFullDatabase: () => locationDb.getFullDatabase(),
                getLocationsJson: () => locationDb.getLocationsJson(),
                
                // 提供重新加載方法
                reload: () => {
                    locationDb.load();
                    return locationDb.locations;
                }
            };
            
            console.log(`成功創建 plltWorldData 對象，包含 ${locationDb.locations.length} 個地點`);
        } else {
            console.error('無法找到 locationDb，無法初始化數據庫!');
        }
    }
}

// 初始化頁面 - 簡化版
function initializePage() {
    console.log('初始化頁面...');
    
    // 確保數據庫對象先初始化
    ensureDatabaseInitialized();
    
    // 初始化UI工具
    if (window.uiModule) {
        window.uiModule.createToastElement();
    }
    
    // 初始化地圖
    initializeMap();
    
    // 確保地圖已初始化完畢
    if (window.map) {
        window.map.whenReady(function() {
            console.log('地圖已初始化完成');
            
            // 初始化標記點
            if (window.markersModule) {
                window.markersModule.initializeMapLocations();
            }
            
            // 初始化基本UI元素
            if (window.uiModule) {
                // window.uiModule.createDynamicLegend(); // 停用舊的圖例功能，修正左下角重複圖例問題
                window.uiModule.initializeCollapsiblePanels();
                
                // 確保創建左下角整合面板
                window.uiModule.createLegendFilterPanel();
            }
            
            // 初始化過濾器 - 不再需要單獨的過濾器，使用整合面板替代
            // if (window.filterModule) {
            //     window.filterModule.setupLocationFilter();
            // }
            
            // 顯示初始提示
            if (window.uiModule) {
                window.uiModule.showToast('地圖已載入完成');
            }
        });
    }
    
    // 自動適應不同螢幕大小
    window.addEventListener('resize', function() {
        if (window.map) {
            window.map.invalidateSize();
        }
    });
    
    console.log('頁面初始化完成');
}

// 當頁面加載完成後執行初始化
document.addEventListener('DOMContentLoaded', initializePage);