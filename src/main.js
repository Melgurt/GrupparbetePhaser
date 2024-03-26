import Phaser from "phaser";

import titleScreen from "./scenes/title_screen";

const config = {
  width: 1900,
  height: 930,
  type: Phaser.AUTO,
};

const game = new Phaser.Game(config);

game.scene.add("titlescreen", titleScreen);

game.scene.start("titlescreen");
