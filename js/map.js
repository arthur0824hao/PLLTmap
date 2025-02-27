// 地圖初始設置
const mapConfig = {
    minZoom: -3,      // 更改為負數，允許更小的縮放級別（顯示更大範圍）
    maxZoom: 8,       // 增加到 8，允許更大的縮放級別（顯示細節）
    center: [0, 0],   // 中心點
    initialZoom: 0,   // 調整初始縮放級別為更小的值
    tileSize: 256,    // 瓦片大小
    attribution: 'Map data &copy; PLLT World'
};

// 初始化地圖
const map = L.map('map', {
    crs: L.CRS.Simple,  // 簡單坐標系統，適合架空世界
    minZoom: mapConfig.minZoom,
    maxZoom: mapConfig.maxZoom,
    zoomControl: false,  // 禁用默認縮放控制器
    attributionControl: false,  // 禁用默認歸屬控制器
    maxBoundsViscosity: 1.0,  // 最大邊界黏性，防止拖曳超出邊界（1.0表示完全阻止）
    bounceAtZoomLimits: false,  // 禁止在縮放時反彈
    inertia: true  // 啟用慣性拖曳
}).setView(mapConfig.center, mapConfig.initialZoom);

// 添加自定義縮放控制器
L.control.zoom({
    position: 'bottomright'
}).addTo(map);

// 添加歸屬信息
L.control.attribution({
    position: 'bottomright',
    prefix: false
}).addAttribution(mapConfig.attribution).addTo(map);

// 計算地圖邊界，使用實際圖片尺寸 8080×8192
const mapWidth = 8080;
const mapHeight = 8192;

// 添加一個小的邊距，確保使用者無法拖曳到邊緣之外
const paddingFactor = 0.02;  // 2% 的邊距
const paddingX = mapWidth * paddingFactor;
const paddingY = mapHeight * paddingFactor;

// 設置圖片邊界，與實際圖片尺寸一致，加上小邊距
const bounds = [
    [-(mapHeight/2 + paddingY), -(mapWidth/2 + paddingX)],  // 左下角坐標
    [(mapHeight/2 + paddingY), (mapWidth/2 + paddingX)]     // 右上角坐標
];

// 添加地圖圖層
// 本地開發使用相對路徑
// 修改這一行
const mapImageUrl = 'https://raw.githubusercontent.com/arthur0824hao/PLLTmap/main/images/map.jpg';
// 當部署到 GitHub 時使用這個路徑
// const mapImageUrl = 'https://raw.githubusercontent.com/arthur0824hao/PLLTmap/main/images/map.jpg';

L.imageOverlay(mapImageUrl, bounds).addTo(map);

// 設置地圖限制範圍，使用更嚴格的邊界限制
map.setMaxBounds(bounds);

// 添加嚴格的邊界保護
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
});

// 確保縮放後不會超出邊界
map.on('zoomend', function() {
    map.panInsideBounds(bounds, { animate: false });
});

// 為不同類型的地點設置不同顏色
const typeColors = {
    "主城": "#e74c3c",
    "水域": "#3498db",
    "森林": "#2ecc71",
    "秘境": "#f1c40f",
    "自定義": "#9b59b6"
};

// 添加一些標記點示例
// 你可以根據你的架空世界調整這些數據
const locations = [
    { name: "中央王國", coords: [200, 300], type: "主城", 
      description: "中央王國是該大陸最古老的王國之一，擁有悠久的歷史與文化。" },
    { name: "北方堡壘", coords: [800, 200], type: "主城", 
      description: "北方堡壘是抵禦北方蠻族的最後防線，城牆高聳，防禦力強。" },
    { name: "魔法森林", coords: [400, -200], type: "森林", 
      description: "魔法森林中棲息著許多奇幻生物，也是魔法師尋求材料的聖地。" },
    { name: "幽暗湖泊", coords: [-300, 400], type: "水域", 
      description: "傳說中幽暗湖泊深處住著遠古水龍，湖水有治療效果。" },
    { name: "失落神殿", coords: [-500, -500], type: "秘境", 
      description: "這座神殿在千年前突然消失，近年才被冒險家重新發現。" }
];

