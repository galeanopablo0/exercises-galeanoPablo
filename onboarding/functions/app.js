// // Difficulty level: Low
// // 1)
// function add() {
//     console.log(100 * 20);
// }


// // 2)
// add()


// // 3)
// function add(numero1, numero2) {
//     console.log(numero1 * numero2);
// }
// add(5, 10)


// // 4)
// let numeroA = 80;
// let numeroB = 20;
// function add(numero1, numero2) {
//     console.log(numero1 * numero2);
// }
// add(numeroA, numeroB);


// // 5)
// let numeroA = 80;
// let numeroB = 20;
// function add(numero1, numero2) {
//     let resultado = numero1 * numero2;
//     return resultado;
// }
// add(numeroA, numeroB);


// // 6)
// let numeroA = 80;
// let numeroB = 20;
// let add = function(numero1, numero2) {
//     return numero1 * numero2
// };
// let resultado = add(numeroA, numeroB)
// alert(resultado)


// // 7)
// let numeroA = 80;
// let numeroB = 20;
// let add = (numero1, numero2) => {return numero1 * numero2};
// let resultado = add(numeroA, numeroB)
// alert(resultado)



// // Difficulty level: Medium
// // 1)
// function saludar(nombre){
//     console.log(`Hola mi nombre es ${nombre}`)
// }
// saludar("Pablo")


// // 2)
// let multiplicar = function(numero1, numero2) {
//     return numero1 * numero2;
// }
// let resultado = multiplicar(3,6);
// console.log(resultado);

// // 3)
// const sacarArea = function area(base, altura) {
//      return (base * altura)/2;
// }

// const sacarPerimetro = function perimetro(lado1, lado2, lado3) {
//      return lado1 + lado2 + lado3;
// }

// console.log(sacarArea(3,5));
// console.log(sacarPerimetro(3,5,8));


// // 4)
// const calcularTotalCompra = (precio, cantidad) => {
//      let totalCompra = precio * cantidad
//      if (cantidad >= 20){
//           totalCompra *= 0.80;
//      } else if (cantidad >= 10) {
//           totalCompra *= 0.90;
//      } 
//      return totalCompra;
// }
// console.log(calcularTotalCompra(4,10));


// // 5)
// function esMayorDeEdad (edad) {
//      if (edad >= 18) {
//           console.log("Eres mayor de edad");
//      } else {
//           console.log("Eres menor de edad")
//      }
// }

// esMayorDeEdad(20);
// esMayorDeEdad(15);
// esMayorDeEdad(80);


// // 6)
// function impuestoCorrespondiente(ingresoAnual){
//      let impuesto
//      if (ingresoAnual <= 10000) {
//           impuesto = 0.10;
//           console.log(`El impuesto a pagar es el 10% de su ingreso, ${ingresoAnual * impuesto}`)
//      } else if (ingresoAnual <= 20000) {
//           impuesto = 0.15;
//           console.log(`El impuesto a pagar es el 15% de su ingreso, ${ingresoAnual * impuesto}`)
//      } else {
//           impuesto = 0.20;
//           console.log(`El impuesto a pagar es el 20% de su ingreso, ${ingresoAnual * impuesto}`)
//      }
// }

// impuestoCorrespondiente(10000);
// impuestoCorrespondiente(20000);
// impuestoCorrespondiente(30000);


// // 7)
// let diaSemana = +prompt("Ingrese un numero del 1 al 7")

// switch(diaSemana){
//      case 1:
//      case 2:
//      case 3:
//      case 4:
//      case 5:
//           console.log("Es un dia laboral");
//           break;
//      case 6:
//      case 7:
//           console.log("Es fin de semana");
//           break;
//      default: 
//           console.log("Parametro invalido")
// }


// // 8)
// let nombre = prompt("Ingrese su nombre")
// function programa(nombreCliente){
//      nombre
//      let apellido 
//      let edad
     
//      if (nombreCliente == "") {
//           console.error("El nombre no puede estar vacio");
//      } else {
//           apellido = prompt("Ingrese su apellido");
//           if (apellido == "") {
//                console.error("El apellido no puede estar vacio");
//           } else {
//                edad = +prompt("Ingrese su edad")
//                if (edad == "") {
//                     console.error("La edad no puede estar vacia")
//                } else if (isNaN(edad)){
//                     console.error("Solo puede insertar numeros en su edad")
//                }
//           }
//      } 
//      const objeto = {
//           nombre: nombre,
//           apellido: apellido,
//           edad: edad
//      }
//      return objeto;
// }
// console.log(programa(nombre));


// // 9)
// function saludar(nombre){
//      return `Hola mi nombre es ${nombre}`
// }

// function calcularEdad(añoActual, añoNacimiento) { 
//      return añoActual - añoNacimiento;
// }

// function presentarse() {
//      let varNombre = prompt("Ingrese su nombre")
//      let varAñoActual = +prompt("Ingrese el año actual")
//      let varAñoNacimiento = +prompt("Ingrese su año de nacimiento")
     
//      alert(`${saludar(varNombre)} y tengo ${calcularEdad(varAñoActual, varAñoNacimiento)}`)
// }

// presentarse()


