/**
 * PLLT World 地圖資料庫
 * 完全自定義的硬編碼地點資料庫系統
 */

// 地點分類信息 - 定義所有可用的地點類型及其屬性
const locationCategories = {
    "首都": {
        color: "#e74c3c", // 紅色
        icon: "fa-crown", // 皇冠圖標
        description: "國家或區域的政治中心，通常擁有最完善的基礎設施和防禦系統"
    },
    "城市": {
        color: "#d35400", // 深橘色
        icon: "fa-city", // 城市圖標
        description: "大型居民聚集地，有完善的商業中心和基礎建設"
    },
    "城鎮": {
        color: "#f39c12", // 黃色
        icon: "fa-house-chimney", // 房屋圖標
        description: "中小型居民聚集地，有基本的商業和生活設施"
    },
    "要塞": {
        color: "#8e44ad", // 深紫色
        icon: "fa-shield-halved", // 盾牌圖標
        description: "軍事防禦建築，通常位於戰略要地"
    },
    "哨站": {
        color: "#9b59b6", // 淺紫色
        icon: "fa-binoculars", // 望遠鏡圖標
        description: "邊境或戰略位置的小型防禦或監視站"
    },
    "平原": {
        color: "#f1c40f", // 金色
        icon: "fa-mountain-sun", // 平原圖標
        description: "開闊的平坦地形，適合農耕或行軍"
    },
    "森林": {
        color: "#2ecc71", // 綠色
        icon: "fa-tree", // 樹木圖標
        description: "茂密的樹林，通常有豐富的自然資源和隱匿的生物"
    },
    "山": {
        color: "#95a5a6", // 灰色
        icon: "fa-mountain", // 山峰圖標
        description: "高聳的地形，可能蘊含礦產資源或作為天然屏障"
    },
    "水域": {
        color: "#3498db", // 藍色
        icon: "fa-water", // 水波圖標
        description: "河流、湖泊等水體，可能蘊含特殊的魔法屬性或神秘生物"
    },
    "秘境": {
        color: "#e67e22", // 深橙色
        icon: "fa-dungeon", // 神秘地牢圖標
        description: "神秘且難以到達的地區，常藏有珍寶或古老的知識"
    },
    "自定義": {
        color: "#1abc9c", // 青色
        icon: "fa-map-pin", // 圖釘圖標
        description: "由玩家自行定義的地點類型"
    }
};

