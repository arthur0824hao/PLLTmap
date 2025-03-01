/**
 * UI相關功能
 */

// 初始化收縮式菜單
function initializeCollapsiblePanels() {
    const panels = document.querySelectorAll('.collapsible-panel');
    
    panels.forEach(panel => {
        // 創建切換按鈕
        const toggle = document.createElement('div');
        toggle.className = 'panel-toggle';
        
        // 根據面板位置設置不同的箭頭方向
        const position = panel.dataset.position || 'right';
        toggle.innerHTML = position === 'right' ? '<i class="fas fa-chevron-left"></i>' : '<i class="fas fa-chevron-right"></i>';
        
        // 點擊切換面板狀態 - 修正標籤閉合問題
        toggle.addEventListener('click', function() {
            panel.classList.toggle('active');
            toggle.innerHTML = panel.classList.contains('active') ? 
                (position === 'right' ? '<i class="fas fa-chevron-right"></i>' : '<i class="fas fa-chevron-left"></i>') : 
                (position === 'right' ? '<i class="fas fa-chevron-left"></i>' : '<i class="fas fa-chevron-right"></i>');
        });
        
        panel.appendChild(toggle);
    });
    
    // 為控制面板添加收縮功能
    const markerControls = document.querySelector('.marker-controls');
    if (markerControls) {
        const toggle = document.createElement('div');
        toggle.className = 'panel-toggle';
        toggle.innerHTML = '<i class="fas fa-cog"></i>';
        
        toggle.addEventListener('click', function() {
            markerControls.classList.toggle('active');
        });
        
        markerControls.appendChild(toggle);
    }
    
    // 延遲執行修復懸浮問題
    setTimeout(fixHoverIssues, 500);
}

