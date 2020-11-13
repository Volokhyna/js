// - создать массив с 20 числами.
// let arr = [2, 5, 200, 99, 8, 11, 28, 7, 88, 91, 18, 3, 23, 975, 84, 129, 17, 30, 1130, 66]

// -- при помощи метода sort и колбека  отсортировать массив.
// let sort = arr.sort((a, b) => a - b);
// console.log(sort);

// -- при помощи метода sort и колбека отсортировать массив в спадающем напралении.
// let sort = arr.sort((a, b) => b - a);
// console.log(sort);

// -- при помощи filter получить числа кратные 3
// let filter = arr.filter(value => !(value % 3));
// console.log(filter);

// -- при помощи filter получить числа кратные 10
// let filter = arr.filter(value => !(value % 10));
// console.log(filter);

// -- перебрать (проитерировать) массив при помощи foreach()
// arr.forEach(value => {
//     if (value > 50) {
//         return;
//     }
//     console.log(value);;
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let newarray = JSON.parse(JSON.stringify(arr));

// let array = newarray.map(value => value * 3);
// console.log(array);

// - создать массив со словами на 15-20 элементов.
// let word = ['Ira', 'Karina', 'Tanya', 'Julia', 'Anna', 'Eva', 'Dima', 'Nastya', 'Volodya', 'Yevhen', 'Taras', 'Mila', 'Alina', 'Kris', 'Veronika'];

// -- отсортировать его по алфавиту в восходящем порядке.
// let sort = word.sort();
// console.log(sort);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sort = word.sort((a, b) => {
//     if (a > b) {
//         return -1
//     }
//     return 1
// });
// console.log(sort);

// -- отфильтровать слова длиной менее 4х символов
// let filter = word.filter(value => value.length < 4);
// console.log(filter);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let newword = JSON.parse(JSON.stringify(word));

// let myWord = newword.map(value => value + '!');
// console.log(myWord);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let sort = users.sort((a, b) => a.age - b.age);
// console.log(sort);

// let sort = users.sort((a, b) => b.age - a.age);
// console.log(sort);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sort = users.sort((a, b) => a.name.length - b.name.length);
// console.log(sort);

// let sort = users.sort((a, b) => b.name.length - a.name.length);
// console.log(sort);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
// let use = JSON.parse(JSON.stringify(users));

// let map = use.map((user, index) => {
//     user.id = Math.floor(Math.random() * 50) * index;
//     return user;
// });

// let sort = map.sort((a, b) => a.id - b.id);
// console.log(sort);


// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calculator(a, b, collback) {
//     return collback(a, b)
// }
//  let multiplication = calculator(15, 10, (a, b) => a * b);
//  console.log(multiplication);

// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calculator(a, b, c, collback) {
//     return collback(a, b, c)
// }
//  let addition = calculator(15, 10, 10, (a, b, c) => a + b + c);
//  console.log(addition);


// =============КЛАССНАЯ РАБОТА=================


// let cars = [
//     { producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 },
//     { producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 },
//     { producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 },
//     { producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 },
//     { producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 },
//     { producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 },
//     { producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 },
//     { producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 },
//     { producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
//  let filter = cars.filter(value => value.volume >= 3);

// - двигун = 2л
// let filter = cars.filter(value => value.volume === 2);

// - виробник мерс
// let filter = cars.filter(value => value.producer === 'mercedes');

// - двигун більше 3х літрів + виробник мерседес
// let filter = cars.filter(value => value.producer === 'mercedes' && value.volume >= 3);

// - двигун більше 3х літрів + виробник субару
// let filter = cars.filter(value => value.producer === 'subaru' && value.volume >= 3);

// - сили більше ніж 300
// let filter = cars.filter(value => value.power > 300);

// - сили більше ніж 300 + виробник субару
// let filter = cars.filter(value => value.power > 300 && value.producer === 'subaru');

// - мотор серіі ej
// let filter = cars.filter(value => value.engine.startsWith('ej'));

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let filter = cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej'));

// - двигун меньше 3х літрів + виробник мерседес
// let filter = cars.filter(value => value.producer === 'mercedes' && value.volume < 3);

// - двигун більше 2л + сили більше 250
// let filter = cars.filter(value => value.power > 250 && value.volume > 2);

// - сили більше 250  + виробник бмв
// let filter = cars.filter(value => value.power > 250 && value.producer === 'bmw');
// console.log(filter);


// - взять слдующий массив
let usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Lviv', street: 'Ahevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }];
// -- отсортировать его по id пользователей в обратном опрядке
// let sort = usersWithAddress.sort((a, b) => b.id - a.id);

// -- отсортировать его по возрасту пользователей
// let sort = usersWithAddress.sort((a, b) => a.age - b.age);

// -- отсортировать его по возрасту пользователей в обратном порядке
// let sort = usersWithAddress.sort((a, b) => b.age - a.age);

// -- отсортировать его по имени пользователей
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.name < b.name) {
//         return -1
//     }
//     return 1
// });

// -- отсортировать его по имени пользователей в обратном порядке
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
//         return -1
//     }
//     return 1
// });

// -- отсортировать его по названию улицы  в алфавитном порядке
// let sort = usersWithAddress.sort((a, b) => {
//     if (a.address.street < b.address.street) {
//         return -1
//     }
//     return 1
// });

// -- отсортировать его по номеру дома по возрастанию
// let sort = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(sort);

// -- отфильтровать (оставить) тех кто младше 30
// let filter = usersWithAddress.filter(value => value.age < 30);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let filter = usersWithAddress.filter(value => !(value.status));

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let filter = usersWithAddress.filter(value => !(value.status) && value.age < 30);

// -- отфильтровать (оставить) тех у кого номер дома четный
// let filter = usersWithAddress.filter(value => !(value.address.number % 2));
// console.log(filter);