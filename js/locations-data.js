/**
 * PLLT World 地圖資料庫
 * 完全自定義的硬編碼地點資料庫系統
 */

// 地點分類信息 - 定義所有可用的地點類型及其屬性
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

// 硬編碼的地點資料 - 這裡可以直接放入匯出的資料
const hardcodedLocations = [
    {
      "id": "user-1740714905774",
      "name": "a",
      "description": "",
      "type": "自定義",
      "coords": [
        3153.7772689872163,
        9.513656920021768
      ],
      "createTime": "2025-02-28T03:55:05.774Z",
      "isDefault": false,
      "tags": []
    },
    {
      "id": "user-1740714910229",
      "name": "b",
      "description": "",
      "type": "自定義",
      "coords": [
        3434.4301481278585,
        -599.3603859613714
      ],
      "createTime": "2025-02-28T03:55:10.229Z",
      "isDefault": false,
      "tags": []
    },
    {
      "id": "user-1740714919484",
      "name": "c",
      "description": "",
      "type": "自定義",
      "coords": [
        3232,
        2800
      ],
      "createTime": "2025-02-28T03:55:19.484Z",
      "isDefault": false,
      "tags": []
    }
  ];

// 資料庫類別 - 管理所有地點資料
class LocationDatabase {
    constructor() {
        this.locations = [];
        this.dbVersion = 1;
        this.lastUpdated = new Date();
        this.load();
    }

    // 從硬編碼資料加載
    load() {
        try {
            this.locations = [...hardcodedLocations];
            this.dbVersion = 1;
            this.lastUpdated = new Date();
            console.log(`成功加載 ${this.locations.length} 個硬編碼地點`);
        } catch (error) {
            console.error('加載地點資料時出錯:', error);
            this.locations = [];
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
            locations: locationDb.locations,
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
            getLocationsJson: () => locationDb.getLocationsJson()
        };
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