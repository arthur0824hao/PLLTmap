/**
 * PLLT World 地圖資料庫
 * 完全自定義的地點資料庫系統
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

// 資料庫類別 - 管理所有地點資料
class LocationDatabase {
    constructor() {
        this.locations = [];
        this.dbVersion = 1;
        this.lastUpdated = new Date();
        this.load();
    }

    // 從本地存儲加載資料
    load() {
        try {
            const savedData = localStorage.getItem('plltWorldLocations');
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                // 確保加載的資料格式正確
                if (Array.isArray(parsedData.locations)) {
                    this.locations = parsedData.locations;
                    this.dbVersion = parsedData.dbVersion || 1;
                    this.lastUpdated = new Date(parsedData.lastUpdated || Date.now());
                    console.log(`成功加載 ${this.locations.length} 個地點`);
                }
            }
        } catch (error) {
            console.error('加載地點資料時出錯:', error);
            this.locations = [];
        }
    }

    // 保存資料到本地存儲
    save() {
        try {
            // 更新版本和時間戳
            this.dbVersion += 1;
            this.lastUpdated = new Date();
            
            // 移除所有 markerRef 引用（這些是運行時物件，不應該保存）
            const locationsToSave = this.locations.map(location => {
                const { markerRef, ...rest } = location;
                return rest;
            });
            
            // 構建要保存的資料結構
            const dataToSave = {
                locations: locationsToSave,
                dbVersion: this.dbVersion,
                lastUpdated: this.lastUpdated.toISOString()
            };
            
            // 保存到 localStorage
            localStorage.setItem('plltWorldLocations', JSON.stringify(dataToSave));
            console.log(`成功保存 ${locationsToSave.length} 個地點`);
            return true;
        } catch (error) {
            console.error('保存地點資料時出錯:', error);
            return false;
        }
    }
    
    // 添加新地點
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
        
        // 添加到地點列表
        this.locations.push(newLocation);
        
        // 自動保存
        this.save();
        
        return newLocation;
    }
    
    // 更新現有地點
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
        
        // 自動保存
        this.save();
        
        return this.locations[index];
    }
    
    // 刪除地點
    deleteLocation(id) {
        const index = this.locations.findIndex(loc => loc.id === id);
        if (index === -1) {
            console.error('未找到要刪除的地點:', id);
            return null;
        }
        
        const deletedLocation = this.locations[index];
        this.locations.splice(index, 1);
        
        // 自動保存
        this.save();
        
        return deletedLocation;
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
}

// 創建資料庫實例
const locationDb = new LocationDatabase();

// 監聽鍵盤事件，當按下 "s" 鍵時保存所有地點
document.addEventListener('keydown', function(e) {
    if (e.key === 's' || e.key === 'S') {
        e.preventDefault(); // 防止瀏覽器默認的保存行為
        if (locationDb.save()) {
            console.log('所有地點已手動保存！');
            // 如果UI中有提示功能，可以使用
            if (typeof showToast === 'function') {
                showToast('所有地點已保存！');
            } else {
                alert('所有地點已保存！');
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
            saveUserLocations: () => locationDb.save(),
            getLocationsByType: (type) => locationDb.getLocationsByType(type),
            searchLocations: (query) => locationDb.searchLocationsByName(query),
            getStats: () => locationDb.getStats()
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