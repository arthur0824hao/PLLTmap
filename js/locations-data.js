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


// PLLT World 地圖位置數據 - 由匯出工具生成於 2025/3/11 下午8:15:07
// 複製下列內容到 locations-data.js 文件中的 hardcodedLocations 數組部分

const hardcodedLocations = [
  {
    id: "loc-1740822490248-oshx1qq",
    name: "瑞路奇雅王都",
    description: "烏斯克蘭的王城，同時也是最為繁榮的都市與政治中心",
    type: "首都",
    coords: [
      -1243.6857981602438,
      -2026.560360761452
    ],
    createTime: "2025-03-01T09:48:10.248Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822507528-f68cpa4",
    name: "史庫隆港",
    description: "傑米諾斯北島最鄰近賽庫溫多大陸的港口都市，同時作為與庫坦帝國接近的前線都市與貿易上的繁榮港口",
    type: "城市",
    coords: [
      -1220.1406985331398,
      -2195.5805402274486
    ],
    createTime: "2025-03-01T09:48:27.528Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822523080-8bkgnvb",
    name: "紮托卡港",
    description: "位於傑米諾斯北方離島上的港口城市，盛產大量的海上特產與漁獲，由於優秀的地理位置也是極為優秀的港口",
    type: "城市",
    coords: [
      -1101.574303982366,
      -2072.8096636004066
    ],
    createTime: "2025-03-01T09:48:43.080Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822537840-phvg9en",
    name: "普瑟城",
    description: "位於溫特灣外側的礦山城市，出產著許多大陸特有的礦產，但由於接攘庫坦帝國，時刻有重兵把守並警戒著",
    type: "城市",
    coords: [
      -1147.8236068213205,
      -2312.465141947715
    ],
    createTime: "2025-03-01T09:48:57.840Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822553208-ob87676",
    name: "波諾科斯城",
    description: "建立在富利古希恩山脈山腳下的港口城市，主要出產礦物及防備山脈中可能爆發的獸潮",
    type: "城市",
    coords: [
      -1043.5524513298599,
      -2319.192313269745
    ],
    createTime: "2025-03-01T09:49:13.208Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822567696-zq3q44z",
    name: "普斯尼亞城",
    description: "為了鞏固雷奈沙灣缺口所新建的沙漠城市，後來才在周邊發現礦產，由烏斯克蘭王國與列艾尼亞共同防守",
    type: "城市",
    coords: [
      -1411.0241847957332,
      -2366.282512523953
    ],
    createTime: "2025-03-01T09:49:27.696Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822581160-8g34dn0",
    name: "巴坎要塞",
    description: "烏斯克蘭海軍及陸軍的精銳駐紮地與訓練場，周圍海域和陸路皆在巡邏範圍內，可迅速馳援周邊諸國或城市",
    type: "要塞",
    coords: [
      -1358.0477106347491,
      -2140.922273235957
    ],
    createTime: "2025-03-01T09:49:41.160Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822593464-xh3er79",
    name: "普歐姆要塞",
    description: "於庫坦帝國奪回的溫特灣地區要塞，烏斯克蘭在此處住紮了重兵以穩固溫特灣的所有權",
    type: "要塞",
    coords: [
      -1257.1401408043032,
      -2346.1009985578635
    ],
    createTime: "2025-03-01T09:49:53.464Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822603824-ja3o256",
    name: "烏魯伯克哨站",
    description: "此哨站平時作為燈塔引導漁民或商船方向，但也警戒是否有陌生的船隻接近，哨站周邊皆被特意鑿為峭壁無法登上",
    type: "哨站",
    coords: [
      -1295.8213759059743,
      -2202.3077115494784
    ],
    createTime: "2025-03-01T09:50:03.824Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822615592-iemvder",
    name: "威斯塔鎮",
    description: "溫特灣外海小島上的村鎮，以捕撈海貨維生，同時也以供給食物給普歐姆要塞或勞務作為交易",
    type: "城鎮",
    coords: [
      -1229.3905591009307,
      -2287.2382494901035
    ],
    createTime: "2025-03-01T09:50:15.592Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822647032-zgnd3vl",
    name: "桑夏鎮",
    description: "傑米諾斯北方離島上，橋梁兩側互相依存的城鎮",
    type: "城鎮",
    coords: [
      -1166.3233279569022,
      -1890.3351414903505
    ],
    createTime: "2025-03-01T09:50:47.032Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822657336-ijlu99j",
    name: "比孜尼鎮",
    description: "傑米諾斯北方離島上，橋梁兩側互相依存的城鎮",
    type: "城鎮",
    coords: [
      -1125.960300024724,
      -1914.721137532708
    ],
    createTime: "2025-03-01T09:50:57.336Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822675128-jz2dv9q",
    name: "莫斯特鎮",
    description: "在傑米諾斯北方離島中，於島內湖中發展漁業，盛產特殊種類的漁業特產，且作為紮托卡港的一個重要陸路中轉站",
    type: "城鎮",
    coords: [
      -1113.3468537959182,
      -2026.560360761452
    ],
    createTime: "2025-03-01T09:51:15.128Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822687848-nqpwwap",
    name: "汐叩達鎮",
    description: "位居整個烏斯克蘭的最北端，是許多傭兵聚集的地方，此處最靠近長年迷霧壟罩的蒙斯特魯海，是尚未探索的區域",
    type: "城鎮",
    coords: [
      -1042.711554914606,
      -1990.4018149055423
    ],
    createTime: "2025-03-01T09:51:27.848Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822704448-jo7cc4z",
    name: "烏茲鎮",
    description: "普魯維亞山脈北方山腰的礦鎮，出產大量的礦石",
    type: "城鎮",
    coords: [
      -1205.8454594738266,
      -1957.6068547106474
    ],
    createTime: "2025-03-01T09:51:44.448Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822734016-2ytdkti",
    name: "薩卡辛鎮",
    description: "作為首都與哨站之間的紐帶小城鎮，主要負責在戰時輔助訊息的快速、安全的傳遞，有長期的衛兵駐軍，平時以漁業和農業自給自足",
    type: "城鎮",
    coords: [
      -1278.1625511856462,
      -2138.3995839901963
    ],
    createTime: "2025-03-01T09:52:14.016Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822748456-ve9fdxv",
    name: "漢多鎮",
    description: "王都外的港口城鎮，有肥沃的土地可供耕種但面積不大，同時作為王都對外貿易的道路中轉站之一",
    type: "城鎮",
    coords: [
      -1207.527252304334,
      -2076.1732492614215
    ],
    createTime: "2025-03-01T09:52:28.456Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822765128-m6n7vc4",
    name: "布利察鎮",
    description: "史庫隆港北方的一座湖邊小鎮，當地主要以農業自給自足",
    type: "城鎮",
    coords: [
      -1174.7322921094392,
      -2148.4903409732406
    ],
    createTime: "2025-03-01T09:52:45.128Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822782104-oxrzwbc",
    name: "茲弗洛鎮",
    description: "傑米諾斯北島東南端的海岸城鎮，不但出產礦石且與他國往來頻繁，是一座有歷史底蘊的城鎮",
    type: "城鎮",
    coords: [
      -1321.8891647788394,
      -1894.539623566619
    ],
    createTime: "2025-03-01T09:53:02.104Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822798040-2gquyxo",
    name: "切希尼納鎮",
    description: "與列艾尼亞僅隔一道海峽的城鎮，與他國往來相當頻繁，也作為南部交通的中轉站",
    type: "城鎮",
    coords: [
      -1383.2746030923604,
      -1996.2880898123185
    ],
    createTime: "2025-03-01T09:53:18.040Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822959991-nolp5vd",
    name: "傑米諾斯雙島-北島",
    description: "傑米諾斯北島部分，屬於大型海島，四面環海，隨處可見到湛藍色的海洋",
    type: "自定義",
    coords: [
      -1275.639861939885,
      -2010.5833288716315
    ],
    createTime: "2025-03-01T09:55:59.991Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822972280-i2q7rkb",
    name: "溫特灣",
    description: "天然的優良港口，商船密密麻麻的旗幟是此地特殊可見的景觀",
    type: "水域",
    coords: [
      -1158.7552602196188,
      -2436.076914990011
    ],
    createTime: "2025-03-01T09:56:12.280Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740822987527-3fop173",
    name: "富利古希恩山脈",
    description: "全大陸最高最險峻的群峰，無人成功翻閱過這座山脈，傳說神話中的巴巴洛斯山就是這些山峰中最險峻的那一座",
    type: "山",
    coords: [
      -1036.0599575844988,
      -2482.1750698451206
    ],
    createTime: "2025-03-01T09:56:27.527Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740823002111-02u82id",
    name: "迪沙特山",
    description: "凱歐司沙漠臨海的山脈，荒蕪且炎熱，那怕海洋的水氣和些許降雨也無法將此處的大地重新潤澤",
    type: "山",
    coords: [
      -1337.9417706605823,
      -2395.562739073988
    ],
    createTime: "2025-03-01T09:56:42.111Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740823017672-6oi976b",
    name: "雷奈沙灣",
    description: "此處有一座在凱歐司沙漠中屹立的城市，同時駐紮著烏斯克蘭和列艾尼亞兩國的軍隊，救贖了許多在沙漠中迷失的旅者",
    type: "自定義",
    coords: [
      -1473.3260935164303,
      -2345.1089541587653
    ],
    createTime: "2025-03-01T09:56:57.672Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740823031431-t8olwvg",
    name: "奇納勒島",
    description: "只有在退潮時浮出水面的一大片彩色珊瑚島，漲潮時會隱藏在水面之下，島上長滿了美麗的珍珠貝",
    type: "秘境",
    coords: [
      -1076.422985516677,
      -2197.952081489365
    ],
    createTime: "2025-03-01T09:57:11.431Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740823050999-mdgt2n3",
    name: "普魯維亞山脈",
    description: "普魯維亞山脈擋下來自海洋吹向賽庫溫多大陸的颱風後，帶來大量的降雨以供烏斯克蘭王國使用",
    type: "山",
    coords: [
      -1254.6174515585421,
      -1969.3794045241996
    ],
    createTime: "2025-03-01T09:57:30.999Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740823089983-r815953",
    name: "蒙斯特魯海",
    description: "",
    type: "水域",
    coords: [
      -718.2810974616435,
      -1850.4062709442342
    ],
    createTime: "2025-03-01T09:58:09.983Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740823138631-ppzbpq7",
    name: "歐里安海",
    description: "介於傑米諾斯雙島與賽庫溫多大陸之間的海域，相對的安全且風平浪靜，商船往來相當頻密",
    type: "水域",
    coords: [
      -1416.3456739682408,
      -2251.169068700151
    ],
    createTime: "2025-03-01T09:58:58.631Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826442551-t2gwzqj",
    name: "奇布司島",
    description: "",
    type: "自定義",
    coords: [
      -1609.375033980582,
      -1938.8867940135133
    ],
    createTime: "2025-03-01T10:54:02.551Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826452823-7smm5ot",
    name: "史塔修奈-北島",
    description: "有著廣闊平緩丘陵與平原的島嶼，此地四季如春，成片的田野與熱帶果樹是此處常見的風景",
    type: "自定義",
    coords: [
      -1724.6334393139894,
      -1913.4309498907974
    ],
    createTime: "2025-03-01T10:54:12.823Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826463719-1hghxjc",
    name: "史塔修奈-南島",
    description: "",
    type: "自定義",
    coords: [
      -1808.072039494002,
      -1921.2091244838496
    ],
    createTime: "2025-03-01T10:54:23.719Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826491447-31ncb2o",
    name: "傑米諾斯雙島-南島",
    description: "",
    type: "自定義",
    coords: [
      -1537.2501422995542,
      -1686.4496731299157
    ],
    createTime: "2025-03-01T10:54:51.447Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826535519-r1wyo6r",
    name: "菲尼普斯山脈",
    description: "縱橫傑米諾斯南島的山脈，相當高聳且壯觀，其中康尼凱特峽谷有著被神所劈開的說法",
    type: "山",
    coords: [
      -1566.2415203282026,
      -1671.6004307249982
    ],
    createTime: "2025-03-01T10:55:35.519Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826557695-f40htus",
    name: "舒拉赫特",
    description: "芬登聯合的首都，同時也是元老院的所在地，政治的核心，相當的繁華",
    type: "首都",
    coords: [
      -1591.6973644509183,
      -1743.0182156248395
    ],
    createTime: "2025-03-01T10:55:57.695Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826573015-xz8bwi7",
    name: "庫特菲查城",
    description: "位於奇布司島上的海島城市，有著綿長的海岸線與相當大的港口，這裡每日有著大量的商船進出",
    type: "城市",
    coords: [
      -1582.5049762954932,
      -1962.9284245738559
    ],
    createTime: "2025-03-01T10:56:13.015Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826583583-4clv7y6",
    name: "涅什利格城",
    description: "史塔修奈南島上，一座近年新興的工業城市，芬登正在重點發展此處，這裡也被稱為是芬登的希望之城",
    type: "城市",
    coords: [
      -1823.628388680106,
      -1952.3218228560577
    ],
    createTime: "2025-03-01T10:56:23.583Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826594543-1ahmj9k",
    name: "史特敘利克堡壘",
    description: "鄰近首都的軍事堡壘，原先是為了與首都舒拉赫特成犄角互相拱衛所建，現仍有大量的精銳部隊駐紮在此",
    type: "要塞",
    coords: [
      -1631.295344197365,
      -1802.4151852445095
    ],
    createTime: "2025-03-01T10:56:34.543Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826604815-wbho3ha",
    name: "波瑪孜哨站",
    description: "此哨站坐落在史塔修奈北島中央，做為控制島嶼與駐紮的軍事據點",
    type: "哨站",
    coords: [
      -1714.7339443773776,
      -1883.7324650809626
    ],
    createTime: "2025-03-01T10:56:44.815Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826635887-4ym48xe",
    name: "普歇尼察鎮",
    description: "這座沿海小鎮同時相鄰廣闊的平原，種植著大量的農作物，可以看見一望無際的麥田",
    type: "城鎮",
    coords: [
      -1665.9435764755058,
      -1878.0756108314702
    ],
    createTime: "2025-03-01T10:57:15.887Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826656520-h6rb7cy",
    name: "夏特卡鎮",
    description: "小鎮相鄰於東南方的波羅馮德海，盛產各種海洋資源與礦石",
    type: "城鎮",
    coords: [
      -1832.820776835531,
      -1899.995921048253
    ],
    createTime: "2025-03-01T10:57:36.520Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826671047-kxp0non",
    name: "帕特斐列鎮",
    description: "小鎮相鄰於東南方的波羅馮德海，盛產各種海洋資源與農作物",
    type: "城鎮",
    coords: [
      -1710.4913036902583,
      -1681.49992566161
    ],
    createTime: "2025-03-01T10:57:51.047Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826687991-ukmc1uw",
    name: "威特克鎮",
    description: "位於奇布司島上的沿海小鎮，盛產各種海洋資源",
    type: "城鎮",
    coords: [
      -1632.7095577597381,
      -1953.0289296372441
    ],
    createTime: "2025-03-01T10:58:07.991Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826708471-1nx01bt",
    name: "奈勒伏鎮",
    description: "與茲卡利聯合邊境旁的小鎮，位於大橋旁，在關卡的必經之路上，長年有商人來往，且種植著許多農作物",
    type: "城鎮",
    coords: [
      -1521.69379311345,
      -1747.9679630931453
    ],
    createTime: "2025-03-01T10:58:28.471Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826718847-443u1xz",
    name: "杜魯鎮",
    description: "小鎮在位於史塔修奈北島中央的淡水湖旁，盛產大量的農作物",
    type: "城鎮",
    coords: [
      -1757.867458029757,
      -1914.138056671984
    ],
    createTime: "2025-03-01T10:58:38.847Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826840671-v1y7p4e",
    name: "波羅馮德海",
    description: "賽庫溫多大陸東南方的海洋，頻繁出沒著海獸，是一片相當冰冷的海域，海獸的體積也較其他區域略微龐大一些",
    type: "水域",
    coords: [
      -2016.8952670446151,
      -841.9586374219266
    ],
    createTime: "2025-03-01T11:00:40.671Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826910999-ww8ankq",
    name: "拿頓海峽",
    description: "",
    type: "水域",
    coords: [
      -1749.0645437277262,
      -2010.5833288716315
    ],
    createTime: "2025-03-01T11:01:50.999Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740826945159-oxqzrpq",
    name: "拿頓島鏈",
    description: "",
    type: "自定義",
    coords: [
      -1870.994523939515,
      -1971.9020937699606
    ],
    createTime: "2025-03-01T11:02:25.159Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838338750-r3kkskt",
    name: "康尼凱特峽谷",
    description: "",
    type: "山",
    coords: [
      -1540.6178174860252,
      -1626.8353333237226
    ],
    createTime: "2025-03-01T14:12:18.750Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838363053-7ygbund",
    name: "辛狄納列",
    description: "茲卡利聯合的首都，王城與元老院的所在地，相當的繁榮，是政治與經濟的核心",
    type: "首都",
    coords: [
      -1566.1857704585836,
      -1535.8609890260143
    ],
    createTime: "2025-03-01T14:12:43.053Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838398381-jlk9fj6",
    name: "維格納拉城",
    description: "茲卡利聯合腹地的港口城市，相當的繁華，同樣有著許多商船在這裡的港口進出著",
    type: "城市",
    coords: [
      -1424.67012377326,
      -1606.024208811175
    ],
    createTime: "2025-03-01T14:13:18.381Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838411852-wq7vi9f",
    name: "聶烏蘭叩城",
    description: "靠近芬登聯合邊境橋的港口都市，是一座半軍事化的商業城市，相當繁華，有許多商船在這裡出入",
    type: "城市",
    coords: [
      -1459.1571301083388,
      -1698.1877602238858
    ],
    createTime: "2025-03-01T14:13:31.852Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838422685-eemgw40",
    name: "阿根特城",
    description: "鄰近首都的礦山城市，是茲卡利目前重要的工業城市，同時設有軍事堡壘，為了防備芬登聯合的襲擊，駐紮著許多士兵",
    type: "城市",
    coords: [
      -1594.1321376611477,
      -1626.2407297662212
    ],
    createTime: "2025-03-01T14:13:42.685Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838435621-bn9407x",
    name: "尤聖塔鎮",
    description: "據說是最東邊的小鎮，在這裡能看見賽庫溫多大陸的第一縷曙光，也因此有許多修道者來到這邊朝聖",
    type: "城鎮",
    coords: [
      -1391.3723245531837,
      -1528.725746335998
    ],
    createTime: "2025-03-01T14:13:55.621Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838448309-58x1k6k",
    name: "安厄斯特鎮",
    description: "康尼凱特峽谷北邊的小鎮，開採著相當稀有的礦石，儘管長年有著遭受魔獸襲擊的危險，淘金的人依舊絡繹不絕",
    type: "城鎮",
    coords: [
      -1506.1308111509463,
      -1628.0245404387251
    ],
    createTime: "2025-03-01T14:14:08.309Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838460566-4lzjwaf",
    name: "瓦魯克雅鎮",
    description: "傑米諾斯南島，東半部北方的漁業小鎮，是每年一度舉辦逆風競帆的場地",
    type: "城鎮",
    coords: [
      -1330.722761688045,
      -1637.538197358747
    ],
    createTime: "2025-03-01T14:14:20.566Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838495549-vdxy1gh",
    name: "邊境橋",
    description: "",
    type: "哨站",
    coords: [
      -1522.185107203483,
      -1716.0258669489265
    ],
    createTime: "2025-03-01T14:14:55.549Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838536581-d7fzao7",
    name: "哈伯島",
    description: "在歐里安海上的一個巨大島嶼，擁有相當優越的地理位置，熱帶的風情在此處可盡覽無遺，相當多樣性的美味水果",
    type: "自定義",
    coords: [
      -1522.7797107609845,
      -2241.060808222628
    ],
    createTime: "2025-03-01T14:15:36.581Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838551053-1rtslya",
    name: "班茲",
    description: "茲裡克的首都，相當的繁榮，大量的各國商人在此處雲集，作為東聯邦的貿易核心",
    type: "首都",
    coords: [
      -1527.5365392209953,
      -2202.4115769850396
    ],
    createTime: "2025-03-01T14:15:51.053Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838562589-uuat2ck",
    name: "卡西努城",
    description: "茲裡克的港口都市，比起班茲更加的繁華，大量的賭博與服務業在此處設立，作為有名的旅遊都市，但當地的地下勢力相當錯綜複雜",
    type: "城市",
    coords: [
      -1487.698100868404,
      -2242.250015337631
    ],
    createTime: "2025-03-01T14:16:02.589Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838574891-8orryx0",
    name: "奇庫圖鎮",
    description: "哈伯島南部的漁港城鎮，許多茲裡克地下勢力駐紮的城鎮，同時盛產著熱帶水果與釀酒",
    type: "城鎮",
    coords: [
      -1584.0238771836246,
      -2227.3849264000964
    ],
    createTime: "2025-03-01T14:16:14.891Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838586929-lyni7rk",
    name: "彩虹礁群",
    description: "哈伯島東邊島礁間所生長的奇異藻類，使得這一片島礁群也被稱為彩虹礁群，有著相當美麗的景色，目前被保護了起來，僅供遊覽",
    type: "秘境",
    coords: [
      -1550.131474406047,
      -2160.1947244024427
    ],
    createTime: "2025-03-01T14:16:26.929Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838635704-yxg6bhu",
    name: "西列瓦恩都",
    description: "列艾尼亞的首都，人口密集的聚居地，防備森嚴，王宮的所在地",
    type: "首都",
    coords: [
      -1497.211757788426,
      -2027.0035275221383
    ],
    createTime: "2025-03-01T14:17:15.704Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838645965-j0u2tjv",
    name: "錫洼城",
    description: "位於海峽中的海島都市，長年有著大量的軍隊駐紮，屬於半要塞型的城市",
    type: "城市",
    coords: [
      -1460.940940780843,
      -1933.6507689944247
    ],
    createTime: "2025-03-01T14:17:25.965Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838657197-ps5rh30",
    name: "涅瑟奈敘哨站",
    description: "列艾尼亞南邊的哨站，作為警戒與監視附近海域的重要據點",
    type: "哨站",
    coords: [
      -1525.7527285484912,
      -1915.8126622693837
    ],
    createTime: "2025-03-01T14:17:37.197Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838683277-nnk89rd",
    name: "傑米諾斯海峽",
    description: "此處經常能見到成群結隊的商船，以及編隊巡邏海域的列艾尼亞海軍",
    type: "水域",
    coords: [
      -1386.6154960931729,
      -1825.4329215291768
    ],
    createTime: "2025-03-01T14:18:03.277Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838717781-rqspqoq",
    name: "虔特魯島",
    description: "全島僅有山坡而無高山，只能依靠降雨所形成的淡水湖、井水獲得淡水",
    type: "自定義",
    coords: [
      -1474.6168226033742,
      -2041.2740129021709
    ],
    createTime: "2025-03-01T14:18:37.781Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838731357-c28qzmn",
    name: "厄烏希利島",
    description: "全島僅有山坡而無高山，只能依靠降雨所形成的淡水湖、井水獲得淡水",
    type: "自定義",
    coords: [
      -1446.6704554008102,
      -1959.2187219669831
    ],
    createTime: "2025-03-01T14:18:51.357Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838861958-u2b9wh2",
    name: "迪威斯大平原",
    description: "賽庫溫多大陸上最廣大的平原，散落著零星的村鎮，經常能見到一望無際的農田，和迅刃馬群",
    type: "平原",
    coords: [
      -1885.289762998828,
      -2332.6466559138044
    ],
    createTime: "2025-03-01T14:21:01.958Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838889965-msq6i8z",
    name: "費侖山脈",
    description: "做作為賽庫溫多綿延最長的山脈，有著相當豐富的礦產資源，神祕美麗的森林與危險的魔獸，吸引著許多傭兵前往",
    type: "山",
    coords: [
      -1675.0656591853995,
      -2362.0780304476843
    ],
    createTime: "2025-03-01T14:21:29.965Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838908221-yx8l1x2",
    name: "阿烏埨島",
    description: "波羅馮德海上的一座小島，土地相當貧脊，但此處的地下出產著珍貴的礦石、寶石，讓無數的人趨之若鶩",
    type: "自定義",
    coords: [
      -1965.1749224479308,
      -2068.605181524138
    ],
    createTime: "2025-03-01T14:21:48.221Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838926206-lk7jyko",
    name: "佩庫亞島",
    description: "佩庫亞島南部建立著一座【秘術高塔】，高聳入雲，相當的壯觀，魔法師的能力與知識如同這座塔，震驚著人們",
    type: "自定義",
    coords: [
      -1886.9715558293356,
      -2715.254524854244
    ],
    createTime: "2025-03-01T14:22:06.206Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838937349-wmx249m",
    name: "史馬寇林峽谷",
    description: "歷史上對於波茲莫亞公國意義非凡之地，並立著一塊紀念碑，此地的土地異常肥沃，也許是以前的敵人鮮血所灌澆的",
    type: "山",
    coords: [
      -1945.8343048970955,
      -2641.2556403119174
    ],
    createTime: "2025-03-01T14:22:17.349Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740838981661-u2b1key",
    name: "佩庫亞海灣",
    description: "",
    type: "水域",
    coords: [
      -1834.9465784491988,
      -2681.6620443311363
    ],
    createTime: "2025-03-01T14:23:01.661Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839008117-z1hjwma",
    name: "庫都迪亞山",
    description: "",
    type: "山",
    coords: [
      -2010.9492314696015,
      -2667.3915589511034
    ],
    createTime: "2025-03-01T14:23:28.117Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839031437-kcchft7",
    name: "奧利安森",
    description: "波茲莫亞的首都，國王的宮殿所在，同時也是最為繁榮的都市與政治中心",
    type: "首都",
    coords: [
      -1724.3503167539457,
      -2241.6554117801293
    ],
    createTime: "2025-03-01T14:23:51.437Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839048381-46ncwch",
    name: "奧庫派塔城",
    description: "佩庫亞島上的城市，『奧庫派塔．薩拉．帕索迪恩』公爵的領地，南方矗立著【秘術高塔】，並與丹格瓦教國接壤，是相當重要、繁華的貿易都市",
    type: "城市",
    coords: [
      -1901.2667948886487,
      -2745.5267958033783
    ],
    createTime: "2025-03-01T14:24:08.381Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839058365-2sq0jwp",
    name: "史馬寇林城",
    description: "位於史馬寇林峽谷的城市，『史馬寇林．艾瑟．德奇』公爵的領地，有著相當重要的戰略地位，並且在與丹格瓦教國的貿易中，也有相當重要的位置",
    type: "城市",
    coords: [
      -1939.1071335750657,
      -2604.256198040754
    ],
    createTime: "2025-03-01T14:24:18.365Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839071237-6422ajz",
    name: "諾爾加海港",
    description: "南方的臨海城市，『諾爾加．波尤．麥特』公爵的領地，擁有大量的農田與漁獲，相當的富庶",
    type: "城市",
    coords: [
      -1923.1301016852453,
      -2342.7374128968486
    ],
    createTime: "2025-03-01T14:24:31.237Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839084093-151l16w",
    name: "費戴拉萊城",
    description: "首都東方不遠處的沿海城市，『費戴拉萊．娃諾．雪絲菲』公爵的領地，儘管領地不大，但在波茲莫亞公國中具有相當重要的地位，不但有著極高的貿易出入口量，也是東聯邦議會的所在地",
    type: "城市",
    coords: [
      -1704.4970337192794,
      -2125.7861377613904
    ],
    createTime: "2025-03-01T14:24:44.093Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839101517-u8ak6ir",
    name: "卡勒斯城",
    description: "首都南方的礦山城市，『卡勒斯．史威提司．格力士』公爵的領地，位於費崙山脈山腳下，並且作為波茲莫亞公國工業的核心",
    type: "城市",
    coords: [
      -1822.2225318547994,
      -2283.8746638290886
    ],
    createTime: "2025-03-01T14:25:01.517Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839137933-p4peio2",
    name: "奧格利卡城",
    description: "桑圭亞流域邊緣的城市，『奧格利卡．威倫．凱洛塔』公爵的領地，由於位置鄰近丹格瓦教國與庫坦帝國，長年處於嚴格戒備中，但也作為他國貿易的重要樞紐",
    type: "城市",
    coords: [
      -1759.9961971260245,
      -2470.553668015413
    ],
    createTime: "2025-03-01T14:25:37.933Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839159181-yxckmi1",
    name: "迪威斯要塞",
    description: "歷史上經過某次大戰後，建立起的雄壯要塞，軍隊可隨時支援至迪威斯大平原各地",
    type: "要塞",
    coords: [
      -1861.744663371724,
      -2407.4864368713847
    ],
    createTime: "2025-03-01T14:25:59.181Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839199005-hykvkdd",
    name: "烏丹史奈堡壘",
    description: "近年於桑圭亞流域前建立的軍事堡壘，防備著庫坦帝國與丹格瓦教國的襲擊",
    type: "要塞",
    coords: [
      -1758.314404295517,
      -2563.052273693322
    ],
    createTime: "2025-03-01T14:26:39.005Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839213476-asgikvt",
    name: "巴卡哨站",
    description: "號稱位於世界的最南端，除了警惕敵人、海獸的襲擊外，也會為往來的船隻作為燈塔引導航線",
    type: "哨站",
    coords: [
      -2090.4684883207347,
      -2592.483648227202
    ],
    createTime: "2025-03-01T14:26:53.476Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839257354-l390qy5",
    name: "巴基耶斯哨站",
    description: "費戴拉萊城北方島嶼上的哨站，負責警戒海獸和引導船隻",
    type: "哨站",
    coords: [
      -1633.8617348379673,
      -2132.51330908342
    ],
    createTime: "2025-03-01T14:27:37.354Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839274605-9paswkz",
    name: "布里約克夏鎮",
    description: "佩庫亞島南方的城鎮，鄰近【秘術高塔】，在此處生活的人大部分從事貿易、捕魚",
    type: "城鎮",
    coords: [
      -1973.1814729010607,
      -2767.615941564147
    ],
    createTime: "2025-03-01T14:27:54.605Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839301853-xdrehuc",
    name: "秘術高塔",
    description: "魔法師們的聖地",
    type: "秘境",
    coords: [
      -1944.5436482630055,
      -2765.4946212205873
    ],
    createTime: "2025-03-01T14:28:21.853Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839335116-x8qvru9",
    name: "東聯邦議會",
    description: "",
    type: "城市",
    coords: [
      -1702.7131290972063,
      -2108.945974888878
    ],
    createTime: "2025-03-01T14:28:55.116Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839362389-4g04wm6",
    name: "氏佩拉鎮",
    description: "阿烏埨島上唯一的城鎮，出產稀有的礦石，並且捕獵海獸為生",
    type: "城鎮",
    coords: [
      -2006,
      -2099
    ],
    createTime: "2025-03-01T14:29:22.389Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839374089-t6nftan",
    name: "洛卡司鎮",
    description: "奧格利卡城東邊的礦山小鎮，大量出產礦石，供應著烏丹史奈堡壘",
    type: "城鎮",
    coords: [
      -1763.5,
      -2408
    ],
    createTime: "2025-03-01T14:29:34.089Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839387674-63kicii",
    name: "艾瑟馬拉鎮",
    description: "史馬寇林城北方的平原小鎮，鄰近淡水湖，人們多以畜牧、農耕為主",
    type: "城鎮",
    coords: [
      -1898.5,
      -2574.5
    ],
    createTime: "2025-03-01T14:29:47.674Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839402449-dqwvxlc",
    name: "瓦羅尼斯鎮",
    description: "庫都迪亞山下的礦山城鎮，出產著稀有礦石，並且人們捕獵海獸作為交易的商品",
    type: "城鎮",
    coords: [
      -2060.9598671054296,
      -2621.919734210859
    ],
    createTime: "2025-03-01T14:30:02.449Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839417165-q5us4gy",
    name: "波魯鎮",
    description: "南方偏遠的沿海小鎮，此處的土地貧瘠，人們多靠捕魚自給自足，但海中資源極為豐富",
    type: "城鎮",
    coords: [
      -2026.9598671054296,
      -2417.419734210859
    ],
    createTime: "2025-03-01T14:30:17.165Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839429149-5ccz6dv",
    name: "塞黎涅斯鎮",
    description: "鄰近淡水湖的平原小鎮，人們多以畜牧、農耕為主",
    type: "城鎮",
    coords: [
      -1904.4598671054296,
      -2481.919734210859
    ],
    createTime: "2025-03-01T14:30:29.149Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839454116-tejxs2p",
    name: "洛畢溫鎮",
    description: "南方的平原小鎮，人們多以畜牧、農耕為主",
    type: "城鎮",
    coords: [
      -1973.9598671054296,
      -2272.419734210859
    ],
    createTime: "2025-03-01T14:30:54.116Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839466997-z0v2neu",
    name: "古涅斯鎮",
    description: "東南方的沿海小鎮，通常也作為阿烏埨島的運貨港口",
    type: "城鎮",
    coords: [
      -1922.9598671054296,
      -2201.919734210859
    ],
    createTime: "2025-03-01T14:31:06.997Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839479605-dq3xplm",
    name: "施卜拉鎮",
    description: "東南方的沿海小鎮，通常也作為阿烏埨島的運貨港口",
    type: "城鎮",
    coords: [
      -1850.9598671054296,
      -2156.419734210859
    ],
    createTime: "2025-03-01T14:31:19.605Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839494917-2et1e8a",
    name: "斐魯瑪鎮",
    description: "東部的沿海小鎮，通常也作為與芬登聯合的來往港口",
    type: "城鎮",
    coords: [
      -1790.4598671054296,
      -2090.919734210859
    ],
    createTime: "2025-03-01T14:31:34.917Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839506917-0vnj5u0",
    name: "狄歐汀鎮",
    description: "位於首都奧利安森南方的要道旁，有大量的人流往來，故而也長年有守衛駐紮，當地人除了農耕、畜牧以外，服務業也相當發達",
    type: "城鎮",
    coords: [
      -1786.4598671054296,
      -2205.419734210859
    ],
    createTime: "2025-03-01T14:31:46.917Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839520686-fwnwrcc",
    name: "杜洛尼鎮",
    description: "首都外西北方的小鎮，出產大量礦石給首都，作為消耗品以及其他所需",
    type: "城鎮",
    coords: [
      -1697.4598671054296,
      -2283.919734210859
    ],
    createTime: "2025-03-01T14:32:00.686Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839535948-xmqnoxz",
    name: "德勞格斯鎮",
    description: "北方沿岸城鎮，是東聯邦的各成員國，無論貿易或參訪次數最為頻繁的地方",
    type: "自定義",
    coords: [
      -1666.9598671054296,
      -2168.419734210859
    ],
    createTime: "2025-03-01T14:32:15.948Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839584709-rfz40vh",
    name: "萊托大森林",
    description: "作為賽庫溫多大陸上最廣袤的森林，加上居住其中的是奉行自然的長耳族，有著豐富的野生動物活躍其中，以及尚未探索的礦產和遺跡等隱藏其中",
    type: "森林",
    coords: [
      -1129.2725371816537,
      -2969.18192378797
    ],
    createTime: "2025-03-01T14:33:04.709Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839595350-az0bh01",
    name: "巨木林",
    description: "由高聳入雲般的萬年巨木構建的龐大森林，巨木的年輪象徵著長耳族長遠的傳承，粗壯的樹幹代表著長耳族不屈的精神，許多長耳族人為了一觀巨木的威風而前往巨木林，因此巨木林成為少數長耳族的朝聖聖地",
    type: "森林",
    coords: [
      -1252.2725371816537,
      -3197.18192378797
    ],
    createTime: "2025-03-01T14:33:15.350Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839606165-kovo8h3",
    name: "悼念之森",
    description: "大森林南部有著一片森林，是昔日戰爭後大規模樹葬後成長的，長年有螢火蟲會在這片森林的夜晚飛舞，彷彿逝去之人的靈魂尚未離去",
    type: "森林",
    coords: [
      -1328.2725371816537,
      -3039.18192378797
    ],
    createTime: "2025-03-01T14:33:26.165Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839619054-romdt6k",
    name: "薩古洛湖",
    description: "大森林腹地的靜謐湖泊，作為長耳族聖湖的同時供給著整個森林的水分",
    type: "水域",
    coords: [
      -1240.2725371816537,
      -3105.18192378797
    ],
    createTime: "2025-03-01T14:33:39.054Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839632634-xzlvifi",
    name: "露娜海灣",
    description: "鄰近莫里海的海灣經常莫名沖上發著淡紫色螢光的細沙，長年如此導致露娜海灣又俗稱為\"螢光海岸\"",
    type: "水域",
    coords: [
      -1217.2725371816537,
      -3264.18192378797
    ],
    createTime: "2025-03-01T14:33:52.634Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839694885-5wiulni",
    name: "烏悽伊登海",
    description: "",
    type: "水域",
    coords: [
      -2090.1802974532297,
      -3553.4553903037613
    ],
    createTime: "2025-03-01T14:34:54.885Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839714879-stsl9x0",
    name: "安提納托",
    description: "作為長耳族在萊托大森林唯一的大型聚居與王庭所在地",
    type: "首都",
    coords: [
      -1195.203173094538,
      -3073.214710580868
    ],
    createTime: "2025-03-01T14:35:14.879Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839728540-vm7oyp4",
    name: "隆吉維塔",
    description: "於巨木林旁，由不同氏族因對萬年巨木感到敬重而聚集起來",
    type: "城鎮",
    coords: [
      -1297.5409434773146,
      -3155.8175644355615
    ],
    createTime: "2025-03-01T14:35:28.541Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839759233-3xq1ekc",
    name: "蘇蒙特平原",
    description: "相當肥沃的平原，長年處於中立地帶，因此大面積的農田在此地相當常見，但時不時能看見小規模的武裝摩擦",
    type: "平原",
    coords: [
      -1385.9286191327321,
      -2749.9382720344834
    ],
    createTime: "2025-03-01T14:35:59.233Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839773725-2t8ib1v",
    name: "孚萊剃谷",
    description: "逢斯山脈與庇奈山脈之間，如同被閃電劈開的岩石峽谷，狹窄且險峻，最狹窄處只能同時讓兩輛馬車通過",
    type: "山",
    coords: [
      -1426.9408124415518,
      -2851.0545417441595
    ],
    createTime: "2025-03-01T14:36:13.725Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839796028-34jj2wi",
    name: "紐特奧城",
    description: "馬辛納的首都，王城的所在地，且傭兵公會總部也在此地，相當繁華",
    type: "首都",
    coords: [
      -1499.0657041225797,
      -2769.7372619077064
    ],
    createTime: "2025-03-01T14:36:36.028Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839805197-5yvycel",
    name: "弗利登堡壘",
    description: "管制相當嚴格的軍事堡壘，駐紮大量軍隊在此地，也設有提供給履行戰爭合同的傭兵營地",
    type: "要塞",
    coords: [
      -1508.2580922780048,
      -2675.6920600098956
    ],
    createTime: "2025-03-01T14:36:45.197Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839815741-irmxjj2",
    name: "豪費斯特哨站",
    description: "馬辛那北方的哨站，位於孚萊剃谷東面出口，防備對象不僅為長耳族，包括可能來自庫坦帝國的襲擊",
    type: "哨站",
    coords: [
      -1425.5265988791787,
      -2810.7494552165263
    ],
    createTime: "2025-03-01T14:36:55.741Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839925069-tnldtwr",
    name: "傭兵公會總部",
    description: "",
    type: "城市",
    coords: [
      -1488.4995248292628,
      -2788
    ],
    createTime: "2025-03-01T14:38:45.069Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839952508-4vt3obn",
    name: "伊娜尼布斯雪原",
    description: "長年大雪覆蓋，無論四季輪迴，這片區域的雪都不曾化開過，但同時也是一些周邊村落的水源來源，也是某些特殊生物的棲息地",
    type: "平原",
    coords: [
      -861.9631662664013,
      -2712.461612631596
    ],
    createTime: "2025-03-01T14:39:12.508Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839965884-64y3qiy",
    name: "法丘峽谷",
    description: "一片荒蕪的峽谷，地面有著一層厚厚的灰燼，在兩側的山壁上生長著一種奇特的美麗花朵",
    type: "山",
    coords: [
      -1197.131780548825,
      -2827.012911183817
    ],
    createTime: "2025-03-01T14:39:25.884Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839984160-2f50e4y",
    name: "厄烏勒斯山脈",
    description: "鄰近萊托大森林的厄烏勒斯山脈，美麗又充滿著危險，崇尚自然的長耳氏族維護著這裡的一切",
    type: "山",
    coords: [
      -1033.7901140947324,
      -2740.0387770978714
    ],
    createTime: "2025-03-01T14:39:44.160Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740839999077-4bfftmn",
    name: "凱歐司沙漠",
    description: "此地在本地人口中又稱亡靈的細沙，一不小心迷失在其中結局就是死亡，流沙、幻象、毒蟲、飢渴等危險在此地將如影隨形，但此地也是某些修行者的聖地",
    type: "秘境",
    coords: [
      -1429.769911559199,
      -2538.5133444597054
    ],
    createTime: "2025-03-01T14:39:59.077Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840043509-o2evzmy",
    name: "庇奈山脈",
    description: "",
    type: "山",
    coords: [
      -1292.5911960090089,
      -2860.954036680771
    ],
    createTime: "2025-03-01T14:40:43.509Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840071517-0y997q8",
    name: "泰拉米努平原",
    description: "",
    type: "平原",
    coords: [
      -1175.211470332042,
      -2698.3194770078653
    ],
    createTime: "2025-03-01T14:41:11.517Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840098742-sxctgdn",
    name: "宮涅帝都",
    description: "庫坦帝國的首都，皇宮的所在地",
    type: "首都",
    coords: [
      -1105.9150057757602,
      -2606.395595453614
    ],
    createTime: "2025-03-01T14:41:38.742Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840109461-90rxn5f",
    name: "哈恩城",
    description: "庫坦帝國現存的唯一大型港口都市",
    type: "城市",
    coords: [
      -1206.32416870425,
      -2546.998625833944
    ],
    createTime: "2025-03-01T14:41:49.461Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840122589-strvzul",
    name: "馬特衛城",
    description: "位於盛產糧食的平原，大型貿易都市",
    type: "城市",
    coords: [
      -1329.3607486307092,
      -2792.364678905676
    ],
    createTime: "2025-03-01T14:42:02.589Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840136165-5bwcfon",
    name: "娜達威前衛城",
    description: "主要作為防備厄烏勒司山脈的魔獸和長耳族的城市，同時也是工業的集中區域，並擁有礦產",
    type: "城市",
    coords: [
      -1128.5424227737299,
      -2723.068214349394
    ],
    createTime: "2025-03-01T14:42:16.165Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840146716-4enuppe",
    name: "吉安福格要塞",
    description: "居於肥沃平原中央、相鄰於沙漠的軍事要塞，長期駐紮重兵支援前線或防禦周邊可能遭遇的襲擊",
    type: "要塞",
    coords: [
      -1308.1475451951128,
      -2621.951944639718
    ],
    createTime: "2025-03-01T14:42:26.716Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840159756-b1durcx",
    name: "托斯特鎮",
    description: "沙漠中依托綠洲生存的城鎮，是許多傭兵探索沙漠時所依靠的據點",
    type: "城鎮",
    coords: [
      -1380.9795436573272,
      -2626.194585326837
    ],
    createTime: "2025-03-01T14:42:39.756Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840175332-nyorm0w",
    name: "史托鎮",
    description: "鄰近法丘峽谷的礦山城鎮，由於靠近峽谷所以平時也駐紮著較多數量的士兵",
    type: "城鎮",
    coords: [
      -1178.0398974567881,
      -2788.821344630341
    ],
    createTime: "2025-03-01T14:42:55.332Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840188792-0v8ifoz",
    name: "卡歐溫多鎮",
    description: "鄰近雪原區域的城鎮，產出著雪地的特產，並且是傭兵探索雪原的主要據點",
    type: "城鎮",
    coords: [
      -1011.1626970967629,
      -2658.00659011083
    ],
    createTime: "2025-03-01T14:43:08.792Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840212508-a747ejc",
    name: "溫馬勒鎮",
    description: "鄰近礦山而建的城鎮，並且位於肥沃的雙河流域，產出礦石的同時也盛產糧食",
    type: "城鎮",
    coords: [
      -1265.0140315427334,
      -2786.7000242867816
    ],
    createTime: "2025-03-01T14:43:32.508Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840225525-9j1x9et",
    name: "費耶里鎮",
    description: "雪原上的礦山城鎮，一年四季幾乎被雪覆蓋，但是出產著珍稀的礦產，故而吸引著大量的淘金著前往此地礦山",
    type: "城鎮",
    coords: [
      -1009.7484835343898,
      -2528.606049153692
    ],
    createTime: "2025-03-01T14:43:45.525Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840236477-lfcqtp7",
    name: "茂普鎮",
    description: "帝都與哈恩城之間的中繼城鎮，同時也富產糧食與礦石",
    type: "城鎮",
    coords: [
      -1178.7470042379746,
      -2588.010819142764
    ],
    createTime: "2025-03-01T14:43:56.477Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840250261-3t59mcx",
    name: "尚涅格鎮",
    description: "在平原河流區域的城鎮，土壤肥沃，以農業為主，盛產糧食，同時供給著要塞的糧草需求",
    type: "城鎮",
    coords: [
      -1275.6206332605316,
      -2663.6712447297245
    ],
    createTime: "2025-03-01T14:44:10.261Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840259013-nhpsmwj",
    name: "烏厄沙鎮",
    description: "沙漠中依托綠洲生存的城鎮，是許多傭兵探索沙漠時所依靠的據點",
    type: "城鎮",
    coords: [
      -1325.11810794359,
      -2537.8062376785188
    ],
    createTime: "2025-03-01T14:44:19.013Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840270840-4aik6q5",
    name: "布基特哨站",
    description: "位於溫特灣南岸，警戒著溫特灣船艦的哨站",
    type: "哨站",
    coords: [
      -1211.2739161725558,
      -2468.509773122237
    ],
    createTime: "2025-03-01T14:44:30.840Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840281301-5f9p5l2",
    name: "戰耳哨站",
    description: "位於法丘峽谷東半部，警戒著長耳族動向的哨站",
    type: "哨站",
    coords: [
      -1207.7383822666231,
      -2856.004289212465
    ],
    createTime: "2025-03-01T14:44:41.301Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840373317-tnvw54w",
    name: "歐拉庫侖平原",
    description: "賽庫溫多大陸第三大的平原，有著一望無際的田野和零散分布的村落",
    type: "平原",
    coords: [
      -1820.7999615553597,
      -2928.8362876746796
    ],
    createTime: "2025-03-01T14:46:13.317Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840387684-2ew7sng",
    name: "桑圭亞流域",
    description: "地形複雜且泥濘的紅樹林流域，生物繁多但危險無比，無論是劇毒的花朵或是從道路旁的沼澤襲擊的魔獸",
    type: "森林",
    coords: [
      -1710.4913036902583,
      -2648.822002324807
    ],
    createTime: "2025-03-01T14:46:27.684Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840419421-43jdt9p",
    name: "薩庫隆山",
    description: "位於丹格瓦教國腹地的聖山，在山峰上豎立著吉尼瑟斯教的聖堂，長年有忠實的信仰教徒徒步進行朝拜，沿途有聖騎士巡邏",
    type: "山",
    coords: [
      -1761.4029919356897,
      -2958.5347724845146
    ],
    createTime: "2025-03-01T14:46:59.421Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840429255-qkae4dk",
    name: "帕瑞叩湖",
    description: "聖山下的湖泊，也被俗稱為聖湖，沿湖散布著聖道修練者的居所",
    type: "水域",
    coords: [
      -1768.4740597475552,
      -3025.00280991605
    ],
    createTime: "2025-03-01T14:47:09.255Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840452724-cbxhwc7",
    name: "第司旦半島",
    description: "第司旦半島有著天然窪地形成的大型淡水湖泊；在首都旁有著歐拉庫侖平原最大的淡水湖，並且有河川直通海洋，同時也是港口",
    type: "平原",
    coords: [
      -1591.6973644509183,
      -2988.2332572943496
    ],
    createTime: "2025-03-01T14:47:32.724Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840476505-dqtum48",
    name: "逢斯山脈",
    description: "逢斯山脈降雨形成的溪水與河川供應了幾乎90%丹格瓦教國的用水",
    type: "山",
    coords: [
      -1559.1704525163373,
      -2839.7408332451746
    ],
    createTime: "2025-03-01T14:47:56.505Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840516180-e188koc",
    name: "高聖克特",
    description: "丹格瓦教國的首都，繁榮的政治與貿易中心，也是大神殿的所在地",
    type: "首都",
    coords: [
      -1687.1567799111024,
      -2908.33019102027
    ],
    createTime: "2025-03-01T14:48:36.180Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840528661-3sszzq7",
    name: "哥斐亞伯城",
    description: "教國南方最為繁榮的港口貿易都市，由於鄰近佩庫亞島，港口商船往來相當頻繁",
    type: "城市",
    coords: [
      -1933.9370465452073,
      -2870.1464248361963
    ],
    createTime: "2025-03-01T14:48:48.661Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840538836-3rukg8p",
    name: "多魯特爾",
    description: "在早年長期戰爭中，變得較為軍事化的城市，同樣港口發達，但街道上更多見到的是士兵和往來的傭兵，而不是平民和商人",
    type: "城市",
    coords: [
      -1781.9090885900996,
      -2760.5448737522815
    ],
    createTime: "2025-03-01T14:48:58.836Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840548972-vvygkuh",
    name: "西格尼恩",
    description: "第司旦半島西側的港口都市，由於半島有大面積的平原且臨海，產出極為豐富的食物資源",
    type: "城市",
    coords: [
      -1613.6176746677013,
      -3058.236828631818
    ],
    createTime: "2025-03-01T14:49:08.972Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840563238-3thwk7g",
    name: "哈爾李戈要塞",
    description: "賽庫溫多第一次大戰中期建立，重兵屯守的軍事要塞建築，並肩負著流域地區的守衛，以及通往前線的補給路線",
    type: "要塞",
    coords: [
      -1683.6212460051695,
      -2749.9382720344834
    ],
    createTime: "2025-03-01T14:49:23.238Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840575365-fkiwgbu",
    name: "巴哈肯要塞",
    description: "位在歐拉庫侖平原正中央，薩庫隆山腳下的軍事堡壘，同時也是聖教軍與聖騎士的屯守地，拱衛著薩庫隆山與整個歐拉庫侖平原",
    type: "要塞",
    coords: [
      -1774.838020778234,
      -2906.9159774578966
    ],
    createTime: "2025-03-01T14:49:35.365Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840590429-n6jj1d5",
    name: "蒙姆要塞",
    description: "982年被毀，1001年戰後重建，作為丹格瓦教國對庫坦帝國的前線軍事要塞，周邊仍有小規模的武裝摩擦發生",
    type: "要塞",
    coords: [
      -1618.5674221360073,
      -2637.508293825822
    ],
    createTime: "2025-03-01T14:49:50.429Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840608309-ejj7ed1",
    name: "浦利斯特鎮",
    description: "帕瑞叩湖邊上的小鎮，出產全大陸品質最高的葡萄和葡萄酒，由於鄰近聖湖與聖山，周邊有一些聖術修練者，偶有聖騎士的巡邏，當地人以能夠侍奉聖術修練者的飲食為榮",
    type: "城鎮",
    coords: [
      -1803.5,
      -3025
    ],
    createTime: "2025-03-01T14:50:08.309Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840621342-0idier2",
    name: "茵納哈鎮",
    description: "位於第司旦半島，逢斯山脈的礦山小鎮，鄰近寬廣的淡水湖，盛產各種礦石，以及大量硫磺",
    type: "城鎮",
    coords: [
      -1598,
      -2944
    ],
    createTime: "2025-03-01T14:50:21.342Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840632181-x8n7ocm",
    name: "齊爾夏鎮",
    description: "第司旦半島北端的漁港小鎮，經常有萊托森林的長耳族或是他國商人通過此處來往",
    type: "城鎮",
    coords: [
      -1526,
      -3001.5
    ],
    createTime: "2025-03-01T14:50:32.181Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840670232-ggmyzw4",
    name: "西戈伯特鎮",
    description: "沿海漁業小鎮，當地以製作白色的帆船為名，當地的船隻無論漁船或商船皆掛著潔白色的帆布，在當地可以見到海面上都是潔白帆船的壯觀景象",
    type: "城鎮",
    coords: [
      -1884.5,
      -3038
    ],
    createTime: "2025-03-01T14:51:10.232Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840679877-jj8rkdy",
    name: "斐榭鎮",
    description: "最靠近烏棲伊登海的小鎮，這裡的人們主要以捕獵體積龐大的海獸為生",
    type: "城鎮",
    coords: [
      -1769.5,
      -3109.5
    ],
    createTime: "2025-03-01T14:51:19.877Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840689253-nx4nsym",
    name: "昂格亥亞鎮",
    description: "沿海小鎮，這裡的人們會捕獵體積龐大的海獸，但農業和畜牧同樣發達",
    type: "城鎮",
    coords: [
      -1711.5,
      -3064.5
    ],
    createTime: "2025-03-01T14:51:29.253Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840700381-sj5bzsu",
    name: "安卡鎮",
    description: "沿海小鎮，有著小型漁船港口，人們主要從事耕種與畜牧",
    type: "城鎮",
    coords: [
      -1862.5,
      -2937
    ],
    createTime: "2025-03-01T14:51:40.381Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840711216-nokvzwp",
    name: "佐西萊登鎮",
    description: "巴哈肯要塞東方的農業小鎮，人們在平原上耕種與畜牧，為要塞與首都城市提供著食物，同時位於前往首都的要道上，也是旅客的中轉站",
    type: "城鎮",
    coords: [
      -1757,
      -2865
    ],
    createTime: "2025-03-01T14:51:51.216Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840723592-0jrxs77",
    name: "烏博錫恩哨站",
    description: "建立於第司旦半島北端的軍事哨站，為了監視和防備長耳族的動向",
    type: "哨站",
    coords: [
      -1541.5,
      -3039
    ],
    createTime: "2025-03-01T14:52:03.592Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840737717-qx0onq0",
    name: "歐其安哨站",
    description: "建立於歐拉庫侖平原西南沿海的哨站，為了監視與防備海洋魔獸的襲擊",
    type: "哨站",
    coords: [
      -1834,
      -3074.5
    ],
    createTime: "2025-03-01T14:52:17.717Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840752917-zpcthqd",
    name: "瓦敘威爾哨站",
    description: "991年，庫坦帝國大潰退後，接手了棄守的流域哨站，現用於對庫坦帝國的戒備預警，以及蒙姆要塞的前哨",
    type: "哨站",
    coords: [
      -1572,
      -2484.5
    ],
    createTime: "2025-03-01T14:52:32.917Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840816081-lwpv285",
    name: "高聖克特大神殿",
    description: "位於丹格瓦教國首都的巨大建築，壯觀且美麗，通體使用潔白的石磚雕砌，並雕刻著精美的花紋\n是吉尼瑟斯教團在俗世中，掌控政治與經濟的中心，信徒們也能夠前往朝拜",
    type: "秘境",
    coords: [
      -1689,
      -2894.5
    ],
    createTime: "2025-03-01T14:53:36.081Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740840830164-86u3fwx",
    name: "薩庫隆聖堂",
    description: "位於薩庫隆山峰上的大型宗教建築，是吉尼瑟斯教的聖地，號稱『距離神最近的地方』，長年有聖騎士駐紮戊守",
    type: "秘境",
    coords: [
      -1773,
      -2959
    ],
    createTime: "2025-03-01T14:53:50.164Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842356476-zdgh8zz",
    name: "安孚洛畢",
    description: "阿里奧克帝國的首都，是歷代南方政權的首都，皇宮的所在地，是繁華的政治中心",
    type: "首都",
    coords: [
      510,
      -2666
    ],
    createTime: "2025-03-01T15:19:16.476Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842370260-32dvbrh",
    name: "符洛拉",
    description: "位於東南方海岸的港口城市，是與史嘉萊半島、賽庫溫多大陸往來貿易的重要港口",
    type: "城市",
    coords: [
      268,
      -2774
    ],
    createTime: "2025-03-01T15:19:30.260Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842417035-s2ohz17",
    name: "威鋼傑姆",
    description: "鄰近考德拉山脈與哈卻斯森林的城市，是因豐富的礦物與森林資源而興盛的城市",
    type: "城市",
    coords: [
      414,
      -3244
    ],
    createTime: "2025-03-01T15:20:17.035Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842439726-vjh1zrg",
    name: "萊希汶諾",
    description: "位於班浦希平原最南邊的城市，是過去達爾克王國的首都，有著豐富的文化底蘊",
    type: "城市",
    coords: [
      152.73506473629425,
      -3220.1642815235373
    ],
    createTime: "2025-03-01T15:20:39.726Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842468756-z6f6qki",
    name: "普羅斯特多",
    description: "位於班浦希平原的中央的繁華城市，是阿里奧克帝國的工業中心",
    type: "城市",
    coords: [
      497.80317395532944,
      -3071.6718574743622
    ],
    createTime: "2025-03-01T15:21:08.756Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842487868-o1zfdea",
    name: "涅歐提斯米",
    description: "班浦希平原北邊的大型城市，是鐵路的運輸中心，也是阿里奧克帝國最為繁華的商業中心",
    type: "城市",
    coords: [
      810.3443712397834,
      -2808.6281348729667
    ],
    createTime: "2025-03-01T15:21:27.868Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842510397-gf09x6y",
    name: "歐希漢亞",
    description: "沿著隆吉山脈而建的新興城市，由於出產大量稀有金屬而聞名",
    type: "城市",
    coords: [
      643.4671708797582,
      -2428.204686594604
    ],
    createTime: "2025-03-01T15:21:50.397Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842529804-osues80",
    name: "奇克迪",
    description: "由於魯伯倫山脈的礦藏而興起的城市，同時也是許多人進入夫曼亞沙漠的最後一站",
    type: "城市",
    coords: [
      1012.5769106591359,
      -2627.6087988892104
    ],
    createTime: "2025-03-01T15:22:09.804Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842558316-1s0fbod",
    name: "比尤西歐",
    description: "在達勒平原南方的半軍事城市，聚集並管理著大量平原所產出的糧食作物",
    type: "城市",
    coords: [
      1117.228714274745,
      -3227.2353493354026
    ],
    createTime: "2025-03-01T15:22:38.316Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842593700-ljqejh9",
    name: "帕德迪塔",
    description: "人口大多由迪克希要塞的軍人家屬組成，開採的金屬、種植的糧食，大多為要塞所服務",
    type: "城市",
    coords: [
      982.878425849301,
      -2098.6929265616727
    ],
    createTime: "2025-03-01T15:23:13.700Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842606908-5tbjpu0",
    name: "佩迪歐",
    description: "座落在阿烏拉平原南方的大型城市，是阿里奧克帝國的重要糧倉與集散地",
    type: "城市",
    coords: [
      1145.512985522207,
      -2489.015869776647
    ],
    createTime: "2025-03-01T15:23:26.908Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842622956-197109h",
    name: "丹達席堡壘",
    description: "帝國南方唯一一座臨海的大型軍事堡壘，附帶停靠戰船的海港，抵禦、警戒來自南方敵人的攻擊",
    type: "要塞",
    coords: [
      158.39191898578665,
      -2901.966229989591
    ],
    createTime: "2025-03-01T15:23:42.956Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842644532-jk5b7en",
    name: "艾利蒙要塞",
    description: "在夫曼亞沙漠南方與平原交界處的軍事要塞，控制著整個夫曼亞沙漠，同時作為抵禦塞菲斯帝國的最終防線",
    type: "要塞",
    coords: [
      1062.0743853421943,
      -2896.3093757400984
    ],
    createTime: "2025-03-01T15:24:04.532Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842678357-r4hz11p",
    name: "希德塔洛要塞",
    description: "純粹為了防守萊可杜拉峽谷而建，用於抵禦塞菲斯帝國的侵略，現今也用於維持帝國在達勒平原的統治",
    type: "要塞",
    coords: [
      965.9078631008239,
      -3389.8699090083087
    ],
    createTime: "2025-03-01T15:24:38.357Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842693083-bwixm2f",
    name: "迪克希要塞",
    description: "控制著阿烏拉平原上的東嘆息之牆，是專門為了東嘆息之牆而建的大型軍事要塞",
    type: "要塞",
    coords: [
      1125.7139956489837,
      -2102.9355672487923
    ],
    createTime: "2025-03-01T15:24:53.083Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842728804-69emfdc",
    name: "卡納里鎮",
    description: "班浦希平原上的一個大型城鎮，以大量的糧食供應著周圍的城市",
    type: "城鎮",
    coords: [
      626.496608131281,
      -2887.8240943658598
    ],
    createTime: "2025-03-01T15:25:28.804Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842750540-l1ypiu8",
    name: "梅戴歐鎮",
    description: "位於乾燥的夫曼亞沙漠之中，水源依靠著來自奇克迪的運輸維持，然而能開採出極為稀有的貴重金屬",
    type: "城鎮",
    coords: [
      1473.610531992765,
      -2834.083978995682
    ],
    createTime: "2025-03-01T15:25:50.540Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842759780-ea8x9h0",
    name: "伊拉庫瓦鎮",
    description: "位於乾燥的夫曼亞沙漠之中，水源來自賽克溫山脈的井水，為了開採貴重金屬而建立的礦工城鎮",
    type: "城鎮",
    coords: [
      1354.8165927534249,
      -3046.2160133516463
    ],
    createTime: "2025-03-01T15:25:59.780Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842811669-0r5gohl",
    name: "塞里伊鎮",
    description: "帝國西部唯一的海港城鎮，除了撈捕漁貨，且有著極為知名的大型造船廠",
    type: "城鎮",
    coords: [
      1034.6101900523674,
      -3499.8365394530083
    ],
    createTime: "2025-03-01T15:26:51.669Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842890348-qdy24ug",
    name: "艾波利亞鎮",
    description: "在達勒平原南部，接近西嘆息之牆的新興城鎮，開墾著周圍的肥沃土地",
    type: "城鎮",
    coords: [
      1298.6141695829715,
      -3296.482122787543
    ],
    createTime: "2025-03-01T15:28:10.348Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842929661-idnilrc",
    name: "曼里莫斯哨站",
    description: "作為艾利蒙要塞的前哨，有著大量駐軍起到提前預警與拖延的作用，兼具著維持帝國對夫曼亞沙漠的控制",
    type: "哨站",
    coords: [
      1253.4242992128682,
      -3005.1263796118765
    ],
    createTime: "2025-03-01T15:28:49.661Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842953268-vjnnzq6",
    name: "畢里席翁哨站",
    description: "與迪克希要塞遙相呼應，維持著對東嘆息之牆的控制與警戒",
    type: "哨站",
    coords: [
      1253.4242992128682,
      -2347.4948450153715
    ],
    createTime: "2025-03-01T15:29:13.268Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842969323-b918w1x",
    name: "艾克迪莫哨站",
    description: "帝國最南端的哨站，警戒海岸線可能來自海獸或敵人的威脅，同時設置有大型的燈塔，為往來船隻提供指引",
    type: "哨站",
    coords: [
      45.1898703701034,
      -3160.912511677233
    ],
    createTime: "2025-03-01T15:29:29.323Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740842981924-38zuy3m",
    name: "格拉米哨站",
    description: "早期為了防禦萊可杜拉峽谷建造，有著大量駐軍，起到抵禦敵人與預警的功能",
    type: "哨站",
    coords: [
      802.7148026268368,
      -3185.88586109229
    ],
    createTime: "2025-03-01T15:29:41.924Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843013092-srpamhy",
    name: "東嘆息之牆",
    description: "位於阿烏拉平原，是三面嘆息之牆之中最為綿長的高大城牆，每隔一段距離就有著作為觀察的塔樓與傳遞訊息的烽火台",
    type: "哨站",
    coords: [
      1292.6681340079579,
      -2192.897920065018
    ],
    createTime: "2025-03-01T15:30:13.092Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843035395-ovmig0k",
    name: "北嘆息之牆",
    description: "位於夫曼亞沙漠北面邊緣，是第二長的嘆息之牆，特別寬大厚實的城牆中，屯住著守衛的士兵",
    type: "哨站",
    coords: [
      2071.59879433474,
      -2867.1783542715607
    ],
    createTime: "2025-03-01T15:30:35.395Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843062491-sjvufj4",
    name: "西嘆息之牆",
    description: "位於達勒平原，是三面嘆息之牆之中最短也最早修建的高大城牆，顯得較為老舊斑駁",
    type: "哨站",
    coords: [
      1367.5881822531294,
      -3452.2682548528996
    ],
    createTime: "2025-03-01T15:31:02.491Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843105932-jvwlg9o",
    name: "賽克溫山脈",
    description: "大陸西側的狹長山脈南部，由於鄰近沙漠有一半的山脈呈現乾燥荒蕪的樣子，其中蘊含著相當豐富的礦藏",
    type: "山",
    coords: [
      1610.1864337136844,
      -3246.5354239574285
    ],
    createTime: "2025-03-01T15:31:45.932Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843126596-bhwqfw3",
    name: "魯伯倫山脈",
    description: "大陸中部的狹長山脈南部，由於鄰近沙漠有一半的山脈呈現乾燥荒蕪的樣子，其中蘊含著相當豐富的礦藏",
    type: "山",
    coords: [
      1572.1318060335973,
      -2635.28296684603
    ],
    createTime: "2025-03-01T15:32:06.596Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843151164-40pkh6j",
    name: "考德拉山脈",
    description: "位於南端的山脈，因經常遭受颱風影響，茂盛的植被與樹木生長雜亂無章，一般人難以在叢林間穿行",
    type: "山",
    coords: [
      420.9793187109633,
      -3455.8358761979075
    ],
    createTime: "2025-03-01T15:32:31.164Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843171219-gwjoddi",
    name: "隆吉山脈",
    description: "隆吉山脈是特洛薩拉大陸最長的山脈，從來沒有人真正完整的探索過，傳說山脈中有龍的存在",
    type: "山",
    coords: [
      934.7167923921388,
      -1900.3529697743484
    ],
    createTime: "2025-03-01T15:32:51.219Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843188428-9qq9p4o",
    name: "萊可杜拉峽谷",
    description: "連接班浦希平原與達勒平原的重要通道，原先狹窄的通道，被強者開拓成了寬敞的峽谷",
    type: "山",
    coords: [
      865.7427797219809,
      -3232.264938577396
    ],
    createTime: "2025-03-01T15:33:08.428Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843209772-mi0ojtp",
    name: "達勒平原",
    description: "由於賽克溫山脈而擁有極為豐沛的水源與降雨，是四季如春的肥沃平原，中央有一道綿長且壯觀的城牆",
    type: "平原",
    coords: [
      1493.6441364434177,
      -3589.027073078212
    ],
    createTime: "2025-03-01T15:33:29.772Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843230260-7n6klus",
    name: "阿烏拉平原",
    description: "阿烏拉平原為特洛薩拉第二大的平原，長年吹拂著來自兩側山脈的微風，平原上散布著廣闊的田野與許多風車，中央有一道綿長且壯觀的城牆",
    type: "平原",
    coords: [
      1405.6428099332163,
      -2131.0591500848764
    ],
    createTime: "2025-03-01T15:33:50.260Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843274332-bekkp6u",
    name: "夫曼亞沙漠",
    description: "位於特洛薩拉大陸中央，乾燥、炎熱的沙漠，沙漠呈現淡淡的赤紅，與一般的黃沙有明顯的差別",
    type: "平原",
    coords: [
      1584.0238771836246,
      -2925.449502906694
    ],
    createTime: "2025-03-01T15:34:34.332Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843294283-yamn0am",
    name: "裴勒迪塔沙丘",
    description: "夫曼亞沙漠西部，大量崎嶇不平的沙岩形成的山丘，形成了像是森林的奇景",
    type: "秘境",
    coords: [
      1726.728730983951,
      -3113.344227077124
    ],
    createTime: "2025-03-01T15:34:54.283Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843317795-kb0n6t5",
    name: "瑪格瑪火山",
    description: "夫曼亞沙漠中央，一座高聳且巨大的火山，長年處於噴發的狀態，滾燙流淌的岩漿使人難以靠近，傳聞就是傳說中的巴巴洛斯山",
    type: "山",
    coords: [
      1783.8106725040816,
      -2892.1517036866176
    ],
    createTime: "2025-03-01T15:35:17.795Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843334168-ffvxd7b",
    name: "卡比亞湖",
    description: "班浦希平原與夫曼亞沙漠交接處的大型淡水湖，是許多居住或依靠沙漠維生的人，極為重要的水源",
    type: "水域",
    coords: [
      846.7154658819375,
      -2716.149050666215
    ],
    createTime: "2025-03-01T15:35:34.168Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843454796-568jnrv",
    name: "瑪格瑪神廟",
    description: "",
    type: "秘境",
    coords: [
      1735.6102010836669,
      -2736.276935235587
    ],
    createTime: "2025-03-01T15:37:34.796Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843474556-ew3vvnm",
    name: "關口",
    description: "",
    type: "哨站",
    coords: [
      2068.605181524138,
      -2961.637174523583
    ],
    createTime: "2025-03-01T15:37:54.556Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843485284-97jqfy5",
    name: "關口",
    description: "",
    type: "哨站",
    coords: [
      1368.9793640330474,
      -3514.947015760527
    ],
    createTime: "2025-03-01T15:38:05.284Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843493708-7cawk7n",
    name: "關口",
    description: "",
    type: "哨站",
    coords: [
      1251.2538658975272,
      -2129.1497234224053
    ],
    createTime: "2025-03-01T15:38:13.708Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843529227-lspd7lq",
    name: "班浦希平原",
    description: "",
    type: "平原",
    coords: [
      704.6711959826129,
      -3002.000202455761
    ],
    createTime: "2025-03-01T15:38:49.227Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843553900-uyrvzk0",
    name: "哈卻斯森林",
    description: "",
    type: "森林",
    coords: [
      243.85996042357723,
      -3321.5408402521725
    ],
    createTime: "2025-03-01T15:39:13.900Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843629092-gn2jim6",
    name: "卡諾達斯",
    description: "塞菲斯帝國的首都，皇宮的所在地，是繁華的政治中心，是一座歷史悠久的城市，歷代諸多國家都以此為首都",
    type: "首都",
    coords: [
      2558.000001074961,
      -2962.000006181025
    ],
    createTime: "2025-03-01T15:40:29.092Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843663315-yfcf25b",
    name: "巴霍尼安",
    description: "位於菲尼朵斯雪原，圖魯庫蘭山脈下的一座城市，當地出產許多稀有金屬，同時也是許多冒險家的聚集地",
    type: "城市",
    coords: [
      3298.000001074961,
      -2588.000006181025
    ],
    createTime: "2025-03-01T15:41:03.315Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843689380-ggflrq9",
    name: "埃里迪亞",
    description: "大陸西北方接近班尼哈海灘，因旅遊而興盛的城市，並有著豐富的森林資源",
    type: "城市",
    coords: [
      3150.000001074961,
      -3142.000006181025
    ],
    createTime: "2025-03-01T15:41:29.380Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843709228-bcq70g3",
    name: "凱符羅斯",
    description: "緊靠著伊努達河，是相當發達的工業都市，有著拱衛首都卡諾達斯的職責",
    type: "城市",
    coords: [
      2670.000001074961,
      -2790.000006181025
    ],
    createTime: "2025-03-01T15:41:49.228Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843727643-4qix2cg",
    name: "厄費多茲",
    description: "位於費塔河上游，當地的畜牧業極為發達，大量的人口聚集形成了城市",
    type: "城市",
    coords: [
      2896.000001074961,
      -2790.000006181025
    ],
    createTime: "2025-03-01T15:42:07.643Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843751299-5d88psf",
    name: "佩米安達",
    description: "位於伊努達河下游末端，當地有許多人養殖水產，是一座繁榮的城市",
    type: "城市",
    coords: [
      2476.000001074961,
      -2456.000006181025
    ],
    createTime: "2025-03-01T15:42:31.299Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843777596-5q9zlqb",
    name: "歐里蘭都",
    description: "費塔河的湖泊旁，因鄰近尼費羅森林而有著豐富的森林資源，宜居的地理位置吸引了大量人口聚集，進而形成的城市",
    type: "城市",
    coords: [
      2898,
      -2530
    ],
    createTime: "2025-03-01T15:42:57.596Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843791476-xzej176",
    name: "泰利歐",
    description: "費塔河下游末端的城市，農業發達，僅次於安納比的一座產糧城市",
    type: "城市",
    coords: [
      2558.312334332929,
      -2187.7883809911777
    ],
    createTime: "2025-03-01T15:43:11.476Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843810276-725lafi",
    name: "埃比梅洛",
    description: "因魯伯倫山脈的豐富礦藏而興起的城市，是帝國最大的礦業開採城市，供應著幾乎整個帝國的金屬資源",
    type: "城市",
    coords: [
      1960,
      -2210
    ],
    createTime: "2025-03-01T15:43:30.276Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843842580-rk9y1lh",
    name: "安納比",
    description: "位於阿烏拉平原中心，富庶的土地使其農業極為發達，又被稱作是帝國糧倉",
    type: "城市",
    coords: [
      1692,
      -1860
    ],
    createTime: "2025-03-01T15:44:02.580Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843860468-9xg0mik",
    name: "烏里丹多",
    description: "帝國東海岸的港口貿易城市，具有東海岸少有的天然港灣，當地不僅商業發達，造船業也相當發達",
    type: "城市",
    coords: [
      1857.5415136342504,
      -1354.5069039880993
    ],
    createTime: "2025-03-01T15:44:20.468Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843882684-f7v40jk",
    name: "安達比諾希",
    description: "達勒平原北部的一座城市，早期為了搶奪、開墾達勒平原而建立，是帝國掌控達勒平原的重要樞紐",
    type: "城市",
    coords: [
      2107.275007784822,
      -3316.6986437425894
    ],
    createTime: "2025-03-01T15:44:42.684Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843904284-9zvrc34",
    name: "恰尼奇",
    description: "帝國西岸的港口城市，然而帝國西岸的港口城市，盛產大量的海洋產品，當地並沒有多少貿易活動，而是做為防備阿里奧克帝國的軍事港口",
    type: "城市",
    coords: [
      2779.177027761359,
      -3314.320229512584
    ],
    createTime: "2025-03-01T15:45:04.284Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843918188-uk4ma0g",
    name: "奈耶里莫要塞",
    description: "帝國用來鞏固達勒平原而建立的要塞，並且負責著西嘆息之牆的守衛",
    type: "要塞",
    coords: [
      1551.915285078551,
      -3470.1063615779403
    ],
    createTime: "2025-03-01T15:45:18.188Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843949835-uhifpwu",
    name: "弗洛勒要塞",
    description: "由於首都位置極容易受到威脅，後來興建用來拱衛首都的大型要塞，屯住著帝國最尖端的科技",
    type: "要塞",
    coords: [
      2599.6067533959485,
      -3160.912511677233
    ],
    createTime: "2025-03-01T15:45:49.835Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843972579-nm161od",
    name: "安米納堡壘",
    description: "建於法茲托大平原南部，專門用於監視並警惕北嘆息之牆，以及作為進攻的橋頭堡",
    type: "要塞",
    coords: [
      2145.3296354649087,
      -2994.423515576852
    ],
    createTime: "2025-03-01T15:46:12.579Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740843997220-vy472vm",
    name: "帕拉尼歐要塞",
    description: "在達可托斯海灣有著大規模軍事港口的軍事要塞，是塞菲斯帝國的重要海軍駐地",
    type: "要塞",
    coords: [
      2478.3076276656707,
      -1809.9732290341415
    ],
    createTime: "2025-03-01T15:46:37.220Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844022244-r82a39d",
    name: "派西歐洛要塞",
    description: "北方諸國最早興建的要塞，同樣是為了抵禦南方王國的攻擊而建造，不僅是阿烏拉平原的最後一條防線，同時有著預警著可能來自海灣的威脅",
    type: "要塞",
    coords: [
      2070.4095872197377,
      -1974.0838109045171
    ],
    createTime: "2025-03-01T15:47:02.244Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844035060-3f95vnw",
    name: "凱迪曼托堡壘",
    description: "為了鞏固帝國在阿烏拉平原的統治而興建，並且有著抵禦、警戒東嘆息之牆的目的",
    type: "要塞",
    coords: [
      1585.3725854146037,
      -2226.195719285094
    ],
    createTime: "2025-03-01T15:47:15.060Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844057252-7r2xlzc",
    name: "伊茲鎮",
    description: "位於伊努達河下游，有著廣闊田野與牧場的城鎮",
    type: "城鎮",
    coords: [
      2416.628358801506,
      -2674.5268016411196
    ],
    createTime: "2025-03-01T15:47:37.252Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844075852-y8lxb7p",
    name: "洛伊鎮",
    description: "位於費塔河下游，有著廣闊田野，並且水產養殖相當興盛的城鎮",
    type: "城鎮",
    coords: [
      2719.8761731271998,
      -2389.117094040467
    ],
    createTime: "2025-03-01T15:47:55.852Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844100124-ojdrciq",
    name: "凡德拉鎮",
    description: "緊挨著尼費羅森林與費塔河，有著有著豐富的森林資源，當地盛產優質木材與野獸毛皮",
    type: "城鎮",
    coords: [
      2980.3125313127957,
      -2744.6900214262805
    ],
    createTime: "2025-03-01T15:48:20.124Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844133475-nq3wnzz",
    name: "波莫多諾鎮",
    description: "在尼費羅森林中的城鎮，此處的人們多由早期生活在森林的原住民組成，城鎮多靠著森林豐富的資源自給自足，與外界來往稀疏",
    type: "城鎮",
    coords: [
      2912.3682246416643,
      -2138.1943927748925
    ],
    createTime: "2025-03-01T15:48:53.475Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844155811-h9r4j52",
    name: "凱米歐鎮",
    description: "歐魯森林旁的繁華小鎮，作為西側魔晶鐵路的中轉站之一，商人們帶來的利益逐漸使人們聚集而成，此地居住的多為軍眷家庭",
    type: "城鎮",
    coords: [
      2328.46753208621,
      -2832.6913479364816
    ],
    createTime: "2025-03-01T15:49:15.811Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844196572-0070g62",
    name: "麥克利鎮",
    description: "位在烏里丹多對外的必經之路上，來往的綠人多會在此駐足休息，之後逐漸形成了城鎮",
    type: "城鎮",
    coords: [
      2015.7060608404945,
      -1738.6208021339783
    ],
    createTime: "2025-03-01T15:49:56.572Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844221291-ht6v90d",
    name: "皮洛鎮",
    description: "為了開墾阿烏拉平原肥沃的土地而建立，是盛產糧食的城鎮",
    type: "城鎮",
    coords: [
      1534.0771792643925,
      -1940.7860116844408
    ],
    createTime: "2025-03-01T15:50:21.291Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844230459-j98cibs",
    name: "馬茲沃鎮",
    description: "為了開墾阿烏拉平原肥沃的土地而建立，是盛產糧食的城鎮",
    type: "城鎮",
    coords: [
      1702.9445895947788,
      -2148.897256809917
    ],
    createTime: "2025-03-01T15:50:30.459Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844253260-4jcrqwq",
    name: "帕尼利鎮",
    description: "在達可托斯海灣旁的漁業城鎮，不僅捕撈漁獲，也狩獵著海獸作為貿易的商品",
    type: "城鎮",
    coords: [
      2338.532931464671,
      -1769.2460576938154
    ],
    createTime: "2025-03-01T15:50:53.260Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844270901-7te2n3e",
    name: "希多洛鎮",
    description: "靠近西嘆息之牆的一座小鎮，此地多為開墾土地的平民，但也有貿易走私的商人會在此地出沒",
    type: "城鎮",
    coords: [
      1403.264395703211,
      -3391.6186919877605
    ],
    createTime: "2025-03-01T15:51:10.901Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844290123-w3fw4ra",
    name: "歐迪斯哨站",
    description: "建立於帝國的西海岸、帕尼奇的南方，監視著周圍海面，堤防著阿里奧克帝國的襲擊，附設燈塔指引著船隻方向",
    type: "哨站",
    coords: [
      2613.877238775981,
      -3389.2402777577554
    ],
    createTime: "2025-03-01T15:51:30.123Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844306908-x62w2ch",
    name: "西堤哨站",
    description: "達勒平原西岸邊的一座小型哨站，巡視沿岸任何可能登陸的走私船隻，附設燈塔指引著船隻方向",
    type: "哨站",
    coords: [
      1915.8126622693837,
      -3658.0010857483703
    ],
    createTime: "2025-03-01T15:51:46.908Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844321363-gi117d0",
    name: "普羅許哨站",
    description: "為了警戒屯住著軍隊的北嘆息之牆，特別建立的一座大型哨所，負責拖延並在第一時間通知安米納堡壘",
    type: "哨站",
    coords: [
      2091.6619973475135,
      -2558.2911402553996
    ],
    createTime: "2025-03-01T15:52:01.363Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844380619-ljoz256",
    name: "艾杰都哨站",
    description: "位於阿烏拉平原通往法茲托平原的要道上，如果前線出現變化，將負責第一時間破壞鐵路並通知首都與沿路、周圍城市",
    type: "哨站",
    coords: [
      2205.979198330048,
      -2091.8153152897867
    ],
    createTime: "2025-03-01T15:53:00.619Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844401332-2ur5zr7",
    name: "埃拉茲畢哨站",
    description: "位於烏泌頓沼澤，是地理位置最危險的哨所，儘管敵人不太可能從此地登陸，但依舊在此建立了哨站監視往來船隻",
    type: "哨站",
    coords: [
      1529.3203498934993,
      -1259.3703347878816
    ],
    createTime: "2025-03-01T15:53:21.332Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844430300-0xzrljm",
    name: "格拉傑斯山",
    description: "豎立在大陸最北邊，長年被冰雪所覆蓋的高聳山脈，環境嚴苛難以居住，並生活著許多危險的魔獸，甚至有飛龍的存在",
    type: "山",
    coords: [
      3189.453482437298,
      -2062.0851374147182
    ],
    createTime: "2025-03-01T15:53:50.300Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844450900-o4vt0ld",
    name: "圖魯庫蘭山脈",
    description: "山脈有1/3被大雪給覆蓋，並將帝國腹地與大陸西北角分割開來",
    type: "山",
    coords: [
      3256.0490808774503,
      -2880.2596325365907
    ],
    createTime: "2025-03-01T15:54:10.900Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844462084-t65jilo",
    name: "巴蒂蘇山谷",
    description: "兩側皆是懸崖峭壁，相當寬敞的山谷足以讓數十輛馬車同時通過，並且將圖魯庫蘭山脈截斷",
    type: "山",
    coords: [
      2932.5847455967105,
      -3013.4508294168954
    ],
    createTime: "2025-03-01T15:54:22.084Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844483219-0se169q",
    name: "菲尼朵斯雪原",
    description: "位於大陸的北端，長年被大雪覆蓋的廣闊平原，有著許多凍結的冰川與湖泊",
    type: "平原",
    coords: [
      3396.3755204477716,
      -2433.1177572955676
    ],
    createTime: "2025-03-01T15:54:43.219Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844506035-fxwzuud",
    name: "史坦歐涅森林",
    description: "西北端未經人類開發的原始森林，到處都是粗壯的參天古木，並且有著大量的生物、魔獸在此地棲息",
    type: "森林",
    coords: [
      3447.67530254023,
      -3311.450083269128
    ],
    createTime: "2025-03-01T15:55:06.035Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844523396-91hi0hb",
    name: "尼費羅森林",
    description: "位於氣候變化間隔的一片森林，有著茂密且高大的針葉樹林，時不時會有飄落的雪花",
    type: "森林",
    coords: [
      3059.1811586930135,
      -2450.3721540493243
    ],
    createTime: "2025-03-01T15:55:23.396Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844539485-w980k3b",
    name: "欣特拉森林",
    description: "曾經被大火燒毀，後來再次茂盛的森林，偶爾能看到過去戰爭的機械殘骸，或是稀有的欣特拉之螢",
    type: "森林",
    coords: [
      2292.283627981626,
      -2332.6466559138044
    ],
    createTime: "2025-03-01T15:55:39.485Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844590835-0tb8rsy",
    name: "提布森林",
    description: "位於大陸最東端得茂密樹林，由於此處遠離人口居住地，因此無論是野獸或魔獸，都異常的多",
    type: "森林",
    coords: [
      1690.2017946599663,
      -1029.2572122705467
    ],
    createTime: "2025-03-01T15:56:30.835Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844614996-63vsyvy",
    name: "法茲托大平原",
    description: "富庶的廣大平原，有兩條寬廣的河流，能看見一望無際的田野，以及大量放牧的牲畜",
    type: "平原",
    coords: [
      2630.5261383860193,
      -2563.9305399458667
    ],
    createTime: "2025-03-01T15:56:54.996Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844630683-2urov77",
    name: "烏泌頓沼澤",
    description: "充滿泥沼與扭曲樹木的沼澤，沿岸是盤根錯節的紅樹林，充斥著許多危險的生物",
    type: "森林",
    coords: [
      1465.1031656833525,
      -1469.8599941433633
    ],
    createTime: "2025-03-01T15:57:10.683Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844656332-maudv6o",
    name: "費塔河",
    description: "特洛薩拉大陸最長最寬廣的河流，中途形成了巨大的湖泊，沿岸有些村莊養殖水產",
    type: "水域",
    coords: [
      2904.043774836645,
      -2647.175037996057
    ],
    createTime: "2025-03-01T15:57:36.332Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844666420-fmzi41v",
    name: "伊努達河",
    description: "特洛薩拉大陸第二長的河流，中途形成湖泊，沿岸有些村莊養殖水產",
    type: "水域",
    coords: [
      2566.3089541758723,
      -2794.6367202563947
    ],
    createTime: "2025-03-01T15:57:46.420Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844689221-ptmj45b",
    name: "班尼哈沙灘",
    description: "沿岸充滿了柔軟的鵝黃色細沙，是許多人喜歡前往的度假地",
    type: "水域",
    coords: [
      3187.0750682072926,
      -3258.427495107456
    ],
    createTime: "2025-03-01T15:58:09.221Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844711676-dfu5y0v",
    name: "達可托斯海灣",
    description: "是特洛薩拉大陸少有的天然良港，周圍沿海都是懸崖峭壁，然而這裡並沒有商船來往，而是停泊著大量戰船，以及許多的造船廠建築",
    type: "水域",
    coords: [
      2483.0644561256818,
      -1610.1864337136844
    ],
    createTime: "2025-03-01T15:58:31.676Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844730419-fdhmk07",
    name: "都拉杜斯冰洋",
    description: "大半海面漂浮著浮冰，越是鄰近極北的【傑拉蒂尤】大陸，海面逐漸被厚厚的冰層覆蓋，同時有著傳說中的格拉里出沒",
    type: "水域",
    coords: [
      3053.883871326988,
      -1296.235755352966
    ],
    createTime: "2025-03-01T15:58:50.419Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844767084-qmkjvrp",
    name: "莫里海",
    description: "",
    type: "水域",
    coords: [
      -33.94112549695428,
      -3841.004035405326
    ],
    createTime: "2025-03-01T15:59:27.084Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844826693-m56f49v",
    name: "莫魯斯山",
    description: "",
    type: "山",
    coords: [
      2636.094080263449,
      -1994.041122946064
    ],
    createTime: "2025-03-01T16:00:26.693Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844855767-36bwrhc",
    name: "歐魯森林",
    description: "",
    type: "森林",
    coords: [
      2415.4767645332463,
      -3272.4901833313415
    ],
    createTime: "2025-03-01T16:00:55.767Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740844883892-dbgcsr2",
    name: "比斯迪亞森林",
    description: "",
    type: "森林",
    coords: [
      2169.4036046803276,
      -1561.2917728598968
    ],
    createTime: "2025-03-01T16:01:23.892Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740968903858-eqvmnix",
    name: "邁達山脈",
    description: "史嘉萊半島北部，東西向延伸的山脈，沿海有大量暗礁，長年因豐沛水氣而降雨，瀰漫著濃重霧氣",
    type: "山",
    coords: [
      1241.1631089144828,
      -151.36135474566862
    ],
    createTime: "2025-03-03T02:28:23.858Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740968918576-h0xjcvw",
    name: "圖耶列山脈",
    description: "史嘉萊半島南部，東西向延伸的山脈，沿海有大量暗礁，每當颱風侵襲時，會颳起強風，偶爾會有龍捲風發生",
    type: "山",
    coords: [
      859.3961363892963,
      -94.18039850841603
    ],
    createTime: "2025-03-03T02:28:38.576Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740968941128-lvb2c5h",
    name: "庫魯湖",
    description: "史嘉萊半島上最大的湖泊，與其相連的庫魯河也是世界上第二長的河流，許多船隻會通過庫魯河運載人員或物資",
    type: "水域",
    coords: [
      1067.9384473722175,
      -84.08964152537146
    ],
    createTime: "2025-03-03T02:29:01.128Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740968966878-5ycgh0e",
    name: "石迪利火山區",
    description: "史家蘭半島西南端的火山地區，當地共有十七座長年活躍的活火山，地區炎熱無比，覆蓋著極厚的岩漿層",
    type: "山",
    coords: [
      623.9451401182562,
      -1353.8432285584804
    ],
    createTime: "2025-03-03T02:29:26.878Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740969004124-hwwsg1y",
    name: "歐傑里諾森林",
    description: "一片未經開發的原始森林，隨處都是高大粗壯的樹木，當地有許多居住在森林中的原住民",
    type: "森林",
    coords: [
      1387.4790851686291,
      412.03924347432013
    ],
    createTime: "2025-03-03T02:30:04.124Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740969026632-qw5br2u",
    name: "素利斯島",
    description: "南方鄰近西葛門提群島的一座島嶼，鮮無人煙，經常成為海盜的藏身處",
    type: "自定義",
    coords: [
      410.452477435109,
      -910.2218314946115
    ],
    createTime: "2025-03-03T02:30:26.632Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740969049743-tw43swb",
    name: "里耶奈島",
    description: "因地殼擠壓而隆起的島嶼，上面有著高山與豐富礦藏",
    type: "自定義",
    coords: [
      867.9001273331297,
      298.9872136402301
    ],
    createTime: "2025-03-03T02:30:49.743Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740969083256-fugzhus",
    name: "格拉逆島",
    description: "圖蘇利帝國最大的一座離島，有大量未開發的森林和田野",
    type: "自定義",
    coords: [
      1654.9791720106066,
      860.7060190297115
    ],
    createTime: "2025-03-03T02:31:23.256Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740969096448-1g22fhf",
    name: "埃斯萊姆山",
    description: "豎立在格拉逆島上的高山，當地有許多關於埃斯萊姆山的故事和傳說，是一座富有神秘色彩的高山",
    type: "山",
    coords: [
      1570.8895304852351,
      783.3435488263697
    ],
    createTime: "2025-03-03T02:31:36.448Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740969130082-9rvrltf",
    name: "塔德沙洲",
    description: "在東部外海的一片沙洲，在漲潮時會隱沒在海面下，周圍一帶水面較淺，不熟悉該海域的船隻容易在此地擱淺",
    type: "秘境",
    coords: [
      1202.5769006041082,
      748.0258993857137
    ],
    createTime: "2025-03-03T02:32:10.082Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740969148632-0du534i",
    name: "尼克斯島",
    description: "北端最靠近傑拉蒂尤的島嶼，島上長年覆蓋厚雪，只有少量村莊居住在此，周圍海域經常出現漂浮的冰山，在冬季的海面會因寒冷結凍，需要專門的破冰船隻才能通行",
    type: "自定義",
    coords: [
      2065.3366226544194,
      890.9782899788452
    ],
    createTime: "2025-03-03T02:32:28.632Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740969181104-bbgs0to",
    name: "拉爾庇司海",
    description: "史嘉萊半島北面的近海，長年有商船在此海域通行，比起迪納塔海域來說，是相對安全的航行路線",
    type: "水域",
    coords: [
      1483.3412765075525,
      -312.8134664743818
    ],
    createTime: "2025-03-03T02:33:01.104Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740969217248-028vqyc",
    name: "迪納塔海域",
    description: "史嘉萊半島南面的海域，鄰近長年戰亂的【西葛門提群島】，除了海獸以外，還需要面臨海盜的威脅",
    type: "水域",
    coords: [
      336.35856610148585,
      316.1770521353967
    ],
    createTime: "2025-03-03T02:33:37.248Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740969236624-f4xgsaa",
    name: "潘德勒海峽",
    description: "潘德勒海峽是特洛薩拉大陸、史嘉萊半島、賽庫溫多大陸之間，重要的貿易與交通樞紐，相對安全平穩，並有軍隊船隻巡邏",
    type: "水域",
    coords: [
      756.8067737283432,
      -1611.1575316261171
    ],
    createTime: "2025-03-03T02:33:56.624Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970021121-6acobk3",
    name: "潘涅德拉山脈",
    description: "",
    type: "山",
    coords: [
      846.7154658819375,
      -891.9053362520408
    ],
    createTime: "2025-03-03T02:47:01.121Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970394215-6x30duu",
    name: "勒艾席爾",
    description: "圖蘇利帝國的首都，皇宮的所在地，政治的中心",
    type: "首都",
    coords: [
      1084.5568888824816,
      -212.86807358548708
    ],
    createTime: "2025-03-03T02:53:14.215Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970409983-z2iwg3z",
    name: "邁責昂城",
    description: "鄰近潘德勒海峽的駐軍都市，是商人通過潘德勒海峽的必經之路，商業活動極為繁盛",
    type: "城市",
    coords: [
      941.8520350821551,
      -1000.1231837172885
    ],
    createTime: "2025-03-03T02:53:29.983Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970480495-i76x64r",
    name: "冷麥德城",
    description: "在史嘉萊半島東部的大型港口都市，除了貿易，更多是提供離島之間的往來場所",
    type: "城市",
    coords: [
      1072.6648177324544,
      254.49032261058233
    ],
    createTime: "2025-03-03T02:54:40.495Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970527526-hfezwyr",
    name: "利希瑟邁要塞",
    description: "負責維護迪納塔海域的商船航線安全，以及可能來自西葛門提群島的海盜或來自其他大陸的威脅",
    type: "要塞",
    coords: [
      649.3070847914857,
      -943.0412421971579
    ],
    createTime: "2025-03-03T02:55:27.526Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970559182-2uksq6l",
    name: "厄槓姆要塞",
    description: "主要負責拱衛首都的軍事要塞，以及支援、控制其他的內陸城市、城鎮",
    type: "要塞",
    coords: [
      1052.4482967774081,
      38.05462768008707
    ],
    createTime: "2025-03-03T02:55:59.182Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970596487-sd85oon",
    name: "席爾利鎮",
    description: "西北方的一座礦山城鎮，臨海的地理位置使其也有人以漁業為生",
    type: "城鎮",
    coords: [
      1115.4762738725524,
      -567.2517938562979
    ],
    createTime: "2025-03-03T02:56:36.487Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970619839-3bc2sla",
    name: "納迪路鎮",
    description: "位在席爾利鎮的上游，並不臨海，同樣是因礦產而興盛的小鎮",
    type: "城鎮",
    coords: [
      1032.231775822362,
      -726.6055472666626
    ],
    createTime: "2025-03-03T02:56:59.839Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970662486-v5jtszv",
    name: "薩姆鎮",
    description: "在歐傑里諾森林旁，有極為豐富的林產資源，同時也開採著一般的礦物",
    type: "城鎮",
    coords: [
      1258.181127672879,
      316.3290925907238
    ],
    createTime: "2025-03-03T02:57:42.486Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970721215-1mowcbs",
    name: "波耶茲鎮",
    description: "靠近首都的一座小鎮，有肥沃的土地供其耕種，是一座供應糧食的重要城鎮",
    type: "城鎮",
    coords: [
      915.6894785520952,
      -416.2224902509524
    ],
    createTime: "2025-03-03T02:58:41.215Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970748407-fu8z2vg",
    name: "伊尹鎮",
    description: "里耶奈島是早期海外殖民而開墾的島嶼，小鎮能夠在島嶼上自給自足，並向城市出口多餘的礦產與糧食",
    type: "城鎮",
    coords: [
      924.0139283571143,
      343.6808562357864
    ],
    createTime: "2025-03-03T02:59:08.407Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970830655-68adpt9",
    name: "謬哈克鎮",
    description: "史嘉萊半島本島最北端的一座小鎮，基本以漁業為生，與格拉逆島有頻繁的往來，也是許多商船的必經之地",
    type: "城鎮",
    coords: [
      1596.0213961515503,
      549.9462555759293
    ],
    createTime: "2025-03-03T03:00:30.655Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970850303-mnyvbma",
    name: "密杜魯鎮",
    description: "小鎮靠近美麗的塔德沙洲，但周圍海域相當危險，大型船隻容易在此地擱淺",
    type: "城鎮",
    coords: [
      1370.6611568635547,
      728.2162956097168
    ],
    createTime: "2025-03-03T03:00:50.303Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970878160-39fvl5c",
    name: "勒黑夫鎮",
    description: "最北端的小鎮，氣候較為寒冷，經常有許多冒險家或旅行者來到此地，作為冒險的出發點",
    type: "城鎮",
    coords: [
      1826.4270139310681,
      881.2594431858929
    ],
    createTime: "2025-03-03T03:01:18.160Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740970990166-a36ov8q",
    name: "沃爾夫島",
    description: "島嶼上隨處可見各種不同宗教所建立的教會和神寺，相當壯觀",
    type: "自定義",
    coords: [
      -382.5447686219222,
      -1641.9019459151632
    ],
    createTime: "2025-03-03T03:03:10.166Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971021998-xyv7mi9",
    name: "德拉法姆島",
    description: "北面的一座火山島嶼，在傳說中是一頭火焰巨龍的領地，火山長年噴發，大地覆蓋著堅硬漆黑的火山岩，遍布岩漿河",
    type: "自定義",
    coords: [
      184.5548698896889,
      -1648.9730137270287
    ],
    createTime: "2025-03-03T03:03:41.998Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971036551-7mglaca",
    name: "布拉德萊島",
    description: "",
    type: "自定義",
    coords: [
      -48.790367901871775,
      -1726.0476528763625
    ],
    createTime: "2025-03-03T03:03:56.551Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971104430-h0io32h",
    name: "提瑪魯山",
    description: "布拉德萊島上唯一一座高山，在山頂能俯視整個島嶼，甚至遠瞰到周圍的幾個島嶼輪廓",
    type: "山",
    coords: [
      -35.35533905932737,
      -1776.9593411217938
    ],
    createTime: "2025-03-03T03:05:04.430Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971120350-5mzmso0",
    name: "西葛門提內海",
    description: "西葛門提群島幾個島嶼之間的海域，能夠頻繁見到來自其他國家的海盜船",
    type: "水域",
    coords: [
      38,
      -1304
    ],
    createTime: "2025-03-03T03:05:20.350Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971146254-41wdboj",
    name: "凡斯特蘭福",
    description: "歷代王國的首都，現今血族所聚集的首都城市，象徵至高力量與權力的宮殿也坐落於此",
    type: "首都",
    coords: [
      -1.5,
      -1755
    ],
    createTime: "2025-03-03T03:05:46.254Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971323806-n4lxrfd",
    name: "拿克士鎮",
    description: "眷養著大量血羊的城鎮，人們在此住自給自足的生活著，實際上被看管此處的血族所支配",
    type: "城鎮",
    coords: [
      35.5,
      -1710
    ],
    createTime: "2025-03-03T03:08:43.807Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971339605-w3mqw4n",
    name: "叩比爾鎮",
    description: "眷養著大量血羊的城鎮，人們在此住自給自足的生活著，實際上被看管此處的血族所支配",
    type: "城鎮",
    coords: [
      -89.5,
      -1743
    ],
    createTime: "2025-03-03T03:08:59.605Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971369286-qicslt4",
    name: "夫魯以鎮",
    description: "眷養著大量血羊的城鎮，人們在此住自給自足的生活著，實際上被看管此處的血族所支配",
    type: "城鎮",
    coords: [
      -50.5,
      -1836
    ],
    createTime: "2025-03-03T03:09:29.286Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971478942-62sbhwf",
    name: "法曼迪歐島",
    description: "坐落在西葛門提內海上的美麗島噢，島嶼上的大多數地區保持著原始未開發的狀態",
    type: "自定義",
    coords: [
      -207,
      -1551
    ],
    createTime: "2025-03-03T03:11:18.942Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971494055-n2razes",
    name: "法曼迪歐山",
    description: "法曼迪歐山上遍布粗大且高聳的杉木，具有極為原始的風景",
    type: "山",
    coords: [
      -202,
      -1496.5
    ],
    createTime: "2025-03-03T03:11:34.055Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971650166-0xx234i",
    name: "麥爾基島",
    description: "傳說在上古時代，沉沒在海底的泰坦之島，據說在海底有著壯觀的水下遺跡",
    type: "自定義",
    coords: [
      -285.5,
      -1276.5
    ],
    createTime: "2025-03-03T03:14:10.166Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971675534-7ea2y2l",
    name: "庫魯威內特",
    description: "埃夸萊氏族最大的聚居地，以城堡為中心向四周擴散的城市，是狼人氏族的權力中心",
    type: "首都",
    coords: [
      -170.5,
      -1511
    ],
    createTime: "2025-03-03T03:14:35.534Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971849646-aqk150j",
    name: "普蘭納山脈",
    description: "已經被完整開發的山脈，大面積的種植著酸可可樹，是當地人用於出口的重要商品",
    type: "山",
    coords: [
      -394.5,
      -1729.5
    ],
    createTime: "2025-03-03T03:17:29.646Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971864621-3pa3p3f",
    name: "巴第司湖",
    description: "位於島嶼西北側，一個深不見底的的巨大湖泊，相當清澈，在夜晚會反射天上的星光",
    type: "水域",
    coords: [
      -305,
      -1732
    ],
    createTime: "2025-03-03T03:17:44.621Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971878670-hyqme1m",
    name: "維達克沃",
    description: "充斥著無數神寺、教堂的首都，就連皇宮也是一座宏偉的神殿，是目前哈利希教的主要根據地",
    type: "首都",
    coords: [
      -356,
      -1723
    ],
    createTime: "2025-03-03T03:17:58.670Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971892974-g9w81bp",
    name: "里奇德鎮",
    description: "在巴第司湖畔的繁華城鎮，當地混雜著大量的宗教人士，其中由戈森克教與無一教主導",
    type: "城鎮",
    coords: [
      -271,
      -1738
    ],
    createTime: "2025-03-03T03:18:12.974Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971902902-pjfdaps",
    name: "托利根鎮",
    description: "島嶼上唯一的港口城鎮，當地混雜著大量的宗教人士，其中由德心宗與吉尼瑟斯教主導",
    type: "城鎮",
    coords: [
      -331,
      -1647
    ],
    createTime: "2025-03-03T03:18:22.902Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971949229-pwys8pn",
    name: "里帕索城",
    description: "位於泰勒貢山山腳下，作為卡利達城邦的首都，是政治、商業、軍事的中心",
    type: "首都",
    coords: [
      211.67886647048437,
      -1365.2097680231238
    ],
    createTime: "2025-03-03T03:19:09.229Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971963477-eyh3dur",
    name: "普費歐斯要塞",
    description: "在奈夫特島西岸，早期為了抵禦來自史嘉萊半島的討伐軍而建造，城牆沿著海岸線數公里，並設有軍用港口",
    type: "要塞",
    coords: [
      190.27313840043539,
      -1256.3973170003749
    ],
    createTime: "2025-03-03T03:19:23.477Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740971982549-7fi6st6",
    name: "哈路曼堡壘",
    description: "位於貢亞島西北方的海岸，作為卡利達城邦爭奪貢亞島的立足點，設有軍用港口",
    type: "要塞",
    coords: [
      18.43271028254218,
      -1163.6391620301627
    ],
    createTime: "2025-03-03T03:19:42.549Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972002421-b2zktpk",
    name: "安福洛庇鎮",
    description: "泰勒貢山腳下的一座城鎮，以大面積的種植業聞名，金星果樹即是此城鎮的特產",
    type: "城鎮",
    coords: [
      227.13855896551974,
      -1298.01956602547
    ],
    createTime: "2025-03-03T03:20:02.421Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972012454-w85wd9z",
    name: "費勒瑪鎮",
    description: "位於出海口的城鎮，漁業及其加工業相當發達，遍地可見用於養殖的魚塭",
    type: "城鎮",
    coords: [
      189.67853484293403,
      -1436.562194923287
    ],
    createTime: "2025-03-03T03:20:12.454Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972023189-i4nq8s9",
    name: "巴利亞鎮",
    description: "位於出海口的城鎮，漁業及其加工業相當發達，遍地可見用於養殖的魚塭，也是唯一一個對外的民用貿易港口",
    type: "城鎮",
    coords: [
      125.46135063278707,
      -1405.048206375715
    ],
    createTime: "2025-03-03T03:20:23.189Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972049413-owtra73",
    name: "奈夫特島",
    description: "島嶼上的各個城鎮村莊，經常能見到魚塭與加工魚類食品的工坊",
    type: "自定義",
    coords: [
      167.08359965788233,
      -1336.6687972630587
    ],
    createTime: "2025-03-03T03:20:49.413Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972060941-fzdb31i",
    name: "泰勒貢山",
    description: "山脈常年翠綠茂盛的長著闊葉樹林，山腳下大面積種植著金星果樹，有著大量的種植園",
    type: "山",
    coords: [
      251.5173048230755,
      -1377.6964427306525
    ],
    createTime: "2025-03-03T03:21:00.941Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972081902-uloa62f",
    name: "貢亞島",
    description: "有著美麗的細沙沙灘，以及大面積的肥沃土壤，還有過去萊登王國時期所留下的建築與遺跡",
    type: "自定義",
    coords: [
      -22.5949351850517,
      -1102.989599165024
    ],
    createTime: "2025-03-03T03:21:21.902Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972096805-aszq6hf",
    name: "山杜伊斯湖",
    description: "貢亞島上最大的淡水湖泊，緊貼著南方的貢亞山脈，湖水呈現神秘的紅、綠、藍三種顏色",
    type: "水域",
    coords: [
      22.00033162755034,
      -1073.2594212899558
    ],
    createTime: "2025-03-03T03:21:36.805Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972113686-wi4uiax",
    name: "貢亞山脈",
    description: "未經開發的貢亞山脈在秋季時，能夠見到大片火紅色的楓樹林，以及許多生存其中的神祕生物",
    type: "山",
    coords: [
      -56.487337962629255,
      -990.6095267972667
    ],
    createTime: "2025-03-03T03:21:53.686Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972139812-fnkkxxd",
    name: "伊烏司島",
    description: "島嶼上的各個城鎮村莊，經常能見到魚塭與大片的農田",
    type: "自定義",
    coords: [
      181.35408503791498,
      -760.4979500442402
    ],
    createTime: "2025-03-03T03:22:19.812Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972148821-n216bdx",
    name: "伊烏司山",
    description: "山脈常年翠綠茂盛的長著闊葉樹林，沒有受到太多的開發，大多區域還未曾有人涉足",
    type: "山",
    coords: [
      237.84142300054424,
      -695.0915587190905
    ],
    createTime: "2025-03-03T03:22:28.821Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972171903-ompy0t8",
    name: "比訶納城",
    description: "位於伊烏司山山腳下，作為立迪爾城邦的首都，是政治、商業、軍事的中心",
    type: "首都",
    coords: [
      206.92203801047347,
      -739.6868255316925
    ],
    createTime: "2025-03-03T03:22:51.903Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972182861-nc14tvt",
    name: "阿彌司要塞",
    description: "在伊烏司島西岸，早期為了抵禦來自史嘉萊半島的討伐軍而建造，城牆沿著海岸線數公里，並設有軍用港口",
    type: "要塞",
    coords: [
      174.81344590540002,
      -810.4446488743545
    ],
    createTime: "2025-03-03T03:23:02.861Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972204933-2gfhvsd",
    name: "托米哈鎮",
    description: "位於伊烏司島北側，河川與海洋的交界處，除了發達的漁業以外，也大規模開採著山地的資源",
    type: "城鎮",
    coords: [
      254.49032261058233,
      -771.795417636766
    ],
    createTime: "2025-03-03T03:23:24.933Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972214829-sdu7y6p",
    name: "瓦薩卡鎮",
    description: "是伊烏司島上大規模種植糧食的平原小鎮，臨海的一面由於懸崖地形而無法建立瑪頭",
    type: "城鎮",
    coords: [
      141.51564668532382,
      -750.389689566717
    ],
    createTime: "2025-03-03T03:23:34.829Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972255181-gqhutma",
    name: "代恩卻島",
    description: "島嶼上的各個城鎮村莊，經常能見到魚塭與大片種植棉花的農田",
    type: "自定義",
    coords: [
      -353.7891167133095,
      -987.63650900976
    ],
    createTime: "2025-03-03T03:24:15.181Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972264893-a8cykj4",
    name: "代恩卻山",
    description: "山脈常年翠綠茂盛的長著闊葉樹林，沒有受到太多的開發，大多區域還未曾有人涉足",
    type: "山",
    coords: [
      -406.70883333093064,
      -1006.069219292302
    ],
    createTime: "2025-03-03T03:24:24.893Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972278661-w1yn7xf",
    name: "安固斯峽灣",
    description: "貢亞島上天然形成的美麗峽灣，是極佳的天然港口，但此處仍處在紛爭與戰亂中，僅有過去萊登王國留存的遺跡",
    type: "水域",
    coords: [
      -102.27181189023402,
      -1024.5019295748443
    ],
    createTime: "2025-03-03T03:24:38.661Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972296853-vuw5wjz",
    name: "迪特勒法",
    description: "作為新木城邦的首都，是繁華的政治、經濟中心，同時也是國王居住的城堡所在地",
    type: "首都",
    coords: [
      -374.60024122585713,
      -1029.8533615923566
    ],
    createTime: "2025-03-03T03:24:56.853Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972308005-appova5",
    name: "蘭希姆要塞",
    description: "在代恩卻島北岸，是運送軍隊前往貢亞島的橋頭堡，也是預防來自其他城邦攻擊的重要堡壘，有著極大規模的軍事港口",
    type: "要塞",
    coords: [
      -316.3290925907238,
      -1007.2584264073048
    ],
    createTime: "2025-03-03T03:25:08.005Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972320789-7cn1jwp",
    name: "木薩堡壘",
    description: "建立在貢亞島南岸，是新木城邦在島嶼上的重要據點，同時設有軍眷居住區",
    type: "要塞",
    coords: [
      -165.8943925428796,
      -1054.2321074499123
    ],
    createTime: "2025-03-03T03:25:20.789Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972344125-fpqn6d9",
    name: "潘德司鎮",
    description: "位於代恩卻島西岸，鄰近傳說中沉沒的麥爾基島，除了是盛產糧食的城鎮以外，也是許多冒險家的聚集地",
    type: "城鎮",
    coords: [
      -340.11323489077824,
      -1082.1784746524763
    ],
    createTime: "2025-03-03T03:25:44.125Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972359605-7bedazg",
    name: "伊烏達鎮",
    description: "位於代恩卻島東岸，作為一個礦業發達的小鎮，產出著許多金屬礦物，同於與法里納克城邦的貿易往來頻密",
    type: "城鎮",
    coords: [
      -392.438347950898,
      -941.8520350821551
    ],
    createTime: "2025-03-03T03:25:59.605Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972379509-hzblmy8",
    name: "邁烏特隆島",
    description: "島嶼上的各個城鎮村莊，經常能見到大規模專門種植冰甜蕉與刺刺果的種植園",
    type: "自定義",
    coords: [
      -200.97600243545986,
      -683.7940911265647
    ],
    createTime: "2025-03-03T03:26:19.509Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972391861-95gil5n",
    name: "溫德普特山",
    description: "山脈常年翠綠茂盛的長著闊葉樹林，山腳與山腰處遍布種植刺刺果的種植園，由於過度開發，每當颱風經常發生土石流與山崩",
    type: "山",
    coords: [
      -243.78745857555782,
      -645.1448598889762
    ],
    createTime: "2025-03-03T03:26:31.861Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972406293-8vw801l",
    name: "艾比莫尼",
    description: "位於邁烏特隆島南岸，作為法里納克城邦的首都，是政治與商業中心",
    type: "首都",
    coords: [
      -291.95034673316803,
      -706.9836298691177
    ],
    createTime: "2025-03-03T03:26:46.293Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972417309-ejt12yv",
    name: "摩伊茲要塞",
    description: "位於邁烏特隆島的最北端，為了預防其他城邦入侵所建，戒備森嚴，是一個純粹的軍事要塞",
    type: "要塞",
    coords: [
      -159.948356967866,
      -656.442327481502
    ],
    createTime: "2025-03-03T03:26:57.309Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972441092-mbe4wax",
    name: "伊里瓦鎮",
    description: "在島嶼西岸的繁華城鎮，種植著大片的農產品與經濟作物，是整個法里納克城邦僅次於首都的糧食重鎮",
    type: "城鎮",
    coords: [
      -231.89538742553063,
      -703.4160085241095
    ],
    createTime: "2025-03-03T03:27:21.092Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740972452037-h9cjy1q",
    name: "耶費拉鎮",
    description: "溫德普特山北端，由於周邊適合種植高質量的刺刺果，此處逐漸吸引人前來聚居，同時也吸引了許多商人前來",
    type: "城鎮",
    coords: [
      -191.4623455154381,
      -624.3337353764285
    ],
    createTime: "2025-03-03T03:27:32.037Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740992800320-k5ecc8n",
    name: "阿比蘇斯島",
    description: "位於廣大蒙斯特魯海上的一座孤島，不隸屬於任何國家的地區，島嶼上的土壤十分貧瘠",
    type: "自定義",
    coords: [
      -841.4999968719485,
      -1587.25
    ],
    createTime: "2025-03-03T09:06:40.320Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740992813016-a6w08bc",
    name: "孚姆司蕈森",
    description: "由巨大的蕈菇群形成的森林，如同淤泥般的沼澤令人寸步難行，空氣中更是瀰漫著令人產生幻覺的毒霧，，此處生長著各種珍稀昂貴的菌類",
    type: "森林",
    coords: [
      -848.7499963188175,
      -1511.9810293499013
    ],
    createTime: "2025-03-03T09:06:53.016Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740992829168-j7ixooa",
    name: "薩沙鹽湖",
    description: "一座被鹽礦污染的淡水湖泊，無法飲用，然而是當地鹽份的主要來源",
    type: "水域",
    coords: [
      -838.7499970817569,
      -1642.2444400808395
    ],
    createTime: "2025-03-03T09:07:09.168Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740992840591-mmakr1z",
    name: "碧貝勒湖",
    description: "從埃勒高地上流下的淡水湖泊，是整個島嶼賴以維生的淡水來源",
    type: "水域",
    coords: [
      -901.7499922752386,
      -1615.9917373423586
    ],
    createTime: "2025-03-03T09:07:20.591Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740992852121-emacr2d",
    name: "珀多斯巨坑",
    description: "在埃勒高地正中央，一個深不見底的巨大裂口，有無數的冒險家來過此處探查，但沒有人知道這個坑洞到底有多深，下面又有著什麼東西",
    type: "秘境",
    coords: [
      -858.4999955749515,
      -1592.989369228642
    ],
    createTime: "2025-03-03T09:07:32.121Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740992865719-s9wzj0n",
    name: "埃勒高地",
    description: "阿比蘇斯島的中心，一大片隆起的高地，上面滿是凹凸不平的土丘，不像是自然形成的地理景觀",
    type: "山",
    coords: [
      -872.7499944877629,
      -1593.2393949690086
    ],
    createTime: "2025-03-03T09:07:45.719Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740992880983-wu2s4qv",
    name: "凱修南海域",
    description: "島嶼東南方的危險海域，布滿了肉眼不可見的暗流與漩渦，以及能刺穿船隻的尖銳暗礁，有無數的船隻在大意之下在此處遇難",
    type: "水域",
    coords: [
      -901.2499923133855,
      -1513.2311580517337
    ],
    createTime: "2025-03-03T09:08:00.983Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740992896103-a70icts",
    name: "德斐達鎮",
    description: "有一些遠離世俗紛爭的人聚居於此，不受任何國家管轄，此地也是來到阿比蘇斯的冒險者們，唯一的休息據點",
    type: "城鎮",
    coords: [
      -901.7499922752386,
      -1580.2380564699515
    ],
    createTime: "2025-03-03T09:08:16.103Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740992920815-t5i3rvl",
    name: "梅迪烏燈塔",
    description: "德斐達鎮南邊近海的一座燈塔，長年由一位守燈人管理著，指引途經或往來阿比蘇斯的船隻方向",
    type: "哨站",
    coords: [
      -929.4999901580818,
      -1600.9901929203695
    ],
    createTime: "2025-03-03T09:08:40.815Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740992961698-4hoa1ke",
    name: "茵珮圖瑪山脈",
    description: "麥爾基島東部的山脈，如今已然沉沒在海中，上面長滿了茂盛的海草與美麗的珊瑚",
    type: "山",
    coords: [
      -231.50099854448172,
      -1233.9959721483274
    ],
    createTime: "2025-03-03T09:09:21.698Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740992973654-jhchuku",
    name: "西貝德山",
    description: "麥爾基島西部的山脈，如今已然沉沒在海中，上面長滿了茂盛的海草與美麗的珊瑚",
    type: "山",
    coords: [
      -280.00099484422566,
      -1316.504466469267
    ],
    createTime: "2025-03-03T09:09:33.654Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740992989215-7tqg5a6",
    name: "梅紮寧谷地",
    description: "在兩座山脈之間，一片平坦的海床谷地，是許多麥爾基島遺跡的所在地",
    type: "平原",
    coords: [
      -274.0009953019893,
      -1285.501274663823
    ],
    createTime: "2025-03-03T09:09:49.215Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993003167-djuqol3",
    name: "魯以納平原",
    description: "麥爾基島南部，平坦的海床平原，隱藏著許多危險的亂流和魔獸，大量的船隻曾經在探索此海域時沉沒",
    type: "平原",
    coords: [
      -362.0009885881226,
      -1282.0009142986924
    ],
    createTime: "2025-03-03T09:10:03.167Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993016783-8pm23kx",
    name: "梅莫里亞神祠",
    description: "傳說中泰坦們用於供奉神的雄偉神祠，如今只是沉沒在海中的破損廢墟，然而依舊吸引無數的冒險家、學者前來研究",
    type: "秘境",
    coords: [
      -196.5010012147696,
      -1282.5009657794253
    ],
    createTime: "2025-03-03T09:10:16.783Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993031111-12y9t2q",
    name: "艾勒曼遺跡",
    description: "由八根巨大符文石柱，以及一個巨大坑洞組成的遺跡，由於魔法陣的存在，沒有人探索過巨坑",
    type: "秘境",
    coords: [
      -250.50099709489686,
      -1281.5008628179594
    ],
    createTime: "2025-03-03T09:10:31.111Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993082255-v3nukji",
    name: "巨吉安礦坑",
    description: "過去泰坦挖掘礦石的礦坑，隨著麥爾基島的沉沒，也一起被埋在了水下，傳說礦坑中依舊蘊含無數珍稀的礦物、寶石",
    type: "秘境",
    coords: [
      -287.00099431016804,
      -1236.4962295519922
    ],
    createTime: "2025-03-03T09:11:22.255Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993142503-4n31xnh",
    name: "都姆遺跡",
    description: "過去的泰坦居所遺跡，由於有著強大的魔法陣保護，因此完好的被保留下來，至今也沒有外人能夠進入",
    type: "秘境",
    coords: [
      -311.0009924791135,
      -1233.4959206675944
    ],
    createTime: "2025-03-03T09:12:22.503Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993157734-ot2uaqq",
    name: "安提夸古墓",
    description: "上古時期泰坦一族用於埋葬同族的墓地，如今隨著麥爾基島一起沉眠海底",
    type: "秘境",
    coords: [
      -315.5009921357908,
      -1282.5009657794253
    ],
    createTime: "2025-03-03T09:12:37.734Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993210639-bd0y8iw",
    name: "吉蘭蒂尤",
    description: "終年覆蓋著厚重冰雪的大地，危險的魔獸和環境，讓普通人在這裡難以生存",
    type: "自定義",
    coords: [
      -2748.049464904375,
      -931.6361719655384
    ],
    createTime: "2025-03-03T09:13:30.639Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993230671-0anpcuj",
    name: "卡利叩雪原",
    description: "飄散著寒冷的冰霧，遮蔽著進入其中之人的視線，稍有不慎極容易迷失其中",
    type: "平原",
    coords: [
      -3467.856741444618,
      -921.5443760233626
    ],
    createTime: "2025-03-03T09:13:50.671Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993246967-l1j4263",
    name: "夫埃魯冰川",
    description: "廣大且緩慢流動著的冰川，堅硬的冰面能夠供人在上走動",
    type: "水域",
    coords: [
      -3025.5452607668517,
      -1365.5833974791046
    ],
    createTime: "2025-03-03T09:14:06.967Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993260726-yedz2bq",
    name: "拉塔冰川",
    description: "廣大且緩慢流動著的冰川，堅硬的冰面能夠供人在上走動",
    type: "水域",
    coords: [
      -2891.0018445911055,
      -662.5216135075132
    ],
    createTime: "2025-03-03T09:14:20.726Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993371406-04ndh09",
    name: "史塔浦冰川",
    description: "廣大且緩慢流動著的冰川，堅硬的冰面能夠供人在上走動",
    type: "水域",
    coords: [
      -3341.7222887798557,
      -359.76773524223444
    ],
    createTime: "2025-03-03T09:16:11.406Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993456046-k7e9col",
    name: "哈莫山脈",
    description: "高聳且險峻的山脈，上面有無數的懸崖峭壁與裂隙，常人難以翻越",
    type: "山",
    coords: [
      -3439.2662655072713,
      -1232.7080842404546
    ],
    createTime: "2025-03-03T09:17:36.046Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993473710-b4iadtx",
    name: "弗雷修山脈",
    description: "高聳且險峻的山脈，上面有無數的懸崖峭壁與裂隙，常人難以翻越",
    type: "山",
    coords: [
      -3107.9531031744964,
      -692.7970013340409
    ],
    createTime: "2025-03-03T09:17:53.710Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993513775-0r9mt8t",
    name: "霍尼頌山脈",
    description: "高聳且險峻的山脈，上面有無數的懸崖峭壁與裂隙，常人難以翻越",
    type: "山",
    coords: [
      -3429.1755092940903,
      129.68436795329924
    ],
    createTime: "2025-03-03T09:18:33.775Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993534256-vx4bmsi",
    name: "米氏利冰洋",
    description: "經常能夠看見浮冰的冰冷海域，由於其特性使得生活在該海域的生物，普遍擁有較高的抗寒性",
    type: "水域",
    coords: [
      -3964.816372804486,
      -844.2133847189912
    ],
    createTime: "2025-03-03T09:18:54.256Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993556247-syuulub",
    name: "史貝達庫勒",
    description: "傳說中隱藏在卡利叩雪原當中，有一座上古時期的雄偉宮殿，但沒有任何人找到過",
    type: "秘境",
    coords: [
      -3315.5093375511956,
      -908.4371808245626
    ],
    createTime: "2025-03-03T09:19:16.247Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993570951-fxlyja8",
    name: "泌蘭努裂隙",
    description: "一道巨大無比的裂隙，如同大地被某種偉力所劈開的傷疤，裂隙之下則是長年滾燙的岩漿",
    type: "秘境",
    coords: [
      -3424.9163837843507,
      -1574.4617330304893
    ],
    createTime: "2025-03-03T09:19:30.951Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993595023-seazf9n",
    name: "曼格司雪原",
    description: "",
    type: "平原",
    coords: [
      -3315.5093375511956,
      -1743.346530196992
    ],
    createTime: "2025-03-03T09:19:55.023Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740993605687-8pbw3vw",
    name: "魯坎利亞雪原",
    description: "",
    type: "平原",
    coords: [
      -2885.0163947642154,
      -1267.6147071927587
    ],
    createTime: "2025-03-03T09:20:05.687Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1740994017751-q4tow2v",
    name: "奇利孔達雪原",
    description: "",
    type: "平原",
    coords: [
      -3187.0749789296656,
      -273.3351971139112
    ],
    createTime: "2025-03-03T09:26:57.751Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741694088291-1kldoau",
    name: "傑拉蒂尤",
    description: "由許多厚實冰層形成的傑拉蒂尤沒有土地供植物生存，只有一些肉食性的危險生物在此地棲息，其中有大量的懸崖、斷層，非常的危險",
    type: "自定義",
    coords: [
      3159.9999966430664,
      668.6393661637574
    ],
    createTime: "2025-03-11T11:54:48.291Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741694258611-fo3p38e",
    name: "梅迪歐涅地區",
    description: "這裡分布著無數大小不一的坑洞，沒人知道究竟是什麼造成的這一切，也許是隕石撞擊地面，又或許是龍族魔法造成的破壞",
    type: "秘境",
    coords: [
      -1012.4391926083247,
      2886.681686952563
    ],
    createTime: "2025-03-11T11:57:38.611Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741694275347-ppr1d01",
    name: "第莫魯火山",
    description: "在黑列珈耶西側海岸邊的火山群，長年處於噴發狀態，滾燙的熔岩使許多生物不願靠近，並且有冒險家曾看見龍族在火山頂端飛翔的傳聞",
    type: "秘境",
    coords: [
      -867.8050202193973,
      3354.3938893206146
    ],
    createTime: "2025-03-11T11:57:55.347Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741694288611-8f3gf5j",
    name: "克里米山脈",
    description: "黑列珈耶大陸上最長的山脈，高聳險峻且遍布著危險的原始森林，鮮少有人能成功地翻越後深入黑列珈耶",
    type: "山",
    coords: [
      -635.717627316235,
      2274.2815370893577
    ],
    createTime: "2025-03-11T11:58:08.611Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741694300147-qwymzyl",
    name: "伊奈德山脈",
    description: "黑列珈耶大陸西南方的山脈，有著最高聳的都里斯山",
    type: "山",
    coords: [
      -1695.247029700237,
      2856.3981630582284
    ],
    createTime: "2025-03-11T11:58:20.147Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741694308475-olp7hi4",
    name: "代歐岱平原",
    description: "位於黑列珈耶腹地的一塊肥沃平原，然而幾乎沒有人到達過此地，抑或是在此定居，原因周圍茂密的原始森林與險峻的山脈，時刻面臨魔獸的威脅",
    type: "平原",
    coords: [
      -1463.1596367970747,
      2466.0771884201417
    ],
    createTime: "2025-03-11T11:58:28.475Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741694321931-mjzygl5",
    name: "歐比特山脈",
    description: "黑列珈耶大陸最南端的橫向山脈，擋下了大部分來自吉蘭蒂尤的寒冷空氣，也導致山脈長年覆蓋著大雪",
    type: "山",
    coords: [
      -2862.411165024836,
      1416.24836008322
    ],
    createTime: "2025-03-11T11:58:41.931Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741694901067-yfo01uu",
    name: "安卻逢姆森林",
    description: "主要由大量紅楓樹所構成的森林，因氣候關係，導致這個地區生長著茂密的紅楓樹林，在秋季是極為美麗的奇觀之一，然而其中也棲息著危險的魔獸",
    type: "森林",
    coords: [
      1113.3468940854466,
      2893.2263104968943
    ],
    createTime: "2025-03-11T12:08:21.067Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695105435-prjg6tv",
    name: "沃克帕頓",
    description: "來自其他大陸的冒險者、流民、傭兵等等，在黑列珈耶唯一一個成功建立的根據地",
    type: "城鎮",
    coords: [
      -292.63186063790266,
      2021.9488458237738
    ],
    createTime: "2025-03-11T12:11:45.435Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695129843-qh6g73m",
    name: "利富德冰窟",
    description: "在提布洛塔島上，一個極為出名的巨大冰穴，有傳聞深處住著可怕的魔獸，也有傳聞洞穴中藏著足以令人富可敵國的財富，但誰也沒有真的目睹過",
    type: "秘境",
    coords: [
      -2838.8661996106202,
      1069.9615795404752
    ],
    createTime: "2025-03-11T12:12:09.843Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695144763-26og8wg",
    name: "切比托魯茲森林",
    description: "黑列珈耶南端的原始森林，遍布高大的粗壯樹木，以及許多危險的魔獸",
    type: "森林",
    coords: [
      -2065.241556600079,
      1904.4409046287979
    ],
    createTime: "2025-03-11T12:12:24.763Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695156427-sypx9ss",
    name: "普萊帕特森林",
    description: "黑列珈耶東南端的原始森林，遍布高大的粗壯樹木，以及許多危險的魔獸，沿岸有著大量暗礁",
    type: "森林",
    coords: [
      -2505.8712445756482,
      2732.1905577406023
    ],
    createTime: "2025-03-11T12:12:36.427Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695168651-tqkp3pl",
    name: "菲沃登森林",
    description: "黑列珈耶東部的原始森林，遍布高大的粗壯樹木，以及許多危險的魔獸",
    type: "森林",
    coords: [
      -1446.3417826555276,
      3508.7499831901678
    ],
    createTime: "2025-03-11T12:12:48.651Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695183516-uihbu41",
    name: "提布洛塔島",
    description: "孤立於黑列珈耶南方海外，因歐比特山脈與寒冷的氣候，使該島與終年覆蓋著大雪，周圍海域有著許多暗礁與浮冰，阻擋著冒險者的腳步",
    type: "自定義",
    coords: [
      -3047.408389981577,
      1658.395269495177
    ],
    createTime: "2025-03-11T12:13:03.516Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695198243-lomps8h",
    name: "佩利姆峽灣",
    description: "適合作為港口的天然峽灣，此地是過去發現新大陸的『安納卡．立弗托』，首次登陸的地方，過去此地留下的痕跡，早已在時間的沖刷下化為廢墟，被森林所覆蓋",
    type: "水域",
    coords: [
      -598.7181901774958,
      3131.9858780301906
    ],
    createTime: "2025-03-11T12:13:18.243Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695209379-cqygw1q",
    name: "波敦海灣",
    description: "西側的天然海灣，是沃克帕頓的人們能夠安全捕漁的地點，因此地淺海能夠有效的避免深海海獸進入",
    type: "水域",
    coords: [
      -948.5310722344362,
      1927.374594233338
    ],
    createTime: "2025-03-11T12:13:29.379Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695222219-gpcvd3i",
    name: "派頓姆島",
    description: "大陸西北方的三個離島之一，島嶼上只有貧瘠的土地，沒有任何開發利用的價值，經常成為海盜的窩點",
    type: "自定義",
    coords: [
      830.8056066898085,
      2226.8449971884215
    ],
    createTime: "2025-03-11T12:13:42.219Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695230803-hbdbv6l",
    name: "沃魯茲島",
    description: "大陸西北方的三個離島之一，是通往沃克帕頓的必經之地，經常成為海盜的窩點",
    type: "自定義",
    coords: [
      184.99720904622632,
      1940.8339381863752
    ],
    createTime: "2025-03-11T12:13:50.803Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695240019-6cq25oi",
    name: "托比遜島",
    description: "大陸西北方的三個離島之一，是通往沃克帕頓的必經之地，經常成為海盜的窩點",
    type: "自定義",
    coords: [
      -60.544525474510664,
      1691.8360750551824
    ],
    createTime: "2025-03-11T12:14:00.019Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695256187-uxbch3y",
    name: "蓋蘇次森林",
    description: "目前黑列珈耶大陸上，唯一一個被人們所探索大半的原始森林，儘管如此，危險的環境依舊威脅著所有進入森林的人",
    type: "森林",
    coords: [
      -87.4532087096598,
      2516.220892178727
    ],
    createTime: "2025-03-11T12:14:16.187Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695268211-unk9y2s",
    name: "班浦森林",
    description: "大量生長著茂密的竹林，形成了獨一無二的美麗奇觀，許多被海獸襲擊的損壞船隻，經常在此處的海岸擱淺",
    type: "森林",
    coords: [
      -887.9865349553503,
      1664.9173871491075
    ],
    createTime: "2025-03-11T12:14:28.211Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695283796-h2upuez",
    name: "朵克尼多海灣",
    description: "菲沃登森林與普萊帕特森林之間的海灣，沙灘有著柔軟純淨的細沙，是黑列珈耶的美麗奇觀之一，傳說這裡也是龍族經常出沒的地點",
    type: "水域",
    coords: [
      -1956.4526878683569,
      3305.7480423756797
    ],
    createTime: "2025-03-11T12:14:43.796Z",
    isDefault: false,
    tags: []
  },
  {
    id: "loc-1741695296220-y44fg2l",
    name: "都里斯山",
    description: "最為高聳的山峰，也被俗稱為『龍巢』，傳說在上古時期消失的龍族，最終定居於此，遠離世界的紛擾，在此處繁衍生存，嚴禁任何人接近與冒犯",
    type: "山",
    coords: [
      -2043.905908382592,
      2568.848960946879
    ],
    createTime: "2025-03-11T12:14:56.220Z",
    isDefault: false,
    tags: []
  }
];

// 共匯出 392 個地點標記






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