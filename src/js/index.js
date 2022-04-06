const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
console.log(listaSelecaoPokemons); 

const pokemonsCard = document.querySelectorAll('.cartao-pokemon');
console.log(pokemonsCard);


listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', ()=>{
        
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto') 

        const idPokemonSelecionado = pokemon.attributes.id.value; 
        
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado); 

        cartaoPokemonParaAbrir.classList.add('aberto'); 

        const pokemonAtivoNaListagem = document.querySelector('.ativo');
        pokemonAtivoNaListagem.classList.remove('ativo');

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado); 
        pokemonSelecionadoNaListagem.classList.add('ativo');


    })
}) 
