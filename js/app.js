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
    .replace("{{pokeId}}", response.id)
    // .replace("{{pokeSprite}}", response.sprite.front_default)
    ;      
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
    <span id="pokeType1" class="badge badge-primary">{{type1}}</span>
    <span id="pokeType2"  class="badge badge-secondary">{{type2}}</span>
    <span id="pokeType3"  class="badge badge-success">{{type3}}</span>
    <span id="pokeType4"  class="badge badge-success">{{type4}}</span>
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

    if (typeof response.types[0]  != "undefined") {
        
        secondCarouselTemplateReplace = secondCarouselTemplateReplace.replace("{{type1}}", response.types[0].type.name);
    }
    if (typeof response.types[1]  != "undefined"){
        secondCarouselTemplateReplace = secondCarouselTemplateReplace.replace("{{type2}}", response.types[1].type.name); 
    }
    if (typeof response.types[2]  != "undefined"){
        secondCarouselTemplateReplace = secondCarouselTemplateReplace.replace("{{type3}}", response.types[2].type.name);
    }   
    if (typeof response.types[3]  != "undefined"){
        secondCarouselTemplateReplace = secondCarouselTemplateReplace.replace("{{type4}}", response.types[3].type.name);
    }                
    
    
    console.log(secondCarouselTemplateReplace);
    $('#carrouselItem').html(secondCarouselTemplateReplace);                                       
}





//input search
$(document).ready(function() {
    $('#searchButton').click(function(){
        var search = $('#findingPokemon').val();
        console.log(search);
        getPokemon(search);
        
        
    })
});