//recorrer data




//const para acceder a la data
const myData = POKEMON.pokemon; 

//DOM FUNCIÓN FILTRAR
const container = document.getElementById("root"); 
document.getElementById("pok-filter").addEventListener("change",() => {
   let tipoFilter = document.getElementById("pok-filter").value;
   let lastResult = window.filterPoke(myData,tipoFilter);
   container.innerHTML ="";
   lastResult.forEach(element => {
       container.innerHTML += `
       <div class="img">
    <img src="${element.img}">
    </div>
    <h3>${element.type}</h3>
    <p>${element.name}</p>`    })
   });