const loadData = () => {
  const data = RICKANDMORTY.results;
  return data;
};

window.loadData = loadData;


   //seleccion de A-Z y Z-A
   const selectOrder=document.getElementById('order');
   selectOrder.addEventListener('change',()=>{
    let characterData = loadData();
    let htmlForInyect='';

    if(selectOrder.value == '1'){
      characterData.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    }else{
      characterData.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      characterData.reverse();
    }

    // for (let i = 0; i < 30; i++) {
       for (let i = 0; i < characterData.length; i++) {
       htmlForInyect+= `
         <div class="card">
           <img src="${characterData[i].image}" alt="">
           <h3>${characterData[i].name}</h3>
           <p>Especie: ${characterData[i].species}</p>
         </div>`;
     }
     document.getElementById('characters').innerHTML = htmlForInyect;
   });



    //filtrado por especie

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

    //filtrado por genero

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

    //filtrado por estado

    const filterStatus = (status) => {
      const data = RICKANDMORTY.results;
      let filterData = [];
      for (let i = 0; i < data.length; i++) {

        if (data[i].status == status) {
          filterData.push(data[i]);
        }
      }
      return filterData;
    };

    window.filterStatus = filterStatus;
