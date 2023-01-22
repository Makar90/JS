console.log('JS Pattern commited homework 9');


//--------------------------
//Task1
let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

/* let codeTask1 = document.querySelector('.codeTask1');
codeTask1.onclick = () => {
    console.log(codeTask1.value);
    console.log(eval(codeTask1.value));
}
 */
//console.log(document.documentElement);

function createElement(elementType, className, content) {
    let element = document.createElement(elementType);
    if (className) {
        element.classList.add(className);
    }
    element.append(content);
    return element;
}

function createSoudsListByAutorth() {
    //відібрати список виконавців, тільки унікальні
    let authors = [];
    playList.map((item) => {
        authors.push(item.author);
    });
    authors = new Set(authors);
    //відмалювати нумерований списрк виконавців з вкладенним ненумерованим списком їх пісень
    let nav = createElement('nav', 'soundList', '');
    let authorsList = createElement('ol', 'soundList__authors', '');
    nav.append(authorsList);
    authors.forEach((itemAuthors) => {
        let author = createElement('li', 'soundList__author', itemAuthors);
        authorsList.append(author);
        let sounds = createElement('ul', 'soundList__sounds', '');
        sounds.style.marginLeft = '40px'
        authorsList.append(sounds);
        playList.forEach((itemSounds) => {
            if (itemAuthors == itemSounds.author) {
                //console.log(`${itemAuthors} = ${itemSounds.author} : ${itemSounds.song}`);
                let sound = createElement('li', 'soundList__sound', itemSounds.song);
                sound.style.textTransform = 'lowercase';
                sounds.append(sound);
            }
        });
    });
    return nav;
};

function createSoudList() {
    let nav = createElement('nav', 'soundList', '');
    let list = createElement('ol', 'soundList__list', '');
    nav.append(list);
    playList.forEach((arritem) => {
        let author = createElement('p', 'author', `${arritem.author}`);
        let sound = createElement('span', 'sound', `Пісня: ${arritem.song}`);
        sound.style.textTransform = 'lowercase';
        let item = createElement('li', 'soundList__item', ``);
        item.append(author, sound);
        list.append(item);
    });
    return nav;
}

let divOutSoundsList = document.querySelector('.divOutSoundsList');
let btnSoundsListByAuthors = document.querySelector('.btnSoundsListByAuthors');
let btnSoundsList = document.querySelector('.btnSoundsList');
btnSoundsListByAuthors.onclick = () => {

    divOutSoundsList.innerHTML = '';
    divOutSoundsList.append(createSoudsListByAutorth());
}
btnSoundsList.onclick = () => {
    divOutSoundsList.innerHTML = '';
    divOutSoundsList.append(createSoudList());
}

//--------------------------
//Task2
let btnModalOpen = document.querySelector('.btnModalOpen');
let btnModalClose = document.querySelector('.btnModalClose');
let modal = document.querySelector('.modal');
btnModalOpen.onclick = () => {
    modal.classList.add('modalActive');
    //console.log('btnModalOpen.onclick');
}
btnModalClose.onclick = () => {
    modal.classList.remove('modalActive');
}

//--------------------------
//Task3
let btnTraffikLighterSwitch = document.querySelector('.btnTraffikLighterSwitch');
btnTraffikLighterSwitch.onclick = () => {
    let traffikLighter = document.querySelector('.traffikLighter');
    let traffikLighterLights = traffikLighter.querySelectorAll('.traffikLighter__light');
    //reactive the active light and ative the next for traffikLighter
    let switched = false;
    for (let i = 0; i < traffikLighterLights.length; i++) {
        if (traffikLighterLights[i].getAttribute('status') == 'active') {
            traffikLighterLights[i].setAttribute('status', 'deactive');
            //traffikLighterLights[i].style.backgroundColor = 'gray';
            if (i + 1 < traffikLighterLights.length) {
                i = i + 1;
            } else {
                i = 0;
            }
            traffikLighterLights[i].setAttribute('status', 'active');
            switched = true;
            break;
        }
    }
    if (switched == false) {
        traffikLighterLights[0].setAttribute('status', 'active');
    }
    // swichOn active light and switchOff deactive
    for (let i = 0; i < traffikLighterLights.length; i++) {
        if (traffikLighterLights[i].getAttribute('status') == 'active') {
            traffikLighterLights[i].style.backgroundColor = traffikLighterLights[i].getAttribute('color');
        } else {
            traffikLighterLights[i].style.backgroundColor = 'gray';
        }
    }
}

