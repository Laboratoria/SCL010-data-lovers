const pokemons = window.POKEMON.pokemon;
let newPokeArray;
const pokeSection = document.getElementById('poke-section');

function createDivs(array)
{
  for (let i = 0; i < array.length;i++)
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
      <option disabled selected value>Type</option>
      <option>Bug</option>
      <option>Water</option>
      <option>Dragon</option>
      <option>Electric</option>
      <option>Rock</option>
      <option>Fighting</option>
      <option>Fire</option>
      <option>Flying</option>
      <option>Ghost</option>
      <option>Grass</option>
      <option>Ground</option>
      <option>Ice</option>
      <option>Normal</option>
      <option>Poison</option>
      <option>Psychic</option>
      <option>Rock</option>
    </select>`;

    document.getElementById("order-menu").innerHTML =
  `<select name="order-select" id="dropdown-order">
      <option disabled selected value>Order</option>
      <option>A-Z</option>
      <option>Z-A</option>
      <option>1-151</option>
      <option>151-1</option>
    </select>`;

    const selectType = document.getElementById("dropdown-types");
    selectType.addEventListener("change", ()=> {
      // el tipo seleccionado es almacenado en condition
      let condition = selectType.options[selectType.selectedIndex].text;
      // borra contenido de section
      pokeSection.innerHTML = "";
      // crea nuevos divs en base a array
      newPokeArray = window.filterData(pokemons, condition);
      createDivs(newPokeArray);
    }
  );

    const selectOrder = document.getElementById("dropdown-order");
    selectOrder.addEventListener("change", ()=> {
      // el tipo seleccionado es almacenado en condition
      let condition = selectOrder.options[selectOrder.selectedIndex].text;
      // borra contenido de section
      pokeSection.innerHTML = "";
      // crea nuevos divs en base a array
      newPokeArray = window.sortData(pokemons, condition, condition);
      createDivs(newPokeArray);
  }
);