// //Ejercicio 5
// let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
// let eleccion = parseInt(prompt("Elije un numero del 1 al 12"))
// alert(`Ha elegido ${meses[eleccion - 1]}`)

//Ejercicio 6
// let numeros = []
// for(i = 0; i < 3; i++){
//     numeros.push(parseFloat(prompt("Dame un numero"))) 
// }
// let menor = Math.min(...numeros)
//     alert(`El menor numero es ${menor}`)
//**Opcion 2 */
// let nums = []
// let minNum = 100000000000

// for (let i = 0; i < 20; i++) {
//     // nums.push(parseFloat(prompt("dame un numero")))
//     nums.push(parseInt(Math.random() * 100))
// }
// console.log(nums)
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < minNum) minNum = nums[i]
// }
// console.log(minNum)


//Ejercicio 7
// let numeros = [12, 29, 48, 95, 5, 53, 87, 45, 35, 11]
// let suma = 0
// for(i = 0; i < numeros.length; i++){
//     suma += numeros[i]
// }
// let media = suma / numeros.length
// alert(`La media es ${media}`)

// Ejercicio 11
// let nums = []
// let suma = 0
// let producto = 1
// for(i = 0; i < 20; i++ ){
//     nums.push(parseInt(Math.random() * 100))
// }
// console.log(nums)
// for(i = 0; i < nums.length; i += 2 ){
//     suma += nums[i]
// }
// for(i = 1; i < nums.length; i += 2 ){
//     producto *= nums[i]
// }
// alert(`Los núeros eran ${nums}, la suma de los pares es ${suma} y el producto de los impares es ${producto}`)

// Ejercicio 12
// let valores = ["jkgnertjk", "dfglbhmwrl", "agnt", "wjbnr", "jbwgkñra"]
// console.log(valores)
// let valoresOrd = valores.sort()
// console.log(valores)

// Ejercicio 14
// let elements = []
// let num1 = 0
// let num2 = 0
// let num3 = 0
// let num4 = 0
// let num5 = 0
// let num6 = 0
// let num7 = 0
// let num8 = 0
// let num9 = 0
// for (i = 0; i < 20; i++) {
//     elements.push(parseInt(Math.random() * (10 - 1) + 1))
// }
// for (i = 0; i < elements.length; i++){
//     switch(elements[i]){
//         case 1: 
//         num1++
//         break
//         case 2: 
//         num2++
//         break
//         case 3: 
//         num3++
//         break
//         case 4: 
//         num4++
//         break
//         case 5: 
//         num5++
//         break
//         case 6: 
//         num6++
//         break
//         case 7: 
//         num7++
//         break
//         case 8: 
//         num8++
//         break
//         case 9: 
//         num9++
//         break
//     }
// }
// alert(`Hay ${num1} numeros 1, ${num2} numeros 2, ${num3} numeros 3, ${num4} numeros 4, ${num5} numeros 5, ${num6} numeros 6, ${num7} numeros 7, ${num8} numeros 8 y ${num9} numeros 9`)

//Ejercicio 15
let numeros = []
let usuario = 
while(numeros >= 0){
    numeros.push(parseFloat(prompt(`Introduzca numero decimal o entero`)))

}