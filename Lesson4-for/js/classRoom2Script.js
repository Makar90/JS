console.log('Test classRoom2Script');

let polyInp2 = document.querySelector('.polyInp2');
let inp2 = document.querySelector('.inp2');
let out2 = document.querySelector('.out2');
let btn2 = document.querySelector('.btn2');

polyInp2.onchange = () => {
    out2.innerHTML = '';
    if (inp2.value != '') {
        for (let i = 0; i < inp2.value; i++) {
            out2.innerHTML += `<li> ${polyInp2.value} </li>`;
        }
    } else {
        out2.innerHTML += `Ви не ввели число!`;
    }
}

btn2.onclick = () => {
    out2.innerHTML = '';
    inp2.value = "";
    polyInp2.selectedIndex = 0;
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