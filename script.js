document.addEventListener('DOMContentLoaded', function () {

    let nombre = prompt("Introduce tu nombre:");
    let ciudad = prompt("Introduce tu ciudad:");
    let edad = parseInt(prompt("Introduce tu edad:"));  

    let diasVividos = edad * 365;

    alert(`¡Bienvenida, ${nombre} de ${ciudad}!`);
    alert(`Has vivido aproximadamente ${diasVividos} días.`);
});
