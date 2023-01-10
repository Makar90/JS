console.log('JS Pattern commited8');
/* 
//Commit external script
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
}
include("../../js/main.js"); */


const arr = [
    'Sasha',
    10,
    true,
    function () {
        console.log(`ARRAY test`);
    }
];


arr[3]();
console.log(`Show arr[0]:\n ${arr[0]}`);

arr[0] = "Igor";
console.log(`Rewrite arr[0]:\n ${arr[0]}`);

const arr1 = [
    'Sahsa 0',
    'Sahsa 1',
    'Sahsa 2',
    'Sahsa 3',
    'Sahsa 4',
];

console.log(`Arr length calc from 1 / Arr elements calc from 0`);
console.log(arr1[0]);
console.log(arr1[arr.length - 1]);


console.log(`Add array elements to end`);
arr.push(`Saha5`);
arr1[arr1.length] = `Saha6`;

console.log(`Add array elements to start`);
arr.unshift(`Saha-1`);

console.log(`Delete array elements but not a position:`);
delete arr1[2];
console.log(arr1);

console.log(`Delete array elements from position to few steps position:`);
arr1.splice(1, 1);
console.log(arr1);

console.log(`Delete array elements from position to few steps position ans write operation to ArrOld:`);
let arrOld = arr1.splice(1, 1);
console.log(`Arr1:\n${arr1}\nArrOld"\n${arrOld}`);

console.log(`Delete array elements from position to few steps position and: write operation to ArrOld and write new element to arr`);
let arrRepl = arr1.splice(1, 1, "Igor");
console.log(`Arr1:\n${arr1}\n "arrRepl:"\n${arrRepl}`);

console.log(`Delete array last elements`);
arr1.pop();
console.log(`${arr1}`);
console.log(`Delete array first elements`);
arr1.shift();
console.log(`${arr1}`);

//-------------------------------------------------------------------

let users = [
    {
        name: 'sasha1',
        age: 16
    },
    {
        name: 'sasha2',
        age: 33
    },
    {
        name: 'sasha3',
        age: 10
    },
    {
        name: 'sasha4',
        age: 20
    }
];

console.log(`------\nShow all names from users where age >18`);
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
        console.log(users[i].name);
    }
}

console.log(`------\nShow all names from users where age >18 by map`);
users.map(
    (item, index, obj) => {
        if (item.age > 18) {
            console.log(`${index}. ${item.name}`);
        }
    }
)
console.log(`${users}`);

console.log(`------\nShow all names from users where age >18 by foreach`);
users.forEach((i) => {
    if (i.age > 18) {
        console.log(`${i.name}`);
    }
}
)

let find = users.find((item) => {
    return item.age > 18;
})
console.log(`Array FIND first name >18:`);
console.log(find);

let filter = users.filter((item) => {
    return item.age > 18;
})
console.log(`Array FIND all names >18:`);
console.log(filter);

let findIndex = users.findIndex((item) => {
    return item.age > 18;
})
console.log(`Array FIND find index >18:`);
console.log(findIndex);


console.log(`Unite 2 array in one`);
let a = ["a1", "a2", "a3", "a4", "a5"];
let b = ["b1", "b2", "b3", "ab4", "ab5"];

let res = [...a, ...b];
console.log(`By ...: \n${res}`);
let res2 = a.concat(b);
console.log(`By concat: \n${res}`);


console.log(`Str to array ...:`);
let str = "Igor,Shasha,Andry,Ksy";
let strig2array = str.split(',');
console.log(`${strig2array}`);

console.log(`Array to str ...:`);
let arr2str = strig2array.join(',');
console.log(`${arr2str}`);

//------------------------------------








//-------------------------------------------------------------------



let usersArr = [];

let btn1_1 = document.querySelector('.btn1_1');
btn1_1.onclick = () => {
    let inp = document.querySelector('.inp1_1');
    let inp2 = document.querySelector('.inp1_2');
    let obj = {
        name: inp.value,
        age: inp2.value,
    };
    usersArr.push(obj);
    let out = document.querySelector('.out1_1');
}

let btn1_2 = document.querySelector('.btn1_2');
btn1_2.onclick = () => {
    let out = document.querySelector('.out1_1');
    out.innerHTML = '';
    usersArr.map(
        (item, index, obj) => {
            out.innerHTML += `<p>№${index + 1}. Name: ${item.name}; Age: ${item.age}</p>`;
        })
}


