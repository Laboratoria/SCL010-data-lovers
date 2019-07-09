
 //funcion filtrar
 const filter = (condition) => {

     let filteredData = [""];
   //nuevo arr donde guardamos las coincidencias del recorrido
   for (let i = 0; i < data.length; i++){
    //  console.log(data)
      //recorrido por dentro de los episodios de los personajes
     if(data[i].episode == condition){ //si dentro de los characters.episodes hay una coincidencia con la condicion episodes lo guardará 
       filteredData.push(data[i].episode);
      //  console.log(filteredData);
     }
     
    }
 };

//hacemos funcion global
window.filter = filter;