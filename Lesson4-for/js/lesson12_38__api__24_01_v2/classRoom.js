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
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "https://shazam.p.rapidapi.com/shazam-events/list?artistId=73406786&l=en-US&from=2022-12-31&limit=50&offset=0");
    xhr.setRequestHeader("X-RapidAPI-Key", "a32ff1a152mshffc03d62a4dad60p16ff70jsn9a3e9399036d");
    xhr.setRequestHeader("X-RapidAPI-Host", "shazam.p.rapidapi.com");

    xhr.send(data);
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

    xhr.open("GET", "https://shazam.p.rapidapi.com/artists/get-top-songs?id=567072&l=en-US");
    xhr.setRequestHeader("X-RapidAPI-Key", "a32ff1a152mshffc03d62a4dad60p16ff70jsn9a3e9399036d");
    xhr.setRequestHeader("X-RapidAPI-Host", "shazam.p.rapidapi.com");

    xhr.send(data);
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