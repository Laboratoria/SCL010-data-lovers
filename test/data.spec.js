global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data.js')
require('./data.spec.js');

const testData = [
  {
    "name": "Slowpoke",
    "type":
    [
      "Water",
      "Psychic"
    ]
  }
];

describe('filterData', () => {

  it('debería ser una función', () => {
    assert.equal(typeof filterData, 'function');
  });
  it('debería devolver el objeto Slowpoke al seleccionar tipo "Water" ', () => {
    assert.deepEqual(window.filterData(testData, "Water"),[
      {
        "name": "Slowpoke",
        "type":
        [
          "Water",
          "Psychic"
        ]
      }
    ])
  });
});
