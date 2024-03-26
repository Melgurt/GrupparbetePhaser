import Phaser from "phaser";

export default class titleScreen extends Phaser.Scene {
  prelead() {}

  create() {
    const text = this.add.text(400, 250, "Hello World!");
    text.setOrigin(-4, 0.5);
  }
}
