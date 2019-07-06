const data = RICKANDMORTY.results; //.window??? 
// crear tarjetas
let card = "";
let characters = "";
let containerCard = document.getElementById("cards");

// crear relleno de la tarjeta con una funcion que las recorra 
const createCards = (data) => {
  data.forEach((element) => {
    cards =
      `
    
         <div class="characterCards">
          <img src="${element.image}" alt="foto" class = "imagenCharacters">
          <div id= "name"> <p class="textAlign">${element.name}</p> </div>
           <div class="infoCards">
            <p> Specie: ${element.species}</p>
            <p> Gender: ${element.gender}</p>
            <p> Appearances: ${(element.episode.length*100/31).toFixed(1)} % </p>
            </div>
         </div>
       
      `
    characters += cards;
  });
  containerCard.innerHTML = characters;
};
createCards(data);
// card = `
// aqui va la tarjeta`




// FILTRANDO DATITA

let filterBtn = document.getElementById(filterBtnHTML);
filterBtn.addEventListener("click", (filter) => { 
 let  characters= "";  


} );