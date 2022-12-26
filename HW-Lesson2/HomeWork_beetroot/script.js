console.log('External script commited');

function sum(a, b) {
    let res = parseFloat(a) + parseFloat(b);
    return res;
}

function toNumber(a) {
    return Number(a.replace(/[^0-9.]/g, ""));
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

let btn2 = document.querySelector('.btn-2');
btn2.onclick = () => {
    let out = document.querySelector('.out-2');
    let inp1 = document.querySelector('.inp-2-1');
    let inp2 = document.querySelector('.inp-2-2');
    out.value = sum(toNumber(inp1.value), toNumber(inp2.value));
    console.log('btn-2 click');
}

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

//