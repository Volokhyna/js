let array = [64, 74, 84, 6, 10];
console.log(array);

let array2 = ['hello', 'alina', 'how', 'are', 'you'];
console.log(array2);

let array3 = ['my', 'age', 26, 'is', true];
console.log(array3);

let empty = [];
empty.unshift(false);
empty[1] = 123;
empty[2] = 'great';
empty.push('wow');
console.log(empty);

for (let div = 0; div < 10; div++) {
    document.write('<div>Hello</div>');
}

for (let div2 = 5; div2 < 15; div2++) {
    document.write(`<div>age ${div2}</div>`);
}

let start = 0;
while (start < 20) {
    document.write('<h1>you are beautiful</h1>');
    start++;
}

let test = 10;
while (test < 30) {
    document.write(`<h1>How old are you? ${test}</h1>`);
    test++;
}

let x = [32, 25, 75, 30, 28, 173, 8, 99, 251, 5];
for (let x1 = 0; x1 < x.length; x1++) {
    console.log(x[x1]);
}

let y = ['alina', 'marta', 'nastya', 'alena', 'luda', 'zoya', 'ira', 'masha', 'olya', 'vika'];
for (let y1 = 0; y1 < y.length; y1++) {
    console.log(y[y1]);
}

let newArray = [true, 'sveta', 'inna', 33, false, 'dog', 99, 7, 'cat', 'wtf'];
for (let nA = 0; nA < newArray.length; nA++) {
    console.log(newArray[nA]);
}

let isarray = [true, 'sveta', 'inna', 174, false, 44, 100, 'dog', 'cat', 'wtf'];
for (let is = 0; is < isarray.length; is++) {
    if (typeof isarray[is] == 'boolean') {
        console.log(isarray[is]);
    }
}

let thisarray = [true, 'sveta', 'inna', 174, false, 44, 100, 'dog', 'cat', 'wtf'];
for (let rr = 0; rr < thisarray.length; rr++) {
    if (typeof thisarray[rr] == 'number') {
        console.log(thisarray[rr]);
    }
}

let ray = [true, 'sveta', 'inna', 174, false, 44, 100, 'dog', 'cat', 'wtf'];
for (let ar = 0; ar < ray.length; ar++) {
    if (typeof ray[ar] == 'string') {
        console.log(ray[ar]);
    }
}

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

for (let step1 = 0; step1 < 10; step1++) {
    console.log(step1);
    document.write(step1);
}

for (let step2 = 0; step2 < 100; step2++) {
    console.log(step2);
    document.write(step2);
}

for (let step3 = 2; step3 < 100; step3++) {
    if (step3 % 2 == 0) {
        console.log(step3);
        document.write(step3);   
    }
}

for (let step4 = 1; step4 < 100; step4++) {
    if (step4 % 2 != 0) {
        console.log(step4);
        document.write(step4);   
    }
}

for (let minute = 0; minute <2; minute++) {
    for (let second = 0; second < 60; second++) {
        console.log(minute, second);
    }
}

for (let hour = 0; hour < 2; hour++) {
    for (let min = 0; min < 20; min++) {
        for (let sec = 0; sec < 60; sec++) {
            console.log(hour, min, sec);
        }
    }   
}



