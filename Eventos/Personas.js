let persons = {
  lucia: {
    nombre: "Lucía Fernández",
    imagen: "https://randomuser.me/api/portraits/women/44.jpg",
    edad: 29,
    email: "lucia.fernandez@example.com",
    direccion: "Calle Alcalá 120, 28009 Madrid",
    colorOjos: "Marrón",
  },
  carlos: {
    nombre: "Carlos Martín",
    imagen: "https://randomuser.me/api/portraits/men/32.jpg",
    edad: 41,
    email: "carlos.martin@example.com",
    direccion: "Avenida de la Constitución 8, 41004 Sevilla",
    colorOjos: "Verde",
  },
  marta: {
    nombre: "Marta Soler",
    imagen: "https://randomuser.me/api/portraits/women/68.jpg",
    edad: 35,
    email: "marta.soler@example.com",
    direccion: "Carrer de Balmes 55, 08007 Barcelona",
    colorOjos: "Azul",
  },
  javier: {
    nombre: "Javier Ortega",
    imagen: "https://randomuser.me/api/portraits/men/75.jpg",
    edad: 23,
    email: "javier.ortega@example.com",
    direccion: "Gran Vía 30, 48009 Bilbao",
    colorOjos: "Negro",
  },
}
function search() {
    let nameSearch = document.getElementById("my-input").value.toLowerCase()
    let names = persons[nameSearch]
    
    if (names) {
        contenedor.innerHTML = `
        <div>
        <h1>${names.nombre}</h1>
        <img src="${names.imagen}" alt="${names.nombre}" />
        <p>Edad: ${names.edad}</p>
        <p>Email: ${names.email}</p>
        <p>Address: ${names.direccion}</p>
        <p>Eye Colour: ${names.colorOjos}</p>
        </div>`
    } else {
        contenedor.innerHTML = `<p>Persona no encontrada</p>`
    }
}
window.addEventListener("keydown", (event) => {
    if (event.key == "Enter") search()
    })
let contenedor = document.getElementById("Ejercicios")
// function search() {
//     let nameSearch = document.getElementById("my-input").value.toLowerCase()
//     let names = persons[nameSearch]
    
//     if (names) {
//         contenedor.innerHTML = `
//         <div>
//         <h1>${persons.nombre}</h1>
//         <img src="${persons.imagen}" alt="${planet.nombre}" />
//         <p>Edad: ${persons.edad}</p>
//         <p>Email: ${persons.email}</p>
//         <p>Address: ${persons.direccion}</p>
//         <p>Eye Colour: ${persons.colorOjos}</p>
//         </div>`
//     } else {
//         contenedor.innerHTML = `<p>Persona no encontrada</p>`
//     }
// }
// window.addEventListener("keydown", (event) => {
//     if (event.key == "Enter") search()
//     })
// let contenedor = document.getElementById("Ejercicios")

