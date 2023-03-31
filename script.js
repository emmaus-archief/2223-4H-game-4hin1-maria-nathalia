/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler



/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

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

  // vijand

  // kogel
};

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

var kitchenUtensils = function () {
  fill ("purple");
  ellipse (1000,250,250,200);  //bowl?
}

var verwerkBotsing = function() {

  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // background
  background("green");

  }

var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(2560, 1350);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('green');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    kitchenCounterUp();
    drawPlayer();
    kitchenCounterDown();
    kitchenUtensils();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}