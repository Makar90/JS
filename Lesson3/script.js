console.log('External commit');

/* const userName = 'Igor';
const userPassword = 123;

if (userName == 'Igor1') {
    console.log(`Hello ${userName}`);
} else if (userPassword == 1234) {
    console.log('userLogin false');
} else {
    console.log('userLogin and userPassword false');
} */


let userage = document.querySelector('.inp1');
let out = document.querySelector('.out1');
let btn = document.querySelector('.btn1');
let cond1 = 'userage.value >= 18 && userage.value < 25';
let cond2 = 'userage.value >= 25 && userage.value < 55';
let minAge = 15;
let maxAge = 90;


btn.onclick = () => {
    userage.value = Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
    if (eval(cond1)) {
        out.innerHTML = '<h2>Призовна служба</h2>';
    } else if (eval(cond2)) {
        out.innerHTML = '<h2>Контрактна служба</h2>';
    } else {
        out.innerHTML = '<h2>Не підлягає призову</h2>';
    }
    //Ninja code else if
    //(eval(cond1) ? out.innerHTML = '<h2>Призовна служба</h2>' : out.innerHTML = '<h2>Не підлягає призову</h2>';
    //Ninja code else if
    //(eval(cond2)) && out.innerHTML = '<h2>Контрактна служба</h2>';
}

///--------------
let select = document.querySelector('.sel');
let btnRes = document.querySelector('.btnRes');
let btnR = document.querySelector('.btnR');
let inp1Res = document.querySelector('.inp1Res');
let inp2Res = document.querySelector('.inp2Res');
let outRes = document.querySelector('.outRes');
let sel = document.querySelector('.sel');

btnRes.onclick = () => {
    let min = 1;
    let max = 20;
    inp1Res.value = Math.floor(Math.random() * (max - min + 1) + min);
    inp2Res.value = Math.floor(Math.random() * max);
    switch (select.value) {
        case '+':
            outRes.innerHTML = +inp1Res.value + +inp2Res.value;
            break;
        case '-':
            outRes.innerHTML = +inp1Res.value - +inp2Res.value;
            break;
        case '*':
            outRes.innerHTML = +inp1Res.value * +inp2Res.value;
            break;
        case '/':
            outRes.innerHTML = (+inp1Res.value / +inp2Res.value).toFixed(2);
            break;
        case '%':
            outRes.innerHTML = +inp1Res.value % +inp2Res.value;
            break;
    }
}
btnR.onclick = () => {
    inp1Res.value = '';
    inp2Res.value = '';
    sel.value = '+';
    outRes.innerHTML = '0';
}


