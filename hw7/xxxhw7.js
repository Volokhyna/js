// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let disappear = document.getElementById('text');
// disappear.onclick = () => {
//     disappear.style.display = 'none';
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.createElement('button');
// button.onclick = () => {
//     button.hidden = true;
// }
// document.body.appendChild(button);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let mybutton = document.getElementById('mybutton');
// mybutton.onclick = () => {
//     let thisinput = document.getElementById('thisinput');
//     let value = thisinput.value;
//     if (value < 18) {
//         alert('You are yang!')
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
// let submenu = document.getElementById('submenu');
// menu.onclick = () => {
//     submenu.hidden
//         ? submenu.hidden = false
//         : submenu.hidden = true
// };

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let array = [
//     { title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
//     { title: 'lorem', body: 'lorem ipsum dolo sit ameti' },
//     { title: 'lorem', body: 'lorem ipsum dolo sit ameti' }
// ];
// let content = document.getElementById('content');
// array.forEach(item => {
//     let div = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//     let button = document.createElement('button');
//     button.innerText = 'Скрыть';
//     h1.innerText = item.title;
//     p.innerText = item.body;
//     button.onclick = () => {
//         p.hidden
//             ? p.hidden = false
//             : p.hidden = true
//     }
//     div.appendChild(h1);
//     div.appendChild(p);
//     div.appendChild(button);
//     content.appendChild(div);
// });

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let button = document.getElementById('inform');
// button.onclick = () => {
//     console.log(document.forms.main1.input1.value);
//     console.log(document.forms.main1.input2.value);
//     console.log(document.forms.main2.input3.value);
//     console.log(document.forms.main2.input4.value);
// }

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// function createTable(tdParams, trParams) {
//     const table = document.createElement('table');
//     for (let i = 0; i < trParams; i++) {
//         const tr = document.createElement('tr')
//         for (let x = 0; x < tdParams; x++) {
//             const td = document.createElement('td')
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//         document.body.appendChild(table);
//     }
// }
// createTable(4, 5);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// let button = document.createElement('button');
// button.innerText = 'Создать таблицу';
// let input1 = document.getElementById('input1');
// let input2 = document.getElementById('input2');
// let input3 = document.getElementById('input3');
// button.onclick = () => {
//     createTable(input1.value, input2.value)
// };

// function createTable(tdParams, trParams, text) {
//     const table = document.createElement('table');
//     text = input3.value;
//     for (let i = 0; i < trParams; i++) {
//         const tr = document.createElement('tr')
//         i.innerText = text;
//         for (let x = 0; x < tdParams; x++) {
//             const td = document.createElement('td')
//             td.innerText = text;
//             tr.appendChild(td);
//         }
//         document.body.appendChild(table);
//         table.appendChild(tr);
//     }
// }
// document.body.appendChild(button);

//1 - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// - Сворити масив нецензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві нецензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// let wtfarray = ['xxxx', 'yyy', 'ttt', 'wwww'];
// let wtf = document.getElementById('wtf');
// let btn = document.createElement('button');
// btn.innerText = 'ok';
// btn.onclick = () => {
//     wtfarray.includes(wtf.value) ? alert('Предупреждение') : console.log('good girl');
// };
// document.body.appendChild(btn);

//3 -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

//4 -- взять массив пользователей
let usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let div = document.getElementById('user');
let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');
let check3 = document.getElementById('check3');
let button = document.getElementById('myButton');
