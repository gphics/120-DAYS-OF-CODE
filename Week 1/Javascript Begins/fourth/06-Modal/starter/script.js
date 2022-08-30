'use strict';

// getting all variables from the html  document
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// open function
function openModal(){
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
}


//close function
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
for (let a = 0; a < btnOpenModal.length; a++) {
  btnOpenModal[a].addEventListener('click', openModal);
  console.log( btnOpenModal[a]);
}

//closing the modal

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener("keyup", function(p){
    console.log(p.key);
    if (p.key === 'Escape' && !modal.classList.contains("hidden")){
        closeModal()
    }

})