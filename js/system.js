/**
 * 簡化的系統工具模塊
 * 只保留基本功能
 */

// 簡化的系統檢查器
const systemChecker = {
    // 執行基本檢查
    checkSystem: function() {
        console.log('執行系統檢查...');
        
        // 檢查地圖
        if (window.map) {
            console.log('✓ 地圖已初始化');
        } else {
            console.error('✗ 地圖未初始化');
        }
        
        // 檢查數據庫
        if (window.plltWorldData) {
            console.log(`✓ 數據庫已加載，包含 ${window.plltWorldData.locations.length} 個地點`);
        } else {
            console.error('✗ 數據庫未加載');
        }
        
        // 檢查模塊
        const modules = ['uiModule', 'markersModule', 'distanceModule', 'filterModule'];
        modules.forEach(module => {
            if (window[module]) {
                console.log(`✓ ${module} 已加載`);
            } else {
                console.error(`✗ ${module} 未加載`);
            }
        });
        
        console.log('系統檢查完成');
    }
};

// 簡單的錯誤日誌
const simpleLogger = {
    logError: function(message) {
        console.error('錯誤：', message);
    },
    
    logInfo: function(message) {
        console.log('信息：', message);
    }
};

// 導出簡化的系統工具
window.systemTools = {
    checker: systemChecker,
    logger: simpleLogger
};

// 初始化時執行系統檢查
window.addEventListener('load', function() {
    setTimeout(systemChecker.checkSystem, 2000);
});
