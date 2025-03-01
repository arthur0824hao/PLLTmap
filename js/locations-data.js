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


// PLLT World 地圖位置數據 - 由匯出工具生成於 2025/3/1 下午10:54:08
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
    id: "loc-1740839673709-elst1i0",
    name: "莫里海",
    description: "",
    type: "水域",
    coords: [
      -626.1802974532297,
      -3673.4553903037613
    ],
    createTime: "2025-03-01T14:34:33.709Z",
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
  }
];

// 共匯出 164 個地點標記




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