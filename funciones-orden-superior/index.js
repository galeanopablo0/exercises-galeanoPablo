// //1
// const printMessage = () => {
//     console.log("hola")
// }

// //2
// const createMultiplication = (number1, number2) => {
//     let result = number1 * number2
//     return result
// }

// //3
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arrayMultiplicado = array.map( createMultiplication )
// console.log(arrayMultiplicado)


//4 beers.map() establece un array con todos los arrays interos, el primer valor es el array interno y la flecha indica el valor a retornar 
let beersAbv = beers.map( beer => beer.abv)
console.log(beersAbv)

// array.splice() el primer valor es el indice del cual quiero que comience a eliminar, y el segundo es para eliminar una determinada cantidad de elementos del array


const beersMayorAlcohol = function(array) {
    let beersAbvMayor = array.map( beer => beer.abv)
    beersAbvMayor.sort((a,b) => b - a);
    beersAbvMayor.splice(10, 15)
    return beersAbvMayor;
}
console.log(beersMayorAlcohol(beers))

//5
const beersMenorAlcohol = function(array) {
    let beersAbvMenor = array.map( beer => beer.abv)
    beersAbvMenor.sort((a,b) => a - b)
    beersAbvMenor.splice(10, 15)
    return beersAbvMenor;
}
console.log(beersMenorAlcohol(beers))

//6 La funcion recibe parametro de un array y la propiedad a buscar coincidencia con el argumento. Retorna el array en el que se encuentra esta propiedad.
const buscarCerveza = function(array, propiedad) {
    return array.find((beer) => beer.name == propiedad) 
}
const cervezaABuscar = "Buzz"
console.log(buscarCerveza(beers, cervezaABuscar))

// //7
const ibuIgualValue = function(array, propiedad) {
    let beerIbu =  array.find((beer) => beer.ibu == propiedad) 
    if (beerIbu) {
        return beerIbu
    } else {
        console.log(`There is no beer with an ibu of ${propiedad}.`)
    }
}
const ibuABuscar = 60;
console.log(ibuIgualValue(beers, ibuABuscar))

//8
const posicionEnArray = function(array, nombre) {
    let beerNombre = array.find ((beer) => beer.name == nombre)
    for (let i = 0; i < array.length; i++) {
        if (array[i] == beerNombre){
            return i
        } else {
            console.log(`${beerNombre} does not exist.`)
        }
    }
}
const nombreDeCervezaABuscar = "Buzz"
console.log(posicionEnArray(beers, nombreDeCervezaABuscar))

//9
const alcoholLevel = function(array, alcoholValor) {
    let beersFilter =  array.filter( beer => beer.abv <= alcoholValor)
    return beersFilter.map( beer => ({name:beer.name, abv:beer.abv, ibu:beer.ibu}))
}
console.log(alcoholLevel(beers, 7))

//10
const newArrayOrder = function(array, propiedad, boolean) {
    let nuevoArray = array.map((beer) => beer[propiedad])
    if (boolean) {
        nuevoArray.sort((a,b) => a - b)
        nuevoArray.splice(10, 15)
    } else {
        nuevoArray.sort((a,b) => b - a)
        nuevoArray.splice(10, 15)
    }
    return nuevoArray
}
console.log(newArrayOrder(beers, "abv", false))
    
//11
const main = document.getElementById('contenedor-main')

const imprimirTabla = function(array, elemento) {
    let contenidoFilas = array.map(beer => `<tr class="bg-slate-300">
                                                <td>${beer.name}</td>
                                                <td>${beer.abv}</td>
                                                <td>${beer.ibu}</td>
                                            </tr>`)
    elemento.innerHTML = `<thead>
    <tr class="bg-slate-700 text-white">
        <th>Name</th>
        <th>ABV</th>
        <th>IBU</th>
    </tr>
</thead>
<tbody>
    ${contenidoFilas}
</tbody>
    `
}
imprimirTabla(beers, main)

// printMessage()
// console.log(createMultiplication(10, 5))