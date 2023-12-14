// script.js
function actualizarHora() {
    const elementoHora = document.getElementById('hora-actual');
    const hora = new Date();
    const horaFormateada = hora.toLocaleTimeString();
    elementoHora.textContent = 'Hora Actual: ' + horaFormateada;
}

setInterval(actualizarHora, 1000);
