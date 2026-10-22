// Helpers for demo URLs
function buildMapUrl(q) {
  const query = encodeURIComponent(q || 'Khujand');
  return 'https://www.google.com/maps/search/?api=1&query=' + query;
}

// ВАЖНО: поля с пометкой TODO — это данные, которые нельзя проверить из открытых источников
// (ваш личный телефон/WhatsApp, точные цены в магазинах и т.п.). Заполните их сами.

window.MODERN_SPOTS = [
  {
    id: 'modern-1',
    title_ru: 'Сквер «Звезда Худжанда»',
    title_en: 'Stars Square',
    img: '../assets/img/stars.webp',
    story_ru: 'Сквер «Звезда Худжанда» — одна из самых узнаваемых прогулочных зон города. Здесь гости часто делают фото на фоне монумента поэту Камолу Худжанди, а вечером на площади особенно приятно гулять с чаем и видом на центр города. Место удобно для короткой остановки после прогулки по центральной части Худжанда.',
    story_en: 'Stars Square is one of the most recognizable leisure areas in Khujand. It is popular for photos near the monument to poet Kamol Khujandi, and in the evening the square feels especially pleasant for a slow walk and tea. It is a convenient stop after exploring the city center.',
    mapUrl: 'https://yandex.tj/maps/-/CPa~6T9s'
  },
  {
    id: 'modern-2',
    title_ru: 'Парк культуры и отдыха имени Камоли Худжанди',
    title_en: 'Kamoli Khujandi Park',
    img: '../assets/img/khujandipark.jpg',
    story_ru: 'Парк имени Камоли Худжанди расположен в центре города, на берегу Сырдарьи, рядом со стенами Худжандской крепости. Здесь находятся мавзолей и памятник поэту, дом-музей Камоли Худжанди с чорбагом, резными верандами и фонтанами. По данным путеводителей, парк открыт примерно с 05:00 до 22:00. Хорошо подходит для спокойной прогулки днём и вечером.',
    story_en: 'Kamoli Khujandi Park sits in the city center on the bank of the Syr Darya, right next to the walls of Khujand Fortress. It features the poet’s mausoleum and monument, his house-museum with a chorbog, carved verandas, and fountains. Travel guides list opening hours of roughly 05:00–22:00. It is a good place for a calm walk by day or evening.',
    mapUrl: buildMapUrl('Kamoli Khujandi Park Khujand')
  },
  {
    id: 'modern-3',
    title_ru: 'Парк имени Исмоили Сомони',
    title_en: 'Ismoili Somoni Park',
    img: '../assets/img/Somoni.jpg',
    story_ru: 'Парк имени Исмоили Сомони расположен в центре города, на правом (северном) берегу Сырдарьи. Главная достопримечательность — монумент основателю государства Саманидов Исмоили Сомони с каскадами фонтанов, широкими лестницами и тенистыми аллеями. Здесь же находится станция канатной дороги. Вход свободный, парк открыт круглосуточно; вечером включается декоративная подсветка. На прогулку и фото обычно хватает 1–2 часов.',
    story_en: 'Ismoili Somoni Park lies in the city center on the northern bank of the Syr Darya. Its centerpiece is the monument to Ismoil Somoni, founder of the Samanid state, surrounded by cascading fountains, wide stairways, and shaded alleys. The cable car station is also here. Entry is free and the park is open around the clock, with decorative lighting in the evening. Allow 1–2 hours for a walk and photos.',
    mapUrl: buildMapUrl('Ismoili Somoni Park Khujand')
  },
  {
    id: 'modern-4',
    title_ru: 'Парк Независимости',
    title_en: 'Independence Park',
    img: '../assets/img/independence.jpg',
    story_ru: 'Парк Независимости — спокойная территория для гуляний и отдыха, особенно подходящая для семей с детьми. Здесь есть открытые пространства, зелёные насаждения и атмосфера, типичная для современного городского отдыха. Лучше всего приходить утром или после 17:00, чтобы было комфортнее по погоде.',
    story_en: 'Independence Park is a calm public space for walks and relaxing, especially suitable for families. It has open areas, greenery, and the atmosphere of a modern city park. It is best to visit in the morning or after 5:00 PM when it is cooler and more comfortable.',
    mapUrl: buildMapUrl('Independence Park Khujand')
  },
  {
    id: 'modern-5',
    title_ru: 'Канатная дорога',
    title_en: 'Cable Car',
    img: '../assets/img/cable.jpg',
    story_ru: 'Канатная дорога соединяет парк Сомони на правом берегу Сырдарьи с историческим комплексом «Худжандская крепость» на левом берегу. Во время поездки открываются панорамные виды на город, реку и окружающие горы. По данным путеводителей, обычная кабина стоит около 15 сомони, VIP-кабина — около 20 (цены лучше уточнить на станции). Удобно совместить поездку с посещением крепости и парка Камоли Худжанди.',
    story_en: 'The cable car links Somoni Park on the right bank of the Syr Darya with the Khujand Fortress complex on the left bank. The ride offers panoramic views of the city, the river, and the surrounding mountains. Travel guides list about 15 TJS for a standard cabin and about 20 TJS for a VIP cabin (confirm at the station). It pairs well with a visit to the fortress and Kamoli Khujandi Park.',
    mapUrl: buildMapUrl('Khujand cable car Somoni Park')
  },
  {
    id: 'modern-6',
    title_ru: 'Парк Абу-Махмуди Худжанди',
    title_en: 'Abumahmudi Khujandi Park',
    img: '../assets/img/Abumahmudi-Khujandi.jpg',
    story_ru: 'Парк имени Абу Махмуди Худжанди — спокойная локация, хорошая для прогулок и отдыха в кругу семьи. В тёплое время здесь приятно провести час-два, особенно если хочется отойти от шумных центральных улиц. Наблюдать за местной жизнью здесь удобно и расслабленно.',
    story_en: 'Abumahmudi Khujandi Park is a calm and pleasant place for family walks and rest. In warm weather it is a good place to spend one or two hours away from the busier central streets. It is a relaxed spot to observe local life and take it slow.',
    mapUrl: buildMapUrl('Abumahmudi Khujandi Park Khujand')
  },
  {
    id: 'modern-7',
    title_ru: 'Парк Флага',
    title_en: 'Flag Park',
    img: '../assets/img/flag.webp',
    story_ru: 'Парк Флага — отличное место для прогулки в светлое время суток. Его простор и расположение делают его удачным вариантом для вечерних поездок, когда хочется немного отдохнуть и посмотреть на город после дня. Вокруг обычно комфортная атмосфера для неспешного перемещения.',
    story_en: 'Flag Park is a great place for daytime strolls and easy evening walks. Its open feel and convenient location make it a comfortable choice for unwinding after a busy day. It works well for a relaxed, low-pressure outing.',
    mapUrl: buildMapUrl('Flag Park Khujand')
  },
  {
    id: 'modern-8',
    title_ru: 'Набережная и городской пляж',
    title_en: 'City Beach & Promenade',
    img: '../assets/img/beach.jpg',
    story_ru: 'Набережная Сырдарьи и городской пляж — места, которые особенно нравятся в жаркие дни: летом температура в Худжанде нередко превышает 35 °C. Здесь хорошо гулять, отдыхать и наблюдать, как город проводит время у воды. Для гостей это удобная зона для короткого отдыха и красивых фотографий в тёплую погоду.',
    story_en: 'The Syr Darya promenade and city beach are especially popular on hot days; summer temperatures in Khujand often exceed 35 °C. It is a good place for a walk, a break by the water, and watching local life unfold. For visitors, it is a convenient area to relax and take photos in warm weather.',
    mapUrl: buildMapUrl('Khujand city beach promenade')
  }
];

