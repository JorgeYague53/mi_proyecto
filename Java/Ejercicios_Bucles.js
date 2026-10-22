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
// let numPre = 0
//  let resultado = 0
//  while (numPre < 10){
//     numPre++
//     resultado += parseInt(prompt("Deme un numero"))
//  }
//  document.getElementById("Ejercicios").innerHTML += `<p>${resultado/10} </p>`

// Ejercicio 5 
// let num1 = parseInt(prompt("Introduzca un número"))
// while (num1 !== 0) {
//     let result = 0

//     for (let num = 1; num <= num1; num++) {
//         result += num
//     }
//     alert(`La suma de 1 hasta + ${num1} +  es  + ${result}`)
//     num1 = parseInt(prompt(`Si quiere puede seguir, o si quiere salir pulse 0`))
// }

// Ejercicio 6
// let num = 0
// let fact = 1
// while (num < 10){
//    num++
//    fact*= num
//     document.getElementById("Ejercicios").innerHTML += `<p>${num} = ${fact}</p>`
// }

// Ejercicio 7
// let result = 0
// let num1 
// do {
//    num1 = parseInt(prompt("Introduzca un número"))   
//    if (num1  < 0){
//       alert(`No se aceptan valores negativos`)
//    } else {
//        result += num1
//        }
// }while (num1 !== 0){
//    alert(`El resultado es ${result}`)
// }

//Ejercicio 8
let choice = prompt("Elige par (P) o impar (I)").toUpperCase()
while (choice !== "P" && choice !== "I") {
    alert("Este valor no es correcto")
    choice = prompt("Elige par (P) o impar (I)").toUpperCase()
}
let num = (choice == "P") ? 2 : 1
while (num <= 100) {
    document.getElementById("Ejercicios").innerHTML += `<p>${num}</p>`
    num += 2
}
