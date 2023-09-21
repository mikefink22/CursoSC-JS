// Esto agrega a la pantalla el valor de la calculadora que presionemos:
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

// Esta acción toma el valor de la pantalla y ejecuta los cálculos:
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}

// Esta acción vacía pone en cero la pantalla:
function borrar(){
    document.getElementById('pantalla').value = '0';
}