'use strict';

const openModalNext = document.querySelectorAll(".open-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".show");
let mono = document.querySelector(".sect");


// Declaring the function

function open(){
    modal.classList.remove("hid");
  
}
function close(){
    modal.classList.add("hid");
  
}

for (let a = 0; a < openModalNext.length; a++) {
    openModalNext[a].addEventListener("click", open);
}



closeModal .addEventListener("click", close);
mono .addEventListener("click", close)
