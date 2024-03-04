const main = document.querySelector('main')

const mainDiv = document.createElement('div')
main.appendChild(mainDiv)
mainDiv.className = "p-10 w-4/5 flex gap-3 flex-wrap justify-around"
mainDiv.id = "contenedor-main"

const h1 = document.querySelector('h1')
h1.id = "titulo"
h1.className = "text-3xl font-bold"

const h2 = document.createElement('h2')
main.appendChild(h2)
h2.textContent = "Frutas Dulces"
h2.className = "text-2xl font-bold"

const ul = document.createElement('ul')
main.appendChild(ul)
ul.id = "lista"


// return `<article class="flex flex-col gap-3 w-10/12 p-3 md:w-5/12 xl:w-1/5 border-solid border-2 rounded-xl border-black">
//     <h2 class="font-bold">${fruta.nombre}</h2>
//     <img class="h-52 w-auto object-fit" src="${fruta.foto}" alt="${fruta.nombre}">
//     <p>${fruta.descripcion}</p>
// </article>`

// Tarjetas
function crearTarjeta(fruta) {
    const article = document.createElement("article")
    article.className = "flex flex-col gap-3 w-10/12 p-3 md:w-5/12 xl:w-1/5 border-solid border-2 rounded-xl border-black"

    const h2 = document.createElement("h2")
    h2.className = "font-bold"
    h2.textContent = fruta.nombre

    const img = document.createElement("img")
    img.className = "h-52 w-auto object-fit"
    img.setAttribute("src", fruta.foto)
    img.setAttribute("alt",`Imagen de ${fruta.nombre}`)

    const p = document.createElement("p")
    p.textContent = fruta.descripcion

    article.append(h2, img, p)
    return article
}

function imprimirTarjeta(listaFrutas, elemento) {
    for (const frutaIterada of listaFrutas) {
        let card = crearTarjeta(frutaIterada)
        elemento.appendChild(card)
    }
}

imprimirTarjeta(frutas, mainDiv)


// Lista de fruta dulces
function frutasDulces(fruta, listaDeFrutas) {
    let item = `<li class="list-disc">${fruta.nombre}</li>`
    return item
}

function imprimirFrutasDulces(listaFrutas, elemento) {
    let i = ''
    for (const frutaIterada of listaFrutas) {
        if (frutaIterada.esDulce){
            elemento.innerHTML = i
        } 
        i += frutasDulces(frutaIterada)
    }
}

imprimirFrutasDulces(frutas, ul)