window.OLD_SPOTS = [
  {
    id: 'old-1',
    title_ru: 'Худжандская крепость и Исторический музей Согда',
    title_en: 'Khujand Fortress & Sughd Historical Museum',
    img: '../assets/img/old.jpg',
    story_ru: 'Худжандская крепость — главный исторический символ города: старейшие её части относят к V–IV векам до н. э., а нынешний вид — результат реконструкций, в том числе недавних. Внутри расположен Исторический музей Согдийской области, один из старейших в стране (основан в 1931 году): здесь собраны находки из эпохи Александра Македонского и до современности. Комплекс стоит на берегу Сырдарьи, на улице Зариф Раджабова, а добраться сюда можно на канатной дороге из парка Сомони. Музей обычно работает со вторника по воскресенье — график и стоимость билета для иностранцев лучше уточнить на сайте qalai-khujand.tj. На осмотр понадобится 1,5–2 часа.',
    story_en: 'Khujand Fortress is the city’s main historical symbol: its oldest parts date to the 5th–4th centuries BC, while its present look is the result of several reconstructions, including recent ones. Inside is the Historical Museum of Sughd, one of the oldest in the country (founded in 1931), with exhibits from the era of Alexander the Great to modern times. The complex stands on the bank of the Syr Darya on Zarif Rajabov Street, and can be reached by cable car from Somoni Park. The museum usually operates Tuesday to Sunday — check hours and foreigner ticket prices at qalai-khujand.tj. Allow 1.5–2 hours.',
    mapUrl: buildMapUrl('Khujand Fortress Historical Museum of Sughd')
  },
  {
    id: 'old-2',
    title_ru: 'Традиционная чайхана',
    title_en: 'Traditional Teahouse',
    img: '../assets/img/chaykhana.webp',
    story_ru: 'Традиционная чайхана — идеальное место, чтобы почувствовать местную культуру через чай, беседу и простую атмосферу. Здесь обычно подают зелёный и чёрный чай, лепёшки, самсу и лёгкие закуски. Для гостей это один из самых уютных способов провести час и познакомиться с местным ритмом.',
    story_en: 'A traditional teahouse is one of the most atmospheric ways to experience local culture. It is often a place for green or black tea, flatbread, samsa, and small snacks. For visitors, it is a cozy way to slow down and get a feel for everyday life in Khujand.',
    mapUrl: buildMapUrl('Khujand teahouse')
  },
  {
    id: 'old-3',
    title_ru: 'Рынок Панжшанбе',
    title_en: 'Panjshanbe Market',
    img: '../assets/img/panjshanbe.jpg',
    story_ru: 'Панжшанбе (в переводе — «четверг») — один из самых больших и известных крытых рынков Таджикистана. Он находится в самом центре, на улице Шарк, 3а, напротив мавзолея шейха Муслихиддина. Здесь продают фрукты, сухофрукты, специи, зелень, хлеб, ремесленные изделия и местные продукты. Здание сочетает восточные и сталинские архитектурные мотивы. Лучше приходить с утра, на осмотр обычно уходит 1,5–2 часа. Режим работы разных рядов отличается — уточняйте на месте.',
    story_en: 'Panjshanbe (meaning “Thursday”) is one of the largest and best-known covered markets in Tajikistan. It stands in the very center, at 3a Sharq Street, opposite the Mausoleum of Sheikh Muslihiddin. You will find fresh and dried fruit, spices, herbs, bread, crafts, and everyday local goods. The building blends Eastern and Stalinist-era architectural elements. Come in the morning; allow 1.5–2 hours. Hours vary by section, so confirm on site.',
    mapUrl: buildMapUrl('Panjshanbe Bazaar Khujand')
  },
  {
    id: 'old-4',
    title_ru: 'Старые улочки Худжанда',
    title_en: 'Old Alleys of Khujand',
    img: '../assets/img/ulochki.jpg',
    story_ru: 'Старые улочки — сердце исторического Худжанда. Здесь можно увидеть узкие проходы, древние фасады, небольшие дома и атмосферу, которая сохраняет особый городской характер. Прогулку лучше делать без спешки и с камерой: в каждом дворе и на каждом углу есть детали, которые запоминаются.',
    story_en: 'The old alleys are the heart of historic Khujand. This is where visitors can find narrow lanes, old facades, compact houses, and the atmosphere that keeps the city’s historic character alive. It is best explored slowly and with time to notice the details.',
    mapUrl: buildMapUrl('Old alleys Khujand')
  },
  {
    id: 'old-5',
    title_ru: 'Мавзолей и мечеть шейха Муслихиддина',
    title_en: 'Sheikh Muslihiddin Mausoleum & Mosque',
    img: '../assets/img/apart-museum.jpg',
    story_ru: 'Комплекс шейха Муслихиддина — один из главных религиозных и архитектурных памятников Худжанда. Он расположен в центре города, прямо напротив рынка Панжшанбе, поэтому его удобно сочетать с походом на рынок. Это хорошее место, чтобы увидеть, как старая городская архитектура и повседневная жизнь существуют рядом. При посещении соблюдайте дресс-код: закрытые плечи и колени, для женщин — платок.',
    story_en: 'The Sheikh Muslihiddin complex is one of Khujand’s main religious and architectural landmarks. It stands in the city center, directly opposite Panjshanbe Market, so the two are easy to combine. It is a good place to see how historic architecture and everyday city life sit side by side. Dress modestly: cover shoulders and knees, and women should bring a headscarf.',
    mapUrl: buildMapUrl('Sheikh Muslihiddin Mausoleum Khujand')
  },
  {
    id: 'old-6',
    title_ru: 'Дворы и старые дома с мозаикой',
    title_en: 'Courtyards with Mosaic Details',
    img: '../assets/img/mozayki.jpg',
    story_ru: 'Старые дворы с мозаикой показывают художественную сторону городской истории. Такие детали часто остаются незамеченными, но именно они создают атмосферу глубокой, многослойной культуры города. Прогулка здесь хороша для тех, кто любит архитектуру и детали.',
    story_en: 'Old courtyards with mosaic details reveal the artistic side of Khujand’s urban history. These details are easy to miss, but they form a significant part of the city’s layered cultural identity. They are especially rewarding for visitors interested in architecture and ornament.',
    mapUrl: buildMapUrl('Khujand mosaic courtyards')
  }
];

