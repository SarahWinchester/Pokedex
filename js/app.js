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
        filling(response);
    });
}


//filling spaces 
//first active carousel
function filling (response){
    let pokeTemplate =  `<div id="pokemonBox1" class="col-8 offset-2 pokemonBox">
    <div class="row">
    <div  class="col-5 pokemonName titles">{{pokeName}}</div>
    <div class="col-4 offset-3 PokemonNumber titles">#{{pokeId}}</div>
    </div>
    <div class="row">
    <div id="pokemonImageBox" class="col-12 text-center"><img height="250" width="250" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`+response.id+`.png" class="image" alt="" srcset=""></div>
    </div>
    </div>`
    console.log(response);
    console.log(response.name);
    console.log(response.id);
    let initialTemplate = pokeTemplate.replace("{{pokeName}}",response.name)
    .replace("{{pokeId}}", response.id);      
    console.log(initialTemplate);
    $('#active-carousel').html(initialTemplate);
    
  //  Second carousel 
    let pokeTemplateSecondCarousel = `<div id="pokeTemplate2" class="col-8 offset-2 pokemonBox">
    <div class="row">
    <div class="col-5 pokemonName titles">{{pokeName}}</div>
    <div class="col-4 offset-3 PokemonNumber titles">#{{pokeId}}</div>
    </div>
    <!--Tipos-->
    <div class="row">
    <div id="pokemonTypeBadges" class="col-12 titles">type</div>

    </div>  
    <!--sprites Title-->
    <div class="row">
    <div id="pokemonSpriteTitle" class="col-6  titles	">Normal</div>
    <div id="pokemonSpriteTitle" class="col-6  titles	">Shiny </div>
    </div>
    <!--sprites -->
    <div class="row">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`+response.id+`.png" alt="" class="col-6">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/`+response.id+`.png" alt="" class="col-6">
    </div>
    
    
    <!--Detalles Titulos-->
    <div class="row">
    <div id="pokemonweightTitle" class="col-6  titles">weight</div>
    <div id="pokemonHeightTitles" class="col-6  titles">height</div>
    </div>
    <!--Resultado de detalles-->
    <div class="row">
    <div id="pokemonWeight" class="col-6 ">{{weight}}</div>
    <div id="pokemonHeight" class="col-6 ">{{height}}</div>
    </div>
    <!--Detalles 2 Titulos-->
    <div class="row">
    <div id="pokemonAbilityTitle" class="col-6  titles">Ability</div>
    <div id="pokemonSecondaryAbilityTitle" class="col-6 titles">Ability</div>
    </div>
    <!--Detalles 2 -->
    <div class="row">
    <div id="pokemonAbility" class="col-6">{{ability}}</div>
    <div id="pokemonSecondaryAbility" class="col-6 ">{{secondAbility}}</div>
    </div>
    </div>`
    console.log(response);
    console.log(response.name);
    console.log(response.id);
    console.log(response.types[0].type.name);
    
    console.log(response.weight);
    console.log(response.height);
    console.log(response.abilities[0].ability.name);
    console.log(response.abilities[1].ability.name)
    
    let secondCarouselTemplateReplace = pokeTemplateSecondCarousel.replace("{{pokeName}}",response.name)
    .replace("{{pokeId}}", response.id)
    
    // .replace("{{type2}}", response.types[1].type.name)
    // .replace("{{type3}}", response.types[2].type.name)
    // .replace("{{type4}}", response.types[3].type.name)
    .replace("{{weight}}", response.weight)
    .replace("{{height}}", response.height)
    .replace("{{ability}}" , response.abilities[0].ability.name)
    .replace("{{secondAbility}}", response.abilities[1].ability.name);

    console.log(response.types); //object    
    console.log(secondCarouselTemplateReplace);
    $('#carrouselItem').html(secondCarouselTemplateReplace);   

    for (let i = 0; i < (response.types).length; i++) {
        console.log("for");
        $("#pokemonTypeBadges").append(`<span id="pokeType1" class="badge badge-primary">${response.types[i].type.name}</span>`);
    }                                    
}
//input search
$(document).ready(function() {
    $('#searchButton').click(function(){
        var search = $('#findingPokemon').val();
        console.log(search);
        getPokemon(search);
        
        
    })
});