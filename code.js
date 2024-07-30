var todosPokemons=[];
var qtpokemons=500;

async function capPokemons(){
    var resposta =  await fetch("https://pokeapi.co/api/v2/pokemon?limit="+ qtpokemons);
    var dados = await resposta.json();

    console.log(dados.results[0].name);
    todosPokemons = dados.results;
    mostrarpokemons(todosPokemons);
    
}
function mostrarpokemons(pokemons){
    var pokeContainer = document.querySelector(".pokeContainer");
    pokeContainer.innerHTML = ""; 

    // <div class="pokeContainer">
    //     <div class="pokeCard">
    //         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png">
    //         <span>Id</span>
    //         <span>Nome Pokemon</span>
    //     </div>

    // criar os cards para mostrar os pokemons
    for (i = 0; i < pokemons.length; i++) {
        var pokeCard = document.createElement("div");
        pokeCard.classList.add("pokeCard");

        pokeCard.innerHTML=`
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon//${i+1}.png">
           <span>${i+1}</span>
           <span>${pokemons[i].name}</span>`

        
        pokeContainer.appendChild(pokeCard);
        
    }
}


capPokemons();