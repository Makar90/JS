console.log('JS Pattern commited');
//--------------------------------------------

function checkElementValue(element) {
    if (element.value == '') {
        alert(`Помилка, поле "${element.getAttribute("name")}" не заповнене!`);
    } else {
        return true
    }
}

function checkName(name) {
    if (!/^[A-Z][a-z]+$/g.test(name)) {
        alert(`Помилка, у правильності введення імені!\nТільки латинські букви.\nІм'я починається з великої літери`);
    } else if (name.length < 2) {
        alert(`Помилка, ім'я занадто коротке!\nМає бути більше 2х символів.`);
    } else {
        return true;
    }
}

function checkAge(age) {
    if (!checkNum(age)) {
        alert(`Помилка, у полі вік вказане не числове значення!`);
    } else if (age <= 18) {
        alert(`Помилка, сервіс тільки для повнолітніх!`);
    } else if (age > 150) {
        alert(`Помилка, дуже великий вік!`);
    } else {
        return true;
    }
}

function checkTelNumber(telNumber) {
    if (!/^[+]\d+$/g.test(telNumber)) {
        alert(`Помилка, у правильності введення номеру телефону!\nТільки цифри. Номер телефону починається з символу- +`);
    } else if (telNumber.replace(/[+]/g, "").length < 5) {
        alert(`Помилка, номеру телефону занадто короткий!\nМає бути більше 5ти цифр.`);
    } else {
        return true;
    }
}

function clearElementValue(element) {
    //element.value = '';
}

function addUserInfo(elementName, elementAge, elementTel, elementLi) {
    if (checkElementValue(elementName)) {
        if (checkName(elementName.value)) {
            if (checkElementValue(elementAge)) {
                if (checkAge(elementAge.value)) {
                    if (checkElementValue(elementTel)) {
                        if (checkTelNumber(elementTel.value)) {
                            elementLi.innerHTML += `<li>
                                                    <span class="tel">${elementName.value}</span>
                                                    <span class="age">${elementAge.value}</span>
                                                    <a class="tel" href="tel:${elementTel.value}">${elementTel.value}</a>
                                                </li>`;
                            clearElementValue(elementName);
                            clearElementValue(elementAge);
                            clearElementValue(elementTel);
                        }
                    }
                }
            }
        }
    }
}

let addButton = document.querySelector('.btn2_1')
addButton.onclick = () => {
    let fieldName = document.querySelector('.inp2_1');
    let fieldAge = document.querySelector('.inp2_2');
    let fieldTel = document.querySelector('.inp2_3');
    let resultLi = document.querySelector('.out2_1');
    addUserInfo(fieldName, fieldAge, fieldTel, resultLi);
}
//--------------------------------------------











/* console.log('1');
    for (let i = 0; i < li.childNodes.length; i++) {
        console.log(`Нода ${ i }: ${ li.childNodes[i] } `);
    } */

/* console.log('#');
var result = "";
for (let i in li.childNodes) {
    if (li.childNodes.hasOwnProperty(i)) {
        result += 'objName' + "." + i + " = " + li.childNodes[i] + "\n";
    }
}
console.log(result); */

/* for (const property in li.childNodes) {
    console.log(`${ property }: ${ li.childNodes[property] } `);
} */

//console.log(Object.getOwnPropertyNames(li.childNodes));
//console.log(Object.values(li.childNodes));

function f1(node) {
    alert(node.getAttribute('data-name'))
}


    //let matches = el.querySelectorAll('div.highlighted > p');
/*  for(let i=0;i<li.length;i++){
     if(){
 
     }
 } */
