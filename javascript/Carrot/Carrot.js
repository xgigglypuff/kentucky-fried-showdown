/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Carrot extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("carrot", "./Carrot/costumes/carrot.png", { x: 116, y: 198 })
    ];

    this.sounds = [new Sound("wahhh", "./Carrot/sounds/wahhh.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartGame() {
    yield* this.wait(25);
    this.visible = true;
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.y = 200;
    while (!(this.compare(this.stage.vars.lives, 1) < 0)) {
      yield* this.decreaseLives();
      yield;
    }
    this.broadcast("game over");
  }

  *decreaseLives() {
    this.y -= 4;
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
}
