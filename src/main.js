//recorrer data
window.onload=() =>{
  
//const para acceder a la data
const myData = POKEMON.pokemon; 

//DOM FUNCIÓN FILTRAR
const container = document.getElementById("root"); 
document.getElementById("pok-filter").addEventListener("change",() => {
   let tipoFilter = document.getElementById("pok-filter").value;
   let lastResult = window.filterPoke(myData,tipoFilter);
   container.innerHTML ="";
   lastResult.forEach(element => {
       container.innerHTML += `
       <div class="img">
    <img src="${element.img}">
    </div>
    <h3>${element.type}</h3>
    <p>${element.name}</p>`    
  })

   })
   
 


//document.getElementById('pokemon-list').innerHTML='';
// for(let i=0; i<POKEMON.pokemon.length; i++){

 //document.getElementById('pokemon-list').innerHTML+=`

 //document.getElementById('root').innerHTML='';

//document.getElementById('pokemon-list').innerHTML='';
// for(let i=0; i<POKEMON.pokemon.length; i++){

 //document.getElementById('pokemon-list').innerHTML+=`

//<div class="col s6 m3 l3">

//<div class="flip-card">
 // <div class="flip-card-inner">

   // <div class="flip-card-front">
     // <img id="img-card" src="${POKEMON.pokemon[i].img}" alt="Avatar">
    //</div>

    //<div class="flip-card-back">
      //<p>${POKEMON.pokemon[i].name}</p> 
      //<p id="type-poke">Tipo:${POKEMON.pokemon[i].type}</p> 
      //<p"number-poke">${POKEMON.pokemon[i].num}</p>
    //</div>
  //</div>
// </div>
// </div>`

// }
 
}
