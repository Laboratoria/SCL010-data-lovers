window.onload = function () {
    // accedemos a la lista de pokemones
    const pokemons = POKEMON.pokemon;
    const pokeSection = document.getElementById('poke-section');
  
    for (i = 0; i < pokemons.length;i++)
    {
      let divNum = "div" + pokemons[i].num;
      let newDiv = document.createElement("div");
      let textNode = document.createTextNode(pokemons[i].name);
      newDiv.appendChild(textNode);
      newDiv.setAttribute("id", divNum);
      let pokeIMG = document.createElement("img");
      pokeIMG.setAttribute("src", pokemons[i].img);
      newDiv.appendChild(pokeIMG);
      pokeSection.appendChild(newDiv);
    }
  };

  // aprendiendo filter con consola
  const pokemons = POKEMON.pokemon;
  const pokeFiltered = pokemons.filter(pokemons => pokemons.length > 151);
  
  console.log(pokeFiltered);