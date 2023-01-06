console.log('JS Pattern commited');
/* 
//Commit external script
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
}
include("../../js/main.js"); */

/* let pointerHeader = document.querySelector('.header');
includeHTMLHeader(pointerHeader); */

/* let pointerFooter = document.querySelector('.footer');
includeHTMLFooter(pointerFooter); */
//-----------------------------------------------------------------
function fuelCalc() {
    let inp1 = document.querySelector('.inp1_1').value;
    let inp2 = document.querySelector('.inp1_2').value;
    let out = document.querySelector('.out1_1');
    out.innerHTML = inp1 * inp2;
}
let btn1_1 = document.querySelector('.btn1_1');
btn1_1.onclick = () => {
    fuelCalc();
}
//-----------------------------------------------------------------
function fuelCalcInbound(val, outField, cost = oldFuelPrice()) {
    outField.innerHTML = val * cost;
}
function oldFuelPrice() {
    let fuel = document.querySelector('.inp1_2');
    switch (fuel.selectedIndex) {
        case 0: {
            return 10;
        } break;
        case 1: return 15; break;
        case 2: return 20; break;
        default: return 0;
    }
}
let btn1_2 = document.querySelector('.btn1_2');
btn1_2.onclick = () => {
    let inp1 = document.querySelector('.inp1_1').value;
    let inp2 = document.querySelector('.inp1_2').value;
    let out = document.querySelector('.out1_1');
    fuelCalcInbound(inp1, out, inp2);
}
//-----------------------------------------------------------------
let btn1_3 = document.querySelector('.btn1_3');
btn1_3.onclick = () => {
    let inp1 = document.querySelector('.inp1_1').value;
    let inp2 = document.querySelector('.inp1_2').style = 'visibility:hidden;';
    let inp2Title = document.querySelector('.inp2Title1_1').style = 'visibility:hidden;';
    let out = document.querySelector('.out1_1');
    fuelCalcInbound(inp1, out); `3й аргумент не передається, використовується значення по замовчуванню в оголошенні функції`
}
//-----------------------------------------------------------------


let btn2_1 = document.querySelector('.btn2_1');
console.log("btn1_1. " + btn1_1.querySelector.value);

function addUserInfo(name, age, tel, li) {
    li.innerHTML += `<li>
                        <span class="tel">${name}</span>
                        <span class="age">${age}</span>
                        <a class="tel" href="tel:${tel}">${tel}</a>
                    </ li> `;
}
btn2_1.onclick = () => {
    let inp2_1 = document.querySelector('.inp2_1').value;
    let inp2_2 = document.querySelector('.inp2_2').value;
    let inp2_3 = document.querySelector('.inp2_3').value;
    let out2_1 = document.querySelector('.out2_1');
    addUserInfo(inp2_1, inp2_2, inp2_3, out2_1)
}


