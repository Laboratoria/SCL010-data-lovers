const data = window.RICKANDMORTY.results;
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
            <p> Location: ${element.location.name}</p>
            <p> Origin: ${element.origin.name}</p>
            <h3> APPEARANCE PERCENT: ${window.apparitionPercent(element.episode.length)} % </h3>

            
           
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

  let resultFilter = window.filter(data, condition);
  createCards(resultFilter);

});
// console.log(condition);


// ORDENANDO POR NOMBRE
const selectedSort = document.getElementById("selectedSortHTML") //llamado alboton, le dimos evento y funcion a ejecutar
selectedSort.addEventListener("change", () => {
  //llamamos los atributos que le dimos en HTML ordenar según y, ordenar como
  let sortBy = selectedSort.options[selectedSort.selectedIndex].getAttribute("sortby"); //ordenar segun nombre
  let orderBy = selectedSort.options[selectedSort.selectedIndex].getAttribute("orderby");
  let sorted = window.sorter(data, sortBy, orderBy); //entregamos parametros para ejecutar la funcion
  createCards(sorted);
});


// refrescar index 

let index = document.getElementById("clear")
window.clear.addEventListener('click', () => {
  location.reload();
  return index;
  });