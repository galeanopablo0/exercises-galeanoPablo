const main = document.getElementById("contenedor-main")
const boton = document.getElementById("boton")
const box = document.getElementById("box")

boton.addEventListener("click", () => {
    if (box.className == "bg-gray-500 w-[300px] h-[300px] ml-10 border-2 border-[#244151]"){
        box.className = "bg-blue-400 w-[300px] h-[300px] ml-10 border-2 border-[#244151]"
    } else if (box.className == "bg-blue-400 w-[300px] h-[300px] ml-10 border-2 border-[#244151]"){
        box.className = "bg-red-400 w-[300px] h-[300px] ml-10 border-2 border-[#244151]"
    } else {
        box.className = "bg-gray-500 w-[300px] h-[300px] ml-10 border-2 border-[#244151]"
    }
});

const input = document.getElementById('input')
const boxTexto = document.getElementById('boxTexto')
const botonResetTexto = document.getElementById('botonReset')

input.addEventListener("input", () => {
    boxTexto.textContent = input.value
})

botonResetTexto.addEventListener("click", () => {
    boxTexto.textContent = ''
    input.value = ''
})

const estatura = document.getElementById("estatura")
const peso = document.getElementById("peso")
const calcularBoton = document.getElementById("botonCalcular")
const resultadoIMC = document.getElementById("resultado")
resultadoIMC.textContent = "Su IMC calculado es: "

calcularBoton.addEventListener("click", () => {
    resultadoIMC.textContent += peso.value / ((estatura.value / 100) * (estatura.value / 100))
})


const cotizacionDolar = 500;

const pesos = document.getElementById("pesos");
const dolares = document.getElementById("dolares");
const botonConversion = document.getElementById("calcularConversion")

botonConversion.addEventListener("click", () => {
    dolares.value = pesos.value / cotizacionDolar;
})

const pesosLocalDolares = document.getElementById("pesosLocalDolares")
const dolaresLocalDolares = document.getElementById("dolaresLocalDolares")
pesosLocalDolares.value = 0;
dolaresLocalDolares.value = 0;
const convertirLocalDolares = document.getElementById("convertirLocalDolares")
const resetLocalDolares = document.getElementById("resetLocalDolares")

const dolaresDolaresLocal = document.getElementById("dolaresDolaresLocal")
const pesosDolaresLocal = document.getElementById("pesosDolaresLocal")
dolaresDolaresLocal.value = 0;
pesosDolaresLocal.value = 0;
const convertirDolaresLocal = document.getElementById("convertirDolaresLocal")
const resetDolaresLocal = document.getElementById("resetDolaresLocal")

convertirLocalDolares.addEventListener("click", () => {
    dolaresLocalDolares.value = pesosLocalDolares.value / cotizacionDolar;
})
resetLocalDolares.addEventListener("click", () => {
    pesosLocalDolares.value = 0
    dolaresLocalDolares.value = 0
})

convertirDolaresLocal.addEventListener("click", () => {
    pesosDolaresLocal.value = dolaresDolaresLocal.value * cotizacionDolar
})
resetDolaresLocal.addEventListener("click", () => {
    dolaresDolaresLocal.value = 0
    pesosDolaresLocal.value = 0
})