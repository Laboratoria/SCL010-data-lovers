const data = RICKANDMORTY.results;
window.data = data; //declaramos la data global

// creando tarjetas

let card = "";

let containerCard = document.getElementById("cards");

// crear relleno de la tarjeta con una funcion que las recorra 
const createCards = (data) => {
  let characters = "";
  data.forEach((element) => {
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

// FILTRANDO EPISODIOS


const selectedEpisode = document.getElementById("selectedEpisodeHTML");
selectedEpisode.addEventListener("change", () => {
  let condition = selectedEpisode.value;
  let resultFilter = filter (condition);
   createCards(resultFilter);
});
  // console.log(condition);
  

//ORDER
  const selectSort = document.getElementById("orderPokemon")
  selectSort.addEventListener("change", () => {
    let conditionAZ = selectSort.value
    let conditionZA = selectSort.value;
    let sortedData = window.sorting(data, conditionAZ, conditionZA);
    sortedData.forEach(() => {
      return createCards(sortedData);
    })
  })

