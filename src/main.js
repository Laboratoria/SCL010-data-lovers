const data = RICKANDMORTY.results; 
window.data = data; //declaramos la data

// creando tarjetas

let card = "";
let characters = "";
let containerCard = document.getElementById("cards");

// crear relleno de la tarjeta con una funcion que las recorra 
const createCards = () => {
  window.data.forEach((element) => {
    card = //HTML DINÁMICO

      `
    
         <div class="characterCards">
          <img src="${element.image}" alt="foto" class = "imagenCharacters">
          <div id = "name"> <p class="textAlign">${element.name}</p> </div>
           <div class="infoCards"
            <p> Specie: ${element.species}</p>
            <p> Gender: ${element.gender}</p>
            <p> Appearances: ${(element.episode.length*100/31).toFixed(1)} % </p>
            </div>
         </div>
       
      `
    characters += card;
  });
  containerCard.innerHTML = characters;
};

createCards(data);
//llamado a la función para que se ejecute

// FILTRANDO EPISODIOS


const selectedEpisode = document.getElementById("selectedEpisodeHTML");
  selectedEpisode.addEventListener("change", () => {
          let condition = selectedEpisode.options[selectedEpisode.selectedIndex].text;

    // console.log(condition);
    let filtered= filter(condition);
        createCards(filtered);

      });










