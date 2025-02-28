/**
 * 地點類型過濾模塊
 * 提供地圖標記點過濾功能
 */

// 地點類型過濾功能
function setupLocationFilter() {
    console.log('初始化地點類型過濾器...');
    
    // 確保map可用
    if (!window.map) {
        console.error('地圖未初始化，無法創建過濾器');
        return;
    }
    
    // 創建過濾控制器容器，改為自定義位置避免縱軸重疊
    const filterControl = L.control({ position: 'custom' }); // 使用自定義位置
    
    // 擴展自定義控制器位置
    L.Control.prototype.setPosition = function (position) {
        var corner = this._map._controlCorners[position];
        
        if (position === 'custom') {
            // 不將控制元件添加到角落，而是讓它使用絕對定位
            this._container.style.position = 'absolute'; 
            return this;
        }
        
        // 正常處理其他位置
        L.DomUtil.addClass(this._container, 'leaflet-control');
        if (corner) {
            corner.appendChild(this._container);
        }
        
        return this;
    };
    
    filterControl.onAdd = function() {
        const container = L.DomUtil.create('div', 'location-type-filter');
        
        // 將容器明確設定右邊定位，移除 left 的設定
        container.style.top = '200px'; // 下移避免重疊
        container.style.left = 'auto';  // 清除 left 定位
        container.style.right = '-135px'; // 保持露出約1/4
        container.style.visibility = 'visible';
        container.style.display = 'block';
        container.style.position = 'absolute';
        container.style.zIndex = '950';
        
        // 初始化HTML
        let filterHTML = `
            <div class="filter-title">顯示地點類型</div>
            <div class="filter-options">
                <label><input type="checkbox" data-type="all" checked> 全部</label>
        `;
        
        // 從locationCategories中獲取所有類型
        if (window.plltWorldData && window.plltWorldData.categories) {
            Object.keys(window.plltWorldData.categories).forEach(type => {
                filterHTML += `<label><input type="checkbox" data-type="${type}" checked> ${type}</label>`;
            });
        } else {
            // 備用選項，如果無法訪問categories
            const defaultTypes = ["首都", "城市", "城鎮", "要塞", "哨站", "平原", "森林", "山", "水域", "秘境", "自定義"];
            defaultTypes.forEach(type => {
                filterHTML += `<label><input type="checkbox" data-type="${type}" checked> ${type}</label>`;
            });
        }
        
        filterHTML += `</div>`;
        container.innerHTML = filterHTML;
        
        // 添加緩沖區，減少懸浮時的抽搐
        const bufferZone = L.DomUtil.create('div', 'buffer-zone right');
        container.appendChild(bufferZone);
        
        // 優化懸浮行為
        let isTransitioning = false;
        
        container.addEventListener('mouseenter', function() {
            if (isTransitioning) return; // 忽略過渡中的事件
            this.classList.add('hover-active');
            isTransitioning = true;
            setTimeout(() => { isTransitioning = false; }, 400);
        });
        
        container.addEventListener('mouseleave', function() {
            if (isTransitioning) return; // 忽略過渡中的事件
            setTimeout(() => {
                this.classList.remove('hover-active');
                isTransitioning = true;
                setTimeout(() => { isTransitioning = false; }, 400);
            }, 200);
        });
        
        // 阻止地圖事件傳播，以便能正常使用控制項
        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.disableScrollPropagation(container);
        
        setTimeout(() => {
            // 為過濾選項添加事件監聽
            const checkboxes = container.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', handleFilterChange);
            });
            
            // 添加懸停提示
            const filterTip = document.createElement('div');
            filterTip.className = 'filter-tip';
            filterTip.textContent = '滑鼠懸停顯示過濾器';
            filterTip.style.cssText = 'position: absolute; right: 15px; top: 5px; font-size: 12px; color: #aaa; background-color: rgba(0,0,0,0.6); padding: 3px 6px; border-radius: 3px; pointer-events: none; opacity: 0.7;';
            document.body.appendChild(filterTip);
            
            // 5秒後隱藏提示
            setTimeout(() => {
                filterTip.style.opacity = '0';
                setTimeout(() => filterTip.remove(), 500);
            }, 5000);
        }, 100);
        
        return container;
    };
    
    filterControl.addTo(window.map);
    
    // CSS樣式已移至style.css
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
                location.markerRef.getElement().style.opacity = '1';
                location.markerRef.getElement().style.display = 'block';
            } else {
                // 隱藏該地點
                location.markerRef.getElement().style.opacity = '0.3';
                location.markerRef.getElement().style.display = 'block';
            }
        }
    });
    
    // 顯示過濾器應用提示
    if (window.uiModule && window.uiModule.showToast) {
        window.uiModule.showToast('已更新顯示的地點類型');
    }
}

// 導出模塊
window.filterModule = {
    setupLocationFilter,
    handleFilterChange,
    applyLocationFilter
};
