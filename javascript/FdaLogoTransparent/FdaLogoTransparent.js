/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class FdaLogoTransparent extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "fda logo transparent",
        "./FdaLogoTransparent/costumes/fda logo transparent.png",
        { x: 480, y: 360 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
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

  *whenIReceiveGameOver() {
    while (true) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveStartGame() {
    yield* this.wait(80);
    this.visible = true;
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.y = 200;
    while (true) {
      this.move(3);
      /* TODO: Implement motion_ifonedgebounce */ null;
      this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
      if (this.touching(this.sprites["TheColonel"].andClones())) {
        this.visible = false;
        this.stage.vars.lives = 0;
        this.broadcast("game over");
      }
      yield;
    }
  }
}
