global.window = global;
global.assert = require('chai').assert;
require('../src/data/worldbank/worldbank.js');
require('./data.spec.js');
require('../src/data.js')




describe('mostrarIndicador', () => {
  it('debería ser una función', () => {
    assert.equal(typeof mostrarIndicador, 'function');
  });

});

describe('showDoughnutMaxValue', () => {
  it('debería ser una función', () => {
    assert.equal(typeof showDoughnutMaxValue, 'function');
  });
});

describe('showDoughnutAverageValue', () => {
  it('debería ser una función', () => {
    assert.equal(typeof showDoughnutAverageValue, 'function');
  });
});