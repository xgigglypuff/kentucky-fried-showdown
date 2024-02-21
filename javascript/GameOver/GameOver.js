/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GameOver extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("game over", "./GameOver/costumes/game over.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [
      new Sound(
        "Sad Trombone - Gaming Sound Effect (HD)",
        "./GameOver/sounds/Sad Trombone - Gaming Sound Effect (HD).wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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

  *whenIReceiveGameOver() {
    this.visible = true;
    yield* this.playSoundUntilDone("Sad Trombone - Gaming Sound Effect (HD)");
  }
}