// 硬編碼的地點資料 - 這裡可以直接放入匯出的資料
const hardcodedLocations = [
    {
      "id": "loc-1740745898438-wjiy8qx",
      "name": "托斯特鎮",
      "description": "66666666",
      "type": "城鎮",
      "coords": [
        -1381,
        -2627
      ],
      "createTime": "2025-02-28T12:31:38.438Z",
      "isDefault": false,
      "tags": []
    },
    {
      "id": "loc-1740746056959-ysasaz5",
      "name": "奇納勒島",
      "description": "10101010",
      "type": "秘境",
      "coords": [
        -1076,
        -2194
      ],
      "createTime": "2025-02-28T12:34:16.959Z",
      "isDefault": false,
      "tags": []
    },
    {
      "id": "loc-1740745969006-venripl",
      "name": "迪沙特山",
      "description": "888888888",
      "type": "山",
      "coords": [
        -1334,
        -2408
      ],
      "createTime": "2025-02-28T12:32:49.006Z",
      "isDefault": false,
      "tags": []
    },
    {
      "id": "loc-1740745680542-o7l5j2j",
      "name": "桑圭亞流域",
      "description": "1111111111",
      "type": "森林",
      "coords": [
        -1713.5,
        -2649.5
      ],
      "createTime": "2025-02-28T12:28:00.542Z",
      "isDefault": false,
      "tags": []
    },
    {
      "id": "loc-1740745738230-ewz4fcr",
      "name": "紐特奧城",
      "description": "33333333333",
      "type": "首都",
      "coords": [
        -1502.6019100214135,
        -2761.2519805334678
      ],
      "createTime": "2025-02-28T12:28:58.230Z",
      "isDefault": false,
      "tags": []
    },
    {
      "id": "loc-1740745838430-9kwpwsf",
      "name": "凱歐司沙漠",
      "description": "55555555555",
      "type": "自定義",
      "coords": [
        -1426.9414844344528,
        -2526.4925291795344
      ],
      "createTime": "2025-02-28T12:30:38.431Z",
      "isDefault": false,
      "tags": []
    },
    {
      "id": "loc-1740745990758-rb6okx5",
      "name": "溫特灣",
      "description": "999999",
      "type": "水域",
      "coords": [
        -1157,
        -2445
      ],
      "createTime": "2025-02-28T12:33:10.758Z",
      "isDefault": false,
      "tags": []
    },
    {
      "id": "loc-1740745715950-ccqt54a",
      "name": "蒙姆要塞",
      "description": "222222222222",
      "type": "要塞",
      "coords": [
        -1618.5674221360073,
        -2636.8011870446358
      ],
      "createTime": "2025-02-28T12:28:35.950Z",
      "isDefault": false,
      "tags": []
    },
    {
      "id": "loc-1740745783990-biqh58m",
      "name": "豪費斯特哨站",
      "description": "44444444444",
      "type": "哨站",
      "coords": [
        -1425.5272708720797,
        -2810.7494552165263
      ],
      "createTime": "2025-02-28T12:29:43.990Z",
      "isDefault": false,
      "tags": []
    },
    {
      "id": "loc-1740745935422-85q19h8",
      "name": "蘇蒙特平原",
      "description": "7777777",
      "type": "平原",
      "coords": [
        -1436,
        -2732
      ],
      "createTime": "2025-02-28T12:32:15.422Z",
      "isDefault": false,
      "tags": []
    }
  ];

// 資料庫類別 - 管理所有地點資料
class LocationDatabase {
    constructor() {
        console.log('初始化位置數據庫...');
        this.locations = [];
        this.dbVersion = 1;
        this.lastUpdated = new Date();
        
        // 構造函數中不要立即加載，因為在腳本執行順序中可能出現問題
        // 改為提供明確的加載方法，隨後在適當時機調用
    }

    // 從硬編碼資料加載 - 修正為明確加載 hardcodedLocations 數組
    load() {
        try {
            console.log('【數據庫】正在加載硬編碼地點數據...');
            
            // 清空現有數據以避免重複
            this.locations = [];
            
            // 確認 hardcodedLocations 存在且為數組
            if (typeof hardcodedLocations === 'undefined' || !Array.isArray(hardcodedLocations)) {
                console.error('【數據庫】hardcodedLocations 未定義或不是數組!');
                return [];
            }
            
            console.log(`【數據庫】找到 ${hardcodedLocations.length} 個硬編碼地點，開始加載...`);
            
            // 複製每個地點對象，避免直接引用
            hardcodedLocations.forEach((location, index) => {
                const locationCopy = JSON.parse(JSON.stringify(location)); // 深拷貝
                this.locations.push(locationCopy);
                console.log(`【數據庫】已加載地點 ${index+1}/${hardcodedLocations.length}: ${locationCopy.name}`);
            });
            
            console.log(`【數據庫】成功加載 ${this.locations.length} 個硬編碼地點`);
            
            // 觸發加載完成事件
            const event = new CustomEvent('plltWorldDataLoaded', {
                detail: { count: this.locations.length }
            });
            document.dispatchEvent(event);
            
            return this.locations;
        } catch (error) {
            console.error('【數據庫】加載地點資料時出錯:', error);
            this.locations = [];
            return [];
        }
    }

    // 獲取所有地點的 JSON 格式（用於匯出複製到硬編碼）
    getLocationsJson() {
        // 移除所有 markerRef 引用（這些是運行時物件，不應該保存）
        const locationsToExport = this.locations.map(location => {
            const { markerRef, ...rest } = location;
            return rest;
        });
        
        // 返回格式化的 JSON 字符串
        return JSON.stringify(locationsToExport, null, 4);
    }
    
