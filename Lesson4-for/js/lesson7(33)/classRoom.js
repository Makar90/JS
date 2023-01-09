console.log('JS Pattern commited');

let ColoredMenu = document.querySelector('.qq');
ColoredMenu.onclick = () => {
    coloredSelectedMenuItem();
}








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

console.dir(document);

let log1_1 = document.querySelector('.log1_1')
const array = [];//array
const object = {}; //object (-associated array)
console.log(`type of array variable:\t` + typeof array);
log1_1.value += `type of array variable:\t\t` + typeof array + '\n';
console.log(`type of object variable:\t` + typeof object) + '\n';
log1_1.value += `type of object variable:\t` + typeof object + '\n';
console.log(`---------------------------------`);
log1_1.value += `---------------------------------\n`;

//object = key + Value
const user = {
    name: 'Sasha',
    age: 1995,
    isLogin: true,
    phone: {
        ios: 'Iphone',
        android: 'Samsung'
    },
    getFullAge: function () {
        //return this.age;
        //return 20;
        return new Date().getFullYear() - this.age;
    }
};

console.log(`Object user:\n` + user);
console.log(`---------------------------------`);
log1_1.value += `Object user: ${user}\n`;
log1_1.value += `---------------------------------\n`;

console.log(`Object user.name:\n` + user.name);
console.log(`---------------------------------`);
log1_1.value += `Object user.name: ${user.name}\n`;
log1_1.value += `---------------------------------\n`;

console.log(`Write value by key phone.ios`);
document.write(user.phone.ios);
console.log(user.phone.ios);
console.log(`--------------------------------- `);
log1_1.value += `Write value by key phone.ios\n`;
log1_1.value += `${user.phone.ios} \n`;
log1_1.value += `---------------------------------\n`;

console.log(`Change "name" value on "Igor"`);
user.name = "Igor";
console.log(`--------------------------------- `);
log1_1.value += `Change "name" value on "Igor"\n`;
log1_1.value += `---------------------------------\n`;

console.log(`Call function user.getFullAge`);
console.log(user.getFullAge());
console.log(`--------------------------------- `);
log1_1.value += `Call function user.getFullAge\n`;
log1_1.value += `${user.getFullAge()} \n`;
log1_1.value += `---------------------------------\n`;

console.log(`****** add "age" key`);
user.country = "Ukraine";
console.log(`--------------------------------- `);
log1_1.value += `****** add "age" key\n`;
log1_1.value += `---------------------------------\n`;

console.log(`Wtite current year InbuildFunction`);
console.log(new Date().getFullYear());
console.log(`--------------------------------- `);
log1_1.value += `Wtite current year InbuildFunction\n`;
log1_1.value += `---------------------------------\n`;

console.log(`Wtite Object`);
log1_1.value += `Wtite Object\n`;
for (let key in user) {
    if (typeof user[key] == 'object') {
        for (let key2 in user[key]) {
            console.log(`Key = ${key}.${key2} !Value = ${user[key][key2]} `)
            log1_1.value += `Key = ${key}.${key2} !Value = ${user[key][key2]} \n`;
        }
    } else {
        console.log(`Key = ${key} !Value = ${user[key]} \n`)
        log1_1.value += `Key = ${key} !Value = ${user[key]} \n`;
    }
}
console.log(`--------------------------------- `);
log1_1.value += `---------------------------------\n`;

console.log(`Destruct Object`);
log1_1.value += `\Destruct Object\n`;
const { name, age } = user;
console.log(`Name: ${name} `);
console.log(`Age: ${age} `);
console.log(`--------------------------------- `);
log1_1.value += `Name: ${name} \n`;
log1_1.value += `Age: ${age} \n`;
log1_1.value += `---------------------------------\n`;

console.log(`***** delete "age" key`);
delete user.age;
console.log(`--------------------------------- `);
log1_1.value += `***** delete "age" key\n`;
log1_1.value += `---------------------------------\n`;
//----------------------------------------------------------------------------


const userA = {
    name: 'Sasha',
    age: 20,
    avatar: 'data:image/jpeg;base64,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'
};

let inp = document.querySelector('.inp1_1');
let out = document.querySelector('.out1_1');
let avatar1_1 = document.querySelector('.avatar1_1');
let btn1 = document.querySelector('.btn1_1');

out.innerHTML = `Привіт ${userA.name}, тобі  ${userA.age} років!<br>`;
avatar1_1.src = userA.avatar;

out.innerHTML += `  <div style="background-color:black">
                        <img class="avatarInsert" src="" alt=""></img>
                        <p>Second Avatar in out area</p>
                    </div>`;
let avatarInsert = document.querySelector('.avatarInsert');
avatarInsert.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Hi1FohJFhYlLh-B2-kL3dK5tDbekWZ3K2w&usqp=CAU`;

//----------------------------------------------------------------------------------------------------------------------


let btn2_1 = document.querySelector('.btn2_1');

btn2_1.onclick = () => {
    let inp1 = document.querySelector('.inp2_1');
    let inp2 = document.querySelector('.inp2_2');
    let out = document.querySelector('.out2_1');

    let object = {
        a: inp1.value,
        b: inp2.value,
        getSum: function () {
            return +this.a + +this.b;
        }
    }
    out.innerHTML += `<li>${object.getSum()}</li>`;
}

