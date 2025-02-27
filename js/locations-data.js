/**
 * PLLT World 地圖資料庫
 * 完全自定義的地點資料庫
 */

// 地圖上的預設地點數據 - 保留空陣列以便統一接口
const defaultLocations = [];

// 載入用戶儲存的地點
function loadUserLocations() {
    const savedLocations = localStorage.getItem('plltWorldUserLocations');
    if (savedLocations) {
        try {
            const userLocations = JSON.parse(savedLocations);
            return userLocations;
        } catch (e) {
            console.error('無法解析用戶地點數據:', e);
            return [];
        }
    }
    return [];
}

// 合併預設和用戶地點 (實際上只有用戶地點)
const allLocations = [...loadUserLocations()];

// 地點分類信息
const locationCategories = {
    "主城": {
        color: "#e74c3c",
        description: "主要城市和居民聚集地，通常有完善的防禦設施和商業中心"
    },
    "水域": {
        color: "#3498db",
        description: "河流、湖泊等水體，可能蘊含特殊的魔法屬性或神秘生物"
    },
    "森林": {
        color: "#2ecc71",
        description: "茂密的樹林，通常有豐富的自然資源和隱匿的生物"
    },
    "秘境": {
        color: "#f1c40f",
        description: "神秘且難以到達的地區，常藏有珍寶或古老的知識"
    },
    "自定義": {
        color: "#9b59b6",
        description: "由玩家自行定義的地點類型"
    }
};

// 區域勢力範圍
const territoryData = [];

// 旅行路線資料
const routeData = [];

// 地圖版本與元數據
const mapMetadata = {
    version: "2.0.0",
    lastUpdated: "2025-02-28",
    author: "PLLT世界創作團隊",
    license: "CC BY-NC-SA 4.0",
    description: "PLLT架空世界的自定義地圖資料",
    gridSize: 100, // 每個格子代表的單位距離
    scale: "1:10000", // 地圖比例尺
    compassDirection: "north" // 地圖上方對應的實際方向
};

// 保存用戶地點數據到本地存儲
function saveUserLocations(locations) {
    try {
        // 所有地點都是用戶地點
        localStorage.setItem('plltWorldUserLocations', JSON.stringify(locations));
        
        // 更新版本信息
        localStorage.setItem('plltWorldDataVersion', Date.now().toString());
        console.log('已保存用戶地點數據', locations.length);
        
        return true;
    } catch (e) {
        console.error('保存用戶地點數據時出錯:', e);
        return false;
    }
}

// 添加一個新的用戶定義地點
function addUserLocation(location) {
    if (!location.id) {
        location.id = 'user-' + Date.now();
    }
    
    // 添加創建時間
    if (!location.createTime) {
        location.createTime = new Date().toISOString();
    }
    
    // 添加到全局數組
    allLocations.push(location);
    
    // 保存到本地存儲
    saveUserLocations(allLocations);
    
    return location;
}

// 刪除一個地點
function deleteLocation(locationId) {
    const index = allLocations.findIndex(loc => loc.id === locationId);
    if (index !== -1) {
        const location = allLocations[index];
        allLocations.splice(index, 1);
        
        // 保存更改
        saveUserLocations(allLocations);
        return location;
    }
    return null;
}

// 匯出數據供其他腳本使用
try {
    // 瀏覽器環境
    if (typeof window !== 'undefined') {
        window.plltWorldData = {
            locations: allLocations,
            categories: locationCategories,
            territories: territoryData,
            routes: routeData,
            metadata: mapMetadata,
            
            // 匯出函數
            addUserLocation: addUserLocation,
            deleteLocation: deleteLocation,
            saveUserLocations: saveUserLocations
        };
    } 
    // Node.js環境
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            locations: allLocations,
            categories: locationCategories,
            territories: territoryData,
            routes: routeData,
            metadata: mapMetadata,
            
            // 匯出函數
            addUserLocation: addUserLocation,
            deleteLocation: deleteLocation,
            saveUserLocations: saveUserLocations
        };
    }
} catch (e) {
    console.error('無法初始化地圖資料:', e);
}