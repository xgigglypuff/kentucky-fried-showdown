/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PressSpaceToBegin extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "press space to begin",
        "./PressSpaceToBegin/costumes/press space to begin.png",
        { x: 480, y: 360 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenKeySpacePressed() {
    this.visible = false;
  }
}
