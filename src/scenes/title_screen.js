import Phaser from "phaser";

export default class titleScreen extends Phaser.Scene {
  preload() {
    this.load.image(
      "titleScreenBackground",
      "Backgrounds/game_background_3.png"
    );
  }

  create() {
    const titleScreenBackground = this.add.image(0, 0, "titleScreenBackground");

    const screenCenterX = this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.height / 2;
    const menuText = this.add
      .text(screenCenterX, screenCenterY, "Hello World!")
      .setOrigin(0.5, 0.5);
  }

  update() {}
}
