// Helpers for demo URLs
function buildMapUrl(q) {
  const query = encodeURIComponent(q || 'Khujand');
  return 'https://www.google.com/maps/search/?api=1&query=' + query;
}

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
    title_ru: 'Центральный парк Худжанда',
    title_en: 'Central Park of Khujand',
    img: '../assets/img/khujandipark.jpg',
    story_ru: 'Центральный парк подходит для спокойной прогулки, семейного отдыха и вечерних поездок. Чаще всего здесь гуляют после обеда, выбирают тень деревьев, кафе и живописные дорожки. В хорошую погоду это один из лучших вариантов провести 1–2 часа на свежем воздухе.',
    story_en: 'The central park is ideal for a calm walk, family time, and evening outings. Visitors usually come here after lunch for shade, easy paths, and café stops. In good weather it is one of the best places to spend 1–2 hours outdoors.',
    mapUrl: buildMapUrl('Central Park Khujand')
  },
  {
    id: 'modern-3',
    title_ru: 'Парк имени Исмоили Сомони',
    title_en: 'Ismoili Somoni Park',
    img: '../assets/img/Somoni.jpg',
    story_ru: 'Парк имени Исмоили Сомони — символ современной городской среды Худжанда. Он привлекает зелеными аллеями, просторными дорожками и удобным расположением вблизи центра. Здесь удобно прогуляться, сделать фото и отдохнуть без спешки, особенно вечером.',
    story_en: 'Ismoili Somoni Park is a symbol of modern Khujand. It is known for green avenues, wide pedestrian paths, and central location. The park is convenient for a relaxed walk, photos, and a slower evening break away from the busier streets.',
    mapUrl: buildMapUrl('Ismoil Somoni Park Khujand')
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
    story_ru: 'Канатная дорога — один из самых эффектных способов увидеть город с высоты. Здесь открываются панорамные виды на Худжанд, прилегающие районы и реку. Для гостей поездка — это интересный и быстрый способ получить сильные впечатления без долгой прогулки.',
    story_en: 'The cable car is one of the most impressive ways to see Khujand from above. The ride offers panoramic views of the city, surrounding areas, and river. For visitors, it is a quick and memorable way to get a broader perspective of the city.',
    mapUrl: buildMapUrl('Khujand cable car')
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
    story_ru: 'Набережная и городской пляж — места, которые особенно нравятся в жаркие дни. Здесь хорошо гулять, отдыхать и наблюдать, как город проводит время у воды. Для гостей это удобная зона для короткого отдыха и красивых фотографий в теплую погоду.',
    story_en: 'The promenade and city beach are especially popular on hot days. It is a good place for a walk, a break by the water, and watching local life unfold. For visitors, it is a convenient area to relax and take photos in a more open setting.',
    mapUrl: buildMapUrl('Khujand city beach promenade')
  }
];

