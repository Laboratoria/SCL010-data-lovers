const data = window.RICKANDMORTY.results;

const loadData = () => {
  return data;
};
window.loadData = loadData;

//orden ascendente de la A-Z
const orderData = (data, option) => {
  let filterOrder;
//localeCompare: ordena
if(option == 'az'){
  filterOrder = data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}
if(option== 'za') {
  filterOrder = data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  filterOrder.reverse();
}
return filterOrder;
};

window.orderData=orderData;



//FILTRADO POR ESPECIE
const filterSpecies = (data,specie) => {
  let filterData = [];
  for (let i = 0; i < data.length; i++) {

    if (data[i].species == specie) {
        filterData.push(data[i]);
    }
  }
  return filterData;
};
 window.filterSpecies = filterSpecies;

 //filtrado por genero

 const filterGenders = (data,gender) => {
     let filterData = [];
     for (let i = 0; i < data.length; i++) {

       if (data[i].gender == gender) {
          filterData.push(data[i]);
       }
     }
     return filterData;
   };

   window.filterGenders = filterGenders;

   //filtrado por estado

   const filterStatus = (data,status) => {
    let filterData = [];
    for (let i = 0; i < data.length; i++) {

      if (data[i].status == status) {
         filterData.push(data[i]);
      }
    }
    return filterData;
  };

  window.filterStatus = filterStatus;

  //calculo matematico
  const calculePercent = (episodes) => {
    let percent = Math.round((episodes * 100) / 31);
    return percent;
  };


  window.calculePercent = calculePercent;
