// Obtener el primer formulario y el segundo formulario
let firstForm = document.querySelector("#firstForm");
let secondForm = document.querySelector("#secondForm");

// Ocultar el segundo formulario al principio
secondForm.classList.add("d-none");

// Agregar un controlador de eventos "submit" al primer formulario
firstForm.addEventListener("submit", function(event) {
    // Prevenir el comportamiento predeterminado del envío del formulario
    event.preventDefault();

    // Ocultar el primer formulario y mostrar el segundo formulario
    firstForm.classList.add("d-none");
    secondForm.classList.remove("d-none");
});