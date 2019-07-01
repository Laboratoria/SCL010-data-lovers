document.addEventListener('DOMContentLoaded', function() {
    window.M.AutoInit();
  });

window.onload=() =>{

document.getElementById('root').innerHTML='';

document.getElementById('pokemon-list').innerHTML='';
for(let i=0; i<POKEMON.pokemon.length; i++){

document.getElementById('pokemon-list').innerHTML+=`

<div class="col s6 m3 l3">

<div class="flip-card">
  <div class="flip-card-inner">

    <div class="flip-card-front">
      <img id="img-card" src="${POKEMON.pokemon[i].img}" alt="Avatar" ">
    </div>

    <div class="flip-card-back">
      <p>${POKEMON.pokemon[i].name}</p> 
      <p id="type-poke">Tipo:${POKEMON.pokemon[i].type}</p> 
      <p"number-poke">${POKEMON.pokemon[i].num}</p>
    </div>
  </div>
</div>
</div>`

}
 
}
