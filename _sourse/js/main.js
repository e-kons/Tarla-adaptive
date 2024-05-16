'use strict' 

// ibg -----------------------

let ibgItem = document.querySelectorAll('.ibg');

for(let item of ibgItem){
    let bgImg = item.children[0];
    bgImg.hidden = true;
    item.style.background = `url('../${bgImg.getAttribute('src')}') center/cover`;
} 

// slider --------------------

let sliders = document.querySelectorAll('.slider');

for(let item of sliders){
    let sliderBody = item.querySelector('.slider__body');
    let sliderItemContainer = item.querySelector('.slider__items');
    let sliderItems = item.querySelectorAll('.slider__item');
    let sliderBtn = item.querySelector('.slider__btn');
    let count = 0;

    sliderItemContainer.hidden = true;
    sliderBody.style.background = `url('../${sliderItems[0].getAttribute("src")}') center/cover`;

    sliderBtn.addEventListener('click', (event) => {
        if (event.target.closest('.slider__left')){

            if (count > 0){
                count--;
                sliderBody.style.background = `url('../${sliderItems[count].getAttribute("src")}') center/cover`;
            }

        }else if(event.target.closest('.slider__right')){

            if (count < sliderItems.length - 1){
                count++;
                sliderBody.style.background = `url('../${sliderItems[count].getAttribute("src")}') center/cover`;
            }

        }

    })
}

// spoiler --------------------

let spoilerWrap = document.querySelector('.footer__wrap');

spoilerWrap.addEventListener('click', (event) => {
    if(event.target.closest('.footer__spoiler-btn')){
        let parElem = event.target.parentElement
        parElem.classList.toggle('active')

    }
})

// burger --------------------

let burgerBtn = document.querySelector('.header__burger');
let menuBody = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    menuBody.classList.toggle('active');
})











