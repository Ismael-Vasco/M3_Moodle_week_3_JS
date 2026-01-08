// Task 2: Selección e inspección (JS)

// Seleccionar elementos del DOM
const input = document.getElementById("notaInput");
const agregarBtn = document.getElementById("agregarBtn");
const listaNotas = document.getElementById("listaNotas");

// Verificar en la consola si los elementos fueron seleccionados correctamente
console.log(input, agregarBtn, listaNotas);

// Task 3: Agregar notas al DOM

let notas = JSON.parse(localStorage.getItem("notas")) || []; // Cargar las notas desde Local Storage

// Función para renderizar las notas
function renderizarNotas() {
    listaNotas.innerHTML = ''; // Limpiar lista
    notas.forEach((nota, index) => {
        const li = document.createElement("li");
        li.textContent = nota;

        // Crear botón de eliminar
        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.onclick = () => eliminarNota(index);

        li.appendChild(eliminarBtn);
        listaNotas.appendChild(li);
    });

    console.log(`Notas cargadas: ${notas.length}`);
}

// Mostrar notas al cargar la página
renderizarNotas();

// Función para agregar una nota
agregarBtn.addEventListener("click", () => {
    const nuevaNota = input.value.trim();

    // Validar que el input no esté vacío
    if (nuevaNota === "") {
        alert("Por favor, ingrese una nota.");
        return;
    }

    // Agregar la nota al arreglo y al Local Storage
    notas.push(nuevaNota);
    localStorage.setItem("notas", JSON.stringify(notas));

    // Limpiar el input y enfocar nuevamente
    input.value = "";
    input.focus();

    console.log("Nota agregada:", nuevaNota);
    
    // Volver a renderizar las notas
    renderizarNotas();
});

// Task 4: Eliminar notas del DOM

function eliminarNota(index) {
    // Eliminar la nota del arreglo
    notas.splice(index, 1);

    // Actualizar el Local Storage
    localStorage.setItem("notas", JSON.stringify(notas));

    console.log(`Nota eliminada en índice: ${index}`);

    // Volver a renderizar las notas
    renderizarNotas();
}
