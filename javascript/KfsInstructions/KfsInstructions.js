/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class KfsInstructions extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "kfs instructions",
        "./KfsInstructions/costumes/kfs instructions.svg",
        { x: 235.5, y: 180 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenKeySpacePressed() {
    while (true) {
      if (this.stage.costumeNumber === 1) {
        this.visible = true;
      }
      yield;
    }
  }

  *whenIReceiveStartGame() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
