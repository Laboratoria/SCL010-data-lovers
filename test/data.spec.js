global.window = global;
global.assert = require('chai').assert;
require('../src/data/rickandmorty/rickandmorty.js');
require('../src/js/data');
require('./data.spec.js');
//DESCRIBE QUE (A QUIEN) VOY A TESTEAR
const sampleSpice = [{
    "name": "Rick Sanchez",
    "species": "Human",
    "gender": "Male",
    "status": "Alive",
    "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],

  }, {
    "name": "Amish Cyborg",
    "status": "Dead",
    "species": "Alien",
    "gender": "Male",
    "episode": ["https://rickandmortyapi.com/api/episode/15"],
  }
];

describe('loadData', () => {
  it('debería ser una función', () => {
    assert.deepEqual(typeof window.loadData, 'function');
  });
});
describe('loadData', () => {
  it('debería ser una función', () => {
    assert.deepEqual(typeof window.loadData, 'function');
  });
  it('deberia contener un arreglo con todos los personajes', () => {
    assert.equal(window.loadData(), window.RICKANDMORTY.results);
  });
});

describe("filterSpecies", () => {
  it('deberia retornar el objeto Rick Sanchez al filtrar por especie humano', () => {
    assert.deepEqual(window.filterSpecies(sampleSpice, 'Human'), [{
      "name": "Rick Sanchez",
      "species": "Human",
      "gender": "Male",
      "status": "Alive",
      "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],

    }]);
  });
});
describe("filterGenders", () => {
  it('deberia retornar el objeto Rick Sanchez al filtrar por genero hombre', () => {
    assert.deepEqual(window.filterGenders(sampleSpice, 'Male'), [{
      "name": "Rick Sanchez",
      "species": "Human",
      "gender": "Male",
      "status": "Alive",
      "episode": ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"],

    },{
      "name": "Amish Cyborg",
      "status": "Dead",
      "species": "Alien",
      "gender": "Male",
      "episode": ["https://rickandmortyapi.com/api/episode/15"],
    }]);
  });
});
describe("filterStatus", () => {
  it('deberia retornar el objeto Amish Cyborg al filtrar por genero muerto', () => {
    assert.deepEqual(window.filterStatus(sampleSpice, 'Dead'), [{
      "name": "Amish Cyborg",
      "status": "Dead",
      "species": "Alien",
      "gender": "Male",
      "episode": ["https://rickandmortyapi.com/api/episode/15"],
    }]);
  });
});
describe('calculePercent', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.calculePercent, 'function');
  });
  it('Debería retornar para Rick Sanchez el porcentaje: 100%', () => {
    assert.equal(window.calculePercent(sampleSpice[0].episode.length), 100);
  });
});
