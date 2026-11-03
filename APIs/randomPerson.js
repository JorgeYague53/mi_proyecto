
fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => showRandom(data.results[0])); //Preguntar por que el "0"

let contenedor = document.getElementById("cards");

function showRandom(person) {
  contenedor.innerHTML = `
    <div>
      <img src="${person.picture.thumbnail}" alt="${person.name.first}" />
      <p>${person.name.title} ${person.name.first} ${person.name.last}</p>
      <p>${person.email}</p>
      <p>${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} ${person.location.postcode}</p>
    </div>`;
}

