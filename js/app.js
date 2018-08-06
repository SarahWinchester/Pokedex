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
        // console.log(response);
        filling(response);
    })
};    

//it had the 20 names of the pokemons 
$(document).ready( function getAllPokemon() { 
    let pokeApiUrlPokemon = "https://pokeapi.co/api/v2/pokemon/";
    $.ajax({
        url: pokeApiUrlPokemon,
        type: "GET",
        crossDomain: true,
    }).done(function(responseNameMain) {
       
        fillingMain(responseNameMain);
        })
});

//All cards first 20 pokemon reponse Main had all 20 first pokemon and response To main the info for each of them 
function fillingMain (responseNameMain) {
    // for (let i = 0; i< (responseNameMain.results).length ; i++) {
    //     console.log(responseNameMain.results[i].name);  

        let pokeTemplateMainActive =  `<div class="col-8 offset-2 pokemonBox">
        <div class="row">
        <div  class="col-5 pokemonName titles">{{pokeNameMain}}</div>
        <div class="col-4 offset-3 PokemonNumber titles">#{{pokeIdMain}}</div>
        </div>
        <div class="row">
        <div id="pokemonImageBox" class="col-12 text-center"><img height="250" width="250" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`+((0)+1)+`.png" class="image" alt="" srcset=""></div>
        </div>
        </div>`
        let mainTemplateForActive = pokeTemplateMainActive.replace("{{pokeNameMain}}",responseNameMain.results[0].name)
        .replace("{{pokeIdMain}}", (0)+1  );      
        // console.log(mainTemplateForActive);
        $('#onload-Active-Carrousel').html(mainTemplateForActive);
    
    for (let i = 1; i < (responseNameMain.results).length; i++) {
            console.log(responseNameMain.results[i].name);       
        let other19Pokemons = `<div class="col-8 offset-2 pokemonBox">
            <div class="row">
            <div  class="col-5 pokemonName titles">{{pokeNameMain19}}</div>
            <div class="col-4 offset-3 PokemonNumber titles">#{{pokeIdMain19}</div>
            </div>
            <div class="row">
            <div id="pokemonImageBox" class="col-12 text-center"><img height="250" width="250" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`+((i)+1)+`.png" class="image" alt="" srcset=""></div>
            </div>
            </div>`
            let mainTemplateForItems = other19Pokemons.replace("{{pokeNameMain}}",responseNameMain.results[i].name)
                                        .replace("{{pokeIdMain19}}", (i)+1  );   
                                    console.log((i)+1);   
            console.log(mainTemplateForItems);
            $('#onload-Item-Carrousel').html(mainTemplateForItems);
        
    }
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
    // console.log(response);
    // console.log(response.name);
    // console.log(response.id);

    let initialTemplate = pokeTemplate.replace("{{pokeName}}",response.name)
    .replace("{{pokeId}}", response.id);      
    // console.log(initialTemplate);
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
    // console.log(response);
    // console.log(response.name);
    // console.log(response.id);
    // console.log(response.types[0].type.name);
    
    // console.log(response.weight);
    // console.log(response.height);
    // console.log(response.abilities[0].ability.name);
    // console.log(response.abilities[1].ability.name)
    
    let secondCarouselTemplateReplace = pokeTemplateSecondCarousel.replace("{{pokeName}}",response.name)
    .replace("{{pokeId}}", response.id)
    .replace("{{weight}}", response.weight)
    .replace("{{height}}", response.height)
    .replace("{{ability}}" , response.abilities[0].ability.name)
    .replace("{{secondAbility}}", response.abilities[1].ability.name);
    
    // console.log(response.types); 
    // //object    
    // console.log(secondCarouselTemplateReplace);
    $('#carrouselItem').html(secondCarouselTemplateReplace);   
    
    for (let i = 0; i < (response.types).length; i++) {
        console.log("for");
        if(response.types[i].type.name == "electric"){
            $("#pokemonTypeBadges").append(`<span class="badge electric"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "normal") {
            $("#pokemonTypeBadges").append(`<span class="badge normal"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "fighting") {
            $("#pokemonTypeBadges").append(`<span class="badge fighting"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "flying") {
            $("#pokemonTypeBadges").append(`<span class="badge flying"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "poison") {
            $("#pokemonTypeBadges").append(`<span class="badge poison"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "ground") {
            $("#pokemonTypeBadges").append(`<span class="badge ground"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "rock") {
            $("#pokemonTypeBadges").append(`<span class="badge rock"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "bug") {
            $("#pokemonTypeBadges").append(`<span class="badge bug"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "ghost") {
            $("#pokemonTypeBadges").append(`<span class="badge ghost"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "steel") {
            $("#pokemonTypeBadges").append(`<span class="badge steel"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "fire") {
            $("#pokemonTypeBadges").append(`<span class="badge fire"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "water") {
            $("#pokemonTypeBadges").append(`<span class="badge water"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "grass") {
            $("#pokemonTypeBadges").append(`<span class="badge grass"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "psychic") {
            $("#pokemonTypeBadges").append(`<span class="badge psychic"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "ice") {
            $("#pokemonTypeBadges").append(`<span class="badge ice"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "dragon") {
            $("#pokemonTypeBadges").append(`<span class="badge dragon"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "dark") {
            $("#pokemonTypeBadges").append(`<span class="badge dark"> ${response.types[i].type.name}</span>`);
        }
        if (response.types[i].type.name == "fairy") {
            $("#pokemonTypeBadges").append(`<span class="badge fairy"> ${response.types[i].type.name}</span>`);
        }                               
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