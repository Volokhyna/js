// змінює колір тексту елемнту з ід main_header на будь-який інший

let mydiv = document.getElementById('main_header');
mydiv.style.color = 'pink';

// робить шириниу елементу ul 400 пікселів

const isul = document.getElementsByTagName('ul');
isul[0].style.width = '400px';

// -- робить шириниу всіх елементів з класом linkList шириною 50%

const thisli = document.getElementsByClassName('linkList');
for (const myli of thisli) {
    myli.style.width = '50%';
}

// -- отримує текст який зберігається в елементі з класом listElement2

let list2 = document.getElementsByClassName('listElement2');
console.log(list2[1]);


// -- отримує всі елементи li та змінює ім колір фону на сірий

let li = document.getElementsByTagName('li');
for (let val of li) {
    val.style.backgroundColor = 'gray';
}
console.log(li);

// // -- отримує всі елементи 'a' та додає їм клас anchor

const mya = document.getElementsByTagName('a');
for (const a of mya) {
    a.classList.add('anchor')
}
console.log(mya);

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let arrayA = document.getElementsByTagName('a');
for (let i = 0; i < arrayA.length; i++) {
    let text = arrayA[i].innerText;
    if (text === 'link3') {
        arrayA[i].style.fontSize = '40px';
    }
}

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

const isA = document.getElementsByTagName('a');
for (const ita of isA) {
    ita.classList.add('element_XXX');
    ita.innerText += ' XXX ';
}
console.log(isA);

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let color = prompt('Enter color')
let sub = document.getElementsByClassName('sub-header');
for (const subH of sub) {
    subH.style.backgroundColor = color;
}

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let text3 = prompt('Enter text');
let elem = document.getElementsByClassName('content_1');
elem[0].textContent = text3;

// -- отримати елементи p та змінити їм paddin на довільне значення
// работает только с одной 'p', почему? не могу понять

let par = document.getElementsByTagName('p');
for (let i2 = 0; i2 < par.length; i2++) {  
    par[i2].style.padding = '15px' 
}

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

let newclass = document.getElementsByClassName('text2');
newclass[0].textContent = 'Wow';
