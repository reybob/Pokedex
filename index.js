const URL = 'https://pokeapi.co/api/v2/pokemon/';

async function init() {
    const pokemon = await getPokemonById(25)
    updatePokemon(pokemon)
    console.log(pokemon)
}

async function getPokemonById(id) {
    return await fetch(`${URL}${id}`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}

function updatePokemon(pokemon) {
    window.pokemon.textContent = pokemon.name
    window.image.setAttribute('src', pokemon.sprites.front_default)
}

window.search.addEventListener('change', async () => {
    const pokemon = await getPokemonById(window.search.value.toLowerCase())
    updatePokemon(pokemon)
})


init();