window.OLD_SPOTS = [
  {
    id: 'old-1',
    title_ru: 'Старая крепость Худжанда',
    title_en: 'Old Khujand Fortress',
    img: '../assets/img/old.jpg',
    story_ru: 'Старая крепость — важная часть исторического облика Худжанда. Здесь ощущается дух старого города: узкие проходы, историческая навигация, древние стены и атмосфера эпохи, в которую город смотрит на своё прошлое. Лучше всего приезжать в первой половине дня, когда свет мягче и прогулка спокойнее.',
    story_en: 'The Old Khujand Fortress is an important part of the city’s historical identity. It carries the feeling of an old trading city: narrow lanes, historic walls, and a strong sense of heritage. It is best visited in the early morning, when the light is gentle and the atmosphere is quieter.',
    mapUrl: buildMapUrl('Old Khujand Fortress')
  },
  {
    id: 'old-2',
    title_ru: 'Традиционная чайхана',
    title_en: 'Traditional Teahouse',
    img: '../assets/img/chaykhana.webp',
    story_ru: 'Традиционная чайхана — идеальное место, чтобы почувствовать местную культуру через чай, беседу и простую атмосферу. Здесь часто подают зелёный чай, узбекский чай и лёгкие закуски. Для гостей это один из самых уютных способов провести час и познакомиться с местным ритмом.',
    story_en: 'A traditional teahouse is one of the most atmospheric ways to experience local culture. It is often a place for tea, conversation, and small snacks. For visitors, it is a cozy way to slow down and get a feel for everyday life in Khujand.',
    mapUrl: buildMapUrl('Khujand teahouse')
  },
  {
    id: 'old-3',
    title_ru: 'Рынок Панжшанбе',
    title_en: 'Panjshanbe Market',
    img: '../assets/img/panjshanbe.jpg',
    story_ru: 'Панжшанбе — один из самых живых и насыщенных рынков города. Здесь можно увидеть фрукты, специи, зелень, подарки и местные продукты, а также почувствовать повседневную городскую атмосферу. Это хороший выбор для тех, кто хочет понять локальный ритм и купить что-то по-настоящему местное.',
    story_en: 'Panjshanbe Market is one of the liveliest and most sensory parts of Khujand. Visitors can discover fresh fruit, spices, herbs, crafts, and everyday local goods. It is an excellent place to understand the local rhythm and buy something truly authentic.',
    mapUrl: buildMapUrl('Panjshanbe Market Khujand')
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
    title_ru: 'Музей старой квартиры / исторический двор',
    title_en: 'Historic Apartment Museum',
    img: '../assets/img/apart-museum.jpg',
    story_ru: 'Исторические помещения и старые городские дворы помогают понять, как выглядела повседневная жизнь Худжанда в прошлом. Такие места особенно ценны для гостей, которым интересна история повседневности: интерьер, быт, мебель, традиционные решения и характер жилой архитектуры.',
    story_en: 'Historic houses and old courtyard spaces help visitors understand how daily life in Khujand used to look. These places are highly valued by travelers interested in local history, domestic architecture, and traditional life beyond the main landmarks.',
    mapUrl: buildMapUrl('Historic apartment museum Khujand')
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
    price_ru: 'от 400 сомони',
    price_en: 'from 400 TJS',
    buyUrl: 'https://wa.me/992000000000'
  },
  {
    id: 'gift-2',
    title_ru: 'Шарфы и платки из шёлка и адараса',
    title_en: 'Silk and adras scarves',
    img: '../assets/img/shawls.webp',
    desc_ru: 'Лёгкие, стильные и красивые — идеальны как подарок и как национальный аксессуар для дома.',
    desc_en: 'Lightweight and beautiful, perfect as a memorable souvenir or a traditional accessory.',
    price_ru: 'от 150 сомони',
    price_en: 'from 150 TJS',
    buyUrl: 'https://wa.me/992000000000'
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
    buyUrl: 'https://wa.me/992000000000'
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
    buyUrl: 'https://wa.me/992000000000'
  },
  {
    id: 'gift-5',
    title_ru: 'Керамическая посуда и тарелки',
    title_en: 'Ceramic plates and tableware',
    img: '../assets/img/tarelka.webp',
    desc_ru: 'Ручная роспись и орнаменты Согда делают такую посуду особенно ценным сувениром.',
    desc_en: 'Hand-painted ceramics with Sogdian motifs make a memorable and useful souvenir.',
    price_ru: 'от 200 сомони',
    price_en: 'from 200 TJS',
    buyUrl: 'https://wa.me/992000000000'
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
    buyUrl: 'https://wa.me/992000000000'
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
    buyUrl: 'https://wa.me/992000000000'
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
    buyUrl: 'https://wa.me/992000000000'
  }
];

