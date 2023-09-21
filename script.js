
// NUMBER

let a = 5 // Valor entero
let b = 5.5 //Valor flotante

// STRING
let c = 'Cadena de texto' //Valor String

//BOOLEANO
let d = true //VERDADERO
let e = false //FALSO

//UNDEFINED
let f // No se asignó valor por lo cual es indefinido

// NULL
let g = null;

// OBJECT
let objeto = {
  clave: '5'

}

// ARRAY
let array1 = [1, 2, 4, 5, 6];
let array2 = ['HTML', 'CSS', 'JS']

// DATE
const date = new Date("09/16/2023 11:00");

console.log(date);

let a1 = '5';
let b1 = '5.3';

console.log(a + a1);
console.log(a + parseInt(a1)); //INTEGER

console.log(b + b1);
console.log(b + parseFloat(b1));

let x = 5;
let y = '5';
let v = 10;

let z = x == y;
console.log(z);

z = x === y;
console.log(z);

// OPERADOR NEGACIÓN !=
// CONJUNCIÓN &&
// DISYUNCIÓN ||

z = x != y;
console.log(z);

/* Teclas Rápidas:

`` alt+96
& alt+38
|| alt+124 || altgr+1
Ctrl+ñ --> ABRIR TERMINAL
\\ alt+92 "símbolo de escape"
Recordando:
\n salto de línea
\t tabulado horizontal
\v tabulado vertical
↑ alt+24 (flecha arriba)
↓ alt+25
→ alt+26
← alt+27
*/

// FUNCIONES

function suma(x, a) {
  return x + a;
  // console.log(x+a) -- (alternativa)
}

let respuesta = suma(x, a);

console.log(suma);
console.log(`La respuesta de ${x}+${a} es igual a: `, respuesta);

const temperatura = 76;
function transformarACelsius(fahrenheit) {
  console.log(`La temperatura en grados Celsius es de `, parseInt((5 / 9) * (fahrenheit - 32)))
}

const conversionACelsius = transformarACelsius(temperatura);

// FUNCION FLECHA

let numero = 15;
function sumarDocena(numero) {
  numero + 12
}

// Se puede escribir en forma más compacta:
let sumarDocena1 = (numero) => {
  numero + 12
}
// si solo tiene un parametro y retorna una sola línea se puede escribir de esta forma:
sumarDocena1 = numero => numero + 12;

console.log(sumarDocena1(8));

// si no recibiera parámetros:
let funcion = () => console.log("Soy una función")

funcion()

// OBJETOS
const auto1 = {
  marca: 'FIAT',
  modelo: 'UNO',
  peso: 1000,
  color: 'rojo',
}
let auto2 = {
  marca: 'FENAULT',
  modelo: '12',
  peso: 1100,
  color: 'blanco',
}

console.log('Auto 1: ', auto1);
console.log('Auto 2: ', auto2);

auto1.marca = 'BMW';
auto1.modelo = 'X5';

console.log(auto1);
console.log('Marca auto1:', auto1["marca"]);

const vendedor = {

  nombre: 'Pedro',
  apellido: 'Gonzalez',
  empresa: 'Auto S.A.',
  habilidadesBlandas: ['Carisma', 'Puntualidad'],
  vender: function () {
    return "Pedro ha vendido un auto";
  },
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido // this se refiere a algo que está fuera de este scope {}
  },
}

console.log(vendedor.habilidadesBlandas);

// EVENTOS
function mostrar(id) {
  document.getElementById(id).innerHTML = Date();
}

function enlace() {
  window.open('https://www.w3schools.com/tags/ref_eventattributes.asp');
}

// STRINGS
let string = "Esto es" + `una` + 'cadena de texto';
string = 'Let\'s do it';
console.log(string);
string = 'Esto está arriba \nesto está abajo'
console.log(string);
console.log(`Cantidad de caracteres del string: `, string.length);
let texto = 'Educación';
// START 4 comienza desde el 4 (en el 5) HASTA 7 (incluido)
console.log(texto.slice(4, 7));
let resultado = texto.substring(4, 7);
console.log(resultado);