    // 添加新地點（僅運行時有效）
    addLocation(locationData) {
        // 確保地點資料具有必要欄位
        if (!locationData.name || !locationData.coords || !locationData.type) {
            console.error('地點資料不完整', locationData);
            return null;
        }
        
        // 創建新地點物件
        const newLocation = {
            id: locationData.id || 'loc-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9),
            name: locationData.name,
            description: locationData.description || '',
            type: locationData.type || '自定義',
            coords: locationData.coords,
            createTime: locationData.createTime || new Date().toISOString(),
            isDefault: locationData.isDefault || false,
            tags: locationData.tags || []
        };
        
        // 添加到地點列表（僅運行時有效）
        this.locations.push(newLocation);
        
        // 通知資料變更
        this.notifyDataChange();
        
        return newLocation;
    }
    
    // 更新現有地點（僅運行時有效）
    updateLocation(id, updatedData) {
        const index = this.locations.findIndex(loc => loc.id === id);
        if (index === -1) {
            console.error('未找到要更新的地點:', id);
            return null;
        }
        
        // 保留舊地點的基本欄位和 markerRef
        const oldLocation = this.locations[index];
        const { markerRef } = oldLocation;
        
        // 更新地點資料，但保留ID和創建時間
        this.locations[index] = {
            ...oldLocation,
            ...updatedData,
            id: oldLocation.id,
            createTime: oldLocation.createTime,
            markerRef: markerRef
        };
        
        // 通知資料變更
        this.notifyDataChange();
        
        return this.locations[index];
    }
    
    // 刪除地點（僅運行時有效）
    deleteLocation(id) {
        const index = this.locations.findIndex(loc => loc.id === id);
        if (index === -1) {
            console.error('未找到要刪除的地點:', id);
            return null;
        }
        
        const deletedLocation = this.locations[index];
        this.locations.splice(index, 1);
        
        // 通知資料變更
        this.notifyDataChange();
        
        return deletedLocation;
    }
    
    // 匯入多個地點（僅運行時有效）
    importLocations(locationsArray, clearExisting = false) {
        if (!Array.isArray(locationsArray)) {
            console.error('匯入的地點資料必須是數組');
            return false;
        }
        
        // 清除現有標記（如果需要）
        if (clearExisting) {
            // 保留 markerRef 引用供後續清除地圖標記
            const oldLocations = [...this.locations];
            this.locations = [];
            
            // 通知資料變更
            this.notifyDataChange();
            
            return {
                success: true,
                oldLocations: oldLocations,
                importCount: 0
            };
        }
        
        // 添加匯入的地點
        let addedCount = 0;
        locationsArray.forEach(locationData => {
            // 檢查ID是否已存在
            const exists = this.locations.some(loc => loc.id === locationData.id);
            
            // 為已存在的生成新ID
            if (exists) {
                locationData.id = 'import-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9);
            }
            
            // 移除可能存在的 markerRef
            const { markerRef, ...cleanData } = locationData;
            
            // 添加到位置數組
            this.locations.push(cleanData);
            addedCount++;
        });
        
        // 通知資料變更
        this.notifyDataChange();
        
        return {
            success: true,
            importCount: addedCount
        };
    }
    
    // 取得所有地點
    getAllLocations() {
        return this.locations;
    }
    
    // 依類型過濾地點
    getLocationsByType(type) {
        if (!type || type === 'all') {
            return this.locations;
        }
        return this.locations.filter(loc => loc.type === type);
    }
    
    // 依名稱搜尋地點
    searchLocationsByName(query) {
        if (!query) return this.locations;
        
        const lowercaseQuery = query.toLowerCase();
        return this.locations.filter(loc => 
            loc.name.toLowerCase().includes(lowercaseQuery) ||
            loc.description.toLowerCase().includes(lowercaseQuery)
        );
    }
    
