const token = '7fR6bW9aUM4jKerXc2sy';
const headers =  {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        fetch("https://the-one-api.dev/v2/character", headers)
        .then((response) => {
            return response.json();
        })
        .then((data) => showCharacters(data.docs));


let contenedor = document.getElementById("cards");

function showCharacters(list) {
  const container = document.getElementById("cards");
  container.innerHTML = "";
  list.forEach(c => {
    container.innerHTML += `
      <div class="card">
        ${c.image
          ? `<img src="${c.image}" alt="${c.name}" referrerpolicy="no-referrer">`
          : `<div class="noimg">No picture</div>`}
        <h3>${c.name}</h3>
      </div>`;
  });
}