let texto1 = '        La educación es muy importante en Argentina     ';
let texto2 = texto1;

texto1 = texto1.trim(); // remueve los espacios delante y atras
const result1 = texto1.replace('Argentina', 'el mundo'); // vamos a reemplazar 'Argentina' por mundo
console.log(result1);

texto1 = texto1.toUpperCase();
console.log(texto1);

const nuevoTexto = texto1.concat(" Y EN EL MUNDO. ESTO LO SABEMOS TODOS. LO SEPARAREMOS CON SPLIT. USANDO 'punto' COMO SEPARADOR");
console.log(nuevoTexto);

console.log(texto2, ' y en el mundo');
console.log(texto2.trim().concat(' y en el mundo')); // aplicando 2 métodos sobre texto2.

//trimStart(); trimEnd() funcionan similar a trim aplicándose solo al inicio o final de la cadena, respectivamente.

console.log(texto2.charAt(9), texto2.charAt(8)); //shift+alt+↑
console.log('Letra en la posición 12 del "texto2":', texto2[12]);

// método SPLIT:
console.log(nuevoTexto.split('.'));
console.log('Argentina'.split('')); // divide la palabra en letras.

// ARRAYS
//const array = new Array(10); // cantidad de elementos
const array = ['Curso HTML', 'Curso CSS', 'Curso JAVASCRIPT', 'Curso REACT'];

array[array.length] = 'Curso APIS';
array[array.length] = 'Curso ANGULAR'; // agrego nuevos elementos
array[10] = 'Curso SQL';


console.log(array);

function insertarArray() {
  //return document.getElementById('seleccionable1').innerHTML = array;
  // JOIN --> para mejorar la presentación en pantalla:
  return document.getElementById('seleccionable1').innerHTML = array.join(' - ');

}

console.log(`Longitud del array: `, array.length);

//          0          1          2         3
array1 = ['Zapato', 'Ricardo', 'Xilofón', 'Barba'];

let text = '';
for (let index = 0; index < array1.length; index++) {
  text += "<li>" + array1[index] + "</li>"
  console.log(text);

  //uso una función para poder correrlo en consola node.js

  function insertarLi() {
    return document.getElementById('seleccionable3').innerHTML = text;
  }
}

// Métodos de Arrays:


let frutas = ['Manzana', 'Frutilla', 'Pera', 'Manzana', 'Pera', 'Naranja', 'Manzana'];
console.log('Longitud del array frutas: ', frutas.length);

const personas = [
  { nombre: 'Pedro', apellido: 'Gonzalez' },    //0
  { nombre: 'María', apellido: 'Diaz' },        //1
  { nombre: 'Lucía', apellido: 'Paulista' },    //2
  { nombre: 'Natalia', apellido: 'Flores' },    //3
  { nombre: 'Alfredo', apellido: 'Fernandez' },  //4
  { nombre: 'Paula', apellido: 'Gonzalez' },    //5
  { nombre: 'Germán', apellido: 'Flores' },     //6
]
// descomentar para ver el funcionamiento

/* // metodo.filter()
//const frutasModif = frutas.filter((e) => e == 'Manzana');
const personasMod = personas.filter((e) => e.apellido == 'Gonzalez');

// metodo.map()
const frutasModif = frutas.map(x => {
  if(x=='Manzana') return 'Naranja';
})

//metodo.fill()
const frutasModif = frutas.fill('Naranja',1); //rellena con naranjas desde el índice (1)

//metodo.find() --> 
const frutasModif = frutas.find((e) => e == 'Pera'); //devuelve un String, solo el primero que encuentra
const personasMod = personas.find((e) => e.apellido == 'Gonzalez'); // trae el primer objeto
*/

const personasMod = personas.find((e) => e.apellido == 'Gonzalez'); // trae el primer objeto

for (let index = 0; index < personasMod.length; index++) {
  const element = personasMod[index];
  console.log(element.nombre);
}

// metodo.findIndex()
//const frutasModif = frutas.findIndex((e) => e == 'Pera') //busca el índice (solo del primer elem. que encuentra)

