console.log('External script commit');

let out1 = document.querySelector('.out1');
let out2 = document.querySelector('.out2');
let users = ['Sasha', 'Vika', 'Olya', 'Sveta'];
let userLength = users.length;
for (let i = 0; i < userLength; i++) {
    out1.value += `${users[i]}`;
    out2.value += `${users[i][0]}`;
    if (i + 1 < userLength) {
        out1.value += ', ';
        out2.value += ', ';
    }
}



let out3 = document.querySelector('.out3');
for (let i = 0; i < 5; i++) {
    out3.value += `Sasha[${i}], `;
    /* if (i + 1 < 10) {
        out3.value += ', ';
    } */
}



let btn4 = document.querySelector('.btn4');
btn4.onclick = () => {

    let in4 = document.querySelector('.in4');
    let out4 = document.querySelector('.out4');
    out4.value = '';
    if (in4.value != '') {
        for (let i = 0; i < in4.value; i++) {
            out4.value += `Sasha (${i + 1})\n`;
        }
    }
    else out4.value += `Error\n`;
}



let body = document.querySelector('body');
let outDiv = document.querySelector('.outDiv');
//cool example
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        //body.innerHTML += `<p>${i} * ${j} = ${i * j}</p>`;
        //document.write(`<p>${i} * ${j} = ${i * j}</p>`);
        outDiv.innerHTML += `<p>${i} * ${j} = ${i * j}</p>`;
    }
}


let check = document.querySelector('.check');
let span = document.querySelectorAll('span');

check.onchange = () => {
    for (let i = 0; i < span.length; i++)
        if (check.checked)
            span[i].style.color = "red";
        else
            span[i].style.color = "black";
}


//for
for (let i = 0; i < 10; i++) {
    console.log(i + " for")
}
//-----------

//while
let a = 0;
while (a < 10) {
    console.log(a + " while");
    a++;
}
//-----------

//do while
let b = 0;
do {
    console.log(b + " do-while");
    b++;
}
while (b < 10)
//-----------