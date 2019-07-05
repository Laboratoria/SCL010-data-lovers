function init() {
  let characterData = loadData();
  for (i = 0; i < 40; i++) {
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

const filterSpices = document.getElementById('specie');
  filterSpices.addEventListener('change',() =>{
    let characterData = filterSpecies(filterSpices.value);
    document.getElementById("characters").innerHTML="";
    for (i = 0; i < characterData.length; i++) {
    document.getElementById('characters').innerHTML += `
      <div class="card">
        <img src="${characterData[i].image}" alt="">
        <h3>${characterData[i].name}</h3>
        <p>Especie: ${characterData[i].species}</p>
      </div>`;
      }
   })

   const filterGender = document.getElementById('gender');
   filterGender.addEventListener('change',() =>{
     let characterData = (filterGender.value);
     document.getElementById("characters").innerHTML="";
     for (i = 0; i < characterData.length; i++) {
     document.getElementById('characters').innerHTML += `
       <div class="card">
         <img src="${characterData[i].image}" alt="">
         <h3>${characterData[i].name}</h3>
         <p>Especie: ${characterData[i].species}</p>
       </div>`;
   }});




