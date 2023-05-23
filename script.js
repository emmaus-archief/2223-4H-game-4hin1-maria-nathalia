///<reference path="p5.global-mode.d.ts" />
"use strict"

function preload() {
  img = loadImage('silly cat.png');
  img2 = loadImage ("gosig.png");
}


//global variables
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;
var spelStatus = UITLEG;

var img;
var img2;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var cooking1X = 1000;
var cooking1Y = 250;
var cooking1Clicks = 0;
var mouseIsPressedBefore = false;

var mouseX = 0;
var mouseY = 0;

var timer = 500; // 10 seconde


//functions
/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  background ("green");
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
  };
  if (spelerY < 470) {
    spelerY = 470;
  };
  if (spelerX > 2490) { 
    spelerX = 2490; 
  };

  if (spelerX < 60) {
    spelerX = 60; 
  };

   // timer aanpassen
    timer = timer - 1;
  
// clicks op recept onderdelen
 if (mouseIsPressed && !mouseIsPressedBefore &&
     mouseX - cooking1X < 50 &&  mouseX - cooking1X > -50 &&
     mouseY - cooking1Y < 50 && mouseY - cooking1Y > -50) {
         cooking1Clicks +=1; 
  }

  mouseIsPressedBefore = mouseIsPressed;
};


var countClicks = function () {
  if (cooking1Clicks === 15) {
    console.log("enoughclicks");
  }
}

var startButton = function () {
  fill ("pink")
  rect (100,900,300,150);
  fill ("black")
  text ("start", 125, 1000)
}
  
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
  fill (218, 66, 245);
  ellipse (cooking1X, cooking1Y, 250,200);

  fill (0,0,0);
  textSize(100);
  text (cooking1Clicks, 200,200);
}


//draws everything
var tekenAlles = function() {
  text("timer:"+timer, 600, 100);
  }

//scene checker/scene changes
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  if (timer <= 0) {
    return true;
  }
  return false;
};



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
    countClicks();
    kitchenCounterUp();
    drawKitchenUtensil();
    drawPlayer();
    kitchenCounterDown();
    startButton();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    console.log ("play");
  }
  if (spelStatus === GAMEOVER) {
    console.log ("gameover");
      image(img2, 0, 0);
    if (keyIsDown(32)) {
      spelStatus = UITLEG; 
    }
  }
  if (spelStatus === UITLEG) {
  console.log ("uitleg");
    image(img, 0, 0, 2560, 1280);
    if (keyIsDown(13)) {
      spelerX = 600;
      spelStatus = SPELEN;
    }
  }
}
