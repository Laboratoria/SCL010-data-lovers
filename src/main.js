const data = RICKANDMORTY.results; 
window.data = data; //declaramos la data

// creando tarjetas

let card = "";
let characters = "";
let containerCard = document.getElementById("cards");
let filteredCards = "";

// crear relleno de la tarjeta con una funcion que las recorra 
const createCards = () => {
  window.data.forEach((element) => {
    cards = //HTML DINÁMICO

      `
    
         <div class="characterCards">
          <img src="${i.image}" alt="foto" class = "imagenCharacters">
          <div id = "name"> <p class="textAlign">${i.name}</p> </div>
           <div class="infoCards">
            <p> Specie: ${i.species}</p>
            <p> Gender: ${i.gender}</p>
            <p> Appearances: ${(i.episode.length*100/31).toFixed(1)} % </p>
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
createCards(data); 
//llamado a la función para que se ejecute

// FILTRANDO EPISODIOS


const selectedEpisode = document.getElementById("selectedEpisodeHTML");
  selectedEpisode.addEventListener("change", () => {
          let condition = selectedEpisode.options[selectedEpisode.selectedIndex].text;
          

    console.log(condition);
    let filteredCards = filter(condition);
    
    createCards(filteredCards);
      });










