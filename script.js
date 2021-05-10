const button=document.getElementById("run");
let pokemonID;
function getID() {
    button.addEventListener("click", function () {
        pokemonID = document.getElementById("input").value;
        getPokemon();

    });
}
getID();


function capitalizeLTR(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


async function getPokemon() {
    let api_url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
    const response = await fetch(api_url);
    const data = await response.json();
    const { name, id, sprites } = data;
    document.getElementById("output_name").textContent = `Name: ${capitalizeLTR(name)}`;
    document.getElementById("output_id").textContent = `ID: #${id}`;
    document
        .getElementById("output_img")
        .setAttribute("src", `${sprites.front_default}`);


    for (let i = 1; i < 6; i++) {
        let moves = data.moves[i * 6].move.name;
        let movesLocation = document.getElementById(`move_${i}`);
        movesLocation.textContent = moves;
        movesLocation.style.display = "block";
    }
}