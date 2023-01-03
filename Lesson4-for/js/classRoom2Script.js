console.log('Test classRoom2Script');

let polyInp2 = document.querySelector('.polyInp2');
let inp2 = document.querySelector('.inp2');
let out2 = document.querySelector('.out2');
let btn2 = document.querySelector('.btn2');
//polyInp2.selectedIndex = -1;
//polyInp2.value = "Вибери користувача";

polyInp2.onchange = () => {
    out2.innerHTML = '';
    if (inp2.value != '') {
        for (let i = 0; i < inp2.value; i++) {
            out2.innerHTML += `<li> ${polyInp2.value} </li>`;
        }
    } else {
        out2.innerHTML += `Ви не ввели число!`;
    }
    /* if (polyInp2.selectedIndex == -1) {
        out2.innerHTML += " Вибери користувача";
    } */
}

btn2.onclick = () => {
    out2.innerHTML = '';
    inp2.value = "";
    polyInp2.selectedIndex = -1;
}



let out3 = document.querySelector('.out3');
let btn3 = document.querySelector('.btn3');

btn3.onclick = () => {
    let inp3_1 = document.querySelector('.inp3_1').value;
    //let inp3_2 = document.querySelector('.inp3_2').value;
    out3.innerHTML = '';
    for (let i = 0; i < inp3_1; i++) {
        for (let j = i; j < inp3_1; j++) {
            out3.innerHTML += `*`;
        }
        out3.innerHTML += `<br>`;
    }
}

let out4 = document.querySelector('.out4');
let btn4 = document.querySelector('.btn4');

btn4.onclick = () => {
    let inp4_1 = document.querySelector('.inp4_1').value;
    out4.innerHTML = '';
    for (let i = 0; i < inp4_1; i++) {
        for (let j = 0; j < inp4_1; j++) {
            out4.innerHTML += `${i}${j}_`;
            if (j + 1 >= inp4_1) {
                out4.innerHTML += `${(i + 1)}0`;
            }
        }
        out4.innerHTML += `<br>`;
    }

}





/*
let weekDays = document.querySelectorAll('option[name="weekDay"]');
let userChoice = document.querySelector('.inpN4_1');
let weekDay = userChoice.selectedIndex;
let out = document.querySelector('.outN4_1');
btnN4_1.onclick = () => {
    if (weekDay < weekDays.length - 1) {
        weekDay++;
    } else {
        weekDay = 0;
    }
    out.innerHTML += `${weekDays[weekDay].value}, `;
}
userChoice.onchange = () => {
    out.innerHTML = ``;
}
*/