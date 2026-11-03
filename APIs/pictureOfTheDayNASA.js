const apiKey = 'WJjzJcfLTnt6Kp8BLqbQNGbCJQCTwL8f7NwNwj9j';
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

function searchByDate() {

  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  const date = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => showPicture(data));
}

function showPicture(data) {
  document.getElementById("card").innerHTML = `
    <p>${data.date}</p>
    <h2>${data.title}</h2>
    <img src="${data.image}" alt="${data.title}" />
    <p>${data.explanation}</p>`;
}