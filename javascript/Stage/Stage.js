/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("starting", "./Stage/costumes/starting.png", {
        x: 480,
        y: 360
      }),
      new Costume("game background", "./Stage/costumes/game background.png", {
        x: 480,
        y: 360
      }),
      new Costume("game mode", "./Stage/costumes/game mode.png", {
        x: 480,
        y: 360
      }),
      new Costume("red", "./Stage/costumes/red.png", { x: 480, y: 360 })
    ];

    this.sounds = [
      new Sound("finger lickin good", "./Stage/sounds/finger lickin good.wav"),
      new Sound(
        "Cotton Eyed Joe by Rednex",
        "./Stage/sounds/Cotton Eyed Joe by Rednex.wav"
      ),
      new Sound(
        "Sad Trombone - Gaming Sound Effect (HD)",
        "./Stage/sounds/Sad Trombone - Gaming Sound Effect (HD).wav"
      )
    ];

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
        { name: "game over" },
        this.whenIReceiveGameOver
      )
    ];

    this.vars.score = 0;
    this.vars.lives = 3;

    this.watchers.score = new Watcher({
      label: "Score",
      style: "normal",
      visible: false,
      value: () => this.vars.score,
      x: 619,
      y: 175
    });
    this.watchers.lives = new Watcher({
      label: "Lives",
      style: "normal",
      visible: false,
      value: () => this.vars.lives,
      x: 242,
      y: 176
    });
  }

  *whenGreenFlagClicked() {
    this.watchers.lives.visible = false;
    this.watchers.score.visible = false;
    this.vars.score = 0;
    this.vars.lives = 3;
    this.costume = "starting";
    yield* this.wait(1);
    yield* this.playSoundUntilDone("finger lickin good");
  }

  *whenKeySpacePressed() {
    while (true) {
      if (this.costumeNumber === 1) {
        this.costume = "red";
        this.watchers.score.visible = false;
        this.watchers.lives.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveStartGame() {
    this.costume = "game background";
    yield* this.startSound("Cotton Eyed Joe by Rednex");
    yield* this.wait(2);
    this.costume = "game mode";
    this.watchers.score.visible = true;
    this.watchers.lives.visible = true;
  }

  *whenIReceiveGameOver() {
    this.stopAllSounds();
    this.costume = "red";
    yield* this.playSoundUntilDone("Sad Trombone - Gaming Sound Effect (HD)");
  }
}
