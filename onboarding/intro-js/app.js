
let myName = "Pablo Matias";
let myLastName = "Galeano";
let myAge = 20;
let myPet = "Morita";
let petAge = 10;
let fullName = myName + " " + myLastName;
let presentationText = "Hola, me llamo " + fullName + " y tengo " + myAge + " años. Tengo una mascota que se llama " + myPet + " y tiene " + petAge + " años."

let sumAges = myAge + petAge;
let substractAges = myAge - petAge;
let productAges = myAge * petAge;
let divisionAges = myAge / petAge;

console.log(presentationText);
console.log(`La suma de mi edad y la edad de mi perro es igual a: ${sumAges}`);
console.log(`La resta de la edad de mi perro a mi edad es igual a: ${substractAges}`);
console.log(`La multiplicacion entre mi edad y la edad de mi perro es igual a: ${productAges}`);
console.log(`La división de mi edad por la edad de mi perro es igual a: ${divisionAges}`);




const student = {
    nombre: "Pablo Matias",
    apellido: "Galeano",
    edad: 20,
    mascotas: 2,
    colorFavorito: "negro"
}

const pet = {
    nombre: "Roque",
    edad: 12,
    raza: "Caniche",
    tamaño: "pequeño",
    actitud: "inquieto"
}

let fruits = ["naranjas", "manzanas", "bananas", "peras", "mandarinas"];

console.table(student);
console.log(student.nombre);
console.log(student.apellido);
console.log(student.edad);
console.log(student.colorFavorito);
console.log(student.mascotas);

console.table(pet);
console.log(pet.nombre);
console.log(pet.edad);
console.log(pet.raza);
console.log(pet.tamaño);
console.log(pet.actitud);

console.table(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);



let edadCliente = prompt("Inserte su edad:");
let iAmAdult = edadCliente >= 18;
console.log(`Soy un adulto: ${iAmAdult}`);



let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

let family = ["Pablo", "Sergio", "Griselda", "Blanca", "Nancy"];
console.log(family[0])
console.log(family[1])
console.log(family[2])
console.log(family[3])
console.log(family[4])

let randomText = `Ayer ${family[0]} se comió ${numbers[3]} ${fruits[1]}`;
console.log(randomText);