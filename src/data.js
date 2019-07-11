// filtrando data por episodios
const filter = (data, condition) => {

  let filteredData = []; // array vacío donde almacenaremos la data resultante
  for (let i = 0; i < data.length; i++) { // recorremos data general
    for (let j = 0; j < data[i].episode.length; j++) { // dentro de la data general recorremos los arreglos de episodios en busca de coincidencias con la condicion
      if (data[i].episode[j] === condition) {
        x
        filteredData.push(data[i]); // enviamos datos al arreglo vacio
      }
    }
  }
  return filteredData;
}
// global
window.filter = filter;



// ordenando data por nombre
const sorter = (data, name, sortOrder) => {
  // arreglo vacio donde enviaremos el nuevo orden de la data
  let sortedData = [""];

  if (sortOrder == "asc") {
    sortedData = data.sort((a, b) => a[name].localeCompare(b[name])); //a-z 
  } else {
    sortedData = data.sort((a, b) => a[name].localeCompare(b[name])).reverse(); //a-z pero invertido (Z-A)
  }
  return sortedData;
}
window.sorter = sorter; //global
