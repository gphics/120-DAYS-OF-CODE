'use strict'

const paragraph = document.querySelectorAll("p");
const openP= document.querySelectorAll(".open");
const closeP = document.querySelectorAll(".close")


function openBox(){
    for (let x = 0; x < paragraph.length; x++){
        paragraph[x].classList.remove("hid");

    }
    //   paragraph.classList.remove("hid")
    
}


function closeBox(){
     for (let y = 0; y < paragraph.length; y++){
        paragraph[y].classList.add("hid")
    }
    //   paragraph.classList.add("hid")
}

// for (let a=0; a<openP.length; a++){
//         openP[a].addEventListener("click", openBox)
//     }

// for (let i=0; i< closeP.length; i++){
//     closeP[i].addEventListener("click", closeBox)
// }

for (let a=0; a<openP.length; a++){
        openP[a].addEventListener("click", openBox)
        console.log(openP[a]);
    }

for (let i=0; i< closeP.length; i++){
    closeP[i].addEventListener("click", closeBox)
}


document.addEventListener("keydown", function(e){
    console.log(e)
    if(e.key === 'Escape'){
        closeBox()
    }
})

// alert("pp")