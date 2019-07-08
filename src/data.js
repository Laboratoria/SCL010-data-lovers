const filterData = (data,type) => {

    let newArray = data.filter(poke =>
    {
      return poke.type.includes(type)
    });
  return newArray
};

const sortData = (data, sortBy, condition) => {
 let arr = [];

 if (sortBy == "name"){

   if(condition === "A-Z"){

     arr = data.sort((a, b) => a.name.localeCompare(b.name));
   }
   else {
     arr = data.sort((a, b) => a.name.localeCompare(b.name)).reverse();
   }
 }
 else {
   if(condition === "1-151"){
     arr = data.sort(sortById);
   }
   else {
     arr = data.sort(sortById).reverse();
   }
 }
 return arr;
}

window.filterData = filterData;
