// Ejercicio 1
// const years = parseInt(prompt("Cauntos años tienes?"))
// let year = 0
// while( year < years){
//     document.getElementById("Ejercicios").innerHTML += "<p>Feliz Cumpleaños</p>"
//     year++
// }
// Ejercicio 2
// const number = parseInt(prompt("numero"))
// let index = 0
// let result = 0
// while (index < number){
//     index++
//     result += index
// }
// document.getElementById("Ejercicios").innerHTML += `<p>${result}</p>`

// Ejercicio 3
// const numFinal = 20
// let index = 9 
// while ( index < numFinal){
//     index++
//     document.getElementById("Ejercicios").innerHTML += `<p>${index} </p>`
// }

 // Ejercicios 4
let numPre = 0
 let resultado = 0
 while (numPre < 10){
    numPre++
    resultado += parseInt(prompt("Deme un numero"))
 }
 document.getElementById("Ejercicios").innerHTML += `<p>${resultado/10} </p>`