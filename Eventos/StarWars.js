fetch("https://swapi.dev/api/planets/").then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    let planets = data.results;
    console.log(planets);
});