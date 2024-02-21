/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class KfsBroccoli extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kfs broccoli", "./KfsBroccoli/costumes/kfs broccoli.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("wahhh", "./KfsBroccoli/sounds/wahhh.wav")];

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

  *decreaseLives() {
    this.y -= 5;
    if (this.compare(this.y, -170) < 0) {
      this.goto(this.random(-100, 220), 180);
    }
    if (this.touching(this.sprites["TheColonel"].andClones())) {
      yield* this.startSound("wahhh");
      this.stage.vars.lives--;
      this.goto(this.random(-100, 220), 180);
    }
  }

  *whenIReceiveGameOver() {
    while (true) {
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveStartGame() {
    yield* this.wait(50);
    this.visible = true;
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.y = 200;
    while (!(this.compare(this.stage.vars.lives, 1) < 0)) {
      yield* this.decreaseLives();
      yield;
    }
    this.broadcast("game over");
  }
}
