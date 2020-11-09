// - створити функцію яка виводить масив
function thisFunction() {
    console.log(arguments);
}
thisFunction([1, 2, 3]);

// - створити функцію яка заповнює масив рандомними числами та виводить його.
function isfunction(length, min, max) {
    let array2 = [];
    for (let i = 0; i < length; i++) {
        array2.push(Math.floor(Math.random() * (max - min) + min))
    }
    return array2;
}
let arr = isfunction(10, 1, 50);
console.log(arr);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function fun(a, b, c) {
    let min;
    if (a <= b && a <= c) min = a;
    if (b <= a && b <= c) min = b;
    if (c <= b && c <= a) min = c;
    return min;
}
let x = fun(15, 7, 9);
console.log('min', x);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function fun2(a, b, c) {
    let max;
    if (a >= b && a >= c) max = a;
    if (b >= a && b >= c) max = b;
    if (c >= b && c >= a) max = c;
    return max;
}
let y = fun2(15, 7, 9);
console.log('max', y);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
function minandmax() {
    let min = arguments[0];
    let max = arguments[0];
    for (const item of arguments) {
        if (item > max) max = item;
        if (item < min) min = item;
    }
    console.log('max', max);
    return min;
}
let min = minandmax(123, 87, 4, 130, 93);
console.log('min', min);

// - створити функцію яка повертає найбільше число з масиву
let funct = (array) => {
    let max = array[0];
    for (const item of array) {
        if (item > max) max = item
    }
    return max;
}
let funct2 = funct([34, 9, 529, 78, 124]);
console.log('max', funct2);

// - створити функцію яка повертає найменьше число з масиву
let funis = (array) => {
    let min = array[0];
    for (const item of array) {
        if (item < min) min = item
    }
    return min;
}
let funis2 = funis([34, 9, 529, 78, 124]);
console.log('min', funis2);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
let arraySum1 = arraySum([15, 9, 6]);
console.log(arraySum1);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticMean(arr) {
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
        average += arr[i];
    }
    return average / arr.length;
}
let arithmetic = arithmeticMean([15, 9, 6]);
console.log(arithmetic);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// не понимаю
// function lengtharray(array) {
//     for (const item of array) {
//         if (item === 'object')
//         return ?
//     }
// }
// let l = lengtharray(['Alina', ['vasya'], true, 143, 'abc', { age: 26 }]);
// console.log(l);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
function sumatorarray(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i] + array2[i]);
    }
    return result;
}
let sumator = sumatorarray([1, 2, 3, 4], [2, 3, 4, 5]);
console.log(sumator);

// Створити функцію яка додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function divka(message, typeTag) {
    let mydiv = document.createElement(typeTag);
    mydiv.innerText = message('Hello owu');
    document.body.appendChild(mydiv);
}
divka(String, 'div');
