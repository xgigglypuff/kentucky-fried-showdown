/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class IntroColonel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("the colonel", "./IntroColonel/costumes/the colonel.svg", {
        x: 44.61809045226141,
        y: 104.57788944723617
      }),
      new Costume(
        "colonel 0 chicken",
        "./IntroColonel/costumes/colonel 0 chicken.png",
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
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "bucket time" },
        this.whenIReceiveBucketTime
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenKeySpacePressed() {
    this.costume = "the colonel";
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

  *whenIReceiveBucketTime() {
    yield* this.wait(0.1);
    this.costume = "colonel 0 chicken";
  }
}