// 修改：建立圖例/過濾器整合面板，顯示各分類 checkbox 與圖例
function createLegendFilterPanel() {
    // 創建容器，採用絕對定位，固定於地圖邊角
    const container = document.createElement('div');
    container.className = 'legend-filter-panel';
    container.style.position = 'absolute';
    container.style.bottom = '20px';
    container.style.left = '-135px'; // 露出約1/4
    container.style.zIndex = '950';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    container.style.padding = '10px';
    container.style.borderRadius = '8px';
    container.style.width = '180px';
    container.style.transition = 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)'; // 使用更平滑的過渡曲線
    container.style.visibility = 'visible';
    container.style.display = 'block';
    container.style.opacity = '1';
    container.style.maxHeight = '70vh';
    container.style.overflowY = 'auto';
    container.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
    container.style.border = '1px solid rgba(255, 215, 0, 0.5)';
    
    // 新增：標題
    const title = document.createElement('div');
    title.className = 'legend-filter-title';
    title.textContent = '圖例與過濾器';
    title.style.fontWeight = 'bold';
    title.style.textAlign = 'center';
    title.style.marginBottom = '8px';
    title.style.color = '#FFD700';
    title.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
    title.style.paddingBottom = '5px';
    container.appendChild(title);
    
    // 逐一加入各分類
    const categories = (window.plltWorldData && window.plltWorldData.categories) || {
        "首都": { color: "#e74c3c", icon: "fa-crown" },
        "城市": { color: "#d35400", icon: "fa-city" },
        "城鎮": { color: "#f39c12", icon: "fa-house-chimney" },
        "要塞": { color: "#8e44ad", icon: "fa-shield-halved" },
        "哨站": { color: "#9b59b6", icon: "fa-binoculars" },
        "平原": { color: "#f1c40f", icon: "fa-mountain-sun" },
        "森林": { color: "#2ecc71", icon: "fa-tree" },
        "山": { color: "#95a5a6", icon: "fa-mountain" },
        "水域": { color: "#3498db", icon: "fa-water" },
        "秘境": { color: "#e67e22", icon: "fa-dungeon" },
        "自定義": { color: "#1abc9c", icon: "fa-map-pin" }
    };
    
    // 建立列表
    const list = document.createElement('div');
    list.className = 'legend-filter-list';
    
    Object.keys(categories).forEach(type => {
        const item = document.createElement('div');
        item.className = 'legend-filter-item';
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.marginBottom = '6px';
        item.style.justifyContent = 'space-between'; // 添加兩端對齊
        item.style.cursor = 'pointer'; // 添加手型鼠標
        item.style.padding = '5px'; // 增加可點擊區域
        
        // 左側容器：圖標和文字
        const leftContainer = document.createElement('div');
        leftContainer.style.display = 'flex';
        leftContainer.style.alignItems = 'center';
        leftContainer.style.flexGrow = '1';
        
        // 圖例圖標
        const iconEl = document.createElement('i');
        iconEl.className = `fa-solid ${categories[type].icon}`;
        iconEl.style.backgroundColor = categories[type].color;
        iconEl.style.width = '20px';
        iconEl.style.height = '20px';
        iconEl.style.display = 'inline-flex';
        iconEl.style.alignItems = 'center';
        iconEl.style.justifyContent = 'center';
        iconEl.style.borderRadius = '50%';
        iconEl.style.fontSize = '10px';
        iconEl.style.color = 'white';
        iconEl.style.marginRight = '6px';
        leftContainer.appendChild(iconEl);
        
        // 標籤文字
        const label = document.createElement('span');
        label.textContent = type;
        label.style.fontSize = '12px';
        label.style.color = 'white';
        leftContainer.appendChild(label);
        
        item.appendChild(leftContainer);
        
        // 右側放checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.dataset.type = type;
        checkbox.checked = true;
        checkbox.style.marginLeft = '6px';
        checkbox.style.cursor = 'pointer';
        
        // 重要：連接過濾器功能
        checkbox.addEventListener('change', function(e) {
            // 修改：使用完整的過濾處理邏輯
            handleFilterChange(e, list);
            
            // 呼叫過濾函數
            if (window.filterModule && typeof window.filterModule.applyLocationFilter === 'function') {
                window.filterModule.applyLocationFilter();
            } else {
                // 備用：直接實現過濾功能
                applyFilterDirectly();
            }
        });
        
        item.appendChild(checkbox);
        
        // 為整個項目添加點擊處理，使整個條目都能觸發勾選/取消勾選
        item.addEventListener('click', function(e) {
            // 只有當點擊的不是checkbox本身時才手動切換
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
                
                // 手動觸發change事件
                const changeEvent = new Event('change', { bubbles: true });
                checkbox.dispatchEvent(changeEvent);
            }
        });
        
        list.appendChild(item);
    });
    
    container.appendChild(list);
    
    // 底部加入全選
    const allContainer = document.createElement('div');
    allContainer.style.marginTop = '8px';
    allContainer.style.textAlign = 'center';
    allContainer.style.display = 'flex';
    allContainer.style.justifyContent = 'space-between';
    allContainer.style.alignItems = 'center';
    allContainer.style.cursor = 'pointer'; // 添加手型鼠標
    allContainer.style.padding = '5px'; // 增加可點擊區域
    
    const allLabel = document.createElement('span');
    allLabel.textContent = '全部';
    allLabel.style.fontSize = '12px';
    allLabel.style.color = 'white';
    allLabel.style.fontWeight = 'bold';
    
    const allCheckbox = document.createElement('input');
    allCheckbox.type = 'checkbox';
    allCheckbox.dataset.type = 'all';
    allCheckbox.checked = true;
    allCheckbox.style.cursor = 'pointer';
    
    // 重要：全選/取消全選功能
    allCheckbox.addEventListener('change', function(e) {
        // 同步所有checkbox狀態
        const checkboxes = container.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => { cb.checked = allCheckbox.checked; });
        
        // 使用完整的過濾處理邏輯
        handleFilterChange(e, list);
        
        if (window.filterModule && typeof window.filterModule.applyLocationFilter === 'function') {
            window.filterModule.applyLocationFilter();
        } else {
            // 備用：直接實現過濾功能
            applyFilterDirectly();
        }
    });
    
    allContainer.appendChild(allLabel);
    allContainer.appendChild(allCheckbox);
    
    // 為全選行添加點擊處理
    allContainer.addEventListener('click', function(e) {
        // 只有當點擊的不是checkbox本身時才手動切換
        if (e.target !== allCheckbox) {
            allCheckbox.checked = !allCheckbox.checked;
            
            // 手動觸發change事件
            const changeEvent = new Event('change', { bubbles: true });
            allCheckbox.dispatchEvent(changeEvent);
        }
    });
    
    container.appendChild(allContainer);
    
    // 添加防抽搐機制 - 擴大緩衝區
    const bufferZone = document.createElement('div');
    bufferZone.className = 'buffer-zone left';
    bufferZone.style.position = 'absolute';
    bufferZone.style.width = '30px'; // 增加寬度
    bufferZone.style.height = '300px'; // 增加高度
    bufferZone.style.left = '-30px'; // 與寬度相匹配
    bufferZone.style.top = 'calc(50% - 150px)'; // 居中
    bufferZone.style.background = 'transparent';
    bufferZone.style.zIndex = '949';
    container.appendChild(bufferZone);
    
    // 優化懸浮行為 - 使用計時器和狀態管理
    let hoverTimer = null;
    let leaveTimer = null;
    let isActive = false;
    
    function activatePanel() {
        if (isActive) return;
        clearTimeout(leaveTimer); // 清除離開計時器
        
        isActive = true;
        container.style.left = '20px';
        container.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.6)';
    }
    
    function deactivatePanel() {
        if (!isActive) return;
        clearTimeout(hoverTimer); // 清除懸停計時器
        
        // 添加延時，防止意外的鼠標移出
        leaveTimer = setTimeout(() => {
            isActive = false;
            container.style.left = '-135px';
            container.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
        }, 300);
    }
    
    container.addEventListener('mouseenter', activatePanel);
    bufferZone.addEventListener('mouseenter', activatePanel);
    container.addEventListener('mouseleave', deactivatePanel);
    
    // 將整合面板掛載到地圖容器上
    document.body.appendChild(container);
    
    // 添加標識標籤
    const labelElement = document.createElement('div');
    labelElement.textContent = "圖例與過濾";
    labelElement.style.position = 'absolute';
    labelElement.style.right = '-55px';
    labelElement.style.top = '50%';
    labelElement.style.transform = 'translateY(-50%) rotate(90deg)';
    labelElement.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    labelElement.style.padding = '5px 10px';
    labelElement.style.borderRadius = '0 0 8px 8px';
    labelElement.style.color = 'white';
    labelElement.style.fontSize = '12px';
    labelElement.style.whiteSpace = 'nowrap';
    labelElement.style.border = '1px solid rgba(255, 215, 0, 0.5)';
    labelElement.style.borderTop = 'none';
    labelElement.style.zIndex = '-1';
    labelElement.style.pointerEvents = 'none';
    container.appendChild(labelElement);
    
    return container;
}

