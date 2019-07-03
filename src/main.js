const pokemons = POKEMON.pokemon;

window.onload = function () {
    // accedemos a la lista de pokemones
    const pokeSection = document.getElementById('poke-section');

    for (i = 0; i < pokemons.length;i++)
    {
      let divNum = "div" + pokemons[i].num;
      let newDiv = document.createElement("div");
      let textNode = document.createTextNode(pokemons[i].name);
      newDiv.appendChild(textNode);
      newDiv.setAttribute("id", divNum);
      newDiv.setAttribute("class","card");
      let pokeIMG = document.createElement("img");
      pokeIMG.setAttribute("src", pokemons[i].img);
      newDiv.appendChild(pokeIMG);
      pokeSection.appendChild(newDiv);
    }
  };

  document.getElementById("type-menu").innerHTML  =
  `<select name= "select" id="dropdown-types">
      <option value="Type" class="nombre">Type</option>
      <option value="1">Bug</option>
      <option value="2">Dark</option>
      <option value="3">Dragon</option>
      <option value="4">Electric</option>
      <option value="5">Fairy</option>
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
      <option value="17">Steel</option>
      <option value="18">Water</option>
    </select>`;

    let allCards = document.getElementsByClassName("card");
    const selectType = document.getElementById("dropdown-types");
    selectType.addEventListener("change", ()=> {
      let condition = selectType.options[selectType.selectedIndex].text;
      // también se puede rescatar el value usando .value

      /* 4. Si alguno de los elementos del array del key type
      del pokemon es igual a condition (pokemons.type[0] o pokemons.type[1], entonces
      desactivar div de todos los demás pokemones)*/
      console.log("condition se va a llamar el valor porque eso dice en el readme")
    }
  );
