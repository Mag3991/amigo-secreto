// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener('DOMContentLoaded', function() {
    const btnAdicionar = document.querySelector('.button-add'); // Botón "Añadir"
    const btnSortear = document.querySelector('.button-draw'); // Botón "Sortear"
    const inputNombre = document.getElementById('amigo'); // Campo de texto para ingresar nombre
    const listaAmigos = document.getElementById('listaAmigos'); // Lista donde se agregarán los nombres
    const resultado = document.getElementById('resultado'); // Donde se muestra el resultado del sorteo

    let amigos = []; // Array para almacenar los amigos

    // Función para agregar amigos
    function agregarAmigo() {
        const nombre = inputNombre.value.trim(); // Captura el valor ingresado y elimina los espacios al inicio y final
        console.log("Valor ingresado:", nombre); // Para depuración

        // Si el nombre está vacío, muestra un mensaje y no lo agrega
        if (nombre === "") {
            console.log("Campo vacío o solo con espacios.");
            alert("Por favor, ingresa un nombre válido.");
            return; // Salimos de la función sin agregar nada
        }

        // Si el nombre no está vacío, lo agregamos al array "amigos"
        amigos.push(nombre);

        // Creamos un nuevo elemento de lista <li> con el nombre ingresado
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li); // Lo agregamos a la lista en la página

        inputNombre.value = ''; // Limpiar el campo de entrada de texto después de agregarlo

        // Si ya hay amigos en la lista, habilitamos el botón de sorteo
        if (amigos.length > 0) {
            btnSortear.disabled = false;
        }
    }

    // Función para realizar el sorteo de un amigo secreto
    function sortearAmigo() {
        // Si no hay amigos en la lista, mostramos un mensaje
        if (amigos.length === 0) {
            alert("No hay amigos para sortear.");
            return;
        }

        // Generamos un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio]; // Seleccionamos el amigo aleatorio
        resultado.textContent = `El amigo secreto es: ${amigoSecreto}`; // Mostramos el resultado en la página
    }

    // Asignamos los eventos a los botones usando addEventListener
    btnAdicionar.addEventListener('click', agregarAmigo); // Al hacer clic en "Añadir", se ejecuta agregarAmigo
    btnSortear.addEventListener('click', sortearAmigo); // Al hacer clic en "Sortear", se ejecuta sortearAmigo
});
