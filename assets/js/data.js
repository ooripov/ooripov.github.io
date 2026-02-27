// Helpers for demo URLs
function buildMapUrl(q) {
  const query = encodeURIComponent(q || 'Khujand');
  return 'https://www.google.com/maps/search/?api=1&query=' + query;
}

window.MODERN_SPOTS = [
  {
    id: 'modern-1',
    title_ru: 'Сквер Звёзды',
    title_en: 'Stars Square',
    img: '../assets/img/stars.webp',
    story_ru: 'Сквер «Звезда Худжанда» — уютная парковая зона, расположенная на улице Иваницкого в Худжанде, Согдийская область.Главной достопримечательностью является памятник великому поэту Камолу Худжанди, установленный в 1996 году, символизирующий вдохновение и мудрость. Сквер популярен для прогулок и находится в центре культурной жизни города',
    story_en: 'Stars Square in Khujand is a cozy park area located on Ivаницкого Street in Khujand, Sogdian region. The main attraction is a monument to the great poet Kamil Khujandi, installed in 1996, symbolizing inspiration and wisdom. The square is popular for walks and is at the center of the city\'s cultural life.',
    mapUrl: "https://yandex.tj/maps/-/CPa~6T9s"
  },
  {
    id: 'modern-2',
    title_ru: 'Центральный Парк г. Худжанд',
    title_en: 'Central Park of Khujand',
    img: '../assets/img/khujandipark.jpg',
    story_ru: 'Опиши прогулочную зону: виды, кафе, вечерние огни, сколько времени заложить.',
    story_en: 'Describe the promenade: views, cafés, evening lights, and how long to plan.',
    mapUrl: buildMapUrl('Khujand central park')
  },
  {
    id: 'modern-3',
    title_ru: 'Парк Исмоили Сомони',
    title_en: 'Ismoil Somoni Park',
    img: '../assets/img/somoni.webp',
    story_ru: 'Опиши прогулочную зону: виды, кафе, вечерние огни, сколько времени заложить.',
    story_en: 'Describe the promenade: views, cafés, evening lights, and how long to plan.',
    mapUrl: buildMapUrl('Khujand Ismoil Somooni Park')
  },
  {
    id: "toj-park",
    title_ru: "Парк Независимости",
    title_en: "Independence Park",
    img: "../assets/img/independence.jpg",
    story_ru:
      "Ещё один пример. Тут можно описать прогулочную зону: виды, кафе, вечерние огни, семейная атмосфера.",
    story_en:
      "Another example. Describe the promenade: views, cafés, evening lights, and a family-friendly vibe.",
    mapUrl: buildMapUrl('Khujand Independence Park')
  },
  {
    id: "cable-car",
    title_ru: "Кабельная дорога",
    title_en: "Cable Car",
    img: "../assets/img/cable.jpg",
    story_ru:
      "Ещё один пример. Тут можно описать прогулочную зону: виды, кафе, вечерние огни, семейная атмосфера.",
    story_en:
      "Another example. Describe the promenade: views, cafés, evening lights, and a family-friendly vibe.",
    mapUrl: buildMapUrl('Khujand Cable Car')
  },
  {
    id: "Abumahmudi-Khujandi-park",
    title_ru: "Парк Абумахмуди Худжанди",
    title_en: "Abumahmudi Khujandi Park",
    img: "../assets/img/Abumahmudi-Khujandi.jpg",
    story_ru:
      "Ещё один пример. Тут можно описать прогулочную зону: виды, кафе, вечерние огни, семейная атмосфера.",
    story_en:
      "Another example. Describe the promenade: views, cafés, evening lights, and a family-friendly vibe.",
    mapUrl: buildMapUrl('Khujand Abumahmudi Khujandi Park')
  },
  {
    id: "Flag-park",
    title_ru: "Парк Флага",
    title_en: "Flag Park",
    img: "../assets/img/flag.webp",
    story_ru:
      "Ещё один пример. Тут можно описать прогулочную зону: виды, кафе, вечерние огни, семейная атмосфера.",
    story_en:
      "Another example. Describe the promenade: views, cafés, evening lights, and a family-friendly vibe.",
    mapUrl: buildMapUrl('Khujand Flag Park')
  },
  {
    id: "City-beach-park",
    title_ru: "Набережная и городской пляж",
    title_en: "City Beach",
    img: "../assets/img/beach.jpg",
    story_ru:
      "Ещё один пример. Тут можно описать прогулочную зону: виды, кафе, вечерние огни, семейная атмосфера.",
    story_en:
      "Another example. Describe the promenade: views, cafés, evening lights, and a family-friendly vibe.",
    mapUrl: buildMapUrl('Khujand City Beach')
  },
  {
    id: "Chumchuk-aral",
    title_ru: "Парк Чумчук Арал",
    title_en: "Chumchuk Aral Park",
    img: "../assets/img/chum-chuk.jpg",
    story_ru:
      "Ещё один пример. Тут можно описать прогулочную зону: виды, кафе, вечерние огни, семейная атмосфера.",
    story_en:
      "Another example. Describe the promenade: views, cafés, evening lights, and a family-friendly vibe.",
    mapUrl: buildMapUrl('Khujand Chumchuk Aral Park')
  }
];


