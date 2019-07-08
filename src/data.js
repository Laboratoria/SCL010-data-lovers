/* Manejo de data */
const filterData = (data,type) => {

  let newArray = data.filter(poke =>
  {
    return poke.type.includes(type)
  });
return newArray
};

window.filterData = filterData;

//EJEMPLO ORDER
// const sortData = (filteredPokes, sortBy, sortOrder) => {
//   let orderedPokes = filteredPokes;
//   if (sortOrder == "A - Z" || sortOrder == "Nº ascendente") {
//     orderedPokes.sort((a, b) => {
//       if (a[sortBy] < b[sortBy]) {
//         return -1;
//       }
//       if (a[sortBy] > b[sortBy]) {
//         return 1;
//       }
//       return 0;
//     })
//   }
//   if (sortOrder == "Z - A" || sortOrder == "Nº descendente") {
//     orderedPokes.sort((a, b) => {
//       if (a[sortBy] > b[sortBy]) {
//         return -1;
//       }
//       if (a[sortBy] < b[sortBy]) {
//         return 1;
//       }
//       return 0;
//     })
//   }
//   return orderedPokes;
// }
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example;
