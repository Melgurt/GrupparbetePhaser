import Phaser from "phaser";

export default class titleScreen extends Phaser.Scene {
  prelead() {}

  create() {
    this.add.text(400, 250, "Hello World!");
  }
}