//const frutasModif = frutas.some((e) => e == 'Mandarina') // devuelve boolean
//const frutasModif = frutas.every((e) => e == 'Manzana') // devuelve boolean

console.log('Frutas inicial: ', frutas);

let frutasModif = frutas.pop(); // "arranca" el último valor (Manzana)
console.log('RESULTADO de frutas.pop():', frutasModif);

frutasModif = frutas.shift(); // "arranca" el primer valor (Manzana)

frutas.push('Ciruela'); // agregamos Ciruela al array
frutas.unshift('Limon'); //agrega el elemento al inicio del array frutas

console.log('RESULTADO de frutas.shift():', frutasModif);
console.log('Frutas final: ', frutas);
console.log('Longitud del array frutas: ', frutas.length);
console.log(personasMod);

// Método splice --> para "cortar el array"
console.log(frutas);

//      indice, cuantos corto, que agrego
frutas.splice(2, 0, 'Mandarina', 'Ananá', 'Banana') // el elem. 2 es "Pera", corto desde el índice 2
console.log('RESULTADO DEL SPLICE:', frutas);

// SLICE
frutasModif = frutas.slice(3, 6); // No modifica el array frutas, el resultado se puede guardar en otro array.
console.log('RESULTADO DEL SLICE', frutasModif);

// CONCAT - Suponiendo que tenemos una verdulería, para unificar la lista de frutas y verduras
const frutas1 = Array.from(new Set(frutas)); // Elimino elementos duplicados
frutas = frutas1;
const verduras = ['Zapallo', 'Lechuga', 'Tomate', 'Papa', 'Zanahoria'];
console.log('PRODUCTOS VERDULERIA: ', frutas.concat(verduras).sort()); //concateno y ordeno alfabéticamente

// PARA QUE sort() ordene bien:
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 17];

console.log(number.sort()); /* recordamos q el sort modifica al array. Pero hay un problema ya que rompe el orden.
Ordena por el primer caracter alfanumérico.*/

console.log(number.sort((x, y) => x - y)); // así ordena los números correctamente
console.log(number.sort((x, y) => y - x)); // orden de mayor a menor

const autos = [
  { auto: 'FIAT', año: 2020 },
  { auto: 'BMW', año: 2019 },
  { auto: 'RENAULT', año: 2021 },
  { auto: 'FORD', año: 2023 },
]
console.log(autos.sort()); // abc
console.log(autos.sort((x, y) => x.año - y.año)); // por año

// DATE AAAA-MM-DD (forma ISO)
let fecha = new Date();

console.log(fecha);
console.log('Año: ', fecha.getFullYear()); // trae el año
console.log('Dia: ', fecha.getDate()); //trae el día
console.log('Mes-1: ', fecha.getMonth()); //trae el mes (anterior) (Enero es el mes 0)

//              0         1         2       3        4      5       6        7          8         9           10          11
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let hoyEs = fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getFullYear();

console.log('Hoy es ', hoyEs);

// SHORT MM-DD-AAAA
// LONG Mmm dd AAAA

//SET FECHAS
console.log('También se pueden setear las fechas:')

fecha.setFullYear(2030);
fecha.setMonth(8); //(8 es septiembre);
fecha.setDate(15);

hoyEs = fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getFullYear();

console.log('Hoy es ', hoyEs);

// OBJETO MATH

// CONSTANTES:
console.log(Math.PI);
console.log(Math.E); //Euler
console.log(Math.SQRT1_2); //raiz cuadradra de 1/2

// REDONDEO:
let numeroAleatorioRedondeado = Math.round(Math.random() * 100);
console.log('El número es: ', numeroAleatorioRedondeado); // redondea un número generado aleatoriamente.

// CONDICIONALES:

let edadPersona = 65;

// IF - ELSE IF -ELSE
if (edadPersona >= 18 && edadPersona <= 60) {
  console.log('Puedes ingresar al boliche.');
} else if (edadPersona <= 18) {
  console.log('No puedes ingresar al boliche por ser menor de edad.');
} else {
  console.log('Disculpe, no se permite ingresar al boliche a personas mayores a 60 años.')
}

// SWITCH

let estiloDeMusica;

