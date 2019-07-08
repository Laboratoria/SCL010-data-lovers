const pokemons = POKEMON.pokemon;
let newPokeArray;
const pokeSection = document.getElementById('poke-section');

function createDivs(array)
{
  for (i = 0; i < array.length;i++)
  {
    let newDiv = document.createElement("div");
    let textNode = document.createTextNode(array[i].name);
    newDiv.appendChild(textNode);
    newDiv.setAttribute("id", array[i].num);
    newDiv.setAttribute("class","card");
    let pokeIMG = document.createElement("img");
    pokeIMG.setAttribute("src", array[i].img);
    newDiv.appendChild(pokeIMG);
    pokeSection.appendChild(newDiv);
  }
}

window.onload = function () {
    createDivs(pokemons);
  };

  document.getElementById("type-menu").innerHTML  =
  `<select name= "select" id="dropdown-types">
      <option value="Type" class="nombre">Type</option>
      <option value="1">Bug</option>
      <option value="2">Water</option>
      <option value="3">Dragon</option>
      <option value="4">Electric</option>
      <option value="5">Rock</option>
      <option value="6">Fighting</option>
      <option value="7">Fire</option>
      <option value="8">Flying</option>
      <option value="9">Ghost</option>
      <option value="10">Grass</option>
      <option value="11">Ground</option>
      <option value="12">Ice</option>
      <option value="13">Normal</option>
      <option value="14">Poison</option>
      <option value="15">Psychic</option>
      <option value="16">Rock</option>
    </select>`;

    const allCards = document.getElementsByClassName("card");
    const selectType = document.getElementById("dropdown-types");
    selectType.addEventListener("change", ()=> {
      // el tipo seleccionado es almacenado en condition
      let condition = selectType.options[selectType.selectedIndex].text;
      // borra contenido de section
      pokeSection.innerHTML = "";
      // crea nuevos divs en base a array
      newPokeArray = filterData(pokemons, condition);
      createDivs(newPokeArray);
    }
  );
// select para ordenar:
document.getElementById("order-menu").innerHTML =
  `<select name="order-select" id="dropdown-order">
      <option value="order" class="name">Order</option>
      <option value="az">A-Z</option>
      <option value="za">Z-A</option>
      <option value="1-151">1-151</option>
      <option value="151-1">151-1</option>
    </select>`;

//Modal
//hacer click en la imagen del cualquier div "card" y mostrar el modal
const pokeModal = document.getElementsByClassName("card");
let pokeIMG = document.createElement("img");
pokeIMG.setAttribute("src", pokemons.img);
const pokeDivCaption = document.createElement("div");
pokeDivCaption.setAttribute("class", "modal");
pokeModal.addEventListener ("click", ()=> {
  pokeModal.style.display ="block";
  pokeDivCaption.innerHTML = pokeModal;
})
let pokeSpan = document.createElement("span"); //span que cerrará el modal
pokeSpan.setAttribute("close",">&times");
pokeSpan.onclick = function(){ // función para cerrar el modal
  pokeModal.style.display = "none";
}