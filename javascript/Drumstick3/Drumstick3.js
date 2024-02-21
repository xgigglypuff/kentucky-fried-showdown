/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Drumstick3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("drumstick", "./Drumstick3/costumes/drumstick.svg", {
        x: 78.5,
        y: 7
      })
    ];

    this.sounds = [new Sound("Pop", "./Drumstick3/sounds/Pop.wav")];

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
    yield* this.wait(20);
    this.visible = true;
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.y = 200;
    while (true) {
      this.y -= 7;
      if (this.compare(this.y, -167) < 0) {
        this.goto(this.random(-100, 220), 180);
      }
      if (this.touching(this.sprites["TheColonel"].andClones())) {
        yield* this.increaseScore();
      }
      yield;
    }
  }

  *increaseScore() {
    yield* this.playSoundUntilDone("Pop");
    this.stage.vars.score++;
    this.stage.watchers.score.visible = true;
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.y = 180;
  }

  *whenIReceiveGameOver() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
