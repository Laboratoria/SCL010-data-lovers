<<<<<<< HEAD
=======
//DOM
function init() {
  let characterData = window.loadData();
  for (let i = 0; i < 40; i++) {
   // for (i = 0; i < characterData.length; i++) {
    document.getElementById('characters').innerHTML += `
      <div class="card">
        <img src="${characterData[i].image}" alt="">
        <h3>${characterData[i].name}</h3>
        <p>Especie: ${characterData[i].species}</p>
        <p>Aparece en ${window.calculePercent(characterData[i].episode.length)}% de los capitulos</p>
      </div>`;
  }
}
init();

//FILTRADO ASCENDENTE Y DESCENDENTE
const selectOrder=document.getElementById('order');
   selectOrder.addEventListener('change',()=>{
    let characterData = window.loadData();
    let htmlForInyect='';

    if(selectOrder.value == '1'){
      characterData.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    }else{
      characterData.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      characterData.reverse();
    }

    //for (let i = 0; i < 30; i++) {
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
const filterSpices = document.getElementById('specie');
  filterSpices.addEventListener('change',() =>{
    let characterData = window.filterSpecies(window.loadData(),filterSpices.value);
    document.getElementById("characters").innerHTML="";
    for (let i = 0; i < characterData.length; i++) {
    document.getElementById('characters').innerHTML += `
      <div class="card">
        <img src="${characterData[i].image}" alt="">
        <h3>${characterData[i].name}</h3>
        <p>Especie: ${characterData[i].species}</p>
        <p>Aparece en ${window.calculePercent(characterData[i].episode.length)}% de los capitulos</p>
      </div>`;
      }
   });

//filtrado por genero
   const filterGender = document.getElementById('gender');
   filterGender.addEventListener('change',() =>{
     let characterData = window.filterGenders(window.loadData(),filterGender.value);
     document.getElementById("characters").innerHTML="";
     for (let i = 0; i < characterData.length; i++) {
     document.getElementById('characters').innerHTML += `
       <div class="card">
         <img src="${characterData[i].image}" alt="">
         <h3>${characterData[i].name}</h3>
         <p>Status: ${characterData[i].gender}</p>
         <p>Aparece en ${window.calculePercent(characterData[i].episode.length)}% de los capitulos</p>
       </div>`;
   }});

   //filtrado por estado

   const selectStatus = document.getElementById('status');
   selectStatus.addEventListener('change',() =>{
     let characterData = window.filterStatus(window.loadData(),selectStatus.value);
     document.getElementById("characters").innerHTML="";
     for (let i = 0; i < characterData.length; i++) {
     document.getElementById('characters').innerHTML += `
       <div class="card">
         <img src="${characterData[i].image}" alt="">
         <h3>${characterData[i].name}</h3>
         <p>Status: ${characterData[i].status}</p>
         <p>Aparece en ${window.calculePercent(characterData[i].episode.length)}% de los capitulos</p>
       </div>`;
   }});
>>>>>>> e24748d8ec6b07bc227148ad1f870625fc92e27c
