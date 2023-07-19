let button = document.querySelector('.btn');
let mw = document.querySelector('.modal_window');
let exit_btn = document.querySelector('.exit_btn');
let exit_img = document.querySelector('.exit_img');

// button.addEventListener('click', () => {
//     mw.classList.toggle("active")
//     document.body.classList.toggle('body_active')
// });
button.addEventListener('click', () => {
    mw.style.display = "block"
    mw.style.zIndex = 100
    document.body.classList.toggle('body_active')
})
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        mw.style.display = "none"
        mw.style.zIndex = 0
    }
})
exit_btn.addEventListener('click', () => {
    mw.style.display = "none"
    mw.style.zIndex = 0
    document.body.classList.toggle('body_active')
});

exit_img.addEventListener('click', () => {
    mw.style.display = "none"
    mw.style.zIndex = 0
    document.body.classList.toggle('body_active')
});

let burger = document.querySelector('.burger')
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    document.querySelector('.nav').classList.toggle('open')
    document.body.classList.toggle('body_active')
    document.querySelector('.main').classList.toggle('ban')
});



// swiper js
new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



AOS.init();


// dragula js
window.onload = function () {
    dragula([
        document.querySelector('.footer_block'),
        document.querySelector('.main_block')
    ]);
};


// Якорь
let opinion = document.querySelector('.opinion');
let about = document.querySelector('.about');
let contacts = document.querySelector('.contacts');

let section1 = document.querySelector('.section1');
let pos_st1 = section1.offsetTop;

about.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: pos_st1, left: 0, behavior: 'smooth' })
});

let section2 = document.querySelector('.section2');
let pos_st2 = section2.offsetTop;

opinion.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: pos_st2 - 100, left: 0, behavior: 'smooth' })
});

let footer = document.querySelector('.footer');
let pos_footer = footer.offsetTop;

contacts.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: pos_footer, left: 0, behavior: 'smooth' })
});



if (document.body.clientWidth <= 992) {
    document.querySelector('.swiper_img1').setAttribute('src', './img/footer (1).webp');
    document.querySelector('.swiper_img2').setAttribute('src', './img/footer (2).png');
    document.querySelector('.swiper_img3').setAttribute('src', './img/footer (3).png');
} 



$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        console.log($(prompt(`Че да как?`)));
    }
});


// // console.log(window.pageYOffset);
// // console.log(document.body.clientHeight - 1000);
// function onr() {
//     window.onresize = () => {
//         console.log(window.pageYOffset);
//     }
// }
// onr()
// if (window.pageYOffset > document.body.clientHeight - 1000) {
//     alert('Рома хочет заказать коврик')
// }