// 處理過濾器變更 - 從 filter.js 整合過來的功能
function handleFilterChange(e, container) {
    const checkbox = e.target;
    const type = checkbox.dataset.type;
    const checked = checkbox.checked;
    
    if (type === 'all') {
        // 如果切換了"全部"選項，則同步設置所有其他選項
        const allCheckboxes = container.querySelectorAll('input[type="checkbox"]');
        allCheckboxes.forEach(cb => {
            cb.checked = checked;
        });
    } else {
        // 如果取消選中任何單獨類型，確保"全部"選項也取消選中
        const allCheckbox = container.closest('.legend-filter-panel').querySelector('input[data-type="all"]');
        if (!checked && allCheckbox && allCheckbox.checked) {
            allCheckbox.checked = false;
        }
        
        // 如果所有單獨類型都被選中，確保"全部"選項也被選中
        if (container) {
            const typeCheckboxes = container.querySelectorAll('input[type="checkbox"]:not([data-type="all"])');
            const allTypesChecked = Array.from(typeCheckboxes).every(cb => cb.checked);
            if (allTypesChecked && allCheckbox) {
                allCheckbox.checked = true;
            }
        }
    }
}

// 修改：備用過濾功能實現 - 完全隱藏未勾選類別
function applyFilterDirectly() {
    if (!window.plltWorldData || !window.plltWorldData.locations) return;
    
    // 獲取所有選中的類型
    const typeCheckboxes = document.querySelectorAll('.legend-filter-panel .legend-filter-list input[type="checkbox"]');
    const selectedTypes = Array.from(typeCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.dataset.type);
    
    // 計算過濾前後的數量
    let totalCount = 0;
    let visibleCount = 0;
    
    // 遍歷所有地點，根據類型顯示或隱藏
    window.plltWorldData.locations.forEach(location => {
        if (location.markerRef) {
            totalCount++;
            
            if (selectedTypes.includes(location.type)) {
                // 完全顯示該地點
                location.markerRef.getElement().style.opacity = '1';
                location.markerRef.getElement().style.display = 'block';
                visibleCount++;
            } else {
                // 完全隱藏該地點
                location.markerRef.getElement().style.opacity = '0';
                location.markerRef.getElement().style.display = 'none';
            }
        }
    });
    
    // 顯示過濾器應用提示，包括數量統計
    if (window.uiModule && window.uiModule.showToast) {
        window.uiModule.showToast(`顯示 ${visibleCount}/${totalCount} 個地點`);
    }
}