    // 取得資料庫統計資料
    getStats() {
        // 計算每種類型的地點數量
        const typeCount = {};
        this.locations.forEach(loc => {
            typeCount[loc.type] = (typeCount[loc.type] || 0) + 1;
        });
        
        return {
            totalLocations: this.locations.length,
            typeDistribution: typeCount,
            dbVersion: this.dbVersion,
            lastUpdated: this.lastUpdated
        };
    }
    
    // 獲取完整的資料庫資訊（用於匯出）
    getFullDatabase() {
        // 移除 markerRef
        const cleanLocations = this.locations.map(location => {
            const { markerRef, ...rest } = location;
            return rest;
        });
        
        return {
            locations: cleanLocations,
            dbVersion: this.dbVersion,
            lastUpdated: this.lastUpdated
        };
    }
    
    // 通知資料變更（僅用於即時通知，不會永久保存）
    notifyDataChange() {
        this.dbVersion += 1;
        this.lastUpdated = new Date();
        
        // 觸發自定義事件，以便其他組件可以訂閱數據更新
        const event = new CustomEvent('plltWorldDataUpdated', { 
            detail: { 
                type: 'locations',
                count: this.locations.length,
                version: this.dbVersion
            } 
        });
        document.dispatchEvent(event);
        
        // 顯示 toast 消息
        if (typeof showToast === 'function') {
            showToast(`資料已更新 (${this.locations.length} 個地點)`);
        }
        
        console.log('資料已更新', {
            count: this.locations.length,
            version: this.dbVersion
        });
    }
}

// 創建資料庫實例
const locationDb = new LocationDatabase();

// 明確執行加載 - 確保硬編碼地點被加載
console.log('【數據庫】明確調用 load() 方法加載數據');
const loadedLocations = locationDb.load();
console.log(`【數據庫】load() 方法返回了 ${loadedLocations.length} 個地點`);

// 監聽鍵盤事件，當按下 "e" 鍵時匯出所有地點的 JSON
document.addEventListener('keydown', function(e) {
    if (e.key === 'e' || e.key === 'E') {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault(); // 防止瀏覽器默認行為
            const jsonData = locationDb.getLocationsJson();
            console.log('========== 複製以下 JSON 到 hardcodedLocations 陣列 ==========');
            console.log(jsonData);
            
            // 嘗試複製到剪貼簿
            try {
                navigator.clipboard.writeText(jsonData).then(() => {
                    if (typeof showToast === 'function') {
                        showToast('已複製地點 JSON 到剪貼簿！');
                    } else {
                        alert('已複製地點 JSON 到剪貼簿！請貼入到 locations-data.js 中的 hardcodedLocations 陣列');
                    }
                });
            } catch (err) {
                console.error('無法複製到剪貼簿:', err);
                if (typeof showToast === 'function') {
                    showToast('請從控制台複製 JSON 資料');
                } else {
                    alert('請從瀏覽器控制台複製 JSON 資料！');
                }
            }
        }
    }
});

// 匯出資料庫供其他腳本使用
try {
    // 瀏覽器環境
    if (typeof window !== 'undefined') {
        window.plltWorldData = {
            locations: locationDb.locations, // 直接使用 locationDb.locations 確保引用最新數據
            categories: locationCategories,
            
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
            
            // 提供重新加載方法 - 允許隨時刷新數據
            reload: () => {
                locationDb.load();
                return locationDb.locations;
            }
        };
        
        console.log(`【數據庫】已將 plltWorldData 掛載到 window，包含 ${window.plltWorldData.locations.length} 個地點`);
        
        // 輸出每個位置的名稱，以便於調試
        window.plltWorldData.locations.forEach((loc, idx) => {
            console.log(`【數據庫】位置 ${idx+1}: ${loc.name} (${loc.type})`);
        });
    } 
    // Node.js環境
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            db: locationDb,
            categories: locationCategories
        };
    }
} catch (e) {
    console.error('無法初始化地圖資料:', e);
}