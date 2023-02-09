console.log('JS Pattern commited classroom API v2');
/* 
//Commit external script
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
}
include("../../js/main.js"); */




let inp = document.querySelector('.inp1_1');
let out = document.querySelector('.out1_1');
let btn1 = document.querySelector('.btn1_1');

let btnShazam = document.querySelector('.btnShazam');
btnShazam.onclick = () => {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'text/plain',
            'X-RapidAPI-Key': 'a32ff1a152mshffc03d62a4dad60p16ff70jsn9a3e9399036d',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        },
        body: '"Generate one on your own for testing and send the body with the content-type as text/plain"'
    };

    fetch('https://shazam.p.rapidapi.com/songs/detect', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

let btnShazamGetTopSongs = document.querySelector('.btnShazamGetTopSongs');
btnShazamGetTopSongs.onclick = () => {

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    //https://js-notebook.netlify.app' 
    xhr.open("GET", "https://shazam.p.rapidapi.com/artists/get-top-songs?id=567072&l=en-US");
    xhr.setRequestHeader("X-RapidAPI-Key", "a32ff1a152mshffc03d62a4dad60p16ff70jsn9a3e9399036d");
    xhr.setRequestHeader("X-RapidAPI-Host", "shazam.p.rapidapi.com");

    xhr.send(data);

    /*fetch('https://shazam.p.rapidapi.com/artists/get-top-songs?id=567072&l=en-US?rapidapi-key=2ca5f11f07msh0c3f3acd410a8fep1b8bd6jsnc199b4cc1323')
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(err => console.log('ERROR!' + err))*/
}

/*
let outApi = document.querySelector('.outApi');
let outVariable = gettop();
outApi.innerHTML = outVariable;
function gettop() {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "https://shazam.p.rapidapi.com/artists/get-top-songs?id=567072&l=en-US");
    xhr.setRequestHeader("X-RapidAPI-Key", "a32ff1a152mshffc03d62a4dad60p16ff70jsn9a3e9399036d");
    xhr.setRequestHeader("X-RapidAPI-Host", "shazam.p.rapidapi.com");

    xhr.send(data);
}*/

let btnWeather = document.querySelector('.btnWeather');
btnWeather.onclick = () => {
    fetch(`http://api.weatherstack.com/current?access_key=3eab69b51a10480b6cb4e56e4de373fe&query=NewYork`)
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(err => 'ERROR! ', err)

}


let btnInstagrammSerchUsers = document.querySelector('.btnInstagrammSerchUsers');
btnInstagrammSerchUsers.onclick = () => {
    fetch('https://api.instagram.com/v1/users/search')
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(err => console.log('ERROR! ', err))
}


let btnRick_Morti = document.querySelector('.btnRick_Morti');
btnRick_Morti.onclick = () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(err => console.log('ERROR! ', err))

}


let btnShazamGetTopSongs2 = document.querySelector('.btnShazamGetTopSongs2');
btnShazamGetTopSongs2.onclick = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a32ff1a152mshffc03d62a4dad60p16ff70jsn9a3e9399036d',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    fetch('https://shazam.p.rapidapi.com/shazam-events/list?artistId=73406786&l=en-US&from=2022-12-31&limit=50&offset=0', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}