window.OLD_SPOTS = [
  {
    id: 'old-1',
    title_ru: 'Старая крепость Худжанда',
    title_en: 'Old Khujand Fortress',
    img: '../assets/img/old.jpg',
    story_ru: 'Атмосфера узких улиц, резные двери, жизнь соседей. Совет: приходить утром.',
    story_en: 'Narrow streets, carved doors, neighborhood life. Tip: come in the morning.',
    mapUrl: buildMapUrl('Old Khujand Fortress')
  },
  {
    id: 'old-2',
    title_ru: 'Чайхана ',
    title_en: 'Teahouse',
    img: '../assets/img/chaykhana.webp',
    story_ru: 'Традиции чаепития, интерьер и что попробовать.',
    story_en: 'Tea traditions, interior details and what to try.',
    mapUrl: buildMapUrl('Old Khujand teahouse')
  },
  {
    id: "Panjshanbe-market",
    title_ru: "Рынок Панжшанбе",
    title_en: "Panjshanbe Market",
    img: "../assets/img/panjshanbe.jpg",
    story_ru:
      "Ещё один пример. Тут можно описать прогулочную зону: виды, кафе, вечерние огни, семейная атмосфера.",
    story_en:
      "Another example. Describe the promenade: views, cafés, evening lights, and a family-friendly vibe.",
    mapUrl: buildMapUrl('Khujand Panjshanbe Market')
  },
  {
    id: "old-streets",
    title_ru: "Старые улоочки Худжанда",
    title_en: "Old alleys of Khujand",
    img: "../assets/img/ulochki.jpg",
    story_ru:
      "Ещё один пример. Тут можно описать прогулочную зону: виды, кафе, вечерние огни, семейная атмосфера.",
    story_en:
      "Another example. Describe the promenade: views, cafés, evening lights, and a family-friendly vibe.",
    mapUrl: buildMapUrl('Khujand Old alleys')
  },
  {
    id: "Apart-museum",
    title_ru: "Апартамент Музей",
    title_en: "Museum Apartment ",
    img: "../assets/img/apart-museum.jpg",
    story_ru:
      "Ещё один пример. Тут можно описать прогулочную зону: виды, кафе, вечерние огни, семейная атмосфера.",
    story_en:
      "Another example. Describe the promenade: views, cafés, evening lights, and a family-friendly vibe.",
    mapUrl: buildMapUrl('Khujand Museum Apartment')
  },
  {
    id: "Mozayki",
    title_ru: "Дворы и старые дома с экспонатами мозайками",
    title_en: "Courtyards and old houses with mosaic exhibits",
    img: "../assets/img/mozayki.jpg",
    story_ru:
      "Ещё один пример. Тут можно описать прогулочную зону: виды, кафе, вечерние огни, семейная атмосфера.",
    story_en:
      "Another example. Describe the promenade: views, cafés, evening lights, and a family-friendly vibe.",
    mapUrl: buildMapUrl('Khujand Mozayki')
  },
];


