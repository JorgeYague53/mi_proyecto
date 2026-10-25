// let coche = {
//     Coloro: "Rojo",
//     Marca: "Ford",
//     Modelo: "Focus",
//     Motor: "Cilindros: 4, Capacidad: 2.2"

// }
// console.log(coche)

//Ejercicio 2
// let yo = {
//     Nombre: "Jorge",
//     Edad: "28"
// }
// console.log(yo)
// yo.Altura = "1.83"
// console.log(yo)

//Ejercicio 4
// let randomObject = {
//     Board: "Broken"
// }
// randomObject.Name = prompt("Deme su nombre")
// console.log(randomObject)

//Ejercicio 6
let persons = {
    Jorge: {
        Age: 28,
        Email: "alcaparra53@gmail.com",
        Home: "Madrid",
        Photo: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    Alber: {
        Age: 34,
        Email: "alcaparra53@gmail.com",
        Home: "Madrid",
        Photo: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    Alberto: {
        Age: 64,
        Email: "alcaparra53@gmail.com",
        Home: "Madrid",
        Photo: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    Anabel: {
        Age: 66,
        Email: "alcaparra53@gmail.com",
        Home: "Madrid",
        Photo: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    Sarah: {
        Age: 26,
        Email: "alcaparra53@gmail.com",
        Home: "Manchester",
        Photo: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    Manolo: {
        Age: 48,
        Email: "alcaparra53@gmail.com",
        Home: "Colmenar",
        Photo: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    Juan: {
        Age: 24,
        Email: "alcaparra53@gmail.com",
        Home: "Ecuador",
        Photo: "https://randomuser.me/api/portraits/men/12.jpg"
    }
}
let nombre = prompt("¿De qué persona quieres ver los datos?")
let contenedor = document.getElementById("Ejercicios")

if (persons[nombre]) {
    contenedor.innerHTML = `
        <img src="${persons[nombre].Photo}" alt="${nombre}">
        <h1>${nombre}</h1>
        <p>Age: ${persons[nombre].Age}</p>
        <p>Email: ${persons[nombre].Email}</p>
        <p>Address: ${persons[nombre].Home}</p>
    `
} else {
    contenedor.innerHTML = `<p>No se han encontrado datos de esa persona</p>`
}
