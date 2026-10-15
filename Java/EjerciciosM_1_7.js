// Ejercicio 2
// const year = parseInt(prompt("Cual es tu edad?"))
// if (year <= 8) {
//     alert ("Pasa al tobogan")
// } else{ 
//     alert ("Eres demasiado mayor para usar el tobogan")
// }

// Ejercicio 3
// const num1 = parseInt(prompt("Escriba un numero"))
// const num2 = parseInt(prompt("Escriba un segundo numero"))
// const num3 = parseInt(prompt("Escriba un tercer numero"))
// if (num1+num2 == num3){
//     alert (num3)
// } else {
//     alert(`La suma de los dos primeros números no es ${num3}` )
// }

// Ejercicio 4
// const num1 = parseInt(prompt("Escriba un numero"))
// const num2 = parseInt(prompt("Escriba un segundo numero"))
// const num3 = parseInt(prompt("Escriba un tercer numero"))
// if (num1 - num2 == 20){
// alert("el primer numero es 20 menos que el segundo")
// }
// if( num2 - num3 == 20){
// alert("el segundo numero es 20 menos que el tercero")
// }
// if(num1 - num3 ==20){
// alert("el primer numero es 20 menos que el tercero")
// }
// if(num3 - num1 == 20){
// alert("el tercer numero es 20 menos que el primero")
// }
// if(num2 - num1 == 20){
// alert("el segundo numero es 20 menos que el primero")
// }
// if(num3 - num2 == 20){
// alert("el tercer numero es 20 menos que el segundo")
// }

// Ejercicio 5
// const day = prompt("escriba un dia de la semana").toLowerCase()
// if (day == "lunes"){
//     alert("Hoy es Lunes")
// }
// if (day == "martes"){
//     alert("Hoy es Martes")
// }
// if ((day == "miercoles") ||(day == "miércoles")){
//     alert("Hoy es Miércoles")
// }
// if (day == "jueves"){
//     alert("Hoy es Jueves")
// }
// if (day == "viernes"){
//     alert("Hoy es Viernes")
// }
// if ((day == "sabado") || (day == "domingo") || (day == "sábado")){
//     alert("Hoy es fin de semana")
// }

// Ejercicio 6
// const number = parseInt(prompt("Escriba un número"));
// const numberCub = number * number * number;
// const numberCua = number * number;
// if (numberCub >= 1){
//     alert(`En Némro al cuadrado es ${numberCua} y el número al cubo es ${numberCub}`)       
//     }

// Ejercicio 7
// const numerador = parseInt(prompt("Introduzca un Numerador"))
// const denominador = parseInt(prompt("Introduzca un Denominador"))
// if (denominador !== 0){
//     alert( numerador / denominador)
// } else{
//     alert("No se puede dividir por cero")
// }

// Ejercicio 8
// const firstNum = parseInt(prompt("Introduzca un Número"))
// const secondNum = parseInt(prompt("Introduzca un Denominador"))
// if (firstNum > secondNum){
//     alert(`${firstNum} es mayor que ${secondNum}`)
// } 
// if (firstNum < secondNum){
//     alert(`${firstNum} es menor que ${secondNum}`)
// } 
// if (firstNum == secondNum){
//     alert(`${firstNum} es igual que ${secondNum}`)
// } 

// Ejercicio 9
// const heat = parseFloat(prompt("Que temperatura hace?"))
// if(heat > 40){
//     alert("Vete a otro sitio")
// } else if(heat >= 30){
//     alert("Enciende el aire acondicionado")
// } else if(heat >= 20){
//     alert("No hagas nada")
// } else if(heat >= 10){
//     alert("Enciende la calefaccion")
// }else {
//     alert("Vete que hiela")
// }

//Ejercicio 10
// const num1 = parseFloat(prompt("Primer numero"))
// const num2 = parseFloat(prompt("Segundo numero"))
// let rest1 = (num1 % 6)
// let rest2 = (num2 % 6)
// let smallNum = num1 < num2 ? num1 : num2
// let bigNum = num1 > num2 ? num1 : num2
// if (num1 == num2){
//     alert("0")
// }
// if (rest1 == rest2){
//     alert(`El numero mas pequeno era ${smallNum}`)
// } else {
//     alert(`El numero mas grande era ${bigNum}`)
// }

// Ejercicio 11 **
// const num1 = parseInt(prompt("Primer número entre 25 y 75"))
// const num2 = parseInt(prompt("Segundo número entre 25 y 75"))

// if (num1 < 25 || num1 > 75 || num2 < 25 || num2 > 75) {
//     alert("Te dije entre 25 y 75")
// } else if (String(num2).includes(String(num1)[0]) || String(num2).includes(String(num1)[1])) {
//     alert("Tienen algún dígito en común")
// } else {
//     alert("No tienen ningún dígito en común")
// }