// 添加標記點
locations.forEach(location => {
    const marker = L.circleMarker(location.coords, {
        radius: 8,
        fillColor: typeColors[location.type] || "#9b59b6",
        color: "#fff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
    }).addTo(map);
    
    // 添加彈出信息
    const popupContent = `
        <div class="location-info">
            <h3>${location.name}</h3>
            <p><strong>類型:</strong> ${location.type}</p>
            <p>${location.description}</p>
        </div>
    `;
    marker.bindPopup(popupContent);
    
    // 鼠標懸停效果
    marker.on('mouseover', function() {
        this.setRadius(12);
    });
    marker.on('mouseout', function() {
        this.setRadius(8);
    });
});

// 添加比例尺
L.control.scale({
    imperial: false,
    position: 'bottomleft'
}).addTo(map);

// 自定義標記功能
// 初始化用戶標記數組
let userMarkers = [];

// 標記模式狀態
let addingMarker = false;

// 從本地存儲加載標記
const loadMarkers = () => {
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
};

// 保存標記到本地存儲
const saveMarkers = () => {
    localStorage.setItem('plltMapUserMarkers', JSON.stringify(userMarkers));
};

// 將標記添加到地圖上
const addMarkerToMap = (markerData) => {
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
            <button class="delete-marker-btn" data-id="${markerData.id}">刪除標記</button>
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
    
    // 處理彈出窗口中的刪除按鈕
    marker.on('popupopen', function() {
        document.querySelector(`.delete-marker-btn[data-id="${markerData.id}"]`)?.addEventListener('click', function() {
            deleteMarker(markerData.id);
        });
    });
};

// 更新標記列表
const updateMarkersList = () => {
    const listElement = document.getElementById('user-markers-list');
    listElement.innerHTML = '';
    
    userMarkers.forEach(marker => {
        const listItem = document.createElement('li');
        listItem.textContent = marker.name;
        listItem.addEventListener('click', () => {
            map.setView(marker.coords, 5);
            marker.markerRef.openPopup();
        });
        listElement.appendChild(listItem);
    });
};

// 刪除標記
const deleteMarker = (id) => {
    const markerIndex = userMarkers.findIndex(m => m.id === id);
    if (markerIndex !== -1) {
        // 從地圖中移除
        map.removeLayer(userMarkers[markerIndex].markerRef);
        // 從數組中移除
        userMarkers.splice(markerIndex, 1);
        // 更新存儲和列表
        saveMarkers();
        updateMarkersList();
    }
};

// 設置事件監聽器
const setupMarkerControls = () => {
    const addBtn = document.getElementById('add-marker-btn');
    const cancelBtn = document.getElementById('cancel-marker-btn');
    const saveBtn = document.getElementById('save-marker-btn');
    const markerForm = document.getElementById('marker-form');
    
    addBtn.addEventListener('click', () => {
        addingMarker = true;
        addBtn.style.display = 'none';
        cancelBtn.style.display = 'block';
        map.getContainer().style.cursor = 'crosshair';
    });
    
    cancelBtn.addEventListener('click', () => {
        addingMarker = false;
        addBtn.style.display = 'block';
        cancelBtn.style.display = 'none';
        markerForm.style.display = 'none';
        map.getContainer().style.cursor = '';
    });
    
    // 地圖點擊事件
    map.on('click', function(e) {
        if (addingMarker) {
            document.getElementById('marker-name').value = '';
            document.getElementById('marker-type').value = '自定義';
            document.getElementById('marker-description').value = '';
            markerForm.style.display = 'block';
            
            // 保存當前點擊的坐標
            markerForm.dataset.lat = e.latlng.lat;
            markerForm.dataset.lng = e.latlng.lng;
        }
    });
    
    // 保存標記
    saveBtn.addEventListener('click', () => {
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
            id: Date.now().toString(),
            name,
            type,
            description,
            coords
        };
        
        // 添加到數組
        userMarkers.push(newMarker);
        
        // 添加到地圖
        addMarkerToMap(newMarker);
        
        // 保存並更新列表
        saveMarkers();
        updateMarkersList();
        
        // 重設界面
        addingMarker = false;
        addBtn.style.display = 'block';
        cancelBtn.style.display = 'none';
        markerForm.style.display = 'none';
        map.getContainer().style.cursor = '';
    });
};

// 當頁面加載完成後執行
document.addEventListener('DOMContentLoaded', () => {
    setupMarkerControls();
    loadMarkers();
});