// 防止懸浮抽搐問題的函數 (從 hover-fix.js 整合)
function fixHoverIssues() {
    console.log('應用懸浮修復...');
    
    // 獲取所有需要修復懸浮行為的面板
    const panels = [
        document.querySelector('.map-legend'),
        document.querySelector('.location-type-filter'),
        document.querySelector('.marker-controls')
    ];
    
    // 為每個面板應用修復
    panels.forEach(panel => {
        if (!panel) return;
        
        // 創建緩沖區域，擴大可懸浮區域
        const isRightPanel = panel.classList.contains('marker-controls') || 
                           panel.classList.contains('location-type-filter');
        const bufferClass = isRightPanel ? 'buffer-zone right' : 'buffer-zone left';
        
        const buffer = document.createElement('div');
        buffer.className = bufferClass;
        panel.appendChild(buffer);
        
        // 使用更穩定的事件處理方法，防抖處理
        let hoverTimer;
        let leaveTimer;
        let isHovering = false;
        let isTransitioning = false; // 新增：是否正在過渡中
        
        // 移入時添加類，而不是直接修改樣式
        panel.addEventListener('mouseenter', function() {
            if (isTransitioning) return; // 如果正在過渡中，忽略滑鼠事件
            
            clearTimeout(leaveTimer); // 清除離開計時器
            
            if (!isHovering) {
                isHovering = true;
                isTransitioning = true; // 標記為正在過渡
                panel.classList.add('hover-active');
                
                // 緩存面板位置，防止重複計算引起的抖動
                const rect = panel.getBoundingClientRect();
                panel.setAttribute('data-left', rect.left);
                panel.setAttribute('data-top', rect.top);
                
                // 過渡完成後重置狀態
                setTimeout(() => {
                    isTransitioning = false; // 過渡完成
                }, 400); // 略長於CSS過渡時間
            }
        });
        
        // 移出時延遲移除類，防止邊界抖動引起的快速進出
        panel.addEventListener('mouseleave', function() {
            if (isTransitioning) return; // 如果正在過渡中，忽略滑鼠事件
            
            clearTimeout(hoverTimer);
            
            // 設定較長時間防止誤判
            leaveTimer = setTimeout(() => {
                isHovering = false;
                isTransitioning = true; // 標記為正在過渡
                panel.classList.remove('hover-active');
                
                // 過渡完成後重置狀態
                setTimeout(() => {
                    isTransitioning = false; // 過渡完成
                }, 400); // 略長於CSS過渡時間
            }, 200); // 延遲時間，減少誤操作
        });
        
        // 使用CSS類而非直接修改樣式，設置初始位置
        if (isRightPanel) {
            if (panel.classList.contains('location-type-filter')) {
                panel.style.right = '-135px'; // 確保露出1/4
            } else {
                panel.style.right = '-230px'; // 標記面板保持原樣
            }
        } else {
            panel.style.left = '-135px'; // 初始位置
        }
        
        // 通過類添加懸浮效果
        const style = document.createElement('style');
        const selector = '.' + Array.from(panel.classList).join('.');
        style.textContent = `
            ${selector}.hover-active {
                ${isRightPanel ? 'right: 20px !important;' : 'left: 20px !important;'}
                box-shadow: 0 0 20px rgba(255, 215, 0, 0.6) !important;
            }
        `;
        document.head.appendChild(style);
    });
    
    console.log('懸浮修復已應用');
}

