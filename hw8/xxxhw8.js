// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let textArea = document.getElementById('thisarea');
// textArea.value = localStorage.getItem('text');
// textArea.oninput = (ev) => {
//     localStorage.setItem('text', ev.target.value);
// }

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// let form1 = document.getElementById('form1');
// getDataForm(form1);
// function saveForm(t) {
//     setDataForm(t)
// }
// function setDataForm(tag) {
//     for (let i = 0; i < tag.length; i++) {
//         const tagElement = tag[i];
//         if (tagElement.type === 'checkbox' || tagElement.type === 'radio')
//             tagElement.checked
//                 ? tagElement.value = true
//                 : tagElement.value = false
//         localStorage.setItem(tagElement.id, tagElement.value)
//     }
// }
// function getDataForm(tag) {
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.hasOwnProperty(tag.children[i].id)) {
//             tag.children[i].value = localStorage.getItem(tag.children[i].id);
//             if (tag.children[i].value) {
//                 tag.children[i].setAttribute('checked', 'checked')
//             }
//         }

//     }
// }

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// let text = document.getElementById('text');
// let arrow_left = document.getElementById('arrow_left');
// let arrow_right = document.getElementById('arrow_right');
// let save = document.getElementById('save');

// save.onclick = () => {
//     localStorage.setItem(localStorage.length + 1, text.value)
// }
// arrow_left.onclick = () => {
//     arrow_right.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === text.value) {
//                 index = key;
//             }

//         }
//     }
//     if (index === '1') {
//         arrow_left.style.visibility = 'hidden';
//         return;
//     }
//     text.value = localStorage.getItem(index - 1);
// }
// arrow_right.onclick = () => {
//     arrow_left.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             if (localStorage.getItem(key) === text.value) {
//                 index = key;
//             }

//         }
//     }
//     if (index === localStorage.length.toString()) {
//         arrow_right.style.visibility = 'hidden';
//         return;
//     }
//     text.value = localStorage.getItem(+index + 1);
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
let Array_users = 'Array_users';
let tempUser = {};
let content = document.getElementById('content');
let form1 = document.getElementById('submit')
form1.onclick = () => {
    let person = { ...tempUser };
    tempUser = {};
    for (let i = 0; i < form1.children.length; i++) {
        let form1Element = form1[i];
        if (form1Element.name && form1Element.type !== 'submit') {
            person[form1Element.name] = form1Element.value;
        }
    }
    if (!person.id) {
        person.id = new Date().getTime();
    }
    saveUser(person);
}
getDataFromlSt();
function seveUser(user) {
    if (localStorage.hasOWnProperty(Array_users)) {
        let arrayUsers = JSON.parse(localStorage.getItem(Array_users))
        let find = arrayUsers.find(value => value.id === user.id);
        if (find) {
            let filter = arrayUsers.filter(value => value.id !== user.id);
            filter.push(user);
            localStorage.setItem(Array_users, JSON.stringify(filter));
        }
        else {
            arrayUsers.push(user);
            localStorage.setItem(Array_users, JSON.stringify(arrayUsers));
        }
    }
    else {
        localStorage.setItem(Array_users, JSON.stringify([user]));
    }
}
function getDataFromlSt() {
    if (localStorage.hasOWnProperty(Array_users)) {
        let arrUser = JSON.parse(localStorage.getItem(Array_users));
        for (const user of arrUser) {
            content.appendChild(createDivPerson(user))
        }
    }
}
function createDivPerson(user) {
    let main = document.createElement('div');
    let flag = true;
    for (const key in user) {
        if (flag) {
            let h3 = document.createElement('h3');
            h3.innerText = key + " : " + user[key];
            main.appendChild(h3);
            flag = false;
        }
        else {
            let p = document.createElement('p');
            p.innerText = key + " : " + user[key];
            main.appendChild(p);
        }
    }
    main.style = 'width: 300px; border: red 1px solid; float: left';
    let b1 = document.createElement('button');
    let b2 = document.createElement('button');
    b1.innerText = 'Edit';
    b1.onclick = () => {
        editUser(user.id);
    };
    b2.innerText = 'Delete';
    b2.onclick = () => {
        deleteUser(user.id);
    }
    main.appendChild(b1);
    main.appendChild(b2);
    return main;
}
function deleteUser(id) {
    let parse = JSON.parse(localStorage.getItem(Array_users));
    let filter = parse.filter(user => user.id !== id);
    localStorage.setItem(Array_users, JSON.stringify(filter));
    location.reload();
}
function editUser(id) {
    let parse = JSON.parse(localStorage.getItem(Array_users));
    let user = parse.find(user => user.id == id);
    for (let i = 0; i < form1.children.length; i++) {
        let form1Element = form1.children[i];
        if (form1Element.name && form1Element.type !== 'submit') {
            for (let key in user) {
                if (form1Element.name === key) {
                    form1Element.value = user[key];
                }
            }
        }
    }
    tempUser = user;
}
