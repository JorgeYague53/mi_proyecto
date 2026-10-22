let alumnos = []
let notas = []

for (let i = 0; i < 3; i++) {
    alumnos.push(prompt(`Nombre del alumno ${i + 1}`))

    let nota = parseFloat(prompt(`Nota de ${alumnos[i]}`))
    while (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Nota no válida")
        nota = parseFloat(prompt(`Nota de ${alumnos[i]}`))
    }
    notas.push(nota)
}
// Media de la clase
let suma = 0
for (let i = 0; i < notas.length; i++) {
    suma += notas[i]
}
let media = suma / notas.length
console.log(`Media de la clase: ${media}`)

// Alumnos con nota mayor que la media
console.log("Alumnos con nota superior a la media:")
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        console.log(`${alumnos[i]} - ${notas[i]}`)
    }
}

// Nota máxima y quién la ha conseguido
let max = notas[0]
let min = notas[0]
for (let i = 1; i < notas.length; i++) {
    if (notas[i] > max) max = notas[i]
    if (notas[i] < min) min = notas[i]
}

console.log(`Nota máxima: ${max}`)
for (let i = 0; i < notas.length; i++) {
    if (notas[i] === max) {
        console.log(`  ${alumnos[i]}`)
    }
}

// Nota mínima y quién la ha conseguido
console.log(`Nota mínima: ${min}`)
for (let i = 0; i < notas.length; i++) {
    if (notas[i] === min) {
        console.log(`  ${alumnos[i]}`)
    }
}

// Lista completa
console.log("Lista de alumnos:")
for (let i = 0; i < alumnos.length; i++) {
    alert(`${alumnos[i]} - ${notas[i]}`)
}