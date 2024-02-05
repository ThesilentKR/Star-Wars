const planets = [
    { name: "Tatooine", description: "Posiblemente uno de los planetas más conocidos del universo Star Wars. Hogar de Luke y de su padre antes que él, Tatooine es un lugar desértico donde menos del 1% de la superficie está cubierto de agua, y ésta se consigue mediante las granjas de humedad como la de Owen Lars que la extraen de la atmósfera. Sus soles gemelos son un icono dentro de la saga.", image: "https://custom.swcombine.com/static/8/632-large-1675095606.png" },
    { name: "Coruscant", description: "Es el planeta que ejerce de centro del universo y de capital en la época de la república y más tarde durante el Imperio. La vemos brevemente en una de las ediciones del Retorno del Jedi, pero sería constantemente revisitada en la trilogía de precuelas ya que es donde se encuentra el Templo Jedi.", image: "images/curstan.png" },
    { name: "Endor", description: "Es un gigante gaseoso, pero lo que vimos realmente en el Retorno del Jedi es una de sus nueve lunas, la más grande de ellas a la que nos solemos referir como la Luna Santuario o la luna de Endor. Un satélite boscoso que era el hogar de los Ewoks", image: "images/endor.png" },
    { name: "Mustafar", description: "Planeta volcánico situado en el sistema homónimo, es el centro de operaciones separatistas al final de las Guerras Clon y lugar del duelo entre Obi-Wan y su aprendiz, también es el lugar en el que Vader recibiría sus heridas. Durante la era imperial sirvió como santuario de Lord Vader ya que era el sitio de su mayor derrota y también como bastión de los inquisidores.", image: "images/mustafar.png" },
    { name: "Pasaana", description: "Planeta desértico donde Rei obtiene la daga en el Episodio IX y donde se esconde Lando.", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f4c4b7d-a2ad-49a4-ad0d-2327cab52046/ddstqnv-e8414737-1c58-45b3-b804-b54487ed4dc4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmNGM0YjdkLWEyYWQtNDlhNC1hZDBkLTIzMjdjYWI1MjA0NlwvZGRzdHFudi1lODQxNDczNy0xYzU4LTQ1YjMtYjgwNC1iNTQ0ODdlZDRkYzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2RkaRZ-h-Th_hWb5-W0uiW6wLiYquNqs3-1BshWWKiU" },
];

const planetContainer = document.getElementById("planet-container");
const spotifyWidget = document.getElementById("spotify-widget");

let currentPlanetIndex = 0;

function showCurrentPlanet() {
    const planet = planets[currentPlanetIndex];
    const planetCard = document.createElement("div");
    planetCard.classList.add("card", "planet-card");
    planetCard.innerHTML = `
        <img src="${planet.image}" class="card-img-top img-fluid" alt="${planet.name}">
        <div class="card-body">
            <h5 class="card-title text-white">${planet.name}</h5>
            <p class="card-text ">${planet.description}</p>
        </div>
    `;

    planetContainer.innerHTML = '';
    planetContainer.appendChild(planetCard);
}

function rotatePlanet(direction) {
    currentPlanetIndex = (currentPlanetIndex + direction + planets.length) % planets.length;
    showCurrentPlanet();
}

window.addEventListener("DOMContentLoaded", () => {
    showCurrentPlanet();
    window.addEventListener("wheel", (event) => {
        event.preventDefault();
        const direction = event.deltaY > 0 ? 1 : -1;
        rotatePlanet(direction);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const introContainer = document.querySelector(".intro-container");
    const planetContainer = document.querySelector("#planet-container");
    const spotifyWidget = document.getElementById("spotify-widget");

    planetContainer.style.display = "none";
    spotifyWidget.style.display = "none";

    setTimeout(() => {
        introContainer.style.display = "none";
        planetContainer.style.display = "block";
        spotifyWidget.style.display = "block";
    }, 3000); 
});

function closeSpotifyWidget() {
    const spotifyWidget = document.getElementById("spotify-widget");
    spotifyWidget.style.display = "none";
}