// Ejercicio 12
// const puesto = parseInt(prompt("Numero de posicion que ha quedado"))
//Respuesta A
    // if (puesto == 1){
    //     alert("Ganaste!!")
    // } else {
    //     alert ("lo importante es participar")
// }
//Respuesta B
    // if (puesto == 1){
    //     alert("Medalla de oro")
    // } else if (puesto == 2 ){
    //     alert ("Medalla de plata")
    // } else if (puesto == 3){
    //     alert("Medalla de bronce")
    // } else alert("Lo importante es participar")
// Respuesta C 
    // if (puesto == 1 || puesto == 2 || puesto == 3) {
    //     alert("Sube al podium")
    // } else alert("Se acabo lacarrera")

// Ejercicio 14
// const hoy = new Date()
// alert(hoy.toDateString()) 

//Ejercicio 16 (lo hemos dado?)
// const choice = prompt("¿Eres tonto?").toLowerCase()
// if (choice == "yes"){
//     alert("Lo importante es admitirlo")
// } else if (choice == "no"){
//     alert("¿Estás seguro?")
// } else alert("¿En serio no sabes si eres tonto o no?")


// Ejercicio 17 
// const num1 = parseInt(prompt("Primer numero"))
// const num2 = parseInt(prompt("Segundo numero"))
// const num3 = parseInt(prompt("Tercer numero"))
// let bigNum = num1 > num2 ? num1 : num2
// bigNum = bigNum > num3 ? bigNum : num3

// alert(`The biggest number is ${bigNum}`)


// Ejercicio 18
// const num1 = parseInt(prompt("Primer numero"))
// const num2 = parseInt(prompt("Segundo numero"))
// const num3 = parseInt(prompt("Tercer numero"))
// let bigNum = num1 < num2 ? num1 : num2
// bigNum = bigNum < num3 ? bigNum : num3

// alert(`The smallest number is ${bigNum}`)


// Ejercicio 20
// const temp = parseFloat(prompt("Que temperatra quiere calcular (sin decir si es F o C)"))
// const type = prompt("A que la quiere trasformar F o C").toUpperCase()
// let tempToF = ((temp * 9) / 5) + 32
// let tempToC = ((temp - 32) * 5) / 9

// if (type == "F"){
//     alert(`${temp}C es ${tempToF}F`)
// } else if (type == "C") {
//     alert(`${temp}F es ${tempToC}C`)
// } else {
//     alert("Escriba F o C")
// }

//Ejercicio 21
// const names = prompt("Introduzca su nombre")
// const sales = parseFloat(prompt("Cuanto has vendido"))
// let extra = (sales * 0.05)
// if (sales >= 500){
//     alert(`Felicidades ${names} has ganado ${extra} euros extra este mes`)
// } else {
//     alert(`${names} trabaja mas duro el siguiente mes`)
// }


// // Ejercicio 23 ** En clase ** 
// const year = parseInt(prompt("Dame un año"))
// if (year % 4 == 0 && (year % 100 !=0 || year % 400 == 0)) {
//     alert (`${year} es bisiesto`)
// } else{
//     aler( `${year} no es bisiesto`)
// }

// Ejercicio 24
// const number = parseInt(prompt("Escriba un numero de tres digitos"))
// const c1 = parseInt(number / 100)      
// const c2 = parseInt((number - c1 *100) / 10) 
// const c3 = parseInt (number - c1 * 100 - c2 *10)                    
// let pares = 0
// if (c1 % 2 == 0) pares++
// if (c2 % 2 == 0) pares++
// if (c3 % 2 == 0) pares++

// if (pares == 3) {
//     alert(`Todas las cifras de ${number} son pares`)
// } else if (pares == 0) {
//     alert(`Todas las cifras de ${number} son impares`)
// } else {
//     alert(`El número ${number} tiene cifras pares e impares`)
// }

// Ejercicio 25 
// const frace = prompt("Dile algo a Bob")
// if (frace.includes("?") && frace.includes("!")) {
//     alert("Bob: Hey chill! Ik what I'm doing")
// } else if (frace.includes("?")) {
//     alert("Bob: Sure!")
// } else if (frace.includes("!")) {
//     alert("Bob: Eh! Chill")
// } else if (sentence.length == 0){
//     alert("Vale conque esas tenemos")
// }else {
//     alert("Whatever")
// }

// Ejercicio 27 
const intro = `
    Welcome to the adventure:
    Youre in a path a it splits in two, what are you choosing?:
    a) Right
    b) Left`
let secondM =`
    Now you see a dude in front of you, what do you do?
    1) Talk to him
    2) Kill him
    3) Ignore him`
let introAnwer = prompt(intro)
if (intro == "a"){
        alert("You just died")
    } else {
        alert(`You have Spiderman´s zing... Good job...`)
        prompt(secondM)
    }
if (secondM == "1"){
        alert(`You just obtained a new weapen`)
} else if (secondM == 2){
        alert(`You just got cursed`)
} else alert(`He killed you from behind`)