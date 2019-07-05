const loadData = () => {
  const data = RICKANDMORTY.results;
  return data;
};

window.loadData = loadData;

const filterSpecies = (specie) => {
  const data = RICKANDMORTY.results;
  let filterData = [];
  for (let i = 0; i < data.length; i++) {

    if (data[i].species == specie) {
        filterData.push(data[i]);
    }
  }
  return filterData;
};
 window.filterSpecies = filterSpecies;
 
 const filterGenders = (gender) => {
     const data = RICKANDMORTY.results;
     let filterData = [];
     for (let i = 0; i < data.length; i++) {
   
       if (data[i].gender == gender) {
          filterData.push(data[i]);
       }
     }
     return filterData;
   };
   
   window.filterGenders = filterGenders;
   