window.GIFTS = [
  {
    id: 'gift-1',
    title_ru: 'Сузани (ручная вышивка)',
    title_en: 'Suzani (hand embroidery)',
    img: '../assets/img/suzani.avif',
    desc_ru: 'Традиционная вышивка. Хороший подарок для дома.',
    desc_en: 'Traditional embroidery. Great home gift.',
    price_ru: '400 сомони',
    price_en: '400 TJS',
    buyUrl: 'https://wa.me/992000000000'
  },
  {
    id: 'gift-5',
    title_ru: 'Шарфы и платки из атласа и адраса',
    title_en: 'Scarves and shawls from silk and brocade',
    img: '../assets/img/shawls.jpg',
    desc_ru: 'Ручная работа, традиционные узоры.',
    desc_en: 'Handmade, traditional patterns.',
    price_ru: '100 сомони',
    price_en: '100 TJS',
    buyUrl: 'https://wa.me/992000000000'
  },
  {
    id: 'gift-6',
    title_ru: 'Декоративные наволочки в этно-стиле',
    title_en: 'Etno-style decorative pillowcases',
    img: '../assets/img/pillowcases.png',
    desc_ru: 'Ручная работа, традиционные узоры.',
    desc_en: 'Handmade, traditional patterns.',
    price_ru: '100 сомони',
    price_en: '100 TJS',
    buyUrl: 'https://wa.me/992000000000'
  },
  {
    id: 'gift-7',
    title_ru: 'Тюбетейки (национальные шапки)',
    title_en: 'Etno-style decorative caps',
    img: '../assets/img/tubeteyki.jpg',
    desc_ru: 'Ручная работа, традиционные узоры.',
    desc_en: 'Handmade, traditional patterns.',
    price_ru: '100 сомони',
    price_en: '100 TJS',
    buyUrl: 'https://wa.me/992000000000'
  },
    {
      id: 'gift-8',
      title_ru: 'Браслеты и украшения в этно-стиле',
      title_en: 'Etno-style decorative bracelets and jewelry',
      img: '../assets/img/braslet.jpg',
      desc_ru: 'Ручная работа, традиционные узоры.',
      desc_en: 'Handmade, traditional patterns.',
      price_ru: '100 сомони',
      price_en: '100 TJS',
      buyUrl: 'https://wa.me/992000000000'
    },
  {
    id: 'gift-2',
    title_ru: 'Керамическая тарелка',
    title_en: 'Ceramic plate',
    img: '../assets/img/tarelka.webp',
    desc_ru: 'Ручная роспись, орнаменты Согда.',
    desc_en: 'Hand-painted, Sogdian patterns.',
    price_ru: '120 сомони',
    price_en: '120 TJS',
    buyUrl: 'https://wa.me/992000000000'
  },
  {
    id: 'gift-3',
    title_ru: 'Национальная сумочка',
    title_en: 'National bag',
    img: '../assets/img/sumka.jpg',
    desc_ru: 'Ручная работа, традиционные узоры.',
    desc_en: 'Handmade, traditional patterns.',
    price_ru: '200 сомони',
    price_en: '200 TJS',
    buyUrl: 'https://wa.me/992000000000'
  },
  {
    id: 'gift-4',
    title_ru: 'Статуэтки из глины',
    title_en: 'Clay figurines',
    img: '../assets/img/statuetka.jpg',
    desc_ru: 'Ручная работа, традиционные узоры.',
    desc_en: 'Handmade, traditional patterns.',
    price_ru: '100 сомони',
    price_en: '100 TJS',
    buyUrl: 'https://wa.me/992000000000'
  }
];

// Directory lists for “place cards” pages (пример)
window.CONTENT = {
  'essentials-banks': [
    {
      kind: 'place',
      name_ru: 'Банк / банкомат (пример)',
      name_en: 'Bank / ATM (example)',
      desc_ru: 'Добавь сюда реальные банки и банкоматы рядом с квартирой.',
      desc_en: 'Add real banks/ATMs near the apartment here.',
      address: 'Худжанд, пример адреса',
      hours: '09:00–18:00',
      phone: '+992 00 000 0000',
      whatsapp: '+992000000000',
      mapQuery: 'Khujand bank ATM'
    }
  ],
  'essentials-sim': [
    {
      kind: 'place',
      name_ru: 'Офис мобильного оператора (пример)',
      name_en: 'Mobile operator office (example)',
      desc_ru: 'Где купить SIM-карту и подключить интернет.',
      desc_en: 'Where to buy a SIM card and get mobile data.',
      address: 'Худжанд, пример адреса',
      hours: '10:00–19:00',
      phone: '+992 00 000 0000',
      whatsapp: '+992000000000',
      mapQuery: 'Khujand SIM card'
    }
  ],
  'restaurants-rated': [
    {
      kind: 'place',
      name_ru: 'Ресторан (пример)',
      name_en: 'Restaurant (example)',
      desc_ru: 'Плов, манты, шашлык. Средний чек: ...',
      desc_en: 'Plov, manty, shashlik. Average bill: ...',
      address: 'Худжанд, пример адреса',
      hours: '11:00–23:00',
      phone: '+992 00 000 0000',
      whatsapp: '+992000000000',
      mapQuery: 'Khujand restaurant'
    }
  ],
  'host-contacts': [
    {
      kind: 'place',
      name_ru: 'Хозяин / связь 24/7',
      name_en: 'Host / 24/7 contact',
      desc_ru: 'Пиши или звони в любое время.',
      desc_en: 'Message or call anytime.',
      phone: '+992 00 000 0000',
      whatsapp: '+992000000000'
    }
  ]
};



