fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => showCharacters(data.results));
let contenedor = document.getElementById("cards");

function showCharacters(characters) {
  contenedor.innerHTML = "";

  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];

    contenedor.innerHTML += `
      <div>
        <h1>${character.name}</h1>
        <img src="${character.image}" alt="${character.name}" />
      </div>`;
  }
}
