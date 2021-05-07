
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeImage = document.querySelector('.poke-image');
const pokeMoveOne = document.querySelector('.poke-move-one');
const pokeMoveTwo = document.querySelector('.poke-move-two');
const pokeMoveThree = document.querySelector('.poke-move-three');
const pokeMoveFour = document.querySelector('.poke-move-four');


const api_url = ('https://pokeapi.co/api/v2/pokemon/1');

async function fetchPokemon() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);

fetchPokemon();