// 創建動態圖例
function createDynamicLegend() {
    const legendContainer = document.getElementById('map-legend-items');
    if (!legendContainer) return;
    
    let legendHTML = '';
    
    // 使用資料庫中的地點類型
    if (window.plltWorldData && window.plltWorldData.categories) {
        // 確保所有類型都被顯示
        Object.entries(window.plltWorldData.categories).forEach(([type, data]) => {
            const icon = data.icon || 'fa-map-marker';
            const color = data.color || '#cccccc';
            
            legendHTML += `
                <div class="legend-item">
                    <div class="legend-icon" style="background-color: ${color}">
                        <i class="fa-solid ${icon}"></i>
                    </div>
                    <span>${type}</span>
                </div>
            `;
        });
    } else {
        // 備用選項，確保包含所有類型
        const defaultTypes = [
            {type: "首都", color: "#e74c3c", icon: "fa-crown"},
            {type: "城市", color: "#d35400", icon: "fa-city"},
            {type: "城鎮", color: "#f39c12", icon: "fa-house-chimney"},
            {type: "要塞", color: "#8e44ad", icon: "fa-shield-halved"},
            {type: "哨站", color: "#9b59b6", icon: "fa-binoculars"},
            {type: "平原", color: "#f1c40f", icon: "fa-mountain-sun"},
            {type: "森林", color: "#2ecc71", icon: "fa-tree"},
            {type: "山", color: "#95a5a6", icon: "fa-mountain"},
            {type: "水域", color: "#3498db", icon: "fa-water"},
            {type: "秘境", color: "#e67e22", icon: "fa-dungeon"},
            {type: "自定義", color: "#1abc9c", icon: "fa-map-pin"}
        ];
        
        defaultTypes.forEach(item => {
            legendHTML += `
                <div class="legend-item">
                    <div class="legend-icon" style="background-color: ${item.color}">
                        <i class="fa-solid ${item.icon}"></i>
                    </div>
                    <span>${item.type}</span>
                </div>
            `;
        });
    }
    
    legendContainer.innerHTML = legendHTML;
    
    // 確保圖例始終可見
    const mapLegend = document.querySelector('.map-legend');
    if (mapLegend) {
        mapLegend.style.display = 'block';
        mapLegend.style.visibility = 'visible';
        mapLegend.style.opacity = '1';

        // 添加一個提示，告知用戶如何顯示圖例
        const legendTip = document.createElement('div');
        legendTip.className = 'legend-tip';
        legendTip.textContent = '滑鼠懸停查看圖例';
        legendTip.style.cssText = 'position: absolute; left: 15px; bottom: 15px; font-size: 12px; color: #aaa; background-color: rgba(0,0,0,0.6); padding: 3px 6px; border-radius: 3px; pointer-events: none; opacity: 0.7;';
        document.body.appendChild(legendTip);
        
        // 5秒後隱藏提示
        setTimeout(() => {
            legendTip.style.opacity = '0';
            setTimeout(() => legendTip.remove(), 500);
        }, 5000);
    }
}

// 顯示Toast通知
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
        @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

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

// 自定義比例尺控制項
function createCustomScaleControl(map) {
    L.Control.CustomScale = L.Control.extend({
        options: {
            position: 'bottomleft',
            maxWidth: 100,
            metric: true,
            imperial: false,
            updateWhenIdle: false
        },

        onAdd: function (map) {
            const container = L.DomUtil.create('div', 'leaflet-control-scale');
            this._addScales(container);
            this._map = map;
            
            map.on(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
            map.whenReady(this._update, this);
            
            return container;
        },

        onRemove: function (map) {
            map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
        },

        _addScales: function (container) {
            this._mScale = L.DomUtil.create('div', 'leaflet-control-scale-line', container);
        },

        _update: function () {
            const bounds = this._map.getBounds(),
                centerLat = bounds.getCenter().lat,
                halfWorldMeters = 40075016.686 * Math.abs(Math.cos(centerLat * Math.PI / 180)),
                dist = halfWorldMeters * (bounds.getNorthEast().lng - bounds.getSouthWest().lng) / 180,
                size = this._map.getSize(),
                options = this.options,
                maxMeters = 0;
                
            if (size.x > 0) {
                maxMeters = dist * (options.maxWidth / size.x);
            }
            
            this._updateScales(maxMeters);
        },

        _updateScales: function (maxMeters) {
            // 自定义比例尺：1单位 = 1公里
            const scale = this._map.getZoom(),
                value = Math.round(maxMeters / 100) * 100; // 四舍五入到最接近的100公里
            
            this._mScale.style.width = Math.min(this.options.maxWidth, (value / maxMeters) * this.options.maxWidth) + 'px';
            this._mScale.innerHTML = `${value} 公里 (${(value/50).toFixed(1)} 日程)`;
        }
    });

    L.control.customScale = function (options) {
        return new L.Control.CustomScale(options);
    };

    // 添加自定义比例尺
    L.control.customScale().addTo(map || window.map);
}

// 模塊導出 - 刪除 showExportHelpDialog
window.uiModule = {
    initializeCollapsiblePanels,
    createDynamicLegend,
    createToastElement,
    showToast,
    createCustomScaleControl,
    fixHoverIssues,
    createLegendFilterPanel,
    handleFilterChange,
    applyFilterDirectly
    // 不再導出 showExportHelpDialog
};
