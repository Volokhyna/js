//  створити об'єкт (не меньше 5ти властивостей) який описує
// собаку
// людину
// автомобіль
// квартиру
// книгу

let user = {
    name: 'Alina',
    age: 26,
    husband: false,
    pet: {
        itis: 'dog',
        name: 'Sokrat',
        age: 14,
        breed: 'german shepherd',
        favoriteGame: 'find a treat',
    },
    car: {
        brand: 'Honda',
        model: 'CR-V',
        year: 2015,
        color: 'black',
        transmission: 'mechanics',
    },
    book: {
        name: 'Маленькие женщины',
        writer: 'Луиза Мей Олкотт',
        part: 2,
        year: 1868,
        movie: 2019,
    }
}
console.log(user);

//  Створити масив та вивести його в консоль:
// з 5 собак
// 3 5 людей
// з 5 автомобілів

let dog = ['немецкая овчарка', 'такса', 'доберман', 'бигль', 'хаски'];
console.log(dog);

let people = ['Аким', 'Арсен', 'Ира', 'Оля', 'Андрей'];
console.log(people);

let car = ['Honda', 'BMW', 'Tayota', 'Mazda', 'Lexus'];
console.log(car);

// Дан массив:
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни

let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
console.log(users[7].status);
console.log(users[4].status);
console.log(users[10].status);
console.log(users[9].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[3].age);
console.log(users[9].age);
console.log(users[4].name, users[4].age);
console.log(users[5].age, users[5].status);


// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"

let par = document.getElementById('content');
console.log(par.innerText);

// - отримує текст з блоку з id "rules"

let myid = document.getElementById('rules');
console.log(myid.innerText);

// - замініть текст параграфа з id 'content' на будь-який інший
par.innerText = 'Its very difficult fo me';

// - замініть текст параграфа з id 'rules' на будь-який інший
myid.innerText = 'now its easy';

// - змініть кожному елементу колір фону на червоний
par.style.backgroundColor = 'red';

// - змініть кожному елементу колір тексту на синій
let element = document.getElementsByTagName('div');
element[0].style.color = 'blue';

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
let ollid = document.getElementsByClassName('rules');
console.log(ollid);

// - отримати всі елементи з класом fc_rules
let clas = document.getElementsByClassName('fc_rules');
console.log(clas);

// - поміняти колір тексту у всіх елементів fc_rules на червоний
for (let clas2 = 0; clas2 < clas.length; clas2++) {
    clas[clas2].style.color = 'red';
}


// =============КЛАССНАЯ РАБОТА=================


// змінює колір тексту елемнту з ід main_header на будь - який інший
// let mydiv = document.getElementById('main_header');
// mydiv.style.color = 'pink';

// робить шириниу елементу ul 400 пікселів

// const isul = document.getElementsByTagName('ul');
// isul[0].style.width = '400px';

// -- робить шириниу всіх елементів з класом linkList шириною 50%

// const thisli = document.getElementsByClassName('linkList');
// for (const myli of thisli) {
//     myli.style.width = '50%';
// }

// -- отримує текст який зберігається в елементі з класом listElement2

// let list2 = document.getElementsByClassName('listElement2');
// console.log(list2[0].innerText);

// -- отримує всі елементи li та змінює ім колір фону на сірий

// let li = document.getElementsByTagName('li');
// for (let val of li) {
//     val.style.backgroundColor = 'gray';
// }
// console.log(li);

// -- отримує всі елементи 'a' та додає їм клас anchor

// const mya = document.getElementsByTagName('a');
// for (const a of mya) {
//     a.classList.add('anchor')
// }
// console.log(mya);

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let arrayA = document.getElementsByTagName('a');
// for (let i = 0; i < arrayA.length; i++) {
//     let text = arrayA[i].innerText;
//     if (text === 'link3') {
//         arrayA[i].style.fontSize = '40px';
//     }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// const isA = document.getElementsByTagName('a');
// for (let y = 0; y < isA.length; y++) {
//     isA[y].className = 'element_' + isA[y].innerText;
// }
// console.log(isA);

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// const color = prompt('Enter color')
// let sub = document.getElementsByClassName('sub-header');
// for (const subH of sub) {
//     subH.style.backgroundColor = color;
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let text3 = prompt('Enter text');
// let elem = document.getElementsByClassName('content_1');
// elem[0].innerText = text3;

// -- отримати елементи p та змінити їм paddin на довільне значення

// let par = document.getElementsByTagName('p');
// for (let x = 0; x < par.length; x++) {
//     par[x].style.padding = '15px'
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

// let newclass = document.getElementsByClassName('text2');
// newclass[0].innerText = 'Wow';