// Directory lists for “place cards” pages (пример)
window.CONTENT = {
  'essentials-banks': [
    {
      kind: 'place',
      name_ru: 'Амонатбанк / отделение банка',
      name_en: 'Amonatbank / bank branch',
      desc_ru: 'Крупное отделение для обмена валюты, карт и оплаты услуг. Лучше приходить в рабочее время и иметь паспорт при необходимости.',
      desc_en: 'A major branch for cash exchange, cards, and basic banking services. It is best to visit during business hours and carry your passport if needed.',
      address: 'Центр Худжанда, рядом с деловым и торговым районом',
      hours: '09:00–18:00',
      phone: '+992 00 000 0000',
      whatsapp: '+992000000000',
      mapQuery: 'Amonatbank Khujand'
    },
    {
      kind: 'place',
      name_ru: 'Платёжный терминал / банкомат',
      name_en: 'ATM / payment terminal',
      desc_ru: 'Удобно для снятия наличных и оплаты услуг в центре города. Обычно работает в течение дня, но лучше уточнять точное местоположение у хозяина.',
      desc_en: 'Useful for withdrawing cash and paying for services in the city center. Availability can vary by block, so it is wise to ask your host for the nearest option.',
      address: 'Около центральных улиц и рынков Худжанда',
      hours: 'Круглосуточно',
      phone: '',
      whatsapp: '',
      mapQuery: 'ATM Khujand center'
    }
  ],
  'essentials-sim': [
    {
      kind: 'place',
      name_ru: 'Офис TCell',
      name_en: 'TCell office',
      desc_ru: 'Один из самых удобных вариантов для покупки SIM-карты, пополнения баланса и подключения мобильного интернета.',
      desc_en: 'A very practical option for buying a SIM card, topping up, and getting mobile data in Khujand.',
      address: 'В центре города, рядом с торговыми районами',
      hours: '09:00–19:00',
      phone: '+992 00 000 0000',
      whatsapp: '+992000000000',
      mapQuery: 'TCell Khujand'
    },
    {
      kind: 'place',
      name_ru: 'Офис Megafon',
      name_en: 'Megafon office',
      desc_ru: 'Альтернативный оператор для тех, кто ищет более удобные тарифы или нуждается в поддержке на местном языке.',
      desc_en: 'Alternative local operator for travelers comparing pricing or service availability.',
      address: 'Районы центральной торговли Худжанда',
      hours: '09:00–18:00',
      phone: '+992 00 000 0000',
      whatsapp: '+992000000000',
      mapQuery: 'Megafon Khujand'
    }
  ],
  'restaurants-rated': [
    {
      kind: 'place',
      name_ru: 'Кафе «Бахтиёр»',
      name_en: 'Cafe Bahtiyor',
      desc_ru: 'Популярное место для плова, манты, шурпы и стейков. Удобно для семейного ужина или отдыха после прогулки.',
      desc_en: 'Popular spot for plov, manty, shurpa, and grilled dishes. Good for a casual family dinner or relaxed evening.',
      address: 'Центральная часть Худжанда',
      hours: '11:00–23:00',
      phone: '+992 00 000 0000',
      whatsapp: '+992000000000',
      mapQuery: 'Cafe Bahtiyor Khujand'
    },
    {
      kind: 'place',
      name_ru: 'Кафе «Равшан»',
      name_en: 'Cafe Ravshan',
      desc_ru: 'Дружелюбная атмосфера, блюда национальной кухни и хорошее расположение для гостей, приехавших в центр города.',
      desc_en: 'Friendly atmosphere, national dishes, and a practical central location for visitors.',
      address: 'В центре Худжанда',
      hours: '10:00–22:00',
      phone: '+992 00 000 0000',
      whatsapp: '+992000000000',
      mapQuery: 'Cafe Ravshan Khujand'
    },
    {
      kind: 'place',
      name_ru: 'Локальная чайхана',
      name_en: 'Local teahouse',
      desc_ru: 'Место для чая, самсы и беседы. Лучше всего подходит для уютного отдыха без суеты туристических зон.',
      desc_en: 'A good place for tea, samsa, and a slower local experience away from tourist-heavy spots.',
      address: 'Один из жилых кварталов Худжанда',
      hours: '09:00–21:00',
      phone: '+992 00 000 0000',
      whatsapp: '+992000000000',
      mapQuery: 'Local teahouse Khujand'
    }
  ],
  'restaurants-dishes': [
    {
      name_ru: 'Плов',
      name_en: 'Plov',
      desc_ru: 'Традиционное блюдо с рисом, мясом, морковью и специями. Обычно подаётся в крупных порциях.',
      desc_en: 'Traditional rice dish with meat, carrots, onions, and spices. It is usually served in generous portions.'
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
      desc_ru: 'Поддержка по вопросом транспорта, маршрутов, бронирования, SIM-карты и местных рекомендаций.',
      desc_en: 'Support for transport, routes, booking, SIM cards, and local recommendations around the clock.',
      phone: '+992 00 000 0000',
      whatsapp: '+992000000000'
    }
  ]
};

