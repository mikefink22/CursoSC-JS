// Selecciona al azar un número que será redondeado al entero hacia abajo y nos de entre 1 y 100
let numeroAzar = Math.floor(Math.random() * 100 + 1);

let numeroIngresado = document.getElementById('numeroIngresado');
let mensaje = document.getElementById('mensaje');

// Se ejecutará al hacer click el botón chequear.
function comprobarResultado() {
    let numeroEntrada = parseInt(numeroIngresado.value);
    

    if (numeroEntrada < 1 || numeroEntrada > 100 || isNaN(numeroEntrada)) {
        mensaje.textContent = 'El número ingresado no es válido. Por favor ingrese un número entre 1 y 100.'
        mensaje.style.color = 'red';
        return
    }

    if (numeroEntrada === numeroAzar) {
        mensaje.textContent = `Felicitaciones! Has ganado! El número es: ${numeroAzar}`
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true; // para que no nos deje cargar otro número
        //return
    } else if (numeroEntrada < numeroAzar) {
        mensaje.textContent = '¡El número ingresado es menor al número a adivinar! Intenta nuevamente.';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = '¡El número ingresado es mayor al número a adivinar! Intenta nuevamente.';
        mensaje.style.color = 'red';
    }
}