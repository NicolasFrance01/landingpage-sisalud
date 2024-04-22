
let openModal = document.getElementById('openModal');
let modalSisalud = document.getElementById('modal');
let closeModal = document.getElementById('close');

// Abrir modal

openModal.onclick = function(){
    modalSisalud.style.visibility = "visible";
}

// Cerrar Modal Sisalud

closeModal.onclick = function(){
    modalSisalud.style.visibility = "hidden";
}

// Cerrar con el fondo

modalSisalud.onclick = function(){
    modalSisalud.style.visibility = "hidden";
}