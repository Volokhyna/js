// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let cars = [
//     { model: 'bmw', year: 2019, power: 400, color: 'red' },
//     { model: 'vw', year: 2011, power: 440, color: 'yellow' },
//     { model: 'lexus', year: 2012, power: 220, color: 'brown' },
//     { model: 'audi', year: 2013, power: 200, color: 'white' },
//     { model: 'toyota', year: 2014, power: 300, color: 'blue' },
//     { model: 'ferrari', year: 2015, power: 220, color: 'orange' },
//     { model: 'lada', year: 2016, power: 100, color: 'pink' },
//     { model: 'lanos', year: 2017, power: 140, color: 'purple' },
//     { model: 'fiat', year: 2018, power: 200, color: 'black' },
//     { model: 'volvo', year: 2010, power: 150, color: 'green' }
// ]

// - проитерировать массив при помощи while.
// let i = 0;
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++;
// }

// - проитерировать массив при помощи for .
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// - проитерировать массив при помощи  for of.
// for (const item of cars) {
//     console.log(item);
// }

// - взять объект из предыдущего задания и превратить в json.
// let clone = JSON.stringify(cars);
// console.log(clone);

// - взять json из предыдущего задания и превратить обратно в объект.
// let newObject = JSON.parse(clone);
// console.log(newObject);

// - взять массив,в цикле перебрать его объекты превратив их в json .
// let newArray = [];
// for (let car of cars) {
//     newArray += JSON.stringify(car);
// }
// console.log(newArray)

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let users = [
//     { name: 'vasya', age: 31, status: false, skills: ['java', 'js'] },
//     { name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html'] },
//     { name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo'] },
//     { name: 'olya', age: 28, status: false, skills: ['java', 'js'] },
//     { name: 'max', age: 30, status: true, skills: ['mysql', 'mongo'] }
// ]

// for (let user of users) {
//     console.log(user);
//     for (let skill of user.skills) {
//         console.log(skill);
//     }
// }

// -Создать массив пользователей.У каждого пользователя обязательно должено быть поле skills которое является массивом.Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.Скопировать все skills всех пользователей в отедльный массив
// let ollSkils = []
// for (let user of users) {
//     for (let skill of user.skills) {
//         ollSkils.push(skill);
//     }
// }
// console.log(ollSkils)


// Дан массив:
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let newarray = [];
// for (const user1 of users) {
//     newarray.push(user1.address);
// }
// console.log(newarray);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const use of users) {
//     let blockuser = document.createElement('div');
//     blockuser.innerText = `${use.name}, age-${use.age}, status-${use.status}`;
//     document.body.appendChild(blockuser);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const item of users) {
//     let blockuser = document.createElement('div');
//     let miniblock = document.createElement('div');
//     let miniblock1 = document.createElement('div');
//     let miniblock2 = document.createElement('div');
//     miniblock.innerText = item.name;
//     miniblock1.innerText = item.age;
//     miniblock2.innerText = item.status;

//     blockuser.appendChild(miniblock);
//     blockuser.appendChild(miniblock1);
//     blockuser.appendChild(miniblock2);
//     document.body.appendChild(blockuser);
// }

// - Дано 2 масиви з рівною кількістю об'єктів.

// let usersWithId = [
//     { id: 1, name: 'vasya', age: 31, status: false },
//     { id: 2, name: 'petya', age: 30, status: true },
//     { id: 3, name: 'kolya', age: 29, status: true },
//     { id: 4, name: 'olya', age: 28, status: false },
// ];

// let citiesWithId = [
//     { user_id: 3, country: 'USA', city: 'Portland' },
//     { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
//     { user_id: 2, country: 'Poland', city: 'Krakow' },
//     { user_id: 4, country: 'USA', city: 'Miami' },
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// let newarray =[];

// for (let user of usersWithId) {
//     for (let city of citiesWithId) {
//         if (user.id === city.user_id) {
//             newarray.push([user.name, city.country])
//         }
//     }
// }
// console.log(newarray);

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// - змінити цей текст використовуючи селектори id, class,  tag
// let mydiv = document.getElementById('mydiv');
// mydiv.innerText += " How are you? ";

// let isdiv = document.getElementsByClassName('isdiv');
// for (const item of isdiv) {
//     item.innerText = 'WTF';
// }

// let tag = document.getElementsByTagName('p');
// for (let item of tag) {
//     item.innerText = 'hello world'
// }

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let block = document.getElementById('mydiv');
// block.style.width = '100px';
// block.style.height = '100px';

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10рядків з трьома ячейками всередені

// let table = document.createElement('table');
// let tr = document.createElement('tr');
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//     for (let i = 0; i < 3; i++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     table.appendChild(tr)
// }
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10рядків з 5 ячейками всередені

// let table = document.createElement('table');
// let tr = document.createElement('tr');
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//     for (let i = 0; i < 5; i++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     table.appendChild(tr)
// }
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на nрядків з m ячейками всередені. n та m отримати з prompt

// let m = prompt('сколько строк');
// if (m < 10);
// let n = prompt('сколько ячеек');
// if (n < 5);
// let table = document.createElement('table');
// let tr = document.createElement('tr');
// for (let i = 0; i < m; i++) {
//     let tr = document.createElement('tr');
//     for (let i = 0; i < n; i++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     table.appendChild(tr)
// }
// document.body.appendChild(table);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class

// let elementsByTagName = document.getElementsByTagName('*');
// for (let tag of elementsByTagName) {
//     if (tag.getAttribute('class')) {
//         console.log(tag);
//     }
// }

//  - знайти всі параграфи ,та змінити текст на hello oktenweb!

// let elementsByTagName = document.getElementsByTagName('p');
// for (let tag of elementsByTagName) {
//     tag.innerText = 'hello owu!'
// }

//  - знайти всі div та змінити ім колір на червоний

// let elementsByTagName = document.getElementsByTagName('div');
// for (let tag of elementsByTagName) {
//     tag.style.background = 'red';
// }