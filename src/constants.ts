import shodo from './images/islands/shodo.jpg'

//Inputのバリデーションメッセージ
export const VALIDATION_MESSAGE = {
  DEFAULT: '',
  SPACE: 'スペースを入れずにご入力ください',
  UNIQUE: 'すでに追加済みです',
} as const

//離島データ（画像を表示する場合は小豆島のようにimportしたurlを指定）
export const ISLANDS = [
  {
    name: '礼文島',
    imgUrl: '',
  },
  {
    name: '利尻島',
    imgUrl: '',
  },
  {
    name: '焼尻島',
    imgUrl: '',
  },
  {
    name: '天売島',
    imgUrl: '',
  },
  {
    name: '奥尻島',
    imgUrl: '',
  },
  {
    name: '小島（北海道）',
    imgUrl: '',
  },
  {
    name: '大島（気仙沼）',
    imgUrl: '',
  },
  {
    name: '出島',
    imgUrl: '',
  },
  {
    name: '江島（宮城）',
    imgUrl: '',
  },
  {
    name: '網地島',
    imgUrl: '',
  },
  {
    name: '田代島',
    imgUrl: '',
  },
  {
    name: '寒風沢島',
    imgUrl: '',
  },
  {
    name: '野々島',
    imgUrl: '',
  },
  {
    name: '桂島（宮城）',
    imgUrl: '',
  },
  {
    name: '朴島',
    imgUrl: '',
  },
  {
    name: '金華山',
    imgUrl: '',
  },
  {
    name: '宮戸島',
    imgUrl: '',
  },
  {
    name: '飛島（山形）',
    imgUrl: '',
  },
  {
    name: '大島（伊豆）',
    imgUrl: '',
  },
  {
    name: '利島',
    imgUrl: '',
  },
  {
    name: '新島（伊豆）',
    imgUrl: '',
  },
  {
    name: '式根島',
    imgUrl: '',
  },
  {
    name: '神津島',
    imgUrl: '',
  },
  {
    name: '三宅島',
    imgUrl: '',
  },
  {
    name: '御蔵島',
    imgUrl: '',
  },
  {
    name: '八丈島',
    imgUrl: '',
  },
  {
    name: '青ヶ島',
    imgUrl: '',
  },
  {
    name: '父島',
    imgUrl: '',
  },
  {
    name: '母島',
    imgUrl: '',
  },
  {
    name: '硫黄島（小笠原）',
    imgUrl: '',
  },
  {
    name: '南鳥島',
    imgUrl: '',
  },
  {
    name: '仁右衛門島',
    imgUrl: '',
  },
  {
    name: '城ヶ島',
    imgUrl: '',
  },
  {
    name: '江の島',
    imgUrl: '',
  },
  {
    name: '粟島（新潟）',
    imgUrl: '',
  },
  {
    name: '佐渡島',
    imgUrl: '',
  },
  {
    name: '舳倉島',
    imgUrl: '',
  },
  {
    name: '能登島',
    imgUrl: '',
  },
  {
    name: '初島',
    imgUrl: '',
  },
  {
    name: '佐久島',
    imgUrl: '',
  },
  {
    name: '日間賀島',
    imgUrl: '',
  },
  {
    name: '篠島',
    imgUrl: '',
  },
  {
    name: '神島',
    imgUrl: '',
  },
  {
    name: '答志島',
    imgUrl: '',
  },
  {
    name: '菅島',
    imgUrl: '',
  },
  {
    name: '坂手島',
    imgUrl: '',
  },
  {
    name: '渡鹿野島',
    imgUrl: '',
  },
  {
    name: '間崎島',
    imgUrl: '',
  },
  {
    name: '賢島',
    imgUrl: '',
  },
  {
    name: '横山島',
    imgUrl: '',
  },
  {
    name: '沖島',
    imgUrl: '',
  },
  {
    name: '淡路島',
    imgUrl: '',
  },
  {
    name: '沼島',
    imgUrl: '',
  },
  {
    name: '家島',
    imgUrl: '',
  },
  {
    name: '男鹿島',
    imgUrl: '',
  },
  {
    name: '坊勢島',
    imgUrl: '',
  },
  {
    name: '西島',
    imgUrl: '',
  },
  {
    name: '中の島',
    imgUrl: '',
  },
  {
    name: '紀伊大島',
    imgUrl: '',
  },
  {
    name: '島後',
    imgUrl: '',
  },
  {
    name: '中ノ島（島根）',
    imgUrl: '',
  },
  {
    name: '西ノ島',
    imgUrl: '',
  },
  {
    name: '知夫里島',
    imgUrl: '',
  },
  {
    name: '大根島',
    imgUrl: '',
  },
  {
    name: '江島（島根）',
    imgUrl: '',
  },
  {
    name: '鹿久居島',
    imgUrl: '',
  },
  {
    name: '大府島',
    imgUrl: '',
  },
  {
    name: '頭島',
    imgUrl: '',
  },
  {
    name: '鴻島',
    imgUrl: '',
  },
  {
    name: '長島（岡山）',
    imgUrl: '',
  },
  {
    name: '前島（岡山）',
    imgUrl: '',
  },
  {
    name: '黄島（岡山）',
    imgUrl: '',
  },
  {
    name: '黒島（岡山）',
    imgUrl: '',
  },
  {
    name: '犬島',
    imgUrl: '',
  },
  {
    name: '石島',
    imgUrl: '',
  },
  {
    name: '松島（岡山）',
    imgUrl: '',
  },
  {
    name: '六口島',
    imgUrl: '',
  },
  {
    name: '高島（岡山）',
    imgUrl: '',
  },
  {
    name: '白石島',
    imgUrl: '',
  },
  {
    name: '北木島',
    imgUrl: '',
  },
  {
    name: '真鍋島',
    imgUrl: '',
  },
  {
    name: '小飛島',
    imgUrl: '',
  },
  {
    name: '大飛島',
    imgUrl: '',
  },
  {
    name: '六島（岡山）',
    imgUrl: '',
  },
  {
    name: '走島',
    imgUrl: '',
  },
  {
    name: '田島',
    imgUrl: '',
  },
  {
    name: '横島（広島）',
    imgUrl: '',
  },
  {
    name: '百島',
    imgUrl: '',
  },
  {
    name: '向島（広島）',
    imgUrl: '',
  },
  {
    name: '岩子島',
    imgUrl: `${shodo}`,
  },
  {
    name: '細島',
    imgUrl: '',
  },
  {
    name: '因島',
    imgUrl: '',
  },
  {
    name: '佐木島',
    imgUrl: '',
  },
  {
    name: '小佐木島',
    imgUrl: '',
  },
  {
    name: '生口島',
    imgUrl: '',
  },
  {
    name: '高根島',
    imgUrl: '',
  },
  {
    name: '大久野島',
    imgUrl: '',
  },
  {
    name: '契島',
    imgUrl: '',
  },
  {
    name: '生野島',
    imgUrl: '',
  },
  {
    name: '大崎上島',
    imgUrl: '',
  },
  {
    name: '大崎下島',
    imgUrl: '',
  },
  {
    name: '長島（広島）',
    imgUrl: '',
  },
  {
    name: '三角島',
    imgUrl: '',
  },
  {
    name: '豊島（広島）',
    imgUrl: '',
  },
  {
    name: '斎島',
    imgUrl: '',
  },
  {
    name: '大芝島',
    imgUrl: '',
  },
  {
    name: '上蒲刈島',
    imgUrl: '',
  },
  {
    name: '下蒲刈島',
    imgUrl: '',
  },
  {
    name: '情島（広島）',
    imgUrl: '',
  },
  {
    name: '似島',
    imgUrl: '',
  },
  {
    name: '金輪島',
    imgUrl: '',
  },
  {
    name: '江田島・能美島',
    imgUrl: '',
  },
  {
    name: '沖野島',
    imgUrl: '',
  },
  {
    name: '倉橋島',
    imgUrl: '',
  },
  {
    name: '鹿島（広島）',
    imgUrl: '',
  },
  {
    name: '厳島',
    imgUrl: '',
  },
  {
    name: '阿多田島',
    imgUrl: '',
  },
  {
    name: '端島',
    imgUrl: '',
  },
  {
    name: '柱島',
    imgUrl: '',
  },
  {
    name: '黒島（山口）',
    imgUrl: '',
  },
  {
    name: '屋代島',
    imgUrl: '',
  },
  {
    name: '笠佐島',
    imgUrl: '',
  },
  {
    name: '前島（山口）',
    imgUrl: '',
  },
  {
    name: '浮島',
    imgUrl: '',
  },
  {
    name: '情島（山口）',
    imgUrl: '',
  },
  {
    name: '沖家室島',
    imgUrl: '',
  },
  {
    name: '平郡島',
    imgUrl: '',
  },
  {
    name: '長島（山口）',
    imgUrl: '',
  },
  {
    name: '八島',
    imgUrl: '',
  },
  {
    name: '祝島',
    imgUrl: '',
  },
  {
    name: '佐合島',
    imgUrl: '',
  },
  {
    name: '馬島（山口）',
    imgUrl: '',
  },
  {
    name: '牛島（山口）',
    imgUrl: '',
  },
  {
    name: '笠戸島',
    imgUrl: '',
  },
  {
    name: '粭島',
    imgUrl: '',
  },
  {
    name: '大津島',
    imgUrl: '',
  },
  {
    name: '野島',
    imgUrl: '',
  },
  {
    name: '向島（山口）',
    imgUrl: '',
  },
  {
    name: '竹ノ子島',
    imgUrl: '',
  },
  {
    name: '彦島',
    imgUrl: '',
  },
  {
    name: '見島',
    imgUrl: '',
  },
  {
    name: '相島（山口）',
    imgUrl: '',
  },
  {
    name: '櫃島',
    imgUrl: '',
  },
  {
    name: '大島（山口）',
    imgUrl: '',
  },
  {
    name: '青海島',
    imgUrl: '',
  },
  {
    name: '角島',
    imgUrl: '',
  },
  {
    name: '蓋井島',
    imgUrl: '',
  },
  {
    name: '六連島',
    imgUrl: '',
  },
  {
    name: '大毛島',
    imgUrl: '',
  },
  {
    name: '島田島',
    imgUrl: '',
  },
  {
    name: '伊島',
    imgUrl: '',
  },
  {
    name: '出羽島',
    imgUrl: '',
  },
  {
    name: '竹ヶ島',
    imgUrl: '',
  },
  {
    name: '小豆島',
    imgUrl: `${shodo}`,
  },
  {
    name: '沖之島（香川）',
    imgUrl: '',
  },
  {
    name: '小豊島',
    imgUrl: '',
  },
  {
    name: '豊島（香川）',
    imgUrl: '',
  },
  {
    name: '直島',
    imgUrl: '',
  },
  {
    name: '向島（香川）',
    imgUrl: '',
  },
  {
    name: '屏風島',
    imgUrl: '',
  },
  {
    name: '大島（香川）',
    imgUrl: '',
  },
  {
    name: '男木島',
    imgUrl: '',
  },
  {
    name: '女木島',
    imgUrl: '',
  },
  {
    name: '櫃石島',
    imgUrl: '',
  },
  {
    name: '岩黒島',
    imgUrl: '',
  },
  {
    name: '与島',
    imgUrl: '',
  },
  {
    name: '小与島',
    imgUrl: '',
  },
  {
    name: '牛島（香川）',
    imgUrl: '',
  },
  {
    name: '本島',
    imgUrl: '',
  },
  {
    name: '広島',
    imgUrl: '',
  },
  {
    name: '手島',
    imgUrl: '',
  },
  {
    name: '小手島',
    imgUrl: '',
  },
  {
    name: '高見島',
    imgUrl: '',
  },
  {
    name: '佐柳島',
    imgUrl: '',
  },
  {
    name: '粟島（香川）',
    imgUrl: '',
  },
  {
    name: '志々島',
    imgUrl: '',
  },
  {
    name: '伊吹島',
    imgUrl: '',
  },
  {
    name: '魚島',
    imgUrl: '',
  },
  {
    name: '高井神島',
    imgUrl: '',
  },
  {
    name: '弓削島',
    imgUrl: '',
  },
  {
    name: '佐島',
    imgUrl: '',
  },
  {
    name: '生名島',
    imgUrl: '',
  },
  {
    name: '岩城島',
    imgUrl: '',
  },
  {
    name: '赤穂根島',
    imgUrl: '',
  },
  {
    name: '大三島',
    imgUrl: '',
  },
  {
    name: '伯方島',
    imgUrl: '',
  },
  {
    name: '鵜島',
    imgUrl: '',
  },
  {
    name: '大島（今治）',
    imgUrl: '',
  },
  {
    name: '津島',
    imgUrl: '',
  },
  {
    name: '岡村島',
    imgUrl: '',
  },
  {
    name: '小大下島',
    imgUrl: '',
  },
  {
    name: '大下島',
    imgUrl: '',
  },
  {
    name: '来島',
    imgUrl: '',
  },
  {
    name: '小島（愛媛）',
    imgUrl: '',
  },
  {
    name: '馬島（愛媛）',
    imgUrl: '',
  },
  {
    name: '比岐島',
    imgUrl: '',
  },
  {
    name: '新居大島',
    imgUrl: '',
  },
  {
    name: '安居島',
    imgUrl: '',
  },
  {
    name: '興居島',
    imgUrl: '',
  },
  {
    name: '釣島',
    imgUrl: '',
  },
  {
    name: '野忽那島',
    imgUrl: '',
  },
  {
    name: '睦月島',
    imgUrl: '',
  },
  {
    name: '中島（愛媛）',
    imgUrl: '',
  },
  {
    name: '怒和島',
    imgUrl: '',
  },
  {
    name: '津和地島',
    imgUrl: '',
  },
  {
    name: '二神島',
    imgUrl: '',
  },
  {
    name: '青島（愛媛）',
    imgUrl: '',
  },
  {
    name: '大島（八幡浜）',
    imgUrl: '',
  },
  {
    name: '九島',
    imgUrl: '',
  },
  {
    name: '嘉島',
    imgUrl: '',
  },
  {
    name: '戸島（愛媛）',
    imgUrl: '',
  },
  {
    name: '日振島',
    imgUrl: '',
  },
  {
    name: '竹ケ島',
    imgUrl: '',
  },
  {
    name: '中ノ島（高知）',
    imgUrl: '',
  },
  {
    name: '戸島（高知）',
    imgUrl: '',
  },
  {
    name: '柏島',
    imgUrl: '',
  },
  {
    name: '大島（高知）',
    imgUrl: '',
  },
  {
    name: '鵜来島',
    imgUrl: '',
  },
  {
    name: '沖の島',
    imgUrl: '',
  },
  {
    name: '馬島（福岡）',
    imgUrl: '',
  },
  {
    name: '藍島',
    imgUrl: '',
  },
  {
    name: '地島',
    imgUrl: '',
  },
  {
    name: '大島（福岡）',
    imgUrl: '',
  },
  {
    name: '相島（福岡）',
    imgUrl: '',
  },
  {
    name: '志賀島',
    imgUrl: '',
  },
  {
    name: '能古島',
    imgUrl: '',
  },
  {
    name: '玄界島',
    imgUrl: '',
  },
  {
    name: '小呂島',
    imgUrl: '',
  },
  {
    name: '姫島（福岡）',
    imgUrl: '',
  },
  {
    name: '高島（佐賀）',
    imgUrl: '',
  },
  {
    name: '神集島',
    imgUrl: '',
  },
  {
    name: '加部島',
    imgUrl: '',
  },
  {
    name: '小川島',
    imgUrl: '',
  },
  {
    name: '加唐島',
    imgUrl: '',
  },
  {
    name: '松島（佐賀）',
    imgUrl: '',
  },
  {
    name: '馬渡島',
    imgUrl: '',
  },
  {
    name: '向島（佐賀）',
    imgUrl: '',
  },
  {
    name: '対馬島',
    imgUrl: '',
  },
  {
    name: '海栗島',
    imgUrl: '',
  },
  {
    name: '赤島（対馬）',
    imgUrl: '',
  },
  {
    name: '泊島',
    imgUrl: '',
  },
  {
    name: '沖ノ島',
    imgUrl: '',
  },
  {
    name: '島山島（対馬）',
    imgUrl: '',
  },
  {
    name: '壱岐島',
    imgUrl: '',
  },
  {
    name: '大島（壱岐）',
    imgUrl: '',
  },
  {
    name: '長島（長崎）',
    imgUrl: '',
  },
  {
    name: '原島',
    imgUrl: '',
  },
  {
    name: '若宮島',
    imgUrl: '',
  },
  {
    name: '福島',
    imgUrl: '',
  },
  {
    name: '鷹島',
    imgUrl: '',
  },
  {
    name: '黒島（松浦）',
    imgUrl: '',
  },
  {
    name: '飛島（長崎）',
    imgUrl: '',
  },
  {
    name: '青島（長崎）',
    imgUrl: '',
  },
  {
    name: '的山大島',
    imgUrl: '',
  },
  {
    name: '度島',
    imgUrl: '',
  },
  {
    name: '平戸島',
    imgUrl: '',
  },
  {
    name: '高島（平戸）',
    imgUrl: '',
  },
  {
    name: '生月島',
    imgUrl: '',
  },
  {
    name: '前島（佐世保）',
    imgUrl: '',
  },
  {
    name: '鼕泊島',
    imgUrl: '',
  },
  {
    name: '黒島（佐世保）',
    imgUrl: '',
  },
  {
    name: '高島（佐世保）',
    imgUrl: '',
  },
  {
    name: '針尾島',
    imgUrl: '',
  },
  {
    name: '大島（佐世保）',
    imgUrl: '',
  },
  {
    name: '竹島（長崎）',
    imgUrl: '',
  },
  {
    name: '鵜瀬島',
    imgUrl: '',
  },
  {
    name: '前島（時津）',
    imgUrl: '',
  },
  {
    name: '鹿島（長崎）',
    imgUrl: '',
  },
  {
    name: '大島（西海）',
    imgUrl: '',
  },
  {
    name: '寺島（西海）',
    imgUrl: '',
  },
  {
    name: '蛎浦島',
    imgUrl: '',
  },
  {
    name: '崎戸島',
    imgUrl: '',
  },
  {
    name: '江島（長崎）',
    imgUrl: '',
  },
  {
    name: '平島（長崎）',
    imgUrl: '',
  },
  {
    name: '南串島',
    imgUrl: '',
  },
  {
    name: '松島（長崎）',
    imgUrl: '',
  },
  {
    name: '池島',
    imgUrl: '',
  },
  {
    name: '伊王島',
    imgUrl: '',
  },
  {
    name: '沖之島（長崎）',
    imgUrl: '',
  },
  {
    name: '高島（長崎市）',
    imgUrl: '',
  },
  {
    name: '樺島',
    imgUrl: '',
  },
  {
    name: '牧島（長崎）',
    imgUrl: '',
  },
  {
    name: '宇久島',
    imgUrl: '',
  },
  {
    name: '寺島（佐世保）',
    imgUrl: '',
  },
  {
    name: '六島（長崎）',
    imgUrl: '',
  },
  {
    name: '野崎島',
    imgUrl: '',
  },
  {
    name: '納島',
    imgUrl: '',
  },
  {
    name: '小値賀島',
    imgUrl: '',
  },
  {
    name: '斑島',
    imgUrl: '',
  },
  {
    name: '黒島（小値賀）',
    imgUrl: '',
  },
  {
    name: '大島（小値賀）',
    imgUrl: '',
  },
  {
    name: '中通島',
    imgUrl: '',
  },
  {
    name: '頭ケ島',
    imgUrl: '',
  },
  {
    name: '桐ノ小島',
    imgUrl: '',
  },
  {
    name: '若松島',
    imgUrl: '',
  },
  {
    name: '漁生浦島',
    imgUrl: '',
  },
  {
    name: '有福島',
    imgUrl: '',
  },
  {
    name: '日ノ島',
    imgUrl: '',
  },
  {
    name: '奈留島',
    imgUrl: '',
  },
  {
    name: '前島（五島）',
    imgUrl: '',
  },
  {
    name: '久賀島',
    imgUrl: '',
  },
  {
    name: '蕨小島',
    imgUrl: '',
  },
  {
    name: '椛島',
    imgUrl: '',
  },
  {
    name: '福江島',
    imgUrl: '',
  },
  {
    name: '赤島（五島）',
    imgUrl: '',
  },
  {
    name: '黄島（長崎）',
    imgUrl: '',
  },
  {
    name: '黒島（五島）',
    imgUrl: '',
  },
  {
    name: '島山島（五島）',
    imgUrl: '',
  },
  {
    name: '嵯峨島',
    imgUrl: '',
  },
  {
    name: '戸馳島',
    imgUrl: '',
  },
  {
    name: '大矢野島',
    imgUrl: '',
  },
  {
    name: '維和島',
    imgUrl: '',
  },
  {
    name: '野牛島',
    imgUrl: '',
  },
  {
    name: '湯島',
    imgUrl: '',
  },
  {
    name: '野釜島',
    imgUrl: '',
  },
  {
    name: '永浦島',
    imgUrl: '',
  },
  {
    name: '樋合島',
    imgUrl: '',
  },
  {
    name: '前島（熊本）',
    imgUrl: '',
  },
  {
    name: '中島（熊本）',
    imgUrl: '',
  },
  {
    name: '天草上島',
    imgUrl: '',
  },
  {
    name: '樋島',
    imgUrl: '',
  },
  {
    name: '御所浦島',
    imgUrl: '',
  },
  {
    name: '牧島（熊本）',
    imgUrl: '',
  },
  {
    name: '横浦島',
    imgUrl: '',
  },
  {
    name: '天草下島',
    imgUrl: '',
  },
  {
    name: '通詞島',
    imgUrl: '',
  },
  {
    name: '横島（熊本）',
    imgUrl: '',
  },
  {
    name: '下須島',
    imgUrl: '',
  },
  {
    name: '姫島（大分）',
    imgUrl: '',
  },
  {
    name: '黒島（大分）',
    imgUrl: '',
  },
  {
    name: '保戸島',
    imgUrl: '',
  },
  {
    name: '地無垢島',
    imgUrl: '',
  },
  {
    name: '大入島',
    imgUrl: '',
  },
  {
    name: '大島（大分）',
    imgUrl: '',
  },
  {
    name: '屋形島',
    imgUrl: '',
  },
  {
    name: '深島',
    imgUrl: '',
  },
  {
    name: '島野浦島',
    imgUrl: '',
  },
  {
    name: '大島（宮崎）',
    imgUrl: '',
  },
  {
    name: '築島',
    imgUrl: '',
  },
  {
    name: '獅子島',
    imgUrl: '',
  },
  {
    name: '伊唐島',
    imgUrl: '',
  },
  {
    name: '諸浦島',
    imgUrl: '',
  },
  {
    name: '長島（鹿児島）',
    imgUrl: '',
  },
  {
    name: '桂島（鹿児島）',
    imgUrl: '',
  },
  {
    name: '上甑島',
    imgUrl: '',
  },
  {
    name: '中甑島',
    imgUrl: '',
  },
  {
    name: '下甑島',
    imgUrl: '',
  },
  {
    name: '新島（鹿児島）',
    imgUrl: '',
  },
  {
    name: '種子島',
    imgUrl: '',
  },
  {
    name: '馬毛島',
    imgUrl: '',
  },
  {
    name: '屋久島',
    imgUrl: '',
  },
  {
    name: '口永良部島',
    imgUrl: '',
  },
  {
    name: '竹島（鹿児島）',
    imgUrl: '',
  },
  {
    name: '硫黄島（鹿児島）',
    imgUrl: '',
  },
  {
    name: '黒島（鹿児島）',
    imgUrl: '',
  },
  {
    name: '口之島',
    imgUrl: '',
  },
  {
    name: '中之島',
    imgUrl: '',
  },
  {
    name: '諏訪之瀬島',
    imgUrl: '',
  },
  {
    name: '平島（鹿児島）',
    imgUrl: '',
  },
  {
    name: '悪石島',
    imgUrl: '',
  },
  {
    name: '小宝島',
    imgUrl: '',
  },
  {
    name: '宝島',
    imgUrl: '',
  },
  {
    name: '奄美大島',
    imgUrl: '',
  },
  {
    name: '加計呂麻島',
    imgUrl: '',
  },
  {
    name: '請島',
    imgUrl: '',
  },
  {
    name: '与路島',
    imgUrl: '',
  },
  {
    name: '喜界島',
    imgUrl: '',
  },
  {
    name: '徳之島',
    imgUrl: '',
  },
  {
    name: '沖永良部島',
    imgUrl: '',
  },
  {
    name: '与論島',
    imgUrl: '',
  },
  {
    name: '南大東島',
    imgUrl: '',
  },
  {
    name: '北大東島',
    imgUrl: '',
  },
  {
    name: '伊平屋島',
    imgUrl: '',
  },
  {
    name: '野甫島',
    imgUrl: '',
  },
  {
    name: '伊是名島',
    imgUrl: '',
  },
  {
    name: '宮城島（大宜味村）',
    imgUrl: '',
  },
  {
    name: '古宇利島',
    imgUrl: '',
  },
  {
    name: '屋我地島',
    imgUrl: '',
  },
  {
    name: '伊江島',
    imgUrl: '',
  },
  {
    name: '瀬底島',
    imgUrl: '',
  },
  {
    name: '水納島（本部）',
    imgUrl: '',
  },
  {
    name: '平安座島',
    imgUrl: '',
  },
  {
    name: '宮城島（うるま）',
    imgUrl: '',
  },
  {
    name: '伊計島',
    imgUrl: '',
  },
  {
    name: '浜比嘉島',
    imgUrl: '',
  },
  {
    name: '津堅島',
    imgUrl: '',
  },
  {
    name: '久高島',
    imgUrl: '',
  },
  {
    name: '奥島（南城）',
    imgUrl: '',
  },
  {
    name: '瀬長島',
    imgUrl: '',
  },
  {
    name: '前島（沖縄）',
    imgUrl: '',
  },
  {
    name: '渡嘉敷島',
    imgUrl: '',
  },
  {
    name: '座間味島',
    imgUrl: '',
  },
  {
    name: '阿嘉島',
    imgUrl: '',
  },
  {
    name: '慶留間島',
    imgUrl: '',
  },
  {
    name: '粟国島',
    imgUrl: '',
  },
  {
    name: '渡名喜島',
    imgUrl: '',
  },
  {
    name: '久米島',
    imgUrl: '',
  },
  {
    name: '奥武島（久米島町）',
    imgUrl: '',
  },
  {
    name: 'オーハ島',
    imgUrl: '',
  },
  {
    name: '宮古島',
    imgUrl: '',
  },
  {
    name: '池間島',
    imgUrl: '',
  },
  {
    name: '大神島',
    imgUrl: '',
  },
  {
    name: '来間島',
    imgUrl: '',
  },
  {
    name: '伊良部島',
    imgUrl: '',
  },
  {
    name: '下地島',
    imgUrl: '',
  },
  {
    name: '多良間島',
    imgUrl: '',
  },
  {
    name: '水納島（多良間）',
    imgUrl: '',
  },
  {
    name: '石垣島',
    imgUrl: '',
  },
  {
    name: '竹富島',
    imgUrl: '',
  },
  {
    name: '小浜島',
    imgUrl: '',
  },
  {
    name: '嘉弥真島',
    imgUrl: '',
  },
  {
    name: '黒島（沖縄）',
    imgUrl: '',
  },
  {
    name: '新城島上地',
    imgUrl: '',
  },
  {
    name: '新城島下地',
    imgUrl: '',
  },
  {
    name: '西表島',
    imgUrl: '',
  },
  {
    name: '由布島',
    imgUrl: '',
  },
  {
    name: '鳩間島',
    imgUrl: '',
  },
  {
    name: '波照間島',
    imgUrl: '',
  },
  {
    name: '外離島',
    imgUrl: '',
  },
  {
    name: '与那国島',
    imgUrl: '',
  },
] as const
