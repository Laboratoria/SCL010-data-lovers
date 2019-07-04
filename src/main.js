
const data = RICKANDMORTY.results; //.window??? 
// crear tarjetas
let card = "";
let characters = "";
let containerCard = document.getElementById("cards");
 
// crear relleno de la tarjeta con una funcion que las recorra 
const createCards = (data) => {
    data.forEach((i) => {
        cards =  
        `
    
         <div class="characterCards">
          <img src="${i.image}" alt="foto" class = "imagenCharacters">
          <div id = "name"> <p>${i.name}</p> </div>
           <div class="infoCards">
            <p> Specie: ${i.species}</p>
            <p> Gender: ${i.gender}</p>
            <p>Percentaje: ${i.episode.length * 100 / 31} </p>
            </div>
         </div>
       
      `
      characters += cards; 
    });
    containerCard.innerHTML= characters;
};
createCards(data);
    // card = `
    // aqui va la tarjeta`

