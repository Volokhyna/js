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

let par = document.getElementsByTagName('p');
console.log(par[0]);

// - отримує текст з блоку з id "rules"


// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний