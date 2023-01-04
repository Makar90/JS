console.log('Test Homework-Beetroot');

//Commit external script
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
include("../../js/main.js");

/* function checkNum(a) {
    if (a == '' || Number.isInteger(+a) == false) {
        console.log(false);
        return false;
    } else
        return true;
} */


//Level easy
let btn1_1 = document.querySelector('.btn1_1');
let btn2_1 = document.querySelector('.btn2_1');
let btn3_1 = document.querySelector('.btn3_1');
let btn4_1 = document.querySelector('.btn4_1');
let btn5_1 = document.querySelector('.btn5_1');



//#1
btn1_1.onclick = () => {
    let inp = document.querySelector('.inp1_1').value;
    let out = document.querySelector('.out1_1');
    if (!checkNum(inp) || inp < 0 || inp > 150) {
        out.innerHTML = `Error! Check inputed data`;
    } else if (inp <= 11) {
        out.innerHTML = `він є: дитиною`;
    } else if (inp <= 17) {
        out.innerHTML = `він є: підлітком`;
    } else if (inp <= 59) {
        out.innerHTML = `він є: дорослим`;
    } else if (inp > 59) {
        out.innerHTML = `він є: пенсіонером`;
    }

}

//#2
btn2_1.onclick = () => {
    let inp = document.querySelector('.inp2_1').value;
    let out = document.querySelector('.out2_1');
    switch (inp) {
        case '0': out.innerHTML = ')'; break;
        case '1': out.innerHTML = '!'; break;
        case '2': out.innerHTML = '@'; break;
        case '3': out.innerHTML = '#'; break;
        case '4': out.innerHTML = '$'; break;
        case '5': out.innerHTML = '%'; break;
        case '6': out.innerHTML = '^'; break;
        case '7': out.innerHTML = '&'; break;
        case '8': out.innerHTML = '*'; break;
        case '9': out.innerHTML = ')'; break;
        default: out.innerHTML = `Error! Check inputed data`;
    }
}

//#3
btn3_1.onclick = () => {
    let inp1 = document.querySelector('.inp3_1').value;
    let inp2 = document.querySelector('.inp3_2').value;
    let out = document.querySelector('.out3_1');

    if (checkNum(inp1) && checkNum(inp2) && inp1 < inp2) {
        let sum = 0;
        for (let i = inp1; i <= inp2; i++) {
            sum += +i;
        }
        out.innerHTML = `${sum}`;
    } else {
        out.innerHTML = `Error! Check inputed data`;
    }
}

//#4
btn4_1.onclick = () => {
    let inp1 = document.querySelector('.inp4_1').value;
    let inp2 = document.querySelector('.inp4_2').value;
    let out = document.querySelector('.out4_1');
    if (checkNum(inp1) && checkNum(inp2)) {
        let max = inp1 > inp2 ? inp1 : inp2;
        let min = inp1 < inp2 ? inp1 : inp2;
        for (min; min > 0; min--) {
            if (Number.isInteger(inp1 / min) && Number.isInteger(inp2 / min)) {
                out.innerHTML = min;
                break;
            }
            console.log(max);
        }
    } else {
        out.innerHTML = `Error! Check inputed data`;
    }
}

//#5
btn5_1.onclick = () => {
    let inp = document.querySelector('.inp5_1').value;
    let a = inp;
    let out = document.querySelector('.out5_1');
    out.innerHTML = '';
    if (checkNum(inp)) {
        while (a > 0) {
            if (Number.isInteger(inp / a)) {
                out.innerHTML += `${a}, `;
            }
            a--;
        }
    } else {
        out.innerHTML = `Error! Check inputed data`;
    }
}
//Level easy end





//Level normal
let btnN1_1 = document.querySelector('.btnN1_1');
let btnN2_1 = document.querySelector('.btnN2_1');
let btnN3_1 = document.querySelector('.btnN3_1');
let btnN4_1 = document.querySelector('.btnN4_1');

//#1
btnN1_1.onclick = () => {
    let inp = document.querySelector('.inpN1_1').value;
    let out = document.querySelector('.outN1_1');
    if (inp != "") {
        out.innerHTML = 'Паліндромом';
        for (let i = 0; i <= inp.length / 2; i++) {
            if (inp[i] != inp[inp.length - 1 - i]) {
                out.innerHTML = "Не паліндромом";
                break;
            }
        }
    } else {
        out.innerHTML = `Error! Check inputed data`;
    }
}

//#2
btnN2_1.onclick = () => {
    let inp = document.querySelector('.inpN2_1').value;
    let out = document.querySelector('.outN2_1');
    if (checkNum()) {
        if (inp >= 200 && inp < 300) {
            out.innerHTML = `Знижка = 3%`;
        } else if (inp >= 300 && inp < 500) {
            out.innerHTML = `Знижка = 5%`;
        } else if (inp >= 500) {
            out.innerHTML = `Знижка = 7%`;
        } else {
            out.innerHTML = `Немає знижки`;
        }
    } else {
        out.innerHTML = `Error! Check inputed data`;
    }
}

//#3
btnN3_1.onclick = () => {
    let inp = document.querySelector('.inpN3_1');
    let inpV = inp.value;
    let out = document.querySelector('.outN3_1');

    inpV = inpV.replace(/[^0-9.-]+/g, ";");
    console.log(inpV);
    inpV = inpV.replace(/[-]+/g, ";-");
    console.log(inpV);
    inpV = inpV.replace(/[;]+/g, ";");
    console.log(inpV);
    inp.value = inpV;
    let arr = [];
    let buf = '';
    let count = 0;
    console.log(inpV.length);
    for (let i = 0; i < inpV.length; i++) {
        console.log(inpV[i] + " " + i);
        if (inpV[i] != ';') {
            buf += inpV[i];
        } else {
            arr[count] = buf;
            buf = '';
            count++;
        }
        if (i + 1 >= inpV.length && buf != '') {
            arr[count] = buf;
            buf = '';
            count++;
        }
    }
    console.log(arr);

    let plus = 0;
    let minus = 0;
    let zero = 0;
    let parne = 0;
    let neparne = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + ' ' + i);
        if (arr[i] > 0) {
            plus++;
        } else if (arr[i] < 0) {
            minus++;
        } else {
            zero++;
        }
        if ((arr[i] % 2) == 0 && arr[i] != 0) {
            parne++;
        } else if (arr[i] != 0) {
            console.log("nep " + arr[i]);
            neparne++;
        }
    }
    out.innerHTML = `Всього: ${arr.length}; Додатніх: ${plus}; Від'ємних: ${minus}; Нулів: ${zero}; Парних: ${parne}; Непарних: ${neparne};`;


    /*inp = inp.replace(/\D/ig, ";");
    console.log(inp);*/
    /*let arr = [];
    let buf = '';
    let k = 0;
    for (let i = 0; i < inp.value.length; i++) {
        //console.log(`${inp.value[i]} ` + parseInt(inp.value[i]));
        if (+inp.value[i] != ' ') {
            if (parseInt(+inp.value[i], 10) || inp.value[i] == '.') {
                buf += inp.value[i];
                console.log(buf);
            } else if (inp.value[i] == '-') {
                arr[k] = buf;
                console.log('- ' + buf);
                buf = inp.value[i];
                k++;
            } else {
                arr[k] = buf;
                console.log('- ' + buf);
                buf = '';
                k++;
            }
        }
    }
    arr[k] = buf;
    console.log(arr);
*/
}

//#4
let weekDays = document.querySelectorAll('option[name="weekDay"]');
let userChoice = document.querySelector('.inpN4_1');
let weekDay = userChoice.selectedIndex;
let out = document.querySelector('.outN4_1');
btnN4_1.onclick = () => {
    if (out.innerHTML == `?`) {
        out.innerHTML = ``;
    }
    if (weekDay < weekDays.length - 1) {
        weekDay++;
    } else {
        weekDay = 0;
    }
    out.innerHTML += `${weekDays[weekDay].value}, `;
}
userChoice.onchange = () => {
    out.innerHTML = `?`;
}

//Level normal end
