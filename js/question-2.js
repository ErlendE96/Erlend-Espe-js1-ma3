const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b9d1c01fbaf640949478276f1fd9fd59";

const resultsContainer = document.querySelector(".results");

async function rawg() {

    const response = await fetch(url);

    const info = await response.json();

    const result = info.results;

    for (let i = 0; i < result.length; i++) {
        if (i === 8) {
            break;
        }    
    }
    resultsContainer.innerHTML += `<div class="result">${result}</div>`;

}
rawg();