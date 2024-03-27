import Phaser from "phaser";

export default class titleScreen extends Phaser.Scene {
  preload() {
    this.load.image("background", "Backgrounds/game_background_3. 2.png");
  }

  create() {
    const screenCenterX = this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.height / 2;
    const menuText = this.add
      .text(screenCenterX, screenCenterY, "Hello World!")
      .setOrigin(0.5, 0.5);
  }
}
