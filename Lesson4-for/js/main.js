console.log('Main JS commited');

function checkNum(a) {
    if (a == '' || Number.isInteger(+a) == false) {
        console.log(false);
        return false;
    } else
        return true;
    /* let condition = `a == '' || Number.isInteger(+a) == false`;
    eval(condition) ? return false : return true; */
}

/* function includeHTMLHeader(pointer) {
    pointer.innerHTML = `<div class="header__container container">
                <label class="header__MenuLabel">
                    <h1 class="header__title">
                        <a class="header__titleLink link" href="../../index.html">
                            JS Notebook
                        </a>
                    </h1>
                    <nav class="NavMenu">
                        <ul>
                            <li class="NavMenu__item">
                                <a class="NavMenu__link link" href="../../index.html">
                                    Main
                                </a>
                            </li>
                            <li class="NavMenu__item">
                                <a class="NavMenu__link link" href="#"></a>
                                Lesson4 (29.12.2022)
                                <ul>
                                    <li class="NavMenu__subtem">
                                        <a class="NavMenu__link link" href="../../pages/lesson4/classRoom.html">
                                            Classroom
                                        </a>
                                    </li>
                                    <li class="NavMenu__subtem">
                                        <a class="NavMenu__link link" href="../../pages/lesson4/homework-Beetroot.html">
                                            Homework Beetroot
                                        </a>
                                    </li>
                                    <li class="NavMenu__subtem">
                                        <a class="NavMenu__link link"
                                            href="../../pages/lesson4/homework-Sasha.html">
                                            Homework Sasha
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="NavMenu__item">
                                <a class="NavMenu__link link" href="#"></a>
                                Lesson 5 (03.01.2023)
                                <ul>
                                    <li class="NavMenu__subtem">
                                        <a class="NavMenu__link link" href="../../pages/lesson5/classRoom.html">
                                            Classroom
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </label>
            </div>`;
} */

/* function includeHTMLFooter(pointer) {
    pointer.innerHTML = `<div class="footer__container container">
    <p class="footer__copyright">
        Igor Makarenko 2023
    </p>
</div>`;
} */

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain attribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};
includeHTML()
