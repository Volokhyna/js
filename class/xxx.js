let string = "Привет";
let num = 123;
let flag = true;
let txt = "true";
console.log(typeof string);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + "3";
let a9 = "5" - 3;
let a10 = 75 + "кг";
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);

let height = 23;
let width = 10;
let s = height * width;
console.log(s);

let heightC = 10;
let dC = 4;
let r = dC / 2;
let r2 = Math.pow(r, 2);
let v = parseInt(3.14 * r2 * heightC); 
console.log(v);

let n = 3;
let m = 4;
let n2 = Math.pow(n, 2);
let m2 = Math.pow(m, 2);
let k2 = n2 + m2;
let k = Math.sqrt(k2);
console.log(k);

let str = "Hello world";
console.log(str); document.write(str); alert(str);

let data = "Volokhyna \n Alina \n 26 \n dancing";
alert(data);

let str1 = "Кто";
let str2 = " ты";
let str3 = " такой?";
let concatenation = str1 + str2 + str3;
document.write(concatenation);

let test = prompt("Are u 18?", "Yas");
console.log(str);

let question = prompt("5+8?");
let answer = 13;
alert(answer);

let Name = prompt("Имя");
let surName = prompt("Фамилия");
let youAge = prompt("Возраст");
let text = "Доброго вечера Иван Иванов, мои поздравления что вам 32.";
alert(text);

let green = prompt("Светофор зеленый");
if (green == "иди") alert("Молодец")
else alert("Не правильно.");
let yellow = prompt("Cветофор желтый");
if (yellow == "подожди") alert("Молодец")
else alert("Не правильно.");
let red = prompt("Светофор красный");
if (red=="стой") alert("Молодец")
else alert("Не правильно.");
let emergency = prompt("Светофор в аварийном режиме");
if (emergency == green, yellow ,red) alert("Делай что хочешь");
