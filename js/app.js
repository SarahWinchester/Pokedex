//bring all IDs
const pokeTemplate1 = $('#pokeTemplate1').innerHTML;
const pokeTemplate2 = $('#pokeTemplate2').innerHTML;
const pokemonInput = $('#findingPokemon')
// const pokeApiUrlGen = "https://pokeapi.co/api/v2/generation/1/"
const pokeApiUrlPokemon = "http://pokeapi.co/api/v2/pokemon/"+pokemonInput;

function getPokemon() {
    $.getJSON(pokeApiUrlPokemon, function(data){
        console.log(data);
    })
}

// $.getJSON(pokeApiUrl, function(data){
//     console.log(data);
// })
//filling all templates
// function getPokemon(e){
//     for (const key in e) {
//         let filled ="";
//        console.log(key);
//        let value = data[key];
//        console.log(value);
       
//        filled += pokeTemplate1.replace("{{name}}", value.name)
//        pokemonBox.innerHTML+=filled;
//       }
// }
    
//input search
$(document).ready(function(inputval) {
    $('#searchButton').click(function(){
        let searchTxt = pokemonInput.val;
        console.log(searchTxt);
        
        // $.each(data.pokemon_species, function(){
        //     if(pokemon_species.name == searchTxt){
        //         const name = pokemon_species.name
        //     }
        // })
    
    })
    getPokemon(inputval);
});