window.INTERCITY = [
  {
    id: "khujand-dushanbe",
    title_ru: "Худжанд → Душанбе",
    title_en: "Khujand → Dushanbe",
    img: "../assets/img/Khujand.png",

    price_ru: "от 250–450 сомони (такси), маршрутка дешевле",
    price_en: "from 250–450 TJS (taxi), shared ride is cheaper",

    time_ru: "≈ 5–7 часов",
    time_en: "≈ 5–7 hours",

    where_ru: "Обычно выезжают со стоянок такси/у рынка или автостанции. Уточните у хозяина актуальную точку.",
    where_en: "Usually depart from taxi stands near the bazaar or bus station. Ask host for the current best spot.",

    tips_ru: "Лучше ехать утром. Цена — заранее. Уточните остановки и сколько мест в машине.",
    tips_en: "Go in the morning. Agree the price in advance. Confirm stops and how many seats.",

    mapQuery: "Khujand bus station"
  },
{
    id: "khujand-oybek",
    title_ru: "Худжанд → Ойбек (граница Ташкента)",
    title_en: "Khujand → Oybek (border of Tashkent)",
    img: "../assets/img/Khujand.png",

    price_ru: "такси: договорная цена",
    price_en: "taxi: negotiable",

    time_ru: "≈ 25–50 минут",
    time_en: "≈ 25–50 minutes",

    where_ru: "Такси или частные водители. Можно попросить хозяина помочь с организацией.",
    where_en: "Taxi or private drivers. Host can help arrange.",

    tips_ru: "Возьмите воду, кепку и наличные. Уточните заранее место встречи на обратный путь.",
    tips_en: "Bring water, a hat and cash. Confirm return pickup point.",

    mapQuery: "Kayrakkum Tajikistan"
  },
  {
    id: "khujand-kayrakkum",
    title_ru: "Худжанд → Кайраккум (пляж/озеро)",
    title_en: "Khujand → Kayrakkum (lake/beach)",
    img: "../assets/img/Khujand.png",

    price_ru: "такси: договорная цена",
    price_en: "taxi: negotiable",

    time_ru: "≈ 25–50 минут",
    time_en: "≈ 25–50 minutes",

    where_ru: "Такси или частные водители. Можно попросить хозяина помочь с организацией.",
    where_en: "Taxi or private drivers. Host can help arrange.",

    tips_ru: "Возьмите воду, кепку и наличные. Уточните заранее место встречи на обратный путь.",
    tips_en: "Bring water, a hat and cash. Confirm return pickup point.",

    mapQuery: "Kayrakkum Tajikistan"
  },
  {
    id: "khujand-patar",
    title_ru: "Худжанд → Патар (граница с Кыргызстаном)",
    title_en: "Khujand → Patar (border with Kyrgyzstan)",
    img: "../assets/img/Khujand.png",

    price_ru: "такси: договорная цена",
    price_en: "taxi: negotiable",

    time_ru: "≈ 25–50 минут",
    time_en: "≈ 25–50 minutes",

    where_ru: "Такси или частные водители. Можно попросить хозяина помочь с организацией.",
    where_en: "Taxi or private drivers. Host can help arrange.",

    tips_ru: "Возьмите воду, кепку и наличные. Уточните заранее место встречи на обратный путь.",
    tips_en: "Bring water, a hat and cash. Confirm return pickup point.",

    mapQuery: "Kayrakkum Tajikistan"
  }
  
];
