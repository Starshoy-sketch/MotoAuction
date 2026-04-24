const BIKES_DATABASE = [
    // --- МУСОР И ОБЫЧНЫЕ ---
    { name: "Bajaj Boxer 150", price: 125000, rarity: "Мусор", chance: 50, type: "Утилитарный", color: "#7f8c8d", img: "bajaj.png.jpg" },
    { name: "Lifan LF200", price: 180000, rarity: "Мусор", chance: 42, type: "Эндуро", color: "#7f8c8d", img: "lifan.png.jpg" },
    { name: "Honda Super Cub", price: 210000, rarity: "Обычный", chance: 45, type: "Скутер", color: "#95a5a6", img: "honasupcud.png.jpg" },
    { name: "Yamaha YBR 125", price: 320000, rarity: "Обычный", chance: 40, type: "Дорожник", color: "#bdc3c7", img: "yamaha.png.jpg" },
    { name: "Vespa Primavera", price: 450000, rarity: "Обычный", chance: 47, type: "Скутер", color: "#95a5a6", img: "vespa.png.jpg" },

    // --- РЕДКИЕ ---
    { name: "Kawasaki Ninja 250", price: 550000, rarity: "Редкий", chance: 35, type: "Спорт", color: "#2ecc71", img: "kawasaki.png.jpg" },
    { name: "Honda CB400 SF", price: 780000, rarity: "Редкий", chance: 35, type: "Классик", color: "#27ae60", img: "cb400.png" },
    { name: "Suzuki DR-Z400SM", price: 850000, rarity: "Редкий", chance: 30, type: "Мотард", color: "#2ecc71", img: "drz.png" },
    { name: "KTM RC 390", price: 1100000, rarity: "Редкий", chance: 25, type: "Спорт", color: "#d35400", img: "ktm390.png" },
    { name: "Suzuki Katana", price: 1700000, rarity: "Редкий", chance: 25, type: "Нейкед", color: "#2ecc71", img: "katana.png" },

    // --- ЭПИЧЕСКИЕ ---
    { name: "Yamaha MT-07", price: 1950000, rarity: "Эпик", chance: 15, type: "Нейкед", color: "#3498db", img: "mt07.png" },
    { name: "Aprilia RS 660", price: 2200000, rarity: "Эпик", chance: 15, type: "Спорт", color: "#2ecc71", img: "rs660.png" },
    { name: "Ducati Monster 821", price: 2800000, rarity: "Эпик", chance: 15, type: "Нейкед", color: "#2980b9", img: "monster.png" },
    { name: "Honda Africa Twin", price: 3100000, rarity: "Эпик", chance: 13, type: "Тур-эндуро", color: "#3498db", img: "africa.png" },
    { name: "Yamaha V-Max", price: 3300000, rarity: "Эпик", chance: 13, type: "Пауэр-круизер", color: "#2980b9", img: "vmax.png" },
    { name: "Indian Scout", price: 3400000, rarity: "Эпик", chance: 12, type: "Боббер", color: "#3498db", img: "scout.png" },
    { name: "Suzuki Hayabusa", price: 3800000, rarity: "Эпик", chance: 12, type: "Гипербайк", color: "#2980b9", img: "busa.png" },
    { name: "KTM 1290 Super Duke", price: 4100000, rarity: "Эпик", chance: 12, type: "Нейкед", color: "#d35400", img: "beast.png" },
    { name: "BMW S1000RR", price: 4200000, rarity: "Эпик", chance: 10, type: "Суперспорт", color: "#9b59b6", img: "s1000rr.png" },
    { name: "Triumph Rocket III", price: 5500000, rarity: "Эпик", chance: 11, type: "Круизер", color: "#9b59b6", img: "rocket.png" },
    { name: "Harley-Davidson Fat Bob", price: 4800000, rarity: "Эпик", chance: 10, type: "Круизер", color: "#e74c3c", img: "fatbob.png" },

    // --- ЛЕГЕНДАРНЫЕ ---
    { name: "Harley-Davidson V-Rod", price: 7800000, rarity: "Легенда", chance: 3.4, type: "Круизер", color: "#f1c40f", img: "vrod.png" },
    { name: "MV Agusta F4 CC", price: 12000000, rarity: "Легенда", chance: 2, type: "Искусство", color: "#f1c40f", img: "f4cc.png" },
    { name: "Confederate P51", price: 14000000, rarity: "Легенда", chance: 1.8, type: "Драгстер", color: "#f1c40f", img: "p51.png" },
    { name: "Kawasaki Ninja H2R", price: 15500000, rarity: "Легенда", chance: 1.5, type: "Гипербайк", color: "#f39c12", img: "h2r.png" },
    { name: "Bimota Tesi H2", price: 18000000, rarity: "Легенда", chance: 1.1, type: "Экзотика", color: "#f39c12", img: "tesi.png" },
    { name: "Arch Method 143", price: 22000000, rarity: "Легенда", chance: 0.09, type: "Кастом", color: "#f1c40f", img: "arch.png" },
    { name: "Ducati Superleggera V4", price: 28000000, rarity: "Легенда", chance: 0.08, type: "Эксклюзив", color: "#e74c3c", img: "v4s.png" },
    { name: "MTT 420RR", price: 35000000, rarity: "Легенда", chance: 0.05, type: "Турбина", color: "#f39c12", img: "mtt.png" },
    { name: "Dodge Tomahawk", price: 60000000, rarity: "Космический", chance: 0.001, type: "Безумие", color: "#f1c40f", img: "tomahawk.png" }
];