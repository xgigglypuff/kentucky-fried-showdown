import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import IntroColonel from "./IntroColonel/IntroColonel.js";
import TheColonel from "./TheColonel/TheColonel.js";
import EmptyKfcBucket from "./EmptyKfcBucket/EmptyKfcBucket.js";
import Drumstick from "./Drumstick/Drumstick.js";
import Drumstick2 from "./Drumstick2/Drumstick2.js";
import Drumstick4 from "./Drumstick4/Drumstick4.js";
import Drumstick3 from "./Drumstick3/Drumstick3.js";
import KentuckyFriedShowdownLogo from "./KentuckyFriedShowdownLogo/KentuckyFriedShowdownLogo.js";
import PressSpaceToBegin from "./PressSpaceToBegin/PressSpaceToBegin.js";
import KfsInstructions from "./KfsInstructions/KfsInstructions.js";
import Carrot from "./Carrot/Carrot.js";
import KfsBroccoli from "./KfsBroccoli/KfsBroccoli.js";
import KfsTomato from "./KfsTomato/KfsTomato.js";
import FdaLogoTransparent from "./FdaLogoTransparent/FdaLogoTransparent.js";
import GameOver from "./GameOver/GameOver.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  IntroColonel: new IntroColonel({
    x: -67,
    y: -70,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 60,
    visible: false,
    layerOrder: 8
  }),
  TheColonel: new TheColonel({
    x: -125,
    y: -76,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 90,
    visible: false,
    layerOrder: 13
  }),
  EmptyKfcBucket: new EmptyKfcBucket({
    x: -53,
    y: -89,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 15
  }),
  Drumstick: new Drumstick({
    x: 191,
    y: -70,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 45,
    visible: false,
    layerOrder: 14
  }),
  Drumstick2: new Drumstick2({
    x: 205,
    y: 66,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 45,
    visible: false,
    layerOrder: 4
  }),
  Drumstick4: new Drumstick4({
    x: 7,
    y: -5,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 45,
    visible: false,
    layerOrder: 2
  }),
  Drumstick3: new Drumstick3({
    x: 108,
    y: 40,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 45,
    visible: false,
    layerOrder: 3
  }),
  KentuckyFriedShowdownLogo: new KentuckyFriedShowdownLogo({
    x: 0,
    y: 14,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 105,
    visible: true,
    layerOrder: 5
  }),
  PressSpaceToBegin: new PressSpaceToBegin({
    x: 65,
    y: -98,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  KfsInstructions: new KfsInstructions({
    x: 5,
    y: -4,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Carrot: new Carrot({
    x: -102,
    y: 33,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 9
  }),
  KfsBroccoli: new KfsBroccoli({
    x: -31,
    y: -39,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 24,
    visible: false,
    layerOrder: 10
  }),
  KfsTomato: new KfsTomato({
    x: 87,
    y: 32,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 11
  }),
  FdaLogoTransparent: new FdaLogoTransparent({
    x: 84,
    y: -34,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 12
  }),
  GameOver: new GameOver({
    x: -6,
    y: 17,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
