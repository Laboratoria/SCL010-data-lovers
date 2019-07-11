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
            <p> Gender: ${element.location.name}</p>
            <p> Gender: ${element.origin.name}</p>
            <h3> Appearances: ${(element.episode.length*100/31).toFixed(1)} % </h3>
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
  let condition = selectedEpisode.options[selectedEpisode.selectedIndex].text;
  let resultFilter = filter (condition);
   createCards(resultFilter);
});
  // console.log(condition);
  

// ORDENANDO POR NOMBRE
const selectedSort = document.getElementById("selectedSortHTML") //llamado alboton, le dimos evento y funcion a ejecutar
selectedSort.addEventListener("change", () => {
 //llamamos los atributos que le dimos en HTML ordenar según y, ordenar como
 let name = selectedSort.options[selectedSort.selectedIndex].getAttribute("sortby"); //ordenar segun nombre
 let orderBy = selectedSort.options[selectedSort.selectedIndex].getAttribute("orderby");
 let sorted = window.sorter(data, name, orderBy); //entregamos parametros para ejecutar la funcion
 sorted.forEach(() => {
   createCards(sorted);
 })
})

