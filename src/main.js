/* Manejo del DOM */
// crear tarjetas
// hacer for con la info que irá en las tarjetas y luego imprima
// rellenar tarjetas 
// imprimir tarjetas
// _
// ¿como muestro la foto?
// SOCORRO
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
            <p>Percentaje: ${i.episode.length} </p>
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

