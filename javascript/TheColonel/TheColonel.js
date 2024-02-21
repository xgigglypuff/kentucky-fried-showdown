/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TheColonel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "colonel 0 chicken",
        "./TheColonel/costumes/colonel 0 chicken.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "colonel 1 chicken",
        "./TheColonel/costumes/colonel 1 chicken.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "colonel 2 chicken",
        "./TheColonel/costumes/colonel 2 chicken.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "colonel full chicken",
        "./TheColonel/costumes/colonel full chicken.png",
        { x: 480, y: 270 }
      )
    ];

    this.sounds = [new Sound("yeehaw", "./TheColonel/sounds/yeehaw.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start game" },
        this.whenIReceiveStartGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenKeyLeftArrowPressed() {
    this.x -= 25;
  }

  *whenKeyRightArrowPressed() {
    this.x += 25;
  }

  *whenKeyUpArrowPressed() {
    this.y += 40;
    yield* this.startSound("yeehaw");
    yield* this.wait(0.15);
    this.y -= 40;
  }

  *whenIReceiveStartGame() {
    this.costume = "colonel 0 chicken";
    this.goto(0, -76);
    this.visible = true;
    while (!(this.compare(this.stage.vars.score, 2) > 0)) {
      if (this.toNumber(this.stage.vars.score) === 1) {
        this.costume = "colonel 1 chicken";
      }
      if (this.toNumber(this.stage.vars.score) === 2) {
        this.costume = "colonel 2 chicken";
      }
      yield;
    }
    this.costume = "colonel full chicken";
  }

  *whenIReceiveGameOver() {
    this.visible = false;
  }

  *whenKeyDownArrowPressed() {
    this.y -= 40;
    yield* this.wait(0.15);
    this.y += 40;
  }
}
