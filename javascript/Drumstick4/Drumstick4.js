/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Drumstick4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("drumstick", "./Drumstick4/costumes/drumstick.svg", {
        x: 78.5,
        y: 7
      })
    ];

    this.sounds = [new Sound("Pop", "./Drumstick4/sounds/Pop.wav")];

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
    yield* this.wait(10);
    this.visible = true;
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.y = 200;
    while (true) {
      this.y -= 5;
      if (this.compare(this.y, -167) < 0) {
        this.goto(this.random(-100, 220), 180);
      }
      if (this.touching(this.sprites["TheColonel"].andClones())) {
        yield* this.increaseScore();
      }
      yield;
    }
  }

  *whenIReceiveGameOver() {
    while (true) {
      this.visible = false;
      yield;
    }
  }

  *increaseScore() {
    yield* this.playSoundUntilDone("Pop");
    this.stage.vars.score++;
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.y = 180;
  }
}
