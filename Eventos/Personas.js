let persons = [
  {
    nombre: "Lucía Fernández",
    imagen: "https://randomuser.me/api/portraits/women/44.jpg",
    edad: 29,
    email: "lucia.fernandez@example.com",
    direccion: "Calle Alcalá 120, 28009 Madrid",
    colorOjos: "Marrón",
  },
  { 
    nombre: "Carlos Martín",
    imagen: "https://randomuser.me/api/portraits/men/32.jpg",
    edad: 41,
    email: "carlos.martin@example.com",
    direccion: "Avenida de la Constitución 8, 41004 Sevilla",
    colorOjos: "Verde",
  },
  {
    nombre: "Marta Soler",
    imagen: "https://randomuser.me/api/portraits/women/68.jpg",
    edad: 35,
    email: "marta.soler@example.com",
    direccion: "Carrer de Balmes 55, 08007 Barcelona",
    colorOjos: "Azul",
  },
  {
    nombre: "Javier Ortega",
    imagen: "https://randomuser.me/api/portraits/men/75.jpg",
    edad: 23,
    email: "javier.ortega@example.com",
    direccion: "Gran Vía 30, 48009 Bilbao",
    colorOjos: "Negro",
  },
]
const colores = {
  "Marrón": "saddlebrown",
  "Verde": "green",
  "Azul": "royalblue",
  "Negro": "black"
}

function search() {
    let nameSearch = document.getElementById("my-input").value.toLowerCase()
    let names = persons.find(p => p.nombre.toLowerCase().includes(nameSearch))
    
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

//Parte 4
function personById() {
  let indice = Number(document.getElementById("my-input").value)
  let person = persons[indice]

  if (person) {
    contenedor.innerHTML = `<p>${person.nombre}</p>`
  } else {
    contenedor.innerHTML = `<p>Persona no encontrada</p>`
  }
}
