///<reference path="p5.global-mode.d.ts" />
"use strict";

function preload() {
  img = loadImage("images/uitleg1.png");
  img2 = loadImage("images/gameover.png");
  img3 = loadImage("images/uitleg2.png");
  img4 = loadImage("images/kitchenbackground.png");
  img5 = loadImage("images/cat head.png");
  img6 = loadImage("images/win.png");
  img7 = loadImage("images/pastabowl.png");
  img8 = loadImage("images/banner1.png");
  img9 = loadImage("images/catbody.png");
  img10 = loadImage("images/cat.png");
}

// Global variables
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;
const UITLEG2 = 4;
const WIN = 5;
const LEVELS = 6;
var spelStatus = UITLEG;

var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10; 

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var cooking1X = 1000;
var cooking1Y = 250;
var cooking1Clicks = 0;
var mouseIsPressedBefore = false;

var mouseX = 0;
var mouseY = 0;

var timer = 10000; // 10 seconden

// Functions
/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  background("green");
  // player
  if (keyIsDown(65)) {
    spelerX = spelerX - 2;
  }
  if (keyIsDown(68)) {
    spelerX = spelerX + 2;
  }
  if (keyIsDown(87)) {
    spelerY = spelerY - 2;
  }
  if (keyIsDown(83)) {
    spelerY = spelerY + 2;
  }

  // sprint when shift is down
  if (keyIsDown(65) && keyIsDown(16)) {
    spelerX = spelerX - 4;
  }
  if (keyIsDown(68) && keyIsDown(16)) {
    spelerX = spelerX + 4;
  }
  if (keyIsDown(87) && keyIsDown(16)) {
    spelerY = spelerY - 4;
  }
  if (keyIsDown(83) && keyIsDown(16)) {
    spelerY = spelerY + 4;
  }

  // borders
  if (spelerY > 1080) {
    spelerY = 1080;
  }
  if (spelerY < 470) {
    spelerY = 470;
  }
  if (spelerX > 2490) {
    spelerX = 2490;
  }

  if (spelerX < 60) {
    spelerX = 60;
  }

  // timer aanpassen
  timer = timer - 1;

  // clicks op recept onderdelen
  if (
    mouseIsPressed &&
    !mouseIsPressedBefore &&
    mouseX - cooking1X < 50 &&
    mouseX - cooking1X > -50 &&
    mouseY - cooking1Y < 50 &&
    mouseY - cooking1Y > -50 && 
    spelerX > 850 &&
    spelerX < 1150 &&
    spelerY > 450 &&
    spelerY < 700
  ) {
    cooking1Clicks += 1;
  }

  mouseIsPressedBefore = mouseIsPressed;
};

// Variables of objects and player that are drawn
var kitchenCounterUp = function () {
  image(img4, 0, 0); //kitchen background
  
  /*fill("blue");
  rect (850, 580, 300, 150); //kitcjen mat*/
};

var drawPlayer = function () {
  fill("white");
  /*rect(spelerX - 80, spelerY - 80, 150, 150); // body
  ellipse(spelerX, spelerY - 90, 160, 160); // head
  image(img9, spelerX - 80, spelerY - 80); //body
  image(img5, spelerX - 80, spelerY - 210); //head
  rect(spelerX - 150, spelerY - 200, 200, 350);*/
  image(img10, spelerX - 150, spelerY - 200);
};

var kitchenCounterDown = function () {
  /*fill("red");
  rect(200, 900, 2160, 400); // down counter*/
  image(img8, 200, 900);
};

var drawKitchenUtensil = function () {
  /*fill(218, 66, 245);
  ellipse(cooking1X, cooking1Y, 250, 200);*/
  image(img7, 875, 180); //bowl

  fill(0, 0, 0);
  textSize(100);
  text(cooking1Clicks, 200, 200);
};

var countClicks = function () {
  if (cooking1Clicks === 45) {
    console.log("enoughclicks");
  }
};

// Draws everything
var tekenAlles = function () {
  text("timer:" + timer, 600, 100);
};

// Scene checker/scene changes
var checkGameOver = function () {
  // Check of HP 0 is, of tijd op is, of ...
  if (timer <= 0 && cooking1Clicks < 45) {
    return true;
  }
  if (timer <= 0 && cooking1Clicks >= 45) 
    spelStatus = WIN;
};

// setup() and draw() functions / hoofdprogramma
// Setup, p5 library
function setup() {
  // Canvas
  createCanvas(2560, 1350);
  background("green");
}

// Draw function, after setup
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    countClicks();
    kitchenCounterUp();
    drawKitchenUtensil();
    drawPlayer();
    kitchenCounterDown();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    console.log("play");
  }
  if (spelStatus === GAMEOVER) {
    console.log("gameover");
    background("black");
    image(img2, 0, 0);
    fill ("black");
    text("your score: " + cooking1Clicks, 100, 100);
    text ("press backspace to try again", 100, 250);
    if (keyIsDown(8)) {
      spelStatus = UITLEG;
    }
  }
  if (spelStatus === UITLEG) {
    console.log("uitleg");
    background("#b6ddff");
    image(img, 0, 0, 2560, 1280);
    if (keyIsDown(32)) {
      spelStatus = UITLEG2;
    }
  }

  if (spelStatus === UITLEG2) {
    console.log("uitleg2");
    background("#b6b6ff")
    image(img3, 0, 0, 2560, 1280);
    if (keyIsDown(13)) {
      spelerX = 600;
      cooking1Clicks = 0;
      timer = 1000;
      spelStatus = SPELEN;
    }
  }
  
  if (spelStatus === WIN) {
    console.log("win");
    background ("white");
    image(img6, 0, 0, 2560, 1280);
    fill ("black");
    text("your score: " + cooking1Clicks, 100, 100);
    text ("press enter to contuine", 100, 250);
    if (keyIsDown(13)) {
      spelerX = 600;
      cooking1Clicks = 0;
      timer = 1000;
      spelStatus = SPELEN;
    }
  }
}
  /*function draw() {
  if (spelStatus === SPELEN2) {
    beweegAlles();
    countClicks();
    kitchenCounterUp();
    drawKitchenUtensil2();
    drawPlayer();
    kitchenCounterDown();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    console.log("play2");
  }
}*/