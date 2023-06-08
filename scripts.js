"use strict"

// Variables y constantes

const input = document.querySelector('.input');
const boton = document.querySelector('.boton-input');
const anchorInput = document.querySelector('.input-number');
const exResultados = document.querySelector('.ex-resultados');

let copy = document.getElementById('botonCopy');
let resultadoOut = document.querySelector('.resultado');

let caracteres = '';
let anchor = 10;
let opciones = []

const inputVariable = []
const variables = ['_','$','#', '_','#','-','$'];
const variablesNums = ['1','2','3','4','5','6','7','8','9'];

// Inicio de evento

boton.addEventListener('click', ()=> {
    boton.textContent = "Generar otra contraseña"
    if (input.value !== '' && anchorInput.value <= 70 && anchorInput.value !== '') {
    anchor = anchorInput.value;
    let resultado = []
    caracteres = input.value

    // Ciclos for para generar los caracteres aleatorios

    for (let i = 0; i < anchor; i++) {
        let indice = Math.floor(Math.random() * caracteres.length)
        resultado.push(caracteres.charAt(indice));  
    }

    let indice2 = Math.floor(Math.random() * variables.length)
    resultado.splice(indice2, 1, variables[indice2])

    for (let i = 0; i < anchor / 5; i++) {
        resultado.splice(Math.floor(Math.random() * resultado.length), 1, variables[i])
    }

    for (let i = 0; i < anchor / 5; i++) {
        resultado.splice(Math.floor(Math.random() * resultado.length), 1, variablesNums[Math.floor(Math.random() * resultado.length)])
    }

    // Se usa un meto .join() para transformar el item de la lista a string y poder mostrarlo

    let resultadoFinal = resultado.join("")
    opciones.push(resultadoFinal);

    // Quitar los espacios del string

    resultadoFinal = resultadoFinal.replace(/\s+/g, "")

    // Agregar la contraseña generada
    resultadoOut.textContent = resultadoFinal;
    copy.classList.add('boton-copyActivo');
    copy.classList.remove('boton-copy');
    // Si no se agregan datos a los inputs se mostrara una alerta

    }else{
        alert("Inserta la cantidad de caracteres menor a 70 y una referencia")
    }
})

function copiar() {
    navigator.clipboard.writeText(resultadoOut.textContent);
    alert("La contraseña '" + resultadoOut.textContent + "' fue copiada en el portapales")
}
