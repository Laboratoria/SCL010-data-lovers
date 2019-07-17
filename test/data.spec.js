global.window = global;
global.assert = require('chai').assert;
require('../src/data.js');
require('./data.spec.js');


const data = [
  {


    "name": "Rick Sanchez",
    "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"]
  },
  {
    "name": "Aqua Morty",
    "episode": ["https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/22"]
  },
  {
    "name": "Brad Anderson",
    "episode": ["https://rickandmortyapi.com/api/episode/7"]
  }
];



describe("sorter", () => {
  it('Debería ser una función', () => {
    assert.equal(typeof sorter, "function");
  });
  it("debería retornar ordenado de la A-Z", () => {
    assert.deepEqual(window.sorter(data, "name", "asc"), [{
        "name": "Aqua Morty",
        "episode": ["https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/22"]
      }, {
        "name": "Brad Anderson",
        "episode": ["https://rickandmortyapi.com/api/episode/7"]
      },
      {
        "name": "Rick Sanchez",
        "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"]
      },
    ]);
  })
});
