global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

//DESCRIBE QUE (A QUIEN) VOY A TESTEAR
describe('filterSpecies' () => {
const data = [
{"name": "Rick Sanchez"
  "species": "Human"
},
{"name": "Morty Smith"
  "species":"Human"
}
]

 it('debería retornar el objeto Rick Sanchez al filtar por especie humano', () =>{
asser.deepEqual(window.filterSpecies(muestra), "Humano"),
[{"name":"Rick Sanchez","species":"Human"}];


 })
