const searchCharacter = (name) => {
  const data = RICKANDMORTY.results;

  for(let i=0 ; i<data.length;i++){
    if(data[i].name==name){
      return data[i];

    }
}
  return false;

};

window.searchCharacter = searchCharacter;
