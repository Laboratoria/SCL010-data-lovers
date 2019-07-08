
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
//filtrado por especie
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
   });
   
//filtrado por genero
   const filterGender = document.getElementById('gender');
   filterGender.addEventListener('change',() =>{
     let characterData = filterGenders(filterGender.value);
     document.getElementById("characters").innerHTML="";
     for (i = 0; i < characterData.length; i++) {
     document.getElementById('characters').innerHTML += `
       <div class="card">
         <img src="${characterData[i].image}" alt="">
         <h3>${characterData[i].name}</h3>    <section class="section_label">
28
      <label class="label">Especie</label>
29
      <select class="filter_label" id="specie">
30
        <option value="">Selecciona</option>
31
        <option value="Humanoid">Humanoide</option>
32
        <option value="Human">Humano</option>
33
        <option value="Alien">Extraterreste</option>
34
        <option value="Poopybutthole">Poopybutthole</option>
35
        <option value="Robot">Robot</option>
36
        <option value="Cronenberg">Cronenberg</option>
37
        <option value="Animal">Animales</option>
38
        <option value="Mytholog">Mitologico</option>
39
        <option value="Vampire">Vampiros</option>
40
        <option value="Disease ">Enfermedades</option>
41
        <option value="Parasite">Parasitos</option>
42
        <option value="unknown">Otros</option>
43
      </select>
44
​
45

         <p>Status: ${characterData[i].gender}</p>
       </div>`;
   }});

   //filtrado por estado

   const selectStatus = document.getElementById('status');
   selectStatus.addEventListener('change',() =>{
     let characterData = filterStatus(selectStatus.value);
     document.getElementById("characters").innerHTML="";
     for (i = 0; i < characterData.length; i++) {
     document.getElementById('characters').innerHTML += `
       <div class="card">
         <img src="${characterData[i].image}" alt="">
         <h3>${characterData[i].name}</h3>
         <p>Status: ${characterData[i].status}</p>
       </div>`;
   }});




