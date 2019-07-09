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
const sortData = (data, sortBy, sortOrder) => {
  let newArray = [];
  // ordenar strings nombres por orden alfabético
  let sortingAlph = data.sort((a, b) => a.name.localeCompare(b.name));

  if (sortOrder == "A-Z")
  {
    newArray = sortingAlph;
  }
  else if (sortOrder == "Z-A")
  {
    newArray = sortingAlph.reverse();
  }
  else if (sortOrder == "1-151")
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

window.filterData = filterData;
window.sortData = sortData;