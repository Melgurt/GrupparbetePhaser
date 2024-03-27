import Phaser from "phaser";

import titleScreen from "./scenes/title_screen";

const config = {
  width: window.innerWidth,
  height: window.innerHeight,
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);

window.addEventListener("resize", function () {
  game.scale.resize(window.innerWidth, window.innerHeight);
});

game.scene.add("titlescreen", titleScreen);

game.scene.start("titlescreen");
