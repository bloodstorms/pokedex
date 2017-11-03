var pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard",
"Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna",
"Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans",
"Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran-f","Nidorina","Nidoqueen","Nidoran-m",
"Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff",
"Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett",
"Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine",
"Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp",
"Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem",
"Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio",
"Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee",
"Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee",
"Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea"
,"Seadra","Goldeen","Seaking","Staryu","Starmie","Mr.Mime","Scyther","Jynx","Electabuzz","Magmar",
"Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon",
"Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini",
"Dragonair","Dragonite","Mewtwo","Mew"];

document.addEventListener("DOMContentLoaded", function(event) {
 document.getElementById('nb').value = 1;
 document.getElementById("info-screen").innerHTML = pokemonList[0];
 document.getElementById('screen').getElementsByTagName('img')[0].src = "img/pokedex/pokemon/" + pokemonList[0] + ".jpg";
});

function getElemPokemonList() {
  document.getElementById("info-screen").innerHTML = pokemonList[idPokemon]
}

function getElemIdPokemon() {
  if(idPokemon < (pokemonList.length)) {
    document.getElementById('nb').value = idPokemon + 1;
  } else {
    document.getElementById('nb').value = idPokemon;
  }
}

var idPokemon = 0;

function increaseIdPokemon() {
  if(idPokemon < pokemonList.length - 1) {
    idPokemon++;
  } else {
    idPokemon = 0;
  }
  getElemIdPokemon();
  getElemPokemonList();
  document.getElementById('screen').getElementsByTagName('img')[0].src = "img/pokedex/pokemon/" + pokemonList[idPokemon] + ".jpg";
}

function decreaseIdPokemon() {
  if(idPokemon > 0) {
    idPokemon--;
  } else {
    idPokemon = pokemonList.length - 1;
  }
  getElemIdPokemon()
  getElemPokemonList()
  document.getElementById('screen').getElementsByTagName('img')[0].src = "img/pokedex/pokemon/" + pokemonList[idPokemon] + ".jpg";
}

function updateIdPokemon(val) {
  if(val <= pokemonList.length) {
    idPokemon = parseInt(val) - 1
    document.getElementById("info-screen").innerHTML = pokemonList[idPokemon];
    document.getElementById('screen').getElementsByTagName('img')[0].src = "img/pokedex/pokemon/" + pokemonList[idPokemon] + ".jpg";
  } else {
      document.getElementById("info-screen").innerHTML = "this pokemon doesn't exist";
      document.getElementById('screen').getElementsByTagName('img')[0].src = "img/pokedex/pokemon/Pokemon-disappointed.jpg";
  }
}

function changePicturePokemon() {
  if(idPokemon == 24) {
    document.getElementById('screen').getElementsByTagName('img')[0].src = "img/pokedex/pokemon/Pikachu-drug.gif";
  } else {
    document.getElementById('screen').getElementsByTagName('img')[0].src = "img/pokedex/pokemon/" + pokemonList[idPokemon] + ".jpg";
  }
}
