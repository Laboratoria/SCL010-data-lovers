//DOM
function init() {
  let characterData = data;
  for (let i = 0; i < 40; i++) {
   // for (i = 0; i < characterData.length; i++) {
    document.getElementById('characters').innerHTML += `
      <div class="card">
        <img src="${characterData[i].image}" alt="">
        <h3>${characterData[i].name}</h3>
        <p>Especie: ${characterData[i].species}</p>
        <p>Aparece en ${calculePercent(characterData[i].episode.length)}% de los capitulos</p>
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
        <p>Aparece en ${calculePercent(characterData[i].episode.length)}% de los capitulos</p>
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
         <p>Aparece en ${calculePercent(characterData[i].episode.length)}% de los capitulos</p>
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
         <p>Aparece en ${calculePercent(characterData[i].episode.length)}% de los capitulos</p>
       </div>`;
   }});