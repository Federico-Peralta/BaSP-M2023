console.log('--EJERCICIO 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres 
y convertir todo el texto en mayúscula (utilizar toUpperCase)*/

console.log('-Ejercicio 2.a:')

var wordA = 'rechazaban'
var resultWord = wordA.toUpperCase();

console.log(resultWord);

/* b. Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los primeros 5 caracteres guardando 
el resultado en una nueva variable (utilizar substring).*/

console.log('-Ejercicio 2.b:')

var typeWord = 'superSaiyan';
var typeWordResult = typeWord.substring(0, 5);

console.log(typeWordResult);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar 
un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Ejercicio 2.c');

var tenLetters = 'abcdefghij'
var threeLetters = tenLetters.substring(7, 10);

console.log(threeLetters);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar 
un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log('-Ejercicio 2.d:');

var letters = 'vizcondado';
var lettersResult = letters.substring(0, 1).toUpperCase() + letters.substring(1,10).toLowerCase();

console.log(lettersResult);

/* e. Crear una variable de tipo string con al menos 10 caracteres y 
algún espacio en blanco. Encontrar la posición del primer espacio en blanco y 
guardarla en una variable (utilizar indexOf).*/

console.log('-Ejercicio 2.e:');

var blankWord = 'super saiyan';
var spaceWord = blankWord.indexOf('saiyan', 0);

console.log(spaceWord);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de 
ambas palabras en mayúscula y las demás letras en minúscula 
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

console.log('-Ejercicio 2.d:');

var twoWords = 'excavacion extranjera';
var space = twoWords.indexOf(' ');
var twoWordsResult = twoWords.substring(0,1).toUpperCase() + twoWords.substring(1, space).toLowerCase() + twoWords.substring(space, space + 2).toUpperCase() + twoWords.substring(space + 2, twoWords.length).toLowerCase();

console.log(twoWordsResult);
