console.log('JS Pattern hmework commited 10(36)');

//-----------
//Task1
document.addEventListener('keydown', showKeyDownEvent);
function showKeyDownEvent(event) {
    //console.log(event);
}
//ControlLeft
//ControlRight
//KeyE
//KeyS

//block rightButton mouse click context menu
document.oncontextmenu = function () {
    return false
}

document.onkeydown = function (event) {
    if (event.ctrlKey && (event.code == 'KeyE')) {
        console.log(`----- start -----`);
        console.log(`Ctrl+E was pressed`);
        changeDiv2TextArea();
        console.log(`----- end -----`);
        //hot kets off: Ctrl+S / Ctrl+E
        return false
    }
    if (event.ctrlKey && (event.code == 'KeyS')) {
        console.log(`----- start -----`);
        console.log(`Ctrl+S was pressed`);
        changeTextArea2Div();
        console.log(`----- end -----`);
        //hot kets off: Ctrl+S / Ctrl+E
        //return false
        event.preventDefault();
    }
}

function changeDiv2TextArea() {
    if (document.querySelector('.div1')) {
        let div1 = document.querySelector('.div1');
        let targetElementLocation = div1.parentElement;
        let textArea1 = document.createElement('textarea');
        //textArea1.setAttribute('type', 'textarea');
        textArea1.classList.add('textArea1');
        textArea1.value = div1.innerText;
        textArea1.style.width = '50%';
        textArea1.style.height = '200px';
        div1.remove();
        targetElementLocation.append(textArea1);
    } else {
        console.log(`Error!\nDiv1 not exist`);
    }
}
function changeTextArea2Div() {
    if (document.querySelector('.textArea1')) {
        let textArea1 = document.querySelector('.textArea1');
        let targetElementLocation = textArea1.parentElement;
        let div1 = document.createElement('div');
        div1.classList.add('div1');
        div1.innerText = textArea1.value;
        textArea1.remove();
        targetElementLocation.append(div1);
    } else {
        console.log(`Error!\nTextArea1 not exist`);
    }
}

/* divChangeTextAres(['ControlLeft', 'ControlRight'], 'KeyE');
function divChangeTextAres(keyCodesPart1, ...keyCodesPart2) {
    let pressedKeys = new Set();
    document.addEventListener('keydown', function (event) {
        pressedKeys.add(event.code);
        for (let keyCode1 of keyCodesPart1) {
            if (pressedKeys.has(keyCode1)) {
                for (let keyCode2 of keyCodesPart2) {
                    if (pressedKeys.has(keyCode2)) {
                        console.log(`${keyCode1} + ${keyCode2} was pressed`);
                        let div1 = document.querySelector('.div1');
                        if (div1.querySelector('.textArea1')) {
                            let textArea1 = div1.querySelector('.textArea1');
                            div1.innerText = textArea1.value;
                            textArea1.remove();
                        } else {
                            let textArea1 = document.createElement('input');
                            textArea1.setAttribute('type', 'textarea');
                            textArea1.classList.add('textArea1');
                            textArea1.value = div1.innerText;
                            div1.innerText = '';
                            div1.append(textArea1);
                        }
                        break;
                    }
                }
                break;
            }
        }

    })
    pressedKeys.clear();
} */

/* runOnKeys(
    () => alert("????????????!"),
    "KeyQ",
    "KeyW"
); */


//-----------
//Task2
let users = [
    {
        listNum: 1,
        name: 'Igor',
        age: 18
    },
    {
        listNum: 2,
        name: 'Igor',
        age: 18
    },
    {
        listNum: 3,
        name: 'Igor',
        age: 18
    },
    {
        listNum: 4,
        name: 'Igor',
        age: 18
    },
    {
        listNum: 5,
        name: 'Igor',
        age: 18
    }
]

function writetableUsersToArray(tableUsers) {
    let users = [];
    let user = {};
    /*let tableUsersHeader = tableUsers.querySelectorAll('th');
    console.log(tableUsersHeader);
    tableUsersHeader.forEach((item) => {
        user[item.innerText] = 'valueNULL';
    })
    console.log(user);*/

    let tableUsersRows = tableUsers.querySelectorAll('tr');
    tableUsersRows.forEach((row) => {
        let cellsHeader = row.querySelectorAll('th');
        if (cellsHeader.length) {
            console.log(`Find header`);
            cellsHeader.forEach((item => {
                user[item.innerText] = 'valueNULL';
            }))
            console.log(user);
            console.log(`------------`);
        } else {
            console.log(`Find row`);
            let cells = row.querySelectorAll('td');
            if (cells.length) {
                console.log(`read cells in row and write to object user`);
                let i = 0;
                for (let index in user) {
                    //console.log(`${index} ${user[index] = cells[i].innerText}`);
                    user[index] = cells[i].innerText;
                    i++;
                }
                console.log(`show object user`);
                console.log(user);
                console.log(`push object user to array users`);
                users.push(user);
                console.log(`show array user`);
                console.log(users);
                console.log(`------------`);
            } else {
                console.log('not header not cells');
            }
        }
    });
    console.log(`---Users`);
    console.log(users);
}

writetableUsersToArray(document.querySelector('.tableUsers1'));




















/* function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);

      for (let code of codes) { // ?????? ???? ?????????????? ???? ???????????? ?????????????
        if (!pressed.has(code)) {
          return;
        }
      }

      // ????, ??????

      // ???? ?????????? ???????????? alert, ???????? ???????????????????? ???????????????? ?????????????? - ???? ?????????????????? keyup
      // ?????? ???????? JavaScript "??????????????????" ???????? ???????????????????? ????????????, ?? pressed[keyCode] ?????????????????? true
      // ?????????? ???????????????? "??????????????????" ?????????????? -- ???????????????? ???????????? ???????? ????????????, ?????????? ???????????????? ?????? ????????????
      pressed.clear();

      func();
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });

  }

  runOnKeys(
    () => alert("????????????!"),
    "KeyQ",
    "KeyW"
  ); */





