
function init() {
  let characterData = loadData();
  for (let i = 0; i < 40; i++) {
   // for (i = 0; i < characterData.length; i++) {
    document.getElementById('characters').innerHTML += `
      <div class="card">
        <img src="${characterData[i].image}" alt="">
        <h3>${characterData[i].name}</h3>
        <p>Especie: ${characterData[i].species}</p>
      </div>`;
  }
}
init();
 
//filtrado por especie
const filterSpices = document.getElementById('specie');
  filterSpices.addEventListener('change',() =>{
    let characterData = filterSpecies(filterSpices.value);
    document.getElementById("characters").innerHTML="";
    for (let i = 0; i < characterData.length; i++) {
    document.getElementById('characters').innerHTML += `
      <div class="card">
        <img src="${characterData[i].image}" alt="">
        <h3>${characterData[i].name}</h3>
        <p>Especie: ${characterData[i].species}</p>
      </div>`;
      }
   });
   
//filtrado por genero
   const filterGender = document.getElementById('gender');
   filterGender.addEventListener('change',() =>{
     let characterData = filterGenders(filterGender.value);
     document.getElementById("characters").innerHTML="";
     for (let i = 0; i < characterData.length; i++) {
     document.getElementById('characters').innerHTML += `
       <div class="card">
         <img src="${characterData[i].image}" alt="">
         <h3>${characterData[i].name}</h3>  
         <p>Status: ${characterData[i].gender}</p>
       </div>`;
   }});

   //filtrado por estado

   const selectStatus = document.getElementById('status');
   selectStatus.addEventListener('change',() =>{
     let characterData = filterStatus(selectStatus.value);
     document.getElementById("characters").innerHTML="";
     for (let i = 0; i < characterData.length; i++) {
     document.getElementById('characters').innerHTML += `
       <div class="card">
         <img src="${characterData[i].image}" alt="">
         <h3>${characterData[i].name}</h3>
         <p>Status: ${characterData[i].status}</p>
       </div>`;
   }});

   // filtrado por orden ascendente y descendente
const filterOrder = document.getElementById('order');
  filterSpices.addEventListener('change',() =>{
    let characterData = filterSpecies(filterSpices.value);
    document.getElementById("characters").innerHTML="";
    for (let i = 0; i < characterData.length; i++) {
    document.getElementById('characters').innerHTML += `
      <div class="card">
        <img src="${characterData[i].image}" alt="">
        <h3>${characterData[i].name}</h3>
        <p>Especie: ${characterData[i].species}</p>
      </div>`;
      }
   });
     




