"use strict";let ibgItem=document.querySelectorAll(".ibg");for(let e of ibgItem){let t=e.children[0];t.hidden=!0,e.style.background=`url('../${t.getAttribute("src")}') center/cover`}let sliders=document.querySelectorAll(".slider");for(let e of sliders){let t=e.querySelector(".slider__body"),r=e.querySelector(".slider__items"),l=e.querySelectorAll(".slider__item"),c=e.querySelector(".slider__btn"),s=0;r.hidden=!0,t.style.background=`url('../${l[0].getAttribute("src")}') center/cover`,c.addEventListener("click",(e=>{e.target.closest(".slider__left")?s>0&&(s--,t.style.background=`url('../${l[s].getAttribute("src")}') center/cover`):e.target.closest(".slider__right")&&s<l.length-1&&(s++,t.style.background=`url('../${l[s].getAttribute("src")}') center/cover`)}))}let spoilerWrap=document.querySelector(".footer__wrap");spoilerWrap.addEventListener("click",(e=>{if(e.target.closest(".footer__spoiler-btn")){e.target.parentElement.classList.toggle("active")}}));let burgerBtn=document.querySelector(".header__burger"),menuBody=document.querySelector(".header__nav");burgerBtn.addEventListener("click",(()=>{burgerBtn.classList.toggle("active"),menuBody.classList.toggle("active")}));