const loadData = () => {
  const data = RICKANDMORTY.results;
  return data;
};

function init() {
  let characterData = loadData();
  for (i = 0; i < characterData.length; i++) {
    document.getElementById('characters').innerHTML += `
      <div class="card">
        <img src="${characterData[i].image}" alt="">
        <h3>${characterData[i].name}</h3>
        <p>Estado: ${characterData[i].status}</p>
        <p>Especie: ${characterData[i].species}</p>
      </div>`;
  }
}
init();

