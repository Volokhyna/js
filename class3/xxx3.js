// змінює колір тексту елемнту з ід main_header на будь-який інший

let mydiv = document.getElementById('main_header');
mydiv.style.color = 'pink';
console.log(mydiv);

// робить шириниу елементу ul 400 пікселів

const isul = document.getElementsByTagName('ul');
isul[0].style.width = '400px';
console.log(isul);

// -- робить шириниу всіх елементів з класом linkList шириною 50%

let thisli = document.getElementsByClassName('linkList');
for (const myli of thisli) {
    myli.style.width = '50%';
}

// -- отримує текст який зберігається в елементі з класом listElement2
// let list2 = document.getElementById('listElement2');
// console.log(list2[1]);


// -- отримує всі елементи li та змінює ім колір фону на сірий

// const li = document.getElementsByTagName('li');
// for (let val of li) {
//     val.style.backgroundColor = 'gray';
// }
// console.log(li);

// // -- отримує всі елементи 'a' та додає їм клас anchor
// const mya = document.getElementsByTagName('a');
// for (const a of mya) {
//     a.
// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