window.INTERCITY = [
  {
    id: 'khujand-dushanbe',
    title_ru: 'Худжанд → Душанбе',
    title_en: 'Khujand → Dushanbe',
    img: '../assets/img/Khujand.png',
    price_ru: 'от 250 до 450 сомони (такси), маршрутка дешевле',
    price_en: 'from 250–450 TJS (taxi), shared ride is cheaper',
    time_ru: '≈ 5–7 часов',
    time_en: '≈ 5–7 hours',
    where_ru: 'Обычно выезд идёт с центральных стоянок такси, рынка или автостанции. Лучше уточнить точку у хозяина в день поездки.',
    where_en: 'Trips usually depart from central taxi stands, markets, or bus stations. Confirm the exact pickup point with your host on the day of travel.',
    tips_ru: 'Лучше ехать утром. Уточняйте цену заранее, заранее согласуйте остановки и количество мест.',
    tips_en: 'Plan to leave in the morning. Agree the fare in advance and confirm the route and seat count.',
    mapQuery: 'Khujand bus station'
  },
  {
    id: 'khujand-tashkent',
    title_ru: 'Худжанд → Ташкент (район Ойбек / граница)',
    title_en: 'Khujand → Tashkent (Oybek / border area)',
    img: '../assets/img/roads.jpg',
    price_ru: 'такси или частный трансфер — по договорённости',
    price_en: 'taxi or private transfer — negotiable',
    time_ru: '≈ 25–50 минут до района границы / точки перехода',
    time_en: '≈ 25–50 minutes to the border area',
    where_ru: 'Такси или частные водители. Важно заранее согласовать встречу и обратный выезд.',
    where_en: 'Taxi or private drivers. Pre-arrange the pickup point and return trip for smooth travel.',
    tips_ru: 'Возьмите воду, наличные и немного времени на оформление. Лучший вариант — согласовать поездку заранее.',
    tips_en: 'Carry water, cash, and enough time for border procedures. Best to arrange the trip in advance.',
    mapQuery: 'Oybek border Khujand'
  },
  {
    id: 'khujand-kayrakkum',
    title_ru: 'Худжанд → Кайраккум',
    title_en: 'Khujand → Kayrakkum',
    img: '../assets/img/Kayrakkum.jpg',
    price_ru: 'такси или частный водитель — по договорённости',
    price_en: 'taxi or private driver — negotiable',
    time_ru: '≈ 25–50 минут',
    time_en: '≈ 25–50 minutes',
    where_ru: 'Обычно выезжают из центра или ближайшей точки, где удобно ждать такси. Можно попросить хозяина помочь с маршрутом.',
    where_en: 'Trips usually start from central or nearby pickup points. Your host can often help find the easiest route.',
    tips_ru: 'Берите воду, головной убор и солнцезащиту. Лучше ехать днём, если хотите провести время у воды.',
    tips_en: 'Take water, a hat, and sun protection. It is preferable to travel in daylight if you plan to spend time by the water.',
    mapQuery: 'Kayrakkum reservoir Khujand'
  },
  {
    id: 'khujand-penjikent',
    title_ru: 'Худжанд → Пенджикент',
    title_en: 'Khujand → Penjikent',
    img: '../assets/img/roads.jpg',
    price_ru: 'поездка на машине или маршрутке — зависит от маршрута и сезона',
    price_en: 'by car or shared transport — depends on the route and season',
    time_ru: '≈ 2–3 часа',
    time_en: '≈ 2–3 hours',
    where_ru: 'Обычно поездки организуются через центральную стоянку или через местного водителя. Лучше заранее обсудить точку отъезда.',
    where_en: 'Trips are typically organised through a central stand or a trusted local driver. Confirm the departure point in advance.',
    tips_ru: 'Двигайтесь в светлое время суток и заранее проверьте, сколько времени будет в пути. Не лишним будет уточнить остановки у водителя.',
    tips_en: 'Travel in daylight and confirm the route and travel time with the driver. It is wise to ask about stops in advance.',
    mapQuery: 'Penjikent Tajikistan'
  }
];
