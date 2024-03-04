// // Difficulty level: Low
// // 1) 2) 3)
// let num1 = 5;
// let num2 = 8;


// if (num1 > num2) {
//     console.log(num1);
// } else if (num2 > num1) {
//     console.log(num2);
// } else if (num1 == num2) {
//     console.log("Los numeros son iguales");
// }


// if (num1 == num2) {
//     console.log("Los numeros son iguales");
// } else {
//     console.log("Los numeros son diferentes");
// }



// // 4) 5)
// let date1 = "2018-9-2"
// let date2 = "2023-7-5"

// if (date2 > date1){
//     console.log(`La fecha ${date2} es mayor que ${date1}`)
// } else if(date1 > date2) {
//     console.log(`La fecha ${date1} es mayor que ${date2}`)
// } else{
//     console.log("Las fechas son las mismas")
// }


// date1 = "2025-01-29"
// date2 = "2017-12-28"

// if (date2 > date1){
//     console.log(`The fecha ${date2} es mayor que ${date1}`)
// } else if(date1 > date2) {
//     console.log(`La fecha ${date1} es mayor que ${date2}`)
// } else{
//     console.log("Las fechas son las mismas")
// }


// // 6)
// let number1 = 5
// let number2 = 7
// let number3 = 9

// if (number1 > number2 && number1 > number3) {
//     console.log(`El numero ${number1} es el mayor`)
// } else if (number2 > number1 && number2 > number3) {
//     console.log(`El numero ${number2} es el mayor`)
// } else {
//     console.log(`El numero ${number3} es el mayor`) 
// }


// // Difficulty level: medium
// //  1)
// let valorColor = prompt("Ingrese un color")
// switch (valorColor) {
//     case "rojo": 
//         alert("El color de la pasion");
//         break;

//     case "verde": 
//         alert("El color de la naturaleza");
//         break;

//     case "azul": 
//         alert("El color del mar");
//         break;
// }


// // 2)

// let valorNumerico1 = +prompt("Ingrese un primer valor numérico");
// let valorNumerico2 =  +prompt("Ingrese un segundo valor numérico")
// let operacion =  prompt ("Ingrese una operación matemática")

// switch (operacion) {
//     case "suma": 
//         alert(`La suma de ${valorNumerico1} + ${valorNumerico2} es ${valorNumerico1 + valorNumerico2}`);
//         break;
//     case "resta": 
//         alert(`La resta de ${valorNumerico1} - ${valorNumerico2} es ${valorNumerico1 - valorNumerico2}`);
//         break;
//     case "multiplicacion": 
//         alert(`La multiplicacion de ${valorNumerico1} x ${valorNumerico2} es ${valorNumerico1 * valorNumerico2}`);
//         break;
//     case "division": 
//         alert(`La division de ${valorNumerico1} : ${valorNumerico2} es ${valorNumerico1 / valorNumerico2}`);
//         break;
//     }

// // 3)
// let persona1 = {
//     nombre: "Juan",
//     edad: 39,
//     altura: 1.19
// }

// let persona2 = {
//     nombre: "Pablo",
//     edad: 20,
//     altura: 1.78
// }

// if (persona1.altura > persona2.altura && persona1.edad > persona2.edad) {
//     console.log(`${persona1.nombre} tiene mas altura y es mayor de edad que ${persona2.nombre}`)
// } else if (persona1.altura < persona2.altura && persona1.edad > persona2.edad){
//     console.log(`${persona1.nombre} tiene menos altura y es mayor de edad que ${persona2.nombre}`)
// } else {
//     console.log(`${persona1.nombre} tiene menos altura y es menor de edad que ${persona2.nombre}`)
// }

// // 4)
// let capacitadoConducir = {
//     nombre: prompt("Ingrese su nombre"),
//     edad: +prompt("Ingrese su edad"),
//     altura: +prompt("Ingrese su altura"),
//     vision: +prompt("Ingrese su vision ocular en valor del 1 al 10")
// }

// if (capacitadoConducir.edad >= 18 && capacitadoConducir.altura > 1.50 && 8 <= capacitadoConducir.vision >= 10) {
//     console.log("Estás capacitado para conducir");
// } else {
//     console.log("No estás capacitado para conducir");
// }


// // 5)
// let edadIngresada = +prompt("Ingrese su edad")

// if (edadIngresada <= 12) {
//     alert("Eres un infante");
// } else if (edadIngresada <= 18) {
//     alert("Eres un adolescente");
// } else if (edadIngresada <= 45) {15
//     alert("Eres un mayor joven");
// } else if (edadIngresada <= 100) {
//     alert("Eres un anciano");
// } else {
//     alert("¿En realidad tienes esa edad?")
// }

// // 6)
// let numeroUnoAlTres = +prompt("Ingrese un numero del 1 al 3")
// let numeroIngresado = +prompt("Ingrese un numero aleatorio")

// switch (numeroUnoAlTres) {
//     case 1: 
//         alert(`El numero ingresado es ${numeroIngresado}`);
//         break;
//     case 2:
//         alert(`El doble del numero ingresado es ${numeroIngresado * 2}`);
//         break;
//     case 3:
//         alert(`El triple del numero ingresado es ${numeroIngresado * 3}`);
//         break;
//     default: 
//         alert('Ese valor no esta permitido');
// 


// let cliente = {
//     nombre: prompt("Ingrese su nombre"),
//     pase: prompt("¿Pase: vip o normal?"),
//     entrada: prompt("Entrada: si o no")
// }

// if (cliente.nombre == "pablo" || cliente.pase == "vip") {
//     alert("Bienvenido al programa")
// } else if (cliente.entrada == "si") {
//     let utilizarEntrada = prompt("Desea utilizar su entrada?")
//     if (utilizarEntrada == "si") {
//         alert("Bienvenido al programa")
//     } else {
//         alert("Hasta luego")
//     }
// } else {
//     let deseaComprar = prompt("¿Desea comprar una entrada?")
//     if (deseaComprar == "si") {
//         let dineroDisponible = +prompt("¿Cuanto dinero disponible tiene?");
//         if (dineroDisponible >= 1000) {
//             alert("Venta exitosa. Bienvenido al programa")
//         } else {
//             alert("Venta rechazada. Dinero insuficiente, hasta luego")
//         }
//     } else {
//         alert("Hasta luego")
//     }
// }