window.GIFTS = [
  {
    id: 'gift-1',
    title_ru: 'Сузани — ручная вышивка',
    title_en: 'Suzani — hand embroidery',
    img: '../assets/img/suzani.avif',
    desc_ru: 'Классический подарочный сувенир с ярким национальным рисунком. Подходит для декора дома, спальни или гостиной.',
    desc_en: 'A classic souvenir with bright traditional patterns. Great for home décor or a welcoming gift.',
    price_ru: 'от 400 сомони', // TODO: проверить цены у вашего поставщика
    price_en: 'from 400 TJS',
    buyUrl: 'https://wa.me/992927544484'
  },
  {
    id: 'gift-2',
    title_ru: 'Шарфы и платки из шёлка и адраса',
    title_en: 'Silk and adras scarves',
    img: '../assets/img/shawls.webp',
    desc_ru: 'Лёгкие, стильные и красивые — идеальны как подарок и как национальный аксессуар для дома.',
    desc_en: 'Lightweight and beautiful, perfect as a memorable souvenir or a traditional accessory.',
    price_ru: 'от 150 сомони',
    price_en: 'from 150 TJS',
    buyUrl: 'https://wa.me/992927544484'
  },
  {
    id: 'gift-3',
    title_ru: 'Декоративные наволочки в этно-стиле',
    title_en: 'Ethno-style pillowcases',
    img: '../assets/img/pillowcases.png',
    desc_ru: 'Подходят для подарка, оформления дома или интерьера в национальном стиле.',
    desc_en: 'A practical and decorative gift that works well in a traditional or modern home.',
    price_ru: 'от 120 сомони',
    price_en: 'from 120 TJS',
    buyUrl: 'https://wa.me/992927544484'
  },
  {
    id: 'gift-4',
    title_ru: 'Тюбетейки и национальные головные уборы',
    title_en: 'Tajik national caps',
    img: '../assets/img/tubeteyki.jpg',
    desc_ru: 'Традиционный аксессуар с национальным узором, популярный среди гостей и коллекционеров.',
    desc_en: 'A traditional accessory with distinctive national patterns and a strong cultural identity.',
    price_ru: 'от 180 сомони',
    price_en: 'from 180 TJS',
    buyUrl: 'https://wa.me/992927544484'
  },
  {
    id: 'gift-5',
    title_ru: 'Керамическая посуда и тарелки',
    title_en: 'Ceramic plates and tableware',
    img: '../assets/img/tarelka.webp',
    desc_ru: 'Ручная роспись и традиционные орнаменты делают такую посуду особенно ценным сувениром.',
    desc_en: 'Hand-painted ceramics with traditional motifs make a memorable and useful souvenir.',
    price_ru: 'от 200 сомони',
    price_en: 'from 200 TJS',
    buyUrl: 'https://wa.me/992927544484'
  },
  {
    id: 'gift-6',
    title_ru: 'Национальная сумка и аксессуары',
    title_en: 'National bag and accessories',
    img: '../assets/img/sumka.jpg',
    desc_ru: 'Комбинирует практичность и этнический стиль, хорошо подходит для подарка или повседневного использования.',
    desc_en: 'A useful and stylish accessory that keeps the local design language in everyday life.',
    price_ru: 'от 220 сомони',
    price_en: 'from 220 TJS',
    buyUrl: 'https://wa.me/992927544484'
  },
  {
    id: 'gift-7',
    title_ru: 'Глиняные фигурки и сувениры',
    title_en: 'Clay figurines and souvenirs',
    img: '../assets/img/statuetka.jpg',
    desc_ru: 'Небольшие сувениры из керамики и глины, часто напоминают о восточной культуре и быте.',
    desc_en: 'Small clay objects that reflect the texture and spirit of local craft traditions.',
    price_ru: 'от 110 сомони',
    price_en: 'from 110 TJS',
    buyUrl: 'https://wa.me/992927544484'
  },
  {
    id: 'gift-8',
    title_ru: 'Браслеты и украшения в этно-стиле',
    title_en: 'Ethno-style bracelets and jewelry',
    img: '../assets/img/bracelets.jpg',
    desc_ru: 'Удачный вариант небольшого подарка с традиционным оформлением и лёгкой, удобной формой.',
    desc_en: 'A compact and attractive gift with a traditional design language and everyday wearability.',
    price_ru: 'от 130 сомони',
    price_en: 'from 130 TJS',
    buyUrl: 'https://wa.me/992927544484'
  }
];

