console.log('External script commited');
//Task Minimum 1
function sum(a, b) {
    let res = parseFloat(a) + parseFloat(b);
    return res;
}
let btn1 = document.querySelector('.btn-1');

btn1.onclick = () => {
    let out = document.querySelector('.out-1');
    let inp1 = document.querySelector('.inp-1-1');
    let inp2 = document.querySelector('.inp-1-2');
    out.value = sum(inp1.value, inp2.value);
    //out.value = sumPoint(inp1.value, inp2.value).toFixed(1);
    console.log('btn-1 click');
}

//Task Minimum 2
function toNumber(a) {
    return Number(a.replace(/[^0-9.]/g, ""));
}

let btn2 = document.querySelector('.btn-2');
btn2.onclick = () => {
    let out = document.querySelector('.out-2');
    let inp1 = document.querySelector('.inp-2-1');
    let inp2 = document.querySelector('.inp-2-2');
    out.value = sum(toNumber(inp1.value), toNumber(inp2.value));
    console.log('btn-2 click');
}

//Task Minimum 3
let btn3 = document.querySelector('.btn-3');
btn3.onclick = () => {
    let out = document.querySelector('.out-3');
    let inp1 = document.querySelector('.inp-3-1');
    let inp2 = document.querySelector('.inp-3-2');
    if (isNaN(inp1.value) || isNaN(inp2.value))
        out.value = 'Введіть числа';
    else
        out.value = Math.floor(inp1.value / (inp2.value / 1024));
    console.log('btn-3 click');
}


//Task Medium 1
let btn4 = document.querySelector('.btn-4');
btn4.onclick = () => {
    let out1 = document.querySelector('.out-4-1');
    let out2 = document.querySelector('.out-4-2');
    let inp1 = document.querySelector('.inp-4-1');
    let inp2 = document.querySelector('.inp-4-2');
    if (isNaN(inp1.value) || isNaN(inp2.value))
        out.value = 'Введіть числа';
    else {
        out1.value = Math.floor(inp1.value / inp2.value);
        out2.value = (inp1.value % inp2.value).toFixed(2);
        /* out2.value = inp1.value / inp2.value - Math.floor(inp1.value / inp2.value).toFixed(2); */
    }
    console.log('btn-4 click');
}

//Task Medium 2
let btn5 = document.querySelector('.btn-5');
btn5.onclick = () => {
    let out = document.querySelector('.out-5-1');
    out.value = '';
    //document.querySelector('.out-5-1') = '';
    let inp = document.querySelector('.inp-5-1').value;
    while (inp >= 10) {
        out.value += inp % 10;
        inp = (inp - inp % 10) / 10;
    }
    out.value += inp;
    console.log('btn-5 click');
}


//Task Hard 1
let btn6 = document.querySelector('.btn-6');
btn6.onclick = () => {
    let out = document.querySelector('.out-6-1');
    //out.value = '';
    //document.querySelector('.out-5-1') = '';
    let inp1 = document.querySelector('.inp-6-1');
    let inp2 = document.querySelector('.inp-6-2');
    let inp3 = document.querySelector('.inp-6-3');
    out.value = inp1.value * ((inp2.value / 12) * inp3.value) / 100;
    console.log('btn-6 click');
}

//Task Hard 2







function conditionOut(con, out) {
    if (eval(con.textContent))
        out.value = true;
    else
        out.value = false;
}

let act7_1 = document.querySelector('.act-7-1');
let out7_1 = document.querySelector('.out-7-1');
act7_1.onclick = () => {
    conditionOut(act7_1, out7_1);
}

let act7_2 = document.querySelector('.act-7-2');
let out7_2 = document.querySelector('.out-7-2');
act7_2.onclick = () => {
    conditionOut(act7_2, out7_2);
}

let act7_3 = document.querySelector('.act-7-3');
let out7_3 = document.querySelector('.out-7-3');
act7_3.onclick = () => {
    conditionOut(act7_3, out7_3);
}



//