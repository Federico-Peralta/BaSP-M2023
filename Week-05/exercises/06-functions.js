console.log('--EJERCICIO 6: FUNCIONES');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable 
en la consola del navegador.*/

console.log('-Ejercicio 6.a');

var number1 = 40;
var number2 = 15;

function sumFunction(number1, number2){
    var numbersResult = number1 + number2;
    console.log(numbersResult);
}

sumFunction();

/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno 
de los parámetros no es un número; de no ser un número, mostrar un alert 
aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log('-Ejercicio 6.b');

function sumFunction(){
    if(typeof number1 === 'number' && typeof number2 === 'number'){
        var numbersResult = number1 + number2;
        console.log(numbersResult);
    }else{
        alert('Los valores no son numericos')
        return NaN;
    } ;
};

sumFunction();

/* c. Crear una función “validateInteger” que reciba un número como parámetro y 
devuelva verdadero si es un número entero.*/

console.log('-Ejercicio 6.c');

var number = 3;

function validateInteger(number){
    if(number % 1 == 0){
        return true;
    }else{
        return false;
    }
};

validateInteger();

/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. 
y que valide que los números sean enteros. 
En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado)*/

console.log('-Ejercicio 6.d');

number1 = 16.5;
function numberFunction(){
    if(typeof number1 === 'number' && typeof number2 === 'number'){
        var numbersResult = number1 + number2;
        console.log(numbersResult);
        if(validateInteger(number1) === true && validateInteger(number2) === true){
            console.log('Los numeros son enteros');
        }else if(validateInteger(number1) === false && validateInteger(number2) === true){           
            number1 = Math.round(number1);
            alert('Error, numero ingresado no es entero.');
            console.log(number1);
            return number1;
        }else if(validateInteger(number1) === true && validateInteger(number2) === false){
            number2 = Math.round(number2);
            alert('Error,numero ingresado no es entero.'); 
            console.log(number2);
            return number2;
        }else{
            alert('Error, los numeros ingresados no son enteros');
            number1 = Math.round(number1);
            number2 = Math.round(number2);
            console.log(number1, number2);
            return number1, number2;
        }
    }else{
        alert('Los valores no son numericos', NaN)
    };
    
}

numberFunction();


/* e. Convertir la validación del ejercicio 6d) en una función separada y 
llamarla dentro de una nueva función probando que todo siga funcionando igual que en el apartado anterior.*/

console.log('-Ejercicio 6.e');

number1 = 10.6;
number2 = 60.2;

function validationFunction(){
    if(validateInteger(number1) === true && validateInteger(number2) === true){
        console.log('Los numeros son enteros');
    }else if(validateInteger(number1) === false && validateInteger(number2) === true){           
        number1 = Math.round(number1);
        alert('Error, numero ingresado no es entero.');
        console.log(number1);
        return number1;
    }else if(validateInteger(number1) === true && validateInteger(number2) === false){
        number2 = Math.round(number2);
        alert('Error, numero ingresado no es entero.'); 
        console.log(number2);
        return number2;
    }else{
        alert('Error, los numeros ingresados no son enteros');
        number1 = Math.round(number1);
        number2 = Math.round(number2);
        console.log(number1, number2);
        return number1, number2;
    }
};

function tryFunction(){
    validationFunction()
};

tryFunction();