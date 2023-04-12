Deze repo is onderdeel van het vak informatica op het Emmauscollege Rotterdam.

[Meer info over deze opdracht](https://informatica.emmauscollege.nl/)

## Documentatie
- Khan Academy cursus JavaScript met p5js library <br>
https://www.khanacademy.org/computing/computer-programming/programming
- p5js reference <br>
https://p5js.org/reference/
- informatie van Emmauscollege over game opdracht <br>
https://emmauscollege.github.io/informatica/game/

## Credits
- Game template van het Emmauscollege Rotterdam <br>
        https://github.com/emmauscollege/4HV-game-template
- manifest.json <br>
        https://codelabs.developers.google.com/codelabs/your-first-pwapp/#3
- icon <br>
        http://www.iconarchive.com/show/android-lollipop-icons-by-dtafalonso/Play-Games-icon.html


## Stappenplan
- 1. Make moving character
     * **X** Create background (the room most of the game will be played in)
     * **X** Make bounds; the cat cant walk through kitchen counters and out of the room (yet)
     * **X** Draw character with AWSD keys to move 
     * Add walking animation to the character (temporary color change in object that we programmed to walk to indicate the changes in moving)

  2. Make responsive cooking gear
     * Draw 5(?) types of cooking gear
     * Give them a onClick function that changes the animation of the object (again a color change instead of the actual art, which will be added at the end of the game)
     * Make character be able to only to click on object when standing near it

2a. sequence maken
* Zorg dat je 10x moet klikken op de eerste cooking gear
* daarna 10x op de tweede
* daarna 10x op de derde
* daarna game over
  
2b tijd bouwen
* start tijd bij 0
* zet tijd op scherm
* laat tijd lopen
* toon tijd in gameover scherm


  3. Multiple POVs
     * Add a different scene when clicking on a cooking gear
     * Draw the different scenes
     * Make playable cooking games - add a clicker to each function for example

  4. Point system and NPC's
     * Make cat NPC - objects that from tie to time come visit you, and when you click on them you will be able to see their randomly generated requests


  5. Enemies; family
  6. Expand world; more rooms/areas
     * 
  7. Pixel art

Extra stuff
  
  8. Extra mini games for more points
  9. Clothing and accesoiries
  10. Secret easter eggs
