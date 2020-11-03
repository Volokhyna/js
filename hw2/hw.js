// створити масив та вивести його в консоль:
// з 5 числових значень
let array = [64, 74, 84, 6, 10];
console.log(array);

// з 5 стічкових значень
let array2 = ['hello', 'alina', 'how', 'are', 'you'];
console.log(array2);

// з 5 значень стрічкового, числового та булевого типу
let array3 = ['my', 'age', 26, 'is', true];
console.log(array3);

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let empty = [];
empty.unshift(false);
empty[1] = 123;
empty[2] = 'great';
empty.push('wow');
console.log(empty);

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let div = 0; div < 10; div++) {
    document.write('<div>Hello</div>');
}

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let div2 = 5; div2 < 15; div2++) {
    document.write(`<div>age ${div2}</div>`);
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let start = 0;
while (start < 20) {
    document.write('<h1>you are beautiful</h1>');
    start++;
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let test = 10;
while (test < 30) {
    document.write(`<h1>How old are you? ${test}</h1>`);
    test++;
}

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let x = [32, 25, 75, 30, 28, 173, 8, 99, 251, 5];
for (let x1 = 0; x1 < x.length; x1++) {
    console.log(x[x1]);
}

// Створити масив з 10 строчрових елементів. Вивести в консоль всі його елементи в циклі.
let y = ['alina', 'marta', 'nastya', 'alena', 'luda', 'zoya', 'ira', 'masha', 'olya', 'vika'];
for (let y1 = 0; y1 < y.length; y1++) {
    console.log(y[y1]);
}

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let newArray = [true, 'sveta', 'inna', 33, false, 'dog', 99, 7, 'cat', 'wtf'];
for (let nA = 0; nA < newArray.length; nA++) {
    console.log(newArray[nA]);
}

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let isarray = [true, 'sveta', 'inna', 174, false, 44, 100, 'dog', 'cat', 'wtf'];
for (let is = 0; is < isarray.length; is++) {
    if (typeof isarray[is] == 'boolean') {
        console.log(isarray[is]);
    }
}

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let thisarray = [true, 'sveta', 'inna', 174, false, 44, 100, 'dog', 'cat', 'wtf'];
for (let rr = 0; rr < thisarray.length; rr++) {
    if (typeof thisarray[rr] == 'number') {
        console.log(thisarray[rr]);
    }
}

// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let ray = [true, 'sveta', 'inna', 174, false, 44, 100, 'dog', 'cat', 'wtf'];
for (let ar = 0; ar < ray.length; ar++) {
    if (typeof ray[ar] == 'string') {
        console.log(ray[ar]);
    }
}

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let emptyArray = [];
emptyArray[0] = 'Amigo';
emptyArray[1] = 'buongiorno';
emptyArray[2] = 1000;
emptyArray[3] = false;
emptyArray[4] = 'one';
emptyArray[5] = 12;
emptyArray[6] = true;
emptyArray[7] = 17;
emptyArray[8] = 2;
emptyArray[9] = 'bye';
console.log(emptyArray);

// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let step1 = 0; step1 < 10; step1++) {
    console.log(step1);
    document.write(step1);
}

// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let step2 = 0; step2 < 100; step2++) {
    console.log(step2);
    document.write(step2);
}

// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let step2 = 0; step2 < 100; step2 = step2 + 2) {
    console.log(step2);
    document.write(step2);
}
// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let step3 = 2; step3 < 100; step3++) {
    if (step3 % 2 == 0) {
        console.log(step3);
        document.write(step3);   
    }
}

// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let step4 = 1; step4 < 100; step4++) {
    if (step4 % 2 != 0) {
        console.log(step4);
        document.write(step4);   
    }
}

// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for (let minute = 0; minute < 2; minute++) {
    for (let second = 0; second < 60; second++) {
        console.log(minute, second);
    }
}

// Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let hour = 0; hour <= 2 && hour > 2 && min < 20; hour++) {
//     for (let min = 0; min < 60; min++) {
//         for (let sec = 0; sec < 60; sec++) {
//             console.log(hour, min, sec);
//         }
//     }   
// }

// Додатково
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let matrix = [ 'a', 'b', 'c'];
for (let a = 0; a < matrix.length; a++) {
    console.log(matrix[a]); 
}

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.




