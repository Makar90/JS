console.log('JS Commit');

//Плавний скрол START
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        //const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
//Плавний скрол END





// Swiper START
let swiper = new Swiper(".mySwiper1", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
// Swiper END

//Переключення буліта(крапки) на слайдері START
let mySwiper1 = document.querySelector('.mySwiper1');
coloredBullets();
mySwiper1.addEventListener('wheel', () => {
    coloredBullets();
})

function coloredBullets() {
    let swiperPaginationBullet = mySwiper1.querySelectorAll('.swiper-pagination-bullet');
    swiperPaginationBullet.forEach((item) => {
        if (item.getAttribute('aria-current')) {
            //console.log(item.getAttribute('aria-current'));
            item.style.background = '#FFFFFF';
        } else {
            item.style.background = 'none';
        }
    });
}
//Переключення буліта(крапки) на слайдері END



// Swiper2 START
let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// Swiper2 END


lightGallery(document.getElementById('gallery-mixed-content-demo'));