fetch("https://swapi.dev/api/planets/").then((response) => {
    return response.json();
}).then((data) => showPlanets(data.results));

let contenedor = document.getElementById("cards");
let select = document.getElementById("planetas")

function showPlanets(planets) {
    for (let i = 0; i < planets.length; i++) {
        let planet = planets[i];
        select.innerHTML += `<option value="${planet.url}">${planet.name}</option>`;
    }
}

                                                   
select.addEventListener("change", () => {                                            // Runs every time the user picks a different option
    contenedor.innerHTML = "";
    select.addEventListener("change", function () {
        contenedor.innerHTML = "";                                                    // 1. Clear the old characters
        if (select.value != "") {                                                     // 2. If the user picked the empty option, do nothing
            fetch(select.value)                                                       // 3. Ask for the selected planet
                .then((response) => response.json())
                .then((planet) => showResidents(planet.residents));
        }
    })
});

function showResidents(residents) {
    if (residents.length == 0) {                                                     // 4. If the planet has no characters, show a message
        contenedor.innerHTML = "<p>No hay personajes en este planeta.</p>";
    }
    for (let i = 0; i < residents.length; i++) {                                     // 5. Go through each character URL, one by one
        fetch(residents[i])
            .then((response) => response.json())
            .then((character) => {
                contenedor.innerHTML += `<h3>${character.name}</h3>`;
            });
    }
}
// https://the-one-api.dev/
// 7fR6bW9aUM4jKerXc2sy