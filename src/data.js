// FILTER
 const filter = (condition) => {
   let filteredData = [];
   for (let i = 0; i < data.length; i++) {
     for (let j = 0; j < data[i].episode.length; j++) {
       if (data[i].episode[j] === condition) {
         filteredData.push(data[i]);
       }
     }
   }
   return filteredData;
 }
//  console.log(dataFiltered);


// SORTER
