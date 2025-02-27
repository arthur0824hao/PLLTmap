// 地圖初始設置
const mapConfig = {
    minZoom: 2,
    maxZoom: 6,
    center: [0, 0],  // 中心點
    initialZoom: 3,  // 初始縮放級別
    tileSize: 256,   // 瓦片大小
    attribution: 'Map data &copy; PLLT World'
};

// 初始化地圖
const map = L.map('map', {
    crs: L.CRS.Simple,  // 簡單坐標系統，適合架空世界
    minZoom: mapConfig.minZoom,
    maxZoom: mapConfig.maxZoom,
    zoomControl: false,  // 禁用默認縮放控制器
    attributionControl: false  // 禁用默認歸屬控制器
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

// 計算地圖邊界
const mapSize = 4096;  // 假設你的完整地圖尺寸是 4096x4096 像素
const bounds = [
    [-mapSize/2, -mapSize/2],  // 左下角坐標
    [mapSize/2, mapSize/2]     // 右上角坐標
];

// 添加地圖圖層
// 本地開發使用相對路徑
const mapImageUrl = 'images/map.jpg';
L.imageOverlay(mapImageUrl, bounds).addTo(map);

// 設置地圖限制範圍，防止用戶滾動到地圖之外
map.setMaxBounds(bounds);

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

// 為不同類型的地點設置不同顏色
const typeColors = {
    "主城": "#e74c3c",
    "水域": "#3498db",
    "森林": "#2ecc71",
    "秘境": "#f1c40f"
};

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

// 在map.js中添加這段代碼來使用自定義圖標
const customIcon = L.icon({
    iconUrl: 'images/marker-icon.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// 然後在創建標記時使用它
L.marker(location.coords, {icon: customIcon}).addTo(map);

// 添加比例尺
L.control.scale({
    imperial: false,
    position: 'bottomleft'
}).addTo(map);