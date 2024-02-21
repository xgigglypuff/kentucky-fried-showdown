/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class EmptyKfcBucket extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "empty kfc bucket",
        "./EmptyKfcBucket/costumes/empty kfc bucket.png",
        { x: 480, y: 270 }
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
    this.visible = false;
  }

  *whenKeySpacePressed() {
    this.x = 52;
    this.y = -83;
    this.visible = true;
    /* TODO: Implement sensing_setdragmode */ null;
    while (true) {
      if (this.touching(this.sprites["IntroColonel"].andClones())) {
        this.broadcast("bucket time");
        yield* this.wait(0.1);
        this.visible = false;
        yield* this.wait(1);
        this.broadcast("start game");
      }
      yield;
    }
  }
}