// Directory lists for “place cards” pages
// Телефоны оставлены пустыми там, где проверенного номера нет — не подставляйте выдуманные.
window.CONTENT = {
  'essentials-banks': [
    {
      kind: 'place',
      name_ru: 'Амонатбонк (Сберегательный банк Таджикистана)',
      name_en: 'Amonatbonk (Savings Bank of Tajikistan)',
      desc_ru: 'Государственный банк с отделениями по всей стране; история банка начинается с сберегательной кассы, открытой в Худжанде в 1885 году. Подходит для обмена валюты и базовых услуг. Возьмите паспорт.',
      desc_en: 'A state bank with branches across the country; its history goes back to a savings office opened in Khujand in 1885. Suitable for currency exchange and basic services. Bring your passport.',
      address: 'Худжанд, центр (точный адрес ближайшего отделения уточняйте на amonatbonk.tj или у хозяина)', // TODO
      hours: '09:00–17:00 (уточняйте)',
      phone: '',
      whatsapp: '',
      mapQuery: 'Amonatbonk Khujand'
    },
    {
      kind: 'place',
      name_ru: 'Банк «Эсхата» (головной офис — Худжанд)',
      name_en: 'Bank Eskhata (head office in Khujand)',
      desc_ru: 'Один из крупнейших банков Таджикистана, головной офис находится в Худжанде. Банкоматы банка считаются надёжными для карт Visa/Mastercard.',
      desc_en: 'One of the largest banks in Tajikistan, headquartered in Khujand. Its ATMs are widely reported as reliable for Visa/Mastercard.',
      address: 'Худжанд (точный адрес отделения уточняйте на сайте банка)', // TODO
      hours: '09:00–17:00 (уточняйте)',
      phone: '',
      whatsapp: '',
      mapQuery: 'Bank Eskhata Khujand'
    },
    {
      kind: 'place',
      name_ru: 'Банкомат / платёжный терминал',
      name_en: 'ATM / payment terminal',
      desc_ru: 'Банкоматы есть в центре города, около рынков и торговых центров. Не рассчитывайте на один банкомат — лучше иметь запас наличных и уточнить у хозяина ближайший работающий.',
      desc_en: 'ATMs are found in the city center and near markets and shopping centers. Do not rely on a single machine — keep some cash in reserve and ask your host for the nearest working one.',
      address: 'Центральные улицы, рынки и торговые центры Худжанда',
      hours: 'Обычно круглосуточно',
      phone: '',
      whatsapp: '',
      mapQuery: 'ATM Khujand center'
    }
  ],
  'essentials-sim': [
    {
      kind: 'place',
      name_ru: 'Центр обслуживания Tcell (ул. К. Худжанди, 162)',
      name_en: 'Tcell service center (162 K. Khujandi St)',
      desc_ru: 'Крупнейший оператор страны. Здесь можно купить SIM-карту (нужен паспорт), пополнить баланс и подключить мобильный интернет. Есть и другие центры — у автовокзала и в 34-м микрорайоне (ТЦ «Абукарим»).',
      desc_en: 'The largest mobile operator in the country. You can buy a SIM card (bring your passport), top up, and get mobile data. Other service centers are near the bus station and in the 34th microdistrict (Abukarim shopping center).',
      address: 'Худжанд, ул. К. Худжанди, 162',
      hours: '09:00–18:00 (уточняйте)', // TODO: проверить
      phone: '',
      whatsapp: '',
      mapQuery: 'Tcell Khujand Kamoli Khujandi 162'
    },
    {
      kind: 'place',
      name_ru: 'Центр обслуживания Tcell (у автовокзала)',
      name_en: 'Tcell service center (near the bus station)',
      desc_ru: 'Удобно, если вы только приехали на автовокзал: можно сразу купить SIM-карту и интернет.',
      desc_en: 'Handy if you have just arrived at the bus station: buy a SIM card and data right away.',
      address: 'Худжанд, рядом с автовокзалом',
      hours: '09:00–18:00 (уточняйте)',
      phone: '',
      whatsapp: '',
      mapQuery: 'Tcell Khujand bus station'
    },
    {
      kind: 'place',
      name_ru: 'Офис Megafon Таджикистан',
      name_en: 'Megafon Tajikistan office',
      desc_ru: 'Альтернативный оператор: сравните тарифы и покрытие. Адрес ближайшего салона лучше уточнить в приложении оператора или у хозяина.',
      desc_en: 'An alternative operator: compare pricing and coverage. Ask your host or check the operator’s app for the nearest shop.',
      address: 'Худжанд (адрес уточняйте)', // TODO
      hours: '09:00–18:00 (уточняйте)',
      phone: '',
      whatsapp: '',
      mapQuery: 'Megafon Tajikistan Khujand'
    }
  ],
  'restaurants-rated': [
    {
      kind: 'place',
      name_ru: 'Кафе «Бахтиёр»',
      name_en: 'Cafe Bahtiyor',
      desc_ru: 'Популярное место для плова, манты, шурпы и стейков. Удобно для семейного ужина или отдыха после прогулки.',
      desc_en: 'Popular spot for plov, manty, shurpa, and grilled dishes. Good for a casual family dinner or relaxed evening.',
      address: 'Улица Сырдарьи, рядом с гостиницей «Парламент»',
      hours: '11:00–23:00',
      phone: '',
      whatsapp: '',
      mapQuery: 'Cafe Bahtiyor Syr Darya street Parlament hotel Khujand'
    },
    {
      kind: 'place',
      name_ru: 'Кафе «Равшан»',
      name_en: 'Cafe Ravshan',
      desc_ru: 'Дружелюбная атмосфера, блюда национальной кухни и хорошее расположение для гостей, приехавших в центр города.',
      desc_en: 'Friendly atmosphere, national dishes, and a practical central location for visitors.',
      address: 'Рядом с театром, центр Худжанда',
      hours: '10:00–22:00',
      phone: '',
      whatsapp: '',
      mapQuery: 'Cafe Ravshan near theater Khujand'
    },
    {
      kind: 'place',
      name_ru: 'Локальная чайхана',
      name_en: 'Local teahouse',
      desc_ru: 'Место для чая, самсы и беседы. Лучше всего подходит для уютного отдыха без суеты туристических зон.',
      desc_en: 'A good place for tea, samsa, and a slower local experience away from tourist-heavy spots.',
      address: 'Один из жилых кварталов Худжанда',
      hours: '09:00–21:00',
      phone: '',
      whatsapp: '',
      mapQuery: 'Local teahouse Khujand'
    }
  ],
  'restaurants-dishes': [
    {
      name_ru: 'Плов (ош)',
      name_en: 'Plov (osh)',
      desc_ru: 'Традиционное блюдо с рисом, мясом, морковью и специями. Обычно подаётся в крупных порциях. Порция в городе стоит порядка 35 сомони (ориентир, цены меняются).',
      desc_en: 'Traditional rice dish with meat, carrots, onions, and spices. It is usually served in generous portions. A portion in the city costs roughly 35 TJS (a guideline; prices change).'
    },
    {
      name_ru: 'Манты',
      name_en: 'Mantu',
      desc_ru: 'Паровые манты с мясом и луком — одно из самых любимых блюд в регионе.',
      desc_en: 'Steamed dumplings with meat and onion, a classic comfort food across the region.'
    },
    {
      name_ru: 'Лагман',
      name_en: 'Lagman',
      desc_ru: 'Насыщенный суп с лапшой и овощами, очень популярен среди местных жителей.',
      desc_en: 'Hearty noodle soup with vegetables and meat, popular with local residents.'
    },
    {
      name_ru: 'Шашлык',
      name_en: 'Shashlik',
      desc_ru: 'Жареное мясо, часто подаётся с луком, помидорами, зеленью и хлебом.',
      desc_en: 'Grilled meat typically served with onions, tomatoes, herbs, and bread.'
    },
    {
      name_ru: 'Самса',
      name_en: 'Samsa',
      desc_ru: 'Хлебный пирожок с начинкой, очень удобен как перекус или лёгкий завтрак.',
      desc_en: 'A baked pastry with filling, excellent as a snack or a light breakfast.'
    },
    {
      name_ru: 'Чай и зелёный чай',
      name_en: 'Tea and green tea',
      desc_ru: 'Традиционно подаётся в чайхане и обычных кафе, часто с сахаром и лёгкими закусками.',
      desc_en: 'A core part of local hospitality, often served with sweets or small snacks.'
    }
  ],
  'host-contacts': [
    {
      kind: 'place',
      name_ru: 'Хозяин / связь 24/7',
      name_en: 'Host / 24/7 contact',
      desc_ru: 'Поддержка по вопросам транспорта, маршрутов, бронирования, SIM-карты и местных рекомендаций.',
      desc_en: 'Support for transport, routes, booking, SIM cards, and local recommendations around the clock.',
      phone: '+992 92 754 4484',
      whatsapp: '+992927544484'
    }
  ]
};

