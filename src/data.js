// filtrando data por episodios
const filter = (data, condition) => {
  let filteredData = []; // array vacío donde almacenaremos la data resultante
  for (let i = 0; i < data.length; i++) { // recorremos data general
    for (let j = 0; j < data[i].episode.length; j++) { // dentro de la data general recorremos los arreglos de episodios en busca de coincidencias con la condicion
      if (data[i].episode[j] == condition) {
        filteredData.push(data[i]); // enviamos datos al arreglo vacio
      }
    }
  }
  return filteredData;
}
// global
window.filter = filter;
// ordenando data por nombre
const sorter = (data, sortBy, sortOrder) => {
  let sortedData = [""]; // arreglo vacio donde enviaremos el nuevo orden de la data
  if (sortOrder == "asc") {
    sortedData = data.sort((a, b) => a[sortBy].localeCompare(b[sortBy])); //a-z 
  } else {
    sortedData = data.sort((a, b) => a[sortBy].localeCompare(b[sortBy])).reverse(); //a-z pero invertido (Z-A)
  }
  return sortedData;
}
window.sorter = sorter; //global
//calculo 
const apparitionPercent = (episodes) => {
  let percentajeTotal = Math.round((episodes * 100) / 31);
  return percentajeTotal;
};
window.apparitionPercent = apparitionPercent;