//bring all IDs
const pokeTemplate1 = document.getElementById('pokeTemplate1').innerHTML;
const pokeTemplate2 = document.getElementById('pokeTemplate2').innerHTML;
const pokeApiUrl = "https://pokeapi.co/api/v2/generation/1/"

$.getJSON(pokeApiUrl, function(data){
    console.log(data);
})
    
