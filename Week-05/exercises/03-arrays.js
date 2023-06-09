console.log('--EJERCICIO 3: ARRAYS');

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

console.log('-Ejercicio 3.a:');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log( months[4], months[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log('-Ejercicio 3.b:');

console.log(months.sort());

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

console.log('-Ejercicio 3.c:');

months.unshift('Caballo');
months.push('Gato');

console.log(months);

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop)*/

console.log('-Ejercicio 3.d:');

months.shift();
months.pop();

console.log(months);

/* e. Invertir el orden del array (utilizar reverse).*/
console.log('-Ejercicio 3.e:');

months.reverse();

console.log(months);

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/
console.log('-Ejercicio 3.f:')

var monthsString = months.join('-');

console.log (monthsString);

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

console.log('-Ejercicio 3.g:');

months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];

var monthsCopy = months.slice(4, 11);

console.log(monthsCopy);
