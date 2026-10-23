// let menu = 0
// do{
// menu = parseInt(prompt(`
// **********************
// Calculadora
// **********************
// 1. Suma 
// 2. Resta
// 3. Multiplicación
// 4. Potencia
// 5. Division
// 6. Raiz
// 7. Salir` ))
// }
// while (menu <= 6){
//     if (menu == 7){
//             alert("Gracias por usar esta calculadora")
//         }
//     if (menu > 7){
//         alert("Esta no era una opción")
//     }
//     let num1 = parseFloat(prompt("Primer número"))
//     let num2 = parseFloat(prompt("Segundo número"))
    
// if (menu == 1){
//     alert(`
//         Operación Seleccionada: Suma
//         ${num1} + ${num2} = ${num1 + num2}`)

// }
// if (menu == 2){
//      alert(`
//         Operación Seleccionada: Resta
//         ${num1} - ${num2} = ${num1 - num2}`)

// }
// if (menu == 3){
//      alert(`
//         Operación Seleccionada: Multiplicación
//         ${num1} * ${num2} = ${num1 * num2}`)

// }
// if (menu == 4){
//      alert(`
//         Operación Seleccionada: Potencia
//         La Potencia de ${num1} elevada a ${num2} es ${Math.pow(num1, num2)} `)
// }
// if (menu == 5){
//      alert(`
//         Operación Seleccionada: División
//         ${num1} / ${num2} = ${num1 / num2}`)
// }
// if (menu == 3){
//      alert(`
//         Operación Seleccionada: Raíz
//         La Raíz de ${num1} a ${num2} es ${Math.pow(num1, 1/num2)} `)

// }
// }


let valore = []
for (i = 0; i < 3; i++){
    valore.push(prompt("Inserte un valor"))
}
for (valeu = 0; valeu < valore.length; valeu++)
    document.getElementById("Ejercicio_largo").innerHTML += `<p>${valore[valeu]}`