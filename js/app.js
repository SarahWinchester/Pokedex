//bring all IDs
const pokeTemplate1 = $('#pokeTemplate1').innerHTML;
const pokeTemplate2 = $('#pokeTemplate2').innerHTML;
const pokemonInput = $('#findingPokemon');

//callingPokemons

function getPokemon(search) { 
    let pokeApiUrlPokemon = "https://pokeapi.co/api/v2/pokemon/"+ search;
    $.ajax({
        url: pokeApiUrlPokemon,
        type: "GET",
        crossDomain: true,
        }).done(function(response) {
            console.log(response);
            filling(response);
        });
}

//filling spaces
function filling (response){
    $.each(response, function(){
        
    })

}


    
//input search
$(document).ready(function() {
    $('#searchButton').click(function(){
        var search = $('#findingPokemon').val();
        console.log(search);
        getPokemon(search)
    
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