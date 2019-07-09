global.window = global;
global.assert = require("chai").assert;
require("../src/data/pokemon/pokemon.js");
require("../src/data.js")
require("./data.spec.js");

const testData = [
  { "id": 79,
    "num": "079",
    "name": "Slowpoke",
    "type":
    [
      "Water",
      "Psychic"
    ]
  },
  {
   "id": 97,
   "num": "097",
   "name": "Hypno",
   "img": "http://www.serebii.net/pokemongo/pokemon/097.png",
   "type": [
     "Psychic"
    ]
  },
  {
   "id": 150,
   "num": "150",
   "name": "Mewtwo",
   "img": "http://www.serebii.net/pokemongo/pokemon/150.png",
   "type": [
     "Psychic"
   ]
  }
];

describe("filterData", () => {

  it('Debería ser una función', () => {
    assert.equal(typeof filterData, "function");
  });
  it('Debería devolver el objeto Slowpoke al seleccionar tipo "Water" ', () => {
    assert.deepEqual(window.filterData(testData, "Water"),[
      { "id": 79,
        "num": "079",
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

describe("sortData", () => {

  it('Debería ser una función', () => {
    assert.equal(typeof sortData, "function");
  });
  it('Debería devolver los objetos "Hypno", "Mewtwo", "Slowpoke" (ordenados de la A a la Z)', () => {
    assert.deepEqual(window.sortData(testData, "A-Z", "A-Z"),[
      {
         "id": 97,
         "num": "097",
         "name": "Hypno",
         "img": "http://www.serebii.net/pokemongo/pokemon/097.png",
         "type": [
           "Psychic"
          ]
        },
        {
         "id": 150,
         "num": "150",
         "name": "Mewtwo",
         "img": "http://www.serebii.net/pokemongo/pokemon/150.png",
         "type": [
           "Psychic"
         ]
       },
       { "id": 79,
         "num": "079",
         "name": "Slowpoke",
         "type":
         [
           "Water",
           "Psychic"
         ]
       }
    ])
  });
  it('Debería devolver los objetos "Slowpoke", "Mewtwo", "Hypno" (ordenados de la Z a la A)', () => {
    assert.deepEqual(window.sortData(testData, "Z-A", "Z-A"),[
      { "id": 79,
        "num": "079",
        "name": "Slowpoke",
        "type":
        [
          "Water",
          "Psychic"
        ]
      },
      {
         "id": 150,
         "num": "150",
         "name": "Mewtwo",
         "img": "http://www.serebii.net/pokemongo/pokemon/150.png",
         "type": [
           "Psychic"
         ]
       },
       {
          "id": 97,
          "num": "097",
          "name": "Hypno",
          "img": "http://www.serebii.net/pokemongo/pokemon/097.png",
          "type": [
            "Psychic"
           ]
        },
    ])
  });
  it('Debería devolver los objetos con id "79", "97", "150" (ordenados del 1 al 151)', () => {
    assert.deepEqual(window.sortData(testData, "1-151", "1-151"),[
      { "id": 79,
        "num": "079",
        "name": "Slowpoke",
        "type":
        [
          "Water",
          "Psychic"
        ]
      },
      {
       "id": 97,
       "num": "097",
       "name": "Hypno",
       "img": "http://www.serebii.net/pokemongo/pokemon/097.png",
       "type": [
         "Psychic"
        ]
      },
      {
       "id": 150,
       "num": "150",
       "name": "Mewtwo",
       "img": "http://www.serebii.net/pokemongo/pokemon/150.png",
       "type": [
         "Psychic"
       ]
      }
    ])
  });  it('Debería devolver los objetos con id "150", "97", "79" (ordenados de la Z a la A)', () => {
      assert.deepEqual(window.sortData(testData, "151-1", "151-1"),[
        {
           "id": 150,
           "num": "150",
           "name": "Mewtwo",
           "img": "http://www.serebii.net/pokemongo/pokemon/150.png",
           "type": [
             "Psychic"
           ]
         },
         {
            "id": 97,
            "num": "097",
            "name": "Hypno",
            "img": "http://www.serebii.net/pokemongo/pokemon/097.png",
            "type": [
              "Psychic"
             ]
          },
          { "id": 79,
            "num": "079",
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