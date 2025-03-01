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