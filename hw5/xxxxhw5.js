// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
// ==============================================

class Tag {
    constructor(tagName, action, attrs) {
        this.tagName = tagName;
        this.action = action;
        this.attrs = attrs || [];
    }
}
let attributeA = [
    { target: 'Имя окна или фрейма, куда браузер будет загружать документ' },
    { title: 'Добавляет всплывающую подсказку к тексту ссылки.' },
]
let tagA = new Tag('<a>', 'Тег предназначен для создания ссылок', attributeA);
console.log(tagA);

let attributeDiv = [
    { align: 'Задает выравнивание содержимого тега <div>.' },
    { title: 'Добавляет всплывающую подсказку к содержимому.' },
]
let tagDiv = new Tag('<div>', 'Элемент является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', attributeDiv);
console.log(tagDiv);

let attributeH1 = [
    { align: 'Определяет выравнивание заголовка.' }
]
let tagH1 = new Tag('<h1>', 'Tег представляет собой наиболее важный заголовок первого уровня', attributeH1);
console.log(tagH1);

let attributeSpan = [
    { class: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.' },
    { style: 'Применяется для определения стиля элемента с помощью правил CSS.' },
]
let tagSpan = new Tag('<span>', 'Тег предназначен для определения строчных элементов документа', attributeSpan);
console.log(tagSpan);

let attributeInput = [
    { list: 'Указывает на список вариантов, которые можно выбирать при вводе текста.' },
    { align: 'Определяет выравнивание изображения.' },
]
let tagInput = new Tag('<input>', 'Тег является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', attributeInput);
console.log(tagInput);

let attributeform = [
    { target: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.' },
    { action: 'Адрес программы или документа, который обрабатывает данные формы.' },
]
let tagform = new Tag('<form>', 'Связывает поле с формой по её идентификатору.', attributeform);
console.log(tagform);

let attributeOption = [
    { label: 'Указание метки пункта списка.' },
    { selected: 'Заранее устанавливает определенный пункт списка выделенным.' },
    { value: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.' },
]
let tagOption = new Tag('<option>', 'Тег определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', attributeOption);
console.log(tagOption);

let attributeSelect = [
    { size: 'Количество отображаемых строк списка.' },
    { autofocus: 'Устанавливает, что список получает фокус после загрузки страницы.' },
]
let tagSelect = new Tag('<select>', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка', attributeSelect);
console.log(tagSelect);

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// последнее не поняла как сделать 
// ==============================================

let car = {
    producer: 'Honda',
    model: 'CR-V',
    year: 2019,
    maximumSpeed: 190,
    engineСapacity: '1,5 l',
    drive: function () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} км на годину`)
    },
    info: function () {
        console.log(`producer: ${this.producer}, model: ${this.model}, year: ${this.year}, maximumSpeed: ${this.maximumSpeed}, engineСapacity: ${this.engineСapacity}`)
    },
    increaseMaxSpeed: function (newSpeed) {
        this.maximumSpeed += newSpeed
    },
    changeYear: function (newValue) {
        this.year = newValue
    },
}
car.changeYear(2020)
car.increaseMaxSpeed(50)
car.drive()
car.info()

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

let newSpeed = '250 км на годину';
let newValue = 2021;
let driver1 = {
    name: 'Alina',
    age: 26,
}
function Car(producer, model, year, maximumSpeed, engineСapacity, driver) {
    this.producer = producer;
    this.model = model;
    this.year = year;
    this.maximumSpeed = maximumSpeed;
    this.engineСapacity = engineСapacity;
    this.driver = driver;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed}`);
    }
    this.info = function () {
        console.log(`producer: ${this.producer}, model: ${this.model}, year: ${this.year}, maximumSpeed: ${this.maximumSpeed}, engineСapacity: ${this.engineСapacity}`)
    }
    this.increaseMaxSpeed = function () {
        this.maximumSpeed = newSpeed;
        console.log(`їдемо зі швидкістю ${this.maximumSpeed}`);
    }
    this.changeYear = function () {
        this.year = newValue;
        console.log(`producer: ${this.producer}, model: ${this.model}, year: ${this.year}, maximumSpeed: ${this.maximumSpeed}, engineСapacity: ${this.engineСapacity}`)
    }
    this.addDriver = function () {
        this.driver = driver1;
        console.log(this.driver);
    }
}
let Honda = new Car('Honda', 'CR-V', 2019, '190 км на годину', '1,5 l')
Honda.drive()
Honda.info()
Honda.increaseMaxSpeed()
Honda.changeYear()
Honda.addDriver()

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

class Zolushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let ollZolushka = [
    zolushka1 = new Zolushka('Karina', 10, 32),
    zolushka2 = new Zolushka('Nastya', 17, 39),
    zolushka3 = new Zolushka('Olya', 35, 34),
    zolushka4 = new Zolushka('Inna', 25, 40),
    zolushka5 = new Zolushka('Mila', 27, 35),
    zolushka6 = new Zolushka('Zoya', 15, 34),
    zolushka7 = new Zolushka('Alina', 26, 33),
    zolushka8 = new Zolushka('Sveta', 18, 39),
    zolushka9 = new Zolushka('Alyona', 30, 34),
    zolushka10 = new Zolushka('Nana', 17, 37),
]
class Prince extends Zolushka {
    constructor(name, age, slipper) {
        super(name, age);
        this.slipper = slipper;
        for (const item of ollZolushka) {
            if (item.footSize === this.slipper) {
                console.log(`${this.name} find ${item.name}`);
            }
        }
    }
}
let prince1 = new Prince('Sasha', 33, 35);

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Zolushka(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// };
// let ollZolushka = [
//     zolushka1 = new Zolushka('Karina', 10, 32),
//     zolushka2 = new Zolushka('Nastya', 17, 39),
//     zolushka3 = new Zolushka('Olya', 35, 34),
//     zolushka4 = new Zolushka('Inna', 25, 40),
//     zolushka5 = new Zolushka('Mila', 27, 35),
//     zolushka6 = new Zolushka('Zoya', 15, 34),
//     zolushka7 = new Zolushka('Alina', 26, 33),
//     zolushka8 = new Zolushka('Sveta', 18, 39),
//     zolushka9 = new Zolushka('Alyona', 30, 34),
//     zolushka10 = new Zolushka('Nana', 17, 37),
// ]
// function Prince(name, age, slipper) {
//     this.name = name;
//     this.age = age;
//     this.slipper = slipper;
//     this.find = function() {
//         for (const item of ollZolushka) {
//             if (item.footSize === this.slipper) {
//                 console.log(`${this.name} find ${item.name}`);
//             }
//         }
//     }
// }
// let prince1 = new Prince('Sasha', 33, 35);
// prince1.find()