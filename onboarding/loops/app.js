// for ( let i = 10 ; i > 0 ; i-- ) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// Difficulty Level: Low
// 1)
// for (let i = +prompt("Ingrese un numero"); i > -1; i--) {
//     if (i > 100){
//         console.log("Debe ser un numero del 1 al 100");
//     }
//     console.log(i)
// }


// // 2)
// const numeroIngresado = +prompt("Ingrese un numero del 1 al 10")
// if (numeroIngresado <= 10) {
//     for (let i = 1; i <= 10; i++) {
//         const resultado = i * numeroIngresado
//             console.log(`${i} x ${numeroIngresado} = ${resultado}`)
//         }
// }


// // 3)
// let sumaNumeros = +prompt("Ingresar numeros que desee sumar");
// let resultado = 0

// while (sumaNumeros) {
//     resultado += sumaNumeros
//     sumaNumeros = +prompt("Ingresar numeros que desee sumar");
// }
// console.log(resultado)



// // Difficulty level: Medium
//// // 4) 5)
// let sumaNumeros = +prompt("Ingresar numeros que desee sumar");
// let resultadoPunto3 = 0
// do {
//     resultadoPunto3 += sumaNumeros
//     sumaNumeros = +prompt("Ingresar numeros que desee sumar");
// } while(sumaNumeros)

// let numeroIngresado = +prompt("Intente adivinar el numero secreto")
// let intentos = 0
// while (numeroIngresado !== resultadoPunto3) {
//     if (numeroIngresado < resultadoPunto3) {
//         alert("El numero ingresado es menor al numero secreto")
//     } else if (numeroIngresado > resultadoPunto3) {
//         alert("El numero ingresado es mayor al numero secreto")
//     }
//     numeroIngresado = +prompt("Intente adivinar el numero secreto")
//     intentos++
// }
// alert(`Acertaste, el numero secreto era: ${resultadoPunto3}, realizaste ${intentos} intentos`)


// // 6)
// let numeroIngresado = +prompt("Ingrese un numero");

// for (let i = numeroIngresado; i >= 1; i--) {
//     if (numeroIngresado % i == 0) {
//         console.log(i)
//     }
// }


// // 7)
// function sonarCampana() {
//     return "Ding Dong, "
// }
// let string = ''
// for (let i = 0; i <= 8 ; i++) {
//     string += sonarCampana()
//     i++
// }
// console.log(string)


// // 8)
// const fechaLimite = "1997-8-3"
// const fechas = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-21-18", "2001-1-9"];

// for (let i = 0; i < fechas.length; i++) {
//     if (fechas[i] >= fechaLimite){
//         console.log(fechas[i])
//     }
// }


// // 9) 10)
// function coloresConsola() {
//     let colores = ["Rojo", "Verde", "Azul", "Violeta", "Amarillo", "Celeste", "Naranja", "Rosa"]

//     for (const color of colores) {
//         console.log(color)
//     }
// }
// coloresConsola()


// // 11)
// let numeros = [5,7,10,15,20]
// for (const numero of numeros) {
//     console.log(`El número es ${numero} y su doble es ${numero * 2}`);
// }


// // 12)
// let personas = [
//     {
//         nombre: "Pablo",
//         apellido: "Galeano",
//         edad: 20,
//         colorFavorito: "negro"
//     },
//     {
//         nombre: "Alejo",
//         apellido: "De Oli",
//         edad: 24,
//         colorFavorito: "gris"
//     },
//     {
//         nombre: "Sergio",
//         apellido: "Galeano",
//         edad: 45,
//         colorFavorito: "rojo"
//     },
//     {
//         nombre: "Juan",
//         apellido: "Gonzalez",
//         edad: 30,
//         colorFavorito: "verde"
//     }
// ]

// for (const persona of personas) {
//     console.log(`Hola, soy ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años. Mi color favorito es el ${persona.colorFavorito}`)
// }


// // 13) 14)
// let persona = {
//     nombre: "Pablo",
//     apellido: "Galeano",
//     edad: 20,
//     estudios: "electromecánico",
//     colorFavorito: "negro"
// }

// for (const key in persona) {
//     console.log(key)
// }

// for (const prop in persona) {
//     console.log(persona[prop])
// }


// // 15)
// let numeroIngresado = +prompt("Ingrese un numero que desee sumar")
// let sumaNumerosPares = 0
// let sumaNumerosImpares = 0

// while (numeroIngresado != 0) {
//     if (numeroIngresado % 2 == 0) {
//         sumaNumerosPares += numeroIngresado
//     } else {
//         sumaNumerosImpares += numeroIngresado
//     }
//     numeroIngresado = +prompt("Ingrese un numero que desee sumar")
// }


// console.log(`Pares: ${sumaNumerosPares}`)
// console.log(`Impares: ${sumaNumerosImpares}`)


// // 16)
// let numeros = [1,2,3,4,5,6,7,8,9,10];
// let numeroMayor = numeros[0]
// for (let i = 1; i < numeros.length; i++) {
//     if ( numeros[i] > numeroMayor ){
//         numeroMayor = numeros[i]
//     }
// }
// console.log(numeroMayor)