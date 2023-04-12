///<reference path="p5.global-mode.d.ts" />
"use strict"

//global variables
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var cooking1X = 1000;
var cooking1Clicks = 0;


//functions
/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // player
  if (keyIsDown(65)){
    spelerX = spelerX -2;
  };
  if (keyIsDown(68)){
    spelerX = spelerX +2;
  };
  if (keyIsDown(87)){
    spelerY = spelerY -2;
  };
  if (keyIsDown(83)){
    spelerY = spelerY +2;
  };
  
    //sprint when shift is down
  if (keyIsDown(65)&&keyIsDown(16)){
    spelerX = spelerX -4;
  };
  if (keyIsDown(68)&&keyIsDown(16)){
    spelerX = spelerX +4;
  };
  if (keyIsDown(87)&&keyIsDown(16)){
    spelerY = spelerY -4;
  };
  if (keyIsDown(83)&&keyIsDown(16)){
    spelerY = spelerY +4;
  };
    
  //borders
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
};

//variables of objects and player that are drawn
var kitchenCounterUp = function () {
  fill ("blue"); //backdrop
  rect (0,0,2560,250);
  
  fill("red");
  rect (0, 250, 2560, 300);

  fill("orange");  //upper counter top
  rect (0, 250, 2560, 150);
}

  var drawPlayer = function () {
  fill("white");
  rect(spelerX - 70, spelerY - 70, 140, 140); //body
  ellipse(spelerX, spelerY - 100, 150, 150);  //head
  fill("black");
  ellipse(spelerX, spelerY, 20, 20);  //centerpoint
}

var kitchenCounterDown = function () {
  fill ("red");
  rect (0, 1100, 2560, 300);  //down right counter
  rect (2100,1100, 800, 300);
  
}

var drawKitchenUtensil = function () {
  fill ("purple");
  ellipse (cooking1X,250,250,200);
}


//draws everything
var tekenAlles = function() {
  background("green");

  }

//scene checker/scene changes
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

//if mouse is clicked on button, draw scene 2

// setup() en draw() functies / hoofdprogramma
// setup, p5 library
function setup() {
  //canvas
  createCanvas(2560, 1350);
  background('green');
}

// draw function, after setup
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    tekenAlles();
    kitchenCounterUp();
    drawKitchenUtensil();
    drawPlayer();
    kitchenCounterDown();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
