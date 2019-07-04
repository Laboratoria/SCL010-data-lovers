/* Manejo del DOM */
//Se crea un select
document.getElementById("pageCharacters").innerHTML =`<select class="" id="select">
<option value=""></option>
<option value="name">nombre</option>
<option value="status">estado</option>
<option value="run">rut</option>
</select>;`
//vairable para filtrar en select
const selectFilter = document.getElementById("select");
selectFilter.addEventListener("change", () => {
let condition = selectFilter.options[selectFilter.selectedIndex].value;
console.log(condition);
});
//leer data
const dataRickAndMorty = RICKANDMORTY.results;

for (let i = 0; i <dataRickAndMorty.length; i++) {
  console.log(dataRickAndMorty[i].name);
  console.log(dataRickAndMorty[i].status);
  console.log(dataRickAndMorty[i].image);
  let card = document.createElement("div");
  let cardName = document.createElement("h2");
  let cardStatus = document.createElement("h3");
  let cardImg = document.createElement("img");
//Le dice de donde optiene el valor
  card.className = "cards";
  cardImg.src = dataRickAndMorty[i].image;
  cardName.textContent = dataRickAndMorty[i].name;
  cardStatus.textContent = dataRickAndMorty[i].status;
// Valores que mostrara el div
  card.appendChild(cardImg);
  card.appendChild(cardName);
  card.appendChild(cardStatus);
//imprimir
document.getElementById("pageCharacters").appendChild(card).innerHTML;
};
//document.getElementById('buttonCharacters').addEventListener("click", () => {});//
