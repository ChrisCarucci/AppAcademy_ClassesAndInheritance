const FriendlyDragon = require("./friendly-dragon");
const EvilDragon = require("./evil-dragon");
const Dragon = require("./dragon");

var falkor = new FriendlyDragon(
  'Falkor', 
  'white', 
  [
    "save Atreyu from the swamp", 
    "save Atreyu from the Nothing", 
    "scare the local bullies into a dumpster"
  ], 'Bastian'
);

var smaug = new EvilDragon(
  'Smaug',
  'black',
  [
    "take over your mountain kingdom", 
    "steal all your dwarven gold",
    "burn down your floating village"
  ],
  "Dwarf King"
);

allDragons = Dragon.getDragons(falkor, smaug)

module.exports = allDragons, falkor, smaug;