// en esta función redirigiremos al usuario de acuerdo a la música elegida
function redirigir() {
  let estiloDeMusica = document.getElementById("estiloDeMusica").value.toLowerCase();
  console.log(estiloDeMusica);

  switch (estiloDeMusica) {

    case 'rock':
      console.log('Te recomiendo Pink Floyd');
      //window.open("https://www.youtube.com/channel/UCO6LS_5W7vqG9mALDNzSFug", "_blank");
      return document.getElementById('Recomendación').innerHTML =
        '<a href="https://www.youtube.com/channel/UCO6LS_5W7vqG9mALDNzSFug" target="_blank">Pink Floyd (Link a YT)</a>';
      break; // puede omitirse el break cuando necesitamos que se ejecuten 2 opciones

    case 'punk':
      console.log('Te recomiendo los Ramones');
      return document.getElementById('Recomendación').innerHTML =
        '<a href="https://www.youtube.com/results?search_query=los+ramones" target="_blank">Los Ramones(Link a YT)</a>';
      break;

    case 'pop':
      console.log('Te recomiendo Michael Jackson');
      return document.getElementById('Recomendación').innerHTML =
        '<a href="https://www.youtube.com/results?search_query=michael+jackson" target="_blank">Michael Jackson (Link a YT)</a>';
      break;

    case 'heavy metal':
      console.log('Te recomiendo Metallica');
      return document.getElementById('Recomendación').innerHTML =
        '<a href="https://www.youtube.com/results?search_query=metallica" target="_blank">Metallica (Link a YT)</a>';
      break;

    default:
      console.log('No conozco esta música pero te recomiendo escuchar Juan Terrenal');
      return document.getElementById('Recomendación').innerHTML =
        '<a href="https://www.youtube.com/results?search_query=JUAN+TERRENAL" target="_blank">Juan Terrenal (Link a YT)</a>';
      break;
  }
}

// IF ANIDADO


/* 
PARA INGRESO DE DATOS POR CONSOLA node.js:
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa tu edad: ', (answer) => {
  console.log(`Ingresaste: ${answer}`);
  edad = parseInt(answer);
  rl.close();
}); */

function puedeViajar() {
  let edad; // int
  let nacionalidad; // String
  let tienePasaporte = false; // boolean
  edad = prompt("Ingresa tu edad:");


  if (edad >= 18) {
    console.log('Tienes edad para viajar, aprobado Trámite 1')
    document.getElementById('tramite1').innerHTML = 'Tienes edad para viajar, aprobado Trámite 1';


    nacionalidad = prompt("Ingresa tu nacionalidad:");

    if (nacionalidad.toLowerCase() == 'argentino' || nacionalidad.toLowerCase() == 'argentina') {
      console.log('La documentación está correcta, aprobado Trámite 2')
      document.getElementById('tramite2').innerHTML = 'La documentación está correcta, aprobado Trámite 2';

      tienePasaporteRespuesta = prompt("¿Tienes pasaporte?:"); // verificacion para convertir respuesta a un booleano;
      if (tienePasaporteRespuesta.toLowerCase().substring(0, 1) == 's' ||
        tienePasaporteRespuesta.toLowerCase().substring(0, 1) == 'y' ||
        tienePasaporteRespuesta.toLowerCase().substring(0, 1) == 't'
      ) {
        tienePasaporte = true;
      }

      if (tienePasaporte) {
        console.log('Usted puede viajar, le deseamos buen viaje! ;)')
        document.getElementById('puedeViajar').innerHTML = 'Usted puede viajar, le deseamos buen viaje! ;)';
      } else {
        document.getElementById('puedeViajar').innerHTML = 'El pasaporte es obligatorio para poder viajar. <b>Trámite rechazado.</b>';
      }

    } else {
      document.getElementById('tramite2').innerHTML = 'Debes presentar la documentación en la oficina de tu país de origen.',
        '<b>Trámite rechazado.</b>';
    }
  } else {
    console.log('Debes ser mayor de edad para viajar al exterior')
    document.getElementById('tramite1').innerHTML = 'Debes ser mayor de edad para viajar al exterior. <b>Trámite rechazado.</b>';
  }
}












