// data = array | type = tipo objeto poke
const filterData = (data,type) => {

  let newArray = data.filter(poke =>
  {
    // crea array nuevo con cada objeto que incluya el tipo "condition"
    return poke.type.includes(type)
  });
  return newArray
};

// data = array | sortBy = select txt | sortOrder = ascendente o descendente
const sortData = (data, sortBy) => {
  let newArray = [];
  // ordenar strings nombres por orden alfabético
  let sortingAlph = data.sort((a, b) => a.name.localeCompare(b.name));

  if (sortBy == "A-Z")
  {
    newArray = sortingAlph;
  }
  else if (sortBy == "Z-A")
  {
    newArray = sortingAlph.reverse();
  }
  else if (sortBy == "1-151")
  {
    // ordenar "id" por menor a mayor
    newArray = data.sort((first, last) => first.id - last.id);
  }
  // "151-1" --> ordenar "id" por mayor a menor
  else {
    newArray = data.sort((first, last) => last.id - first.id);
  }
  return newArray
}

// calcula promedio de pokemones por tipo
const computeStats = (type, data, condition) => {
  return `${condition} pokemons are ${((type.length/data.length) * 100).toFixed(2)}% of the Kanto pokemons`;
}

window.filterData = filterData;
window.sortData = sortData;
window.computeStats = computeStats;