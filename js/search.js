/**
 * 地圖搜索功能模塊
 */

// 初始化搜索功能
function initializeSearch() {
    console.log('初始化搜索功能');
    const searchInput = document.getElementById('location-search');
    const clearButton = document.getElementById('clear-search-btn');
    const resultsContainer = document.getElementById('search-results');
    
    if (!searchInput || !clearButton || !resultsContainer) {
        console.error('搜索元素未找到，搜索功能初始化失敗');
        return;
    }
    
    let debounceTimeout = null;
    
    // 輸入事件處理 (帶防抖)
    searchInput.addEventListener('input', function() {
        clearButton.style.display = this.value ? 'block' : 'none';
        
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            const query = this.value.trim().toLowerCase();
            if (query.length > 0) {
                performSearch(query);
            } else {
                hideResults();
            }
        }, 300);
    });
    
    // 清除按鈕
    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        clearButton.style.display = 'none';
        hideResults();
    });
    
    // 隱藏結果
    function hideResults() {
        resultsContainer.style.display = 'none';
        resultsContainer.innerHTML = '';
    }
    
    // 執行搜索
    function performSearch(query) {
        // 確保有位置數據
        if (!window.plltWorldData || !window.plltWorldData.locations) {
            console.error('位置數據不可用');
            return;
        }
        
        // 模糊匹配位置名稱和描述
        const results = window.plltWorldData.locations.filter(loc => 
            loc.name.toLowerCase().includes(query) || 
            (loc.description && loc.description.toLowerCase().includes(query))
        );
        
        renderSearchResults(results);
    }
    
    // 渲染搜索結果
    function renderSearchResults(results) {
        resultsContainer.innerHTML = '';
        
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="search-result-item">找不到符合條件的地點</div>';
            resultsContainer.style.display = 'block';
            return;
        }
        
        // 限制結果數量，避免過多影響性能
        const maxResults = Math.min(results.length, 10);
        
        for (let i = 0; i < maxResults; i++) {
            const location = results[i];
            const item = createResultItem(location);
            resultsContainer.appendChild(item);
        }
        
        if (results.length > maxResults) {
            const moreItem = document.createElement('div');
            moreItem.className = 'search-result-item';
            moreItem.textContent = `...及其他 ${results.length - maxResults} 個結果`;
            moreItem.style.fontStyle = 'italic';
            moreItem.style.textAlign = 'center';
            resultsContainer.appendChild(moreItem);
        }
        
        resultsContainer.style.display = 'block';
    }
    
    // 創建單個結果項
    function createResultItem(location) {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        
        // 獲取位置類型的圖標和顏色
        const typeInfo = window.plltWorldData.categories[location.type] || {
            color: "#1abc9c",
            icon: "fa-map-pin"
        };
        
        // 創建位置圖標
        const icon = document.createElement('div');
        icon.style.width = '20px';
        icon.style.height = '20px';
        icon.style.borderRadius = '50%';
        icon.style.backgroundColor = typeInfo.color;
        icon.style.marginRight = '8px';
        icon.style.display = 'flex';
        icon.style.alignItems = 'center';
        icon.style.justifyContent = 'center';
        
        const iconI = document.createElement('i');
        iconI.className = `fa-solid ${typeInfo.icon} fa-xs`;
        iconI.style.color = 'white';
        icon.appendChild(iconI);
        
        // 創建名稱元素
        const name = document.createElement('span');
        name.textContent = location.name;
        name.title = location.description || '';
        
        // 組合結果項
        item.appendChild(icon);
        item.appendChild(name);
        
        // 點擊事件
        item.addEventListener('click', () => {
            navigateToLocation(location);
        });
        
        return item;
    }
    
    // 導航到位置
    function navigateToLocation(location) {
        if (!window.map) {
            console.error('地圖未初始化');
            return;
        }
        
        // 獲取坐標
        const coords = L.latLng(location.coords[0], location.coords[1]);
        
        // 移動地圖視角 (使用飛行動畫)
        window.map.flyTo(coords, window.map.getZoom());
        
        // 高亮標記
        highlightMarker(location);
        
        // 顯示提示
        if (window.uiModule && window.uiModule.showToast) {
            window.uiModule.showToast(`已定位到: ${location.name}`);
        }
        
        // 清空搜索
        searchInput.value = '';
        clearButton.style.display = 'none';
        hideResults();
    }
    
    // 高亮標記
    function highlightMarker(location) {
        if (!location.markerRef) return;
        
        const markerElement = location.markerRef.getElement();
        if (!markerElement) return;
        
        // 添加高亮類
        const markerIcon = markerElement.querySelector('.custom-marker');
        if (markerIcon) {
            // 移除之前可能存在的動畫類
            markerIcon.classList.remove('marker-highlight');
            
            // 強制重繪DOM以確保動畫重新開始
            void markerIcon.offsetWidth;
            
            // 添加高亮類，啟動3次閃爍動畫
            markerIcon.classList.add('marker-highlight');
            
            // 動畫結束後移除高亮類
            setTimeout(() => {
                markerIcon.classList.remove('marker-highlight');
            }, 3000); // 總共3秒完成三次閃爍
        }
    }
}

// 導出模塊
window.searchModule = {
    initializeSearch
};
