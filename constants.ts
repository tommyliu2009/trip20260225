import { DailySchedule, Attraction } from './types';

export const APP_TITLE = "2026 年兩岸同春清流之行指南";
export const APP_SUBTITLE = "Cross-Strait Spring Qingliu Tour Guide";

export const SCHEDULE_DATA: DailySchedule[] = [
  {
    date: "2 月 25 日",
    weekday: "星期三，正月初九",
    fullDate: "2026-02-25",
    items: [
      { time: "下午", activity: "廈門迎接台胞前往清流縣下榻酒店簽到及辦理入住（廈門至清流約 3.5 小時）（17:00 前抵達清流，建議 13:00 左右抵達廈門）" },
      { time: "18:00", activity: "舉行歡迎晚宴和招商推介會" }
    ]
  },
  {
    date: "2 月 26 日",
    weekday: "星期四，正月初十",
    fullDate: "2026-02-26",
    items: [
      { time: "09:00", activity: "參加「福櫻滿園 兩岸同春」啟動儀式及櫻花文化系列活動（櫻花跑、品美食、大提琴快閃等）" },
      { time: "14:30", activity: "參訪賴坊古民居、南山茶博園，了解賴坊非遺文化保護現狀，參訪馬氏宗祠，開展尋親與族譜對接" }
    ]
  },
  {
    date: "2 月 27 日",
    weekday: "星期五，正月十一",
    fullDate: "2026-02-27",
    items: [
      { time: "09:00", activity: "參訪清流長校靈台山和客家博物館，觀看非遺文化表演，交流兩岸客家文化，感受兩岸同根同祖的血脈聯繫" },
      { time: "14:30", activity: "參訪拔里田園綜合體、智慧體育公園等，前往婦聯參加兩岸新春家庭主題活動。" }
    ]
  },
  {
    date: "2 月 28 日",
    weekday: "星期六，正月十二",
    fullDate: "2026-02-28",
    items: [
      { time: "09:00", activity: "參訪寧化天鵝洞，探索奇幻溶洞景觀" },
      { time: "14:30", activity: "參訪國家級溫泉地質公園、天芳悅潭生態旅遊區溫泉源頭（品鍺蛋、泡鍺泉）" },
      { time: "19:30", activity: "舉行「同心櫻緣」書畫攝影大賽頒獎儀式" }
    ]
  },
  {
    date: "3 月 1 日",
    weekday: "星期日，正月十三",
    fullDate: "2026-03-01",
    items: [
      { time: "08:00", activity: "歡送台胞前往廈門返回台灣（清流至廈門約 3.5 小時）" }
    ]
  }
];

export const ATTRACTIONS_DATA: Attraction[] = [
  {
    id: "laifang-cherry",
    title: "賴坊櫻花園 / 南山茶博園",
    subtitle: "中國綠都·最氧三明四季行 賞櫻勝地",
    description: "福建省規模最大的櫻花觀賞基地之一。這裡種植了紅粉佳人、香水櫻、大島櫻等十多個優良品種，數量達數十萬株。",
    highlights: [
        "每年 2 月至 3 月漫山遍野櫻花盛開",
        "茶綠櫻紅：綠色茶山與紅色櫻花相映成趣",
        "台胞創業成果見證，多品種引自台灣"
    ],
    location: "福建省三明市清流縣賴坊鎮",
    imageUrl: "https://picsum.photos/800/600?random=1",
    tags: ["賞櫻", "茶園", "攝影勝地"]
  },
  {
    id: "laifang-ancient",
    title: "賴坊古民居",
    subtitle: "中國歷史文化名村",
    description: "閩西明清建築的「活化石」，保存著閩西北地區面積最大、佈局最完整的明清古建築群。",
    highlights: [
        "古代「內外八卦」格局",
        "精美磚雕、木雕、石雕",
        "馬氏宗祠：客家人慎終追遠的重要場所"
    ],
    location: "福建省三明市清流縣賴坊鎮",
    imageUrl: "https://picsum.photos/800/600?random=2",
    tags: ["古建築", "歷史文化", "客家文化"]
  },
  {
    id: "lingtai-mountain",
    title: "清流長校靈台山",
    subtitle: "客家祖山",
    description: "集佛教、道教、儒家文化於一體的名山，被譽為「福建小武當」。",
    highlights: [
        "始建於唐代的古寺",
        "巨大的定光古佛像（客家人的保護神）",
        "客家博物館：展示客家民系形成與遷徙歷史"
    ],
    location: "福建省三明市清流縣長校鎮",
    imageUrl: "https://picsum.photos/800/600?random=3",
    tags: ["宗教文化", "客家祖山", "博物館"]
  },
  {
    id: "swan-cave",
    title: "寧化天鵝洞",
    subtitle: "國家地質公園 - 神州第一地質奇觀",
    description: "典型的喀斯特溶洞群。因山形象天鵝，且洞內鐘乳石潔白如天鵝羽毛而得名。",
    highlights: [
        "水中石林：洞內景觀奇特",
        "乘船遊覽地下河",
        "欣賞千姿百態的鐘乳石、石筍和石幔"
    ],
    location: "福建省三明市寧化縣",
    imageUrl: "https://picsum.photos/800/600?random=4",
    tags: ["溶洞", "地質公園", "自然景觀"]
  },
  {
    id: "tianfang-yuetan",
    title: "天芳悅潭生態旅遊區",
    subtitle: "含國家級溫泉地質公園",
    description: "珍稀的「鍺」溫泉養生勝地。這裡擁有著名的「高賴溫泉」，水溫高達 93℃。",
    highlights: [
        "稀有元素「鍺」：對人體有多種保健功效",
        "溫泉煮蛋：蛋白滑嫩，蛋黃綿密",
        "深山康養之旅"
    ],
    location: "福建省三明市清流縣嵩口鎮",
    imageUrl: "https://picsum.photos/800/600?random=5",
    tags: ["溫泉", "康養", "美食"]
  },
  {
    id: "bali-complex",
    title: "拔里田園綜合體 & 智慧體育公園",
    subtitle: "現代鄉村振興的縮影",
    description: "集現代農業、休閒旅遊、田園社區為一體的新型鄉村旅遊點。",
    highlights: [
        "展現清流縣美麗鄉村建設成果",
        "智慧體育公園：結合科技與運動的休閒場所",
        "提升當地居民生活品質"
    ],
    location: "福建省三明市清流縣",
    imageUrl: "https://picsum.photos/800/600?random=6",
    tags: ["鄉村旅遊", "科技運動", "休閒"]
  }
];