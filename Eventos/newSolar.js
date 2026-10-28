let sistemaSolar = {
  mercurio: {
    nombre: "Mercurio",
    color: "Gris",
    temperatura: 350,
    imagen: "https://content.nationalgeographic.com.es/medio/2022/07/31/el-planeta-mercurio_c7bafef8_1280x720.jpg",
  },
  venus: {
    nombre: "Venus",
    color: "Blanco",
    temperatura: 460,
    imagen:
      "https://content.nationalgeographic.com.es/medio/2022/07/31/el-planeta-venus_de3a3995_1280x1280.jpg",
  },
  tierra: {
    nombre: "Tierra",
    color: "Morado",
    temperatura: 14,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL52Hzkw6Ix00O1HORLh9yOFsdGBBzTM5i3sX9RC2-pw&s=10",
  },
  marte: {
    nombre: "Marte",
    color: "Rojo",
    temperatura: -46,
    imagen:
      "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc5/Planet-Mars-Image-source-Digital-Vision.jpg",
  },
  jupiter: {
    nombre: "Júpiter",
    color: "Marrón",
    temperatura: -121,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter_OPAL_2024.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",
  },
  saturno: {
    nombre: "Saturno",
    color: "Amarillo",
    temperatura: -130,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1szC9whwXWUD6eTwcY-GHy4w4-WvXcoC6hXYA6BzHg&s",
  },
  urano: {
    nombre: "Urano",
    color: "Azul",
    temperatura: -205,
    imagen: "https://a.files.bbci.co.uk/worldservice/live/assets/images/2014/09/01/140901154302_urano_planeta_624x351_spl.jpg",
  },
  neptuno: {
    nombre: "Neptuno",
    color: "Azul",
    temperatura: -220,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Neptune_Voyager2_color_calibrated.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",
  },
  pluton: {
    nombre: "Plutón",
    color: "Blanco",
    temperatura: -229,
    imagen:
      "https://static.wikia.nocookie.net/espacio/images/e/e6/Plut%C3%B3n.jpg/revision/latest?cb=20210131222438&path-prefix=es",
  },
};
let contenedor = document.getElementById("Ejercicios")


        //     <div>
        //         <img src=${sistemaSolar[planeta].imagen} alt="${sistemaSolar[planeta].nombre}"/>
        //         <h1>${sistemaSolar[planeta].nombre}</h1>
        //         <p>Color: ${sistemaSolar[planeta].color}</p>
        //         <p>Temperatura: ${sistemaSolar[planeta].temperatura} °C</p>
        //     </div>
        // `

function search(){
    console.log("hola")
    let planetToSearch = document.getElementById("my-input").value.toLowerCase()
    console.log(planetToSearch)
}
window.addEventListener("keydown", (event)=> {
    if(event.key=="enter")search()
})