// Ориентиры по времени и ценам взяты из путеводителей и туристических форумов.
// Цены на такси часто меняются — перед поездкой согласуйте их с водителем.
window.INTERCITY = [
  {
    id: 'khujand-dushanbe',
    title_ru: 'Худжанд → Душанбе',
    title_en: 'Khujand → Dushanbe',
    img: '../assets/img/Khujand.png',
    price_ru: 'общее такси — ориентир 120–150 сомони с человека (данные прошлых лет, сейчас может быть дороже); целая машина — по договорённости',
    price_en: 'shared taxi — roughly 120–150 TJS per person (older figures, may be higher now); private car — negotiable',
    time_ru: '≈ 310–340 км, обычно 5–7 часов (через тоннель Анзоб, зависит от сезона и остановок)',
    time_en: '≈ 310–340 km, usually 5–7 hours (via the Anzob Tunnel, depends on season and stops)',
    where_ru: 'Общие такси и маршрутки уходят с центрального автовокзала. Лучше уточнить точку у хозяина в день поездки.',
    where_en: 'Shared taxis and minibuses depart from the central bus station. Confirm the exact point with your host on the day of travel.',
    tips_ru: 'Лучше ехать утром. Уточняйте цену заранее, заранее согласуйте остановки и количество мест. В горных участках погода может меняться.',
    tips_en: 'Plan to leave in the morning. Agree the fare in advance and confirm stops and seat count. Mountain weather can change.',
    mapQuery: 'Khujand bus station'
  },
  {
    id: 'khujand-tashkent',
    title_ru: 'Худжанд → Ташкент (через пункт пропуска Ойбек)',
    title_en: 'Khujand → Tashkent (via Oybek border crossing)',
    img: '../assets/img/roads.jpg',
    price_ru: 'такси до Ойбека — ориентир 50–80 сомони (данные прошлых лет); частный трансфер до Ташкента — по договорённости',
    price_en: 'taxi to Oybek — roughly 50–80 TJS (older figures); private transfer to Tashkent — negotiable',
    time_ru: '≈ 70 км (около 1 часа) до границы Ойбек; всего до Ташкента около 160 км, ≈ 3 часа с оформлением',
    time_en: '≈ 70 km (about 1 hour) to the Oybek border; about 160 km to Tashkent, ≈ 3 hours including border procedures',
    where_ru: 'Такси или частные водители. Важно заранее согласовать встречу и обратный выезд.',
    where_en: 'Taxi or private drivers. Pre-arrange the pickup point and return trip for smooth travel.',
    tips_ru: 'Возьмите паспорт, воду, наличные и запас времени на пограничное оформление. Проверьте визовые требования для вашего гражданства и часы работы пункта пропуска. Лучший вариант — согласовать поездку заранее.',
    tips_en: 'Bring your passport, water, cash, and extra time for border procedures. Check visa requirements for your nationality and the crossing’s opening hours. Best to arrange the trip in advance.',
    mapQuery: 'Oybek border crossing Tajikistan Uzbekistan'
  },
  {
    id: 'khujand-kayrakkum',
    title_ru: 'Худжанд → Кайраккум (Гулистон) и «Таджикское море»',
    title_en: 'Khujand → Kayrakkum (Guliston) & the “Tajik Sea”',
    img: '../assets/img/Kayrakkum.jpg',
    price_ru: 'маршрутка № 40 от остановки у рынка Панжшанбе — около 5 сомони; такси — около 50–60 сомони в одну сторону',
    price_en: 'minibus no. 40 from the Panjshanbe Market stop — about 5 TJS; taxi — about 50–60 TJS one way',
    time_ru: '≈ 20 км, около 20–40 минут',
    time_en: '≈ 20 km, about 20–40 minutes',
    where_ru: 'Маршрутки идут от остановки у рынка Панжшанбе; такси можно вызвать через приложение. Хороший ориентир для высадки — санаторий «Бахористон». Последняя маршрутка обратно обычно уходит около 18:00–19:00.',
    where_en: 'Minibuses leave from the Panjshanbe Market stop; taxis can be booked through an app. A good drop-off point is the Bahoriston sanatorium. The last minibus back usually leaves around 6–7 PM.',
    tips_ru: 'Берите воду, головной убор и солнцезащиту. Пляж у «Бахористона» каменистый, а на территорию соседних санаториев летом может взиматься небольшая плата. Лучше ехать днём.',
    tips_en: 'Take water, a hat, and sun protection. The beach near Bahoriston is rocky, and neighboring sanatoriums may charge a small entry fee in summer. Travel in daylight.',
    mapQuery: 'Kayrakkum reservoir Bahoriston Khujand'
  },
  {
    id: 'khujand-penjikent',
    title_ru: 'Худжанд → Пенджикент',
    title_en: 'Khujand → Penjikent',
    img: '../assets/img/roads.jpg',
    price_ru: 'общее такси или маршрутка — цена зависит от сезона и машины; частный водитель — по договорённости',
    price_en: 'shared taxi or minibus — price depends on season and vehicle; private driver — negotiable',
    time_ru: '≈ 260–270 км, обычно 5–6 часов',
    time_en: '≈ 260–270 km, usually 5–6 hours',
    where_ru: 'Общие такси и маршрутки в сторону Пенджикента отправляются с центрального автовокзала. Лучше заранее обсудить точку отъезда и остановки.',
    where_en: 'Shared taxis and minibuses toward Penjikent depart from the central bus station. Confirm the departure point and stops in advance.',
    tips_ru: 'Выезжайте рано утром и двигайтесь в светлое время суток. Заранее проверьте время в пути и состояние дороги. От Пенджикента удобно ехать к озёрам Гафткул (Семь озёр, около 80 км).',
    tips_en: 'Leave early in the morning and travel in daylight. Check travel time and road conditions in advance. From Penjikent you can continue to the Haftkul (Seven Lakes), about 80 km away.',
    mapQuery: 'Penjikent Tajikistan'
  }
];