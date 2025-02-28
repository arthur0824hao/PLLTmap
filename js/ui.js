/**
 * UI相關功能
 */

// 更新UI模組，添加面板管理功能

// 初始化收縮式面板
function initializeCollapsiblePanels() {
    // 設置所有面板
    setupPanel('.map-legend', 'left');
    setupPanel('.marker-controls', 'right');
    
    // 解決標記工具面板特殊顯示邏輯
    const markerControls = document.querySelector('.marker-controls');
    if (markerControls) {
        // 標記面板初始隱藏
        markerControls.classList.remove('active');
    }
}

// 設置單個面板
function setupPanel(selector, position) {
    const panel = document.querySelector(selector);
    if (!panel) return;
    
    // 創建切換按鈕
    const toggle = document.createElement('div');
    toggle.className = 'panel-toggle';
    
    // 根據面板位置設置不同的箭頭方向
    toggle.innerHTML = position === 'right' ? 
        '<i class="fas fa-chevron-left"></i>' : 
        '<i class="fas fa-chevron-right"></i>';
    
    // 點擊切換面板狀態
    toggle.addEventListener('click', function() {
        togglePanel(panel);
    });
    
    panel.appendChild(toggle);
    
    // 確保hover時也顯示面板
    panel.addEventListener('mouseenter', function() {
        if (!panel.classList.contains('active')) {
            panel.classList.add('hover-active');
        }
    });
    
    panel.addEventListener('mouseleave', function() {
        if (!panel.classList.contains('active')) {
            panel.classList.remove('hover-active');
        }
    });
}

// 切換面板狀態
function togglePanel(panel) {
    // 獲取面板位置
    const position = panel.classList.contains('marker-controls') ? 'right' : 'left';
    
    // 切換激活狀態
    panel.classList.toggle('active');
    
    // 更新切換按鈕圖標
    const toggle = panel.querySelector('.panel-toggle');
    if (toggle) {
        if (panel.classList.contains('active')) {
            toggle.innerHTML = position === 'right' ? 
                '<i class="fas fa-chevron-right"></i>' : 
                '<i class="fas fa-chevron-left"></i>';
        } else {
            toggle.innerHTML = position === 'right' ? 
                '<i class="fas fa-chevron-left"></i>' : 
                '<i class="fas fa-chevron-right"></i>';
        }
    }
}

// 顯示特定面板
function showPanel(selector) {
    const panel = document.querySelector(selector);
    if (panel && !panel.classList.contains('active')) {
        panel.classList.add('active');
        
        // 更新切換按鈕
        const toggle = panel.querySelector('.panel-toggle');
        const position = panel.classList.contains('marker-controls') ? 'right' : 'left';
        
        if (toggle) {
            toggle.innerHTML = position === 'right' ? 
                '<i class="fas fa-chevron-right"></i>' : 
                '<i class="fas fa-chevron-left"></i>';
        }
    }
}

// 隱藏特定面板
function hidePanel(selector) {
    const panel = document.querySelector(selector);
    if (panel && panel.classList.contains('active')) {
        panel.classList.remove('active');
        
        // 更新切換按鈕
        const toggle = panel.querySelector('.panel-toggle');
        const position = panel.classList.contains('marker-controls') ? 'right' : 'left';
        
        if (toggle) {
            toggle.innerHTML = position === 'right' ? 
                '<i class="fas fa-chevron-left"></i>' : 
                '<i class="fas fa-chevron-right"></i>';
        }
    }
}

// 創建動態圖例
function createDynamicLegend() {
    const legendContainer = document.getElementById('map-legend-items');
    if (!legendContainer) return;
    
    legendContainer.innerHTML = ''; // 清空現有圖例
    
    // 使用資料庫中的地點類型
    if (window.plltWorldData && window.plltWorldData.categories) {
        // 確保所有類型都被顯示
        Object.entries(window.plltWorldData.categories).forEach(([type, data]) => {
            const icon = data.icon || 'fa-map-marker';
            const color = data.color || '#cccccc';
            
            // 創建圖例項目
            const legendItem = document.createElement('div');
            legendItem.className = 'legend-item';
            legendItem.dataset.type = type;
            legendItem.innerHTML = `
                <div class="legend-icon" style="background-color: ${color}">
                    <i class="fa-solid ${icon}"></i>
                </div>
                <span>${type}</span>
            `;
            
            // 添加點擊事件，可以用於篩選地圖上的標記
            legendItem.addEventListener('click', function() {
                console.log(`點擊了類別: ${type}`);
                toggleTypeVisibility(type);
            });
            
            legendContainer.appendChild(legendItem);
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
            const legendItem = document.createElement('div');
            legendItem.className = 'legend-item';
            legendItem.dataset.type = item.type;
            legendItem.innerHTML = `
                <div class="legend-icon" style="background-color: ${item.color}">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <span>${item.type}</span>
            `;
            
            // 添加點擊事件
            legendItem.addEventListener('click', function() {
                console.log(`點擊了類別: ${item.type}`);
                toggleTypeVisibility(item.type);
            });
            
            legendContainer.appendChild(legendItem);
        });
    }
    
    // 確保圖例始終可見
    const mapLegend = document.querySelector('.map-legend');
    if (mapLegend) {
        mapLegend.style.display = 'block';
        mapLegend.style.visibility = 'visible';
        mapLegend.style.opacity = '0.95';
        // 添加小提示
        const legendHint = document.createElement('div');
        legendHint.className = 'legend-hint';
        legendHint.textContent = '點擊類型以篩選顯示';
        legendHint.style.fontSize = '12px';
        legendHint.style.opacity = '0.7';
        legendHint.style.textAlign = 'center';
        legendHint.style.marginTop = '10px';
        mapLegend.appendChild(legendHint);
    }
}

// 切換特定類型標記的可見性
function toggleTypeVisibility(type) {
    if (!window.plltWorldData || !window.plltWorldData.locations) return;
    
    // 獲取此類型的圖例項目
    const legendItem = document.querySelector(`.legend-item[data-type="${type}"]`);
    if (!legendItem) return;
    
    // 切換激活狀態
    const isActive = legendItem.classList.toggle('active');
    
    // 更新樣式
    if (isActive) {
        legendItem.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    } else {
        legendItem.style.backgroundColor = '';
    }
    
    // 查找地圖上所有此類型的標記
    const typeMarkers = window.plltWorldData.locations.filter(loc => loc.type === type);
    
    typeMarkers.forEach(location => {
        if (location.markerRef) {
            const marker = location.markerRef;
            
            if (isActive) {
                // 高亮顯示此類型
                const icon = marker.getElement();
                if (icon) {
                    const markerDiv = icon.querySelector('.custom-marker');
                    if (markerDiv) {
                        markerDiv.style.transform = 'scale(1.3)';
                        markerDiv.style.boxShadow = '0 0 10px white';
                        markerDiv.style.zIndex = '1000';
                    }
                }
            } else {
                // 恢復正常顯示
                const icon = marker.getElement();
                if (icon) {
                    const markerDiv = icon.querySelector('.custom-marker');
                    if (markerDiv) {
                        markerDiv.style.transform = '';
                        markerDiv.style.boxShadow = '';
                        markerDiv.style.zIndex = '';
                    }
                }
            }
        }
    });
    
    // 顯示提示
    showToast(`${type}類型標記已${isActive ? '突出顯示' : '恢復正常'}`);
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

// 模塊導出
window.uiModule = {
    initializeCollapsiblePanels,
    createDynamicLegend,
    createToastElement,
    showToast,
    createCustomScaleControl,
    toggleTypeVisibility,
    showPanel,
    hidePanel,
    togglePanel
};
