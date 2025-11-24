const pokedexContainer = document.getElementById('pokedex-container');
const searchBar = document.getElementById('search-bar');

let pokemonData = [];

// 1. Fetch Function
const fetchPokemon = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200');
        const data = await res.json();

        pokemonData = data.results.map((data, index) => {
            const id = index + 1;
            return {
                name: data.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            };
        });
        
        // CHANGE: We removed the line "displayPokemon(pokemonData);" here.
        // This ensures the page stays blank when it first loads.

    } catch (err) {
        console.error("Error fetching data:", err);
    }
};

// 2. Display Function
const displayPokemon = (pokemonList) => {
    // If no matches found
    if (pokemonList.length === 0) {
        pokedexContainer.innerHTML = '<p style="text-align:center; width:100%;">No Pokémon found.</p>';
        return;
    }

    const htmlString = pokemonList
        .map((pokemon) => {
            return `
            <div class="card">
                <img src="${pokemon.image}" alt="${pokemon.name}">
                <h3>${pokemon.name}</h3>
            </div>
        `;
        })
        .join('');
    
    pokedexContainer.innerHTML = htmlString;
};

// 3. Search Functionality
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    // CHANGE: If the search bar is empty, clear the screen
    if (searchString === "") {
        pokedexContainer.innerHTML = ""; 
        return; // Stop the function here
    }

    // Otherwise, filter and display matches
    const filteredPokemon = pokemonData.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchString);
    });

    displayPokemon(filteredPokemon);
});

// Initial Call
fetchPokemon();