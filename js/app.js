//bring all IDs

let pokemonInput = $('#findingPokemon');

//callingPokemons

function getPokemon(search) { 
    let pokeApiUrlPokemon = "https://pokeapi.co/api/v2/pokemon/"+ search;
    $.ajax({
        url: pokeApiUrlPokemon,
        type: "GET",
        crossDomain: true,
    }).done(function(response) {
        console.log(response);
        filling(response , search);
    });
}

//filling spaces
function filling (response, search){
    console.log(response);
    console.log(response.name);
    console.log(response.id);
    let pokeTemplate1 = $('#pokemonBox1');
    console.log(pokeTemplate1);
    let initialTemplate = "";
    initialTemplate += pokeTemplate1.replace("{{pokeName}}",response.name)
                                .replace("{{pokeId}}", response.id);      
    pokeTemplate1.innerHTML = initialTemplate;

        
    }
    




//input search
$(document).ready(function() {
    $('#searchButton').click(function(){
        var search = $('#findingPokemon').val();
        console.log(search);
        getPokemon(search);
        
        
    })
});



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