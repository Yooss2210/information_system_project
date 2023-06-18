//Activo en el menu

let list = document.querySelectorAll('.list');
for (let i=0; i<list.length; i++){
    list[i].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = 'list';
        }
        list[i].className = 'list active'
        
    }
} 

//Codigo para cuando el usuario elija el estado le muestre los municipios de ese estado
const estadosMunicipios = {
    "Nueva Esparta": ["Arismendi", "Diaz", "Garcia", "Gomez", "Maneiro", "Marcano", "Mariño", "Peninsula de Macanao", "Tubores", "Villalba"]
}

    const inputEstados = document.querySelector('#input-estados');
    const inputMunicipios = document.querySelector('#input-municipios');
    
    inputEstados.addEventListener('change', (event) => {
        const estadoSeleccionado = event.target.value;
        const municipios = estadosMunicipios[estadoSeleccionado];
    
        // Limpiar el contenido del input de municipios
        inputMunicipios.innerHTML = '';
    
        // Agregar las opciones de municipios al input de municipios
        for (const municipio of municipios) {
            const option = document.createElement('option');
            option.value = municipio;
            option.textContent = municipio;
            inputMunicipios.appendChild(option);
        }
});


//Formulario de datos personales, dependiendo de tipo de persona elija el usuario le muestra el formulario
function mostrarFormulario() {
    var tipoPersona = document.getElementById("tipo-persona").value;
    if (tipoPersona === "natural") {
        document.getElementById("formulario-natural").style.display = "block";
        document.getElementById("formulario-juridica").style.display = "none";
    } else if (tipoPersona === "juridica") {
        document.getElementById("formulario-natural").style.display = "none";
        document.getElementById("formulario-juridica").style.display = "block";
    } else {
        document.getElementById("formulario-natural").style.display = "none";
        document.getElementById("formulario-juridica").style.display = "none";
    }
}