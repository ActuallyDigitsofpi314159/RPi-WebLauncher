function program() {
  title("DASH Parkour");
  size(600, 600);
  strokeCap(ROUND);
  strokeJoin(ROUND);

  /** 
         ___   _   ___ _  _         
        |   \ /_\ / __| || |        
        | |) / _ \\__ \ __ |        
   ___  |___/_/ \_\___/_||_|  _ ___ 
  | _ \/_\ | _ \ |/ / _ \| | | | _ \
  |  _/ _ \|   / ' < (_) | |_| |   /
  |_|/_/ \_\_|_\_|\_\___/ \___/|_|_\
      by Digitsofpi and Kineto
  
  For best experience, add ?width=900&height=900 to the end of the URL.
  
  
  DEVELOPERS' NOTE [
  
      It's been a wild ride for Dash Parkour. This game started in the fall of 2023 when I was still in middle school. Through many papers full of planning, and a lot of breaks, this game's development spanned nearly 3 years. My favorite part of the game are the boss fights. I designed them over a 10 hour long car ride lol. That is the part I am most proud of, and I hope you enjoy them.
      So after 3 years, countless hours of coding with Digits, many converations about the game's mechanics, and over 23,000 lines of code, Digits and I present to you...
      DASH Parkour.
      
      - Kineto (have fun guys)
      
      
      We've had countless game ideas, most of which were never completed in whole. Throughout all our projects, all our ideas, none were as ambitious as Dash Parkour. Three years ago, we started work on a platformer. On and off work over what felt like forever had slow but steady progress, but by the time we were finally ready to work on it full time, the code looked old and sloppy. Reluctantly, we decided to start from scratch. Boy, did it pay off. I think Dash Parkour ended better than either of us expected. Over 20,000 lines of code throughout the course of months on months battling time, we can hardly believe it happened.
      Dash parkour - Digitsofpi and Kineto's last dance.
      
      - Digitsofpi
  
  ]
  
  @How_to_Save: [
  
      1. Press 'P' to print your savecode.
      
      2. Copy the savecode (second line)
      
      3. Paste on line 98
  
  ]
  
  @Keybinds: [
   * A or LEFT ARROW to move left
   * D or RIGHT ARROW to move right
   * W, UP ARROW, or SPACEBAR to jump
   * Hold R to reset charecter
   * Use scrollwheel to scroll through menus.
   * 
   * Developer Keybinds:
   * ALT to print FPS
   * Y to toggle debug mode
   * H to toggle hitboxes
   * C to verify savecode
  ]
  
  @Leaderboard [
   1. Could be you!
   2. Could be you!
   3. Could be you!
   4. Could be you!
   5. Could be you!
  ]
  
  @Bug_Tracker [
   * not all hitboxes render in showHitboxes
   * boss waves do not reset upon game over (possibly fixed)
   * 8-bit skin does not show up just in shop list
   * Boss phase 3 does not properly reset off of a game over (sizing and damage issue in regular level)
   * Test spike wall attack
  ]
  
  @Optimizations: [
   This section contains optimizations that have not yet been implemented. If anyone wants to help get these done, it would be much appreciated!
  
   * Collision "culling":
   * Only check collisions of objects that are within a small radius of the player.
   * 
   * Draw call culling:
   * Skip drawing objects that are out of the camera's view.
   * 
   * Bake all chars in text so they are just an image call.
  ]
  
  @Credits: [
   * OpenAI's ChatGPT-5 AI language model for general logical assistance
   * Google's Gemini for Final Boss help
   * RomanStarCoder for Bluey the Circle reference
   * Daniel for Loop Protector
   * Achievements page & death screen inspired by Doors
   * Larry is rush from Doors
   * Level Complete screen inspired from mario wonder (wahoo)
  ]
  
  TODO [
   * Fix bugs when we find the time
  ]
  
  */

  var saveCode = "";
  // replace this ENTIRE line with your save code.

  // Custom Fonts & librarys setup [

  if (typeof LoopProtector !== "undefined") {
    LoopProtector.prototype.leave = function () {};
  } // Daniel's Loop Protector

  // Will be populated later
  var imgs = {};

  // ArcDash Custom Font setup [

  var arcDashSize = 15;
  // call this like you do textsize 
  var arcSize = function arcSize(THIS) {
    arcDashSize = THIS;
  };
  var arcDashAlign = LEFT;
  // and this like textAlign
  var arcAlign = function arcAlign(THIS) {
    arcDashAlign = THIS;
  };

  // ArcDash layout is measured arithmetically; measuring never submits geometry.
  var arcGlyphWidths = {
    "0": 1.6,
    "1": 1,
    "2": 1.6,
    "3": 1.1,
    "4": 1.4,
    "5": 1.6,
    "6": 1.6,
    "7": 1.5,
    "8": 1.6,
    "9": 1.6,
    "!": 0.7,
    "%": 1.6,
    "&": 1.5,
    "'": 0.8,
    ",": 0.8,
    "-": 1.1,
    ".": 0.8,
    ":": 1,
    "?": 1.6,
    "A": 1.5,
    "B": 1.5,
    "C": 1.5,
    "D": 1.5,
    "E": 1.4,
    "F": 1.2,
    "G": 1.5,
    "H": 1.5,
    "I": 1.5,
    "J": 1.4,
    "K": 1.5,
    "L": 1.4,
    "M": 1.8,
    "N": 1.5,
    "O": 1.5,
    "P": 1.4,
    "Q": 1.5,
    "R": 1.5,
    "S": 1.5,
    "T": 1.4,
    "U": 1.5,
    "V": 1.5,
    "W": 1.5,
    "X": 1.5,
    "Y": 1.5,
    "Z": 1.5,
    "a": 1.1,
    "b": 1.2,
    "c": 1.2,
    "d": 1.2,
    "e": 1.3,
    "f": 1.4,
    "g": 1.2,
    "h": 1.2,
    "i": 0.5,
    "j": 1.2,
    "k": 1.15,
    "l": 0.8,
    "m": 1.8,
    "n": 1.1,
    "o": 1.2,
    "p": 1.3,
    "q": 1.4,
    "r": 1,
    "s": 1,
    "t": 1,
    "u": 1.1,
    "v": 1.3,
    "w": 1.9,
    "x": 1.2,
    "y": 1.2,
    "z": 1.4,
    "|": 1,
    " ": 1,
    "\n": 0
  };
  var arcLayouts = Object.create(null),
    arcLayoutKeys = [],
    arcLayoutCharacters = 0;
  var arcTextCacheStats = {
    layoutHits: 0,
    layoutMisses: 0,
    rasterHits: 0,
    rasterMisses: 0,
    pixels: 0
  };
  var drawArcGlyph = function drawArcGlyph(c, x, y, s, graphics) {
    var glyphLine = graphics ? graphics.line : line;
    var glyphArc = graphics ? graphics.arc : arc;
    var glyphEllipse = graphics ? graphics.ellipse : ellipse;
    var glyphPoint = graphics ? graphics.point : point;
    switch (c) {
      //UPPERCASE [

      case 'A':
        glyphArc(x + s / 2, y, s, s * 2, 180, 360);
        glyphLine(x, y, x, y + s / 2);
        glyphLine(x + s, y, x + s, y + s / 2);
        glyphLine(x + s / 10, y - s / 10, x + s / 1.7, y - s / 10);
        return 1.5 * s;
      // width
      case 'B':
        glyphLine(x, y - s / 1.1, x, y + s / 2);
        glyphArc(x + s / 10, y - s / 1.8, s * 1.3, s / 1.3, 270, 450);
        glyphArc(x + s / 10, y + s / 5, s * 1.6, s / 1.3, 270, 430);
        //rect(x, y, s, s);
        return 1.5 * s;
      // width
      case 'C':
        glyphArc(x + s / 1.5, y - s / 5, s * 1.5, s * 1.5, 70, 290);
        return 1.5 * s;
      // width
      case 'D':
        glyphLine(x, y - s / 1.1, x, y + s / 2);
        glyphArc(x + s / 6, y - s / 5, s * 1.5, s * 1.5, 260, 430);
        //rect(x, y, s, s);
        return 1.5 * s;
      // width
      case 'E':
        glyphLine(x, y - s / 1.6, x, y + s / 4);
        glyphArc(x + s / 3.5, y - s / 1.4, s / 2, s / 2, 180, 270);
        glyphArc(x + s / 3.5, y + s / 3, s / 2, s / 2, 90, 180);
        glyphLine(x + s / 3.5, y - s, x + s / 1.2, y - s);
        glyphLine(x + s / 3.5, y + s / 1.7, x + s / 1.2, y + s / 1.7);
        glyphLine(x + s / 6, y - s / 4, x + s / 1.5, y - s / 4);
        //rect(x, y, s, s);
        return 1.4 * s;
      // width
      case 'F':
        glyphLine(x, y - s / 1.4, x, y + s / 1.7);
        glyphArc(x + s / 3.5, y - s / 1.4, s / 2, s / 2, 180, 270);
        glyphLine(x + s / 3.5, y - s, x + s / 1.2, y - s);
        glyphLine(x + s / 3, y - s / 4, x + s / 1.5, y - s / 4);
        return 1.2 * s;
      // width
      case 'G':
        glyphArc(x + s / 2, y - s / 5, s * 1.3, s * 1.5, 20, 290);
        glyphLine(x + s, y, x + s / 2, y);
        return 1.5 * s;
      // width
      case 'H':
        glyphLine(x, y - s, x, y + s / 1.7);
        glyphLine(x + s, y - s, x + s, y + s / 1.7);
        glyphLine(x + s / 6, y - s / 4, x + s / 1.5, y - s / 4);
        //rect(x, y, s, s);
        return 1.5 * s;
      // width
      case 'I':
        glyphLine(x + s / 2, y - s, x + s / 2, y + s / 1.7);
        glyphLine(x + s / 6, y - s, x + s / 1.2, y - s);
        glyphLine(x + s / 6, y + s / 1.6, x + s / 1.2, y + s / 1.6);
        return 1.5 * s;
      // width
      case 'J':
        glyphLine(x + s / 2, y - s, x + s / 2, y + s / 3);
        glyphArc(x + s / 6, y + s / 5, s / 1.5, s, 0, 180);
        glyphLine(x + s / 6, y - s, x + s / 1.2, y - s);
        return 1.4 * s;
      // width
      case 'K':
        glyphLine(x, y - s, x, y + s / 1.7);
        glyphLine(x + 1, y - s / 6, x + s, y - s);
        glyphLine(x + s / 2.5, y, x + s, y + s / 1.7);
        //rect(x, y, s, s);
        return 1.5 * s;
      // width
      case 'L':
        glyphLine(x, y - s, x, y + s / 4);
        glyphArc(x + s / 3.5, y + s / 3, s / 2, s / 2, 90, 180);
        glyphLine(x + s / 3, y + s / 1.7, x + s / 1.3, y + s / 1.7);
        //rect(x, y, s, s);
        return 1.4 * s;
      // width
      case 'M':
        glyphLine(x, y - s / 1.5, x, y + s / 1.7);
        glyphArc(x + s / 5, y - s / 1.3, s / 3, s / 2, 180, 320);
        glyphLine(x + s / 3, y - s / 1.1, x + s / 1.7, y - s / 3);
        glyphLine(x + s / 1.7, y - s / 3, x + s / 1.05, y - s / 1.1);
        glyphArc(x + s * 1.1, y - s / 1.3, s / 3, s / 2, 230, 360);
        glyphLine(x + s * 1.26, y - s / 1.3, x + s * 1.26, y + s / 1.7);
        //rect(x, y, s, s);
        return 1.8 * s;
      // width
      case 'N':
        glyphLine(x, y - s / 1.1, x, y + s / 1.7);
        glyphLine(x, y - s / 1.1, x + s / 1.1, y + s / 1.7);
        glyphLine(x + s / 1.1, y - s / 1.1, x + s / 1.1, y + s / 1.7);
        return 1.5 * s;
      // width
      case 'O':
        //My favorite
        glyphEllipse(x + s / 2, y - s / 5, s * 1.3, s * 1.6);
        return 1.5 * s;
      // width
      case 'P':
        glyphLine(x, y - s / 1.1, x, y + s / 2);
        glyphArc(x + s / 6, y - s / 1.8, s * 1.5, s / 1.1, 260, 430);
        //rect(x, y, s, s);
        return 1.4 * s;
      // width
      case 'Q':
        glyphEllipse(x + s / 2, y - s / 5, s * 1.2, s * 1.5);
        glyphLine(x + s / 2, y, x + s, y + s / 1.7);
        //rect(x, y, s, s);
        return 1.5 * s;
      // width
      case 'R':
        glyphLine(x, y - s / 1.1, x, y + s / 2);
        glyphArc(x + s / 6, y - s / 1.8, s * 1.5, s / 1.1, 260, 450);
        glyphLine(x + 1, y, x + s / 1.1, y + s / 1.7);
        return 1.5 * s;
      // width
      case 'S':
        glyphArc(x + s / 2, y - s / 1.6, s, s / 1.2, 100, 290);
        glyphArc(x + s / 3, y + s / 5, s, s / 1.2, 270, 480);
        //rect(x, y, s, s);
        return 1.5 * s;
      // width
      case 'T':
        glyphLine(x + s / 2, y - s, x + s / 2, y + s / 1.7);
        glyphLine(x + s / 12, y - s, x + s / 1.1, y - s);
        return 1.4 * s;
      // width
      case 'U':
        glyphArc(x + s / 1.9, y - s / 5, s, s * 1.7, 0, 180);
        glyphLine(x, y - s, x, y - s / 3);
        glyphLine(x + s, y - s, x + s, y - s / 3);
        return 1.5 * s;
      // width
      case 'V':
        glyphLine(x, y - s, x + s / 2.7, y + s / 2.3);
        glyphArc(x + s / 2, y + s / 8, s / 2.5, s, 50, 130);
        glyphLine(x + s, y - s, x + s / 1.6, y + s / 2.3);
        //rect(x, y, s, s);
        return 1.5 * s;
      // width
      case 'W':
        glyphLine(x, y - s / 1.1, x, y);
        glyphArc(x + s / 3.5, y + s / 8, s / 2, s, 0, 180);
        glyphArc(x + s / 1.3, y + s / 8, s / 2, s, 0, 180);
        glyphLine(x + s, y - s / 1.1, x + s, y);
        return 1.5 * s;
      // width
      case 'X':
        glyphLine(x, y - s, x + s, y + s / 1.7);
        glyphLine(x, y + s / 1.7, x + s, y - s);
        return 1.5 * s;
      // width
      case 'Y':
        glyphLine(x, y - s, x + s / 2, y - s / 4);
        glyphLine(x + s, y - s, x + s / 2, y - s / 4);
        glyphLine(x + s / 2, y + s / 1.7, x + s / 2, y - s / 4);
        return 1.5 * s;
      // width
      case 'Z':
        glyphLine(x, y - s, x + s / 1.3, y - s);
        glyphArc(x + s / 1.1, y - s / 1.2, s / 3, s / 3, 270, 430);
        glyphLine(x + s / 7, y + s / 5, x + s, y - s / 1.4);
        glyphArc(x + s / 5, y + s / 2.4, s / 3, s / 3, 90, 220);
        glyphLine(x + s / 3, y + s / 1.7, x + s, y + s / 1.7);
        return 1.5 * s;
      // width

      //]

      //LOWERCASE [

      case 'a':
        glyphEllipse(x + s / 5, y + s / 4, s / 1.5, s / 1.5);
        glyphLine(x + s / 1.6, y - s / 5, x + s / 1.6, y + s / 1.7);
        return 1.1 * s;
      // width
      case 'b':
        glyphEllipse(x + s / 2.7, y + s / 4, s / 1.5, s / 1.5);
        glyphLine(x, y - s, x, y + s / 8);
        return 1.2 * s;
      //width
      case 'c':
        glyphArc(x + s / 2, y + s / 4, s / 1.2, s / 1.3, 70, 290);
        return 1.2 * s;
      //width
      case 'd':
        glyphEllipse(x + s / 3, y + s / 4, s / 1.5, s / 1.5);
        glyphLine(x + s / 1.5, y - s, x + s / 1.5, y + s / 8);
        return 1.2 * s;
      //width
      case 'e':
        glyphArc(x + s / 2.5, y + s / 4, s * 0.8, s * 0.8, 180, 340);
        glyphArc(x + s / 2.5, y + s / 3.5, s * 0.8, s * 0.7, 45, 180);
        glyphLine(x + s / 1.5, y + s / 5.7, x + s / 3, y + s / 5.5);
        return 1.3 * s;
      //width
      case 'f':
        glyphArc(x + s / 1.45, y - s / 2, s / 1.5, s, 180, 360);
        glyphLine(x + s / 3, y - s / 2, x + s / 3, y + s / 1.7);
        glyphLine(x, y - s / 4, x + s / 1.5, y - s / 4);
        return 1.4 * s;
      //width
      case 'g':
        glyphEllipse(x + s / 3, y + s / 5, s * 0.6, s * 0.6);
        glyphLine(x + s / 1.5, y + s / 5, x + s / 1.5, y + s / 1.6);
        glyphArc(x + s / 3.5, y + s / 1.4, s / 1.4, s, 0, 150);
        return 1.2 * s;
      //width
      case 'h':
        glyphLine(x, y - s, x, y + s / 1.7);
        glyphArc(x + s / 2.5, y + s / 1.7, s / 1.5, s * 1.3, 180, 360);
        return 1.2 * s;
      //width
      case 'i':
        glyphLine(x, y, x, y + s / 1.7);
        glyphPoint(x, y - s / 2.5);
        return 0.5 * s;
      //width
      case 'j':
        glyphPoint(x + s / 2, y - s / 1.6);
        glyphLine(x + s / 2, y - s / 10, x + s / 2, y + s / 2);
        glyphArc(x + s / 5.5, y + s / 2, s / 1.4, s, 0, 150);
        return 1.2 * s;
      //width
      case 'k':
        glyphLine(x, y - s, x, y + s / 1.7);
        glyphLine(x + s / 1.5, y - s / 3, x, y + s / 5);
        glyphLine(x + s / 1.5, y + s / 1.7, x, y);
        return 1.15 * s;
      //width
      case 'l':
        glyphLine(x, y - s, x, y + s / 2.2);
        glyphArc(x + s / 5, y + s / 2, s / 3, s / 3, 70, 180);
        return 0.8 * s;
      //width
      case 'm':
        glyphArc(x + s / 4, y + s / 2, s / 1.5, s, 170, 360);
        glyphArc(x + s, y + s / 2, s / 1.5, s, 180, 370);
        return 1.8 * s;
      // width
      case 'n':
        glyphArc(x + s / 4, y + s / 2.1, s / 1.5, s * 1.1, 170, 370);
        return 1.1 * s;
      // width
      case 'o':
        glyphEllipse(x + s / 3, y + s / 4, s * 0.75, s * 0.75);
        return 1.2 * s;
      // width
      case 'p':
        glyphEllipse(x + s / 2.3, y + s / 4, s / 1.5, s / 1.5);
        glyphLine(x + s / 15, y + s / 4, x + s / 15, y + s);
        return 1.3 * s;
      // width
      case 'q':
        glyphEllipse(x + s / 3, y + s / 4, s / 1.5, s / 1.5);
        glyphLine(x + s / 1.5, y + s / 4, x + s / 1.5, y + s / 1.2);
        glyphArc(x + s / 1.1, y + s / 1.2, s / 2, s, 30, 180);
        return 1.4 * s;
      // width
      case 'r':
        glyphLine(x, y + s / 1.7, x, y);
        glyphArc(x + s / 4, y, s / 2, s / 2, 210, 360);
        return 1 * s;
      // width
      case 's':
        glyphArc(x + s / 3, y + s / 20, s * 0.6, s * 0.4, 90, 300);
        glyphArc(x + s / 6, y + s / 2.5, s * 0.6, s * 0.4, 270, 480);
        return 1 * s;
      // width
      case 't':
        glyphLine(x + s / 5, y - s / 5, x + s / 5, y + s / 1.7);
        glyphLine(x - s / 10, y + s / 10, x + s / 1.8, y + s / 10);
        return 1 * s;
      // width
      case 'u':
        glyphArc(x + s / 4, y + s / 10, s / 1.5, s * 1.1, -10, 190);
        return 1.1 * s;
      // width
      case 'v':
        glyphLine(x, y - s / 6, x + s / 4, y + s / 2);
        glyphArc(x + s / 2.2, y + s / 5, s / 2, s, 50, 130);
        glyphLine(x + s / 1.6, y + s / 2, x + s / 1.1, y - s / 6);
        return 1.3 * s;
      // width
      case 'w':
        glyphArc(x + s / 4, y + s / 7, s / 1.5, s, 20, 200);
        glyphArc(x + s, y + s / 7, s / 1.5, s, -20, 160);
        return 1.9 * s;
      // width
      case 'x':
        glyphLine(x, y - s / 10, x + s / 1.6, y + s / 1.7);
        glyphLine(x, y + s / 1.7, x + s / 1.6, y - s / 10);
        return 1.2 * s;
      // width
      case 'y':
        glyphArc(x + s / 3, y, s / 1.4, s / 1.2, -10, 190);
        glyphLine(x + s / 1.4, y, x + s / 1.4, y + s / 1.3);
        glyphArc(x + s / 2.8, y + s / 1.4, s / 1.4, s, 0, 150);
        return 1.2 * s;
      // width
      case 'z':
        glyphLine(x, y - s / 6, x + s / 1.2, y - s / 6);
        glyphLine(x + s / 1.2, y - s / 6, x, y + s / 1.7);
        glyphLine(x, y + s / 1.7, x + s / 1.2, y + s / 1.7);
        return 1.4 * s;
      // width

      //]

      //NUMBERS [

      case '1':
        glyphLine(x, y - s, x - s / 6, y - s / 1.3);
        glyphArc(x + s / 10, y - s / 2, s / 3, s, 230, 330);
        glyphLine(x + s / 5, y - s / 1.3, x + s / 5, y + s / 1.7);
        return 1 * s;
      // width
      case '2':
        glyphArc(x + s / 2, y - s / 1.5, s, s / 1.5, 220, 410);
        glyphLine(x + s / 1.1, y - s / 2, x + s / 5, y + s / 5);
        glyphArc(x + s / 3, y + s / 2.5, s / 2, s / 3, 90, 230);
        glyphLine(x + s / 3, y + s / 1.9, x + s, y + s / 1.9);
        return 1.6 * s;
      // width
      case '3':
        glyphArc(x, y - s / 1.6, s, s / 1.2, 230, 450);
        glyphArc(x, y + s / 5, s, s / 1.2, 270, 490);
        return 1.1 * s;
      // width
      case '4':
        glyphLine(x, y - s / 2, x, y - s);
        glyphArc(x + s / 3.5, y - s / 3, s / 2, s / 2, 90, 180);
        glyphLine(x + s / 3, y - s / 10, x + s / 1.4, y - s / 10);
        glyphLine(x + s / 1.4, y + s / 1.7, x + s / 1.4, y - s);
        return 1.4 * s;
      // width
      case '5':
        glyphLine(x + s / 1.25, y - s, x + s / 4, y - s);
        glyphLine(x + s / 5, y - s / 2, x + s / 5, y - s / 1.1);
        glyphArc(x + s / 3, y + s / 10, s * 1.2, s, 260, 470);
        return 1.6 * s;
      //width
      case '6':
        glyphArc(x + s / 1.7, y - s / 10, s * 1.2, s * 2, 180, 290);
        glyphEllipse(x + s / 2, y + s / 10, s, s);
        return 1.6 * s;
      //width
      case '7':
        glyphLine(x, y - s, x + s / 1.2, y - s);
        glyphArc(x + s * 1.3, y + s / 1.1, s * 2, s * 4, 190, 250);
        return 1.5 * s;
      //width
      case '8':
        glyphEllipse(x + s / 2, y - s / 1.6, s, s / 1.2);
        glyphEllipse(x + s / 2, y + s / 5, s, s / 1.1);
        return 1.6 * s;
      //width
      case '9':
        glyphEllipse(x + s / 2, y - s / 2, s, s);
        glyphLine(x + s / 1.05, y - s / 1.6, x + s / 1.05, y + s / 1.7);
        return 1.6 * s;
      //width
      case '0':
        glyphEllipse(x + s / 2, y - s / 8, s * 1.1, s * 1.7);
        glyphLine(x + s / 6, y + s / 1.8, x + s / 1.2, y - s / 1.2);
        return 1.6 * s;
      //width

      //]

      //PUNCTUATION + SYMBOLS [

      case '.':
        glyphEllipse(x + s / 10, y + s / 2, s / 10, s / 10);
        return 0.8 * s;
      // width
      case '!':
        glyphLine(x + s / 10, y, x, y - s / 1.1);
        glyphLine(x + s / 10, y, x + s / 4, y - s / 1.1);
        glyphLine(x, y - s, x + s / 4, y - s);
        glyphEllipse(x + s / 10, y + s / 2, s / 10, s / 10);
        return 0.7 * s;
      // width
      case ',':
        glyphArc(x, y + s / 2, s / 3, s / 1.5, 0, 90);
        return 0.8 * s;
      // width
      case '?':
        glyphArc(x + s / 2, y - s / 1.5, s, s / 1.5, 220, 420);
        glyphArc(x + s, y + s / 10, s, s * 1.2, 200, 240);
        glyphEllipse(x + s / 2, y + s / 2, s / 10, s / 10);
        return 1.6 * s;
      // width
      case '-':
        glyphLine(x, y, x + s / 2, y);
        return 1.1 * s;
      // width
      case '\'':
        glyphArc(x, y - s / 1.4, s / 3, s / 1.5, 0, 90);
        return 0.8 * s;
      // width
      case '&':
        glyphArc(x + s / 2, y - s / 2.5, s / 1.5, s * 0.8, 120, 360);
        glyphArc(x + s / 2, y + s / 9, s / 1.2, s / 1.2, 0, 210);
        glyphLine(x + s / 2.2, y + s / 15, x + s, y + s / 2);
        glyphLine(x + s / 1.25, y - s / 2.4, x + s / 2.3, y - s / 5);
        return 1.5 * s;
      // width
      case '%':
        glyphEllipse(x + s / 4, y - s / 1.5, s / 2, s / 2);
        glyphLine(x + s * 1.1, y - s / 1.1, x, y + s / 1.7);
        glyphEllipse(x + s / 1.2, y + s / 3, s / 2, s / 2);
        return 1.6 * s;
      // width
      case ':':
        glyphEllipse(x, y - s / 4, s / 8, s / 8);
        glyphEllipse(x, y + s / 2.25, s / 8, s / 8);
        return s;
      case '|':
        glyphLine(x, y - s * 0.9, x, y + s * 0.6);
        return 1 * s;
      //]

      case ' ':
        //Space key
        break;
    }
  };
  function arcMeasureLine(line, s) {
    var width = 0;
    for (var i = 0; i < line.length; i++) {
      width += arcGlyphWidths[line[i]] * s;
    }
    return width;
  }
  function arcGetLayout(txt, s, align, maxWidth) {
    var key = JSON.stringify([txt, s, align, maxWidth]);
    var cached = arcLayouts[key];
    if (cached) {
      arcTextCacheStats.layoutHits++;
      return cached;
    }
    arcTextCacheStats.layoutMisses++;
    var originalLength = txt.length;
    if (maxWidth !== undefined) {
      var words = txt.split(" "),
        result = "",
        currentLine = "";
      for (var i = 0; i < words.length; i++) {
        var testLine = currentLine + words[i] + " ";
        if (arcMeasureLine(testLine, s) > maxWidth) {
          result += currentLine + "\n";
          currentLine = words[i] + " ";
        } else {
          currentLine = testLine;
        }
      }
      txt = result + currentLine;
    }
    var lines = txt.split("\n"),
      widest = 0,
      entries = [];
    for (var j = 0; j < lines.length; j++) {
      var width = arcMeasureLine(lines[j], s);
      var offset = align === CENTER ? -width / 2 : align === RIGHT ? -width : 0;
      entries.push({
        text: lines[j],
        width: width,
        offset: offset
      });
      widest = Math.max(widest, width);
    }
    cached = {
      key: key,
      lines: entries,
      width: widest,
      uses: 0,
      characters: originalLength
    };
    // Bound retained layouts even when timers, scores or animated font sizes change.
    while (arcLayoutKeys.length && (arcLayoutKeys.length >= 256 || arcLayoutCharacters + originalLength > 32768)) {
      var expired = arcLayoutKeys.shift();
      arcLayoutCharacters -= arcLayouts[expired].characters;
      delete arcLayouts[expired];
    }
    if (originalLength <= 32768) {
      arcLayouts[key] = cached;
      arcLayoutKeys.push(key);
      arcLayoutCharacters += originalLength;
    }
    return cached;
  }
  function arcDrawLayout(layout, x, y, s, graphics) {
    for (var i = 0; i < layout.lines.length; i++) {
      var line = layout.lines[i],
        space = 0;
      for (var j = 0; j < line.text.length; j++) {
        var c = line.text[j];
        if (c !== ' ' && c !== '\n') {
          space += drawArcGlyph(c, space + (x + line.offset), y + i * (2.5 * s), s, graphics);
        } else if (c === ' ') {
          space += s;
        }
      }
    }
  }

  // Frequently repeated HUD/sign text becomes one blit. Keep the exact vector
  // renderer for rotated, subpixel-positioned, oversized or offscreen-art text.
  // The 1,048,576-pixel budget caps retained RGBA tiles at 4 MiB.
  var arcRasterCache = Object.create(null),
    arcRasterKeys = [];
  var arcRasterPending = Object.create(null),
    arcRasterPendingKeys = [];
  var arcRasterGraphics = null,
    arcStyleSnapshot = {};
  function arcDrawCached(layout, x, y, s) {
    if (layout.uses < 2 || typeof __dashStyle !== "function" || typeof document === "undefined" || !isFinite(layout.width) || s <= 0 || typeof _s === "function" && stroke !== _s) {
      return false;
    }
    var style = __dashStyle(arcStyleSnapshot);
    if (!style.doStroke) {
      return true;
    }
    var context = style.context;
    if (style.ellipseMode !== CENTER || !context.getTransform || context.globalAlpha !== 1 || context.globalCompositeOperation !== "source-over" || context.shadowBlur !== 0 || context.shadowOffsetX !== 0 || context.shadowOffsetY !== 0 || context.filter && context.filter !== "none") {
      return false;
    }
    var transform = context.getTransform();
    if (transform.b !== 0 || transform.c !== 0 || transform.a <= 0 || transform.d <= 0) {
      return false;
    }
    var pixelX = x * transform.a + transform.e,
      pixelY = y * transform.d + transform.f;
    if (Math.abs(pixelX - Math.round(pixelX)) > 0.0000001 || Math.abs(pixelY - Math.round(pixelY)) > 0.0000001) {
      return false;
    }
    var sx = transform.a,
      sy = transform.d;
    var key = layout.key + JSON.stringify([style.currentStrokeColor, style.ellipseMode, style.strokeCap, style.lineJoin, style.crispLines, style.renderSmooth, sx, sy, x, y]);
    var tile = arcRasterCache[key];
    if (!tile) {
      var left = 0,
        right = 0;
      for (var i = 0; i < layout.lines.length; i++) {
        left = Math.min(left, layout.lines[i].offset);
        right = Math.max(right, layout.lines[i].offset + layout.lines[i].width);
      }
      var leftPixel = Math.floor((left - 3 * s) * sx);
      var topPixel = Math.floor(-3 * s * sy);
      var pixelWidth = Math.ceil((right + 3 * s) * sx) - leftPixel;
      var pixelHeight = Math.ceil(((layout.lines.length - 1) * 2.5 * s + 3 * s) * sy) - topPixel;
      var pixels = pixelWidth * pixelHeight;
      if (!isFinite(pixels) || pixels <= 0 || pixels > 262144) {
        return false;
      }
      // Animated labels must not allocate a new bitmap at every position.
      // Admit a tile only after its complete style/position key repeats.
      if (key.length > 4096) {
        return false;
      }
      if (!arcRasterPending[key]) {
        if (arcRasterPendingKeys.length >= 128) {
          delete arcRasterPending[arcRasterPendingKeys.shift()];
        }
        arcRasterPending[key] = true;
        arcRasterPendingKeys.push(key);
        return false;
      }
      arcTextCacheStats.rasterMisses++;
      if (!arcRasterGraphics) {
        arcRasterGraphics = createGraphics(1, 1, P2D);
      }
      var g = arcRasterGraphics;
      g.size(pixelWidth, pixelHeight);
      g.resetMatrix();
      g.background(0, 0, 0, 0);
      g.angleMode = "degrees";
      // Processing rounds unsmoothed coordinates before applying the matrix,
      // and extends crisp lines only for its identity model matrix. Preserve
      // both decisions, while moving the native canvas into the cache tile.
      if (!style.crispLines) {
        g.translate(1, 0);
      }
      g.externals.context.setTransform(sx, 0, 0, sy, -leftPixel - x * sx, -topPixel - y * sy);
      if (style.renderSmooth) {
        g.smooth();
      } else {
        g.noSmooth();
      }
      g.noFill();
      // Packed transparent colors overlap Processing's grayscale overload.
      // Explicit RGBA preserves fading text, including alpha exactly zero.
      var rgba = style.currentStrokeColor;
      g.colorMode(RGB, 255);
      g.stroke(rgba >>> 16 & 255, rgba >>> 8 & 255, rgba & 255, rgba >>> 24);
      g.strokeWeight(s / 4);
      g.strokeCap(style.strokeCap);
      g.strokeJoin(style.lineJoin);
      g.ellipseMode(style.ellipseMode);
      arcDrawLayout(layout, x, y, s, g);
      var bitmap = document.createElement("canvas");
      bitmap.width = pixelWidth;
      bitmap.height = pixelHeight;
      bitmap.getContext("2d").drawImage(g.externals.context.canvas, 0, 0);
      while (arcRasterKeys.length && (arcRasterKeys.length >= 64 || arcTextCacheStats.pixels + pixels > 1048576)) {
        var expired = arcRasterKeys.shift();
        arcTextCacheStats.pixels -= arcRasterCache[expired].pixels;
        delete arcRasterCache[expired];
      }
      tile = {
        canvas: bitmap,
        x: leftPixel / sx,
        y: topPixel / sy,
        width: pixelWidth / sx,
        height: pixelHeight / sy,
        pixels: pixels
      };
      arcRasterCache[key] = tile;
      arcRasterKeys.push(key);
      arcTextCacheStats.pixels += pixels;
    } else {
      arcTextCacheStats.rasterHits++;
    }
    context.drawImage(tile.canvas, x + tile.x, y + tile.y, tile.width, tile.height);
    return true;
  }
  var arcText = function arcText(txt, x, y, maxWidth) {
    var s = arcDashSize;
    noFill();
    strokeWeight(s / 4);
    var layout = arcGetLayout(txt, s, arcDashAlign || LEFT, maxWidth);
    layout.uses++;
    if (!arcDrawCached(layout, x, y, s)) {
      arcDrawLayout(layout, x, y, s);
    }
  };

  // ]

  var pxlText = function pxlText(txt, x, y, s, maxWidth) {
    // Function to get the letter map for a given character
    var getLetterMap = function getLetterMap(c) {
      var letterMap = [];
      switch (c) {
        // Upcase [
        case 'A':
          letterMap = ['  mmm  ', ' mm mm ', 'mm   mm', 'mm   mm', 'mmmmmmm', 'mm   mm', 'mm   mm', '      '];
          break;
        case 'B':
          letterMap = ['mmmmmm ', 'mm   mm', 'mm   mm', 'mmmmmm ', 'mm   mm', 'mm   mm', 'mmmmmm ', '      '];
          break;
        case 'C':
          letterMap = ['  mmmm ', ' mm  mm', 'mm     ', 'mm     ', 'mm     ', ' mm  mm', '  mmmm ', '       '];
          break;
        case 'D':
          letterMap = ['mmmmm  ', 'mm  mm  ', 'mm   mm ', 'mm   mm ', 'mm   mm ', 'mm  mm  ', 'mmmmm  ', '      '];
          break;
        case 'E':
          letterMap = ['mmmmmmm', 'mm     ', 'mm     ', 'mmmmmm ', 'mm     ', 'mm     ', 'mmmmmmm', '      '];
          break;
        case 'F':
          letterMap = ['mmmmmmm', 'mm     ', 'mm     ', 'mmmmmm ', 'mm     ', 'mm     ', 'mm     ', '      '];
          break;
        case 'G':
          letterMap = ['  mmmmm', ' mm    ', 'mm     ', 'mm mmmm', 'mm   mm', ' mm  mm', '  mmmmm', '      '];
          break;
        case 'H':
          letterMap = ['mm   mm', 'mm   mm', 'mm   mm', 'mmmmmmm', 'mm   mm', 'mm   mm', 'mm   mm', '      '];
          break;
        case 'I':
          letterMap = ['mmmmmm ', '  mm  ', '  mm  ', '  mm  ', '  mm  ', '  mm  ', 'mmmmmm ', '      '];
          break;
        case 'J':
          letterMap = ['     mm', '     mm', '     mm', '     mm', '     mm', 'mm   mm', ' mmmmm ', '      '];
          break;
        case 'K':
          letterMap = ['mm   mm', 'mm  mm ', 'mm mm  ', 'mmmm  ', 'mmmmm ', 'mm mmm ', 'mm  mmm', '      '];
          break;
        case 'L':
          letterMap = ['mm    ', 'mm    ', 'mm    ', 'mm    ', 'mm    ', 'mm    ', 'mmmmmm', '      '];
          break;
        case 'M':
          letterMap = ['mm   mm', 'mmm mmm', 'mmmmmmm', 'mm m mm', 'mm m mm', 'mm   mm', 'mm   mm', '      '];
          break;
        case 'N':
          letterMap = ['mm   mm', 'mmm  mm', 'mmmm mm', 'mm mmmm', 'mm  mmm', 'mm   mm', 'mm   mm', '      '];
          break;
        case 'O':
          letterMap = [' mmmmm ', 'mm   mm', 'mm   mm', 'mm   mm', 'mm   mm', 'mm   mm', ' mmmmm', '      '];
          break;
        case 'P':
          letterMap = ['mmmmmm ', 'mm   mm', 'mm   mm', 'mm   mm', 'mmmmmm', 'mm     ', 'mm     ', '      '];
          break;
        case 'Q':
          letterMap = [' mmmmm ', 'mm   mm', 'mm   mm', 'mm   mm', 'mm mmmm', 'mm  mm ', ' mmmm m', '      '];
          break;
        case 'R':
          letterMap = ['mmmmmm ', 'mm   mm', 'mm   mm', 'mm  mmm', 'mmmmm  ', 'mm mmm ', 'mm  mmm', '      '];
          break;
        case 'S':
          letterMap = [' mmmmm ', 'mm   mm', 'mm     ', ' mmmmm  ', '     mm', 'mm   mm', ' mmmmm ', '      '];
          break;
        case 'T':
          letterMap = ['mmmmmm', '  mm  ', '  mm  ', '  mm  ', '  mm  ', '  mm  ', '  mm  ', '      '];
          break;
        case 'U':
          letterMap = ['mm   mm', 'mm   mm', 'mm   mm', 'mm   mm', 'mm   mm', 'mm   mm', ' mmmmm '];
          break;
        case 'V':
          letterMap = ['mm   mm', 'mm   mm', 'mm   mm', 'mm   mm', ' mm mm ', '  mmm  ', '   m   ', '      '];
          break;
        case 'W':
          letterMap = ['mm m mm', 'mm m mm', 'mm m mm', 'mm m mm', 'mmmmmmm', 'mmm mmm', ' m   m ', '      '];
          break;
        case 'X':
          letterMap = ['mm   mm', 'mm   mm', ' mm mm ', '  mmm  ', ' mm mm ', 'mm   mm', 'mm   mm', '      '];
          break;
        case 'Y':
          letterMap = ['mm  mm', 'mm  mm', 'mm  mm', ' mmmm ', '  mm  ', '  mm  ', '  mm  ', '      '];
          break;
        case 'Z':
          letterMap = ['mmmmmmm', '    mmm', '   mmm ', '  mmm  ', ' mmm   ', 'mmm    ', 'mmmmmmm', '      '];
          break;
        //]

        //Lcase[

        case 'a':
          letterMap = ['    ', '     ', ' mmmmm', '     mm', ' mmmmmm', 'mm   mm', ' mmmmmm', '      '];
          break;
        case 'b':
          letterMap = ['mm ', 'mm   ', 'mmmmmm', 'mm   mm', 'mm   mm', 'mm   mm', 'mmmmmm ', '      '];
          break;
        case 'c':
          letterMap = ['    ', '   ', ' mmmmmm', 'mm     ', 'mm     ', 'mm ', ' mmmmmm', '       '];
          break;
        case 'd':
          letterMap = ['  ', '     mm ', '     mm', ' mmmmmm', 'mm   mm', 'mm   mm ', ' mmmmmm', '      '];
          break;
        case 'e':
          letterMap = ['', '     ', ' mmmmm  ', 'mm   mm ', 'mmmmmmm ', 'mm     ', ' mmmmm', '      '];
          break;
        case 'f':
          letterMap = ['   mmm', '  mm ', 'mmmmmm ', '  mm ', '  mm ', '  mm ', '  mm ', '      '];
          break;
        case 'g':
          letterMap = ['  ', '     ', ' mmmmmm', 'mm   mm', 'mm   mm', ' mmmmmm', '     mm', ' mmmmm'];
          break;
        case 'h':
          letterMap = ['mm     ', 'mm     ', 'mmmmmm ', 'mm   mm', 'mm   mm', 'mm   mm', 'mm   mm', '      '];
          break;
        case 'i':
          letterMap = ['  mm   ', '      ', ' mmm  ', '  mm  ', '  mm  ', '  mm  ', 'mmmmmm ', '      '];
          break;
        case 'j':
          letterMap = ['   mm', '     ', '  mmm', '   mm', '   mm', '   mm', '   mm', 'mmmm'];
          break;
        case 'k':
          letterMap = ['mm     ', 'mm     ', 'mm   mm', 'mm  mm ', 'mmmmm ', 'mm  mm ', 'mm   mm', '      '];
          break;
        case 'l':
          letterMap = [' mmm  ', '  mm  ', '  mm  ', '  mm  ', '  mm  ', '  mm  ', 'mmmmmm', '      '];
          break;
        case 'm':
          letterMap = ['       ', '       ', 'mmmmmm ', 'm mm mm', 'm mm mm', 'm mm mm', 'm mm mm', '      '];
          break;
        case 'n':
          letterMap = ['       ', '       ', 'mmmmmm ', 'mm   mm', 'mm   mm', 'mm   mm', 'mm   mm', '      '];
          break;
        case 'o':
          letterMap = ['       ', '       ', ' mmmmm ', 'mm   mm', 'mm   mm', 'mm   mm', ' mmmmm', '      '];
          break;
        case 'p':
          letterMap = ['       ', '       ', 'mmmmmm ', 'mm   mm', 'mm   mm', 'mmmmmm ', 'mm     ', 'mm    '];
          break;
        case 'q':
          letterMap = ['       ', '       ', ' mmmmmm', 'mm   mm', 'mm   mm', ' mmmmmm', '     mm', '     mm'];
          break;
        case 'r':
          letterMap = [' ', '   ', 'mm mmmm  ', 'mmm', 'mm  ', 'mm ', 'mm  ', '      '];
          break;
        case 's':
          letterMap = ['  ', '   ', ' mmmmmm', 'mm   ', ' mmmmm', '     mm', 'mmmmmm ', '      '];
          break;
        case 't':
          letterMap = ['  mm   ', '  mm   ', 'mmmmmm   ', '  mm   ', '  mm   ', '  mm   ', '  mm   ', '      '];
          break;
        case 'u':
          letterMap = ['       ', '       ', 'mm   mm', 'mm   mm', 'mm   mm', 'mm   mm', ' mmmmmm'];
          break;
        case 'v':
          letterMap = ['      ', '      ', 'mm  mm', 'mm  mm', 'mm  mm ', ' mmmm  ', '  mm   ', '      '];
          break;
        case 'w':
          letterMap = ['', '', 'mm m mm', 'mm m mm', 'mm m mm', 'mm m mm', ' mm mm ', '      '];
          break;
        case 'x':
          letterMap = ['   ', '   ', 'mm   mm ', ' mm mm  ', '  mmm ', ' mm mm ', 'mm   mm', '      '];
          break;
        case 'y':
          letterMap = ['       ', '       ', 'mm   mm', 'mm   mm', 'mm   mm', ' mmmmmm', '     mm', ' mmmmm'];
          break;
        case 'z':
          letterMap = ['        ', '        ', 'mmmmmmm', '   mmm  ', '  mmm   ', ' mmm    ', 'mmmmmmm', '      '];
          break;

        //]

        // Numbers [
        case "1":
          letterMap = ['  mm', ' mmm', '  mm', '  mm ', '  mm ', '  mm    ', 'mmmmmm', '    '];
          break;
        case "2":
          letterMap = [' mmmmm', 'mm   mm', '     mm', '  mmmm ', ' mmmm', 'mmm     ', 'mmmmmmm', '    '];
          break;
        case "3":
          letterMap = [' mmmmmm', '    mm', '   mm  ', '  mmmm ', '     mm', 'mm   mm', ' mmmmm ', '    '];
          break;
        case "4":
          letterMap = ['   mmm', '  mmmm', ' mm mm', 'mm  mm', 'mmmmmmm', '    mm', '    mm', '      '];
          break;
        case "5":
          letterMap = ['mmmmmm', 'mm   ', 'mmmmmm ', '     mm', '     mm', 'mm   mm', ' mmmmm ', '    '];
          break;
        case "6":
          letterMap = ['  mmmm', ' mm   ', 'mm   ', 'mmmmmm', 'mm   mm', 'mm   mm', ' mmmmm ', '    '];
          break;
        case "7":
          letterMap = ['mmmmmmm', 'mm   mm', '    mm', '   mm', '  mm', '  mm ', '  mm ', '    '];
          break;
        case "8":
          letterMap = [' mmmm ', 'mm   m', 'mmm  m', ' mmmm', 'm  mmmm', 'm    mm', ' mmmmm ', '    '];
          break;
        case "9":
          letterMap = [' mmmmm ', 'mm   mm', 'mm   mm', ' mmmmmm', '     mm', '    mm', ' mmmm  ', '    '];
          break;
        //]

        // Special [

        default:
          // Default case for undefined characters
          letterMap = ['mmmmmmm', 'm     m', 'm     m', 'm  m  m', 'm     m', 'm     m', 'mmmmmmm', '       '];
          break;
        case "!":
          letterMap = ['   mmm ', '   mmm ', '   mmm ', '   mm  ', '   mm  ', '       ', '   mm  ', '    '];
          break;
        case ".":
          letterMap = ['    ', '    ', '    ', '     ', '     ', '  mm    ', '  mm  ', '    '];
          break;
        case ",":
          letterMap = ['    ', '    ', '    ', '     ', '     ', '  mm    ', '  mm  ', ' mm '];
          break;
        case "?":
          letterMap = [' mmmmm', 'mmmmmmm', 'mm   mm', '    mm', '  mmm', '        ', '  mmm  ', '    '];
          break;
        case "π":
          letterMap = ['    ', '    ', 'mmmmmmm ', ' mm mm ', ' mm mm', ' mm mm', 'mmm  mm', '    '];
          break;
        case "/":
          letterMap = ['      m', '     m', '    m ', '   m', '  m   ', ' m     ', 'm', '    '];
          break;
        case ":":
          letterMap = ['     ', '  mm   ', '  mm   ', ' ', '  mm   ', '  mm  ', ' ', '    '];
          break;
        case ";":
          letterMap = ['     ', '  mm   ', '  mm   ', ' ', '  mm   ', '  mm  ', ' mm', '    '];
          break;
        case "0":
          letterMap = ['  mmm ', ' m  mm ', 'mm   mm', 'mm   mm', 'mm   mm', ' mm  m ', '  mmm  ', '    '];
          break;
        case "~":
          letterMap = ['  ', '  ', ' mmm  ', 'm mmm m', '   mmm', '   ', '    ', '    '];
          break;
        case "-":
          letterMap = ['      ', '  ', '     ', ' mmmmmm', '   ', '    ', '    ', '    '];
          break;
        case "(":
          letterMap = ['   mm', '  mm', ' mm ', ' mm  ', ' mm  ', '  mm  ', '   mm ', '    '];
          break;
        case ")":
          letterMap = [' mm ', '  mm', '   mm', '   mm', '   mm', '  mm  ', ' mm  ', '    '];
          break;
        case "@":
          letterMap = [' mmmmm ', 'm     m', 'm mmm m', 'm m m m', 'm mmmmm', 'm    ', ' mmmmm', '    '];
          break;
        case "#":
          letterMap = [' mm mm', 'mmmmmmm', ' mm mm', ' mm mm', ' mm mm', 'mmmmmmm', ' mm mm', '    '];
          break;
        case "$":
          letterMap = ['   m ', ' mmmmm', 'mm m   ', ' mmmmm', '   m mm', 'mmmmmm', '   m  ', '    '];
          break;
        case "%":
          letterMap = [' mm   m', 'm m  m', 'mm  m  ', '   m   ', '  m  mm', ' m  m m', 'm   mm', '    '];
          break;
        case "^":
          letterMap = ['  mmm  ', ' mm mm', '', '', '', '', ' ', '    '];
          break;
        case "&":
          letterMap = [' mmm ', 'mm mm', 'mm mm', ' mmm ', 'mm mm m', 'mm  mm', ' mmmmmm', '    '];
          break;
        case "*":
          letterMap = ['  ', ' mm mm', '  mmm ', 'mmmmmmm', '  mmm', ' mm mm', ' ', '    '];
          break;
        case "_":
          letterMap = ['  ', '  ', '   ', '', '  ', '  ', 'mmmmmmm ', '    '];
          break;
        case "+":
          letterMap = ['  ', '   mm', '   mm ', ' mmmmmm', '   mm', '   mm', ' ', '    '];
          break;
        case "=":
          letterMap = ['  ', ' ', 'mmmmmmm ', '', 'mmmmmmm', ' ', ' ', '    '];
          break;
        case "[":
          letterMap = [' mmmm ', ' mm', ' mm', ' mm', ' mm', ' mm', ' mmmm', '    '];
          break;
        case "]":
          letterMap = [' mmmm', '   mm', '   mm', '   mm', '   mm', '   mm', ' mmmm', '    '];
          break;
        case "{":
          letterMap = ['    mm', '   mm', '   mm', '  mm', '   mm   ', '   mm', '    mm', '    '];
          break;
        case "}":
          letterMap = ['  mm', '   mm', '   mm', '    mm', '   mm', '   mm', '  mm', '    '];
          break;
        case '"':
          letterMap = [' mm mm', ' mm mm', ' mm mm', '  ', '   ', '   ', '  ', '    '];
          break;
        case "'":
          letterMap = ['  mm', '  mm ', '  mm  ', '  ', '   ', '   ', '  ', '    '];
          break;
        //]
      }
      return letterMap;
    };
    // Drawing It [
    // Function to draw a character at a specific position
    var drawChar = function drawChar(c, x, y, s) {
      var letterMap = getLetterMap(c);
      for (var col = 0; col < letterMap.length; col++) {
        for (var row = 0; row < letterMap[col].length; row++) {
          if (letterMap[col][row] !== ' ') {
            noStroke();
            rect(row * s + x, col * s + y, s, s); // Draw the character pixel
          }
        }
      }
    };

    // Function to draw a line of text
    var drawLine = function drawLine(line, x, y, s) {
      var space = 0; // Horizontal position of the character in the line
      for (var i = 0; i < line.length; i++) {
        var c = line[i];
        if (c !== ' ') {
          // Draw the character if it's not a space
          drawChar(c, space + x, y, s);
          space += 7 * s + s; // Move to the next character position
        } else {
          space += 7 * s + s; // Move to the next position for spaces
        }
      }
    };
    var charWidth = 7 * s; // Width of each character
    var charHeight = 9 * s; // Height of each character
    var charSpacing = s; // Space between characters
    var spaceWidth = charWidth + charSpacing; // Width of a space character

    var lines = txt.split('\n'); // Split text into lines by newline
    var lineDis = 0; // Vertical position of the current line

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var words = line.split(' '); // Split each line into words
      var currentLine = ''; // To accumulate words for the current line
      var cursorX = 0; // Horizontal position for drawing characters

      for (var j = 0; j < words.length; j++) {
        var word = words[j];
        var wordWidth = word.length * charWidth + (word.length - 1) * charSpacing; // Width of the word
        // If adding this word would exceed the maxWidth, wrap to the next line
        if (cursorX + wordWidth > maxWidth) {
          // Draw the current line
          drawLine(currentLine, x, y + lineDis, s);
          // Move to the next line
          lineDis += charHeight;
          cursorX = 0;
          currentLine = '';
        }
        // Add the word to the current line
        currentLine += (currentLine ? ' ' : '') + word;
        cursorX += wordWidth + spaceWidth; // Move cursor to the right for next word
      }
      // Draw any remaining text in the last line
      if (currentLine) {
        drawLine(currentLine, x, y + lineDis, s);
      }
      // Move to the next line for the next piece of text
      lineDis += charHeight;
    }
    //]
  };

  // Fix a bug
  var externals;
  var pg = createGraphics(width, height, P2D);

  // Store originals
  var _v = vertex,
    _cv = curveVertex,
    _bv = bezierVertex;
  var _sw = strokeWeight,
    _s = stroke,
    _ns = noStroke;
  var _r = rect,
    _e = ellipse,
    _f = fill,
    _nf = noFill;
  var _bs = beginShape,
    _es = endShape,
    _txt = text,
    _ts = textSize;
  var _tri = triangle,
    _l = line,
    _p = point,
    _arc = arc,
    _bez = bezier,
    _q = quad;
  var _img = image,
    _bg = background,
    _c = color,
    _bc = blendColor,
    _lc = lerpColor;
  var _tf = textFont,
    _rot = rotate,
    _sc = scale,
    _tr = translate;
  // if i missed any lmk

  var beginArt = function beginArt() {
    pg.background(0, 0, 0, 0);
    /* jshint ignore:start */
    // Shapes
    rect = pg.rect;
    ellipse = pg.ellipse;
    triangle = pg.triangle;
    line = pg.line;
    point = pg.point;
    arc = pg.arc;
    bezier = pg.bezier;
    quad = pg.quad;
    image = pg.image;

    // Complex Shapes
    beginShape = pg.beginShape;
    endShape = pg.endShape;
    vertex = pg.vertex;
    curveVertex = pg.curveVertex;
    bezierVertex = pg.bezierVertex;

    // Colors
    background = pg.background;
    fill = pg.fill;
    noFill = pg.noFill;
    stroke = pg.stroke;
    strokeWeight = pg.strokeWeight;
    noStroke = pg.noStroke;
    color = pg.color;
    blendColor = pg.blendColor;
    lerpColor = pg.lerpColor;

    // Text
    text = pg.text;
    textFont = pg.textFont;
    textSize = pg.textSize;

    // Transform
    rotate = pg.rotate;
    scale = pg.scale;
    translate = pg.translate;
    /* jshint ignore:end */
  };
  var endArt = function endArt() {
    /* jshint ignore:start */
    // Restore originals
    rect = _r;
    ellipse = _e;
    triangle = _tri;
    line = _l;
    point = _p;
    arc = _arc;
    bezier = _bez;
    quad = _q;
    image = _img;
    beginShape = _bs;
    endShape = _es;
    vertex = _v;
    curveVertex = _cv;
    bezierVertex = _bv;
    background = _bg;
    fill = _f;
    noFill = _nf;
    stroke = _s;
    strokeWeight = _sw;
    noStroke = _ns;
    color = _c;
    blendColor = _bc;
    lerpColor = _lc;
    text = _txt;
    textFont = _tf;
    textSize = _ts;
    rotate = _rot;
    scale = _sc;
    translate = _tr;
    /* jshint ignore:end */
    image(pg, 0, 0);
  };
  var beginCutout = function beginCutout() {
    pg.externals.context.globalCompositeOperation = 'destination-out';
  };
  var endCutout = function endCutout() {
    pg.externals.context.globalCompositeOperation = 'source-over';
  };

  // Yes DK converter pixel art drawer because it draws normal ones really fast

  // Utility code for DK converter. It can also draw normal pixel arts, at an optimized speed. [

  // stores cached pixel art graphics buffers
  var _pixelArtCache = {};

  // is it an array?
  function isArray(a) {
    return Array.isArray(a);
  }

  // is it a PImage or similar object?
  function isPImage(obj) {
    if (!obj) {
      return false;
    }
    try {
      return typeof obj.width === "number" || typeof obj.get === "function";
    } catch (e) {
      return false;
    }
  }

  // is it an RLE frame (array of strings)?
  function isRLEFrame(frame) {
    return isArray(frame) && frame.length > 0 && typeof frame[0] === "string";
  }

  // build a cache key for pixel art rendering
  function buildCacheKey(data, frameIndex, pixelSize, colorMap) {
    var prefix = "";
    try {
      prefix = JSON.stringify(data);
    } catch (e) {
      prefix = String(data);
    }
    var cmap = "";
    try {
      cmap = JSON.stringify(colorMap);
    } catch (e2) {
      cmap = String(colorMap);
    }
    return prefix + "|" + String(frameIndex) + "|" + String(pixelSize) + "|" + cmap;
  }

  // Clear the entire pixel art cache
  function clearPixelArtCache() {
    _pixelArtCache = {};
  }

  // Invalidate a specific pixel art cache entry
  function invalidatePixelArtCacheFor(data, frameIndex, pixelSize, colorMap) {
    var key = buildCacheKey(data, frameIndex, pixelSize, colorMap);
    if (_pixelArtCache[key]) {
      delete _pixelArtCache[key];
    }
  }

  // Decode a single RLE row string into an array of characters
  function decodeRLERow(row) {
    var out = [];
    if (!row) {
      return out;
    }
    var i = 0;
    var n = row.length;
    while (i < n) {
      var ch = row.charAt(i);

      // skip digits (should not happen at this point)
      if (ch >= '0' && ch <= '9') {
        i++;
        continue;
      }

      // advance past the char
      i++;
      // collect digits (if any) to form the count
      var numStr = "";
      while (i < n) {
        var d = row.charAt(i);
        if (d < '0' || d > '9') {
          break;
        }
        numStr += d;
        i++;
      }
      var count = numStr.length ? parseInt(numStr, 10) : 1;
      for (var k = 0; k < count; k++) {
        out.push(ch);
      }
    }
    return out;
  }

  // Decode an RLE image (array of RLE row strings) into a 2D array of characters
  function decodeRLEImage(lines) {
    var pixels = [];
    for (var y = 0; y < lines.length; y++) {
      pixels[y] = decodeRLERow(lines[y] || "");
    }
    return pixels;
  }

  // Check if a frame has any visible color based on the color map
  function frameHasVisibleColor(frameData, colorMap) {
    if (!frameData) {
      return false;
    }
    for (var i = 0; i < frameData.length; i++) {
      var row = frameData[i];
      if (!row) {
        continue;
      }
      // check each character in the row
      for (var k = 0; k < row.length; k++) {
        var ch = row[k];
        if (ch !== "-" && colorMap && colorMap[ch] !== undefined) {
          return true;
        }
      }
    }
    return false;
  }

  // Draw decoded pixel data to a graphics buffer
  function drawDecodedToGraphics(g, px, pixelSize, palette) {
    // Attempt to disable smoothing to keep crisp edges
    try {
      // idk if this actually works in KA
      if (typeof g.noSmooth === "function") {
        g.noSmooth();
      }
    } catch (e) {}

    // ensure corner alignment
    try {
      if (typeof g.rectMode === "function") {
        g.rectMode(CORNER);
      }
    } catch (e2) {}
    g.noStroke();
    for (var y = 0; y < px.length; y++) {
      var row = px[y] || [];
      var x = 0;
      while (x < row.length) {
        var ch = row[x];
        var start = x;
        x++;
        while (x < row.length && row[x] === ch) {
          x++;
        }
        var run = x - start;
        if (ch === "-" || ch === null || ch === undefined) {
          // transparent pixel, skip
          continue;
        }
        var col = palette && palette[ch];
        if (!col) {
          // unmapped symbol, skip
          continue;
        }

        // compute rectangle coordinates
        var x1 = round(start * pixelSize);
        var x2 = round((start + run) * pixelSize);
        var y1 = round(y * pixelSize);
        var y2 = round((y + 1) * pixelSize);
        var gw = x2 - x1;
        var gh = y2 - y1;
        if (gw <= 0 || gh <= 0) {
          continue;
        }
        if (isArray(col)) {
          if (col.length === 4) {
            g.fill(col[0], col[1], col[2], col[3]);
          } else {
            g.fill(col[0], col[1], col[2]);
          }
        } else {
          g.fill(col);
        }
        g.rect(x1, y1, gw, gh);
      }
    }
  }

  // Main renderer
  function drawHugePixelArt(startX, startY, pixelSize, canvasData, colorMap, frame) {
    // tiny safety margin for buffer sizing, but not used for drawing
    var sizeMargin = 1;
    noStroke();

    // IMAGE PATHS first
    if (isArray(canvasData) && canvasData.length > 0 && isPImage(canvasData[0])) {
      if (frame === undefined) {
        frame = 1;
      }
      frame = Math.floor(frame);
      var idx = ((frame - 1) % canvasData.length + canvasData.length) % canvasData.length;
      var img = canvasData[idx];
      if (!img) {
        return;
      }
      var w = typeof img.width === "number" ? img.width : img.getWidth ? img.getWidth() : 0;
      var h = typeof img.height === "number" ? img.height : img.getHeight ? img.getHeight() : 0;
      image(img, startX, startY, round(w * pixelSize), round(h * pixelSize));
      return;
    }
    if (isPImage(canvasData)) {
      var w2 = typeof canvasData.width === "number" ? canvasData.width : canvasData.getWidth ? canvasData.getWidth() : 0;
      var h2 = typeof canvasData.height === "number" ? canvasData.height : canvasData.getHeight ? canvasData.getHeight() : 0;
      image(canvasData, startX, startY, round(w2 * pixelSize), round(h2 * pixelSize));
      return;
    }

    // RLE PATH
    var isFrames = isArray(canvasData) && canvasData.length > 0 && isRLEFrame(canvasData[0]);
    var data;
    var frameIndex = 0;
    if (isFrames) {
      if (frame === undefined) {
        frame = 1;
      }
      frame = Math.floor(frame);
      var idx2 = ((frame - 1) % canvasData.length + canvasData.length) % canvasData.length;
      var attempts = 0;
      var chosenIndex = idx2;
      while (attempts < canvasData.length) {
        var candidate = canvasData[chosenIndex];
        if (frameHasVisibleColor(candidate, colorMap)) {
          break;
        }
        chosenIndex = (chosenIndex - 1 + canvasData.length) % canvasData.length;
        attempts++;
      }
      data = canvasData[chosenIndex];
      frameIndex = chosenIndex;
    } else {
      if (!isArray(canvasData) || !isRLEFrame(canvasData)) {
        return;
      }
      data = canvasData;
      frameIndex = 0;
    }
    if (!data || data.length === 0) {
      return;
    }
    var cacheKey = buildCacheKey(data, frameIndex, pixelSize, colorMap);
    if (!_pixelArtCache[cacheKey]) {
      // decode fully (2D char array)
      var decoded = decodeRLEImage(data);

      // compute max cols and rows
      var maxCols = 0;
      for (var r = 0; r < decoded.length; r++) {
        var ln = decoded[r] ? decoded[r].length : 0;
        if (ln > maxCols) {
          maxCols = ln;
        }
      }
      var rows = decoded.length;
      var gw = max(1, round(maxCols * pixelSize) + sizeMargin);
      var gh = max(1, round(rows * pixelSize) + sizeMargin);
      var g = createGraphics(gw, gh, P2D);
      g.background(0, 0, 0, 0);

      // ensure corner alignment and crisp edges
      try {
        if (typeof g.rectMode === "function") {
          g.rectMode(CORNER);
        }
        if (typeof g.noSmooth === "function") {
          g.noSmooth();
        }
      } catch (e3) {}
      g.noStroke();

      // draw to graphics buffer
      drawDecodedToGraphics(g, decoded, pixelSize, colorMap);
      _pixelArtCache[cacheKey] = g;
    }
    // let's light this candle
    image(_pixelArtCache[cacheKey], startX, startY);
  }

  // ]

  var worldMouseX = 0;
  var baseWidth = 600;
  var baseHeight = 600;

  // Scale information.
  var gameScale = 1;
  var worldMouseX = 0;
  var worldMouseY = 0;

  // Current canvas size.
  var canvasWidth = width;
  var canvasHeight = height;
  // Call once every frame BEFORE drawing anything.
  var updateScaling = function updateScaling() {
    // Current canvas size.
    var canvasWidth = width;
    var canvasHeight = height;

    // Warn if canvas is too small.
    if (canvasWidth < baseWidth || canvasHeight < baseHeight) {
      println("WARNING: Canvas is smaller than 600x600. UI and gameplay may not work correctly.");
    }

    // Warn if aspect ratio isn't 1:1.
    if (abs(canvasWidth - canvasHeight) > 0.01) {
      println("WARNING: Canvas is not 1:1. DASH Parkour is designed for a square canvas.");
    }

    // Uniform scaling.
    gameScale = min(canvasWidth / baseWidth, canvasHeight / baseHeight);

    // Convert mouse to world coordinates.
    worldMouseX = mouseX / gameScale;
    worldMouseY = mouseY / gameScale;
  };

  // ]

  // cutscene  [

  var platXChange1 = -700;
  var platXChange2 = -700;
  function drawLavaBody(x, y, w, h) {
    fill(180, 0, 0);
    rect(x, y, w, h, (w + h) / 10);
    rect(x, y, w, h * 0.7);
    fill(255, 0, 0);
    rect(x + w / 7, y, w * 0.73, h * 0.7);
    rect(x + w / 7, y, w * 0.73, h * 0.86, (w + h) / 20);
  }
  var RomanStarCodersBlueyTheCircle = function RomanStarCodersBlueyTheCircle(x, y, s) {
    noStroke();
    pushMatrix();
    translate(x, y);
    scale(s);
    //Bluey Sprite
    fill(0, 0, 200);
    ellipse(0, -30, 160, 160);
    for (var i = 0; i < 3; i++) {
      fill(0, 100, 255, 100);
      ellipse(0, -30, i * 70, i * 70);
    }
    fill(255);
    ellipse(-30, -50, 60, 60);
    ellipse(40, -40, 60, 60);
    fill(0);
    ellipse(-30, -50, 30, 30);
    fill(0);
    ellipse(40, -40, 30, 30);
    if (frameCount % 200 < 90) {
      fill(255);
      ellipse(-30, -50, 31, 31);
      fill(0);
      ellipse(40, -40, 30, 30);
    }
    stroke(0);
    strokeWeight(4);
    line(-40, -60, -20, -40);
    line(-40, -40, -20, -40);
    noStroke();
    for (var i = 0; i < 4; i++) {
      fill(255, 100);
      ellipse(-30, -50, i * 3, i * 3);
      ellipse(40, -40, i * 3, i * 3);
    }
    fill(0, 221, 255);
    ellipse(0, 0, 20, 20);
    for (var i = 0; i < 6; i++) {
      fill(255, 100);
      ellipse(2, -1, i * 3, i * 3);
    }
    fill(255, 0, 0);
    arc(-10, 15, 50, 50, 33, 169);
    popMatrix();
  };
  var crowd = [];
  var crowdColors = [color(220, 70, 70),
  // Red
  color(19, 52, 125),
  // Blue
  color(39, 122, 52),
  // Green
  color(240, 210, 70),
  // Yellow
  color(170, 80, 220),
  // Purple
  color(58, 182, 224), color(57, 222, 129), color(152, 158, 43), color(255, 100, 0)];
  for (var y = 0; y < 600; y += 50) {
    for (var x = 0; x < 600; x += 50) {
      crowd.push({
        x: x + random(-10, 10),
        y: y + random(-10, 10),
        c: crowdColors[floor(random(crowdColors.length))]
      });
    }
  }
  var cutsceneIs = true;
  var cFrames = 0;
  var cutShakeIntensity = 25;
  var cutShakeSize = 2000;
  var cutShakeSizeVel = 5;
  var cutShakeOp = 255;
  var cutShakeFrames = 30;
  var cFrames = 0;
  var cRectY = [600, -70];
  var cutsceneName = "intro";
  var ctOpacity = 0;
  var ctOpacity2 = 255;
  var cutsceneY = [0, 0, 0];
  var cutsceneX = [0, 0];
  var cutsceneS = 1;
  var clipY = 0;
  var cutsceneJumpVel = [-10, -10, -10];
  var cutsceneIsJump = [false, false, false];
  var cutsceneBckCol = [0, 0, 0];

  //]

  // Compressed & Semi-Encrypted save code setup [

  var settings, achievements;

  // Death counter
  var deaths = 0;
  var CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var BASE = CHARS.length;

  // 'u' is reserved for undefined
  var LENCHARS = "";
  for (var i = 0; i < CHARS.length; i++) {
    if (CHARS[i] !== "u") {
      LENCHARS += CHARS[i];
    }
  }

  // Checksum
  var makeCheck = function makeCheck(str) {
    var a = 1;
    var b = 7;
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      a = (a * 31 + c) % BASE;
      b = (b * 17 + c) % BASE;
    }
    return CHARS[a] + CHARS[b];
  };

  // Number encoder
  var encodeUnsigned = function encodeUnsigned(n) {
    if (n === 0) {
      return LENCHARS[0] + CHARS[0];
    }
    var out = "";
    while (n > 0) {
      out = CHARS[n % BASE] + out;
      n = floor(n / BASE);
    }
    return LENCHARS[out.length - 1] + out;
  };
  var decodeUnsignedAt = function decodeUnsignedAt(str, pos) {
    if (pos >= str.length) {
      return null;
    }
    var len = LENCHARS.indexOf(str[pos]);
    if (len < 0) {
      return null;
    }
    len += 1;
    if (pos + 1 + len > str.length) {
      return null;
    }
    var n = 0;
    for (var i = 0; i < len; i++) {
      var idx = CHARS.indexOf(str[pos + 1 + i]);
      if (idx < 0) {
        return null;
      }
      n *= BASE;
      n += idx;
    }
    return {
      value: n,
      next: pos + 1 + len
    };
  };
  var zigzagEncode = function zigzagEncode(n) {
    if (n >= 0) {
      return n * 2;
    }
    return -n * 2 - 1;
  };
  var zigzagDecode = function zigzagDecode(n) {
    if (n % 2 === 0) {
      return n / 2;
    }
    return -((n + 1) / 2);
  };
  var encodeInt = function encodeInt(n) {
    return encodeUnsigned(zigzagEncode(n));
  };
  var decodeIntAt = function decodeIntAt(str, pos) {
    var r = decodeUnsignedAt(str, pos);
    if (r === null) {
      return null;
    }
    return {
      value: zigzagDecode(r.value),
      next: r.next
    };
  };

  // Scaled number helpers
  var scaleFromTemplate = function scaleFromTemplate(v) {
    var s = "" + v;
    if (s.indexOf("e") !== -1 || s.indexOf("E") !== -1) {
      s = v.toFixed(10);
    }
    var dot = s.indexOf(".");
    if (dot === -1) {
      return 1;
    }
    var places = s.length - dot - 1;
    var m = 1;
    for (var i = 0; i < places; i++) {
      m *= 10;
    }
    return m;
  };
  var toScaledInt = function toScaledInt(v, scale) {
    return Math.round(v * scale);
  };
  var fromScaledInt = function fromScaledInt(v, scale) {
    return v / scale;
  };

  // Make system from template (Double Boolean Mask Split Version)
  var makeSaveSystem = function makeSaveSystem(template) {
    var keys = [];
    var kinds = [];
    var scales = [];
    var boolCount = 0;
    for (var k in template) {
      if (!template.hasOwnProperty(k)) {
        continue;
      }
      keys.push(k);
      var v = template[k];
      if (typeof v === "boolean") {
        kinds.push("b");
        scales.push(1);
        boolCount++;
      } else if (typeof v === "number") {
        kinds.push("n");
        scales.push(scaleFromTemplate(v));
      } else if (typeof v === "string") {
        kinds.push("s");
        scales.push(1);
      } else if (v === undefined) {
        kinds.push("u");
        scales.push(1);
      } else {
        kinds.push("n");
        scales.push(1);
      }
    }
    var saveData = function saveData(obj) {
      var boolMask1 = 0; // Stores booleans 0 to 27 (Safe!)
      var boolMask2 = 0; // Stores booleans 28 to 55 (Safe!)
      var boolIndex = 0;
      for (var i = 0; i < keys.length; i++) {
        if (kinds[i] === "b") {
          if (obj[keys[i]]) {
            if (boolIndex < 28) {
              boolMask1 += Math.pow(2, boolIndex);
            } else {
              boolMask2 += Math.pow(2, boolIndex - 28);
            }
          }
          boolIndex++;
        }
      }

      // Write both 28-bit mask segments sequentially
      var body = encodeInt(boolMask1) + encodeInt(boolMask2);
      for (var j = 0; j < keys.length; j++) {
        var kind = kinds[j];
        var key = keys[j];
        if (kind === "b") {
          continue;
        }
        if (kind === "u") {
          body += "u";
          continue;
        }
        if (kind === "s") {
          var rawStr = obj[key];
          if (rawStr === undefined || rawStr === null) {
            rawStr = "";
          }
          body += encodeInt(rawStr.length) + rawStr;
          continue;
        }
        var scale = scales[j];
        var raw = obj[key];
        if (raw === undefined || raw === null) {
          raw = 0;
        }
        raw = toScaledInt(raw, scale);
        body += encodeInt(raw);
      }
      var check = makeCheck(body);
      return body + check;
    };
    var loadData = function loadData(str) {
      if (str.length === 0) {
        return null;
      }
      if (str.length < 3) {
        println("ERROR: Save too short.");
        return null;
      }
      var expected = str.substring(str.length - 2, str.length);
      var body = str.substring(0, str.length - 2);
      if (makeCheck(body) !== expected) {
        println("ERROR: Save code typo detected!");
        return null;
      }
      var pos = 0;

      // Decode Boolean Mask Part 1
      var first = decodeIntAt(body, pos);
      if (first === null) {
        println("ERROR: Save code typo detected!");
        return null;
      }
      var boolMask1 = first.value;
      pos = first.next;

      // Decode Boolean Mask Part 2
      var second = decodeIntAt(body, pos);
      if (second === null) {
        println("ERROR: Save code typo detected!");
        return null;
      }
      var boolMask2 = second.value;
      pos = second.next;
      var out = {};
      var boolIndex = 0;
      for (var i = 0; i < keys.length; i++) {
        if (kinds[i] === "b") {
          if (boolIndex < 28) {
            out[keys[i]] = floor(boolMask1 / Math.pow(2, boolIndex)) % 2 === 1;
          } else {
            out[keys[i]] = floor(boolMask2 / Math.pow(2, boolIndex - 28)) % 2 === 1;
          }
          boolIndex++;
          continue;
        }
        if (kinds[i] === "u") {
          if (body[pos] !== "u") {
            println("ERROR: Save code typo detected!");
            return null;
          }
          out[keys[i]] = undefined;
          pos++;
          continue;
        }
        if (kinds[i] === "s") {
          var rLen = decodeIntAt(body, pos);
          if (rLen === null) {
            println("ERROR: Save code typo detected!");
            return null;
          }
          var len = rLen.value;
          pos = rLen.next;
          if (pos + len > body.length) {
            println("ERROR: Save code typo detected!");
            return null;
          }
          out[keys[i]] = body.substring(pos, pos + len);
          pos += len;
          continue;
        }
        var r = decodeIntAt(body, pos);
        if (r === null) {
          println("ERROR: Save code typo detected!");
          return null;
        }
        out[keys[i]] = fromScaledInt(r.value, scales[i]);
        pos = r.next;
      }
      if (pos !== body.length) {
        println("ERROR: Save code typo detected!");
        return null;
      }
      return out;
    };
    return {
      save: saveData,
      load: loadData
    };
  };
  var achievementStates = {
    startingSmall: false,
    greenMeansGo: false,
    nonStop: false,
    parkourChampion: false,
    lightwork: false,
    twentyTwo: false,
    trueDedication: false,
    parkourMaster: false,
    hotStuff: false,
    pointy: false,
    bottomless: false,
    fallingAnvil: false,
    electrifying: false,
    poisonous: false,
    reallyPointy: false,
    backForMore: false,
    oneOfMany: false,
    tenOfMany: false,
    hundredOfMany: false,
    pixelPerfect: false,
    soLong: false
  };
  var settings = {
    generalSetting: false,
    instantRespawn: false,
    darkMode: false,
    sceneTransitions: true,
    fancyGraphics: true,
    particles: true,
    soundEffects: true,
    playMusic: true
  };

  // ]

  // Intro setup [

  // Image load part [
  noStroke();
  // clear the canvas for a mess
  background(255);
  // make the outline
  background(0);
  fill(255);
  rect(0, 0, 600, 600, 60);
  var roundedRectMask = get(0, 0, 600, 600);
  background(255, 255, 255); // Clear canvas again to draw the rest

  // Red Half
  fill(253, 58, 64);
  rect(0, 0, 600, 600);

  // Blue Half
  fill(44, 138, 255);
  triangle(600, 0, 600, 600, 0, 600);

  // Dark Blue Half
  fill(50, 122, 254);
  triangle(395, 600, 600, 395, 600, 600);
  var dkLogoBackground = get(0, 0, 600, 600);

  // ]

  // The art
  function drawDKLogo(x, y, s) {
    var trueSize = s / 600;
    pushMatrix();
    // center aligned
    translate(x - trueSize * 300, y - trueSize * 300);
    scale(trueSize);
    noStroke();
    dkLogoBackground.mask(roundedRectMask);
    image(dkLogoBackground, 0, 0);

    // red shading
    fill(229, 58, 63);
    beginShape();
    vertex(336, 140);
    vertex(126, 352);
    vertex(128, 431);
    vertex(216, 393);
    vertex(359, 248);
    endShape();

    // Left stick of D
    fill(255);
    beginShape();
    vertex(69, 459);
    vertex(69, 140);
    vertex(136, 140);
    vertex(136, 459);
    endShape();

    // Right curve of D
    beginShape();
    vertex(135, 459);
    vertex(187, 459);
    bezierVertex(232, 459, 289, 403, 289, 361);
    vertex(289, 234);
    bezierVertex(289, 215, 266, 140, 182, 140);
    vertex(135, 140);
    vertex(135, 200);
    vertex(184, 200);
    bezierVertex(209, 200, 226, 226, 226, 243);
    vertex(226, 354);
    bezierVertex(226, 371, 198, 400, 178, 400);
    vertex(135, 400);
    endShape();

    // K
    beginShape();
    vertex(336, 140);
    vertex(399, 140);
    vertex(382, 282);
    vertex(487, 140);
    vertex(558, 140);
    vertex(458, 282);
    vertex(534, 459);
    vertex(468, 459);
    vertex(414, 337);
    vertex(366, 402);
    vertex(359, 459);
    vertex(294, 459);
    endShape();
    popMatrix();
  }

  //Logo Variables
  var logoIs = true;
  var logoFrames = 0;
  var logoDots = "";
  var barrelX = 150;
  var barrelY = -1000;
  var barrelYac = 125;
  var barrelSize = 26;
  var digitsofpiTextX = 1060;
  var digitsofpiTextXac = 100;
  var kinetoTextX = -850;
  var kinetoTextXac = 100;
  var andTextY = -900;
  var andTextYac = 100;
  var presentsTextX = -800;
  var presentsTextXac = 100;
  var slideOut = 0;
  var slideOutac = 1;
  var fadeIntoGame = 255;
  var fadeIntoGameac = 1;

  // just what is needed
  var drawText = function drawText(txt, x, y, s, maxWidth) {
    // Function to get the letter map for a given character
    var getLetterMap = function getLetterMap(c) {
      var letterMap = [];
      switch (c) {
        // Upcase [
        case 'A':
          letterMap = ['  mmm  ', ' mm mm ', 'mm   mm', 'mm   mm', 'mmmmmmm', 'mm   mm', 'mm   mm', '      '];
          break;
        case 'D':
          letterMap = ['mmmmm  ', 'mm  mm  ', 'mm   mm ', 'mm   mm ', 'mm   mm ', 'mm  mm  ', 'mmmmm  ', '      '];
          break;
        case 'E':
          letterMap = ['mmmmmmm', 'mm     ', 'mm     ', 'mmmmmm ', 'mm     ', 'mm     ', 'mmmmmmm', '      '];
          break;
        case 'F':
          letterMap = ['mmmmmmm', 'mm     ', 'mm     ', 'mmmmmm ', 'mm     ', 'mm     ', 'mm     ', '      '];
          break;
        case 'G':
          letterMap = ['  mmmmm', ' mm    ', 'mm     ', 'mm mmmm', 'mm   mm', ' mm  mm', '  mmmmm', '      '];
          break;
        case 'I':
          letterMap = ['mmmmmm ', '  mm  ', '  mm  ', '  mm  ', '  mm  ', '  mm  ', 'mmmmmm ', '      '];
          break;
        case 'K':
          letterMap = ['mm   mm', 'mm  mm ', 'mm mm  ', 'mmmm  ', 'mmmmm ', 'mm mmm ', 'mm  mmm', '      '];
          break;
        case 'N':
          letterMap = ['mm   mm', 'mmm  mm', 'mmmm mm', 'mm mmmm', 'mm  mmm', 'mm   mm', 'mm   mm', '      '];
          break;
        case 'O':
          letterMap = [' mmmmm ', 'mm   mm', 'mm   mm', 'mm   mm', 'mm   mm', 'mm   mm', ' mmmmm', '      '];
          break;
        case 'P':
          letterMap = ['mmmmmm ', 'mm   mm', 'mm   mm', 'mm   mm', 'mmmmmm', 'mm     ', 'mm     ', '      '];
          break;
        case 'R':
          letterMap = ['mmmmmm ', 'mm   mm', 'mm   mm', 'mm  mmm', 'mmmmm  ', 'mm mmm ', 'mm  mmm', '      '];
          break;
        case 'S':
          letterMap = [' mmmmm ', 'mm   mm', 'mm     ', ' mmmmm  ', '     mm', 'mm   mm', ' mmmmm ', '      '];
          break;
        case 'T':
          letterMap = ['mmmmmm', '  mm  ', '  mm  ', '  mm  ', '  mm  ', '  mm  ', '  mm  ', '      '];
          break;
        case 'U':
          letterMap = ['mm   mm', 'mm   mm', 'mm   mm', 'mm   mm', 'mm   mm', 'mm   mm', ' mmmmm '];
          break;
        case 'Y':
          letterMap = ['mm  mm', 'mm  mm', 'mm  mm', ' mmmm ', '  mm  ', '  mm  ', '  mm  ', '      '];
          break;
        //]

        // Special [

        case ".":
          letterMap = ['    ', '    ', '    ', '     ', '     ', '  mm    ', '  mm  ', '    '];
          break;
        case "&":
          letterMap = [' mmm ', 'mm mm', 'mm mm', ' mmm ', 'mm mm m', 'mm  mm', ' mmmmmm', '    '];
          break;
        //]
      }
      return letterMap;
    };
    // Drawing It [
    // Function to draw a character at a specific position
    var drawChar = function drawChar(c, x, y, s) {
      var letterMap = getLetterMap(c);
      for (var col = 0; col < letterMap.length; col++) {
        for (var row = 0; row < letterMap[col].length; row++) {
          if (letterMap[col][row] !== ' ') {
            noStroke();
            rect(row * s + x, col * s + y, s, s); // Draw the character pixel
          }
        }
      }
    };

    // Function to draw a line of text
    var drawLine = function drawLine(line, x, y, s) {
      var space = 0; // Horizontal position of the character in the line
      for (var i = 0; i < line.length; i++) {
        var c = line[i];
        if (c !== ' ') {
          // Draw the character if it's not a space
          drawChar(c, space + x, y, s);
          space += 7 * s + s; // Move to the next character position
        } else {
          space += 7 * s + s; // Move to the next position for spaces
        }
      }
    };
    var charWidth = 7 * s; // Width of each character
    var charHeight = 9 * s; // Height of each character
    var charSpacing = s; // Space between characters
    var spaceWidth = charWidth + charSpacing; // Width of a space character

    var lines = txt.split('\n'); // Split text into lines by newline
    var lineDis = 0; // Vertical position of the current line

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var words = line.split(' '); // Split each line into words
      var currentLine = '';
      var cursorX = 0; // Horizontal position for drawing characters

      for (var j = 0; j < words.length; j++) {
        var word = words[j];
        var wordWidth = word.length * charWidth + (word.length - 1) * charSpacing; // Width of the word
        // If adding this word would exceed the maxWidth, wrap to the next line
        if (cursorX + wordWidth > maxWidth) {
          // Draw the current line
          drawLine(currentLine, x, y + lineDis, s);
          // Move to the next line
          lineDis += charHeight;
          cursorX = 0;
          currentLine = '';
        }
        // Add the word to the current line
        currentLine += (currentLine ? ' ' : '') + word;
        cursorX += wordWidth + spaceWidth; // Move cursor to the right for next word
      }
      // Draw any remaining text in the last line
      if (currentLine) {
        drawLine(currentLine, x, y + lineDis, s);
      }
      // Move to the next line for the next piece of text
      lineDis += charHeight;
    }
    //]
  };

  // the logo
  function drawBarrel(startX, startY, pixelSize) {
    var canvasData; // Variable to hold the pixel art data
    // Define pixel art data for the first animation state
    canvasData = ["----BBBBBBBBBBBBBBB----", "---BgbbbbbbbbbbbbbgB---", "---BgggggggggggggggB---", "--BbbgggggggggggggbbB--", "--BbbbbbbbbbbbbbbbbbB--", "--BbbbbbbbbbbbbbbbbbB--", "-BbbbbbbbbbbbbbbbbbbbB-", "-BggbbbbbbbbbbbbbbbggB-", "-BgggggggggggggggggggB-", "-BbbgrrrgggggllgglgbbB-", "BbbbbrrrrbbbbblbllbbbbB", "BbbbbrrbrbbbbblblbbbbbB", "BbbbbrrbrbbwbblllbbbbbB", "BbbbbrrbrbwwwbllbbbbbbB", "BbbbbrrbrbbwbblllbbbbbB", "BbbbbrrbrbbbbblblbbbbbB", "BgbbbrrrrbbbbblbllbbbgB", "BgggbrrrbbbbbllbblbgggB", "-BgggggggggggggggggggB-", "-BbbgggggggggggggggbbB-", "-BbbbbbbbbbbbbbbbbbbbB-", "-BbbbbbbbbbbbbbbbbbbbB-", "--BbbbbbbbbbbbbbbbbbB--", "--BbbbbbbbbbbbbbbbbbB--", "--BgbbbbbbbbbbbbbbbgB--", "---BgggggggggggggggB---", "---BgggggggggggggggB---", "----BBBBBBBBBBBBBBB----"];
    // Define a color map to map characters to colors
    // 143, 84, 17
    var colorMap = {
      "b": color(143, 84, 17),
      // Brown
      "d": color(125, 72, 16),
      "r": color(255, 0, 0),
      // red
      "g": color(59, 59, 59),
      // gray
      "l": color(0, 200, 255),
      // blue
      "w": color(255),
      // White
      "B": color(0)
    };

    // Iterate through each row of the pixel art data
    for (var rowIndex = 0; rowIndex < canvasData.length; rowIndex++) {
      // Iterate through each character in the current row
      for (var columnIndex = 0; columnIndex < canvasData[rowIndex].length; columnIndex++) {
        // Get the specific character to draw
        var currentChar = canvasData[rowIndex][columnIndex];

        // Only draw the block if the character is not a hyphen (which indicates empty space)
        if (currentChar !== "-") {
          // Increment rectangle count for this drawing
          // Disable outline for pixel blocks
          noStroke();
          // Set the fill color based on the character's corresponding color in the color map
          fill(colorMap[currentChar]);

          // Draw the rectangle at the calculated position based on startX, startY, 
          // and the current row and column index
          rect(startX + columnIndex * pixelSize, startY + rowIndex * pixelSize, pixelSize + 0.5, pixelSize + 0.5);
        }
      }
    }
  }
  var logoBridge = function logoBridge(x, y) {
    fill(240, 0, 60);
    rect(x, y, 130, 10);
    rect(x, y + 40, 130, 10);
    rect(x, y + 30, 10, 10);
    rect(x + 10, y + 20, 10, 10);
    rect(x + 20, y + 10, 10, 10);
    rect(x + 30, y + 20, 10, 10);
    rect(x + 40, y + 30, 10, 10);
    rect(x + 50, y + 20, 10, 10);
    rect(x + 60, y + 10, 10, 10);
    rect(x + 70, y + 20, 10, 10);
    rect(x + 80, y + 30, 10, 10);
    rect(x + 90, y + 20, 10, 10);
    rect(x + 100, y + 10, 10, 10);
    rect(x + 110, y + 20, 10, 10);
    rect(x + 120, y + 30, 10, 10);
  };
  var logoLadder = function logoLadder(x, y, h) {
    fill(0, 255, 255);

    //Poles
    rect(x, y, 10, h * 43);
    rect(x + 50, y, 10, h * 43);
    for (var i = 0; i < h; i++) {
      rect(x + 10, y + 20 + i * 40, 40, 10);
    }
  };
  var logoBackground = function logoBackground() {
    background(0);
    logoLadder(-40, 151, 3);
    logoLadder(520, 160, 5.6);
    logoBridge(0, 101);
    logoBridge(520, 110);
    logoBridge(400, 110);
    logoBridge(50, 330);
    logoBridge(-80, 280);
    logoBridge(330, 370);
    logoBridge(500, 400);
    logoBridge(20, 470);
    fill(255, 255, 255, 50);
    //rect(0, 0, 600, 600);

    //fill(255, 255, 255);
    rect(0, 0, 600, 600);
  };
  var logoTxt = function logoTxt(x, y, s) {
    //Presents
    textAlign(LEFT);
    fill(200, 200, 200);
    drawText("PRESENT TO YOU" + logoDots, x - 150, y + 440, s / 1.8);
  };
  //]

  // Setup [

  var scene = "";
  var keys = [];
  var lvlUnlock = 1;
  var worldSubScreen = 0; // what scene to activate
  var worldSubScreenTo = 0; // what scene to go to?

  // Transition variables
  var tranStartY = -810;
  var tranEndY = 1110;
  var transitionY = tranStartY;
  var transitionActive = false;
  var transitionSpeed = 17.5;
  var sceneToTransition = '';
  var transition = function transition(x, y, scene) {
    // Upper rings
    noFill();
    stroke(200, 0, 0);
    strokeWeight(5);
    arc(x, y, 1000, 1000, 180, 360);
    strokeWeight(25);
    arc(x, y + 120, 1000, 1000, 180, 360);
    stroke(0);
    strokeWeight(15);
    arc(x, y + 60, 1000, 1000, 180, 360);

    // Main circle
    noStroke();
    fill(0);
    ellipse(x, y + 140, 1000, 950);

    // Lower rings
    noFill();
    strokeWeight(15);
    stroke(0);
    arc(x, y + 240, 1000, 1000, 0, 180);
    stroke(200, 0, 0);
    strokeWeight(5);
    arc(x, y + 300, 1000, 1000, 0, 180);
    strokeWeight(25);
    arc(x, y + 180, 1000, 1000, 0, 180);
  };

  //]

  // Backgrounds [

  // colors and strokeweights of lines for background
  var worlds = [{
    bg: color(224, 255, 255),
    line: color(0, 200, 255),
    weight: 2
  },
  // world 1
  {
    bg: color(237, 255, 237),
    line: color(0, 210, 0),
    weight: 2
  },
  // world 2
  {
    bg: color(255, 249, 240),
    line: color(255, 100, 0),
    weight: 2
  },
  // world 3
  {
    bg: color(5, 5, 5),
    line: color(120, 0, 0),
    weight: 4
  } // world 4
  ];
  // the colors that get lerped
  var currentBG = color(255, 255, 255);
  var currentLine = color(0, 200, 255);
  var currentWeight = 2;
  // automatically lerps
  var worldBackground = function worldBackground(gx, gy, world) {
    var target = worlds[world - 1];
    var lerpSpeed = 0.05;
    currentBG = lerpColor(currentBG, target.bg, lerpSpeed);
    currentLine = lerpColor(currentLine, target.line, lerpSpeed);
    currentWeight = lerp(currentWeight, target.weight, lerpSpeed);

    // pulse amount
    var pulse = (sin(frameCount * 1.5) + 1) * 0.5;
    var drawBG;
    if (world === 4) {
      drawBG = lerpColor(color(54, 0, 0), currentBG, pulse);
    } else {
      drawBG = lerpColor(color(255, 255, 255), currentBG, pulse);
    }
    background(drawBG);
    stroke(currentLine);
    strokeWeight(currentWeight);
    noFill();
    var spacing = 64;
    var overdraw = spacing * 3;
    var ox = gx % spacing;
    var oy = gy % spacing;

    // vertical lines
    for (var x = -overdraw; x <= 600 + overdraw; x += spacing) {
      line(x + ox + 70, -overdraw, x + ox - 70, 600 + overdraw);
    }

    // horizontal lines
    for (var i = -20; i <= 40; i++) {
      var wy = i * spacing + oy;
      var y1 = wy * 0.8 - 30;
      var y2 = wy * 1.25;
      line(-overdraw, y1, 600 + overdraw, y2);
    }
  };
  // ]

  // Characters and their animations [

  // Boss with dynamic animations
  var bossOpacity = 255;
  var bossXShift = 0;
  var bossDir = 0;
  var updateBossAnim = function updateBossAnim(boss, s) {
    // Dynamic animations
    if (boss.state === 'attack' && (boss.currentAttack === 'bullets' || boss.currentAttack === 'icicles')) {
      bossXShift = lerp(bossXShift, s, 0.01);
    } else {
      bossXShift = lerp(bossXShift, 0, 0.01);
    }
    if (boss.currentSpot === 4) {
      bossDir = 1;
    }
    if (boss.currentSpot === 0) {
      bossDir = -1;
    }
  };

  // Parkour Master [

  // Tons of animations for the parkour master lol
  var capeAnimationY = 0;
  var capeAnimationVel = 0.5;
  var capeAnimationAcc = 0.005;
  var handAnimationY = 0;
  var handAnimationVel = 0.5;
  var pmBlinkY = 0;
  var pmBlinkVel = 1;
  var pmBlinkTimer = 0;
  var pmBlinkInterval = random(240, 420);
  var pmCapeCol = 171;
  var pmCapeColVel = 0.25;

  // Config
  var cols = 8;
  var rows = 7;
  var Spacing = null;
  var damping = 0.985;
  var gravity = 0.45;
  var rigidness = 5;
  var diagonals = false;
  var swaySize = 50;
  var swayYSize = 18;
  var swaySpeed = 0.02;
  var mouseVX = 0;
  var mouseVY = 0;
  var grabStrength = 1.0;
  var maxMouseV = 48;
  var airDrag = 0.02;
  var minSepNeighbor = Spacing * 0.45;
  var prevCorrect = 0.15;
  var EPS = 1e-5;

  // Top can be affecte by movement
  var softTop = !true;
  var pinSpring = 0.45;
  var pinDamping = 0.85;
  var windOn = true;
  var windStrength = 1.4;
  var windNoiseScale = 0.015;
  var windTimeScale = 0.008;
  var windVerticalFactor = 0.45;
  var windMaxPerFrame = 0.6;
  var colorCape = [80, 60, 191];
  var showGrid = true;
  var expandTri = 1.1;

  // data
  var PMparticles = [];
  var constraints = [];
  var idx = function idx(i, j) {
    return j * cols + i;
  };
  var pinOffsetX = 100;
  var pinOffsetY = 0;
  var pinDamp = 0.92;
  var maxPinOffset = Spacing * 6;
  var currentPinAnchorOffsetX = 100;
  var currentPinAnchorOffsetY = 0;
  var setClothPosition = function setClothPosition(targetX, targetY) {
    // current center of top row
    var centerX = 0;
    var centerY = 0;
    for (var i = 0; i < cols; i += 1) {
      var p = PMparticles[idx(i, 0)];
      centerX += p.baseAnchorX;
      centerY += p.baseAnchorY;
    }
    centerX /= cols;
    centerY /= cols;
    var dx = targetX - centerX;
    var dy = targetY - centerY;

    // shift ALL particles (keeps internal shape)
    for (var pI = 0; pI < PMparticles.length; pI += 1) {
      var p = PMparticles[pI];
      p.x += dx;
      p.y += dy;
      p.px += dx;
      p.py += dy;
      p.baseAnchorX += dx;
      p.baseAnchorY += dy;
    }
  };

  // particle
  var PMParticle = function PMParticle(px, py) {
    this.x = px;
    this.y = py;
    this.px = px;
    this.py = py;
    this.ax = 0;
    this.ay = 0;
    this.restY = py; // ← NEW (for pseudo-Z)

    this.z = 0; // ← NEW (pseudo depth)

    this.pinned = false;
    this.pinX = 0;
    this.pinY = 0;
    this.baseAnchorX = px;
    this.baseAnchorY = py;
    this.softPinned = false;
  };
  PMParticle.prototype.applyForce = function (fx, fy) {
    this.ax += fx;
    this.ay += fy;
  };
  PMParticle.prototype.update = function () {
    if (this.pinned === true) {
      this.x = this.pinX;
      this.y = this.pinY;
      this.px = this.pinX;
      this.py = this.pinY;
      this.ax = 0;
      this.ay = 0;
      return;
    }
    if (this.softPinned === true) {
      var ax = this.baseAnchorX + currentPinAnchorOffsetX;
      var ay = this.baseAnchorY + currentPinAnchorOffsetY;
      var dx = ax - this.x;
      var dy = ay - this.y;
      this.applyForce(dx * pinSpring, dy * pinSpring);
      var vx = this.x - this.px;
      var vy = this.y - this.py;
      this.applyForce(-vx * (1 - pinDamping), -vy * (1 - pinDamping));
    }
    var vxx = (this.x - this.px) * damping;
    var vyy = (this.y - this.py) * damping;
    var nx = this.x + vxx + this.ax;
    var ny = this.y + vyy + this.ay;
    this.px = this.x;
    this.py = this.y;
    this.x = nx;
    this.y = ny;
    this.ax = 0;
    this.ay = 0;
  };
  PMParticle.prototype.pin = function (px, py) {
    this.pinned = true;
    this.pinX = px;
    this.pinY = py;
    this.softPinned = false;
  };
  PMParticle.prototype.unpin = function () {
    this.pinned = false;
    this.softPinned = false;
  };

  // Constraint (stretch-only) 
  var Constraint = function Constraint(a, b, rest) {
    this.a = a;
    this.b = b;
    this.rest = rest;
    this.restSquared = rest * rest;
  };
  Constraint.prototype.solve = function () {
    var dx = this.b.x - this.a.x;
    var dy = this.b.y - this.a.y;
    var d2 = dx * dx + dy * dy;
    if (d2 <= this.restSquared) {
      return;
    }
    var d = sqrt(d2);
    if (d < EPS) {
      dx = EPS;
      dy = 0;
      d = EPS;
    }
    var diff = (d - this.rest) / d;
    var corrX = dx * 0.5 * diff;
    var corrY = dy * 0.5 * diff;
    if (this.a.pinned === false) {
      this.a.x += corrX;
      this.a.y += corrY;
      this.a.px += corrX * 0.25;
      this.a.py += corrY * 0.25;
    }
    if (this.b.pinned === false) {
      this.b.x -= corrX;
      this.b.y -= corrY;
      this.b.px -= corrX * 0.25;
      this.b.py -= corrY * 0.25;
    }
  };

  // Build cloth 
  for (var j = 0; j < rows; j += 1) {
    for (var i = 0; i < cols; i += 1) {
      var x = 80 + i * Spacing;
      var y = 40 + j * Spacing;
      PMparticles.push(new PMParticle(x, y));
    }
  }
  var buildConstraints = function buildConstraints() {
    constraints = [];
    for (var j2 = 0; j2 < rows; j2 += 1) {
      for (var i2 = 0; i2 < cols; i2 += 1) {
        var pA = PMparticles[idx(i2, j2)];
        if (i2 < cols - 1) {
          var pB = PMparticles[idx(i2 + 1, j2)];
          constraints.push(new Constraint(pA, pB, Spacing));
        }
        if (j2 < rows - 1) {
          var pC = PMparticles[idx(i2, j2 + 1)];
          constraints.push(new Constraint(pA, pC, Spacing));
        }
        if (diagonals) {
          var diagRest = Spacing * dist(0, 0, 1, 1);
          if (i2 < cols - 1 && j2 < rows - 1) {
            constraints.push(new Constraint(pA, PMparticles[idx(i2 + 1, j2 + 1)], diagRest));
          }
          if (i2 < cols - 1 && j2 > 0) {
            constraints.push(new Constraint(pA, PMparticles[idx(i2 + 1, j2 - 1)], diagRest));
          }
        }
      }
    }
  };
  buildConstraints();

  // top anchors
  for (var ip = 0; ip < cols; ip += 1) {
    var tp = PMparticles[idx(ip, 0)];
    if (softTop) {
      tp.softPinned = true;
    } else {
      tp.pin(tp.x, tp.y);
    }
  }

  // jitter
  for (var ii = 0; ii < PMparticles.length; ii += 1) {
    PMparticles[ii].x += random(-0.0008, 0.0008);
    PMparticles[ii].y += random(-0.0008, 0.0008);
    PMparticles[ii].px = PMparticles[ii].x;
    PMparticles[ii].py = PMparticles[ii].y;
  }

  // Strain clamp 
  var maxStrain = 1.25;
  var strainLimit = function strainLimit() {
    var maxAllowed = Spacing * maxStrain;
    var maxAllowedSquared = maxAllowed * maxAllowed;
    for (var i = 0; i < constraints.length; i += 1) {
      var C = constraints[i];
      var A = C.a;
      var B = C.b;
      var dx = B.x - A.x;
      var dy = B.y - A.y;
      var d2 = dx * dx + dy * dy;
      if (d2 <= maxAllowedSquared) {
        continue;
      }
      var d = sqrt(d2);
      if (d > maxAllowed && d > EPS) {
        var diff = (d - maxAllowed) / d;
        var pullX = dx * diff * 0.5;
        var pullY = dy * diff * 0.5;
        if (A.pinned === false) {
          A.x += pullX;
          A.y += pullY;
          A.px += pullX * prevCorrect;
          A.py += pullY * prevCorrect;
        }
        if (B.pinned === false) {
          B.x -= pullX;
          B.y -= pullY;
          B.px -= pullX * prevCorrect;
          B.py -= pullY * prevCorrect;
        }
      }
    }
  };

  // Reuse the force result: each caller consumes it before the next sample.
  var capeWindForce = {
    vx: 0,
    vy: 0
  };
  // Wind: Perlin noise with clamping 
  var windAt = function windAt(x, y, t) {
    var sx = x * windNoiseScale;
    var sy = y * windNoiseScale;
    var nt = t * windTimeScale;
    var n1 = noise(sx, sy, nt);
    var n2 = noise(sx + 67.3, sy + 142.7, nt + 23.7);
    var angle = (n1 - 0.5) * TWO_PI * 2.0;
    var mag = (n2 - 0.5) * 2.0 * windStrength;
    if (mag > windMaxPerFrame) {
      mag = windMaxPerFrame;
    }
    if (mag < -windMaxPerFrame) {
      mag = -windMaxPerFrame;
    }
    var vx = cos(angle) * mag;
    var vy = sin(angle) * mag * windVerticalFactor;
    capeWindForce.vx = vx;
    capeWindForce.vy = vy;
    return capeWindForce;
  };

  // smoothstep helper
  var smoothStep = function smoothStep(x) {
    if (x <= 0) {
      return 0;
    }
    if (x >= 1) {
      return 1;
    }
    return x * x * (3 - 2 * x);
  };
  // Draw triangle color based on triangle size (avg edge length).
  var drawColoredTriangle = function drawColoredTriangle(T, minY, maxY) {
    var p1 = T.v1;
    var p2 = T.v2;
    var p3 = T.v3;
    var cx = (p1.x + p2.x + p3.x) / 3.0;
    var cy = T.cy;
    var avgL = (T.e1.length + T.e2.length + T.e3.length) / 3.0;

    // sizeFactor = avgL / spacing (1.0 = rest). Values slightly <1 compressed, >1 stretched.
    var sizeFactor = avgL / Spacing;

    // brightness mapping:
    var bfRaw = (sizeFactor - 0.8) / (1.4 - 0.6);
    if (bfRaw < 0) {
      bfRaw = 0;
    }
    if (bfRaw > 1) {
      bfRaw = 1;
    }
    var bf = smoothStep(bfRaw);
    var brightness = lerp(0.6, 1.4, bf);

    // temperature shift toward warm when stretched
    var tRaw = (sizeFactor - 1.0) / 0.8;
    if (tRaw < 0) {
      tRaw = 0;
    }
    if (tRaw > 1) {
      tRaw = 1;
    }
    var tStr = smoothStep(tRaw);

    // base color (shaded by vertical position)
    var shade = map(cy, minY, maxY, 1.05, 0.85);
    shade = constrain(shade, 0.6, 1.4);

    // depth reinforcement (front = brighter)
    var zAvg = T.z;
    var depthBoost = constrain(1.0 + zAvg * 0.8, 0.7, 1.3);
    brightness *= depthBoost;

    // Preserve interpolation without three temporary arrays per triangle.
    var rr = constrain(lerp(colorCape[0] * shade * brightness, 255, tStr), 0, 255);
    var gg = constrain(lerp(colorCape[1] * shade * brightness, 110, tStr), 0, 255);
    var bb = constrain(lerp(colorCape[2] * shade * brightness, 60, tStr), 0, 255);
    if (showGrid) {
      fill(rr, gg, bb);
      var ax = cx + (p1.x - cx) * expandTri;
      var ay = cy + (p1.y - cy) * expandTri;
      var bx = cx + (p2.x - cx) * expandTri;
      var by = cy + (p2.y - cy) * expandTri;
      var cx2 = cx + (p3.x - cx) * expandTri;
      var cy2 = cy + (p3.y - cy) * expandTri;
      triangle(ax, ay, bx, by, cx2, cy2);
    } else {
      fill(rr, gg, bb);
      triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    }
  };

  // Particle references/topology survive spacing changes. Share the 139 mesh
  // edge distances and retain triangle records instead of allocating per draw.
  var capeTriangles = [];
  var capeDrawOrder = [];
  var capeEdges = [];
  (function () {
    var edgeByPair = Object.create(null);
    var edgeFor = function edgeFor(a, b) {
      var key = min(a, b) * PMparticles.length + max(a, b);
      var edge = edgeByPair[key];
      if (!edge) {
        edge = {
          a: PMparticles[a],
          b: PMparticles[b],
          length: 0
        };
        edgeByPair[key] = edge;
        capeEdges.push(edge);
      }
      return edge;
    };
    var addTriangle = function addTriangle(a, b, c) {
      capeTriangles.push({
        v1: PMparticles[a],
        v2: PMparticles[b],
        v3: PMparticles[c],
        e1: edgeFor(a, b),
        e2: edgeFor(b, c),
        e3: edgeFor(c, a),
        z: 0,
        cy: 0
      });
    };
    for (var j = 0; j < rows - 1; j += 1) {
      for (var i = 0; i < cols - 1; i += 1) {
        var a = idx(i, j);
        var b = idx(i + 1, j);
        var c = idx(i, j + 1);
        var d = idx(i + 1, j + 1);
        addTriangle(a, b, c);
        addTriangle(b, d, c);
      }
    }
  })();
  var capeDepthOrder = function capeDepthOrder(A, B) {
    return A.z !== B.z ? A.z - B.z : A.cy - B.cy;
  };
  var drawCapeMesh = function drawCapeMesh() {
    var minY = Infinity;
    var maxY = -Infinity;
    for (var pI = 0; pI < PMparticles.length; pI += 1) {
      var pp = PMparticles[pI];
      if (pp.y < minY) {
        minY = pp.y;
      }
      if (pp.y > maxY) {
        maxY = pp.y;
      }
    }
    if (minY === Infinity) {
      minY = 0;
      maxY = height;
    }
    for (var ei = 0; ei < capeEdges.length; ei += 1) {
      var edge = capeEdges[ei];
      var dx = edge.b.x - edge.a.x;
      var dy = edge.b.y - edge.a.y;
      edge.length = sqrt(dx * dx + dy * dy);
    }
    for (var ti = 0; ti < capeTriangles.length; ti += 1) {
      var T = capeTriangles[ti];
      T.z = (T.v1.z + T.v2.z + T.v3.z) / 3.0;
      T.cy = (T.v1.y + T.v2.y + T.v3.y) / 3.0;
      // Reset source order so stable-sort depth ties remain unchanged.
      capeDrawOrder[ti] = T;
    }
    capeDrawOrder.sort(capeDepthOrder);
    noStroke();
    for (var di = 0; di < capeDrawOrder.length; di += 1) {
      drawColoredTriangle(capeDrawOrder[di], minY, maxY);
    }
    if (!showGrid) {
      stroke(20, 20, 30, 180);
      strokeWeight(1);
      for (var e = 0; e < constraints.length; e += 1) {
        var con = constraints[e];
        line(con.a.x, con.a.y, con.b.x, con.b.y);
      }
    }
  };
  var rebuildClothWithSpacing = function rebuildClothWithSpacing(newSpacing) {
    Spacing = newSpacing;
    minSepNeighbor = Spacing * 0.45;

    // reposition particles in grid
    for (var j = 0; j < rows; j += 1) {
      for (var i = 0; i < cols; i += 1) {
        var p = PMparticles[idx(i, j)];
        var x = 80 + i * Spacing;
        var y = 40 + j * Spacing;
        p.x = p.px = x;
        p.y = p.py = y;
        p.ax = 0;
        p.ay = 0;
        p.baseAnchorX = x;
        p.baseAnchorY = y;
      }
    }
    buildConstraints();
  };
  var vulnerableEyes = function vulnerableEyes(x, y, s, rot) {
    stroke(0);
    noFill();
    pushMatrix();
    translate(x, y);
    rotate(rot);
    var loops = 15;
    for (var a = 0; a < loops; a++) {
      var percent = a / loops;
      strokeWeight(max(1, s / 12 * (1 - percent)));
      arc(0, 0, s * (1 - percent), s * (1 - percent), a * 30, 180 + a * 30);
    }
    popMatrix();
  };

  // There's the man
  var parkMast = function parkMast(x, y, s, boss) {
    if (settings.fancyGraphics) {
      if (Spacing !== s / 10) {
        rebuildClothWithSpacing(s / 10);
      }
      setClothPosition(x, y);

      // Dark Blue Cape
      // pin wobble & damp
      var t = frameCount * swaySpeed;
      pinOffsetX += cos(t) * 0.02;
      pinOffsetY += sin(t) * 0.01;
      pinOffsetX *= pinDamp;
      pinOffsetY *= pinDamp;
      if (pinOffsetX > maxPinOffset) {
        pinOffsetX = maxPinOffset;
      }
      if (pinOffsetX < -maxPinOffset) {
        pinOffsetX = -maxPinOffset;
      }
      if (pinOffsetY > maxPinOffset) {
        pinOffsetY = maxPinOffset;
      }
      if (pinOffsetY < -maxPinOffset) {
        pinOffsetY = -maxPinOffset;
      }
      currentPinAnchorOffsetX = pinOffsetX;
      currentPinAnchorOffsetY = pinOffsetY;

      // update hard pins
      for (var sz = 0; sz < cols; sz += 1) {
        var tp = PMparticles[idx(sz, 0)];
        if (tp.pinned) {
          tp.pinX = tp.baseAnchorX + currentPinAnchorOffsetX;
          tp.pinY = tp.baseAnchorY + currentPinAnchorOffsetY;
        }
      }

      // forces
      for (var k = 0; k < PMparticles.length; k += 1) {
        var p = PMparticles[k];
        p.applyForce(0, gravity);
        var vx2 = p.x - p.px;
        var vy2 = p.y - p.py;
        p.applyForce(-vx2 * airDrag, -vy2 * airDrag);
        if (windOn && !p.pinned) {
          var w = windAt(p.x, p.y, frameCount);
          p.applyForce(w.vx, w.vy);
        }
      }

      // verlet update
      for (var u = 0; u < PMparticles.length; u += 1) {
        PMparticles[u].update();
      }

      // pseudo-Z (2.5D depth) 
      var zScale = 0.015;
      for (var zi = 0; zi < PMparticles.length; zi += 1) {
        var zp = PMparticles[zi];
        zp.z = (zp.restY - zp.y) * zScale;
      }

      // solver iterations
      for (var iter = 0; iter < rigidness; iter += 1) {
        for (var c = 0; c < constraints.length; c += 1) {
          constraints[c].solve();
        }
        strainLimit();
      }
      drawCapeMesh();
    } else {
      noStroke();
      fill(99, 0, 161);
      rect(x - s / 3, y, s / 1.5, s / 1.5);
    }

    // Main Body
    fill(253, 147, 255, 255);
    stroke(0, 0, 0, 255);
    strokeWeight(s / 100);
    beginShape();
    vertex(x, y - s / 2.67);
    vertex(x - s / 2.85, y - s / 100);
    vertex(x, y + s / 3.07);
    vertex(x + s / 2.85, y - s / 40);
    vertex(x, y - s / 2.67);
    endShape();
    pushMatrix();
    if (boss !== undefined) {
      translate(-bossXShift / 40 * bossDir + boss.vx, 0);
    }

    // Eyes
    if (boss !== undefined && boss.state === "vulnerable") {
      vulnerableEyes(x - s / 8, y - s / 10, s / 6, frameCount * 4);
      vulnerableEyes(x + s / 8, y - s / 10, s / 6, -frameCount * 4);
    } else {
      // LEFT EYE [
      fill(255, 255, 255, 255);
      beginShape();
      vertex(x - s / 29.57, y - s / 8 + pmBlinkY * 0.6 * (s / 200));
      vertex(x - s / 5.56, y - s / 5.88 + pmBlinkY * 0.6 * (s / 200));
      bezierVertex(x - s / 6.25, y + s / 13.33 - pmBlinkY * 1.6 * (s / 200), x - s / 15.38, y + s / 15.38 - pmBlinkY * 1.5 * (s / 200), x - s / 29.57, y - s / 8 + pmBlinkY * 0.6 * (s / 200));
      endShape();

      // Left Eye (black)
      fill(0, 0, 0, 255);
      beginShape();
      vertex(x - s / 7.69, y - s / 6.89 + pmBlinkY * 0.5 * (s / 200));
      vertex(x - s / 13.33, y - s / 7.4 + pmBlinkY * 0.6 * (s / 200));
      bezierVertex(x - s / 11.11, y + s / 20 - pmBlinkY * 1.2 * (s / 200), x - s / 7.14, y - s / 22.22 - pmBlinkY * 0.7 * (s / 200), x - s / 7.69, y - s / 6.89 + pmBlinkY * 0.6 * (s / 200));
      endShape();

      // Left Pupil
      noStroke();
      fill(255, 255, 255, 255);
      ellipse(x - s / 10.52, y - s / 8 + pmBlinkY / 2 * (s / 200), s / 40 - pmBlinkY, s / 40 - pmBlinkY);
      //]

      // RIGHT EYE [
      fill(255, 254, 254, 255);
      stroke(0, 0, 0, 255);
      strokeWeight(s / 100);
      beginShape();
      vertex(x + s / 16.67, y - s / 8 + pmBlinkY * 0.6 * (s / 200));
      vertex(x + s / 5.18, y - s / 5.88 + pmBlinkY * 0.6 * (s / 200));
      bezierVertex(x + s / 5.26, y + s / 13.33 - pmBlinkY * 1.6 * (s / 200), x + s / 15.38, y + s / 15.38 - pmBlinkY * 1.5 * (s / 200), x + s / 16.67, y - s / 8 + pmBlinkY * 0.6 * (s / 200));
      endShape();

      // Right Eye (black)
      fill(0, 0, 0, 255);
      beginShape();
      vertex(x + s / 10.52, y - s / 7.14 + pmBlinkY * 0.6 * (s / 200));
      vertex(x + s / 6.45, y - s / 6.45 + pmBlinkY * 0.6 * (s / 200));
      bezierVertex(x + s / 6.45, y - s / 100 - pmBlinkY * 0.7 * (s / 200), x + s / 10, y + s / 28.57 - pmBlinkY * 1.2 * (s / 200), x + s / 10.52, y - s / 7.14 + pmBlinkY * 0.6 * (s / 200));
      endShape();

      // Right Pupil
      noStroke();
      fill(255, 255, 255, 255);
      ellipse(x + s / 7.4, y - s / 7.4 + pmBlinkY / 2 * (s / 200), s / 40 - pmBlinkY, s / 40 - pmBlinkY);
      //]
    }

    // Mouth [
    noFill();
    stroke(0, 0, 0, 255);
    strokeWeight(s / 66.7);
    beginShape();
    vertex(x - s / 9.52, y + s / 7.4 - handAnimationY / 3 * (s / 200));
    bezierVertex(x - s / 14.28, y + s / 11.11 - handAnimationY / 3 * (s / 200), x + s / 14.28, y + s / 11.11 - handAnimationY / 3 * (s / 200), x + s / 9.52, y + s / 7.4 - handAnimationY / 3 * (s / 200));
    endShape();
    //]

    popMatrix();
    pushMatrix();
    if (boss !== undefined) {
      translate(-handAnimationY / 3 + bossXShift / 20 * -bossDir + boss.vx + 5, bossXShift / 10 * -bossDir);
    }

    // Left Hand
    fill(253, 147, 255, 255);
    stroke(0, 0, 0, 255);
    strokeWeight(s / 100);
    beginShape();
    vertex(x - s / 1.68, y - s / 13.33 + handAnimationY * (s / 200));
    vertex(x - s / 1.45, y + s / 33.33 + handAnimationY * (s / 200));
    vertex(x - s / 1.68, y + s / 8 + handAnimationY * (s / 200));
    vertex(x - s / 2, y + s / 40 + handAnimationY * (s / 200));
    vertex(x - s / 1.68, y - s / 13.33 + handAnimationY * (s / 200));
    endShape();

    // Left Glove
    fill(44, 42, pmCapeCol, 255);
    beginShape();
    vertex(x - s / 2, y + s / 40 + handAnimationY * (s / 200));
    vertex(x - s / 1.68, y - s / 13.33 + handAnimationY * (s / 200));
    vertex(x - s / 1.46, y + s / 40 + handAnimationY * (s / 200));
    bezierVertex(x - s / 1.54, y + s / 66.67 + handAnimationY * (s / 200), x - s / 1.72, y + s / 200 + handAnimationY * (s / 200), x - s / 2, y + s / 40 + handAnimationY * (s / 200));
    endShape();
    popMatrix();
    pushMatrix();
    if (boss !== undefined) {
      translate(-handAnimationY / 3 - bossXShift / 20 * bossDir + boss.vx - 5, bossXShift / 10 * bossDir);
    }

    // Right Hand
    fill(253, 147, 255, 255);
    beginShape();
    vertex(x + s / 1.64, y - s / 13.33 + handAnimationY * (s / 200));
    vertex(x + s / 1.96, y + s / 40 + handAnimationY * (s / 200));
    vertex(x + s / 1.64, y + s / 8 + handAnimationY * (s / 200));
    vertex(x + s / 1.4, y + s / 40 + handAnimationY * (s / 200));
    vertex(x + s / 1.64, y - s / 13.33 + handAnimationY * (s / 200));
    endShape();

    // Right Glove
    fill(44, 42, pmCapeCol, 255);
    beginShape();
    vertex(x + s / 1.96, y + s / 40 + handAnimationY * (s / 200));
    vertex(x + s / 1.64, y - s / 13.33 + handAnimationY * (s / 200));
    vertex(x + s / 1.4, y + s / 40 + handAnimationY * (s / 200));
    bezierVertex(x + s / 1.54, y + s / 66.67 + handAnimationY * (s / 200), x + s / 1.72, y + s / 200 + handAnimationY * (s / 200), x + s / 1.96, y + s / 40 + handAnimationY * (s / 200));
    endShape();
    popMatrix();
  };
  var masterX = function masterX(x, y, s, boss) {
    // glitch effect
    var offsetX = random(-s / 10, s / 10);
    var offsetY = random(-s / 10, s / 10);
    noStroke();
    if (frameCount % round(random(0, 2))) {
      fill(255, 255, 255, 200);
      beginShape();
      vertex(x + offsetX, y - s / 2.67 + offsetY);
      vertex(x - s / 2.85 + offsetX, y - s / 100 + offsetY);
      vertex(x + offsetX, y + s / 3.07 + offsetY);
      vertex(x + s / 2.85 + offsetX, y - s / 40 + offsetY);
      vertex(x + offsetX, y - s / 2.67 + offsetY);
      endShape();
    } //White glitch

    if (frameCount % round(random(0, 2))) {
      fill(0, 0, 255);
      beginShape();
      vertex(x + offsetX, y - s / 2.67 + offsetY);
      vertex(x - s / 2.85 + offsetX, y - s / 100 + offsetY);
      vertex(x + offsetX, y + s / 3.07 + offsetY);
      vertex(x + s / 2.85 + offsetX, y - s / 40 + offsetY);
      vertex(x + offsetX, y - s / 2.67 + offsetY);
      endShape();
    } //Blue glitch

    if (Spacing !== s / 10) {
      rebuildClothWithSpacing(s / 10);
    }
    setClothPosition(x, y);

    // Dark Red Cape
    // pin wobble & damp
    var t = frameCount * swaySpeed;
    pinOffsetX += cos(t) * 0.02;
    pinOffsetY += sin(t) * 0.01;
    pinOffsetX *= pinDamp;
    pinOffsetY *= pinDamp;
    if (pinOffsetX > maxPinOffset) {
      pinOffsetX = maxPinOffset;
    }
    if (pinOffsetX < -maxPinOffset) {
      pinOffsetX = -maxPinOffset;
    }
    if (pinOffsetY > maxPinOffset) {
      pinOffsetY = maxPinOffset;
    }
    if (pinOffsetY < -maxPinOffset) {
      pinOffsetY = -maxPinOffset;
    }
    currentPinAnchorOffsetX = pinOffsetX;
    currentPinAnchorOffsetY = pinOffsetY;

    // update hard pins
    for (var sz = 0; sz < cols; sz += 1) {
      var tp = PMparticles[idx(sz, 0)];
      if (tp.pinned) {
        tp.pinX = tp.baseAnchorX + currentPinAnchorOffsetX;
        tp.pinY = tp.baseAnchorY + currentPinAnchorOffsetY;
      }
    }

    // forces
    for (var k = 0; k < PMparticles.length; k += 1) {
      var p = PMparticles[k];
      p.applyForce(0, gravity);
      var vx2 = p.x - p.px;
      var vy2 = p.y - p.py;
      p.applyForce(-vx2 * airDrag, -vy2 * airDrag);
      if (windOn && !p.pinned) {
        var w = windAt(p.x, p.y, frameCount);
        p.applyForce(w.vx, w.vy);
      }
    }

    // verlet update
    for (var u = 0; u < PMparticles.length; u += 1) {
      PMparticles[u].update();
    }

    // pseudo-Z (2.5D depth) 
    var zScale = 0.015;
    for (var zi = 0; zi < PMparticles.length; zi += 1) {
      var zp = PMparticles[zi];
      zp.z = (zp.restY - zp.y) * zScale;
    }

    // solver iterations
    for (var iter = 0; iter < rigidness; iter += 1) {
      for (var c = 0; c < constraints.length; c += 1) {
        constraints[c].solve();
      }
      strainLimit();
    }
    drawCapeMesh();

    // DRAWN FROM OUR EZART MAKER

    // Main Body
    fill(60);
    stroke(0, 0, 0, 255);
    strokeWeight(s / 100);
    beginShape();
    vertex(x, y - s / 2.67);
    vertex(x - s / 2.85, y - s / 100);
    vertex(x, y + s / 3.07);
    vertex(x + s / 2.85, y - s / 40);
    vertex(x, y - s / 2.67);
    endShape();
    if (boss !== undefined && boss.state === "vulnerable") {
      vulnerableEyes(x - s / 8, y - s / 10, s / 6, frameCount * 4);
      vulnerableEyes(x + s / 8, y - s / 10, s / 6, -frameCount * 4);
    } else {
      // Left Eye
      fill(0);
      beginShape();
      vertex(x - s / 29.57, y - s / 8 + pmBlinkY * 0.6 * (s / 200));
      vertex(x - s / 5.56, y - s / 5.88 + pmBlinkY * 0.6 * (s / 200));
      bezierVertex(x - s / 6.25, y + s / 13.33 - pmBlinkY * 1.6 * (s / 200), x - s / 15.38, y + s / 15.38 - pmBlinkY * 1.5 * (s / 200), x - s / 29.57, y - s / 8 + pmBlinkY * 0.6 * (s / 200));
      endShape();

      // Right Eye
      fill(0);
      beginShape();
      vertex(x + s / 16.67, y - s / 8 + pmBlinkY * 0.6 * (s / 200));
      vertex(x + s / 5.18, y - s / 5.88 + pmBlinkY * 0.6 * (s / 200));
      bezierVertex(x + s / 5.26, y + s / 13.33 - pmBlinkY * 1.6 * (s / 200), x + s / 15.38, y + s / 15.38 - pmBlinkY * 1.5 * (s / 200), x + s / 16.67, y - s / 8 + pmBlinkY * 0.6 * (s / 200));
      endShape();

      // Left Eye (black)
      fill(255, 0, 0, 255);
      beginShape();
      vertex(x - s / 7.69, y - s / 6.89 + pmBlinkY * 0.5 * (s / 200));
      vertex(x - s / 13.33, y - s / 7.4 + pmBlinkY * 0.6 * (s / 200));
      bezierVertex(x - s / 11.11, y + s / 20 - pmBlinkY * 1.2 * (s / 200), x - s / 7.14, y - s / 22.22 - pmBlinkY * 0.7 * (s / 200), x - s / 7.69, y - s / 6.89 + pmBlinkY * 0.6 * (s / 200));
      endShape();

      // Left Pupil
      noStroke();
      fill(255);
      ellipse(x - s / 10.52, y - s / 8 + pmBlinkY / 2 * (s / 200), s / 40 - pmBlinkY, s / 40 - pmBlinkY);

      // Right Eye (black)
      fill(255, 0, 0, 255);
      stroke(0, 0, 0, 255);
      strokeWeight(s / 100);
      beginShape();
      vertex(x + s / 10.52, y - s / 7.14 + pmBlinkY * 0.6 * (s / 200));
      vertex(x + s / 6.45, y - s / 6.45 + pmBlinkY * 0.6 * (s / 200));
      bezierVertex(x + s / 6.45, y - s / 100 - pmBlinkY * 0.7 * (s / 200), x + s / 10, y + s / 28.57 - pmBlinkY * 1.2 * (s / 200), x + s / 10.52, y - s / 7.14 + pmBlinkY * 0.6 * (s / 200));
      endShape();

      // Right Pupil
      noStroke();
      fill(255);
      ellipse(x + s / 7.4, y - s / 7.4 + pmBlinkY / 2 * (s / 200), s / 40 - pmBlinkY, s / 40 - pmBlinkY);
    }

    // Mouth
    noFill();
    stroke(0, 0, 0, 255);
    strokeWeight(s / 66.7);
    beginShape();
    vertex(x - s / 9.52, y + s / 7.4 - handAnimationY / 3 * (s / 200));
    bezierVertex(x - s / 14.28, y + s / 11.11 - handAnimationY / 3 * (s / 200), x + s / 14.28, y + s / 11.11 - handAnimationY / 3 * (s / 200), x + s / 9.52, y + s / 7.4 - handAnimationY / 3 * (s / 200));
    endShape();

    // Left Hand
    pushMatrix();
    translate(-s / 1.7, -s / 10 + handAnimationY / 1.2);
    fill(45);
    stroke(0, 0, 0, 255);
    strokeWeight(s / 100);
    triangle(x - s / 10, y + s / 5, x, y, x + s / 10, y + s / 5);
    fill(pmCapeCol, 0, 0, 255);
    triangle(x - s / 18, y + s / 8, x, y, x + s / 18, y + s / 8);
    popMatrix();

    // Right Hand
    pushMatrix();
    translate(s / 1.7, -s / 10 + handAnimationY / 1.2);
    fill(45);
    stroke(0, 0, 0, 255);
    strokeWeight(s / 100);
    triangle(x - s / 10, y + s / 5, x, y, x + s / 10, y + s / 5);
    fill(pmCapeCol, 0, 0, 255);
    triangle(x - s / 18, y + s / 8, x, y, x + s / 18, y + s / 8);
    popMatrix();

    // Side triangles
    fill(0, 0, 120);
    triangle(x + s / 3, y - s / 40, x + s / 5, y, x + s / 3.9, y + s / 15);
    triangle(x - s / 3, y - s / 40, x - s / 5, y, x - s / 3.9, y + s / 15);
  };

  //]

  // Bosses
  var bossBlinks = [{
    timer: random(240, 420),
    blink: 0,
    blinking: false
  }, {
    timer: random(240, 420),
    blink: 0,
    blinking: false
  }, {
    timer: random(240, 420),
    blink: 0,
    blinking: false
  }];
  var updateBossBlink = function updateBossBlink(b) {
    b.timer--;

    // Start blink
    if (b.timer <= 0 && !b.blinking) {
      b.blinking = true;
    }
    if (b.blinking) {
      // Close eye
      b.blink += 0.2;

      // Re-open eye
      if (b.blink >= 1) {
        b.blink = 1;
        b.blinking = false;
        b.timer = random(90, 240);
      }
    } else {
      // Open eye
      b.blink -= 0.35;
    }
    b.blink = constrain(b.blink, 0, 1);
  };
  var bossEye = function bossEye(x, y, s, way, blink) {
    var eyeH = lerp(1, 0.08, blink);
    pushMatrix();
    translate(x, y);
    scale(1, eyeH);
    translate(-x, -y);
    if (way === "left") {
      // Black eye
      fill(0);
      stroke(0);
      strokeWeight(s / 25);
      beginShape();
      vertex(x - s / 5.26, y - s / 2.12);
      vertex(x + s / 3.33, y - s / 5.55);
      bezierVertex(x + s / 3.84, y + s / 1.2, x - s / 4.54, y + s / 1.01, x - s / 5.26, y - s / 2.08);
      vertex(x - s / 3.03, y - s / 1.75);
      vertex(x - s / 3.84, y - s / 1.42);
      vertex(x + s / 2, y - s / 8.33);
      vertex(x + s / 3.33, y - s / 5.26);
      vertex(x - s / 5.26, y - s / 2.12);
      endShape();
      // White pupil
      noStroke();
      fill(255);
      beginShape();
      vertex(x + s / 4.34, y - s / 5.88);
      vertex(x, y);
      vertex(x + s / 33.3, y - s / 3.33);
      vertex(x + s / 4.34, y - s / 5.88);
      endShape();
    } else if (way === "right") {
      // Black eye
      fill(0);
      stroke(0);
      strokeWeight(s / 25);
      beginShape();
      vertex(x + s / 5.26, y - s / 2.12);
      vertex(x - s / 3.33, y - s / 5.55);
      bezierVertex(x - s / 3.84, y + s / 1.2, x + s / 4.54, y + s / 1.01, x + s / 5.26, y - s / 2.08);
      vertex(x + s / 3.03, y - s / 1.75);
      vertex(x + s / 3.84, y - s / 1.42);
      vertex(x - s / 2, y - s / 8.33);
      vertex(x - s / 3.33, y - s / 5.26);
      vertex(x + s / 5.26, y - s / 2.12);
      endShape();
      // White pupil
      noStroke();
      fill(255);
      beginShape();
      vertex(x - s / 4.34, y - s / 5.88);
      vertex(x, y);
      vertex(x - s / 33.3, y - s / 3.33);
      vertex(x - s / 4.34, y - s / 5.88);
      endShape();
    }
    popMatrix();
  };
  var boss1Graphic = function boss1Graphic(x, y, s) {
    noStroke();
    // Body made of grounds
    fill(150);
    rect(x - s / 4, y - s / 2, s / 2, s, s / 15);
    // Right side
    rect(x + s / 8, y - s / 4, s / 2, s / 9, s / 30);
    rect(x + s / 5, y + s / 10, s / 3, s / 9, s / 30);
    // Left side
    rect(x - s / 1.6, y, s / 2, s / 9, s / 30);
    rect(x - s / 1.9, y + s / 5, s / 2, s / 9, s / 30);
    rect(x - s / 2.3, y - s / 2.6, s / 3, s / 9, s / 30);

    // Two eyes
    bossEye(x - s / 8.2, y - s / 3.7, s / 5.7, "left", bossBlinks[0].blink);
    bossEye(x + s / 8.2, y - s / 3.7, s / 5.7, "right", bossBlinks[0].blink);

    // Shading
    stroke(255, 255, 255, 60);
    strokeWeight(s / 40);
    line(x + s / 4.5, y - s / 2.3, x + s / 4.5, y - s / 2.4);
    line(x + s / 4.5, y - s / 5.2, x + s / 4.5, y - s / 2.8);
  };
  var boss2Graphic = function boss2Graphic(x, y, s) {
    noStroke();
    // First paltform (far left)
    fill(0);
    rect(x - s / 1.36, y, s / 25, s / 4);
    rect(x - s / 1.36, y + s / 4, s, s / 25);
    fill(150);
    rect(x - s, y - s / 8, s / 1.7, s / 6, s / 30);
    // Second platform (far right)
    fill(0);
    rect(x + s / 1.35, y, s / 25, s / 4);
    rect(x + s / 3.6, y + s / 4, s / 2, s / 25);
    fill(150);
    rect(x + s / 2.2, y - s / 20, s / 1.7, s / 6, s / 30);
    // Third platform (middle)
    fill(0);
    rect(x + s / 15, y - s / 5, s / 25, s / 3);
    fill(150);
    rect(x - s / 3.3, y - s / 3, s / 1.3, s / 6, s / 30);
    // Main Body made of grounds
    fill(150);
    rect(x - s / 2.6, y + s / 10, s / 1.3, s / 2.5, s / 20);

    // Two eyes
    bossEye(x - s / 7, y + s / 3.4, s / 5.7, "left", bossBlinks[1].blink);
    bossEye(x + s / 7, y + s / 3.4, s / 5.7, "right", bossBlinks[1].blink);

    // Shading
    stroke(255, 255, 255, 60);
    strokeWeight(s / 40);
    line(x + s / 2.9, y + s / 7, x + s / 2.9, y + s / 6.5);
    line(x + s / 2.9, y + s / 3.4, x + s / 2.9, y + s / 4.8);
  };
  var boss3Graphic = function boss3Graphic(x, y, s) {
    noStroke();
    // Body made of grounds
    fill(150);
    rect(x - s / 2, y - s / 3, s, s / 1.2, s / 10);
    rect(x - s / 1.3, y + s / 12, s / 2, s / 6, s / 10);
    rect(x - s / 1.3, y + s / 12, s / 2, s / 6, s / 30);
    rect(x + s / 4, y - s / 6, s / 2, s / 6, s / 30);

    // Two eyes
    bossEye(x - s / 4.7, y + s / 25, s / 4, "left", bossBlinks[2].blink);
    bossEye(x + s / 4.7, y + s / 25, s / 4, "right", bossBlinks[2].blink);

    // Shading
    stroke(255, 255, 255, 60);
    strokeWeight(s / 40);
    line(x + s / 2.2, y - s / 3.8, x + s / 2.2, y - s / 4.6);
    line(x + s / 2.2, y - s / 6.2, x + s / 2.2, y + s / 20);
  };

  // ]

  // Logos and Icons [
  // Dash Parkour logo
  var titleFrames = 0;
  var dashLogo = function dashLogo(x, y, s, f) {
    stroke(255, 0, 0);
    strokeWeight(s / 20);
    noFill();
    var sw = s / 20;

    // D

    // Long vertical
    if (f < 20) {
      line(x + sw, y + s / 2, x + sw, y + s / 2 - f * 5);
    } else {
      line(x + sw, y + s / 2, x + sw, y);
    }

    // Top short
    if (f >= 20 && f < 22.5) {
      line(x + sw, y, x + sw + (f - 20) * 5, y);
    } else if (f >= 22.5) {
      line(x + sw + 1, y - 1, x + sw + s / 16, y - 1);
    }

    // Curve
    if (f >= 22.5 && f < 30) {
      arc(x + sw + s / 16, y + s / 4, s / 2, s / 2, 270, 270 + (f - 22.5) * 21.6);
    } else if (f >= 30) {
      arc(x + sw + s / 16, y + s / 4 - 0.3, s / 2, s / 2, 270, 440);
    }

    // A

    // Left line
    if (f < 12.5) {
      line(x + s / 2, y + s / 2, x + s / 2 + f * 1.12, y + s / 2 - f * 6.672);
    } else {
      line(x + s / 2, y + s / 2, x + s / 1.75, y + s / 12);
    }

    // Curve
    if (f >= 12.5 && f < 17.5) {
      arc(x + s / 1.54, y + s / 8.5, s / 6, s / 4, 190, 190 + (f - 12.5) * 32);
    } else if (f >= 17.5) {
      arc(x + s / 1.54, y + s / 8.5, s / 6, s / 4, 190, 350);
    }

    // Right line
    if (f >= 17.5 && f < 30) {
      line(x + s / 1.37 + (f - 17.5) * 1.12, y + s / 12 + (f - 17.5) * 6.672, x + s / 1.37, y + s / 12);
    } else if (f >= 30) {
      line(x + s / 1.25, y + s / 2, x + s / 1.37, y + s / 12);
    }

    // S

    // Bottom curve
    if (f < 15) {
      arc(x + s, y + s / 2.7, s / 3, s / 4, 470 - f * 11.3, 470);
    } else {
      arc(x + s, y + s / 2.7, s / 3, s / 4, 300, 470);
    }

    // Top curve
    if (f >= 15 && f < 30) {
      arc(x + s * 1.12, y + s / 7.5 + 1, s / 3, s / 4, 110, 110 + (f - 15) * 11.3);
    } else if (f >= 30) {
      arc(x + s * 1.12, y + s / 7.5 + 1, s / 3, s / 4, 107, 280);
    }

    // H

    // Left vertical
    if (f < 15) {
      line(x + s * 1.3, y, x + s * 1.3, y + f * 7.5);
    } else {
      line(x + s * 1.3, y, x + s * 1.3, y + s / 2);
    }

    // Middle bar
    if (f >= 10 && f < 20) {
      line(x + s * 1.3, y + s / 4.25, x + s * 1.3 + (f - 10) * 3, y + s / 4.25);
    } else if (f >= 20) {
      line(x + s * 1.3 + 1, y + s / 4.25, x + s * 1.45, y + s / 4.25);
    }

    // Right vertical
    if (f >= 15 && f < 30) {
      line(x + s * 1.55, y + s / 2 - (f - 15) * 6.5, x + s * 1.55, y + s / 2);
    } else if (f >= 30) {
      line(x + s * 1.55, y, x + s * 1.55, y + s / 2);
    }

    // Parkour text

    arcAlign(CENTER);
    textSize(s / 5);
    if (f > 35) {
      stroke(0);
      arcSize(25);
      arcText("P", x + s / 20, y + s / 1.4);
    }
    if (f > 40) {
      arcText("A", x + s / 3.5, y + s / 1.4);
    }
    if (f > 45) {
      arcText("R", x + s / 1.8, y + s / 1.4);
    }
    if (f > 50) {
      arcText("K", x + s / 1.2, y + s / 1.4);
    }
    if (f > 55) {
      arcText("O", x + s * 1.09, y + s / 1.4);
    }
    if (f > 60) {
      arcText("U", x + s * 1.36, y + s / 1.4);
    }
    if (f > 65) {
      arcText("R", x + s * 1.6, y + s / 1.4);
    }
    noStroke();
    fill(0);

    // Triangles

    if (f > 75) {
      noStroke();
      triangle(x - s / 5 + 3 / 9, y + s / 1.428, x - s / 11.428, y + s / 1.311, x - s / 11.428, y + s / 1.568);
      triangle(x + s * 1.77, y + s / 1.428, x + s * 1.67, y + s / 1.311, x + s * 1.67, y + s / 1.568);
    }
  };
  var areaXlogo = function areaXlogo(x, y, s) {
    arcSize(s / 3);
    if (frameCount % round(random(0, 2))) {
      fill(255, 255, 255, 200);
      arcText("X", x + random(-s / 8, s / 8) - s / 3, y + random(-s / 8, s / 8));
    } //White glitch

    if (frameCount % round(random(0, 2))) {
      fill(0, 0, 255);
      arcText("X", x + random(-s / 8, s / 8) - s / 3, y + random(-s / 8, s / 8));
    } //Blue glitch

    stroke(random(180, 220), 0, 0);
    arcText("X", x - s / 3, y);
    textAlign(LEFT, BASELINE);
  };

  // Area X Portal
  var xPortalRot = 0;
  var areaXPortal = function areaXPortal(x, y, s, rot, mode) {
    pushMatrix();
    translate(x, y);
    rotate(rot);

    // Outer rings
    for (var c = 0; c < 40; c++) {
      stroke(130, 0, 0, 255 - c * 17);
      if (mode === 'light') {
        stroke(255, 200, 150, 255 - c * 17);
      }
      strokeWeight(4);
      noFill();
      ellipse(0, 0, s + c * 7, s + c * 7);
    }

    // Vortex lines coming out
    strokeWeight(s / 18);
    stroke(150, 0, 0); // dark red
    for (var a = 0; a < 4; a++) {
      pushMatrix();
      rotate(a * 90);
      arc(0, 0, s, s * random(1.77, 1.8), 270, 360);
      popMatrix();
    }
    stroke(0); // black
    for (var a = 0; a < 4; a++) {
      pushMatrix();
      rotate(45 + a * 90);
      arc(0, 0, s, s * random(1.45, 1.5), 270, 360);
      popMatrix();
    }

    // Center
    stroke(0);
    strokeWeight(s / 15);
    ellipse(0, 0, s, s);
    noStroke();
    for (var c = 0; c < 40; c++) {
      fill(random(180, 190) - c * 7, 0, 0);
      if (mode === 'light') {
        fill(c * 9 - random(0, 15), c * 9, c * 8, 255);
      }
      ellipse(0, 0, s - c * 5, s - c * 5);
    }
    popMatrix();
  };

  // ]

  // Buttons [
  var skipButton = function skipButton(x, y) {
    if (worldMouseX >= x && worldMouseX <= x + 100 && worldMouseY >= y && worldMouseY <= y + 50) {
      stroke(230, 230, 230);
      if (mouseIsPressed) {
        /*if(cutsceneName === "intro"){
            transitionActive = true;
            sceneToTransition = "title";
        }*/
        cFrames = 10000;
      }
    } else {
      stroke(255, 255, 255);
    }
    noFill();
    strokeWeight(8);
    rect(x, y, 80, 40, 24);
    textSize(26);
    fill(255, 255, 255);
    textAlign(CENTER);
    text("SKIP", x + 41, y + 30);
    noStroke();
  };

  // Achievements logo
  var achievementsLogo = function achievementsLogo(x, y, size) {
    pushMatrix();
    // Move to the target position first
    translate(x, y);

    // Scale based on pixels. 
    // The original width is like 337 pixels. 
    // We divide by 337 so that 'size' 100 = 100px wide.
    var pixelScale = size / 337;
    scale(pixelScale);
    // Yes i cooked that

    // Offset the internal coordinates 
    // This centers the shape so (x, y) is the top-left corner
    translate(-25, -7);

    // Left Handle
    noStroke();
    beginShape();
    vertex(95, 39);
    vertex(25, 39);
    vertex(37, 93);
    vertex(79, 135);
    vertex(131, 156);
    vertex(120, 121);
    vertex(85, 106);
    vertex(59, 81);
    vertex(60, 67);
    vertex(100, 67);
    endShape();

    // Body
    beginShape();
    vertex(83, 8);
    vertex(84, 38);
    vertex(114, 115);
    vertex(123, 156);
    vertex(133, 174);
    vertex(172, 191);
    vertex(173, 230);
    vertex(155, 252);
    vertex(113, 254);
    vertex(112, 300);
    vertex(86, 301);
    vertex(85, 336);
    vertex(300, 338);
    vertex(300, 303);
    vertex(278, 302);
    vertex(277, 256);
    vertex(235, 254);
    vertex(212, 230);
    vertex(211, 193);
    vertex(249, 172);
    vertex(262, 149);
    vertex(301, 65);
    vertex(308, 38);
    vertex(307, 7);
    endShape();

    // Right handle
    beginShape();
    vertex(252, 153);
    vertex(310, 134);
    vertex(343, 93);
    vertex(362, 40);
    vertex(299, 39);
    vertex(293, 66);
    vertex(326, 65);
    vertex(327, 79);
    vertex(309, 109);
    vertex(265, 121);
    endShape();
    popMatrix();
  };
  var drawShoppingBag = function drawShoppingBag(x, y, s) {
    pushMatrix();
    translate(x, y);

    // Bag
    stroke(80);
    strokeWeight(s * 0.04);
    fill(245);
    rect(-s * 0.27, -s * 0.20, s * 0.54, s * 0.48, s * 0.07);

    // Opening
    stroke(180);
    strokeWeight(s * 0.02);
    line(-s * 0.17, -s * 0.12, s * 0.17, -s * 0.12);

    // Handle
    noFill();
    stroke(100);
    strokeWeight(s * 0.04);
    arc(0, -s * 0.2, s * 0.26, s * 0.24, 180, 360);
    popMatrix();
  };

  // frames in it so you cant spam it by holding
  var sceneButtonFrames = 0;

  // Keeps track of each button's unique animation
  var buttonStates = [];
  var animateButton = function animateButton(currentSize, baseSize, isHovered) {
    // Grow by 25% of the base size when hovered
    var targetSize = isHovered ? baseSize * 1.25 : baseSize;
    var lerpSpeed = 0.15;
    return lerp(currentSize, targetSize, lerpSpeed);
  };
  var drawBackButton = function drawBackButton(x, y, currentSize, baseSize) {
    // Draw the button background
    fill(255, 255, 255, 100);
    stroke(0);
    strokeWeight(currentSize / 15);
    ellipse(x, y, currentSize, currentSize);
    noFill();
    stroke(100, 100, 100, 40);
    arc(x, y, currentSize / 1.3, currentSize / 1.3, 305 + (currentSize - baseSize) / baseSize * 1450, 325 + (currentSize - baseSize) / baseSize * 1450);

    // Draw back arrow
    stroke(255, 0, 0);
    strokeWeight(currentSize / 8);
    var arrowLength = currentSize / 3;
    var arrowTipX = x - arrowLength / 2;
    var arrowTipY = y;

    // Main arrow line
    line(x + arrowLength / 2, y, arrowTipX, arrowTipY);

    // Arrow head
    line(arrowTipX, arrowTipY, arrowTipX + currentSize / 6, arrowTipY - currentSize / 6);
    line(arrowTipX, arrowTipY, arrowTipX + currentSize / 6, arrowTipY + currentSize / 6);
  };
  var backButton = function backButton(x, y, baseSize) {
    // Initialize state if this is the first time the button is drawn
    if (buttonStates.back === undefined) {
      buttonStates.back = baseSize;
    }

    // Use the current animated size for the hover detection
    var hovered = dist(worldMouseX, worldMouseY, x, y) < buttonStates.back / 2;

    // Update the size for this specific button
    buttonStates.back = animateButton(buttonStates.back, baseSize, hovered);
    var currentSize = buttonStates.back;
    drawBackButton(x, y, currentSize, baseSize);

    // Interaction logic
    if (hovered) {
      cursor(HAND);
      if (mouseIsPressed && !transitionActive) {
        transitionActive = true;
        sceneButtonFrames = 0;
        sceneToTransition = "title";
      }
    }
  };

  // Level (Q) Menu
  var qMenuActive = false;
  var qMenuX = -300;
  var qMenuWidth = 300;
  var continueButton = function continueButton(x, y, baseWidth, baseHeight) {
    if (buttonStates.continue === undefined) {
      buttonStates.continue = {
        w: baseWidth,
        h: baseHeight
      };
    }
    var state = buttonStates.continue;

    // Check hover state
    var hovered = worldMouseX > x - state.w / 2 && worldMouseX < x + state.w / 2 && worldMouseY > y - state.h / 2 && worldMouseY < y + state.h / 2;

    // Animate width and height
    var targetW = hovered ? baseWidth * 1.15 : baseWidth;
    var targetH = hovered ? baseHeight * 1.15 : baseHeight;
    state.w = lerp(state.w, targetW, 0.15);
    state.h = lerp(state.h, targetH, 0.15);

    // Visual effect
    if (hovered) {
      cursor(HAND);
      fill(255, 255, 255, 180); // Slight highlight
    } else {
      fill(255, 255, 255, 100); // Default transparent white
    }
    stroke(0);
    strokeWeight(3);
    rect(x - state.w / 2, y - state.h / 2, state.w, state.h, 12);

    // Scaled text
    stroke(0);
    arcSize(state.h * 0.25);
    arcText("CONTINUE", x - state.w / 2.4, y + state.h / 20);

    // If clicked
    if (hovered && mouseIsPressed) {
      qMenuActive = false;
    }
  };
  var analogClock = function analogClock(x, y, diameter, bodyColor, handsStroke) {
    bodyColor = bodyColor || color(0);
    handsStroke = handsStroke || bodyColor;
    var radius = diameter / 2;
    var textSizeValue = diameter * 0.12;
    textSize(textSizeValue);
    textAlign(CENTER, CENTER);
    var bodyStrokeWeight = diameter * 0.01;
    strokeWeight(bodyStrokeWeight);
    stroke(bodyColor);
    fill(255);
    ellipse(x, y, diameter, diameter);
    var sa = map(second(), 0, 60, 0, 360) - 90;
    var sx = x + cos(sa) * radius * 0.9;
    var sy = y + sin(sa) * radius * 0.9;
    var ma = map(minute() + second() / 60, 0, 60, 0, 360) - 90;
    var mx = x + cos(ma) * radius * 0.8;
    var my = y + sin(ma) * radius * 0.8;
    var ha = map(hour() % 12 + minute() / 60, 0, 12, 0, 360) - 90;
    var hx = x + cos(ha) * radius * 0.5;
    var hy = y + sin(ha) * radius * 0.5;
    fill(bodyColor);

    // Draw the numbers
    for (var i = 0; i < 12; i++) {
      var angle = map(i, 0, 12, 0, 360) - 60; // -60 to align numbers
      var numX = x + cos(angle) * (radius - textSizeValue * 1.1);
      var numY = y + sin(angle) * (radius - textSizeValue * 1.1);
      text(i + 1, numX, numY);
    }
    stroke(handsStroke);
    var secondHandWeight = diameter * 0.01;
    var minuteHandWeight = diameter * 0.02;
    var hourHandWeight = diameter * 0.03;
    strokeWeight(secondHandWeight);
    line(x, y, sx, sy); // Second hand
    strokeWeight(minuteHandWeight);
    line(x, y, mx, my); // Minute hand
    strokeWeight(hourHandWeight);
    line(x, y, hx, hy); // Hour hand
  };

  // Magic
  var lock;
  var Clock = function Clock(x, y, Size) {
    this.x = x || 0;
    this.y = y || 0;
    this.size = Size;
    this.time = 0;
    this.running = false;
  };
  var sceneButton = function sceneButton(x, y, txt, baseSize) {
    // Initialize state if this is the first time the button is drawn
    if (buttonStates[txt] === undefined) {
      buttonStates[txt] = baseSize;
    }

    // Use the current animated size for the hover detection
    var hovered = dist(worldMouseX, worldMouseY, x, y) < buttonStates[txt] / 2;

    // Update the size for this specific button
    if (txt === "Runs") {
      if (lvlUnlock >= 17) {
        buttonStates[txt] = animateButton(buttonStates[txt], baseSize, hovered);
      }
    } else {
      buttonStates[txt] = animateButton(buttonStates[txt], baseSize, hovered);
    }
    var currentSize = buttonStates[txt];
    switch (txt) {
      case "Runs":
        //analogClock(x, y, currentSize, color(31, 31, 31), color(26, 0, 26));
        var clock = new Clock(0, 0, currentSize / 1.1);
        pushMatrix();
        translate(x, y);
        rotate(10);
        clock.draw();
        popMatrix();
        if (lvlUnlock < 17) {
          lock(x, y, currentSize * 1.2);
        }
        break;
      case "Play":
        // Draw the button
        fill(255, 255, 255, 100);
        stroke(0);
        strokeWeight(currentSize / 15);
        ellipse(x, y, currentSize, currentSize);
        stroke(100, 100, 100, 40);
        arc(x, y, currentSize / 1.3, currentSize / 1.3, 305 + (currentSize - baseSize) / baseSize * 1450, 325 + (currentSize - baseSize) / baseSize * 1450);

        // Play icon
        pushMatrix();
        translate(x, y);
        rotate((currentSize - baseSize) / baseSize * 1450 / 3);
        fill(255, 0, 0);
        var r = currentSize * 0.3;
        triangle(r, 0, -r / 2, -r * 0.866, -r / 2, r * 0.866);
        popMatrix();
        break;
      case "Goals":
        // Draw the button
        fill(255, 255, 255, 100);
        stroke(0);
        strokeWeight(currentSize / 15);
        ellipse(x, y, currentSize, currentSize);
        fill(211, 175, 55);
        achievementsLogo(x - currentSize / 2.6, y - currentSize / 2.9, currentSize / 1.3);
        break;
      case "Shop":
        fill(255, 255, 255, 100);
        stroke(0);
        strokeWeight(currentSize / 15);
        ellipse(x, y, currentSize, currentSize);
        drawShoppingBag(x, y, currentSize);
        break;
      default:
        // Draw the button
        fill(255, 255, 255, 100);
        stroke(0);
        strokeWeight(currentSize / 15);
        ellipse(x, y, currentSize, currentSize);
        stroke(100, 100, 100, 40);
        arc(x, y, currentSize / 1.3, currentSize / 1.3, 305 + (currentSize - baseSize) / baseSize * 1450, 325 + (currentSize - baseSize) / baseSize * 1450);

        // Draw text scaled to the button size
        stroke(255, 0, 0);
        arcSize(currentSize / 6);
        arcDashAlign = CENTER;
        arcText(txt, x + 4, y);
        break;
    }

    // Interaction logic
    if (hovered) {
      cursor(HAND);
      if (mouseIsPressed && !transitionActive) {
        if (txt === "Runs" && lvlUnlock < 17) {
          return;
        }
        transitionActive = true;
        sceneButtonFrames = 0;

        // Change scene to the scene selected
        sceneToTransition = txt;
      }
    }
  };
  var gearRot = 0;
  var gearGraphic = function gearGraphic(x, y, s) {
    var currentSize = s;

    // Gear widgets
    noStroke();
    fill(100);
    pushMatrix();
    translate(x, y);
    rotate(gearRot);
    rect(-(currentSize / 12.5), -(currentSize / 2.94), currentSize / 6.7, currentSize / 5, currentSize / 20);
    rect(-(currentSize / 12.5), currentSize / 7.7, currentSize / 6.7, currentSize / 5, currentSize / 20);
    rect(currentSize / 7.14, -(currentSize / 14.3), currentSize / 5, currentSize / 6.7, currentSize / 20);
    rect(-(currentSize / 2.94), -(currentSize / 14.3), currentSize / 5, currentSize / 6.7, currentSize / 20);
    popMatrix();
    // Diagonal widgets
    pushMatrix();
    translate(x, y);
    rotate(gearRot + 45);
    rect(-(currentSize / 12.5), -(currentSize / 2.94), currentSize / 6.7, currentSize / 5, currentSize / 20);
    rect(-(currentSize / 12.5), currentSize / 7.7, currentSize / 6.7, currentSize / 5, currentSize / 20);
    rect(currentSize / 7.14, -(currentSize / 14.3), currentSize / 5, currentSize / 6.7, currentSize / 20);
    rect(-(currentSize / 2.94), -(currentSize / 14.3), currentSize / 5, currentSize / 6.7, currentSize / 20);
    popMatrix();

    // Light gray interior
    noFill();
    stroke(100);
    strokeWeight(currentSize / 5);
    ellipse(x, y, currentSize / 2.86, currentSize / 2.86);
    // Dark gray exterior
    stroke(150);
    strokeWeight(currentSize / 9.1);
    ellipse(x, y, currentSize / 2.86, currentSize / 2.86);

    // Red circles to give a Dash asthetic
    stroke(200, 0, 0);
    strokeWeight(currentSize / 25);
    arc(x, y, currentSize / 5, currentSize / 5, 10 + gearRot * 2, 90 + gearRot * 2);
    arc(x, y, currentSize / 5, currentSize / 5, 190 + gearRot * 2, 270 + gearRot * 2);

    // Shine
    stroke(255, 255, 255, 100);
    arc(x - currentSize / 14.3, y - currentSize / 14.3, currentSize / 5, currentSize / 5, 225, 260);
    arc(x - currentSize / 14.3, y - currentSize / 14.3, currentSize / 5, currentSize / 5, 190, 190);
  };
  var gearButton = function gearButton(x, y, s, txt) {
    // All of the regular button math
    if (buttonStates[txt] === undefined) {
      buttonStates[txt] = s;
    }

    // Use the current animated size for the hover detection
    var hovered = dist(worldMouseX, worldMouseY, x, y) < buttonStates[txt] / 3.5;

    // Update the size for this specific button
    buttonStates[txt] = animateButton(buttonStates[txt], s, hovered);
    var currentSize = buttonStates[txt];

    // Rotate the button
    if (hovered) {
      gearRot++;
    }
    if (mouseIsPressed * hovered && !transitionActive) {
      transitionActive = true;
      sceneToTransition = "settings";
    }

    // draw it
    gearGraphic(x, y, currentSize);
  };
  var areaSelected = [];
  var areaSelect = 0;
  var areaSelectBck;
  var aSelectX = 610;
  var aSelectXGoal = 265;
  var arrowToGo = [0, 0];
  var areaSelectButton = function areaSelectButton(x, y, baseSize, world) {
    // Create unique state for each button
    if (buttonStates[world] === undefined) {
      buttonStates[world] = {
        size: baseSize,
        outlineOp: 0
      };
    }
    var state = buttonStates[world];

    // Hover detection
    var hovered = dist(worldMouseX, worldMouseY, x, y) < state.size / 2;
    var unlocked = lvlUnlock > (world - 1) * 4;

    // Animate size
    state.size = animateButton(state.size, baseSize, hovered);
    var currentSize = state.size;
    var target = worlds[world - 1];

    // Animate outline opacity
    if (hovered && unlocked) {
      state.outlineOp = lerp(state.outlineOp, 255, 0.1);
      areaSelected[world - 1] = true;
      if (world === 1) {
        arrowToGo[0] = x;
        arrowToGo[1] = y + currentSize / 2;
      }
      if (world === 2) {
        arrowToGo[0] = x - currentSize / 2;
        arrowToGo[1] = y;
      }
      if (world === 3) {
        arrowToGo[0] = x + currentSize / 2;
        arrowToGo[1] = y - currentSize / 2;
      }
    } else {
      state.outlineOp = lerp(state.outlineOp, 0, 0.1);
      areaSelected[world - 1] = false;
    }

    // Draw background

    fill(worlds[world - 1].bg, state.outlineOp);
    if (world === 4) {
      stroke(230, 230, 230, state.outlineOp);
    } else {
      stroke(0, 0, 0, state.outlineOp);
    }
    strokeWeight(currentSize / 20);
    rect(x - currentSize / 2, y - currentSize / 2, currentSize, currentSize, currentSize / 8);

    // Shading
    noFill();
    stroke(100, 100, 100, state.outlineOp / 6.375);
    strokeWeight(currentSize / 25);
    arc(x + currentSize / 3.3, y - currentSize / 3.3, currentSize / 5, currentSize / 5, 290, 340);
    var bossFloat = 0;
    if (hovered && unlocked) {
      bossFloat = sin(frameCount * 3) * 6;
    }

    // Graphics
    if (world === 1) {
      boss1Graphic(x, y + bossFloat, currentSize / 1.6);
    }
    if (world === 2) {
      boss2Graphic(x, y + bossFloat, currentSize / 1.7);
    }
    if (world === 3) {
      boss3Graphic(x, y + bossFloat, currentSize / 1.6);
    }
    if (world === 4) {
      pushMatrix();
      translate(x, y);
      rotate(xPortalRot);
      image(imgs.xPortalDark, 0, 0, currentSize * 1.2, currentSize * 1.2);
      popMatrix();
    }

    // Interaction
    if (hovered && unlocked) {
      cursor(HAND);
      if (mouseIsPressed && !transitionActive) {
        transitionActive = true;
        sceneButtonFrames = 0;
        sceneToTransition = "Play";
        worldSubScreenTo = world;
      }
    }
  };
  var levelSelectButton = function levelSelectButton(x, y, baseSize, level) {
    // Create unique state for each button
    if (buttonStates[level] === undefined) {
      buttonStates[level] = {
        size: baseSize,
        outlineOp: 0
      };
    }
    var state = buttonStates[level];
    var currentSize = state.size;

    // Hover detection
    var hovered = worldMouseX > x - currentSize / 4 && worldMouseX < x - currentSize / 4 + currentSize * 2 && worldMouseY > y - currentSize / 2 && worldMouseY < y - currentSize / 2 + currentSize / 1.4;

    // Animate size
    state.size = animateButton(state.size, baseSize, hovered);

    // Draw background

    fill(255, 255, 255, 255);
    stroke(0);
    strokeWeight(currentSize / 15);
    rect(x - currentSize + baseSize, y - currentSize / 2, currentSize * 2.3, currentSize / 1.4, currentSize);

    // Shading
    noFill();
    stroke(100, 100, 100, 100);
    strokeWeight(currentSize / 25);
    arc(x + currentSize * 1.05 + baseSize, y - currentSize / 4, currentSize / 5, currentSize / 5, 290, 340);
    if (lvlUnlock > (worldSubScreen - 1) * 4 + level) {
      fill(0, 240, 100);
    } else if (lvlUnlock === (worldSubScreen - 1) * 4 + level) {
      fill(220, 0, 0);
    } else {
      fill(150);
    }
    stroke(0);
    if (level !== 4) {
      ellipse(x + baseSize - currentSize / 1.5, y - currentSize / 7, currentSize / 2.5, currentSize / 2.5);
    } else {
      if (lvlUnlock < (worldSubScreen - 1) * 4 + level) {
        fill(0);
      }
      noStroke();
      quad(x + baseSize - currentSize / 1.65, y - currentSize / 3, x + baseSize - currentSize / 2.5, y - currentSize / 8, x + baseSize - currentSize / 1.65, y + currentSize / 15, x + baseSize - currentSize / 1.24, y - currentSize / 8);
      ellipse(x + baseSize - currentSize / 2.6, y - currentSize / 30, currentSize / 10, currentSize / 10);
      ellipse(x + baseSize - currentSize / 1.2, y - currentSize / 30, currentSize / 10, currentSize / 10);
    }
    if (worldSubScreen === 1) {
      stroke(0, 0, 100);
    }
    if (worldSubScreen === 2) {
      stroke(0, 100, 0);
    }
    if (worldSubScreen === 3) {
      stroke(130, 50, 0);
    }
    if (worldSubScreen === 4) {
      stroke(random(130, 240), 0, 0);
    }
    arcSize(currentSize / 4.5);
    if (level === 4) {
      arcText('BOSS', x + baseSize - currentSize / 4, y - currentSize / 10);
    } else if (worldSubScreen < 4) {
      arcText(worldSubScreen + ' - ' + level, x + baseSize - currentSize / 5, y - currentSize / 10);
    } else {
      arcText('X - ' + level, x + baseSize - currentSize / 5, y - currentSize / 10);
    }

    // Interaction
    if (hovered) {
      cursor(HAND);
      if (mouseIsPressed && !transitionActive && lvlUnlock >= (worldSubScreen - 1) * 4 + level) {
        transitionActive = true;
        sceneButtonFrames = 0;
        sceneToTransition = "Play";
      }
    }
  };
  var exitSelectButton = function exitSelectButton(x, y, baseSize) {
    // Initialize state if this is the first time the button is drawn
    if (buttonStates.back === undefined) {
      buttonStates.back = baseSize;
    }

    // Use the current animated size for the hover detection
    var hovered = dist(worldMouseX, worldMouseY, x, y) < buttonStates.back / 2;

    // Update the size for this specific button
    buttonStates.back = animateButton(buttonStates.back, baseSize, hovered);
    var currentSize = buttonStates.back;
    drawBackButton(x, y, currentSize, baseSize);

    // Interaction
    if (hovered) {
      cursor(HAND);
      if (mouseIsPressed && !transitionActive) {
        transitionActive = true;
        sceneButtonFrames = 0;
        sceneToTransition = "Play";
        worldSubScreenTo = 0;
      }
    }
  };

  //]

  // Settings page [

  // Add customizable settings here.
  var config = {
    "General": [{
      label: "Developer Keybinds",
      key: "generalSetting",
      defaultValue: false,
      desc: "Turn on some special keybinds"
    }],
    "Game": [{
      label: "Instant Respawn",
      key: "instantRespawn",
      defaultValue: false,
      desc: "When enabled, players skip the death screen and instantly  respawn."
    }],
    "Display": [{
      label: "Dark Mode",
      key: "darkMode",
      defaultValue: false,
      desc: "Only affects the settings page. Yeah, Digits got lazy. On the bright side, achievements page is pretty dark by default! Or would that be the dark side..."
    }, {
      label: "Scene Transitions",
      key: "sceneTransitions",
      defaultValue: true,
      desc: "That cool animation whenever you press a scene button"
    }, {
      label: "Fancy Graphics",
      key: "fancyGraphics",
      defaultValue: true,
      desc: "What should have been the single greatest frames factor.\n\nToggles a few laggy graphics, notibly the parkour master's cape. The biggest culprit, text, remains largely unoptimized."
    }, {
      label: "Particles",
      key: "particles",
      defaultValue: true,
      desc: "Stops particles from even spawning. Notable performance boost."
    }],
    "Audio": [{
      label: "Sound Effects",
      key: "soundEffects",
      defaultValue: true,
      desc: "We didn't add these. Maybe will in the future, but unlikely. Would be inclued but not limited to: jumping, damage, lava, etc.\n\nHas no affect on frames, mostly just preference."
    }, {
      label: "Play Music",
      key: "playMusic",
      defaultValue: true,
      desc: "There is none! If we later decide to add it, this will toggle background music.\n\nMusic is known to cause lag spikes, so turn this to false if frames are inconsistent. (oh wait it's not added so this does nothing)"
    }]
  };
  var currentPage = "Menu";
  var lastPage = "";
  var transitionX = 0;
  var currentX = 0;
  var darkModeRatio = 0;
  var backHoverRatio = 0;
  var hovers = [];
  var settings = [];

  // typing
  var hoverDescKey = "";
  var descCharPos = 0;
  var descSpeed = 2.5;
  var descText = "";
  var descFade = 0;
  var descFadeTarget = 0;

  // add more as needed
  var themes = {
    light: {
      bg: color(235),
      card: color(255),
      text: color(40),
      accent: color(0, 122, 255),
      hover: color(220)
    },
    dark: {
      bg: color(20),
      card: color(45),
      text: color(240),
      accent: color(10, 132, 255),
      hover: color(60)
    }
  };
  var getC = function getC(p) {
    return lerpColor(themes.light[p], themes.dark[p], darkModeRatio);
  };

  // Wrench variables and sprite function
  var wrenchRot = -10;
  var wrenchFrames = 0;
  var wrenchSelected = false;
  var wrenchFramesReturn = 0;
  var wrench = function wrench(x, y, s, rot) {
    pushMatrix();
    translate(x, y);
    rotate(rot);

    // Main wrench body
    fill(101, 100, 100, 252);
    stroke(getC("text"));
    strokeWeight(s / 32.5);
    beginShape();
    vertex(-(s / 10.83), s / 3.51);
    bezierVertex(-(s / 2.71), s / 1.44, s / 2.7, s / 1.44, s / 10.83, s / 3.51);
    vertex(s / 10.83, -(s / 3.6));
    bezierVertex(s / 4.3, -(s / 3.6), s / 3.1, -(s / 1.7), s / 10.83, -(s / 1.37));
    vertex(s / 10.83, -(s / 2));
    vertex(-(s / 10.83), -(s / 2));
    vertex(-(s / 10.83), -(s / 1.37));
    bezierVertex(-(s / 3.1), -(s / 1.7), -(s / 4.3), -(s / 3.6), -(s / 10.83), -(s / 3.5));
    vertex(-(s / 10.83), s / 3.51);
    endShape();

    // Shimmer
    stroke(255, 255, 255, 100);
    strokeWeight(s / 26);
    line(s / 32.5, -(s / 65), s / 32.5, s / 21.67);
    line(s / 32.5, -(s / 14.4), s / 32.5, -(s / 14.4));
    popMatrix();
  };

  // WASD key animation
  var wasdSelected = false;
  var wasdFrames = -30;
  var wasdSpacing = 0;
  var wasdKeyShade = 4;
  var wasdShadeFrames = 0;
  var wasdShadeCol = [255, 255, 255, 255];
  var wasdKeys = function wasdKeys(x, y, s, spacing) {
    stroke(0);
    strokeWeight(s / 35);

    // Darken the key that is currently being used
    wasdKeyShade[wasdKeyShade - 1] = wasdShadeCol[wasdKeyShade - 1] = lerp(wasdShadeCol[wasdKeyShade - 1], 150, 0.1);
    if (wasdKeyShade !== 1) {
      wasdShadeCol[0] = lerp(wasdShadeCol[0], 255, 0.15);
    }
    fill(wasdShadeCol[0]);
    rect(x, y - spacing, s / 2.2, s / 2.2, s / 20); // W key

    if (wasdKeyShade !== 2) {
      wasdShadeCol[1] = lerp(wasdShadeCol[1], 255, 0.15);
    }
    fill(wasdShadeCol[1]);
    rect(x - s / 2 - spacing, y + s / 2, s / 2.2, s / 2.2, s / 20); // A key

    if (wasdKeyShade !== 3) {
      wasdShadeCol[2] = lerp(wasdShadeCol[2], 255, 0.15);
    }
    fill(wasdShadeCol[2]);
    rect(x, y + s / 2 + spacing / 3, s / 2.2, s / 2.2, s / 20); // S key

    if (wasdKeyShade !== 4) {
      wasdShadeCol[3] = lerp(wasdShadeCol[3], 255, 0.15);
    }
    fill(wasdShadeCol[3]);
    rect(x + s / 2 + spacing, y + s / 2, s / 2.2, s / 2.2, s / 20); // D key

    fill(0);
    textSize(s / 3);
    textAlign(CENTER);
    text("W", x + s / 4.5, y + s / 2.8 - spacing);
    text("A", x - s / 3.5 - spacing, y + s / 1.17);
    text("S", x + s / 4.5, y + s / 1.17 + spacing / 3);
    text("D", x + s / 1.35 + spacing, y + s / 1.17);
  };

  // TV variables and graphic
  var tvSelected = false;
  var tvSize = 0;
  var tvFrames = 0;
  var tvMonitor = function tvMonitor(x, y, s) {
    fill(getC("text"));
    strokeWeight(s / 70);
    stroke(getC("text"));
    rect(x - s / 11, y + s / 3.3, s / 3.63, s / 16.67);
    rect(x - s / 2.3, y - s / 3.5, s / 1.04, s / 1.73, s / 40);
    rect(x - s / 4, y + s / 2.74, s / 1.67, s / 20, s / 40);
    noStroke();
    rect(x - s / 12.5, y + s / 4, s / 3.85, s / 6.67);

    // Dark blue screen
    fill(61, 187, 255, 255);
    noStroke();
    beginShape();
    vertex(x - s / 2.5, y - s / 4);
    vertex(x + s / 2, y - s / 4);
    vertex(x + s / 2, y + s / 4);
    vertex(x - s / 2.5, y + s / 4);
    vertex(x - s / 2.5, y - s / 4);
    endShape();

    // Light blue screen stripes
    fill(127, 229, 255, 255);
    beginShape();
    vertex(x - s / 2.5, y + s / 4);
    vertex(x - s / 4, y + s / 4);
    vertex(x - s / 10, y - s / 4); // leftmost stripe
    vertex(x - s / 4, y - s / 4);
    vertex(x - s / 2.5, y + s / 4);
    endShape();
    fill(127, 229, 255, 255);
    beginShape();
    vertex(x - 20, y + s / 4);
    vertex(x, y + s / 4);
    vertex(x + s / 6.67, y - s / 4);
    vertex(x + s / 20, y - s / 4); // middle stripe
    vertex(x - s / 10, y + s / 4);
    endShape();
    fill(127, 229, 255, 255);
    beginShape();
    vertex(x + s / 2, y + s / 4);
    vertex(x + s / 2, y - s / 6.1);
    vertex(x + s / 2.86, y + s / 4); // rightmost stripe
    vertex(x + s / 2, y + s / 4);
    endShape();
  };

  // Music note animation
  var musNoteSelected = !false;
  var musNoteFrames = 0;
  var musNoteOscilate = 0;
  var largeMusicNote = function largeMusicNote(x, y, s, rot) {
    // Slightly transparent black
    fill(getC("text"), 200);
    stroke(getC("text"));
    strokeWeight(s / 30);
    pushMatrix();
    translate(x, y);
    rotate(rot);
    beginShape();
    vertex(-(s / 3), -(s / 1.7));
    vertex(-(s / 3), s / 2.4);
    bezierVertex(-(s / 2), s / 3, -(s / 1.5), s / 2.67, -(s / 1.5), s / 2);
    bezierVertex(-(s / 1.5), s / 1.7, -(s / 3.4), s / 1.5, -(s / 4), s / 2);
    vertex(-(s / 4), -(s / 2));
    bezierVertex(-(s / 8), -(s / 2.2), s / 8, -(s / 2.2), s / 4, -(s / 2));
    vertex(s / 4, s / 2.4);
    bezierVertex(s / 8, s / 3, -(s / 12), s / 2.67, -(s / 12), s / 2);
    bezierVertex(-(s / 12), s / 1.7, s / 3.4, s / 1.5, s / 3, s / 2);
    vertex(s / 3, -(s / 1.7));
    bezierVertex(s / 8, -(s / 1.85), -(s / 8), -(s / 1.85), -(s / 3), -(s / 1.7));
    endShape();
    popMatrix();
  };
  var smallMusicNote = function smallMusicNote(x, y, s, rot) {
    fill(getC("text"), 200);
    stroke(getC("text"));
    strokeWeight(s / 25);
    pushMatrix();
    translate(x, y);
    rotate(rot);
    beginShape();
    vertex(0, -(s / 2));
    vertex(0, s / 2.5);
    bezierVertex(-(s / 10), s / 3.3, -(s / 2.5), s / 2.5, -(s / 2.5), s / 2);
    bezierVertex(-(s / 2.5), s / 1.54, s / 20, s / 1.54, s / 10, s / 2);
    vertex(s / 10, -s / 2.5);
    bezierVertex(s / 5, -(s / 2.85), s / 3.3, -(s / 2.85), s / 2.5, -(s / 2.5));
    vertex(0, -(s / 2));
    endShape();
    popMatrix();
  };

  // Switch class
  var Switch = function Switch(h, key, initialVal) {
    this.h = h;
    this.w = h * 1.9;
    this.key = key;

    // Only apply the default value if a saved value doesn't already exist!
    if (settings[key] === undefined) {
      settings[key] = initialVal;
    }

    // Read the actual live value (whether loaded or defaulted) for the animations
    var liveVal = settings[key];
    this.knobSize = this.h * 0.85;
    this.knobX = liveVal ? 1 : 0;
    this.colorRatio = liveVal ? 1 : 0;
  };
  Switch.prototype.draw = function (x, y) {
    var isOn = settings[this.key];
    this.knobX = lerp(this.knobX, isOn ? 1 : 0, 0.2);
    this.colorRatio = lerp(this.colorRatio, isOn ? 1 : 0, 0.2);
    var offColor = lerpColor(color(200), color(80), darkModeRatio);
    var onColor = color(76, 217, 100);
    noStroke();
    fill(lerpColor(offColor, onColor, this.colorRatio));
    rect(x, y, this.w, this.h, this.h / 2);
    var kX = lerp(x + this.h / 2, x + this.w - this.h / 2, this.knobX);
    fill(0, 0, 0, 20);
    ellipse(kX, y + this.h / 2 + 1, this.knobSize, this.knobSize);
    fill(255);
    ellipse(kX, y + this.h / 2, this.knobSize, this.knobSize);
  };

  // cat in the config :3
  for (var cat in config) {
    var arr = config[cat];
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];

      //setup switches
      item.sw = new Switch(44, item.key, item.defaultValue);
    }
  }

  // reset typing when hover target changes
  var _prevHoverKey = "";
  var resetTypingOnChange = function resetTypingOnChange() {
    if (hoverDescKey !== _prevHoverKey) {
      descCharPos = 0;
      _prevHoverKey = hoverDescKey;
    }
  };

  //]

  // shop setup [
  var currentSkin = 0;
  var shopScroll = 0;
  var targetScroll = 0;
  var vouchers = 0;
  var voucherRewards = [1, 1, 2, 0, 2, 2, 3, 0, 3, 3, 4, 0, 4, 4, 5, 0];

  // Control special skin states, and can do other stuff
  var area1Unlocked = true;
  var area2Unlocked = false;
  var area3Unlocked = false;
  var areaXUnlocked = false;
  var allAreasComplete = false;
  var allRunsComplete = false;
  if (lvlUnlock > 4) {
    area2Unlocked = true;
  }
  if (lvlUnlock > 8) {
    area3Unlocked = true;
  }
  if (lvlUnlock > 12) {
    areaXUnlocked = true;
  }
  if (lvlUnlock > 16) {
    allAreasComplete = true;
  }

  // Skins setup. id, name, spawn/die particle color, area, and owned.
  var skins = [{
    id: 0,
    name: "Dash\nSkin",
    mainColor: color(255, 0, 0),
    cost: null,
    owned: true,
    area: "1"
  }, {
    id: 1,
    name: "Classic\nSkin",
    mainColor: color(255, 0, 0),
    cost: 1,
    owned: false,
    area: "1"
  }, {
    id: 2,
    name: "Chef\nCostume",
    mainColor: color(255, 0, 0),
    cost: 2,
    owned: false,
    area: "1"
  }, {
    id: 3,
    name: "Minecraft\nBlock",
    mainColor: color(29, 158, 0),
    cost: 2,
    owned: false,
    area: "1"
  }, {
    id: 4,
    name: "Sphere\nCostume",
    mainColor: color(255, 0, 0),
    cost: 3,
    owned: false,
    area: "1"
  }, {
    id: 5,
    name: "Tower\nDash",
    mainColor: color(128, 128, 128),
    cost: null,
    owned: area2Unlocked,
    area: "1"
  }, {
    id: 6,
    name: "Boing\nCostume",
    mainColor: color(0, 34, 128),
    cost: 1,
    owned: false,
    area: "2"
  }, {
    id: 7,
    name: "Scary\nLarry",
    mainColor: color(36, 0, 0),
    cost: 2,
    owned: false,
    area: "2"
  }, {
    id: 8,
    name: "Warrior\nCostume",
    mainColor: color(255, 0, 0),
    cost: 2,
    owned: false,
    area: "2"
  }, {
    id: 9,
    name: "8-bit\nDash",
    mainColor: color(225, 255, 0),
    cost: 3,
    owned: false,
    area: "2"
  }, {
    id: 10,
    name: "Multi\nPlatform\nDash",
    mainColor: color(92, 92, 92),
    cost: null,
    owned: area3Unlocked,
    area: "2"
  }, {
    id: 11,
    name: "Dino\nDash",
    mainColor: color(250, 77, 100),
    cost: 1,
    owned: false,
    area: "3"
  }, {
    id: 12,
    name: "Zapp\nCostume",
    mainColor: color(155, 158, 107),
    cost: 2,
    owned: false,
    area: "3"
  }, {
    id: 13,
    name: "Ninja\nCostume",
    mainColor: color(0, 47, 255),
    cost: 3,
    owned: false,
    area: "3"
  }, {
    id: 14,
    name: "Mario\nCostume",
    mainColor: color(255, 0, 0),
    cost: 3,
    owned: false,
    area: "3"
  }, {
    id: 15,
    name: "Maze\nDash",
    mainColor: color(61, 61, 61),
    cost: null,
    owned: areaXUnlocked,
    area: "3"
  }, {
    id: 16,
    name: "ECH0\nCostume",
    mainColor: color(255, 0, 0),
    cost: 2,
    owned: false,
    area: "X"
  }, {
    id: 17,
    name: "Dash\nBrainrot",
    mainColor: color(0, 0, 0),
    cost: 2,
    owned: false,
    area: "X"
  }, {
    id: 18,
    name: "Kineto\nCostume",
    mainColor: color(4, 0, 255),
    cost: 3,
    owned: false,
    area: "X"
  }, {
    id: 19,
    name: "Digitsofpi\nCostume",
    mainColor: color(255, 0, 0),
    cost: 3,
    owned: false,
    area: "X"
  }, {
    id: 20,
    name: "Champion\nDash",
    mainColor: color(255, 0, 0),
    cost: null,
    owned: allAreasComplete,
    area: "X"
  }, {
    id: 21,
    name: "Parkour\nMaster\nCostume",
    mainColor: color(183, 0, 255),
    cost: null,
    owned: allRunsComplete,
    area: "S"
  }
  /*
  { id: 22, name: "Parkour\nMaster\nCostume", mainColor: color(183, 0, 255), cost: null, owned: areaXwith100percentModifiersComplete, area: "S" }
  */];
  // ]

  // Achivements page & savecode with a sprinkle of runs [

  var levelTimes = [];
  var MAX_LEVELS = 17;

  // Pack array [empty, 50s, 100s, 0, 0...] into a short string "1e-2s"
  var packTimes = function packTimes(times) {
    var activeTimes = [];
    var lastNonZero = 0;

    // Find the last level that actually has a recorded time
    for (var i = 1; i <= MAX_LEVELS; i++) {
      var seconds = Math.round((times[i] || 0) / 60);
      if (seconds > 0) {
        lastNonZero = i;
      }
    }

    // If no speedruns have been completed yet, return an empty string
    if (lastNonZero === 0) {
      return "";
    }

    // Collect times up to that last active level
    for (var i = 1; i <= lastNonZero; i++) {
      var seconds = Math.round((times[i] || 0) / 60);
      activeTimes.push(seconds.toString(36)); // Convert to base-36 (short alphanumeric)
    }
    return activeTimes.join("-");
  };

  // Unpack "1e-2s" back into your frames array
  var unpackTimes = function unpackTimes(str) {
    var times = [];
    if (!str) {
      return times;
    }
    var parts = str.split("-");
    for (var i = 0; i < parts.length; i++) {
      var seconds = parseInt(parts[i], 36) || 0;
      times[i + 1] = seconds * 60; // Convert back to engine frames
    }
    return times;
  };

  // Minecraft lava bucket
  function hotStuff(x, y, size, frame) {
    var createData = ["---dddddd---", "-ddzpoorrdd-", "dpryyzzyzrod", "drzyzyyzyzrd", "dewrzyryyrqd", "dlewwwwrztqd", "dlllleeqrted", "dllmleeqtted", "delmleeqrted", "dtlmleeqttqd", "-dllleeqtqd-", "-delleqqtqd-", "--deleqtqd--", "---dddddd---"];
    var colors = {
      "d": color(53, 53, 53),
      "z": color(227, 140, 63),
      "y": color(255, 255, 0),
      "o": color(182, 140, 123),
      "p": color(159, 127, 120),
      "r": color(204, 70, 40),
      "w": color(127, 62, 44),
      "t": color(114, 114, 114),
      "q": color(150, 150, 150),
      "e": color(168, 168, 168),
      "l": color(216, 216, 216),
      "m": color(255, 255, 255)
    };

    // Call the utility function 'drawHugePixelArt' (requires the utility code to be pasted above this)
    drawHugePixelArt(x, y, size, createData, colors, frame);
  }

  // Minecraft lava bucket
  function poisonBucket(x, y, size, frame) {
    var createData = ["---dddddd---", "-ddzpoorrdd-", "dpryyzzyzrod", "drzyzyyzyzrd", "dewrzyryyrqd", "dlewwwwrztqd", "dlllleeqrted", "dllmleeqtted", "delmleeqrted", "dtlmleeqttqd", "-dllleeqtqd-", "-delleqqtqd-", "--deleqtqd--", "---dddddd--?"];
    var greencolors = {
      "d": color(53, 53, 53),
      "z": color(80, 255, 80),
      // brightest poison
      "y": color(200, 255, 120),
      // highlight
      "r": color(30, 190, 40),
      // midtone
      "w": color(20, 120, 25),
      // shadow
      "o": color(123, 181, 141),
      "p": color(140, 158, 120),
      "t": color(114, 114, 114),
      "q": color(150, 150, 150),
      "e": color(168, 168, 168),
      "l": color(216, 216, 216),
      "m": color(255, 255, 255),
      // add this random char so they dont have the same cache key and therefore get colors confused
      "?": color(0, 0, 0, 0)
    };

    // Call the utility function 'drawHugePixelArt' (requires the utility code to be pasted above this)
    drawHugePixelArt(x, y, size, createData, greencolors, frame);
  }
  // That took far too long to trace

  // for non stop
  function hamMan(x, y, s) {
    pushMatrix();
    translate(x, y);
    scale(s * 0.00295);
    translate(-300, -170);
    noStroke();

    // The guy
    beginShape();
    vertex(289, 173);
    vertex(289, 166);
    bezierVertex(293, 148, 295, 129, 304, 122);
    bezierVertex(313, 140, 318, 149, 319, 162);
    vertex(319, 168);
    vertex(316, 171);
    vertex(313, 172);
    vertex(312, 174);
    vertex(328, 174);
    vertex(328, 168);
    bezierVertex(325, 153, 327, 143, 323, 138);
    bezierVertex(320, 127, 318, 127, 319, 122);
    bezierVertex(322, 120, 329, 116, 333, 112);
    vertex(333, 103);
    vertex(332, 101);
    vertex(339, 101);
    vertex(341, 100);
    vertex(341, 96);
    bezierVertex(337, 86, 317, 77, 314, 68);
    vertex(314, 60);
    bezierVertex(318, 46, 311, 40, 309, 32);
    vertex(309, 28);
    vertex(307, 27);
    vertex(307, 19);
    vertex(306, 18);
    vertex(307, 16);
    vertex(307, 15);
    vertex(305, 15);
    vertex(305, 13);
    vertex(306, 13);
    vertex(306, 11);
    vertex(305, 11);
    vertex(305, 9);
    vertex(302, 6);
    vertex(301, 2);
    vertex(300, 2);
    vertex(299, 5);
    vertex(299, 8);
    vertex(298, 8);
    vertex(298, 9);
    vertex(298, 10);
    vertex(298, 13);
    vertex(299, 13);
    vertex(298, 14);
    vertex(298, 15);
    vertex(296, 16);
    vertex(295, 18);
    vertex(297, 18);
    vertex(297, 19);
    vertex(298, 24);
    vertex(298, 27);
    vertex(299, 30);
    vertex(300, 31);
    vertex(301, 39);
    vertex(302, 45);
    vertex(301, 46);
    vertex(301, 45);
    vertex(301, 43);
    bezierVertex(296, 34, 287, 39, 287, 46);
    bezierVertex(288, 45, 289, 53, 293, 56);
    bezierVertex(288, 58, 287, 71, 286, 76);
    bezierVertex(286, 80, 291, 91, 291, 95);
    bezierVertex(290, 98, 289, 101, 289, 104);
    vertex(290, 109);
    bezierVertex(289, 111, 286, 116, 286, 118);
    vertex(286, 128);
    bezierVertex(284, 132, 279, 160, 278, 167);
    vertex(276, 169);
    vertex(274, 170);
    vertex(273, 171);
    vertex(271, 171);
    vertex(270, 172);
    vertex(270, 173);
    vertex(270, 174);
    vertex(289, 174);
    endShape();

    // The star
    beginShape();
    vertex(162, 173);
    vertex(247, 234);
    vertex(217, 335);
    vertex(301, 271);
    vertex(385, 335);
    vertex(355, 234);
    vertex(438, 174);
    vertex(162, 173);
    endShape();
    popMatrix();
  }
  var drawIdlePlayer = function drawIdlePlayer(x, y, s, rotation) {
    pushMatrix();
    translate(x, y);
    rotate(rotation);
    var w = s;
    var h = s;
    fill(0);

    // Body
    fill(255, 0, 0);
    noStroke();
    rect(-w / 2, -h, w, h, w * 0.25);

    // Face position
    var scaleOffset = w * 0.25;
    var fX = 10;
    var fY = -w / 1.5;

    // Eyes
    fill(255);
    ellipse(fX / 2 - scaleOffset, fY, w / 3, w / 3);
    ellipse(fX / 2 + scaleOffset, fY, w / 3, w / 3);
    fill(0);
    ellipse(fX - scaleOffset, fY, w / 6, w / 6);
    ellipse(fX + scaleOffset, fY, w / 6, w / 6);

    // Mouth
    stroke(0);
    strokeWeight(w * 0.05);
    fill(0);
    arc(fX / 2, fY + h * 0.32, w / 2, w / 3, 0, 180);
    line(fX / 2 - scaleOffset, fY / 1.9, fX / 2 + scaleOffset, fY / 1.9);
    popMatrix();
  };

  // pixel perfect
  function pxlPerfect(x, y, size, frame) {
    var createData = ["rrrr----", "rrrr----", "rrrr---g", "rrrr--gg", "rrrr-ggg", "----gggg", "---ggggg", "--gggggg"];
    var colors = {
      "r": color(255, 0, 0),
      "g": color(105, 105, 105)
    };

    // Call the utility function 'drawHugePixelArt' (requires the utility code to be pasted above this)
    drawHugePixelArt(x, y, size, createData, colors, frame);
  }
  var drawIdleZapp = function drawIdleZapp(x, y, s) {
    var legsAnim = lerp(s * 0.07, -s * 0.07, 1);
    var eyesAnimX = lerp(0, s * 0.58, 1);
    var eyesAnimY = lerp(0, s * 0.03, 1);
    var stripeAnim = lerp(s * 0.47, -s * 0.47, 1);
    var sparkAnim = lerp(s * 0.12, -s * 0.12, 1);

    // Back legs
    stroke(220, 220, 0);
    strokeWeight(s / 10);
    line(x + s / 5 - legsAnim, y + s * 0.75, x + s / 5, y + s * 0.6);
    line(x + s * 0.45 + legsAnim, y + s * 0.75, x + s * 0.45, y + s * 0.6);
    line(x + s * 0.67 - legsAnim, y + s * 0.75, x + s * 0.67, y + s * 0.6);

    // Body
    fill(190);
    noStroke();
    rect(x, y, s, s / 1.5, s / 3);

    // Eyes
    fill(255, 240, 0);
    ellipse(x + s * 0.07 + eyesAnimX, y + s / 4 + eyesAnimY, s / 8, s / 8);
    ellipse(x + s / 3 + eyesAnimX, y + s / 3.7 - eyesAnimY, s / 8, s / 8);

    // Eyelids
    fill(255, 50, 0);
    arc(x + s / 15 + eyesAnimX, y + s / 4 + eyesAnimY, s / 8, s / 8, 200, 380);
    arc(x + s / 3 + eyesAnimX, y + s / 3.8 - eyesAnimY, s / 8, s / 8, 160, 340);

    // Spark
    fill(255, 240, 0);
    ellipse(x + s / 2, y + s / 35, s / 1.5, s / 9);
    noStroke();
    triangle(x + s / 2 - sparkAnim, y - s / 2.3, x + s / 2 + sparkAnim * 0.7, y, x + s / 2 - sparkAnim * 1.5, y);
    triangle(x + s / 2 + sparkAnim * 1.9, y - s / 1.6, x + s / 2 + sparkAnim * 0.7, y, x + s / 2 - sparkAnim * 0.4, y - s / 3.5);

    // Stripe
    fill(255, 80, 0);
    triangle(x + s * 0.5 + stripeAnim * 0.5, y + s / 3, x + s * 0.5 + stripeAnim, y + s / 4.5, x + s * 0.5 + stripeAnim, y + s / 2.3);
    ellipse(x + s * 0.5 + stripeAnim, y + s / 3, s / 15, s / 5);

    // Front legs
    strokeWeight(s / 10);
    stroke(255, 255, 0);
    line(x + s * 0.25, y + s * 0.65, x + s * 0.25 + legsAnim, y + s * 0.8);
    line(x + s * 0.48, y + s * 0.65, x + s * 0.48 - legsAnim, y + s * 0.8);
    line(x + s * 0.7, y + s * 0.65, x + s * 0.7 + legsAnim, y + s * 0.8);
  };
  var drawIdleBoing = function drawIdleBoing(x, y, s) {
    // Frozen animation (legs up)
    var xOffset = s / 2;
    var xOffset2 = s / 2;
    var w = s / 1.5;
    var w2 = s / 1.5;
    var leftArcStart = 200;
    var leftArcEnd = 280;
    var rightArcStart = 260;
    var rightArcEnd = 340;

    // Arms / legs
    noFill();
    stroke(0, 150, 0);
    strokeWeight(s / 10);
    arc(x - xOffset, y + s, w, s * 1.7, leftArcStart, leftArcEnd);
    arc(x - xOffset2, y + s, w2, s * 1.5, leftArcStart, leftArcEnd);
    arc(x + xOffset, y + s, w, s * 1.7, rightArcStart, rightArcEnd);
    arc(x + xOffset2, y + s, w2, s * 1.5, rightArcStart, rightArcEnd);

    // Body
    noStroke();
    fill(50, 100, 180);
    ellipse(x, y, s, s);
    triangle(x - s / 2.37, y + s / 3.65, x + s / 2.37, y + s / 3.65, x, y + s);
    stroke(255, 255, 255, 50);
    strokeWeight(s / 20);
    arc(x, y, s / 1.3, s / 1.3, 210, 240);

    // Eyes
    noStroke();
    fill(255, 255, 0);
    ellipse(x - s / 7, y + 10, s / 8, s / 3.5);
    ellipse(x + s / 7, y + 10, s / 8, s / 3.5);
  };
  var drawIdleThorn = function drawIdleThorn(x, y, s) {
    noStroke();
    fill(70);
    triangle(x - s / 2, y, x + s / 2, y, x, y - s / 2);
    strokeWeight(s / 12);
    stroke(255, 255, 255, 50);
    line(x + s * 0.05, y - s * 0.325, x + s * 0.125, y - s * 0.25);
  };
  var drawIdleSpike = function drawIdleSpike(x, y, s) {
    noStroke();

    // Main spike
    fill(175, 165, 165);
    triangle(x - s / 2, y, x + s / 2, y, x, y - s);

    // Light tint highlight
    strokeWeight(s / 15);
    stroke(200);
    line(x - s * 0.25, y - s * 0.10, x - s * 0.10, y - s * 0.55);
  };
  var drawIdleGap = function drawIdleGap(x, y, s) {
    noStroke();
    fill(130, 130, 130);

    // Left platform
    rect(x - s * 1.25, y - s / 4, s, s, s / 12);

    // Right platform
    rect(x + s / 4, y - s / 4, s, s, s / 12);
  };
  var drawIdleCrown = function drawIdleCrown(x, y, s) {
    var crownW = s;
    var crownH = s * 0.55;
    stroke(0);
    strokeWeight(s / 15);
    fill(255, 215, 0);

    // Crown spikes
    beginShape();
    vertex(x - crownW / 2, y);
    vertex(x - crownW / 2, y - crownH / 1.5);
    vertex(x - crownW / 5, y - crownH / 3);
    vertex(x, y - crownH);
    vertex(x + crownW / 5, y - crownH / 3);
    vertex(x + crownW / 2, y - crownH / 1.5);
    vertex(x + crownW / 2, y);
    endShape(CLOSE);

    // Crown band
    fill(255, 215, 0);
    rect(x - crownW / 2, y - crownH / 5, crownW, crownH / 4, s / 20);

    // Jewel
    fill(219, 21, 166);
    ellipse(x, y - crownH, s / 5, s / 5);
  };
  var drawStopLight = function drawStopLight(x, y, s) {
    // Pole
    stroke(70);
    strokeWeight(s / 12);
    line(x, y + s / 2, x, y + s);

    // Light body
    noStroke();
    fill(40, 40, 40);
    rect(x - s / 3, y - s / 2, s * 0.66, s, s / 10);

    // Lights
    // Red
    fill(180, 0, 0);
    ellipse(x, y - s * 0.30, s / 5, s / 5);

    // Yellow
    fill(200, 180, 0);
    ellipse(x, y, s / 5, s / 5);

    // Green (ON)
    fill(0, 255, 60);
    ellipse(x, y + s * 0.30, s / 5, s / 5);

    // Green glow
    fill(100, 255, 150, 80);
    ellipse(x, y + s * 0.30, s / 3, s / 3);

    // Ground base
    fill(70, 70, 70);
    rect(x - s / 3, y + s, s * 0.66, s / 10, s / 20);
  };
  var drawSkull = function drawSkull(x, y, s) {
    // Original drawing was roughly centered around (200, 200)
    // and about 400px wide/tall.

    noStroke();
    beginShape();

    // Helper functions to scale coordinates
    var sxz = function sxz(px) {
      return x + (px - 200) * (s / 200);
    };
    var syz = function syz(py) {
      return y + (py - 200) * (s / 200);
    };
    vertex(sxz(100), syz(140));
    bezierVertex(sxz(100), syz(107), sxz(118), syz(100), sxz(140), syz(100));
    vertex(sxz(279), syz(100));
    vertex(sxz(273), syz(126));
    vertex(sxz(228), syz(149));
    vertex(sxz(251), syz(197));
    vertex(sxz(255), syz(158));
    vertex(sxz(285), syz(144));
    vertex(sxz(300), syz(121));
    bezierVertex(sxz(308), syz(124), sxz(310), syz(136), sxz(310), syz(141));
    vertex(sxz(309), syz(260));
    bezierVertex(sxz(310), syz(287), sxz(300), syz(300), sxz(282), syz(300));
    vertex(sxz(141), syz(301));
    bezierVertex(sxz(115), syz(302), sxz(100), syz(287), sxz(100), syz(261));
    vertex(sxz(100), syz(130));
    endShape();
  };
  var drawEye = function drawEye(x, y, s) {
    beginShape();
    vertex(x - s / 9, y - s / 7);
    vertex(x - s / 5.1, y - s / 70);
    vertex(x - s / 12, y + s / 13);
    vertex(x - s / 5.4, y + s / 7);
    vertex(x - s / 3.45, y + s / 13);
    vertex(x - s / 2.75, y + s / 7.6);
    vertex(x - s / 2.2, y + s / 22);
    vertex(x - s / 2.5, y - s / 40);
    vertex(x - s / 2.2, y - s / 10);
    vertex(x - s / 2.7, y - s / 5.6);
    vertex(x - s / 3.35, y - s / 8);
    vertex(x - s / 5.1, y - s / 5);
    vertex(x - s / 9, y - s / 7);
    endShape();
  };
  /**
   * Hyper-compressed save system for DASH Parkour Achievements.
   */

  // --- Game Page Achievement Configuration ---
  var selectedBadge = null;
  var badgeSpacing = 100;
  var badgeWidth = 600;
  var startY = 270;
  var targetY = 270;
  var badgeClassOrder = ["General", "Obstacles", "Worlds"];

  // Live Settings States (Notice how your true/false defaults are set here!)
  var settings = {
    generalSetting: false,
    instantRespawn: false,
    darkMode: false,
    sceneTransitions: true,
    fancyGraphics: true,
    particles: true,
    soundEffects: true,
    playMusic: true
  };
  var SAVE_TEMPLATE = {};

  // Achievements
  for (var Key in achievementStates) {
    if (achievementStates.hasOwnProperty(Key)) {
      SAVE_TEMPLATE[Key] = achievementStates[Key];
    }
  }

  // Settings
  for (var Key in settings) {
    if (settings.hasOwnProperty(Key)) {
      SAVE_TEMPLATE[Key] = settings[Key];
    }
  }

  // Skins
  for (var i = 0; i < skins.length; i++) {
    SAVE_TEMPLATE["skin_" + skins[i].id] = skins[i].owned;
  }

  // Progress & Stats
  SAVE_TEMPLATE.lvlUnlock = lvlUnlock;
  SAVE_TEMPLATE.currentSkin = currentSkin;
  SAVE_TEMPLATE.vouchers = vouchers;
  SAVE_TEMPLATE.deaths = deaths; // Registered in the blueprint!
  SAVE_TEMPLATE.area2Unlocked = area2Unlocked;
  SAVE_TEMPLATE.area3Unlocked = area3Unlocked;
  SAVE_TEMPLATE.areaXUnlocked = areaXUnlocked;
  SAVE_TEMPLATE.allAreasComplete = allAreasComplete;
  SAVE_TEMPLATE.allRunsComplete = allRunsComplete;
  SAVE_TEMPLATE.speedruns = "";
  var Save = makeSaveSystem(SAVE_TEMPLATE);

  // The UI array populated by initAchievements()
  var achievements = [];
  function initAchievements() {
    achievements = [
    // Worlds Achievements
    {
      name: "Starting Small",
      img: getImage("avatars/aqualine-seed"),
      description: "This is just the beginning.",
      tutorial: "Complete area 1.",
      rarity: "Uncommon",
      class: "Worlds",
      locked: !achievementStates.startingSmall
    }, {
      name: "Green Means Go",
      img: imgs.stopLightIcon,
      description: "That sure was the beginning!",
      tutorial: "Complete area 2.",
      rarity: "Rare",
      class: "Worlds",
      locked: !achievementStates.greenMeansGo
    }, {
      name: "Non-Stop",
      img: imgs.nonStopIcon,
      description: "Man, the man is Non-Stop!",
      tutorial: "Complete area 3.",
      rarity: "Legendary",
      class: "Worlds",
      locked: !achievementStates.nonStop
    }, {
      name: "Parkour Champion",
      img: imgs.crownIcon,
      description: "This crown was earned.",
      tutorial: "Complete area X.",
      rarity: "Mythical",
      class: "Worlds",
      locked: !achievementStates.parkourChampion,
      shown: !achievementStates.nonStop // Hidden until Non-Stop is unlocked
    },
    /*
    {
        name: "Lightwork",
        img: "😴",
        description: "No reaction.",
        tutorial: "Complete area 1 with at least 100% modifier bonus.",
        rarity: "Mythical",
        class: "Worlds",
        locked: !achievementStates.lightwork,
        shown: !achievementStates.parkourChampion
    },
    {
        name: "Twenty-Two",
        img: "✨",
        description: "Area 2 was boring anyway",
        tutorial: "Complete area 2 with at least 100% modifier bonus.",
        rarity: "Mythical",
        class: "Worlds",
        locked: !achievementStates.twentyTwo,
        shown: !achievementStates.lightwork
    },
    {
        name: "True Dedication",
        img: "🔥",
        description: "How long did this one take you?",
        tutorial: "Complete area 3 with at least 100% modifier bonus.",
        rarity: "Mythical",
        class: "Worlds",
        locked: !achievementStates.trueDedication,
        shown: !achievementStates.twentyTwo
    },
    {
        name: "Parkour Master",
        img: "🌸",
        description: "I can't believe you got this.",
        tutorial: "Complete area X with at least 100% modifier bonus.",
        rarity: "Impossible",
        class: "Worlds",
        locked: !achievementStates.parkourMaster,
        shown: !achievementStates.trueDedication
    },
    */

    // Obstacles Achievements
    {
      name: "Hot Stuff",
      img: imgs.hotStuffIcon,
      description: "Why can't I jump?!?!",
      tutorial: "Touch lava.",
      rarity: "Uncommon",
      class: "Obstacles",
      locked: !achievementStates.hotStuff
    }, {
      name: "Pointy",
      img: imgs.spikeIcon,
      description: "Now that's a sharp tip.",
      tutorial: "Touch a spike.",
      rarity: "Uncommon",
      class: "Obstacles",
      locked: !achievementStates.pointy
    }, {
      name: "Bottomless",
      img: imgs.gapIcon,
      description: "How deep does it go?",
      tutorial: "Fall in a gap.",
      rarity: "Uncommon",
      class: "Obstacles",
      locked: !achievementStates.bottomless
    }, {
      name: "Falling Anvil",
      img: imgs.boingIcon,
      description: "Heads up!",
      tutorial: "Meet Boing.",
      rarity: "Rare",
      class: "Obstacles",
      locked: !achievementStates.fallingAnvil
    }, {
      name: "Electrifying",
      img: imgs.electricGuyIcon,
      description: "What was that for?!?",
      tutorial: "Meet ZAPP.",
      rarity: "Rare",
      class: "Obstacles",
      locked: !achievementStates.electrifying
    }, {
      name: "Poisonous",
      img: imgs.greenStuffIcon,
      description: "It's worse than grass.",
      tutorial: "Touch Poison.",
      rarity: "Legendary",
      class: "Obstacles",
      locked: !achievementStates.poisonous,
      shown: !achievementStates.nonStop // Hidden until Non-Stop is unlocked
    }, {
      name: "Really Pointy",
      img: imgs.thornIcon,
      description: "That's no spike...",
      tutorial: "Meet Thorn.",
      rarity: "Legendary",
      class: "Obstacles",
      locked: !achievementStates.reallyPointy,
      shown: !achievementStates.nonStop // Hidden until Non-Stop is unlocked
    },
    // General Achievements
    {
      name: "Welcome",
      img: imgs.welcomeIcon,
      description: "Welcome to Dash Parkour!",
      tutorial: "Join for the first time.",
      rarity: "Common",
      class: "General",
      locked: false // Welcome is unlocked right away
    }, {
      name: "Back for More",
      img: imgs.welcomeBackIcon,
      description: "I have unfinished business.",
      tutorial: "Use a savecode to rejoin.",
      rarity: "Common",
      class: "General",
      locked: !achievementStates.backForMore
    }, {
      name: "One of Many",
      img: imgs.skull,
      description: "You're just getting started.",
      tutorial: "Encounter your first death.",
      rarity: "Uncommon",
      class: "General",
      locked: !achievementStates.oneOfMany
    }, {
      name: "Ten of Many",
      img: imgs.skulls,
      description: "You'll get used to it.",
      tutorial: "Encounter your tenth death.",
      rarity: "Rare",
      class: "General",
      locked: !achievementStates.tenOfMany
    }, {
      name: "Hundred of Many",
      img: imgs.tonsOfSkulls,
      description: "Used to it yet?",
      tutorial: "Encounter your hundredth death.",
      rarity: "Legendary",
      class: "General",
      locked: !achievementStates.hundredOfMany
    }, {
      name: "Pixel Perfect",
      img: imgs.pxlPerfectIcon,
      description: "Yeah, I turned on hitboxes.",
      tutorial: "Beat a boss without taking any damage.",
      rarity: "Legendary",
      class: "General",
      locked: !achievementStates.pixelPerfect
    }, {
      name: "So Long",
      img: imgs.dedBoingIcon,
      description: "How's the view from down there?",
      tutorial: "Send a boing into the void.",
      rarity: "Legendary",
      class: "General",
      locked: !achievementStates.soLong
    }];
  }
  var groupedAchievements = {};
  var maskCanvasCache = [];
  var badgeMap = [];
  var lastMaskBaseSize = null;
  var detailMaskSize = null;
  var rarityColorMap = {
    "Common": color(217, 217, 217),
    "Uncommon": color(21, 0, 255),
    "Rare": color(14, 182, 19),
    "Legendary": color(255, 0, 26),
    "Mythical": color(255, 0, 196),
    "Impossible": color(153, 0, 255),
    default: color(0, 0, 0)
  };
  function groupBadges() {
    groupedAchievements = {};
    badgeMap = {};
    for (var i = 0; i < achievements.length; i++) {
      var b = achievements[i];
      badgeMap[b.name] = b;
      b.rarityColor = rarityColorMap[b.rarity];
      if (!groupedAchievements[b.class]) {
        groupedAchievements[b.class] = [];
      }
      groupedAchievements[b.class].push(b);
    }
  }
  var unlockAchievement = function unlockAchievement(achievementName) {
    var keyMap = {
      "Starting Small": "startingSmall",
      "Green Means Go": "greenMeansGo",
      "Non-Stop": "nonStop",
      "Parkour Champion": "parkourChampion",
      "Lightwork": "lightwork",
      "Twenty-Two": "twentyTwo",
      "True Dedication": "trueDedication",
      "Parkour Master": "parkourMaster",
      "Hot Stuff": "hotStuff",
      "Pointy": "pointy",
      "Bottomless": "bottomless",
      "Falling Anvil": "fallingAnvil",
      "Electrifying": "electrifying",
      "Poisonous": "poisonous",
      "Really Pointy": "reallyPointy",
      "Back for More": "backForMore",
      "One of Many": "oneOfMany",
      "Ten of Many": "tenOfMany",
      "Hundred of Many": "hundredOfMany",
      "Pixel Perfect": "pixelPerfect",
      "So Long": "soLong"
    };
    var key = keyMap[achievementName];
    if (key && !achievementStates[key]) {
      achievementStates[key] = true;

      // Rebuild and update UI
      initAchievements();
      if (typeof groupBadges === "function") {
        groupBadges();
      }
      // println("🏆 Achievement Unlocked: " + achievementName + "!");
    }
  };
  var syncSkinAndAchievementStates = function syncSkinAndAchievementStates() {
    // Force dependent skins to unlock instantly if their progression flags are true
    if (area2Unlocked) {
      skins[5].owned = true;
      unlockAchievement("Starting Small");
    }
    if (area3Unlocked) {
      skins[10].owned = true;
      unlockAchievement("Green Means Go");
    }
    if (areaXUnlocked) {
      skins[15].owned = true;
      unlockAchievement("Non-Stop");
    }
    if (allAreasComplete) {
      skins[20].owned = true;
      unlockAchievement("Parkour Champion");
    }
    if (allRunsComplete) {
      skins[21].owned = true;
    }
  };
  function syncAchievementStates() {
    var keyMap = {
      "Starting Small": "startingSmall",
      "Green Means Go": "greenMeansGo",
      "Non-Stop": "nonStop",
      "Parkour Champion": "parkourChampion",
      "Lightwork": "lightwork",
      "Twenty-Two": "twentyTwo",
      "True Dedication": "trueDedication",
      "Parkour Master": "parkourMaster",
      "Hot Stuff": "hotStuff",
      "Pointy": "pointy",
      "Bottomless": "bottomless",
      "Falling Anvil": "fallingAnvil",
      "Electrifying": "electrifying",
      "Poisonous": "poisonous",
      "Really Pointy": "reallyPointy",
      "Back for More": "backForMore",
      "One of Many": "oneOfMany",
      "Ten of Many": "tenOfMany",
      "Hundred of Many": "hundredOfMany",
      "Pixel Perfect": "pixelPerfect",
      "So Long": "soLong"
    };
    var syncVisibility = function syncVisibility(b) {
      if (b.name === "Parkour Champion" || b.name === "Poisonous" || b.name === "Really Pointy") {
        b.shown = !achievementStates.nonStop;
      } else if (b.name === "Lightwork") {
        b.shown = !achievementStates.parkourChampion;
      } else if (b.name === "Twenty-Two") {
        b.shown = !achievementStates.lightwork;
      } else if (b.name === "True Dedication") {
        b.shown = !achievementStates.twentyTwo;
      } else if (b.name === "Parkour Master") {
        b.shown = !achievementStates.trueDedication;
      }
    };

    // Sync the primary array
    for (var i = 0; i < achievements.length; i++) {
      var b = achievements[i];
      var stateKey = keyMap[b.name];
      if (stateKey) {
        b.locked = b.name === "Welcome" ? false : !achievementStates[stateKey];
        syncVisibility(b);
      }
    }

    // Sync the badge map (Crucial! This updates the actual objects being rendered)
    for (var name in badgeMap) {
      if (badgeMap.hasOwnProperty(name)) {
        var b = badgeMap[name];
        var stateKey = keyMap[name];
        if (stateKey) {
          b.locked = name === "Welcome" ? false : !achievementStates[stateKey];
          syncVisibility(b);
        }
      }
    }
  }

  // Pack both achievement states and settings state directly
  var exportLiveGlobalsToObj = function exportLiveGlobalsToObj() {
    var data = {};

    // Unlocked achievements
    for (var key in achievementStates) {
      if (achievementStates.hasOwnProperty(key)) {
        data[key] = achievementStates[key];
      }
    }

    // Settings object properties
    for (var key in settings) {
      if (settings.hasOwnProperty(key)) {
        data[key] = settings[key];
      }
    }

    // Skins ownership state
    for (var i = 0; i < skins.length; i++) {
      data["skin_" + skins[i].id] = skins[i].owned;
    }
    data.lvlUnlock = lvlUnlock;
    data.currentSkin = currentSkin;
    data.vouchers = vouchers;
    data.deaths = deaths; // Bridge export
    data.area2Unlocked = area2Unlocked;
    data.area3Unlocked = area3Unlocked;
    data.areaXUnlocked = areaXUnlocked;
    data.allAreasComplete = allAreasComplete;
    data.allRunsComplete = allRunsComplete;
    data.speedruns = packTimes(levelTimes);
    return data;
  };
  var generateSaveString = function generateSaveString() {
    var dataToPack = exportLiveGlobalsToObj();
    return Save.save(dataToPack);
  };
  var applyLoadedDataToGlobals = function applyLoadedDataToGlobals(data) {
    if (data === null || data === undefined) {
      return;
    }

    // Unpack Achievements
    for (var key in achievementStates) {
      if (achievementStates.hasOwnProperty(key) && data.hasOwnProperty(key)) {
        achievementStates[key] = data[key];
      }
    }
    achievementStates.backForMore = true;

    // Unpack Settings
    for (var key in settings) {
      if (settings.hasOwnProperty(key) && data.hasOwnProperty(key)) {
        settings[key] = data[key];
      }
    }

    // Unpack Skins ownership
    for (var i = 0; i < skins.length; i++) {
      var skinKey = "skin_" + skins[i].id;
      if (data.hasOwnProperty(skinKey)) {
        skins[i].owned = data[skinKey];
      }
    }
    if (data.hasOwnProperty("lvlUnlock")) {
      lvlUnlock = data.lvlUnlock;
    }
    if (data.hasOwnProperty("currentSkin")) {
      currentSkin = data.currentSkin;
    }
    if (data.hasOwnProperty("vouchers")) {
      vouchers = data.vouchers;
    }
    if (data.hasOwnProperty("deaths")) {
      deaths = data.deaths;
    } // Bridge load
    if (data.hasOwnProperty("area2Unlocked")) {
      area2Unlocked = data.area2Unlocked;
    }
    if (data.hasOwnProperty("area3Unlocked")) {
      area3Unlocked = data.area3Unlocked;
    }
    if (data.hasOwnProperty("areaXUnlocked")) {
      areaXUnlocked = data.areaXUnlocked;
    }
    if (data.hasOwnProperty("allAreasComplete")) {
      allAreasComplete = data.allAreasComplete;
    }
    if (data.hasOwnProperty("allRunsComplete")) {
      allRunsComplete = data.allRunsComplete;
    }
    if (data.hasOwnProperty("speedruns")) {
      levelTimes = unpackTimes(data.speedruns);
    }
    syncSkinAndAchievementStates();
    initAchievements();
    groupBadges();
  };
  var loadSaveString = function loadSaveString(str) {
    var loaded = Save.load(str);
    if (loaded === null) {
      return false;
    }
    applyLoadedDataToGlobals(loaded);
    return true;
  };

  // ==========================================================
  // Clean Global Unlock Helper Function
  // ==========================================================
  // ==========================================================
  // Drawing & Masking UI Pipeline (With Sync Integrations)
  // ==========================================================
  var lock = function lock(x, y, s) {
    rectMode(CENTER);
    stroke(255);
    if (scene === "title" || scene === "Shop") {
      stroke(0);
    }
    noFill();
    strokeWeight(s / 10);
    rect(x, y + s / 6.5, s / 1.6, s / 1.8, s / 6);
    line(x - s / 5, y - s / 8, x - s / 5, y - s / 3);
    line(x + s / 5, y - s / 8, x + s / 5, y - s / 3);
    line(x, y + s / 8, x, y + s / 4.5);
    arc(x, y - s / 3, s / 2.5, s / 2.5, 180, 360);
    noStroke();
    fill(255, 255, 255);
    if (scene === "title" || scene === "Shop") {
      fill(0);
    }
    ellipse(x, y + s / 8.5, s / 6, s / 6);
    rectMode(CORNER);
  };
  function getMaskCanvas(imgSize) {
    var key = Math.round(imgSize);
    if (!maskCanvasCache[key]) {
      maskCanvasCache[key] = createGraphics(imgSize, imgSize, P2D);
    }
    return maskCanvasCache[key];
  }
  function createMaskedImageFromBadge(badge, imgSize) {
    var pg = getMaskCanvas(imgSize);
    pg.smooth();
    pg.beginDraw();
    pg.background(0, 0, 0, 0);
    pg.noStroke();
    pg.fill(255);
    pg.ellipse(imgSize / 2, imgSize / 2, imgSize, imgSize);
    pg.externals.context.globalCompositeOperation = 'source-in';
    pg.image(badge.img, 0, 0, imgSize, imgSize);
    pg.externals.context.globalCompositeOperation = 'source-over';
    pg.endDraw();
    var out = pg.get(0, 0, imgSize, imgSize);
    return out;
  }
  function ensureBadgeMasked(badge, baseSize) {
    if (!badge.img) {
      return;
    }
    var key = Math.round(baseSize);
    badge._maskedCache = badge._maskedCache || {};
    if (!badge._maskedCache[key]) {
      badge._maskedCache[key] = createMaskedImageFromBadge(badge, baseSize);
    }
    badge.maskedImg = badge._maskedCache[key];
  }
  function ensureBadgeDetailMask(badge, detailSize) {
    if (!badge.img || badge.locked) {
      return;
    }
    badge._maskedCache = badge._maskedCache || {};
    var key = "detail_" + Math.round(detailSize);
    if (!badge._maskedCache[key]) {
      badge._maskedCache[key] = createMaskedImageFromBadge(badge, detailSize);
    }
    badge.maskedImgDetail = badge._maskedCache[key];
  }
  function preMaskAllBadgesForSize(s) {
    var baseSize = Math.round(s * 2);
    var highResSize = Math.round(s * 3);
    lastMaskBaseSize = baseSize;
    detailMaskSize = highResSize;
    for (var i = 0; i < achievements.length; i++) {
      var b = achievements[i];
      if (!b.img) {
        continue;
      }
      ensureBadgeMasked(b, baseSize);
    }
  }
  function drawBadgesAndClasses(classNames, startX, initialY, s, maxWidth) {
    // --------------------------------------------------------
    // REACTIVE SYNC: Pulls live values into the visual objects 
    // immediately prior to rendering (solves async loading lag)
    // --------------------------------------------------------
    syncAchievementStates();
    var wantedBaseSize = Math.round(s * 4);
    if (lastMaskBaseSize !== wantedBaseSize) {
      preMaskAllBadgesForSize(s);
    }
    var currentY = initialY;
    imageMode(CENTER);
    arcAlign(LEFT);
    arcSize(s / 6.5);
    var hoverRadiusSq = s * 0.5 * (s * 0.5);
    for (var c = 0; c < classNames.length; c++) {
      var className = classNames[c];
      var list = groupedAchievements[className] || [];
      var currentX = startX;
      stroke(255);
      arcText(className, startX - s / 2.3, currentY - s / 1.4);
      for (var i = 0, len = list.length; i < len; i++) {
        var badge = list[i];
        if (badge.shown === true) {
          continue;
        }
        if (badge.animScale === undefined) {
          badge.animScale = 1.0;
        }
        var dx = worldMouseX - currentX;
        var dy = worldMouseY - currentY;
        var hoverSq = dx * dx + dy * dy;
        var isHovered = hoverSq < hoverRadiusSq;
        badge.animScale = lerp(badge.animScale, isHovered ? 1.2 : 1.0, 0.15);
        var dS = s * badge.animScale;
        if (badge.img && !badge.maskedImg) {
          ensureBadgeMasked(badge, Math.round(s * 4));
        }
        if (badge.maskedImg) {
          image(badge.maskedImg, currentX, currentY, dS / 1.1, dS / 1.1);
        }
        stroke(badge.rarityColor);
        strokeWeight(s / 20);
        noFill();
        ellipse(currentX, currentY, dS / 1.1, dS / 1.1);
        if (badge.locked) {
          noStroke();
          fill(0, 0, 0, 180);
          ellipse(currentX, currentY, dS / 1.1, dS / 1.1);
          lock(currentX, currentY, dS / 1.5);
        }
        if (isHovered && mouseIsPressed) {
          if (selectedBadge !== badge.name) {
            selectedBadge = badge.name;
            ensureBadgeDetailMask(badge, Math.round(s * 10));
          } else {
            selectedBadge = badge.name;
          }
        }
        if (currentX + s + badgeSpacing > maxWidth) {
          currentX = startX;
          currentY += s * 1.2;
        } else {
          currentX += s * 1.1;
        }
      }
      currentY += s * 1.5;
    }
  }
  function getBadgeDetails(badgeName) {
    return badgeMap[badgeName] || null;
  }
  function drawBadgeDetails(x, y, s) {
    // --------------------------------------------------------
    // REACTIVE SYNC: Syncs selected details state dynamically
    // --------------------------------------------------------
    syncAchievementStates();
    if (!selectedBadge) {
      return;
    }
    var badge = getBadgeDetails(selectedBadge);
    if (!badge) {
      return;
    }
    var rColor = badge.rarityColor;
    stroke(rColor);
    arcAlign(LEFT);
    arcSize(s);
    if (!badge.locked) {
      arcText(badge.name, x + s * 3, y - s / 2);
      imageMode(CENTER);
      var imgToDraw = badge.maskedImgDetail || badge.maskedImg;
      if (imgToDraw) {
        image(imgToDraw, x - s / 2, y + s, s * 5.7, s * 5.7);
      }
    } else {
      arcText("???", x + s * 3, y);
      textSize(s * 4);
      textAlign(CENTER, CENTER);
      stroke(rColor);
      text("❔", x - s / 4, y + s);
    }
    stroke(rColor);
    strokeWeight(s / 1.5);
    line(x - s * PI, y + s * 3.7, x + s * 2, y + s * 3.7);
    arcSize(s / 2);
    arcAlign(LEFT);
    stroke(128, 128, 128);
    if (!badge.locked) {
      arcText(badge.description, x + s * 3, y + s * 1.5);
    } else {
      arcText("???", x + s * 3, y + s * 1.5);
    }
    stroke(186, 186, 186);
    arcText(badge.tutorial, x + s * 3, y + s * 3, 350);
  }

  // ==========================================================
  // Initial Boot Processes & Engine Integration
  // ==========================================================
  initAchievements();
  groupBadges();
  var runSaveSystemCheck = function runSaveSystemCheck() {
    println("\n==================================================");
    println("      SAVE ENGINE VERIFICATION & VALIDATION       ");
    println("==================================================");

    // Check default blueprint configuration from SAVE_TEMPLATE
    println("\n--- [1] SAVE TEMPLATE BLUEPRINT ---");
    if (typeof SAVE_TEMPLATE === "undefined") {
      println("  ❌ ERROR: SAVE_TEMPLATE is not defined!");
    } else {
      var templateKeys = 0;
      for (var key in SAVE_TEMPLATE) {
        if (SAVE_TEMPLATE.hasOwnProperty(key)) {
          println("  • " + key + " (Default: " + SAVE_TEMPLATE[key] + ")");
          templateKeys++;
        }
      }
      println("  Total Registered Fields: " + templateKeys);
    }

    // Check current live globals
    println("\n--- [2] CURRENT LIVE GLOBALS ---");
    var liveData = exportLiveGlobalsToObj();
    for (var key in liveData) {
      if (liveData.hasOwnProperty(key) && key !== "speedruns") {
        println("  • " + key + ": " + liveData[key]);
      }
    }

    // Speedrun compression inspection
    println("\n--- [3] SPEEDRUN TIMES PACKING ---");
    println("  • Raw levelTimes array state:");
    for (var i = 1; i <= MAX_LEVELS; i++) {
      var frames = levelTimes[i] || 0;
      if (frames > 0) {
        var secs = (frames / 60).toFixed(2);
        println("    - Level " + i + ": " + frames + " frames (~" + secs + "s)");
      }
    }
    var packed = packTimes(levelTimes);
    println("  • Packed Base-36 String: \"" + packed + "\"");

    // Compiled Save Code Check
    println("\n--- [4] COMPILED SAVE CODE ---");
    var rawCode = generateSaveString();
    println("  • Save String: " + rawCode);
    println("  • Character Count: " + rawCode.length + " characters");

    // Validation Check using Save.load()
    println("\n--- [5] VALIDATION CHECK (DECODING & UNPACKING) ---");
    try {
      // Direct call to your engine's actual load function!
      var parsedData = Save.load(rawCode);
      if (parsedData === null || parsedData === undefined) {
        throw new Error("Save.load(rawCode) returned null!");
      }
      println("  ✅ Parse Success: Decoded back into JSON object.");
      var mismatches = 0;
      // Verify every key matches what we exported
      for (var key in liveData) {
        if (liveData.hasOwnProperty(key)) {
          if (liveData[key] !== parsedData[key]) {
            println("  ⚠️ MISMATCH: Key '" + key + "' | Live: " + liveData[key] + " vs Decoded: " + parsedData[key]);
            mismatches++;
          }
        }
      }

      // Test the speedrun unpacking specifically
      var unpackedTimes = unpackTimes(parsedData.speedruns);
      for (var i = 1; i <= MAX_LEVELS; i++) {
        var original = levelTimes[i] || 0;
        var unpacked = unpackedTimes[i] || 0;
        if (original !== unpacked) {
          println("  ⚠️ TIME MISMATCH: Level " + i + " | Live: " + original + " frames vs Unpacked: " + unpacked + " frames");
          mismatches++;
        }
      }
      if (mismatches === 0) {
        println("  ✅ VALIDATION PASSED: 100% data integrity verified. No typos or corruptions!");
      } else {
        println("  ❌ VALIDATION FAILED: Found " + mismatches + " differences during simulation.");
      }
    } catch (e) {
      println("  ❌ CRITICAL LOAD FAILURE: Save system threw an error while reading its own code: " + (e.message || e));
    }
    println("==================================================\n");
  };

  // ]

  // Level Select page [

  // Random platform data
  var mapPlatforms = [];

  // Generate platforms
  if (mapPlatforms.length === 0) {
    var attempts = 0;
    while (mapPlatforms.length < 20 && attempts < 1000) {
      var newPlat = {
        x: random(-40, 560),
        y: random(0, 570),
        w: random(40, 120),
        h: random(12, 26),
        type: floor(random(0, 3))
      };
      var overlapping = false;

      // Check against existing platforms
      for (var j = 0; j < mapPlatforms.length; j++) {
        var p = mapPlatforms[j];

        // Padding between platforms
        var spacing = 20;
        if (newPlat.x < p.x + p.w + spacing && newPlat.x + newPlat.w > p.x - spacing && newPlat.y < p.y + p.h + spacing && newPlat.y + newPlat.h > p.y - spacing) {
          overlapping = true;
          break;
        }
      }

      // Only add if no overlap
      if (!overlapping) {
        mapPlatforms.push(newPlat);
      }
      attempts++;
    }
  }

  //]

  // COLLISION PROGRAM [

  var world = 1;

  // Cool health box
  var visualHealth = 100;
  var drawHealthBox = function drawHealthBox(x, y, vh, h) {
    if (h === 0) {
      vh = 0;
    }
    noStroke();
    fill(0, 0, 0, 50);
    if (world === 4) {
      fill(255, 255, 255, 80);
    }
    rect(x + 4, y + 4, 154, 44, 10); // shadow
    arcAlign(RIGHT);
    arcSize(12);
    stroke(0, 0, 0, 50);
    if (world === 4) {
      stroke(255, 255, 255, 80);
    }
    arcText(round(h) + '%', x - 1, y + 25);
    arcSize(11.5);
    arcText('HEALTH', x + 159, y + 69);
    noStroke();
    for (var q = 0; q < 150; q++) {
      stroke(q + 105, 0, 0);
      line(x + q, y + 1, x + q, y + 38.5);
    }
    for (var i = 0; i < 150 - (150 - vh * 1.5); i++) {
      stroke(0, i + 125, i - 20);
      line(x + i, y + 2, x + i, y + 38);
    }
    noFill();
    stroke(0, 0, 0);
    strokeWeight(3.5);
    rect(x - 2.5, y - 2.5, 154, 44, 10);
    stroke(200 - vh * 2, vh, 0);
    if (world === 4) {
      stroke(255, vh * 2.5, vh * 2.5);
    }
    arcText(round(h) + '%', x - 5, y + 21);
    stroke(255, 255, 255, 100);
    //stroke(255, 0, 0);
    strokeWeight(4);
    arc(x + 11, y + 11, 10, 10, 180, 270);
    stroke(0);
    if (world === 4) {
      stroke(255);
    }
    arcSize(11.5);
    arcText('HEALTH', x + 155, y + 65);
  };
  var drawLeftHUD = function drawLeftHUD(x, y, l, w, lives) {
    // Variables for the screen
    var txtCol;

    // LEVEL INDICATOR

    if (w === 1) {
      txtCol = color(0, 0, 255);
    } // determine the area's color
    else if (w === 2) {
      txtCol = color(30, 130, 30);
    } else if (w === 3) {
      txtCol = color(255, 50, 0);
    } else if (w === 4) {
      txtCol = color(255, 0, 0);
    }
    var level = l - (w - 1) * 4;
    stroke(0, 0, 0, 50); // shadow
    if (world === 4) {
      stroke(255, 255, 255, 80);
    }
    arcSize(12);
    arcAlign(LEFT);
    if (w === 4) {
      arcText('LEVEL X-' + level, x + 4, y + 4);
    } else {
      arcText('LEVEL ' + w + '-' + level, x + 4, y + 4);
    }
    stroke(0); // regular text
    if (world === 4) {
      stroke(255);
    }
    arcText('LEVEL ', x, y);
    stroke(txtCol);
    if (w === 4) {
      arcText('X-' + level, x + 100, y);
    } else {
      arcText(w + '-' + level, x + 100, y);
    }

    // LIVES INDICATOR

    noStroke();
    pushMatrix();
    // rotate and move the icon
    translate(x + 7, y + 19);
    rotate(10);
    fill(0, 0, 0, 50); // player rect shadow
    rect(4, 4, 33, 33, 7);
    fill(255, 0, 0); // player rect
    rect(0, 0, 33, 33, 7);
    stroke(255, 255, 255, 100); // shine
    noFill();
    arc(10, 10, 10, 10, 200, 250);
    popMatrix();
    stroke(0, 0, 0, 50); // lives text shadow
    if (world === 4) {
      stroke(255, 255, 255, 80);
    }
    arcSize(15);
    arcText('x ' + lives, x + 57, y + 46);

    // lives tex
    if (lives > 3) {
      stroke(0);
      if (world === 4) {
        stroke(255);
      }
    } else if (lives > 2) {
      stroke(100, 0, 0);
      if (world === 4) {
        stroke(100, 255, 255);
      }
    } else if (lives > 1) {
      stroke(165, 0, 0);
      if (world === 4) {
        stroke(165, 255, 255);
      }
    } else {
      stroke(210, 0, 0);
    }
    arcText('x ' + lives, x + 53, y + 42);
    arcSize(10);
    stroke(200, 0, 0);
    arcText('Q key for menu', x, y + 80);
  };

  // Cam be put in settings
  var showHitboxes = false;

  // OBB helpers
  var rotatePoint = function rotatePoint(px, py, cx, cy, angle) {
    var s = sin(angle),
      c = cos(angle);
    var x = px - cx,
      y = py - cy;
    return {
      x: x * c - y * s + cx,
      y: x * s + y * c + cy
    };
  };

  // This reminds me of 3d
  var getVertices = function getVertices(obj) {
    var hw = obj.w / 2,
      hh = obj.h / 2;
    var r = obj.r || 0;
    // Preserve rotatePoint's arithmetic order, while computing its shared
    // trigonometry once rather than four times per rectangle.
    var s = sin(r),
      c = cos(r);
    var left = obj.x - hw - obj.x,
      right = obj.x + hw - obj.x;
    var top = obj.y - hh - obj.y,
      bottom = obj.y + hh - obj.y;
    return [{
      x: left * c - top * s + obj.x,
      y: left * s + top * c + obj.y
    }, {
      x: right * c - top * s + obj.x,
      y: right * s + top * c + obj.y
    }, {
      x: right * c - bottom * s + obj.x,
      y: right * s + bottom * c + obj.y
    }, {
      x: left * c - bottom * s + obj.x,
      y: left * s + bottom * c + obj.y
    }];
  };
  // PVector transformations don't work which is why all that garbage was done manually.

  // Returns the overlap info
  var checkOBBOverlap = function checkOBBOverlap(a, b) {
    // Common case: square player versus an unrotated platform/hazard. Use
    // exactly the same rounded coordinates as getVertices, so touching edges
    // retain the original SAT behavior. Degenerate/rotated boxes fall through.
    if (!a.r && !b.r && a.w > 0 && a.h > 0 && b.w > 0 && b.h > 0) {
      var al = a.x - a.w / 2 - a.x + a.x;
      var ar = a.x + a.w / 2 - a.x + a.x;
      var at = a.y - a.h / 2 - a.y + a.y;
      var ab = a.y + a.h / 2 - a.y + a.y;
      var bl = b.x - b.w / 2 - b.x + b.x;
      var br = b.x + b.w / 2 - b.x + b.x;
      var bt = b.y - b.h / 2 - b.y + b.y;
      var bb = b.y + b.h / 2 - b.y + b.y;
      if (isFinite(al) && isFinite(ar) && isFinite(at) && isFinite(ab) && isFinite(bl) && isFinite(br) && isFinite(bt) && isFinite(bb) && al < ar && at < ab && bl < br && bt < bb && (ar < bl || br < al || ab < bt || bb < at)) {
        return null;
      }
    }
    // Broad-phase: compare center distance against sum of half-diagonals
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    var distSq = dx * dx + dy * dy;
    var ra = sqrt(a.w * a.w + a.h * a.h) / 2;
    var rb = sqrt(b.w * b.w + b.h * b.h) / 2;
    var rsum = ra + rb;
    if (distSq > rsum * rsum) {
      return null;
    } // definitely not touching

    // Now run full SAT
    var v1 = getVertices(a),
      v2 = getVertices(b);
    var axes = [{
      x: v1[1].x - v1[0].x,
      y: v1[1].y - v1[0].y
    }, {
      x: v1[1].x - v1[2].x,
      y: v1[1].y - v1[2].y
    }, {
      x: v2[1].x - v2[0].x,
      y: v2[1].y - v2[0].y
    }, {
      x: v2[1].x - v2[2].x,
      y: v2[1].y - v2[2].y
    }];
    var overlap = Infinity;
    var smallestAxis = null;
    for (var i = 0; i < 4; i++) {
      var axis = axes[i];
      var mag = sqrt(axis.x * axis.x + axis.y * axis.y);
      axis.x /= mag;
      axis.y /= mag;
      var min1 = Infinity,
        max1 = -Infinity,
        min2 = Infinity,
        max2 = -Infinity;
      for (var j = 0; j < 4; j++) {
        var dot1 = v1[j].x * axis.x + v1[j].y * axis.y;
        min1 = min(min1, dot1);
        max1 = max(max1, dot1);
        var dot2 = v2[j].x * axis.x + v2[j].y * axis.y;
        min2 = min(min2, dot2);
        max2 = max(max2, dot2);
      }
      // Standard SAT check
      if (max1 < min2 || max2 < min1) {
        return null;
      }

      // Calculate how much we overlap on this axis
      var o = min(max1, max2) - max(min1, min2);
      if (o < overlap) {
        overlap = o;
        smallestAxis = axis;
      }
    }

    // Ensure the axis points from B to A (so we push the player away)
    var d = {
      x: a.x - b.x,
      y: a.y - b.y
    };
    if (d.x * smallestAxis.x + d.y * smallestAxis.y < 0) {
      smallestAxis.x *= -1;
      smallestAxis.y *= -1;
    }
    return {
      x: smallestAxis.x * overlap,
      y: smallestAxis.y * overlap
    };
  };
  var checkCollision = function checkCollision(a, b) {
    if (!a || !b) {
      return null;
    }
    if (a.x === undefined || b.x === undefined) {
      return null;
    }
    if (a.w === undefined || b.w === undefined) {
      return null;
    }
    if (a.h === undefined || b.h === undefined) {
      return null;
    }
    return checkOBBOverlap(a, b);
  };

  // Projects polygon 'poly' onto axis and returns {min, max}
  var projectPoly = function projectPoly(poly, axis) {
    var min = Infinity,
      max = -Infinity;
    for (var i = 0; i < poly.length; i++) {
      var d = poly[i].x * axis.x + poly[i].y * axis.y;
      if (d < min) {
        min = d;
      }
      if (d > max) {
        max = d;
      }
    }
    return {
      min: min,
      max: max
    };
  };

  // Returns true if convex polygons a and b overlap (SAT)
  var polygonOverlap = function polygonOverlap(a, b) {
    // For both polygons, iterate each edge and test axis perpendicular to edge.
    var testAxes = function testAxes(poly, outAxes) {
      for (var i = 0; i < poly.length; i++) {
        var j = (i + 1) % poly.length;
        var edge = {
          x: poly[j].x - poly[i].x,
          y: poly[j].y - poly[i].y
        };
        var axis = {
          x: -edge.y,
          y: edge.x
        }; // perpendicular
        var mag = sqrt(axis.x * axis.x + axis.y * axis.y);
        if (mag === 0) {
          continue;
        }
        axis.x /= mag;
        axis.y /= mag;
        outAxes.push(axis);
      }
    };
    var axes = [];
    testAxes(a, axes);
    testAxes(b, axes);
    for (var k = 0; k < axes.length; k++) {
      var axis = axes[k];
      var p1 = projectPoly(a, axis);
      var p2 = projectPoly(b, axis);
      // separation?
      if (p1.max < p2.min || p2.max < p1.min) {
        return false; // found a separating axis
      }
    }
    return true; // no seperation, overlap
  };

  // point-in-triangle (barycentric)
  var pointInTriangle = function pointInTriangle(px, py, ax, ay, bx, by, cx, cy) {
    // Translate to vectors
    var v0x = cx - ax,
      v0y = cy - ay;
    var v1x = bx - ax,
      v1y = by - ay;
    var v2x = px - ax,
      v2y = py - ay;
    var dot00 = v0x * v0x + v0y * v0y;
    var dot01 = v0x * v1x + v0y * v1y;
    var dot02 = v0x * v2x + v0y * v2y;
    var dot11 = v1x * v1x + v1y * v1y;
    var dot12 = v1x * v2x + v1y * v2y;
    var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
    var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
    return u >= 0 && v >= 0 && u + v < 1;
  };
  var checkSpikeHit = function checkSpikeHit(player, o) {
    var playerVerts = getVertices(player); // array of 4 {x,y}
    var amount = o.amount || max(1, floor(o.w / 20));
    var spikeW = o.w / amount;
    // Build each triangle in world coords and test polygon overlap
    for (var i = 0; i < amount; i++) {
      var baseLeftLocalX = -o.w / 2 + i * spikeW;
      var baseRightLocalX = baseLeftLocalX + spikeW;
      var baseYLocal = o.h / 2; // base at +h/2
      var apexYLocal = -o.h / 2; // apex at -h/2
      var apexLocalX = baseLeftLocalX + spikeW * 0.5;
      var A = rotatePoint(o.x + baseLeftLocalX, o.y + baseYLocal, o.x, o.y, o.r);
      var B = rotatePoint(o.x + baseRightLocalX, o.y + baseYLocal, o.x, o.y, o.r);
      var C = rotatePoint(o.x + apexLocalX, o.y + apexYLocal, o.x, o.y, o.r);
      var tri = [{
        x: A.x,
        y: A.y
      }, {
        x: B.x,
        y: B.y
      }, {
        x: C.x,
        y: C.y
      }];
      if (polygonOverlap(playerVerts, tri)) {
        return true;
      }
    }
    return false;
  };
  var checkThornHit = function checkThornHit(player, thorn) {
    var scaleFactor = (thorn.size || 50) / 50;
    var halfBase = 20 * scaleFactor;
    var triHeight = 20 * scaleFactor;

    // Local vertices centered on thorn origin
    var localVerts = [{
      x: 0,
      y: triHeight
    }, {
      x: halfBase * 2,
      y: triHeight
    }, {
      x: halfBase,
      y: 0
    }];
    var triVerts = [];
    for (var j = 0; j < localVerts.length; j++) {
      var vx = localVerts[j].x;
      var vy = localVerts[j].y;
      var rx = vx * cos(thorn.r) - vy * sin(thorn.r);
      var ry = vx * sin(thorn.r) + vy * cos(thorn.r);
      triVerts.push({
        x: thorn.x + rx,
        y: thorn.y + ry
      });
    }

    // Optional: Draw hitboxes globally if toggled
    if (typeof showHitboxes !== "undefined" && showHitboxes) {
      strokeWeight(2);
      noFill();
      stroke(255, 0, 0);
      triangle(triVerts[0].x, triVerts[0].y, triVerts[1].x, triVerts[1].y, triVerts[2].x, triVerts[2].y);
    }
    var playerVerts = getVertices(player);
    return polygonOverlap(playerVerts, triVerts);
  };
  var drawThornSprite = function drawThornSprite(thorn) {
    if (!thorn.h) {
      thorn.h = 20;
    }
    if (!thorn.w) {
      thorn.w = 20;
    }
    pushMatrix();
    translate(thorn.x, thorn.y);
    rotate(thorn.r);
    noStroke();
    fill(70);
    triangle(thorn.w - 20, thorn.h, thorn.w + 20, thorn.h, thorn.w, thorn.h - 20);
    strokeWeight(4);
    stroke(255, 255, 255, 50);
    line(thorn.w + 2, thorn.h - 13, thorn.w + 5, thorn.h - 10);
    popMatrix();
  };

  // Collision with diamond (guards + parkour master)
  var getDiamondVertices = function getDiamondVertices(obj) {
    return [{
      x: obj.x,
      y: obj.y - obj.h / 2
    },
    // top
    {
      x: obj.x + obj.w / 2,
      y: obj.y
    },
    // right
    {
      x: obj.x,
      y: obj.y + obj.h / 2
    },
    // bottom
    {
      x: obj.x - obj.w / 2,
      y: obj.y
    } // left
    ];
  };
  var checkDiamondHit = function checkDiamondHit(player, diamond) {
    var playerVerts = getVertices(player);
    var diamondVerts = getDiamondVertices(diamond);
    return polygonOverlap(playerVerts, diamondVerts);
  };
  var drawDiamondHitbox = function drawDiamondHitbox(hitbox) {
    var verts = getDiamondVertices(hitbox);
    stroke(255, 0, 0);
    strokeWeight(2);
    noFill();
    quad(verts[0].x, verts[0].y,
    // top
    verts[1].x, verts[1].y,
    // right
    verts[2].x, verts[2].y,
    // bottom
    verts[3].x, verts[3].y // left
    );
  };

  // OBBs
  var drawHitbox = function drawHitbox(obj) {
    var v = getVertices(obj); // Get the 4 corners calculated for SAT

    fill(255, 0, 0, 100);
    stroke(0, 255, 0);
    strokeWeight(2);
    quad(v[0].x, v[0].y, v[1].x, v[1].y, v[2].x, v[2].y, v[3].x, v[3].y);
  };

  // Keys
  var keys = [];
  var isPressed = function isPressed(k) {
    return keys[k];
  }; // no need to memorize keycodes

  var shuffleArray = function shuffleArray(arr) {
    // Make copy so original array isn't destroyed
    var a = arr.slice(0);
    for (var i = a.length - 1; i > 0; i--) {
      var j = floor(random(i + 1));
      var temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    return a;
  };

  // Boss with dynamic animations
  var bossOpacity = 255;
  var bossXShift = 0;
  var drawGuard = function drawGuard(x, y, s, variant, boss) {
    var bodyCol = color(variant.col, bossOpacity);
    if (boss.state === "vulnerable") {
      bossOpacity = lerp(bossOpacity, 100, 0.1);
    } else {
      bossOpacity = lerp(bossOpacity, 255, 0.1);
    }

    // Main Body
    fill(bodyCol);
    stroke(0);
    strokeWeight(s / 60);
    beginShape();
    vertex(x, y - s / 2);
    vertex(x - s / 2, y);
    vertex(x, y + s / 2);
    vertex(x + s / 2, y);
    vertex(x, y - s / 2);
    endShape();
    if (boss.state === "vulnerable") {
      vulnerableEyes(x - s / 6, y - s / 10, s / 4.2, frameCount * 4);
      vulnerableEyes(x + s / 6, y - s / 10, s / 4.2, -frameCount * 4);
    } else {
      // Left Eye
      fill(0);
      stroke(0, 0, 0);
      beginShape();
      pushMatrix();
      translate(-bossXShift / 30 * bossDir + boss.vx, 0);
      vertex(x - s / 3.9, y - s / 4.6);
      bezierVertex(x - s / 3.4, y + s / 9, x - s / 10, y, x - s / 15, y - s / 15);
      bezierVertex(x - s / 20, y - s / 13, x - s / 20, y - s / 8, x - s / 12, y - s / 7.2);
      vertex(x - s / 3.9, y - s / 4.6);
      endShape();
      fill(255);
      ellipse(x - s / 9, y - s / 9 + handAnimationY / 5, s / 20, s / 15);

      // Right Eye
      fill(0);
      stroke(0, 0, 0);
      beginShape();
      vertex(x + s / 3.9, y - s / 4.6);
      bezierVertex(x + s / 3.4, y + s / 9, x + s / 10, y, x + s / 15, y - s / 15);
      bezierVertex(x + s / 20, y - s / 13, x + s / 20, y - s / 8, x + s / 12, y - s / 7.2);
      vertex(x + s / 3.9, y - s / 4.6);
      endShape();
      fill(255);
      ellipse(x + s / 9, y - s / 9 + handAnimationY / 5, s / 20, s / 15);
      popMatrix();
    }

    // Mouth
    stroke(0, 0, 0);
    noFill();
    strokeWeight(s / 45);
    pushMatrix();
    translate(bossXShift / 20 * -bossDir + boss.vx, 0);
    beginShape();
    vertex(x - s / 6.6, y + s / 5 + handAnimationY / 3);
    bezierVertex(x - s / 10, y + s / 8 + handAnimationY / 3, x + s / 10, y + s / 8 + handAnimationY / 3, x + s / 6.6, y + s / 5 + handAnimationY / 3);
    endShape();
    popMatrix();

    // Shade
    stroke(255, 255, 255, 100);
    line(x + s / 3, y + s / 8.2, x + s / 4.5, y + s / 4.5);
    line(x + s / 2.7, y + s / 12, x + s / 2.5, y + s / 20);

    // Hands
    fill(bodyCol);
    strokeWeight(s / 60);
    stroke(0);
    ellipse(x - s / 1.5 - handAnimationY / 3 + bossXShift / 20 * -bossDir + boss.vx, y + s / 5 + handAnimationY + bossXShift / 10 * -bossDir, s / 5, s / 5);
    ellipse(x + s / 1.5 - handAnimationY / 3 - bossXShift / 20 * bossDir + boss.vx, y + s / 5 + handAnimationY + bossXShift / 10 * bossDir, s / 5, s / 5);
  };
  var guardVariant = [{
    col: color(0, 150, 255)
  },
  // Area 1
  {
    col: color(0, 160, 0)
  },
  // Area 2
  {
    col: color(255, 50, 0)
  },
  // Area 3
  {
    col: color(255, 130, 255)
  },
  // Area 3
  {
    col: color(220, 190, 220)
  } // Area 3
  ];
  var targetArenaY = 1000;
  var diveTargetX = 0;
  var diveSpeedX = 0;
  var bossBombs = [];
  var drawBossBomb = function drawBossBomb(x, y, s) {
    fill(30);
    noStroke();
    ellipse(x, y, s, s);
    rect(x - s / 6, y - s / 1.5, s / 3, s / 3, s / 20);
    pushMatrix();
    translate(x, y);
    rotate(45);
    fill(253, 147, 255);
    rect(-s / 5, -s / 5, s / 2.5, s / 2.5);
    popMatrix();
    noFill();
    strokeWeight(s / 20);
    stroke(255, 255, 255, 80);
    arc(x, y, s * 0.8, s * 0.8, 300, 330);
    stroke(183, 0, 215);
    line(x - s / 4, y, x, y + s / 4);
  };

  // Image load bomb [

  background(255, 255, 255, 0);
  drawBossBomb(75, 75, 111.25);
  var bossBomb = get(0, 0, 150, 150);

  //]

  var bossBullets = [];
  var drawBossBullet = function drawBossBullet(x, y, s, dir) {
    fill(0, 230, 120);
    noStroke();
    if (dir === "right") {
      rect(x, y - s / 4, s / 2, s / 2, s / 10);
      triangle(x - s / 5, y - s / 4, x + s / 3, y + s / 6, x + s / 4, y - s / 4);
      triangle(x - s / 5, y + s / 4, x + s / 3, y - s / 6, x + s / 4, y + s / 4);
      triangle(x - s / 1.2, y, x + s / 3, y - s / 6, x + s / 4, y + s / 6);
    }
    if (dir === "left") {
      rect(x - s / 2, y - s / 4, s / 2, s / 2, s / 10);
      triangle(x + s / 5, y - s / 4, x - s / 3, y + s / 6, x - s / 4, y - s / 4);
      triangle(x + s / 5, y + s / 4, x - s / 3, y - s / 6, x - s / 4, y + s / 4);
      triangle(x + s / 1.2, y, x - s / 3, y - s / 6, x - s / 4, y + s / 6);
    }
    strokeWeight(s / 20);
    stroke(255, 255, 255, 200);
    if (dir === "right") {
      line(x + s / 2.3, y - s / 6, x + s / 2.3, y - s / 9);
      strokeWeight(s / 25);
      stroke(0, 200, 150, 255);
      line(x - s / 6, y + s / 4.3, x + s / 10, y + s / 4.3);
      line(x - s / 6, y + s / 4.3, x, y + s / 8);
      line(x, y + s / 8, x - s / 3, y + s / 20);
    }
    if (dir === "left") {
      line(x - s / 2.3, y - s / 6, x - s / 2.3, y - s / 9);
      strokeWeight(s / 25);
      stroke(0, 200, 150, 255);
      line(x + s / 6, y + s / 4.3, x - s / 10, y + s / 4.3);
      line(x + s / 6, y + s / 4.3, x, y + s / 8);
      line(x, y + s / 8, x + s / 3, y + s / 20);
    }
  };
  var bulletCircleSize = 0;
  var drawBulletCircle = function drawBulletCircle(x, y, s) {
    var numCircles = 7;
    var spacing = s / numCircles;
    for (var c = 0; c < numCircles; c++) {
      var alpha = 255 * (0 + c / numCircles);
      stroke(0, 200, 0, alpha);
      noFill();
      strokeWeight(spacing / 2);
      var size = s - c * spacing;
      ellipse(x, y, size, size);
    }
  };

  // Image load l & r bullet [

  background(0, 0, 0, 0);
  drawBossBullet(75, 22.5, 87.5, "right");
  var bossBulletRight = get(0, 0, 150, 150);
  background(0, 0, 0, 0);
  drawBossBullet(75, 22.5, 87.5, "left");
  var bossBulletLeft = get(0, 0, 150, 150);

  //]

  var bossIcicles = [];
  var drawBossIcicle = function drawBossIcicle(x, y, s) {
    stroke(0, 200, 255);
    strokeWeight(s / 6);
    strokeWeight(s / 20);
    fill(0, 200, 255);
    pushMatrix();
    translate(x, y);
    rotate(90);
    beginShape();
    vertex(-s / 2, +s / 6); // top of middle section
    vertex(-s / 6, -s / 4);
    vertex(+s / 40, -s / 30);
    vertex(+s / 5, -s / 5);
    vertex(+s / 2, -s / 20);
    vertex(+s / 4, -s / 2.7); // upper-right branch
    vertex(+s / 20, -s / 3);
    vertex(+s / 4, -s / 2);
    vertex(+s / 2, -s / 20);
    vertex(+s / 3, +s / 4);
    vertex(+s / 7, +s / 3);
    vertex(+s / 3, +s / 2.5);
    vertex(+s / 2, -s / 20);
    vertex(+s / 2.1, +s / 20); // rest of middle section
    vertex(+s / 4.5, -s / 30);
    vertex(+s / 40, +s / 7);
    vertex(-s / 6, 0);
    vertex(-s / 2, +s / 6);
    endShape();
    for (var i = 0; i < 10; i++) {
      fill(0, 200, 255, 255 - i * 35);
      noStroke();
      ellipse(s / 2, 0, s / 2 + i * 5, s / 2 + i * 5);
    }
    fill(255);
    ellipse(s / 2, 0, s / 2, s / 2);
    popMatrix();
    stroke(255, 255, 255, 150);
    line(x, y - s / 3, x + s / 8, y - s / 4.5);
    point(x + s / 5, y - s / 6);
  };

  // Image loading [

  background(0, 0);
  drawBossIcicle(50, 50, 95);
  var bossIce = get(0, 0, 140, 140);

  //]

  var bossSpikes = [];
  var drawBossSpike = function drawBossSpike(x, y, s) {
    fill(130, 40, 30);
    noStroke();
    triangle(x - s / 1.68, y + s / 1.8, x + s / 1.65, y + s / 1.8, x, y - s / 1.4);
    stroke(130, 40, 30);
    strokeWeight(s / 5);
    line(x - s / 2, y + s / 1.7, x + s / 2, y + s / 1.7);
    stroke(0, 0, 0, 100);
    strokeWeight(s / 8);
    line(x - s / 1.85, y + s / 1.8, x - s / 10, y - s / 3);
    strokeWeight(s / 10);
    stroke(255, 255, 255, 165);
    line(x + s / 2, y + s / 2, x + s / 2.6, y + s / 4);
  };
  var spikeSlots = [];
  var spawnSpikeWave = function spawnSpikeWave(count, targetY) {
    for (var i = 0; i < count; i++) {
      if (spikeSlots.length === 0) {
        return;
      }
      bossSpikes.push({
        x: spikeSlots.pop(),
        y: targetY + 50,
        targetY: targetY,
        timer: 0,
        active: false,
        size: 74.1
      });
    }
  };

  // Image load again lol [

  background(0, 0);
  drawBossSpike(80, 80, 105);
  var bossSpike = get(0, 0, 160, 160);

  //]

  var bossPoisonWave = function bossPoisonWave(x, y, s) {
    pushMatrix();
    translate(x, y);
    scale(s / 100);
    translate(-x, -y);

    // Main shape + outline [

    // Interior
    fill(150, 200, 150);
    noStroke();
    beginShape();
    vertex(x - 60, y + 210);
    bezierVertex(x - 130, y + 60, x - 50, y - 30, x, y - 35);
    bezierVertex(x + 80, y - 35, x + 75, y + 70, x - 5, y + 60);
    vertex(x, y + 55);
    bezierVertex(x, y + 105, x + 20, y + 190, x + 40, y + 210);
    vertex(x - 60, y + 210);
    endShape();

    // Outline
    fill(10, 100, 10);
    beginShape();
    vertex(x - 60, y + 210);
    bezierVertex(x - 145, y + 70, x - 50, y - 45, x + 10, y - 40);
    bezierVertex(x + 80, y - 25, x + 95, y + 65, x + 10, y + 70);
    bezierVertex(x - 30, y + 55, x - 30, y + 10, x + 10, y);
    bezierVertex(x - 20, y + 25, x - 5, y + 45, x + 15, y + 55);
    bezierVertex(x + 85, y + 50, x + 45, y - 25, x + 10, y - 25);
    bezierVertex(x - 90, y - 10, x - 100, y + 110, x - 45, y + 210);
    vertex(x + 30, y + 210);
    bezierVertex(x + 15, y + 165, x - 5, y + 145, x, y + 60);
    bezierVertex(x + 15, y + 140, x + 25, y + 180, x + 50, y + 210);
    vertex(x + 60, y + 225);
    vertex(x - 50, y + 225);
    vertex(x - 60, y + 210);
    endShape();

    //]

    // Inside lines [

    pushMatrix();
    translate(0, y - 240);

    // Layer 4
    fill(200, 110, 110);
    stroke(0, 0, 0);
    strokeWeight(2);
    beginShape();
    vertex(x - 20, 409);
    bezierVertex(x - 40, 381, x - 45, 293, x - 25, 292);
    bezierVertex(x - 35, 324, x - 25, 395, x - 20, 409);
    endShape();
    // Layer 5
    beginShape();
    vertex(x - 20, 437);
    bezierVertex(x - 40, 447, x - 70, 372, x - 50, 375);
    bezierVertex(x - 50, 397, x - 45, 420, x - 20, 437);
    endShape();
    // Layer 6
    beginShape();
    vertex(x - 55, 285);
    bezierVertex(x - 60, 275, x - 50, 243, x - 20, 239);
    bezierVertex(x - 40, 252, x - 50, 264, x - 55, 286);
    endShape();
    // Layer 7
    beginShape();
    vertex(x + 5, 233);
    bezierVertex(x + 20, 226, x + 30, 224, x + 40, 243);
    bezierVertex(x + 20, 230, x + 20, 229, x + 5, 233);
    endShape();
    // Layer 9
    beginShape();
    vertex(x + 25, 252);
    bezierVertex(x + 45, 264, x + 35, 274, x + 20, 285);
    bezierVertex(x + 40, 288, x + 55, 259, x + 25, 252);
    endShape();
    popMatrix();

    //]

    //rect(x - 50, y - 50, 100, 100);

    stroke(255, 255, 255, 100);
    noFill();
    strokeWeight(5);
    arc(x + 32, y + 15, 50, 70, 290, 340);
    popMatrix();
  };
  var p;
  var spawnParticles;
  var bossFight;
  var fallingHazards = [];
  var updateFallingHazards = function updateFallingHazards(boss) {
    // Loop backwards so splicing items out mid-loop doesn't break the index count
    for (var i = fallingHazards.length - 1; i >= 0; i--) {
      var h = fallingHazards[i];

      // Move hazard downward
      h.y += h.vy;

      // Spike collision
      if (h.type === 'spike') {
        if (checkSpikeHit(p, h) && p.spikeCooldown <= 0) {
          spawnParticles(p.x, p.y, 10, "spike", 2);
          p.health -= 25;
          p.hurtFrames = 25;
          p.spikeCooldown = 10;

          // Remove hazard on impact
          fallingHazards.splice(i, 1);
          continue;
        }
      }
      // Thorn collision
      else if (h.type === 'thorn') {
        h.x += cos(frameCount * 2) * 1.5;
        if (checkThornHit(p, h)) {
          spawnParticles(p.x, p.y, 10, "spike", 2);
          p.health -= 75;
          p.hurtFrames = 25;
          p.spikeCooldown = 10;
          fallingHazards.splice(i, 1);
          continue;
        }
      }
      // Lava and Poison collision
      else if (h.type === 'lava' || h.type === 'poison') {
        var mtv = checkCollision(p, h);
        if (mtv && p.health > 0) {
          var lavaLeft = h.x - h.w / 2;
          var lavaRight = h.x + h.w / 2;
          var pLeft = p.x - p.w / 2;
          var pRight = p.x + p.w / 2;
          var leftSideTouching = pLeft >= lavaLeft && pLeft <= lavaRight;
          var rightSideTouching = pRight >= lavaLeft && pRight <= lavaRight;
          if (leftSideTouching && rightSideTouching) {
            if (h.type === 'lava') {
              p.health -= 1.5;
            } else {
              p.health = 0;
            }
            p.hurtFrames = 1;
            p.grounded = false;
            spawnParticles(p.x, p.y + p.h / 2 - 8, 1, "lava", 2);
            continue;
          }
        }
      }
      if (!bossFight) {
        fallingHazards.splice(i, 1);
      }

      // Cleanup once offscreen
      if (h.y > boss.initialY + 350) {
        fallingHazards.splice(i, 1);
      }
    }
  };
  var drawFallingHazards = function drawFallingHazards() {
    for (var i = 0; i < fallingHazards.length; i++) {
      var h = fallingHazards[i];

      // Safety check to ensure width/height are initialized
      if (!h.h) {
        h.h = 20;
      }
      if (!h.w) {
        h.w = 20;
      }
      if (h.type === 'spike') {
        pushMatrix();
        translate(h.x, h.y);
        rotate(h.r); // Rotates directly using degrees (no radians function)
        var amount = h.amount || max(1, floor(h.w / 20));
        var spikeW = h.w / amount;

        // Draw each triangle (spike) relative to the translated origin
        for (var s = 0; s < amount; s++) {
          var bx = -h.w / 2 + s * spikeW;
          var rx = bx + spikeW;
          var ax = bx + spikeW * 0.5;
          var by = h.h / 1.8;
          var ay = -h.h / 2;
          noStroke(); // Main triangle
          fill(175, 165, 165);
          triangle(bx, by, rx, by, ax, ay);
          strokeWeight(3);
          stroke(200); // Light tint line
          line(bx + 11.5, by / 10, bx + 10.5, ay / 9);
        }
        popMatrix();
      } else if (h.type === 'thorn') {
        drawThornSprite(h);
      } else if (h.type === 'lava' || h.type === 'poison') {
        pushMatrix();
        translate(h.x, h.y);
        rotate(h.r); // Rotates directly using degrees (no radians function)
        // Initialize bubbles uniquely for this dynamic drop if they don't exist yet
        if (!h.bubbles) {
          h.bubbles = [];
          for (var b = 0; b < h.w / 25; b++) {
            h.bubbles.push({
              x: random(-h.w / 2 + 20, h.w / 2 - 20),
              y: random(-h.h / 2 - 100, -h.h / 2),
              speed: random(0.25, 0.4),
              size: random(8, 10),
              op: 0
            });
          }
        }

        // Draw Lava Body Base
        noStroke();
        if (h.type === 'lava') {
          fill(180, 0, 0);
        } else {
          fill(10, 100, 10);
        }
        rect(-h.w / 2, -h.h / 2, h.w, h.h - 15);
        rect(-h.w / 2, -h.h / 2, h.w, h.h, 15);

        // Inner Core Glow
        if (h.type === 'lava') {
          fill(255, 0, 0);
        } else {
          fill(200, 255, 200);
        }
        rect(-h.w / 2 + 15, -h.h / 2, h.w - 30, h.h - 13, 10);
        rect(-h.w / 2 + 15, -h.h / 2, h.w - 30, h.h - 23);

        // Draw and Update Bubbles inside the falling projectile
        for (var b = 0; b < h.bubbles.length; b++) {
          var bub = h.bubbles[b];
          bub.y += bub.speed;

          // Reset bubble after reaching the bottom edge
          if (bub.y > h.h / 2 - 17) {
            bub.x = random(-h.w / 2 + 20, h.w / 2 - 20);
            bub.y = random(-h.h / 2 - 100, -h.h / 2);
            bub.op = 0;
          }

          // Fade out when near edge
          if (bub.y > h.h / 2 - 27) {
            bub.op -= 20;
          }

          // Fill bubble based on type
          if (h.type === 'lava') {
            fill(255, 150, 0, bub.op);
          } else {
            fill(0, 200, 0, bub.op);
          }

          // Draw individual bubble
          noStroke();
          if (bub.y > -h.h / 2) {
            if (bub.op < 255) {
              bub.op += 10;
            }
            ellipse(bub.x, bub.y, bub.size, bub.size);
          }
        }
        popMatrix();
      }
    }
  };
  var bossDecaySpots = [];
  function Enemy(x, y, s, r, speed) {
    this.x = x;
    this.y = y;
    this.size = s;
    this.speed = speed;
    this.detectRad = r;
    this.detectRight = false;
    this.detectLeft = false;
    this.alive = true;
  }
  Enemy.prototype.detectRadius = function (player) {
    var deadZone = 2;

    // Within vertical bounds
    if (player.y >= this.y - 250 && player.y <= this.y + 200) {
      var dx = player.x - this.x;
      if (Math.abs(dx) < deadZone) {
        return 0;
      }

      // Player is to the right
      if (dx > 0 && dx <= this.detectRad) {
        return this.speed;
      }

      // Player is to the left
      if (dx < 0 && dx >= -this.detectRad) {
        return -this.speed;
      }
    }
    return 0;
  };

  // Specific Enemies
  function Boing(x, y, s, r, speed, type) {
    Enemy.call(this, x, y, s, r, speed);
    if (type === undefined) {
      this.type = 'normal';
    } else if (type === 'X') {
      this.type = 'X';
    }

    // Add some Boing-specific variables
    this.activeJump = !false;
    this.point = this.y + this.size / 1.3;
    this.jumpLerp = 0;
    this.hasJumped = false;
    this.state = "idle";
    this.vy = 0; // vertical velocity
    this.gravity = 0.6; // gravity strength
    this.jumpPower = -13; // upward force

    //this.groundY = this.y; // where it lands

    this.chaseTime = 0;
    this.maxChaseTime = 180; // 3 seconds (assuming 60fps)
  }
  Boing.prototype = Object.create(Enemy.prototype);
  Boing.prototype.constructor = Boing;
  Boing.prototype.draw = function () {
    // Variables for arm animation

    var xOffset = lerp(this.size / 6, this.size / 2, this.jumpLerp);
    var xOffset2 = lerp(this.size / 9, this.size / 2, this.jumpLerp);
    var w = lerp(this.size, this.size / 1.5, this.jumpLerp);
    var w2 = lerp(this.size * 1.1, this.size / 1.5, this.jumpLerp);
    var leftArcStart = lerp(180, 200, this.jumpLerp);
    var leftArcEnd = lerp(239, 280, this.jumpLerp);
    var rightArcStart = lerp(297, 260, this.jumpLerp);
    var rightArcEnd = lerp(360, 340, this.jumpLerp);

    //Arms (animation lerps)

    noFill();
    stroke(0, 150, 0);
    if (this.type === 'X') {
      stroke(200, 0, 0);
    }
    strokeWeight(this.size / 10);
    arc(this.x - xOffset, this.y + this.size, w, this.size * 1.7, leftArcStart, leftArcEnd);
    arc(this.x - xOffset2, this.y + this.size, w2, this.size * 1.5, leftArcStart, leftArcEnd);
    arc(this.x + xOffset, this.y + this.size, w, this.size * 1.7, rightArcStart, rightArcEnd);
    arc(this.x + xOffset2, this.y + this.size, w2, this.size * 1.5, rightArcStart, rightArcEnd);

    //Blue body
    noStroke();
    fill(50, 100, 180);
    if (this.type === 'X') {
      fill(20, 40, 140);
    }
    ellipse(this.x, this.y, this.size, this.size);
    triangle(this.x - this.size / 2.37, this.y + this.size / 3.65, this.x + this.size / 2.37, this.y + this.size / 3.65, this.x, this.y + this.size);
    stroke(255, 255, 255, 50);
    strokeWeight(this.size / 20);
    arc(this.x, this.y, this.size / 1.3, this.size / 1.3, 210, 240);

    //Eyes
    noStroke();
    fill(255, 255, 0);
    if (this.type === 'X') {
      fill(220, 0, 0);
    }
    ellipse(this.x - this.size / 7, this.y + this.jumpLerp * 10, this.size / 8, this.size / 3.5);
    ellipse(this.x + this.size / 7, this.y + this.jumpLerp * 10, this.size / 8, this.size / 3.5);
  };
  Boing.prototype.update = function (player, objects) {
    // Detect player
    var move = this.detectRadius(player);

    // Idle until player detected
    if (this.state === "idle") {
      if (move !== 0 && this.hasJumped === false) {
        // Start jump
        this.state = "jumping";
        this.vy = this.jumpPower;
        this.chaseTime = 0;
        this.hasJumped = true;
      }
      // Reset when player not detected
      else if (move === 0) {
        this.hasJumped = false;
      }
    }

    // Jump into the air
    else if (this.state === "jumping") {
      // Only chase if player still detected
      if (move !== 0) {
        this.x += move;
      }

      // Gravity
      if (this.vy < 0) {
        this.vy += this.gravity;
      }
      this.chaseTime++;

      // After 3 seconds → fall
      if (this.chaseTime > this.maxChaseTime) {
        this.state = "falling";
      }
    } else if (this.state === "falling") {
      // Continue falling normally
      this.vy += this.gravity;
      if (this.y > 1000) {
        unlockAchievement("So Long");
      }
    }

    // Change Boing Y always
    this.y += this.vy;

    // Boing hitbox
    var boingBox = {
      x: this.x,
      y: this.y + this.size * 0.25,
      w: this.size,
      h: this.size * 1.5,
      r: 0
    };
    for (var i = 0; i < objects.length; i++) {
      var o = objects[i];
      var mtv = checkCollision(boingBox, o);
      if (mtv && abs(mtv.y) >= abs(mtv.x)) {
        if (this.vy >= 0 && mtv.y < 0) {
          this.y += mtv.y;
          this.vy = 0;
          this.state = "idle";
          break;
        }
      }
    }
    if (this.point === player.y && this.x === player.x) {}

    // Animation
    var target = this.state !== "idle" ? 1 : 0;
    this.jumpLerp = lerp(this.jumpLerp, target, 0.15);
  };
  Boing.prototype.checkHit = function (object) {
    var boingBox = {
      x: this.x,
      y: this.y + this.size * 0.25,
      w: this.size,
      h: this.size * 1.5,
      r: 0
    };
    return checkCollision(object, boingBox);
  };
  Boing.prototype.killBoing = function () {
    this.alive = false;
  };
  function Zapp(x, y, s, r, speed, type) {
    Enemy.call(this, x, y, s, r, speed);
    if (type === undefined) {
      this.type = 'normal';
    } else if (type === 'X') {
      this.type = 'X';
    }
    this.legsScene = 0;
    this.legsLerp = 0;
    this.direction = 0; // 0 is left, 1 is right
    this.directionLerp = 0;
    this.startX = this.x;
    this.startY = this.y;
  }
  Zapp.prototype.draw = function () {
    // These variables regulate the animations, changing between two different points

    var legsAnim = lerp(this.size * 0.07, -this.size * 0.07, this.legsLerp); // Regualtes the bottom legs and different from direction

    var eyesAnimX = lerp(0, this.size * 0.58, this.directionLerp); // Regulates the X coordinate of the eyes
    var eyesAnimY = lerp(0, this.size * 0.03, this.directionLerp); // Regulates the Y coordinate of the eyes
    var stripeAnim = lerp(this.size * 0.47, -this.size * 0.47, this.directionLerp); // Regulates the orange stripe

    var sparkAnim = lerp(this.size * 0.12, -this.size * 0.12, this.directionLerp); // Regulates the lightning bolt on top

    // Back legs
    stroke(220, 220, 0);
    if (this.type === 'X') {
      stroke(200, 80, 0);
    }
    strokeWeight(this.size / 10);
    line(this.x + this.size / 5 - legsAnim, this.y + this.size * 0.75, this.x + this.size / 5, this.y + this.size * 0.6);
    line(this.x + this.size * 0.45 + legsAnim, this.y + this.size * 0.75, this.x + this.size * 0.45, this.y + this.size * 0.6);
    line(this.x + this.size * 0.67 - legsAnim, this.y + this.size * 0.75, this.x + this.size * 0.67, this.y + this.size * 0.6);

    //Body
    fill(190);
    if (this.type === 'X') {
      fill(150);
    }
    noStroke();
    rect(this.x, this.y, this.size, this.size / 1.5, this.size / 3);

    //Eyes
    fill(255, 240, 0);
    if (this.type === 'X') {
      fill(255);
    }
    ellipse(this.x + this.size * 0.07 + eyesAnimX, this.y + this.size / 4 + eyesAnimY, this.size / 8, this.size / 8);
    ellipse(this.x + this.size / 3 + eyesAnimX, this.y + this.size / 3.7 - eyesAnimY, this.size / 8, this.size / 8);
    fill(255, 50, 0); // Eyelids
    if (this.type === 'X') {
      fill(200, 0, 0);
    }
    arc(this.x + this.size / 15 + eyesAnimX, this.y + this.size / 4 + eyesAnimY, this.size / 8, this.size / 8, 200, 380);
    arc(this.x + this.size / 3 + eyesAnimX, this.y + this.size / 3.8 - eyesAnimY, this.size / 8, this.size / 8, 160, 340);

    //Spark
    fill(255, 240, 0);
    if (this.type === 'X') {
      fill(255, 50, 0);
    }
    ellipse(this.x + this.size / 2, this.y + this.size / 35, this.size / 1.5, this.size / 9);
    noStroke();
    triangle(this.x + this.size / 2 - sparkAnim, this.y - this.size / 2.3, this.x + this.size / 2 + sparkAnim * 0.7, this.y, this.x + this.size / 2 - sparkAnim * 1.5, this.y);
    triangle(this.x + this.size / 2 + sparkAnim * 1.9, this.y - this.size / 1.6, this.x + this.size / 2 + sparkAnim * 0.7, this.y, this.x + this.size / 2 - sparkAnim * 0.4, this.y - this.size / 3.5);

    //Stripe
    fill(255, 80, 0);
    triangle(this.x + this.size * 0.5 + stripeAnim * 0.5, this.y + this.size / 3, this.x + this.size * 0.5 + stripeAnim, this.y + this.size / 4.5, this.x + this.size * 0.5 + stripeAnim, this.y + this.size / 2.3);
    ellipse(this.x + this.size * 0.5 + stripeAnim, this.y + this.size / 3, this.size / 15, this.size / 5);

    // Front legs
    strokeWeight(this.size / 10);
    stroke(255, 255, 0);
    if (this.type === 'X') {
      stroke(255, 100, 0);
    }
    line(this.x + this.size * 0.25, this.y + this.size * 0.65, this.x + this.size * 0.25 + legsAnim, this.y + this.size * 0.8);
    line(this.x + this.size * 0.48, this.y + this.size * 0.65, this.x + this.size * 0.48 - legsAnim, this.y + this.size * 0.8);
    line(this.x + this.size * 0.7, this.y + this.size * 0.65, this.x + this.size * 0.7 + legsAnim, this.y + this.size * 0.8);
  };
  Zapp.prototype.update = function () {
    var legsTarget = this.legsScene; // two scenes
    var directionTarget = this.direction; // 0 is left, 1 is right

    // Smoothly move toward target
    this.legsLerp = lerp(this.legsLerp, legsTarget, 0.05);
    this.directionLerp = lerp(this.directionLerp, directionTarget, 0.2);
    if (frameCount % 60 === 0) {
      if (this.legsScene === 1) {
        this.legsScene = 0;
      } else if (this.legsScene === 0) {
        this.legsScene = 1;
      }
    }

    // Calculating direction switch
    if (this.x > this.startX + this.detectRad) {
      this.direction = 0;
    }
    if (this.x < this.startX - this.detectRad) {
      this.direction = 1;
    }

    // Moving based on direction
    if (this.direction === 0) {
      this.x -= this.speed;
    }
    if (this.direction === 1) {
      this.x += this.speed;
    }
  };
  Zapp.prototype.checkHit = function (player) {
    var zappBox = {
      x: this.x + this.size / 2,
      y: this.y + this.size / 4,
      w: this.size,
      h: this.size / 1.5,
      r: 0
    };
    return checkCollision(player, zappBox);
  };
  function Thorn(x, y, s, r, speed) {
    Enemy.call(this, x, y, s, r, speed);
  }
  Thorn.prototype = Object.create(Enemy.prototype);
  Thorn.prototype.constructor = Thorn;
  Thorn.prototype.draw = function () {
    noStroke();
    fill(70);
    triangle(this.x - 20, this.y, this.x + 20, this.y, this.x, this.y - 20);
    strokeWeight(this.size / 12);
    stroke(255, 255, 255, 50);
    line(this.x + 2, this.y - 13, this.x + 5, this.y - 10);
  };
  Thorn.prototype.update = function (player) {
    // Move if player is in the radius
    this.x += this.detectRadius(player);
  };
  Thorn.prototype.checkHit = function (player) {
    var playerVerts = getVertices(player);
    var scaleFactor = this.size / 50;
    var halfBase = 20 * scaleFactor;
    var triHeight = 20 * scaleFactor;
    var triVerts = [{
      x: this.x - halfBase,
      y: this.y
    }, {
      x: this.x + halfBase,
      y: this.y
    }, {
      x: this.x,
      y: this.y - triHeight
    }];
    return polygonOverlap(playerVerts, triVerts);
  };
  function Sign(x, y, w, h, text) {
    this.x = x;
    this.y = y;
    this.w = w || 60;
    this.h = h || 60;
    this.text = text || "Hello! It appears this sign didn't have any text attached. Let us know and we will fix it right away!";
    this.r = 0;
  }

  // Image load launcher
  //[

  background(0, 0);
  noStroke();
  for (var r = 0; r < 10; r++) {
    fill(0, 255, 0, 255 - r * 25.5);
    rect(0, 55 - r * 5, 130, 5);
  }
  fill(100);
  quad(20, 18, 110, 18, 130, 65, 0, 65);
  stroke(255, 255, 255, 80);
  strokeWeight(4.7);
  line(110, 30, 114, 40);
  noStroke();
  for (var c = 0; c < 15; c++) {
    fill(0, 255 - c * 3.5, 0);
    ellipse(65, 18 + c / 3, 90 - c * 2, 35 - c * 0.6);
  }
  var launcherImg = get(0, 0, 130, 100);

  //]

  // Level setup
  var levels = [
  // area 1
  {
    objects: [
    // Base
    {
      x: 1050,
      y: 545,
      w: 2600,
      h: 150,
      r: 0
    }, {
      type: 'sign',
      x: 540,
      y: 440,
      text: "Hello!\nWelcome to Dash Parkour!"
    }, {
      type: 'lava',
      x: 1360,
      y: 520,
      w: 150,
      h: 100
    }, {
      type: 'sign',
      x: 1140,
      y: 440,
      text: "This is lava. Stepping on it drains your\nhealth and prevents you from jumping."
    }, {
      type: 'sign',
      x: 1740,
      y: 440,
      text: "These are spikes. They deal a good\nchunk of damage and make you jump."
    }, {
      type: 'spike',
      x: 1900,
      y: 459,
      r: 0,
      amount: 5
    }, {
      x: 2500,
      y: 440,
      w: 430,
      h: 150,
      r: -35
    }, {
      type: 'spike',
      x: 2500,
      y: 336,
      r: -35,
      amount: 3
    }, {
      x: 2950,
      y: 590,
      w: 700,
      h: 50,
      r: 0
    }, {
      type: 'sign',
      x: 2850,
      y: 535,
      text: "This is a checkpoint.\nIt will save your progress if you die!"
    }, {
      type: 'checkpoint',
      x: 3000,
      y: 530,
      w: 60,
      h: 70
    }, {
      type: 'sign',
      x: 3250,
      y: 535,
      text: "You might need it,\nbecause this is a gap.\nFalling in one kills you instantly.\nMake sure you hold jump!"
    }, {
      x: 3670,
      y: 590,
      w: 400,
      h: 300,
      r: 0
    }, {
      type: 'lava',
      x: 3670,
      y: 505,
      w: 150,
      h: 130
    }, {
      x: 4400,
      y: 640,
      w: 1200,
      h: 300,
      r: 0
    }, {
      type: 'spike',
      x: 4100,
      y: 479,
      r: 0,
      amount: 8
    }, {
      type: 'spike',
      x: 4300,
      y: 479,
      r: 0,
      amount: 2
    }, {
      type: 'lava',
      x: 4600,
      y: 540,
      w: 200,
      h: 100
    }, {
      type: 'spike',
      x: 4800,
      y: 479,
      r: 0,
      amount: 2
    }, {
      type: 'spike',
      x: 5000,
      y: 479,
      r: 0,
      amount: 4
    }, {
      x: 5100,
      y: 500,
      w: 300,
      h: 20,
      r: 0
    }, {
      type: 'spike',
      x: 5220,
      y: 479,
      r: 0,
      amount: 3
    }, {
      x: 5700,
      y: 590,
      w: 700,
      h: 200,
      r: 0
    }, {
      type: 'lava',
      x: 5600,
      y: 540,
      w: 175,
      h: 100
    }, {
      type: 'sign',
      x: 5780,
      y: 461,
      text: "Use this trampoline to get higher!"
    }, {
      type: 'trampoline',
      x: 5900,
      y: 483,
      h: 15,
      w: 100
    }, {
      x: 6200,
      y: 340,
      w: 500,
      h: 700,
      r: 0
    }, {
      type: 'sign',
      x: 6060,
      y: -39,
      text: "Congrats!\nStep into this portal\nto go to the next level."
    }],
    portal: {
      x: 6200,
      y: -19,
      w: 130,
      h: 16
    },
    spawn: {
      x: 0,
      y: 301
    }
  }, {
    objects: [{
      x: 400,
      y: 545,
      w: 600,
      h: 150,
      r: 0
    }, {
      type: 'arrowSign',
      x: 340,
      y: 409,
      w: 110,
      h: 30,
      way: 'right'
    }, {
      type: 'sign',
      x: 530,
      y: 440,
      text: 'Welcome to level 2!\n\nPlease go forward to begin\nyour challenge...'
    }, {
      x: 840,
      y: 480,
      w: 400,
      h: 80,
      r: -10
    }, {
      x: 1350,
      y: 510,
      w: 500,
      h: 140
    }, {
      type: 'lava',
      x: 1250,
      y: 500,
      w: 90,
      h: 120
    }, {
      type: 'lava',
      x: 1450,
      y: 500,
      w: 120,
      h: 120
    }, {
      x: 2100,
      y: 520,
      w: 800,
      h: 250
    }, {
      type: 'spike',
      x: 1850,
      y: 384,
      r: 0,
      amount: 4
    }, {
      type: 'spike',
      x: 2050,
      y: 384,
      r: 0,
      amount: 5
    }, {
      type: 'lava',
      x: 2300,
      y: 480,
      w: 140,
      h: 170
    }, {
      x: 2850,
      y: 500,
      w: 500,
      h: 120
    }, {
      type: 'spike',
      x: 2750,
      y: 430,
      r: 0,
      amount: 3
    }, {
      type: 'sign',
      x: 2950,
      y: 410,
      text: 'Nice work!\nNow, get ready for\nsome more!'
    }, {
      x: 3300,
      y: 430,
      w: 150,
      h: 40,
      r: 10
    }, {
      x: 3700,
      y: 475,
      w: 380,
      h: 150
    }, {
      type: 'lava',
      x: 3700,
      y: 455,
      w: 120,
      h: 110
    }, {
      x: 4000,
      y: 490,
      w: 380,
      h: 120
    }, {
      type: 'spike',
      x: 4020,
      y: 420,
      r: 0,
      amount: 4
    }, {
      x: 4350,
      y: 430,
      w: 180,
      h: 40,
      r: -5
    }, {
      x: 5050,
      y: 550,
      w: 1000,
      h: 200
    }, {
      type: 'lava',
      x: 4700,
      y: 510,
      w: 120,
      h: 120
    }, {
      type: 'spike',
      x: 4950,
      y: 440,
      r: 0,
      amount: 5
    }, {
      type: 'lava',
      x: 5150,
      y: 510,
      w: 120,
      h: 120
    }, {
      type: 'spike',
      x: 5350,
      y: 440,
      r: 0,
      amount: 4
    }, {
      x: 5950,
      y: 490,
      w: 600,
      h: 150
    }, {
      type: 'spike',
      x: 5800,
      y: 405,
      r: 0,
      amount: 3
    }, {
      type: 'lava',
      x: 5960,
      y: 485,
      w: 100,
      h: 140
    }, {
      type: 'checkpoint',
      x: 6130,
      y: 375,
      w: 70,
      h: 80
    }, {
      x: 6900,
      y: 490,
      w: 1000,
      h: 80
    }, {
      type: 'sign',
      x: 6500,
      y: 420,
      text: 'You\'ve passed\nthe halfway mark!\n\nBut do you have what\nit takes to finish?'
    }, {
      type: 'trampoline',
      x: 6700,
      y: 442,
      w: 100,
      h: 15
    }, {
      type: 'spike',
      x: 6790,
      y: 440,
      r: 0,
      amount: 4
    }, {
      type: 'spike',
      x: 6870,
      y: 440,
      r: 0,
      amount: 2
    }, {
      type: 'spike',
      x: 6970,
      y: 440,
      r: 0,
      amount: 3
    }, {
      type: 'lava',
      x: 7150,
      y: 480,
      w: 100,
      h: 60
    }, {
      type: 'trampoline',
      x: 7350,
      y: 442,
      w: 100,
      h: 15
    }, {
      x: 7650,
      y: 530,
      w: 600,
      h: 160
    }, {
      type: 'lava',
      x: 7525,
      y: 510,
      w: 250,
      h: 120
    }, {
      type: 'spike',
      x: 7800,
      y: 440,
      r: 0,
      amount: 4
    }, {
      x: 8150,
      y: 450,
      w: 200,
      h: 50,
      r: -5
    }, {
      x: 8650,
      y: 490,
      w: 700,
      h: 150
    }, {
      type: 'lava',
      x: 8500,
      y: 475,
      w: 120,
      h: 120
    }, {
      type: 'spike',
      x: 8700,
      y: 405,
      r: 0,
      amount: 4
    }, {
      type: 'trampoline',
      x: 8920,
      y: 407,
      w: 100,
      h: 15
    }, {
      x: 9900,
      y: 515,
      w: 1300,
      h: 200
    }, {
      type: 'lava',
      x: 9500,
      y: 500,
      w: 160,
      h: 170
    }, {
      type: 'spike',
      x: 9700,
      y: 405,
      r: 0,
      amount: 2
    }, {
      type: 'spike',
      x: 9800,
      y: 405,
      r: 0,
      amount: 2
    }, {
      x: 10400,
      y: 280,
      w: 300,
      h: 300
    }],
    portal: {
      x: 10100,
      y: 406,
      w: 130,
      h: 16
    },
    spawn: {
      x: 240,
      y: 301
    }
  }, {
    objects: [{
      x: 550,
      y: 510,
      w: 900,
      h: 200,
      r: 0
    }, {
      type: 'arrowSign',
      x: 300,
      y: 349,
      w: 110,
      h: 30,
      way: 'right'
    }, {
      type: 'sign',
      x: 500,
      y: 380,
      text: 'Now you\'ve cleared\ntwo challenges!\n\nCan you keep up your\nstreak though?'
    }, {
      type: 'lava',
      x: 770,
      y: 475,
      w: 160,
      h: 130,
      way: 'right'
    }, {
      x: 1250,
      y: 400,
      w: 300,
      h: 80,
      r: -5
    }, {
      type: 'spike',
      x: 1250,
      y: 350,
      amount: 4,
      r: -5
    }, {
      x: 1850,
      y: 530,
      w: 600,
      h: 180
    }, {
      type: 'spike',
      x: 1900,
      y: 430,
      amount: 3
    }, {
      type: 'lava',
      x: 1700,
      y: 505,
      w: 140,
      h: 130,
      way: 'right'
    }, {
      type: 'trampoline',
      x: 2070,
      y: 433,
      w: 100,
      h: 15
    }, {
      x: 2420,
      y: 100,
      w: 400,
      h: 100,
      r: -25
    }, {
      type: 'spike',
      x: 2420,
      y: 35,
      amount: 5,
      r: -25
    }, {
      x: 3150,
      y: 0,
      w: 1000,
      h: 300
    }, {
      type: 'sign',
      x: 2800,
      y: -180,
      text: 'This is a conveyorbelt.\n\nWhen you jump on it,\nit will propel you forward.'
    }, {
      type: 'conveyorbelt',
      x: 3100,
      y: -170,
      w: 390,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'lava',
      x: 3500,
      y: -85,
      w: 140,
      h: 130,
      way: 'right'
    }, {
      type: 'conveyorbelt',
      x: 3975,
      y: -80,
      w: 600,
      h: 30,
      d: -1,
      r: 20
    }, {
      x: 4750,
      y: 269,
      w: 1100,
      h: 300
    }, {
      type: 'conveyorbelt',
      x: 4600,
      y: 100,
      w: 800,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'spike',
      x: 4400,
      y: 72,
      amount: 5,
      r: 0
    }, {
      type: 'spike',
      x: 4650,
      y: 72,
      amount: 2,
      r: 0
    }, {
      type: 'spike',
      x: 4850,
      y: 72,
      amount: 3,
      r: 0
    }, {
      type: 'lava',
      x: 5150,
      y: 185,
      w: 140,
      h: 130,
      way: 'right'
    }, {
      type: 'conveyorbelt',
      x: 5550,
      y: 100,
      w: 400,
      h: 30,
      d: -1,
      r: -5
    }, {
      x: 6475,
      y: 210,
      w: 1150,
      h: 300
    }, {
      type: 'spike',
      x: 6100,
      y: 50,
      amount: 4,
      r: 0
    }, {
      type: 'checkpoint',
      x: 6300,
      y: 20,
      w: 70,
      h: 80
    }, {
      type: 'trampoline',
      x: 6550,
      y: 52,
      w: 100,
      h: 15
    }, {
      type: 'lava',
      x: 6760,
      y: 125,
      w: 280,
      h: 130,
      way: 'right'
    }, {
      x: 7675,
      y: 270,
      w: 850,
      h: 300
    }, {
      type: 'conveyorbelt',
      x: 7520,
      y: 101,
      w: 450,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'lava',
      x: 7860,
      y: 185,
      w: 220,
      h: 130,
      way: 'right'
    }, {
      x: 8350,
      y: 100,
      w: 400,
      h: 70,
      r: -5
    }, {
      type: 'spike',
      x: 8280,
      y: 61,
      amount: 3,
      r: -5
    }, {
      type: 'spike',
      x: 8440,
      y: 47,
      amount: 2,
      r: -5
    }, {
      x: 8810,
      y: 50,
      w: 300,
      h: 70,
      r: 10
    }, {
      type: 'spike',
      x: 8810,
      y: 5,
      amount: 4,
      r: 10
    }, {
      type: 'conveyorbelt',
      x: 9300,
      y: 130,
      w: 450,
      h: 30,
      d: 1,
      r: -10
    }, {
      x: 9790,
      y: 130,
      w: 400,
      h: 140,
      r: 0
    }, {
      type: 'lava',
      x: 9750,
      y: 125,
      w: 140,
      h: 130,
      way: 'right'
    }, {
      type: 'conveyorbelt',
      x: 10150,
      y: 42,
      w: 450,
      h: 30,
      d: -1,
      r: 0
    }, {
      x: 10500,
      y: 130,
      w: 400,
      h: 140,
      r: 0
    }, {
      type: 'sign',
      x: 10500,
      y: 30,
      text: 'Nice job!\n\nThose things can make you\ndizzy sometimes!'
    }, {
      x: 11600,
      y: 230,
      w: 1400,
      h: 220,
      r: 0
    }, {
      type: 'spike',
      x: 11100,
      y: 110,
      amount: 5,
      r: 0
    }, {
      type: 'lava',
      x: 11400,
      y: 185,
      w: 180,
      h: 130,
      way: 'right'
    }, {
      x: 12050,
      y: 0,
      w: 300,
      h: 500
    }],
    portal: {
      x: 11750,
      y: 112,
      w: 130,
      h: 16
    },
    spawn: {
      x: 240,
      y: 140
    }
  }, {
    objects: [
    // Bottom body
    {
      x: 3100,
      y: 345,
      w: 1000,
      h: 1790,
      r: 0
    },
    // Top body
    {
      x: 3100,
      y: -2300,
      w: 1000,
      h: 1790,
      r: 0
    },
    // First platform [
    {
      x: 2250,
      y: 545,
      w: 1000,
      h: 150,
      r: 0
    }, {
      type: 'sign',
      x: 2150,
      y: 441,
      text: "Welcome to your first boss battle!\n\nReach the end of the arena,\nthen take on the first\nof three Parkour Guards!"
    }, {
      type: 'spike',
      x: 2300,
      y: 460,
      r: 0,
      amount: 4
    }, {
      type: 'trampoline',
      x: 2500,
      y: 456,
      h: 30,
      w: 100
    },
    // ]

    // Second platfom [

    {
      x: 1900,
      y: 10,
      w: 1000,
      h: 150,
      r: 0
    }, {
      type: 'lava',
      x: 2200,
      y: -15,
      w: 130,
      h: 100
    }, {
      type: 'lava',
      x: 1950,
      y: -15,
      w: 160,
      h: 100
    }, {
      type: 'spike',
      x: 1700,
      y: -75,
      r: 0,
      amount: 5
    }, {
      type: 'trampoline',
      x: 1600,
      y: -77,
      h: 30,
      w: 100
    },
    //]

    // Third platform [
    {
      x: 3050,
      y: -545,
      w: 2650,
      h: 100,
      r: 0
    }, {
      type: 'lava',
      x: 2200,
      y: -553,
      w: 150,
      h: 85
    }, {
      type: 'spike',
      x: 2550,
      y: -605,
      r: 0,
      amount: 9
    }, {
      type: 'conveyorbelt',
      x: 2815,
      y: -613,
      w: 300,
      h: 30,
      r: 0,
      d: 1
    }, {
      type: 'spike',
      x: 3010,
      y: -605,
      r: 0,
      amount: 4
    }, {
      type: 'lava',
      x: 3200,
      y: -553,
      w: 150,
      h: 85
    }, {
      type: 'lava',
      x: 3550,
      y: -553,
      w: 250,
      h: 85
    }, {
      type: 'spike',
      x: 3800,
      y: -605,
      r: 0,
      amount: 2
    }, {
      type: 'spike',
      x: 4000,
      y: -605,
      r: 0,
      amount: 3
    }, {
      type: 'trampoline',
      x: 4250,
      y: -602,
      h: 15,
      w: 100
    },
    // ]

    // Fourth platform [
    {
      x: 2100,
      y: -1000,
      w: 3900,
      h: 100,
      r: 0
    }, {
      type: 'lava',
      x: 3550,
      y: -1008,
      w: 260,
      h: 85
    }, {
      type: 'conveyorbelt',
      x: 3200,
      y: -1068,
      w: 300,
      h: 30,
      r: 0,
      d: -1
    }, {
      type: 'spike',
      x: 3110,
      y: -1096,
      r: 0,
      amount: 4
    }, {
      type: 'spike',
      x: 2800,
      y: -1060,
      r: 0,
      amount: 3
    }, {
      type: 'lava',
      x: 2500,
      y: -1008,
      w: 260,
      h: 85
    }, {
      type: 'conveyorbelt',
      x: 2000,
      y: -1115,
      w: 300,
      h: 30,
      r: 20,
      d: -1
    }, {
      type: 'lava',
      x: 1600,
      y: -1008,
      w: 1000,
      h: 85
    }, {
      type: 'conveyorbelt',
      x: 1500,
      y: -1115,
      w: 300,
      h: 30,
      r: -20,
      d: 1
    }, {
      type: 'conveyorbelt',
      x: 800,
      y: -1068,
      w: 300,
      h: 30,
      r: 0,
      d: -1
    }, {
      type: 'conveyorbelt',
      x: 800,
      y: -1152,
      w: 300,
      h: 30,
      r: 0,
      d: -1
    }, {
      type: 'spike',
      x: 700,
      y: -1180,
      r: 0,
      amount: 1
    }, {
      type: 'lava',
      x: 500,
      y: -1008,
      w: 260,
      h: 85
    }, {
      type: 'trampoline',
      x: 250,
      y: -1057,
      h: 15,
      w: 100
    },
    // ]

    // Fifth platform [

    {
      x: 600,
      y: -1500,
      w: 400,
      h: 100,
      r: 0
    }, {
      type: 'sign',
      x: 500,
      y: -1580,
      text: "This is a launcher.\nIt will send you where you need to go next."
    }, {
      type: 'launcher',
      x: 700,
      y: -1563,
      w: 110,
      h: 30,
      targetX: 2800,
      targetY: -3500
    },
    // ]

    {
      type: 'checkpoint',
      x: 2900,
      y: -3235,
      w: 70,
      h: 80
    }],
    spawn: {
      x: 1900,
      y: 200
    },
    //spawn: {x: 3000, y: -3500},
    arenaY: 0
  },
  // area 2
  {
    objects: [
    // Base
    {
      x: 1050,
      y: 545,
      w: 2600,
      h: 150,
      r: 0
    }, {
      type: 'sign',
      x: 240,
      y: 440,
      text: "Welcome to Area 2!\n\nIt holds a plethora of new challenges for you.\nHowever,\nI must warn you,\nit is a lot less forgiving."
    }, {
      type: 'lava',
      x: 580,
      y: 510,
      w: 220,
      h: 80
    }, {
      type: 'lava',
      x: 1180,
      y: 510,
      w: 220,
      h: 80
    }, {
      type: 'spike',
      x: 1560,
      y: 459,
      r: 0,
      amount: 4
    }, {
      x: 1960,
      y: 500,
      w: 420,
      h: 100,
      r: -10
    }, {
      type: 'spike',
      x: 1960,
      y: 440,
      r: -10,
      amount: 4
    }, {
      type: 'lava',
      x: 2240,
      y: 510,
      w: 160,
      h: 80
    }, {
      x: 2870,
      y: 520,
      w: 760,
      h: 120,
      r: 0
    }, {
      type: 'spike',
      x: 2870,
      y: 450,
      r: 0,
      amount: 4
    }, {
      type: 'lava',
      x: 3110,
      y: 500,
      w: 180,
      h: 80
    }, {
      x: 3500,
      y: 500,
      w: 400,
      h: 100,
      r: 0
    }, {
      type: 'conveyorbelt',
      x: 3730,
      y: 432,
      w: 300,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'spike',
      x: 3760,
      y: 404,
      r: 0,
      amount: 4
    }, {
      x: 4300,
      y: 500,
      w: 700,
      h: 120,
      r: 0
    }, {
      type: 'lava',
      x: 4550,
      y: 480,
      w: 160,
      h: 80
    }, {
      type: 'spike',
      x: 4780,
      y: 450,
      r: 0,
      amount: 5
    }, {
      x: 5200,
      y: 520,
      w: 1000,
      h: 120,
      r: 0
    }, {
      type: 'lava',
      x: 5420,
      y: 500,
      w: 180,
      h: 80
    }, {
      type: 'spike',
      x: 5640,
      y: 449,
      r: 0,
      amount: 4
    }, {
      type: 'sign',
      x: 4970,
      y: 430,
      text: "You\'ve reached the halfway point.\n\nIt only gets worse from here."
    }, {
      type: 'checkpoint',
      x: 5070,
      y: 420,
      w: 70,
      h: 80
    }, {
      x: 6000,
      y: 520,
      w: 500,
      h: 120,
      r: -30
    }, {
      type: 'trampoline',
      x: 6530,
      y: 478,
      h: 15,
      w: 100
    }, {
      type: 'spike',
      x: 6880,
      y: 463,
      r: -6,
      amount: 4
    }, {
      x: 7100,
      y: 500,
      w: 560,
      h: 100,
      r: -6
    }, {
      type: 'trampoline',
      x: 7570,
      y: 463,
      h: 15,
      w: 100
    }, {
      x: 8050,
      y: 350,
      w: 600,
      h: 100,
      r: 12
    }, {
      type: 'spike',
      x: 8050,
      y: 289,
      r: 12,
      amount: 4
    }, {
      x: 8750,
      y: 450,
      w: 700,
      h: 120,
      r: 0
    }, {
      type: 'conveyorbelt',
      x: 8750,
      y: 372,
      w: 360,
      h: 30,
      d: -1,
      r: 0
    }, {
      type: 'lava',
      x: 9000,
      y: 430,
      w: 100,
      h: 80
    }, {
      x: 9550,
      y: 450,
      w: 500,
      h: 100,
      r: 0
    }, {
      x: 10050,
      y: 250,
      w: 400,
      h: 80,
      r: -15
    }, {
      type: 'spike',
      x: 10050,
      y: 198,
      r: -15,
      amount: 4
    }, {
      x: 10600,
      y: 160,
      w: 400,
      h: 80,
      r: 15
    }, {
      x: 11200,
      y: 350,
      w: 700,
      h: 120,
      r: 0
    }, {
      type: 'lava',
      x: 10950,
      y: 330,
      w: 120,
      h: 80
    }, {
      type: 'spike',
      x: 11400,
      y: 279,
      amount: 4,
      r: 0
    }, {
      x: 11850,
      y: 520,
      w: 850,
      h: 120,
      r: 0
    }, {
      type: 'spike',
      x: 11650,
      y: 449,
      amount: 3,
      r: 0
    }, {
      type: 'lava',
      x: 11900,
      y: 500,
      w: 150,
      h: 80
    }],
    portal: {
      x: 12050,
      y: 451,
      w: 130,
      h: 16
    },
    spawn: {
      x: 0,
      y: 140
    }
  }, {
    objects: [
    // Base
    {
      x: 500,
      y: 520,
      w: 1500,
      h: 250,
      r: 0
    }, {
      type: 'arrowSign',
      x: 170,
      y: 334,
      w: 110,
      h: 30,
      way: 'right'
    }, {
      type: 'spike',
      x: 520,
      y: 385,
      r: 0,
      amount: 5
    }, {
      type: 'trampoline',
      x: 630,
      y: 388,
      w: 100,
      h: 15
    }, {
      type: 'lava',
      x: 860,
      y: 475,
      w: 350,
      h: 160
    }, {
      x: 2000,
      y: 430,
      w: 1200,
      h: 150,
      r: 0
    }, {
      type: 'lava',
      x: 1570,
      y: 405,
      w: 140,
      h: 100
    }, {
      type: 'spike',
      x: 1800,
      y: 345,
      r: 0,
      amount: 3
    }, {
      type: 'spike',
      x: 1950,
      y: 345,
      r: 0,
      amount: 4
    }, {
      type: 'spike',
      x: 2200,
      y: 345,
      r: 0,
      amount: 2
    }, {
      type: 'lava',
      x: 2400,
      y: 405,
      w: 140,
      h: 100
    }, {
      x: 3400,
      y: 570,
      w: 1400,
      h: 250,
      r: 0
    }, {
      type: 'sign',
      x: 2950,
      y: 415,
      text: 'This enemy right here\nis a Boing.\n\nIt will jump in the air and\ntry to attack you.\nMake sure to dodge it!'
    }, {
      type: 'boing',
      x: 3200,
      y: 400,
      s: 50,
      r: 150,
      speed: 3.2
    }, {
      type: 'lava',
      x: 3600,
      y: 515,
      w: 140,
      h: 140
    }, {
      type: 'spike',
      x: 3820,
      y: 435,
      r: 0,
      amount: 4
    }, {
      type: 'trampoline',
      x: 4000,
      y: 440,
      w: 100,
      h: 15
    }, {
      x: 4700,
      y: 430,
      w: 600,
      h: 150,
      r: 0
    }, {
      type: 'boing',
      x: 4700,
      y: 302,
      s: 50,
      r: 200,
      speed: 3.2
    }, {
      type: 'spike',
      x: 4850,
      y: 345,
      r: 0,
      amount: 2
    }, {
      x: 5950,
      y: 550,
      w: 1600,
      h: 250,
      r: 0
    }, {
      type: 'lava',
      x: 5400,
      y: 495,
      w: 140,
      h: 140
    }, {
      type: 'conveyorbelt',
      x: 5700,
      y: 340,
      w: 420,
      h: 30,
      d: 1,
      r: -20
    }, {
      type: 'lava',
      x: 5800,
      y: 495,
      w: 540,
      h: 140
    }, {
      type: 'checkpoint',
      x: 6300,
      y: 385,
      w: 70,
      h: 80
    }, {
      type: 'sign',
      x: 6550,
      y: 395,
      text: 'Alright, how was that?\n\nGet ready for some even\ntougher challenges!'
    }, {
      x: 7500,
      y: 400,
      w: 1200,
      h: 150,
      r: 0
    }, {
      type: 'lava',
      x: 7150,
      y: 375,
      w: 150,
      h: 100
    }, {
      type: 'spike',
      x: 7400,
      y: 315,
      r: 0,
      amount: 6
    }, {
      type: 'spike',
      x: 7600,
      y: 315,
      r: 0,
      amount: 3
    }, {
      type: 'spike',
      x: 7800,
      y: 315,
      r: 0,
      amount: 4
    }, {
      type: 'lava',
      x: 8000,
      y: 375,
      w: 150,
      h: 100
    }, {
      type: 'spike',
      x: 8250,
      y: 309,
      r: 10,
      amount: 4
    }, {
      type: 'conveyorbelt',
      x: 8290,
      y: 345,
      w: 480,
      h: 30,
      d: -1,
      r: 10
    }, {
      x: 8550,
      y: 527,
      w: 150,
      h: 250,
      r: 0
    }, {
      type: 'conveyorbelt',
      x: 8835,
      y: 385,
      w: 520,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'spike',
      x: 8700,
      y: 356,
      r: 0,
      amount: 3
    }, {
      type: 'spike',
      x: 8950,
      y: 356,
      r: 0,
      amount: 5
    }, {
      x: 9850,
      y: 527,
      w: 1700,
      h: 250,
      r: 0
    }, {
      type: 'lava',
      x: 9300,
      y: 473,
      w: 150,
      h: 140
    }, {
      type: 'trampoline',
      x: 9600,
      y: 395,
      w: 110,
      h: 15
    }, {
      type: 'spike',
      x: 9780,
      y: 391,
      r: 0,
      amount: 12
    }, {
      type: 'boing',
      x: 10200,
      y: 353,
      s: 50,
      r: 200,
      speed: 3.2
    }, {
      type: 'boing',
      x: 10500,
      y: 353,
      s: 50,
      r: 200,
      speed: 3.2
    }, {
      type: 'sign',
      x: 11100,
      y: 330,
      text: 'Congrats on clearing this level!\n\nThe Parkour Master has\nmany more challenges in\nstore for you...'
    }, {
      x: 11150,
      y: 505,
      w: 600,
      h: 300,
      r: 0
    }],
    portal: {
      x: 11300,
      y: 348,
      w: 130,
      h: 16
    },
    spawn: {
      x: 0,
      y: 140
    }
    //spawn: {x: 10600, y: 140}
  }, {
    objects: [{
      x: 1280,
      y: 550,
      w: 2560,
      h: 100,
      r: 0
    }, {
      type: 'arrowSign',
      x: 150,
      y: 440,
      w: 110,
      h: 30,
      way: 'right'
    }, {
      type: 'sign',
      x: 400,
      y: 470,
      text: "Welcome to Boingland.\nThere is no mercy here. Only bounces."
    }, {
      type: 'boing',
      x: 750,
      y: 450,
      s: 50,
      r: 160,
      speed: 3
    }, {
      type: 'spike',
      x: 1050,
      y: 490,
      amount: 4,
      r: 0
    }, {
      type: 'boing',
      x: 1350,
      y: 450,
      s: 50,
      r: 180,
      speed: 3.5
    }, {
      type: 'spike',
      x: 1700,
      y: 490,
      amount: 5,
      r: 0
    }, {
      type: 'boing',
      x: 2000,
      y: 430,
      s: 60,
      r: 150,
      speed: 4
    }, {
      type: 'spike',
      x: 2300,
      y: 490,
      amount: 3,
      r: 0
    }, {
      type: 'lava',
      x: 2640,
      y: 580,
      w: 160,
      h: 60
    }, {
      x: 4110,
      y: 550,
      w: 2780,
      h: 100,
      r: 0
    }, {
      type: 'sign',
      x: 2900,
      y: 470,
      text: "Don't look at me.\nI just write the signs."
    }, {
      type: 'conveyorbelt',
      x: 3500,
      y: 490,
      w: 500,
      h: 20,
      d: 1,
      r: 0
    }, {
      type: 'boing',
      x: 3500,
      y: 420,
      s: 50,
      r: 140,
      speed: 4
    }, {
      type: 'spike',
      x: 3900,
      y: 490,
      amount: 6,
      r: 0
    },
    //{type: 'boing', x: 4200, y: 450, s: 50, r: 200, speed: 3.8},
    {
      type: 'conveyorbelt',
      x: 4600,
      y: 490,
      w: 500,
      h: 20,
      d: -1,
      r: 0
    }, {
      type: 'boing',
      x: 4600,
      y: 420,
      s: 50,
      r: 180,
      speed: 3.5
    }, {
      type: 'spike',
      x: 5000,
      y: 490,
      amount: 5,
      r: 0
    }, {
      type: 'boing',
      x: 5300,
      y: 450,
      s: 50,
      r: 220,
      speed: 4
    }, {
      type: 'trampoline',
      x: 5700,
      y: 580,
      w: 160,
      h: 20
    }, {
      x: 7200,
      y: 550,
      w: 2600,
      h: 100,
      r: 0
    }, {
      type: 'spike',
      x: 6300,
      y: 490,
      amount: 4,
      r: 0
    }, {
      type: 'boing',
      x: 6600,
      y: 450,
      s: 50,
      r: 200,
      speed: 3
    }, {
      type: 'boing',
      x: 6850,
      y: 400,
      s: 50,
      r: 150,
      speed: 3.5
    }, {
      type: 'checkpoint',
      x: 7000,
      y: 460,
      w: 70,
      h: 80
    }, {
      type: 'sign',
      x: 7120,
      y: 470,
      text: "HALFWAY DEAD.\nYour only oasis in Boingland."
    }, {
      type: 'spike',
      x: 7300,
      y: 490,
      amount: 5,
      r: 0
    }, {
      type: 'conveyorbelt',
      x: 7650,
      y: 490,
      w: 500,
      h: 20,
      d: 1,
      r: 0
    }, {
      type: 'boing',
      x: 7650,
      y: 420,
      s: 50,
      r: 190,
      speed: 3.8
    }, {
      type: 'spike',
      x: 8050,
      y: 490,
      amount: 4,
      r: 0
    },
    //{type: 'boing', x: 8350, y: 450, s: 55, r: 210, speed: 4.5},

    {
      type: 'lava',
      x: 8750,
      y: 580,
      w: 500,
      h: 60
    }, {
      x: 8750,
      y: 520,
      w: 160,
      h: 40,
      r: 0
    }, {
      type: 'spike',
      x: 8750,
      y: 490,
      amount: 1,
      r: 0
    }, {
      x: 10250,
      y: 550,
      w: 2500,
      h: 100,
      r: 0
    }, {
      type: 'sign',
      x: 9200,
      y: 470,
      text: "Say hi to Big Boing!\nHe's not a people person."
    }, {
      type: 'boing',
      x: 9600,
      y: 455,
      s: 90,
      r: 300,
      speed: 1.6
    }, {
      type: 'spike',
      x: 10400,
      y: 490,
      amount: 7,
      r: 0
    }, {
      type: 'conveyorbelt',
      x: 11100,
      y: 490,
      w: 500,
      h: 20,
      d: -1,
      r: 0
    },
    //{type: 'boing', x: 11100, y: 420, s: 50, r: 200, speed: 4},

    {
      x: 11650,
      y: 520,
      w: 150,
      h: 40,
      r: 0
    }, {
      x: 11850,
      y: 480,
      w: 150,
      h: 40,
      r: 0
    }, {
      type: 'spike',
      x: 11850,
      y: 450,
      amount: 2,
      r: 0
    }, {
      x: 13150,
      y: 550,
      w: 2300,
      h: 100,
      r: 0
    }, {
      type: 'sign',
      x: 12150,
      y: 470,
      text: "The final stretch.\nChoke here and it's back to halfway!"
    }, {
      type: 'boing',
      x: 12450,
      y: 450,
      s: 50,
      r: 220,
      speed: 4
    }, {
      type: 'spike',
      x: 12750,
      y: 490,
      amount: 5,
      r: 0
    }, {
      type: 'conveyorbelt',
      x: 13450,
      y: 490,
      w: 500,
      h: 20,
      d: 1,
      r: 0
    },
    //{type: 'boing', x: 13450, y: 420, s: 55, r: 200, speed: 5.0}, 
    {
      type: 'spike',
      x: 13800,
      y: 490,
      amount: 6,
      r: 0
    }, {
      type: 'sign',
      x: 14000,
      y: 470,
      text: "Unbelievable!\nYou conquered Boingland!"
    }],
    portal: {
      x: 14150,
      y: 533,
      w: 100,
      h: 100
    },
    spawn: {
      x: 150,
      y: 400
    }
  }, {
    objects: [
    // Left platform [
    {
      x: 1200,
      y: 545,
      w: 2600,
      h: 150,
      r: 0
    }, {
      type: 'sign',
      x: 240,
      y: 440,
      text: "Ready for your 2nd boss fight?"
    }, {
      type: 'lava',
      x: 450,
      y: 520,
      w: 280,
      h: 100
    }, {
      type: 'boing',
      x: 750,
      y: 450,
      s: 60,
      r: 160,
      speed: 3
    }, {
      type: 'spike',
      x: 950,
      y: 460,
      amount: 10,
      r: 0
    }, {
      type: 'conveyorbelt',
      x: 1200,
      y: 452,
      w: 300,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'conveyorbelt',
      x: 1800,
      y: 452,
      w: 300,
      h: 30,
      d: -1,
      r: 0
    }, {
      type: 'lava',
      x: 1600,
      y: 520,
      w: 280,
      h: 100
    }, {
      type: 'boing',
      x: 1800,
      y: 450,
      s: 60,
      r: 160,
      speed: 3
    }, {
      type: 'lava',
      x: 2200,
      y: 520,
      w: 280,
      h: 100
    }, {
      type: 'launcher',
      x: 2420,
      y: 458,
      w: 110,
      h: 30,
      targetX: 3000,
      targetY: -1100
    },
    //]

    // Middle platform [
    {
      x: 4200,
      y: -645,
      w: 2600,
      h: 150,
      r: 0
    }, {
      type: 'trampoline',
      x: 3090,
      y: -729,
      w: 160,
      h: 20
    }, {
      type: 'lava',
      x: 3420,
      y: -670,
      w: 500,
      h: 100
    }, {
      type: 'trampoline',
      x: 3750,
      y: -729,
      w: 160,
      h: 20
    }, {
      type: 'lava',
      x: 4080,
      y: -670,
      w: 500,
      h: 100
    }, {
      type: 'trampoline',
      x: 4410,
      y: -729,
      w: 160,
      h: 20
    }, {
      type: 'lava',
      x: 4740,
      y: -670,
      w: 500,
      h: 100
    }, {
      type: 'boing',
      x: 5200,
      y: -750,
      s: 60,
      r: 160,
      speed: 3
    }, {
      type: 'launcher',
      x: 5420,
      y: -730,
      w: 110,
      h: 30,
      targetX: 8300,
      targetY: 400
    },
    //]

    // Right platform [
    {
      x: 7200,
      y: 545,
      w: 2600,
      h: 150,
      r: 0
    }, {
      type: 'spike',
      x: 8000,
      y: 460,
      r: 0,
      amount: 11
    }, {
      type: 'conveyorbelt',
      x: 7680,
      y: 452,
      w: 300,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'lava',
      x: 7300,
      y: 520,
      w: 200,
      h: 100
    }, {
      type: 'lava',
      x: 7000,
      y: 520,
      w: 200,
      h: 100
    }, {
      type: 'boing',
      x: 7150,
      y: 450,
      s: 60,
      r: 160,
      speed: 3.2
    }, {
      type: 'spike',
      x: 6700,
      y: 460,
      r: 0,
      amount: 11
    }, {
      type: 'sign',
      x: 6250,
      y: 440,
      text: "Here he is!"
    }, {
      type: 'launcher',
      x: 6000,
      y: 458,
      w: 110,
      h: 30,
      targetX: 5200,
      targetY: 600
    }, {
      type: 'checkpoint',
      x: 6400,
      y: 435,
      w: 60,
      h: 70
    },
    //]

    // Base
    {
      x: 4200,
      y: 1045,
      w: 2400,
      h: 600,
      r: 0
    }],
    spawn: {
      x: 100,
      y: 400
    },
    arenaY: 0
  },
  // area 3
  {
    objects: [{
      x: 1200,
      y: 600,
      w: 2400,
      h: 200,
      r: 0
    }, {
      type: 'sign',
      x: 300,
      y: 470,
      text: "Welcome to Area 3!\nHope you enjoy your stay."
    }, {
      type: 'spike',
      x: 500,
      y: 489,
      r: 0,
      amount: 3
    }, {
      type: 'sign',
      x: 750,
      y: 470,
      text: "This is ZAPP.\nDon't touch him, he won't mind you."
    }, {
      type: 'zapp',
      x: 1050,
      y: 428,
      s: 90,
      r: 150,
      speed: 2
    }, {
      type: 'spike',
      x: 1650,
      y: 459,
      r: 0,
      amount: 2
    }, {
      type: 'conveyorbelt',
      x: 1650,
      y: 485,
      w: 500,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'spike',
      x: 2050,
      y: 489,
      r: 0,
      amount: 4
    }, {
      type: 'lava',
      x: 2250,
      y: 550,
      w: 120,
      h: 100
    }, {
      type: 'lava',
      x: 2480,
      y: 650,
      w: 160,
      h: 100
    }, {
      x: 2832,
      y: 423,
      w: 600,
      h: 100,
      r: -25
    }, {
      type: 'spike',
      x: 2720,
      y: 409,
      r: -25,
      amount: 2
    }, {
      type: 'spike',
      x: 2944,
      y: 305,
      r: -25,
      amount: 2
    }, {
      x: 4452,
      y: 396,
      w: 2696,
      h: 200,
      r: 0
    }, {
      type: 'sign',
      x: 3400,
      y: 266,
      text: "Time your jump well!"
    }, {
      type: 'lava',
      x: 3900,
      y: 346,
      w: 260,
      h: 100
    }, {
      type: 'zapp',
      x: 3900,
      y: 216,
      s: 100,
      r: 200,
      speed: 2
    }, {
      type: 'boing',
      x: 4400,
      y: 246,
      s: 50,
      r: 120,
      speed: 3
    }, {
      type: 'spike',
      x: 4900,
      y: 255,
      r: 0,
      amount: 4
    }, {
      type: 'conveyorbelt',
      x: 4900,
      y: 281,
      w: 500,
      h: 30,
      d: -1,
      r: 0
    }, {
      type: 'spike',
      x: 5400,
      y: 285,
      r: 0,
      amount: 5
    }, {
      x: 6300,
      y: 600,
      w: 1000,
      h: 200,
      r: 0
    },
    // Platform 3A (5800 to 6800)
    {
      x: 7100,
      y: 600,
      w: 400,
      h: 200,
      r: 0
    },
    // Platform 3B (6800 to 7400) - Checkpoint Safety Zone
    {
      x: 8150,
      y: 600,
      w: 1500,
      h: 200,
      r: 0
    },
    // Platform 3C (7400 to 8900) - Post-Checkpoint

    {
      type: 'spike',
      x: 5950,
      y: 489,
      r: 0,
      amount: 3
    }, {
      type: 'lava',
      x: 6150,
      y: 550,
      w: 120,
      h: 100
    }, {
      type: 'spike',
      x: 6500,
      y: 459,
      r: 0,
      amount: 3
    }, {
      type: 'conveyorbelt',
      x: 6500,
      y: 485,
      w: 400,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'checkpoint',
      x: 7000,
      y: 465,
      w: 60,
      h: 70
    }, {
      type: 'sign',
      x: 7120,
      y: 470,
      text: "Halfway! Congrats!"
    }, {
      type: 'spike',
      x: 7550,
      y: 489,
      r: 0,
      amount: 4
    }, {
      type: 'lava',
      x: 7900,
      y: 550,
      w: 260,
      h: 100
    }, {
      type: 'zapp',
      x: 7900,
      y: 428,
      s: 90,
      r: 150,
      speed: 2.5
    }, {
      type: 'lava',
      x: 8400,
      y: 550,
      w: 150,
      h: 100
    }, {
      type: 'trampoline',
      x: 8800,
      y: 492,
      h: 15,
      w: 100
    }, {
      type: 'lava',
      x: 9025,
      y: 650,
      w: 250,
      h: 100
    }, {
      x: 10500,
      y: 600,
      w: 2700,
      h: 200,
      r: 0
    }, {
      type: 'sign',
      x: 9350,
      y: 470,
      text: "Not bad!"
    }, {
      type: 'spike',
      x: 9750,
      y: 459,
      r: 0,
      amount: 2
    }, {
      type: 'conveyorbelt',
      x: 9750,
      y: 485,
      w: 500,
      h: 30,
      d: -1,
      r: 0
    }, {
      type: 'lava',
      x: 10200,
      y: 550,
      w: 250,
      h: 100
    }, {
      type: 'boing',
      x: 10600,
      y: 450,
      s: 50,
      r: 120,
      speed: 4
    }, {
      type: 'spike',
      x: 11100,
      y: 489,
      r: 0,
      amount: 6
    }, {
      type: 'lava',
      x: 11600,
      y: 550,
      w: 200,
      h: 100
    }, {
      x: 13100,
      y: 600,
      w: 2200,
      h: 200,
      r: 0
    }, {
      type: 'sign',
      x: 12200,
      y: 470,
      text: "You're nearing the end!"
    }, {
      type: 'lava',
      x: 12650,
      y: 550,
      w: 260,
      h: 100
    }, {
      type: 'zapp',
      x: 12650,
      y: 412,
      s: 110,
      r: 250,
      speed: 1.5
    }, {
      type: 'boing',
      x: 13150,
      y: 450,
      s: 50,
      r: 100,
      speed: 3.5
    },
    // Final exit stretch
    {
      type: 'spike',
      x: 13550,
      y: 459,
      r: 0,
      amount: 2
    }, {
      type: 'conveyorbelt',
      x: 13550,
      y: 485,
      w: 500,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'spike',
      x: 13950,
      y: 489,
      r: 0,
      amount: 4
    }, {
      type: 'sign',
      x: 14030,
      y: 470,
      text: "Liking Area 3?"
    }],
    portal: {
      x: 14120,
      y: 492,
      w: 130,
      h: 16
    },
    spawn: {
      x: 100,
      y: 400
    }
  }, {
    objects: [
    // Base
    {
      x: 1050,
      y: 545,
      w: 2600,
      h: 150,
      r: 0
    }, {
      type: 'sign',
      x: 540,
      y: 440,
      text: "Now entering Zappland!"
    }, {
      type: 'zapp',
      x: 800,
      y: 410,
      s: 75,
      r: 180,
      speed: 2.5
    }, {
      x: 2850,
      y: 700,
      w: 1400,
      h: 600,
      r: 0
    }, {
      type: 'spike',
      x: 2300,
      y: 389,
      r: 0,
      amount: 4
    }, {
      type: 'lava',
      x: 2550,
      y: 450,
      w: 180,
      h: 100
    }, {
      type: 'boing',
      x: 2800,
      y: 350,
      s: 60,
      r: 150,
      speed: 4.0
    }, {
      type: 'conveyorbelt',
      x: 3100,
      y: 385,
      w: 300,
      h: 30,
      d: -1,
      r: 0
    }, {
      type: 'zapp',
      x: 3100,
      y: 230,
      s: 90,
      r: 140,
      speed: 3.0
    }, {
      type: 'spike',
      x: 3400,
      y: 389,
      r: 0,
      amount: 5
    }, {
      x: 4490,
      y: 850,
      w: 1600,
      h: 800,
      r: 0
    }, {
      type: 'sign',
      x: 3850,
      y: 420,
      text: "Doing great so far!"
    }, {
      type: 'spike',
      x: 4050,
      y: 439,
      r: 0,
      amount: 3
    }, {
      type: 'lava',
      x: 4300,
      y: 500,
      w: 200,
      h: 100
    }, {
      type: 'zapp',
      x: 4300,
      y: 370,
      s: 100,
      r: 110,
      speed: 4.2
    }, {
      type: 'conveyorbelt',
      x: 4650,
      y: 435,
      w: 350,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'boing',
      x: 4950,
      y: 400,
      s: 50,
      r: 120,
      speed: 4.5
    }, {
      type: 'trampoline',
      x: 5150,
      y: 443,
      w: 100,
      h: 15
    }, {
      x: 6250,
      y: 700,
      w: 1800,
      h: 800,
      r: 0
    }, {
      type: 'checkpoint',
      x: 5500,
      y: 265,
      w: 60,
      h: 70
    }, {
      type: 'sign',
      x: 5650,
      y: 270,
      text: "Checkpoint reached.\nHope you like dodging."
    }, {
      type: 'conveyorbelt',
      x: 5950,
      y: 285,
      w: 400,
      h: 30,
      d: -1,
      r: 0
    }, {
      type: 'zapp',
      x: 5950,
      y: 150,
      s: 90,
      r: 130,
      speed: 3.8
    }, {
      type: 'lava',
      x: 6350,
      y: 350,
      w: 250,
      h: 100
    }, {
      type: 'boing',
      x: 6550,
      y: 250,
      s: 60,
      r: 140,
      speed: 4.8
    }, {
      type: 'spike',
      x: 6750,
      y: 289,
      r: 0,
      amount: 5
    }, {
      type: 'trampoline',
      x: 7000,
      y: 293,
      w: 100,
      h: 15
    }, {
      x: 8000,
      y: 450,
      w: 1500,
      h: 600,
      r: 0
    }, {
      type: 'spike',
      x: 7450,
      y: 139,
      r: 0,
      amount: 4
    }, {
      type: 'lava',
      x: 7750,
      y: 200,
      w: 200,
      h: 100
    }, {
      type: 'zapp',
      x: 7800,
      y: 70,
      s: 100,
      r: 120,
      speed: 3.5
    }, {
      type: 'conveyorbelt',
      x: 8150,
      y: 135,
      w: 350,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'boing',
      x: 8150,
      y: 80,
      s: 50,
      r: 120,
      speed: 4.5
    }, {
      type: 'spike',
      x: 8500,
      y: 139,
      r: 0,
      amount: 6
    }, {
      type: 'trampoline',
      x: 8650,
      y: 143,
      w: 80,
      h: 15
    }, {
      x: 9750,
      y: 700,
      w: 1800,
      h: 400,
      r: 0
    }, {
      type: 'sign',
      x: 9050,
      y: 470,
      text: "Final sprint!"
    }, {
      type: 'lava',
      x: 9350,
      y: 550,
      w: 300,
      h: 100
    }, {
      type: 'zapp',
      x: 9350,
      y: 430,
      s: 90,
      r: 130,
      speed: 3.8
    }, {
      type: 'spike',
      x: 9700,
      y: 489,
      r: 0,
      amount: 5
    }, {
      type: 'conveyorbelt',
      x: 10200,
      y: 485,
      w: 400,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'spike',
      x: 10450,
      y: 489,
      r: 0,
      amount: 3
    }],
    portal: {
      x: 10550,
      y: 491,
      w: 130,
      h: 16
    },
    spawn: {
      x: 0,
      y: 400
    }
  }, {
    objects: [{
      x: 1000,
      y: 600,
      w: 2000,
      h: 200,
      r: 0
    }, {
      type: 'arrowSign',
      x: 180,
      y: 440,
      w: 110,
      h: 30,
      way: 'right'
    }, {
      type: 'sign',
      x: 400,
      y: 470,
      text: "Not many players make it this far."
    }, {
      type: 'spike',
      x: 700,
      y: 489,
      r: 0,
      amount: 4
    }, {
      type: 'zapp',
      x: 950,
      y: 435,
      s: 80,
      r: 90,
      speed: 2.2
    }, {
      type: 'spike',
      x: 1200,
      y: 489,
      r: 0,
      amount: 3
    }, {
      type: 'boing',
      x: 1450,
      y: 450,
      s: 60,
      r: 200,
      speed: 3.0
    }, {
      type: 'spike',
      x: 1750,
      y: 489,
      r: 0,
      amount: 4
    }, {
      type: 'lava',
      x: 2500,
      y: 650,
      w: 1000,
      h: 100
    }, {
      type: 'conveyorbelt',
      x: 2200,
      y: 500,
      w: 400,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'zapp',
      x: 2200,
      y: 425,
      s: 75,
      r: 80,
      speed: 2.5
    }, {
      type: 'conveyorbelt',
      x: 2700,
      y: 500,
      w: 400,
      h: 30,
      d: -1,
      r: 0
    }, {
      type: 'boing',
      x: 2700,
      y: 430,
      s: 60,
      r: 200,
      speed: 3.5
    }, {
      x: 3600,
      y: 600,
      w: 1200,
      h: 200,
      r: 0
    }, {
      type: 'spike',
      x: 3300,
      y: 489,
      r: 0,
      amount: 4
    }, {
      type: 'zapp',
      x: 3600,
      y: 390,
      s: 80,
      r: 110,
      speed: 2.0
    }, {
      type: 'spike',
      x: 3900,
      y: 489,
      r: 0,
      amount: 4
    }, {
      type: 'trampoline',
      x: 4150,
      y: 492,
      h: 15,
      w: 90
    }, {
      x: 4700,
      y: 530,
      w: 800,
      h: 100,
      r: -15
    }, {
      type: 'spike',
      x: 4450,
      y: 535,
      r: -15,
      amount: 3
    }, {
      type: 'spike',
      x: 4700,
      y: 467,
      r: -15,
      amount: 3
    }, {
      type: 'spike',
      x: 4950,
      y: 401,
      r: -15,
      amount: 3
    }, {
      x: 5500,
      y: 600,
      w: 800,
      h: 200,
      r: 0
    }, {
      type: 'zapp',
      x: 5350,
      y: 435,
      s: 80,
      r: 120,
      speed: 2.4
    }, {
      type: 'spike',
      x: 5550,
      y: 489,
      r: 0,
      amount: 4
    }, {
      type: 'boing',
      x: 5750,
      y: 430,
      s: 60,
      r: 200,
      speed: 3.2
    }, {
      x: 6200,
      y: 600,
      w: 500,
      h: 200,
      r: 0
    }, {
      type: 'checkpoint',
      x: 6000,
      y: 465,
      w: 60,
      h: 70
    }, {
      type: 'sign',
      x: 6200,
      y: 470,
      text: "Take a breath.\nYou're halfway."
    }, {
      type: 'lava',
      x: 7100,
      y: 650,
      w: 1200,
      h: 100
    }, {
      type: 'conveyorbelt',
      x: 6700,
      y: 500,
      w: 400,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'zapp',
      x: 6700,
      y: 420,
      s: 75,
      r: 100,
      speed: 2.8
    }, {
      type: 'conveyorbelt',
      x: 7200,
      y: 440,
      w: 400,
      h: 30,
      d: -1,
      r: 0
    }, {
      type: 'spike',
      x: 7100,
      y: 412,
      r: 0,
      amount: 2
    }, {
      type: 'boing',
      x: 7300,
      y: 370,
      s: 65,
      r: 200,
      speed: 2.5
    }, {
      type: 'conveyorbelt',
      x: 7700,
      y: 500,
      w: 400,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'zapp',
      x: 7700,
      y: 410,
      s: 80,
      r: 150,
      speed: 2.0
    }, {
      x: 8400,
      y: 600,
      w: 1000,
      h: 200,
      r: 0
    }, {
      type: 'spike',
      x: 8100,
      y: 489,
      r: 0,
      amount: 4
    }, {
      type: 'boing',
      x: 8350,
      y: 430,
      s: 70,
      r: 250,
      speed: 3.0
    }, {
      type: 'spike',
      x: 8600,
      y: 489,
      r: 0,
      amount: 4
    }, {
      x: 9100,
      y: 530,
      w: 800,
      h: 100,
      r: 15
    }, {
      type: 'spike',
      x: 8850,
      y: 401,
      r: 15,
      amount: 9
    }, {
      type: 'spike',
      x: 9100,
      y: 468,
      r: 15,
      amount: 9
    }, {
      type: 'spike',
      x: 9350,
      y: 535,
      r: 15,
      amount: 9
    }, {
      x: 10000,
      y: 600,
      w: 1000,
      h: 200,
      r: 0
    }, {
      type: 'zapp',
      x: 9700,
      y: 430,
      s: 80,
      r: 120,
      speed: 2.5
    }, {
      type: 'spike',
      x: 9950,
      y: 489,
      r: 0,
      amount: 4
    }, {
      type: 'boing',
      x: 10200,
      y: 430,
      s: 70,
      r: 200,
      speed: 3.5
    }, {
      type: 'spike',
      x: 10450,
      y: 489,
      r: 0,
      amount: 1
    }, {
      type: 'lava',
      x: 11100,
      y: 650,
      w: 1200,
      h: 100
    }, {
      x: 10750,
      y: 530,
      w: 200,
      h: 50,
      r: 0
    }, {
      type: 'trampoline',
      x: 10750,
      y: 497,
      h: 15,
      w: 85
    }, {
      type: 'zapp',
      x: 10750,
      y: 440,
      s: 65,
      r: 250,
      speed: 3.0
    }, {
      x: 11150,
      y: 490,
      w: 200,
      h: 50,
      r: 0
    }, {
      type: 'spike',
      x: 11150,
      y: 454,
      r: 0,
      amount: 1
    }, {
      x: 11550,
      y: 530,
      w: 200,
      h: 50,
      r: 0
    }, {
      type: 'trampoline',
      x: 11550,
      y: 497,
      h: 15,
      w: 85
    }, {
      x: 12300,
      y: 600,
      w: 1400,
      h: 200,
      r: 0
    }, {
      type: 'spike',
      x: 11850,
      y: 489,
      r: 0,
      amount: 5
    }, {
      type: 'conveyorbelt',
      x: 12150,
      y: 485,
      w: 400,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'zapp',
      x: 12150,
      y: 400,
      s: 85,
      r: 180,
      speed: 2.2
    }, {
      type: 'spike',
      x: 12500,
      y: 489,
      r: 0,
      amount: 5
    }, {
      type: 'boing',
      x: 12700,
      y: 430,
      s: 75,
      r: 250,
      speed: 3.2
    }, {
      type: 'spike',
      x: 12900,
      y: 489,
      r: 0,
      amount: 4
    }],
    portal: {
      x: 13300,
      y: 492,
      w: 130,
      h: 16
    },
    spawn: {
      x: 100,
      y: 450
    }
  }, {
    objects: [{
      x: 300,
      y: 45,
      w: 1000,
      h: 150,
      r: 0
    }, {
      type: 'arrowSign',
      x: -100,
      y: -90,
      w: 110,
      h: 30,
      way: 'right'
    }, {
      type: 'sign',
      x: 200,
      y: -60,
      text: 'This boss is one giant maze...\n\nChannel your inner GPS!'
    }, {
      type: 'lava',
      x: 400,
      y: 20,
      w: 250,
      h: 100
    }, {
      x: 550,
      y: -655,
      w: 500,
      h: 600,
      r: 0
    }, {
      x: 1050,
      y: -755,
      w: 700,
      h: 400,
      r: 0
    }, {
      x: 1550,
      y: -855,
      w: 700,
      h: 200,
      r: 0
    }, {
      x: 700,
      y: 155,
      w: 800,
      h: 150,
      r: 0
    }, {
      x: 800,
      y: 255,
      w: 1000,
      h: 150,
      r: 0
    }, {
      x: 1600,
      y: 355,
      w: 2000,
      h: 150,
      r: 0
    },
    // Section 1 (bottom) obstacles [
    {
      type: 'lava',
      x: 875,
      y: 130,
      w: 150,
      h: 100
    }, {
      type: 'spike',
      x: 1150,
      y: 170,
      r: 0,
      amount: 2
    }, {
      type: 'spike',
      x: 1650,
      y: 270,
      r: 0,
      amount: 3
    }, {
      type: 'zapp',
      x: 3500,
      y: 520,
      s: 100,
      r: 190,
      speed: 2.2
    }, {
      type: 'launcher',
      x: 5400,
      y: 589,
      w: 110,
      h: 30,
      targetX: 4300,
      targetY: -350
    },
    //]

    {
      x: 2600,
      y: 176,
      w: 400,
      h: 80,
      r: 0
    }, {
      x: 3800,
      y: 176,
      w: 1600,
      h: 150,
      r: 0
    }, {
      x: 3800,
      y: 300,
      w: 800,
      h: 150,
      r: 0
    }, {
      x: 3700,
      y: 100,
      w: 1000,
      h: 200,
      r: 0
    }, {
      x: 4200,
      y: 20,
      w: 1400,
      h: 300,
      r: 0
    }, {
      x: 4500,
      y: -100,
      w: 1000,
      h: 300,
      r: 0
    },
    // Section 3 obstacles [
    {
      type: 'lava',
      x: 2600,
      y: 170,
      w: 150,
      h: 70
    }, {
      type: 'conveyorbelt',
      x: 4500,
      y: -268,
      w: 400,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'lava',
      x: 4800,
      y: -175,
      w: 200,
      h: 150
    }, {
      type: 'spike',
      x: 3750,
      y: -380,
      r: 0,
      amount: 3
    }, {
      type: 'spike',
      x: 3350,
      y: -10,
      r: 0,
      amount: 5
    },
    //]

    {
      x: 2500,
      y: 575,
      w: 800,
      h: 300,
      r: 0
    }, {
      x: 3000,
      y: 750,
      w: 5400,
      h: 300,
      r: 0
    }, {
      x: 3750,
      y: -345,
      w: 200,
      h: 50,
      r: 0
    }, {
      x: 2750,
      y: -400,
      w: 1500,
      h: 100,
      r: 0
    }, {
      x: 2500,
      y: -300,
      w: 2000,
      h: 150,
      r: 0
    }, {
      x: 1500,
      y: -160,
      w: 1000,
      h: 150,
      r: 0
    }, {
      x: 1150,
      y: -100,
      w: 500,
      h: 50,
      r: 0
    },
    // Section 2 obstacles [
    {
      type: 'conveyorbelt',
      x: 1300,
      y: -252,
      w: 400,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'spike',
      x: 1800,
      y: -385,
      r: 0,
      amount: 5
    }, {
      type: 'lava',
      x: 2150,
      y: -375,
      w: 150,
      h: 150
    }, {
      type: 'lava',
      x: 2400,
      y: -375,
      w: 150,
      h: 150
    }, {
      type: 'lava',
      x: 2650,
      y: -375,
      w: 150,
      h: 150
    }, {
      type: 'launcher',
      x: 3100,
      y: -463,
      w: 110,
      h: 30,
      targetX: 2800,
      targetY: -1100
    },
    //]

    {
      x: 1700,
      y: -900,
      w: 2600,
      h: 150,
      r: 0
    },
    // Section 4 obstacles [

    {
      type: 'zapp',
      x: 2400,
      y: -1057,
      s: 100,
      r: 200,
      speed: 2.2
    }, {
      type: 'zapp',
      x: 1400,
      y: -1057,
      s: 100,
      r: 200,
      speed: 2.2
    }, {
      type: 'trampoline',
      x: 1650,
      y: -990,
      w: 100,
      h: 30,
      speed: 2.2
    }, {
      type: 'spike',
      x: 1300,
      y: -1360,
      r: 0,
      amount: 5
    }, {
      x: 2400,
      y: -1350,
      w: 400,
      h: 250,
      r: 0
    }, {
      type: 'lava',
      x: 2400,
      y: -1400,
      w: 150,
      h: 150
    }, {
      x: 2950,
      y: -1470,
      w: 800,
      h: 250,
      r: 0
    },
    //]

    // Section 5 obstacles [
    {
      type: 'spike',
      x: 2800,
      y: -1605,
      r: 0,
      amount: 5
    }, {
      type: 'lava',
      x: 3100,
      y: -1520,
      w: 150,
      h: 150
    }, {
      x: 3700,
      y: -1520,
      w: 800,
      h: 350,
      r: 0
    }, {
      type: 'spike',
      x: 3500,
      y: -1705,
      r: 0,
      amount: 2
    }, {
      type: 'boing',
      x: 3400,
      y: -1730,
      s: 60,
      r: 200,
      speed: 2.2
    }, {
      type: 'lava',
      x: 3800,
      y: -1620,
      w: 150,
      h: 150
    }, {
      x: 4500,
      y: -1420,
      w: 1000,
      h: 300,
      r: 0
    }, {
      x: 5500,
      y: -1400,
      w: 1300,
      h: 200,
      r: 0
    }, {
      type: 'lava',
      x: 4200,
      y: -1495,
      w: 150,
      h: 150
    }, {
      type: 'conveyorbelt',
      x: 4470,
      y: -1585,
      w: 400,
      h: 30,
      d: -1,
      r: 0
    }, {
      x: 2000,
      y: -1000,
      w: 500,
      h: 200,
      r: 0
    }, {
      x: 1300,
      y: -1300,
      w: 500,
      h: 100,
      r: 0
    }, {
      x: 1850,
      y: -1400,
      w: 400,
      h: 150,
      r: 0
    }, {
      type: 'zapp',
      x: 5300,
      y: -1580,
      s: 100,
      r: 200,
      speed: 2.2
    }, {
      type: 'sign',
      x: 5700,
      y: -1530,
      text: 'Wow, I can\'t\nbelieve you made it!\n\nNow its time to fight\nthe Area 3 Boss...'
    }, {
      type: 'launcher',
      x: 6000,
      y: -1512,
      w: 110,
      h: 30,
      targetX: 5600,
      targetY: -2500
    },
    //]

    // wall segments
    {
      x: 5600,
      y: -400,
      w: 200,
      h: 2200,
      r: 0
    }, {
      x: 5600,
      y: -1900,
      w: 200,
      h: 450,
      r: 0
    }, {
      x: 3000,
      y: -2150,
      w: 5400,
      h: 400,
      r: 0
    }, {
      x: 400,
      y: -1255,
      w: 200,
      h: 1790,
      r: 0
    }, {
      x: 4550,
      y: -1050,
      w: 2000,
      h: 700,
      r: 0
    }, {
      type: 'checkpoint',
      x: 5800,
      y: -1535,
      w: 60,
      h: 70
    }],
    arenaY: 0,
    spawn: {
      x: 100,
      y: -200
    }
  },
  // area x (you didnt see nothin)
  {
    objects: [
    // Base
    {
      x: 1050,
      y: 545,
      w: 2600,
      h: 150,
      r: 0
    }, {
      type: 'sign',
      x: 540,
      y: 440,
      text: "Welcome to the finale of\nthe Parkour Challenge.\nYou, Dash, must be pushed to the\nlimits if you wish to\nbecome Parkour Champion."
    }, {
      type: 'sign',
      x: 1140,
      y: 440,
      text: "This is poison.\nIt is like lava,\nbut it hurts quite a bit more."
    }, {
      type: 'poison',
      x: 1360,
      y: 520,
      w: 300,
      h: 100
    }, {
      type: 'lava',
      x: 1660,
      y: 520,
      w: 150,
      h: 100
    }, {
      type: 'spike',
      x: 1820,
      y: 459,
      r: 0,
      amount: 4
    }, {
      type: 'spike',
      x: 1975,
      y: 459,
      r: 0,
      amount: 5
    }, {
      x: 3850,
      y: 500,
      w: 2600,
      h: 275,
      r: 0
    }, {
      type: 'poison',
      x: 2900,
      y: 512,
      w: 120,
      h: 300
    }, {
      type: 'lava',
      x: 3100,
      y: 512,
      w: 120,
      h: 300
    }, {
      type: 'spike',
      x: 3000,
      y: 352,
      r: 0,
      amount: 1
    }, {
      type: 'zapp',
      x: 3400,
      y: 278,
      s: 100,
      r: 200,
      speed: 2,
      variant: 'X'
    }, {
      type: 'spike',
      x: 3800,
      y: 352,
      r: 0,
      amount: 11
    }, {
      type: 'poison',
      x: 4100,
      y: 437,
      w: 120,
      h: 150
    }, {
      type: 'lava',
      x: 4250,
      y: 437,
      w: 120,
      h: 150
    }, {
      type: 'trampoline',
      x: 4500,
      y: 355,
      h: 15,
      w: 100
    }, {
      type: 'poison',
      x: 4755,
      y: 437,
      w: 400,
      h: 150
    }, {
      x: 6700,
      y: 545,
      w: 2600,
      h: 150,
      r: 0
    }, {
      type: 'poison',
      x: 5700,
      y: 520,
      w: 300,
      h: 100
    }, {
      type: 'poison',
      x: 6050,
      y: 520,
      w: 300,
      h: 100
    }, {
      type: 'spike',
      x: 6300,
      y: 459,
      r: 0,
      amount: 4
    }, {
      type: 'conveyorbelt',
      x: 6700,
      y: 451,
      w: 400,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'spike',
      x: 6600,
      y: 429,
      r: 0,
      amount: 4
    }, {
      type: 'spike',
      x: 6800,
      y: 429,
      r: 0,
      amount: 4
    }, {
      type: 'poison',
      x: 7050,
      y: 520,
      w: 300,
      h: 100
    }, {
      type: 'poison',
      x: 7350,
      y: 520,
      w: 200,
      h: 100
    }, {
      type: 'checkpoint',
      x: 7500,
      y: 435,
      w: 60,
      h: 70
    }, {
      type: 'spike',
      x: 7700,
      y: 459,
      r: 0,
      amount: 4
    }, {
      type: 'spike',
      x: 7850,
      y: 459,
      r: 0,
      amount: 4
    }, {
      x: 8100,
      y: 545,
      w: 20,
      h: 180,
      r: 0
    }, {
      x: 8200,
      y: 545,
      w: 20,
      h: 180,
      r: 0
    }, {
      x: 8300,
      y: 545,
      w: 20,
      h: 180,
      r: 0
    }, {
      x: 8500,
      y: 545,
      w: 20,
      h: 380,
      r: 0
    }, {
      x: 8600,
      y: 545,
      w: 20,
      h: 380,
      r: 0
    }, {
      x: 8700,
      y: 545,
      w: 20,
      h: 380,
      r: 0
    }, {
      x: 8800,
      y: 545,
      w: 20,
      h: 380,
      r: 0
    }, {
      type: 'conveyorbelt',
      x: 8150,
      y: 451,
      w: 400,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'zapp',
      x: 8100,
      y: 348,
      s: 100,
      r: 100,
      speed: 2
    }, {
      type: 'poison',
      x: 8450,
      y: 580,
      w: 900,
      h: 100
    }, {
      type: 'zapp',
      x: 8600,
      y: 250,
      s: 100,
      r: 100,
      speed: 2,
      variant: 'X'
    }, {
      type: 'conveyorbelt',
      x: 8650,
      y: 351,
      w: 400,
      h: 30,
      d: -1,
      r: 0
    }, {
      x: 10200,
      y: 545,
      w: 2600,
      h: 150,
      r: 0
    }, {
      type: 'boing',
      x: 9200,
      y: 430,
      s: 60,
      r: 200,
      speed: 5,
      variant: 'X'
    }, {
      type: 'boing',
      x: 9200,
      y: 430,
      s: 60,
      r: 200,
      speed: 4
    }, {
      type: 'boing',
      x: 9200,
      y: 430,
      s: 60,
      r: 200,
      speed: 3,
      variant: 'X'
    }, {
      type: 'zapp',
      x: 9200,
      y: 386,
      s: 100,
      r: 200,
      speed: 1
    }, {
      type: 'sign',
      x: 10000,
      y: 440,
      text: "Ragequit yet?\nYou're 67% there!"
    }, {
      type: 'trampoline',
      x: 10150,
      y: 463,
      h: 15,
      w: 100
    }, {
      type: 'spike',
      x: 10350,
      y: 459,
      r: 0,
      amount: 13
    }, {
      x: 10400,
      y: 145,
      w: 80,
      h: 20,
      r: 20
    }, {
      x: 10500,
      y: 45,
      w: 80,
      h: 20,
      r: -20
    }, {
      x: 10400,
      y: -55,
      w: 80,
      h: 20,
      r: 20
    }, {
      x: 10500,
      y: -155,
      w: 80,
      h: 20,
      r: -20
    }, {
      x: 10400,
      y: -255,
      w: 80,
      h: 20,
      r: 20
    }, {
      x: 10500,
      y: -355,
      w: 80,
      h: 20,
      r: -20
    }, {
      x: 10800,
      y: 155,
      w: 140,
      h: 820,
      r: 0
    }, {
      type: 'launcher',
      x: 10800,
      y: -265,
      w: 110,
      h: 30,
      targetX: 12800,
      targetY: 0
    }, {
      x: 12770,
      y: 155,
      w: 140,
      h: 20,
      r: 0
    }, {
      x: 12770,
      y: 155,
      w: 140,
      h: 20,
      r: 30
    }, {
      x: 12770,
      y: 155,
      w: 140,
      h: 20,
      r: -30
    }, {
      x: 13000,
      y: 155,
      w: 100,
      h: 20,
      r: 40
    }, {
      x: 13300,
      y: 155,
      w: 140,
      h: 20,
      r: 10
    }, {
      x: 13600,
      y: 125,
      w: 140,
      h: 20,
      r: 5
    }, {
      x: 13800,
      y: 100,
      w: 140,
      h: 20,
      r: 0
    }, {
      x: 14200,
      y: 80,
      w: 110,
      h: 20,
      r: 0
    }, {
      type: 'conveyorbelt',
      x: 14450,
      y: 300,
      w: 400,
      h: 30,
      d: 1,
      r: 60
    }, {
      x: 14800,
      y: 480,
      w: 550,
      h: 20,
      r: 0
    }],
    portal: {
      x: 15000,
      y: 462,
      w: 130,
      h: 16
    },
    spawn: {
      x: 100,
      y: 240
    }
  }, {
    objects: [
    // Base
    {
      x: -800,
      y: 545,
      w: 2600,
      h: 150,
      r: 0
    }, {
      type: 'hyperbelt',
      x: -700,
      y: 451,
      w: 400,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'sign',
      x: -340,
      y: 440,
      text: "Hop on this hyperbelt,\nbut watch for abnormal spikes."
    }, {
      type: 'hyperbelt',
      x: -2400,
      y: 451,
      w: 400,
      h: 30,
      d: -1,
      r: 0
    }, {
      type: 'conveyorbelt',
      x: -2900,
      y: 432,
      w: 300,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'thorn',
      x: -1500,
      y: 470,
      s: 50,
      r: 200,
      speed: 2
    }, {
      type: 'spike',
      x: -1200,
      y: 459,
      r: 0,
      amount: 5
    }, {
      x: -4500,
      y: 545,
      w: 2600,
      h: 150,
      r: 0
    }, {
      type: 'zapp',
      x: -3000,
      y: 330,
      s: 100,
      r: 200,
      speed: 2,
      variant: 'X'
    }, {
      type: 'thorn',
      x: -3500,
      y: 470,
      s: 50,
      r: 200,
      speed: 2
    }, {
      type: 'thorn',
      x: -3700,
      y: 470,
      s: 50,
      r: 200,
      speed: 2
    }, {
      type: 'hyperbelt',
      x: -4000,
      y: 388,
      w: 400,
      h: 30,
      d: -1,
      r: 20
    }, {
      type: 'spike',
      x: -4000,
      y: 359,
      r: 20,
      amount: 5
    }, {
      type: 'lava',
      x: -4250,
      y: 520,
      w: 850,
      h: 100
    }, {
      type: 'hyperbelt',
      x: -4500,
      y: 432,
      w: 400,
      h: 30,
      d: -1,
      r: -7
    }, {
      type: 'sign',
      x: -5000,
      y: 440,
      text: "Those moving spikes are called thorns.\nWatch ahead and make\nsure they don't move to you!"
    }, {
      type: 'poison',
      x: -5250,
      y: 520,
      w: 285,
      h: 100
    }, {
      type: 'spike',
      x: -5500,
      y: 459,
      r: 0,
      amount: 5
    }, {
      type: 'zapp',
      x: -6000,
      y: 330,
      s: 100,
      r: 170,
      speed: 2
    }, {
      x: -6000,
      y: 535,
      w: 20,
      h: 160,
      r: 0
    }, {
      x: -7000,
      y: 545,
      w: 1600,
      h: 150,
      r: 0
    }, {
      type: 'spike',
      x: -7000,
      y: 459,
      r: 0,
      amount: 1
    }, {
      type: 'spike',
      x: -7200,
      y: 459,
      r: 0,
      amount: 2
    }, {
      type: 'spike',
      x: -7400,
      y: 459,
      r: 0,
      amount: 3
    }, {
      type: 'checkpoint',
      x: -7500,
      y: 435,
      w: 60,
      h: 70
    }, {
      type: 'spike',
      x: -7600,
      y: 459,
      r: 0,
      amount: 4
    }, {
      x: -8800,
      y: 545,
      w: 1600,
      h: 150,
      r: 0
    }, {
      type: 'spike',
      x: -8200,
      y: 459,
      r: 0,
      amount: 5
    }, {
      type: 'spike',
      x: -8400,
      y: 459,
      r: 0,
      amount: 6
    }, {
      type: 'spike',
      x: -8600,
      y: 459,
      r: 0,
      amount: 7
    }, {
      type: 'spike',
      x: -8900,
      y: 459,
      r: 0,
      amount: 8
    }, {
      type: 'spike',
      x: -9200,
      y: 459,
      r: 0,
      amount: 9
    }, {
      type: 'spike',
      x: -9500,
      y: 459,
      r: 0,
      amount: 5
    }, {
      x: -9800,
      y: 645,
      w: 1600,
      h: 150,
      r: 0
    }, {
      type: 'boing',
      x: -10000,
      y: 530,
      s: 60,
      r: 170,
      speed: 2,
      variant: 'X'
    }, {
      type: 'boing',
      x: -10300,
      y: 530,
      s: 60,
      r: 170,
      speed: 2
    }, {
      type: 'thorn',
      x: -10150,
      y: 570,
      s: 50,
      r: 200,
      speed: 2
    }, {
      x: -11500,
      y: 545,
      w: 1600,
      h: 150,
      r: 0
    }, {
      type: 'lava',
      x: -11000,
      y: 520,
      w: 100,
      h: 100
    }, {
      type: 'lava',
      x: -11300,
      y: 520,
      w: 200,
      h: 100
    }, {
      type: 'lava',
      x: -11600,
      y: 520,
      w: 300,
      h: 100
    }, {
      type: 'spike',
      x: -12000,
      y: 459,
      r: 0,
      amount: 10
    }, {
      x: -13500,
      y: 545,
      w: 2000,
      h: 150,
      r: 0
    }, {
      type: 'poison',
      x: -13000,
      y: 520,
      w: 215,
      h: 100
    }, {
      type: 'lava',
      x: -13500,
      y: 520,
      w: 215,
      h: 100
    }, {
      type: 'boing',
      x: -13250,
      y: 430,
      s: 60,
      r: 170,
      speed: 2
    }, {
      type: 'zapp',
      x: -14000,
      y: 385,
      s: 100,
      r: 170,
      speed: 8,
      variant: 'X'
    }, {
      type: 'launcher',
      x: -14400,
      y: 458,
      w: 110,
      h: 30,
      targetX: -15000,
      targetY: -140
    }, {
      x: -15000,
      y: 383,
      w: 180,
      h: 550,
      r: 0
    }],
    portal: {
      x: -15000,
      y: 100,
      w: 130,
      h: 16
    },
    spawn: {
      x: 0,
      y: 140
    }
  }, {
    objects: [{
      x: 1000,
      y: 600,
      w: 2500,
      h: 200,
      r: 0
    }, {
      type: 'sign',
      x: 100,
      y: 470,
      text: "PK. Challenge Log 204--\n\nDue to a glitch in Area X,\na new entity has been born."
    }, {
      type: 'sign',
      x: 300,
      y: 470,
      text: "His name? ECH0.\nMaybe I can use him in a challenge...\n\n-Parkour Master"
    }, {
      type: 'sign',
      x: 500,
      y: 470,
      text: "RUN! HE'S COMING!"
    }, {
      type: 'spike',
      x: 800,
      y: 489,
      r: 0,
      amount: 4
    }, {
      type: 'boing',
      x: 1300,
      y: 450,
      s: 50,
      r: 160,
      speed: 3.5,
      variant: 'X'
    }, {
      type: 'lava',
      x: 1800,
      y: 550,
      w: 200,
      h: 100
    }, {
      x: 3510,
      y: 600,
      w: 2000,
      h: 200,
      r: 0
    }, {
      type: 'conveyorbelt',
      x: 3300,
      y: 485,
      w: 800,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'spike',
      x: 3400,
      y: 459,
      r: 0,
      amount: 3
    }, {
      type: 'spike',
      x: 3600,
      y: 459,
      r: 0,
      amount: 4
    }, {
      type: 'boing',
      x: 4100,
      y: 450,
      s: 60,
      r: 150,
      speed: 4.0
    }, {
      type: 'trampoline',
      x: 4400,
      y: 492,
      w: 100,
      h: 15
    }, {
      x: 5450,
      y: 500,
      w: 1500,
      h: 400,
      r: 0
    }, {
      type: 'spike',
      x: 5000,
      y: 289,
      r: 0,
      amount: 5
    }, {
      type: 'poison',
      x: 5450,
      y: 350,
      w: 250,
      h: 100
    }, {
      type: 'conveyorbelt',
      x: 5900,
      y: 285,
      w: 400,
      h: 30,
      d: -1,
      r: 0
    }, {
      type: 'boing',
      x: 5900,
      y: 250,
      s: 50,
      r: 180,
      speed: 4.5,
      variant: 'X'
    }, {
      x: 7650,
      y: 800,
      w: 2500,
      h: 400,
      r: 0
    }, {
      type: 'lava',
      x: 7300,
      y: 650,
      w: 300,
      h: 100
    }, {
      type: 'spike',
      x: 7800,
      y: 589,
      r: 0,
      amount: 5
    }, {
      type: 'poison',
      x: 8300,
      y: 650,
      w: 300,
      h: 100
    }, {
      type: 'boing',
      x: 8700,
      y: 550,
      s: 70,
      r: 120,
      speed: 3.8,
      variant: 'X'
    }, {
      x: 9580,
      y: 800,
      w: 800,
      h: 400,
      r: 0
    }, {
      type: 'trampoline',
      x: 9380,
      y: 592,
      w: 80,
      h: 15
    }, {
      type: 'spike',
      x: 9780,
      y: 589,
      r: 0,
      amount: 4
    }, {
      type: 'trampoline',
      x: 9900,
      y: 592,
      w: 80,
      h: 15
    }, {
      x: 11030,
      y: 600,
      w: 1600,
      h: 600,
      r: 0
    }, {
      type: 'conveyorbelt',
      x: 11000,
      y: 285,
      w: 500,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'boing',
      x: 11000,
      y: 250,
      s: 50,
      r: 160,
      speed: 4.2
    }, {
      type: 'lava',
      x: 11500,
      y: 350,
      w: 200,
      h: 100
    }, {
      x: 13310,
      y: 900,
      w: 2400,
      h: 400,
      r: 0
    }, {
      type: 'hyperbelt',
      x: 13000,
      y: 685,
      w: 1000,
      h: 30,
      d: 1,
      r: 0
    }, {
      type: 'spike',
      x: 13200,
      y: 659,
      r: 0,
      amount: 6
    }, {
      type: 'lava',
      x: 14100,
      y: 750,
      w: 300,
      h: 100
    }, {
      type: 'boing',
      x: 14350,
      y: 650,
      s: 50,
      r: 140,
      speed: 4.5,
      variant: 'X'
    }, {
      x: 15060,
      y: 800,
      w: 630,
      h: 400,
      r: 0
    }, {
      type: 'spike',
      x: 15060,
      y: 589,
      r: 0,
      amount: 3
    }, {
      type: 'trampoline',
      x: 15280,
      y: 592,
      w: 100,
      h: 15
    }, {
      x: 15910,
      y: 700,
      w: 600,
      h: 600,
      r: 0
    }, {
      type: 'zapp',
      x: 16000,
      y: 240,
      s: 90,
      r: 150,
      speed: 3.0,
      variant: 'X'
    }, {
      type: 'trampoline',
      x: 16130,
      y: 392,
      w: 100,
      h: 15
    }, {
      x: 16760,
      y: 600,
      w: 600,
      h: 800,
      r: 0
    }, {
      type: 'spike',
      x: 16760,
      y: 189,
      r: 0,
      amount: 4
    }, {
      type: 'boing',
      x: 16900,
      y: 150,
      s: 60,
      r: 160,
      speed: 4.0
    }, {
      x: 18830,
      y: 800,
      w: 3000,
      h: 600,
      r: 0
    }, {
      type: 'lava',
      x: 18000,
      y: 550,
      w: 250,
      h: 100
    }, {
      type: 'boing',
      x: 18300,
      y: 450,
      s: 70,
      r: 200,
      speed: 5.0,
      variant: 'X'
    }, {
      type: 'conveyorbelt',
      x: 18800,
      y: 485,
      w: 600,
      h: 30,
      d: -1,
      r: 0
    }, {
      type: 'spike',
      x: 19300,
      y: 489,
      r: 0,
      amount: 6
    }, {
      type: 'lava',
      x: 19900,
      y: 550,
      w: 200,
      h: 100
    }],
    portal: {
      x: 20550,
      y: 491,
      w: 130,
      h: 16
    },
    spawn: {
      x: 0,
      y: 400
    }
  }, {
    levels: [{
      objects: [
      // Bottom body
      {
        x: 3100,
        y: 345,
        w: 1000,
        h: 1790,
        r: 0
      },
      // Top body
      {
        x: 3100,
        y: -2300,
        w: 1000,
        h: 1790,
        r: 0
      },
      // First platform [
      {
        x: 2250,
        y: 545,
        w: 1000,
        h: 150,
        r: 0
      }, {
        type: 'sign',
        x: 2050,
        y: 441,
        text: "Seem familiar?\n\nThis is your first boss\nlevel, but now will test your\nultimate skill"
      }, {
        type: 'sign',
        x: 2300,
        y: 441,
        text: "Reach the end to find\nthe Parkour Master..."
      }, {
        type: 'trampoline',
        x: 2500,
        y: 456,
        h: 30,
        w: 100
      },
      // ]

      // Second platfom [

      {
        x: 1900,
        y: 10,
        w: 1000,
        h: 150,
        r: 0
      }, {
        type: 'poison',
        x: 2200,
        y: -15,
        w: 130,
        h: 100
      }, {
        type: 'poison',
        x: 1950,
        y: -15,
        w: 160,
        h: 100
      }, {
        type: 'thorn',
        x: 1700,
        y: -65,
        r: 250,
        speed: 3,
        s: 50
      }, {
        type: 'trampoline',
        x: 1600,
        y: -77,
        h: 30,
        w: 100
      },
      //]

      // Third platform [
      {
        x: 3050,
        y: -545,
        w: 2650,
        h: 100,
        r: 0
      }, {
        type: 'poison',
        x: 2200,
        y: -553,
        w: 150,
        h: 85
      }, {
        type: 'thorn',
        x: 2550,
        y: -595,
        r: 250,
        speed: 3,
        s: 50
      }, {
        type: 'hyperbelt',
        x: 2815,
        y: -613,
        w: 300,
        h: 30,
        r: 0,
        d: 1
      }, {
        type: 'poison',
        x: 3200,
        y: -553,
        w: 150,
        h: 85
      }, {
        type: 'poison',
        x: 3550,
        y: -553,
        w: 250,
        h: 85
      }, {
        type: 'thorn',
        x: 3800,
        y: -595,
        r: 250,
        speed: 3,
        s: 50
      }, {
        type: 'trampoline',
        x: 4250,
        y: -602,
        h: 15,
        w: 100
      },
      // ]

      // Fourth platform [
      {
        x: 2100,
        y: -1000,
        w: 3900,
        h: 100,
        r: 0
      }, {
        type: 'poison',
        x: 3550,
        y: -1008,
        w: 260,
        h: 85
      }, {
        type: 'hyperbelt',
        x: 3200,
        y: -1068,
        w: 300,
        h: 30,
        r: 0,
        d: -1
      }, {
        type: 'spike',
        x: 3110,
        y: -1096,
        r: 0,
        amount: 3
      }, {
        type: 'thorn',
        x: 2800,
        y: -1050,
        r: 250,
        speed: 3,
        s: 50
      }, {
        type: 'poison',
        x: 2500,
        y: -1008,
        w: 260,
        h: 85
      }, {
        type: 'hyperbelt',
        x: 2000,
        y: -1115,
        w: 300,
        h: 30,
        r: 20,
        d: -1
      }, {
        type: 'poison',
        x: 1600,
        y: -1008,
        w: 1000,
        h: 85
      }, {
        type: 'hyperbelt',
        x: 1500,
        y: -1115,
        w: 300,
        h: 30,
        r: -20,
        d: 1
      }, {
        type: 'hyperbelt',
        x: 800,
        y: -1068,
        w: 300,
        h: 30,
        r: 0,
        d: -1
      }, {
        type: 'hyperbelt',
        x: 800,
        y: -1152,
        w: 300,
        h: 30,
        r: 0,
        d: -1
      }, {
        type: 'poison',
        x: 500,
        y: -1008,
        w: 260,
        h: 85
      }, {
        type: 'trampoline',
        x: 250,
        y: -1057,
        h: 15,
        w: 100
      },
      // ]

      // Fifth platform [

      {
        x: 600,
        y: -1500,
        w: 400,
        h: 100,
        r: 0
      }, {
        type: 'sign',
        x: 500,
        y: -1580,
        text: "This is a launcher.\nIt will send you where you need to go next."
      }, {
        type: 'launcher',
        x: 700,
        y: -1563,
        w: 110,
        h: 30,
        targetX: 2800,
        targetY: -3500
      }

      // ]
      ],
      spawn: {
        x: 1900,
        y: 200
      },
      arenaY: 0
    },
    // area 1 remix
    {
      objects: [
      // Left platform [
      {
        x: 1200,
        y: 545,
        w: 2600,
        h: 150,
        r: 0
      }, {
        type: 'poison',
        x: 450,
        y: 520,
        w: 280,
        h: 100
      }, {
        type: 'boing',
        x: 750,
        y: 450,
        s: 60,
        r: 160,
        speed: 3.2,
        variant: 'X'
      }, {
        type: 'thorn',
        x: 950,
        y: 470,
        r: 200,
        speed: 3,
        s: 50
      }, {
        type: 'hyperbelt',
        x: 1200,
        y: 452,
        w: 300,
        h: 30,
        d: 1,
        r: 0
      }, {
        type: 'hyperbelt',
        x: 1800,
        y: 452,
        w: 300,
        h: 30,
        d: -1,
        r: 0
      }, {
        type: 'poison',
        x: 1600,
        y: 520,
        w: 280,
        h: 100
      }, {
        type: 'boing',
        x: 1800,
        y: 450,
        s: 60,
        r: 160,
        speed: 3.2,
        variant: 'X'
      }, {
        type: 'poison',
        x: 2200,
        y: 520,
        w: 280,
        h: 100
      }, {
        type: 'launcher',
        x: 2420,
        y: 458,
        w: 110,
        h: 30,
        targetX: 3000,
        targetY: -1100
      },
      //]

      // Middle platform [
      {
        x: 4200,
        y: -645,
        w: 2600,
        h: 150,
        r: 0
      }, {
        type: 'trampoline',
        x: 3090,
        y: -729,
        w: 160,
        h: 20
      }, {
        type: 'poison',
        x: 3395,
        y: -670,
        w: 450,
        h: 100
      }, {
        type: 'trampoline',
        x: 3750,
        y: -729,
        w: 160,
        h: 20
      }, {
        type: 'poison',
        x: 4080,
        y: -670,
        w: 500,
        h: 100
      }, {
        type: 'trampoline',
        x: 4410,
        y: -729,
        w: 160,
        h: 20
      }, {
        type: 'poison',
        x: 4740,
        y: -670,
        w: 500,
        h: 100
      }, {
        type: 'boing',
        x: 5200,
        y: -750,
        s: 60,
        r: 160,
        speed: 3.2,
        variant: 'X'
      }, {
        type: 'launcher',
        x: 5420,
        y: -730,
        w: 110,
        h: 30,
        targetX: 8300,
        targetY: 400
      },
      //]

      // Right platform [
      {
        x: 7200,
        y: 545,
        w: 2600,
        h: 150,
        r: 0
      }, {
        type: 'thorn',
        x: 8000,
        y: 470,
        r: 300,
        speed: 3
      }, {
        type: 'hyperbelt',
        x: 7680,
        y: 452,
        w: 300,
        h: 30,
        d: 1,
        r: 0
      }, {
        type: 'poison',
        x: 7300,
        y: 520,
        w: 200,
        h: 100
      }, {
        type: 'poison',
        x: 7000,
        y: 520,
        w: 200,
        h: 100
      }, {
        type: 'boing',
        x: 7150,
        y: 450,
        s: 60,
        r: 160,
        speed: 3.2,
        variant: 'X'
      }, {
        type: 'thorn',
        x: 6700,
        y: 470,
        r: 250,
        speed: 3,
        s: 50
      }, {
        type: 'launcher',
        x: 6000,
        y: 458,
        w: 110,
        h: 30,
        targetX: 5200,
        targetY: 600
      },
      //]

      // Base
      {
        x: 4200,
        y: 1045,
        w: 2400,
        h: 600,
        r: 0
      }],
      spawn: {
        x: 100,
        y: 200
      },
      arenaY: 0
    },
    // area 2 remix
    {
      objects: [{
        x: 300,
        y: 45,
        w: 1000,
        h: 150,
        r: 0
      }, {
        type: 'arrowSign',
        x: -100,
        y: -90,
        w: 110,
        h: 30,
        way: 'right'
      }, {
        type: 'poison',
        x: 400,
        y: 20,
        w: 250,
        h: 100
      }, {
        x: 550,
        y: -655,
        w: 500,
        h: 600,
        r: 0
      }, {
        x: 1050,
        y: -755,
        w: 700,
        h: 400,
        r: 0
      }, {
        x: 1550,
        y: -855,
        w: 700,
        h: 200,
        r: 0
      }, {
        x: 700,
        y: 155,
        w: 800,
        h: 150,
        r: 0
      }, {
        x: 800,
        y: 255,
        w: 1000,
        h: 150,
        r: 0
      }, {
        x: 1600,
        y: 355,
        w: 2000,
        h: 150,
        r: 0
      },
      // Section 1 (bottom) obstacles [
      {
        type: 'poison',
        x: 925,
        y: 130,
        w: 100,
        h: 100
      }, {
        type: 'spike',
        x: 1150,
        y: 170,
        r: 0,
        amount: 2
      }, {
        type: 'thorn',
        x: 1650,
        y: 280,
        r: 200,
        s: 50,
        speed: 2
      }, {
        type: 'zapp',
        x: 3500,
        y: 520,
        s: 100,
        r: 190,
        speed: 2.2,
        variant: 'X'
      }, {
        type: 'launcher',
        x: 5400,
        y: 589,
        w: 110,
        h: 30,
        targetX: 4300,
        targetY: -350
      },
      //]

      {
        x: 2600,
        y: 176,
        w: 400,
        h: 80,
        r: 0
      }, {
        x: 3800,
        y: 176,
        w: 1600,
        h: 150,
        r: 0
      }, {
        x: 3800,
        y: 300,
        w: 800,
        h: 150,
        r: 0
      }, {
        x: 3700,
        y: 100,
        w: 1000,
        h: 200,
        r: 0
      }, {
        x: 4200,
        y: 20,
        w: 1400,
        h: 300,
        r: 0
      }, {
        x: 4500,
        y: -100,
        w: 1000,
        h: 300,
        r: 0
      },
      // Section 3 obstacles [
      {
        type: 'poison',
        x: 2600,
        y: 170,
        w: 150,
        h: 70
      }, {
        type: 'hyperbelt',
        x: 4500,
        y: -268,
        w: 400,
        h: 30,
        d: 1,
        r: 0
      }, {
        type: 'poison',
        x: 4800,
        y: -175,
        w: 200,
        h: 150
      }, {
        type: 'spike',
        x: 3750,
        y: -380,
        r: 0,
        amount: 3
      }, {
        type: 'spike',
        x: 3350,
        y: -10,
        r: 0,
        amount: 5
      },
      //]

      {
        x: 2500,
        y: 575,
        w: 800,
        h: 300,
        r: 0
      }, {
        x: 3000,
        y: 750,
        w: 5400,
        h: 300,
        r: 0
      }, {
        x: 3750,
        y: -345,
        w: 200,
        h: 50,
        r: 0
      }, {
        x: 2750,
        y: -400,
        w: 1500,
        h: 100,
        r: 0
      }, {
        x: 2500,
        y: -300,
        w: 2000,
        h: 150,
        r: 0
      }, {
        x: 1500,
        y: -160,
        w: 1000,
        h: 150,
        r: 0
      }, {
        x: 1150,
        y: -100,
        w: 500,
        h: 50,
        r: 0
      },
      // Section 2 obstacles [
      {
        type: 'hyperbelt',
        x: 1300,
        y: -252,
        w: 400,
        h: 30,
        d: 1,
        r: 0
      }, {
        type: 'thorn',
        x: 1800,
        y: -375,
        r: 200,
        s: 50,
        speed: 2
      }, {
        type: 'poison',
        x: 2150,
        y: -375,
        w: 150,
        h: 150
      }, {
        type: 'poison',
        x: 2400,
        y: -375,
        w: 150,
        h: 150
      }, {
        type: 'poison',
        x: 2650,
        y: -375,
        w: 150,
        h: 150
      }, {
        type: 'launcher',
        x: 3100,
        y: -463,
        w: 110,
        h: 30,
        targetX: 2800,
        targetY: -1100
      },
      //]

      {
        x: 1700,
        y: -900,
        w: 2600,
        h: 150,
        r: 0
      },
      // Section 4 obstacles [

      {
        type: 'zapp',
        x: 2400,
        y: -1057,
        s: 100,
        r: 200,
        speed: 2.2,
        variant: 'X'
      }, {
        type: 'zapp',
        x: 1400,
        y: -1057,
        s: 100,
        r: 200,
        speed: 2.2,
        variant: 'X'
      }, {
        type: 'trampoline',
        x: 1650,
        y: -990,
        w: 100,
        h: 30,
        speed: 2.2
      }, {
        type: 'spike',
        x: 1300,
        y: -1360,
        r: 0,
        amount: 5
      }, {
        x: 2400,
        y: -1350,
        w: 400,
        h: 250,
        r: 0
      }, {
        type: 'poison',
        x: 2400,
        y: -1400,
        w: 150,
        h: 150
      }, {
        x: 2950,
        y: -1470,
        w: 800,
        h: 250,
        r: 0
      },
      //]

      // Section 5 obstacles [
      {
        type: 'thorn',
        x: 2800,
        y: -1595,
        r: 200,
        speed: 3,
        s: 50
      }, {
        type: 'poison',
        x: 3100,
        y: -1520,
        w: 150,
        h: 150
      }, {
        x: 3700,
        y: -1520,
        w: 800,
        h: 350,
        r: 0
      }, {
        type: 'thorn',
        x: 3500,
        y: -1695,
        r: 200,
        s: 50,
        speed: 2
      }, {
        type: 'boing',
        x: 3400,
        y: -1730,
        s: 60,
        r: 200,
        speed: 2.2,
        variant: 'X'
      }, {
        type: 'poison',
        x: 3800,
        y: -1620,
        w: 150,
        h: 150
      }, {
        x: 4500,
        y: -1420,
        w: 1000,
        h: 300,
        r: 0
      }, {
        x: 5500,
        y: -1400,
        w: 1300,
        h: 200,
        r: 0
      }, {
        type: 'poison',
        x: 4200,
        y: -1495,
        w: 150,
        h: 150
      }, {
        type: 'hyperbelt',
        x: 4470,
        y: -1585,
        w: 400,
        h: 30,
        d: -1,
        r: 0
      }, {
        x: 2000,
        y: -1000,
        w: 500,
        h: 200,
        r: 0
      }, {
        x: 1300,
        y: -1300,
        w: 500,
        h: 100,
        r: 0
      }, {
        x: 1850,
        y: -1400,
        w: 400,
        h: 150,
        r: 0
      }, {
        type: 'zapp',
        x: 5300,
        y: -1580,
        s: 100,
        r: 200,
        speed: 2.2,
        variant: 'X'
      }, {
        type: 'launcher',
        x: 6000,
        y: -1512,
        w: 110,
        h: 30,
        targetX: 5600,
        targetY: -2500
      },
      //]

      // wall segments
      {
        x: 5600,
        y: -400,
        w: 200,
        h: 2200,
        r: 0
      }, {
        x: 5600,
        y: -1900,
        w: 200,
        h: 450,
        r: 0
      }, {
        x: 3000,
        y: -2150,
        w: 5400,
        h: 400,
        r: 0
      }, {
        x: 400,
        y: -1255,
        w: 200,
        h: 1790,
        r: 0
      }, {
        x: 4550,
        y: -1050,
        w: 2000,
        h: 700,
        r: 0
      }, {
        type: 'checkpoint',
        x: 5800,
        y: -1535,
        w: 60,
        h: 70
      }],
      arenaY: 0,
      spawn: {
        x: 100,
        y: -200
      }
    } // area 3 remix
    ]
  },
  // final final boss phase
  {
    objects: [
    // Base
    {
      x: 1050,
      y: 545,
      w: 2600,
      h: 150,
      r: 0
    }, {
      type: 'lava',
      x: 1360,
      y: 520,
      w: 150,
      h: 100
    }, {
      type: 'spike',
      x: 1900,
      y: 459,
      r: 0,
      amount: 5
    }, {
      x: 2500,
      y: 440,
      w: 430,
      h: 150,
      r: -35
    }, {
      type: 'spike',
      x: 2500,
      y: 336,
      r: -35,
      amount: 3
    }, {
      x: 2950,
      y: 590,
      w: 700,
      h: 50,
      r: 0
    }, {
      x: 3670,
      y: 590,
      w: 400,
      h: 300,
      r: 0
    }, {
      type: 'lava',
      x: 3670,
      y: 505,
      w: 150,
      h: 130
    }, {
      x: 4400,
      y: 640,
      w: 1200,
      h: 300,
      r: 0
    }, {
      type: 'spike',
      x: 4100,
      y: 479,
      r: 0,
      amount: 8
    }, {
      type: 'spike',
      x: 4300,
      y: 479,
      r: 0,
      amount: 2
    }, {
      type: 'lava',
      x: 4600,
      y: 540,
      w: 200,
      h: 100
    }, {
      type: 'spike',
      x: 4800,
      y: 479,
      r: 0,
      amount: 2
    }, {
      type: 'spike',
      x: 5000,
      y: 479,
      r: 0,
      amount: 4
    }, {
      x: 5100,
      y: 500,
      w: 300,
      h: 20,
      r: 0
    }, {
      type: 'spike',
      x: 5220,
      y: 479,
      r: 0,
      amount: 3
    }, {
      x: 5700,
      y: 590,
      w: 700,
      h: 200,
      r: 0
    }, {
      type: 'lava',
      x: 5600,
      y: 540,
      w: 175,
      h: 100
    }, {
      type: 'trampoline',
      x: 5900,
      y: 483,
      h: 15,
      w: 100
    }, {
      x: 6200,
      y: 340,
      w: 500,
      h: 700,
      r: 0
    }],
    //portal: {x: 6200, y: -19, w: 130, h: 16},
    spawn: {
      x: 0,
      y: 301
    }
  }];
  var bossArena = [{
    objects: [
    // Base
    {
      x: 3200,
      y: -3000,
      w: 540,
      h: 150,
      r: 0
    }]
  }, {
    objects: [
    // Base
    {
      x: 4600,
      y: 940,
      w: 540,
      h: 150,
      r: 0
    }]
  }, {
    objects: [
    // Base
    {
      x: 5300,
      y: -2150,
      w: 540,
      h: 150,
      r: 0
    }]
  }, {
    levels: [{
      objects: [
      // Base
      {
        x: 3200,
        y: -3000,
        w: 540,
        h: 150,
        r: 0
      }]
    }, {
      objects: [
      // Base
      {
        x: 4600,
        y: 940,
        w: 540,
        h: 150,
        r: 0
      }]
    }, {
      objects: [
      // Base
      {
        x: 5300,
        y: -2150,
        w: 540,
        h: 150,
        r: 0
      }]
    }]
  }];
  var enemies = [];
  var signs = [];
  var portalCol = 0;
  var portalColChange = 1;
  // No hoisting, but these get defined l8r
  var lvl, lastCheckpoint;
  var currentLevel = 1;
  var bossRemixStage;
  function loadLevel(levelIndex, player) {
    lvl = levels[levelIndex];
    if (currentLevel === 15) {
      lvl = levels[levelIndex].levels[bossRemixStage];
    }

    // Reset everything
    enemies = [];
    signs = [];
    lastCheckpoint = {
      x: lvl.spawn.x,
      y: lvl.spawn.y
    };

    // Final boss has multiple 'levels' so this makes it simpler
    var levelObjects;
    levelObjects = lvl.objects;
    for (var i = 0; i < levelObjects.length; i++) {
      var o = levelObjects[i];
      if (o.type === 'sign') {
        signs.push(new Sign(o.x, o.y, o.w, o.h, o.text));
      } else if (o.type === 'boing') {
        enemies.push(new Boing(o.x, o.y, o.s, o.r, o.speed, o.variant));
      } else if (o.type === 'thorn') {
        enemies.push(new Thorn(o.x, o.y, o.s, o.r, o.speed));
      } else if (o.type === 'zapp') {
        enemies.push(new Zapp(o.x, o.y, o.s, o.r, o.speed, o.variant));
      }
    }
  }
  var checkpointReached = false;
  var checkCircSize = 0;

  // ech0 stuff
  var lastLoadedLevel = -1;
  var ECH0 = null;

  // Zoom In Animation
  var zoomScale = 1;
  var zoomX = 0;
  var zoomY = 0;
  var zoomRot = 0;

  // For cutscenes
  var bossFloatY = 0;
  var bossIntroFrames = 0;
  // Boss events
  var bossFight = false;
  var bossIntro = false;

  // Level End Animation
  var levelEnd = false;
  var lvlEndFrames = 0;
  var lvlEndScene = 0;
  var bossEndX = 0;

  // Game Over Animation
  var skullSize = 20000;
  var skullTrans = 0;
  var deathAnimationFrames = 0;
  var shakeIntensity = 25;
  var gameOverTextTransparency = 1;
  var shakeX = 0;
  var shakeY = 0;
  var innerCircleSize = 1;

  // Random death messages
  var deathMessages = ["Better luck next time!", "The Parkour Master got\nyou there!", "Bro thought he was spiderman", "Rest in pieces", "I hope you weren't close...", "Must have been a bug,\nright?", "Sponsored by Elon Musk", "oops", "Try, try again", "Well, that's one way to go.", "Another one bites the dust", "W. A. S. T. E. D.", "Well, that was anticlimactic.", "I guess you forgot how to jump",
  // i want this one to show up more
  "1 more towards the\nachievement!", "1 more towards the\nachievement!", "1 more towards the\nachievement!", "Look on the bright side- oh wait", "Don't blame me.\nBlame the Parkour Master", "You've met a terrible fate,\nhaven't you?", "Help me, Obi Wan Kenobi,\nyou're my only hope", "It's a trap!\nOh wait, it's just parkour"];
  var currentDeathMessage = "";

  // Confetti Particles
  var confetti = [];
  var Confetti = function Confetti() {
    this.x = random(-20, 650);
    this.y = random(-400, -20);
    this.vx = random(-2, 2);
    this.vy = random(1, 4);
    this.size = random(6, 12);
    this.rot = random(0, 360);
    this.rotSpeed = random(-8, 8);

    // 4 colors
    var cols = [color(0), color(0, 100, 200), color(0, 150, 50), color(255, 150, 0)];
    this.col = cols[floor(random(cols.length))];
  };
  Confetti.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;
    this.rot += this.rotSpeed;

    // slight floating movement
    this.x += sin(frameCount * 4 + this.y) * 0.4;

    // recycle particle
    if (this.y > 650) {
      this.x = random(0, 600);
      this.y = random(-400, -20);
    }
  };
  Confetti.prototype.draw = function () {
    pushMatrix();
    translate(this.x, this.y);
    rotate(this.rot);
    noStroke();
    fill(this.col);
    rectMode(CENTER);
    rect(0, 0, this.size, this.size * 0.6);
    popMatrix();
  };

  // Create particles once
  if (confetti.length === 0) {
    for (var i = 0; i < 100; i++) {
      confetti.push(new Confetti());
    }
  }

  // Particles and player [

  // Particles
  var particles = [];

  // Particle class
  var Particle = function Particle(x, y, vx, vy, type, timeSpeed, boss) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.type = type || "smoke";
    this.life = 255;
    this.boss = boss;
    if (this.type === "explosion") {
      this.variant = round(random(0.5, 4.7));
    } else if (this.type === "pi") {
      this.life = 0; // Starts completely transparent
      this.digit = Math.floor(random(0, 10)); // Chooses a number 0-9
      this.speedMult = 0.01; // Core attraction acceleration tracking
    } else if (this.type === "bossDive" || this.type === "masterParticlesFrom") {
      this.life = 0; // Starts completely transparent
      this.speedMult = 0.01; // Core attraction acceleration tracking
      this.variant = round(random(0.5, 3.4));
      this.timeSpeed = timeSpeed;
    }

    // Size depends on type
    if (this.type === "death" || this.type === "deathG" || this.type === "deathY") {
      this.size = random(2, 6); // smaller sparks for explosion
    } else {
      this.size = random(5, 10);
    }
  };
  var p;
  Particle.prototype.update = function () {
    if (this.type === "death" || this.type === "deathG" || this.type === "deathY") {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.18;
      this.vx *= 0.97;
      this.vy *= 0.98;
      this.size *= 0.98;
      this.life -= 6;
    } else if (this.type === "pi") {
      var dx = p.x - this.x;
      var dy = p.y - this.y;
      var dSq = dx * dx + dy * dy;
      var distance = sqrt(dSq);

      // Kill particle if it hits the core (<8px) or drifts way too far away
      if (distance < 8 || distance > 300) {
        this.life = -1;
      } else {
        // EXPONENTIAL SPEED CURVE
        // Using (distance * distance) makes the speed drop off quickly at long range,
        // but skyrocket intensely as the distance drops.
        var speed = 20000 / (dSq + 200);

        // Constrain speed: 2.5px at the edge, up to 16px for a flawless center-lock
        speed = constrain(speed, 2.5, 16);

        // MOVE CONSTANTLY
        this.x += dx / distance * speed;
        this.y += dy / distance * speed;

        // MAP OPACITY DIRECTLY TO DISTANCE
        this.life = constrain(map(distance, 220, 80, 0, 255), 0, 255);
      }
    } else if (this.type === "bossDive" || this.type === "masterParticlesFrom") {
      var dx = this.boss.x - this.x;
      var dy = this.boss.visualY - this.y;
      var dSq = dx * dx + dy * dy;
      var distance = sqrt(dSq);

      // Kill particle if it hits the core (<8px) or drifts way too far away
      if (distance < 8 || distance > 300) {
        this.life = -1;
      } else {
        // EXPONENTIAL SPEED CURVE
        // Using (distance * distance) makes the speed drop off quickly at long range,
        // but skyrocket intensely as the distance drops.
        var speed = 20000 / (dSq + 200) * this.timeSpeed;

        // Constrain speed: 2.5px at the edge, up to 16px for a flawless center-lock
        speed = constrain(speed, 2.5, 16);

        // MOVE CONSTANTLY
        this.x += dx / distance * speed;
        this.y += dy / distance * speed;

        // MAP OPACITY DIRECTLY TO DISTANCE
        this.life = constrain(map(distance, 200, this.boss.attackTimer / 1.5, 0, 255), 0, 255);
      }
    } else if (this.type === "spawn") {
      // Calculate distance to target
      var dx = this.targetX - this.x;
      var dy = this.targetY - this.y;
      var distToTarget = sqrt(dx * dx + dy * dy);

      // Only accelerate and move if not at target
      if (distToTarget > 10) {
        // Still converging
        this.vx *= 1.08;
        this.vy *= 1.08;
        this.x += this.vx;
        this.y += this.vy;
        this.size *= 1.05;
        this.life += 4;
      } else {
        // Arrived at target - stop and fade out
        this.vx = 0;
        this.vy = 0;
        this.life /= 10; // Faster fade out
        this.size *= 0.92;
      }
    } else if (this.type === "spike") {
      this.x += this.vx;
      this.y += this.vy;
      this.vy -= 0.1;
      this.vx *= 0.95;
      this.size *= 0.9;
      this.life -= 8;
    } else if (this.type === "launch") {
      this.x += this.vx;
      this.y += this.vy;

      //this.vx *= 0.95;
      //this.size *= 0.9;
      this.life -= 10;
    } else if (this.type === "masterParticles") {
      this.x += this.vx;
      this.y += this.vy;

      //this.vx *= 0.95;
      //this.size *= 0.9;
      this.life -= 10;
    } else if (this.type === "explosion") {
      this.x += this.vx;
      this.y += this.vy;
      this.life -= 10;
    } else if (this.type === "diveLaunch") {
      this.x += this.vx;
      this.y += this.vy;
      this.life -= 10;
    } else if (this.type === "bossHit") {
      this.x += this.vx;
      this.y += this.vy;
      this.life -= 10;
    } else {
      this.x += this.vx;
      this.y += this.vy;
      this.size *= 0.96;
      this.life -= 8;
    }
  };
  Particle.prototype.draw = function () {
    var particleVisible = !worldRenderView.active || worldBoundsVisible(this.x, this.y, abs(this.vx) * 2 + abs(this.size) * 2 + 16, abs(this.vy) * 2 + abs(this.size) * 2 + 16);
    if (!particleVisible) {
      worldRenderStats.particlesCulled++;
    }
    noStroke();
    if (this.type === "wind") {
      stroke(165, 165, 165, this.life);
      strokeWeight(this.size);
      if (particleVisible) {
        line(this.x, this.y, this.x - this.vx * 1.5, this.y - this.vy * 1.5);
      }
    } else if (this.type === "launch") {
      stroke(0, 220, 0, this.life);
      strokeWeight(this.size);
      if (particleVisible) {
        line(this.x, this.y, this.x - this.vx * 1.5, this.y - this.vy * 1.5);
      }
    } else if (this.type === "masterParticles") {
      stroke(255, 100, 255, this.life);
      strokeWeight(this.size);
      if (particleVisible) {
        line(this.x, this.y, this.x - this.vx * 1.5, this.y - this.vy * 1.5);
      }
    } else if (this.type === "masterParticlesFrom") {
      stroke(255, 100, 255, this.life);
      strokeWeight(this.size);
      if (particleVisible) {
        line(this.x, this.y, this.x - this.vx * 1.5, this.y - this.vy * 1.5);
      }
    } else if (this.type === "diveLaunch") {
      stroke(255, 210, 0, this.life);
      strokeWeight(this.size);
      if (particleVisible) {
        line(this.x, this.y, this.x - this.vx * 1.5, this.y - this.vy * 1.5);
      }
    } else if (this.type === "bossHit") {
      stroke(this.boss.variant.col, this.life);
      strokeWeight(this.size);
      if (particleVisible) {
        line(this.x, this.y, this.x - this.vx * 1.5, this.y - this.vy * 1.5);
      }
    } else if (this.type === "lava") {
      stroke(255, 100, 0, this.life);
      strokeWeight(this.size);
      if (particleVisible) {
        line(this.x, this.y, this.x - this.vx * 1.5, this.y - this.vy * 1.5);
      }
    } else if (this.type === "crown") {
      stroke(255, 200, 0, this.life);
      strokeWeight(this.size * 2);
      if (particleVisible) {
        line(this.x, this.y, this.x - this.vx * 1.5, this.y - this.vy * 1.5);
      }
    } else if (this.type === "death") {
      stroke(skins[currentSkin].mainColor, this.life * 2);
      strokeWeight(this.size * 1.6);
      if (particleVisible) {
        line(this.x, this.y, this.x - this.vx * 2, this.y - this.vy * 2);
      }
    } else if (this.type === "deathG") {
      stroke(0, 200, 0, this.life * 2);
      strokeWeight(this.size * 1.6);

      // Draw a short trail behind the particle for streaking effect
      if (particleVisible) {
        line(this.x, this.y, this.x - this.vx * 2, this.y - this.vy * 2);
      }
    } else if (this.type === "deathY") {
      stroke(255, 200, 0, this.life * 2);
      strokeWeight(this.size * 1.6);

      // Draw a short trail behind the particle for streaking effect
      if (particleVisible) {
        line(this.x, this.y, this.x - this.vx * 2, this.y - this.vy * 2);
      }
    } else if (this.type === "spawn") {
      // Inverse of death: red trails converging inward
      stroke(skins[currentSkin].mainColor, this.life * 1.5); // Orange for spawn
      strokeWeight(this.size * 1.4);
      if (particleVisible) {
        line(this.x, this.y, this.x + this.vx * 2, this.y + this.vy * 2);
      }
    } else if (this.type === "pi") {
      fill(255, 0, 0, this.life);
      textSize(this.size + 4);
      textAlign(CENTER, CENTER);
      if (particleVisible) {
        text(this.digit, this.x, this.y);
      }
    } else if (this.type === "bossDive") {
      if (this.variant === 1) {
        fill(255, 100, 0, this.life);
      }
      if (this.variant === 2) {
        fill(255, 200, 0, this.life);
      }
      if (this.variant === 3) {
        fill(255, 255, 0, this.life);
      }
      if (particleVisible) {
        ellipse(this.x, this.y, this.size, this.size);
      }
    } else if (this.type === "explosion") {
      if (this.variant === 1) {
        fill(255, 100, 0, this.life);
      }
      if (this.variant === 2) {
        fill(255, 0, 0, this.life);
      }
      if (this.variant === 3) {
        fill(255, 200, 0, this.life);
      }
      if (this.variant === 4) {
        fill(0, 0, 0, this.life);
      }
      if (this.variant === 5) {
        fill(253, 147, 255, this.life);
      }
      if (particleVisible) {
        ellipse(this.x, this.y, this.size, this.size);
      }
    } else if (this.type === "fuse") {
      fill(200, 0, 0, this.life);
      if (particleVisible) {
        ellipse(this.x, this.y, this.size, this.size);
      }
    } else if (this.type === "bullet") {
      fill(0, 230, 120, this.life);
      if (particleVisible) {
        ellipse(this.x, this.y, this.size, this.size);
      }
    } else if (this.type === "laser") {
      fill(180, 0, 0, this.life);
      if (particleVisible) {
        ellipse(this.x, this.y, this.size, this.size);
      }
    } else if (this.type === "decay") {
      fill(122, 57, 219, this.life);
      if (particleVisible) {
        ellipse(this.x, this.y, this.size, this.size);
      }
    } else {
      // Regular smoke/dust
      fill(200, 200, 200, this.life);
      if (particleVisible) {
        ellipse(this.x, this.y, this.size, this.size);
      }
    }
  };
  var spawnParticles = function spawnParticles(x, y, count, type, speed, boss) {
    if (settings.particles) {
      for (var i = 0; i < count; i++) {
        var vx, vy;
        if (type === "death" || this.type === "deathG" || this.type === "deathY") {
          var angle = random(360);
          var force = random(speed * 0.7, speed * 1.5);
          vx = cos(angle) * force;
          vy = sin(angle) * force - 3;
          particles.push(new Particle(x, y, vx, vy, type));
        } else if (type === "spawn") {
          // Spawn particles start far away and rush inward
          var angle = random(360);
          var distance = random(80, 150); // How far out they start
          var force = random(speed * 1.2, speed * 2.0); // Rush speed

          // Start position: far from center
          var startX = x + cos(angle) * distance;
          var startY = y + sin(angle) * distance;

          // Velocity: toward the center
          vx = -cos(angle) * force;
          vy = -sin(angle) * force;
          var particle = new Particle(startX, startY, vx, vy, type);
          particle.targetX = x; // Store target for potential effects
          particle.targetY = y;
          particles.push(particle);
        } else if (type === "pi") {
          var angle = random(360);
          var distance = random(130, 240); // Spawns far outside the character mesh

          var startX = x + cos(angle) * distance;
          var startY = y + sin(angle) * distance;
          var particle = new Particle(startX, startY, 0, 0, "pi");
          particle.targetX = x;
          particle.targetY = y;

          // FIX: Push the custom 'particle' object that contains our target data!
          particles.push(particle);
        } else if (type === "bossDive") {
          var angle = random(360);
          var distance = random(130, 240); // Spawns far outside the character mesh

          var startX = x + cos(angle) * distance;
          var startY = y + sin(angle) * distance;
          var particle = new Particle(startX, startY, 0, 0, "bossDive", speed, boss);
          particle.targetX = x;
          particle.targetY = y;

          // FIX: Push the custom 'particle' object that contains our target data!
          particles.push(particle);
        } else if (type === "masterParticlesFrom") {
          var angle = random(360);
          var distance = random(130, 240); // Spawns far outside the character mesh

          var startX = x + cos(angle) * distance;
          var startY = y + sin(angle) * distance;
          var particle = new Particle(startX, startY, 0, 0, "masterParticlesFrom", speed, boss);
          particle.targetX = x;
          particle.targetY = y;
          particles.push(particle);
        } else if (type === "decay") {
          var startX = random(x - 40, x + 40);
          vy = -speed;
          vx = 0;
          particles.push(new Particle(startX, y, vx, vy, type, speed, boss));
        } else {
          // Normal random scatter for other types
          vx = random(-speed, speed);
          vy = random(-speed, speed);
          particles.push(new Particle(x, y, vx, vy, type, speed, boss));
        }
      }
    }
  };
  var ballSkinRotation = 0;

  // skin setup [

  var bossBlinks = [{
    timer: random(240, 420),
    blink: 0,
    blinking: false
  }, {
    timer: random(240, 420),
    blink: 0,
    blinking: false
  }, {
    timer: random(240, 420),
    blink: 0,
    blinking: false
  }];
  var updateBossBlink = function updateBossBlink(b) {
    b.timer--;

    // Start blink
    if (b.timer <= 0 && !b.blinking) {
      b.blinking = true;
    }
    if (b.blinking) {
      // Close eye
      b.blink += 0.2;

      // Re-open eye
      if (b.blink >= 1) {
        b.blink = 1;
        b.blinking = false;
        b.timer = random(90, 240);
      }
    } else {
      // Open eye
      b.blink -= 0.35;
    }
    b.blink = constrain(b.blink, 0, 1);
  };
  var bossEye = function bossEye(x, y, s, way, blink) {
    var eyeH = lerp(1, 0.08, blink);
    pushMatrix();
    translate(x, y);
    scale(1, eyeH);
    translate(-x, -y);
    if (way === "left") {
      // Black eye
      fill(0);
      stroke(0);
      strokeWeight(s / 25);
      beginShape();
      vertex(x - s / 5.26, y - s / 2.12);
      vertex(x + s / 3.33, y - s / 5.55);
      bezierVertex(x + s / 3.84, y + s / 1.2, x - s / 4.54, y + s / 1.01, x - s / 5.26, y - s / 2.08);
      vertex(x - s / 3.03, y - s / 1.75);
      vertex(x - s / 3.84, y - s / 1.42);
      vertex(x + s / 2, y - s / 8.33);
      vertex(x + s / 3.33, y - s / 5.26);
      vertex(x - s / 5.26, y - s / 2.12);
      endShape();
      // White pupil
      noStroke();
      fill(255);
      beginShape();
      vertex(x + s / 4.34, y - s / 5.88);
      vertex(x, y);
      vertex(x + s / 33.3, y - s / 3.33);
      vertex(x + s / 4.34, y - s / 5.88);
      endShape();
    } else if (way === "right") {
      // Black eye
      fill(0);
      stroke(0);
      strokeWeight(s / 25);
      beginShape();
      vertex(x + s / 5.26, y - s / 2.12);
      vertex(x - s / 3.33, y - s / 5.55);
      bezierVertex(x - s / 3.84, y + s / 1.2, x + s / 4.54, y + s / 1.01, x + s / 5.26, y - s / 2.08);
      vertex(x + s / 3.03, y - s / 1.75);
      vertex(x + s / 3.84, y - s / 1.42);
      vertex(x - s / 2, y - s / 8.33);
      vertex(x - s / 3.33, y - s / 5.26);
      vertex(x + s / 5.26, y - s / 2.12);
      endShape();
      // White pupil
      noStroke();
      fill(255);
      beginShape();
      vertex(x - s / 4.34, y - s / 5.88);
      vertex(x, y);
      vertex(x - s / 33.3, y - s / 3.33);
      vertex(x - s / 4.34, y - s / 5.88);
      endShape();
    }
    popMatrix();
  };
  var boss1Graphic = function boss1Graphic(x, y, s) {
    noStroke();
    // Body made of grounds
    fill(150);
    rect(x - s / 4, y - s / 2, s / 2, s, s / 15);
    // Right side
    rect(x + s / 8, y - s / 4, s / 2, s / 9, s / 30);
    rect(x + s / 5, y + s / 10, s / 3, s / 9, s / 30);
    // Left side
    rect(x - s / 1.6, y, s / 2, s / 9, s / 30);
    rect(x - s / 1.9, y + s / 5, s / 2, s / 9, s / 30);
    rect(x - s / 2.3, y - s / 2.6, s / 3, s / 9, s / 30);

    // Two eyes
    bossEye(x - s / 8.2, y - s / 3.7, s / 5.7, "left", bossBlinks[0].blink);
    bossEye(x + s / 8.2, y - s / 3.7, s / 5.7, "right", bossBlinks[0].blink);

    // Shading
    stroke(255, 255, 255, 60);
    strokeWeight(s / 40);
    line(x + s / 4.5, y - s / 2.3, x + s / 4.5, y - s / 2.4);
    line(x + s / 4.5, y - s / 5.2, x + s / 4.5, y - s / 2.8);
  };
  var boss2Graphic = function boss2Graphic(x, y, s) {
    noStroke();
    // First paltform (far left)
    fill(0);
    rect(x - s / 1.36, y, s / 25, s / 4);
    rect(x - s / 1.36, y + s / 4, s, s / 25);
    fill(150);
    rect(x - s, y - s / 8, s / 1.7, s / 6, s / 30);
    // Second platform (far right)
    fill(0);
    rect(x + s / 1.35, y, s / 25, s / 4);
    rect(x + s / 3.6, y + s / 4, s / 2, s / 25);
    fill(150);
    rect(x + s / 2.2, y - s / 20, s / 1.7, s / 6, s / 30);
    // Third platform (middle)
    fill(0);
    rect(x + s / 15, y - s / 5, s / 25, s / 3);
    fill(150);
    rect(x - s / 3.3, y - s / 3, s / 1.3, s / 6, s / 30);
    // Main Body made of grounds
    fill(150);
    rect(x - s / 2.6, y + s / 10, s / 1.3, s / 2.5, s / 20);

    // Two eyes
    bossEye(x - s / 7, y + s / 3.4, s / 5.7, "left", bossBlinks[1].blink);
    bossEye(x + s / 7, y + s / 3.4, s / 5.7, "right", bossBlinks[1].blink);

    // Shading
    stroke(255, 255, 255, 60);
    strokeWeight(s / 40);
    line(x + s / 2.9, y + s / 7, x + s / 2.9, y + s / 6.5);
    line(x + s / 2.9, y + s / 3.4, x + s / 2.9, y + s / 4.8);
  };
  var boss3Graphic = function boss3Graphic(x, y, s) {
    noStroke();
    // Body made of grounds
    fill(150);
    rect(x - s / 2, y - s / 3, s, s / 1.2, s / 10);
    rect(x - s / 1.3, y + s / 12, s / 2, s / 6, s / 10);
    rect(x - s / 1.3, y + s / 12, s / 2, s / 6, s / 30);
    rect(x + s / 4, y - s / 6, s / 2, s / 6, s / 30);

    // Two eyes
    bossEye(x - s / 4.7, y + s / 25, s / 4, "left", bossBlinks[2].blink);
    bossEye(x + s / 4.7, y + s / 25, s / 4, "right", bossBlinks[2].blink);

    // Shading
    stroke(255, 255, 255, 60);
    strokeWeight(s / 40);
    line(x + s / 2.2, y - s / 3.8, x + s / 2.2, y - s / 4.6);
    line(x + s / 2.2, y - s / 6.2, x + s / 2.2, y + s / 20);
  };
  // 
  function drawCrown(x, y, w, h) {
    stroke(0);
    strokeWeight(2);
    fill(255, 215, 0); // Royal Gold color

    // Spikes
    beginShape();
    vertex(x - w / 2, y); // Bottom-left
    vertex(x - w / 2, y - h / 1.5); // Left peak
    vertex(x - w / 5, y - h / 3); // Left dip
    vertex(x, y - h); // Center/Tallest peak
    vertex(x + w / 5, y - h / 3); // Right dip
    vertex(x + w / 2, y - h / 1.5); // Right peak
    vertex(x + w / 2, y); // Bottom-right
    endShape(CLOSE);

    // Brim
    rect(x - w / 2, y, w, h / 4);

    // Jewel
    fill(219, 21, 166);
    ellipse(x, y - h, w / 5, w / 5);
  }
  var larryText = ["!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!úúúú!!!!!úúú!!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!!!!!!úú!!!!!úúú₥₥úúúúú₥₥₥₥₥₥ú!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!!!!ú₥úúúúú!úú!!!úúúú!úúúúúúúúúú!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!úúúúúúúúú₥úú₥ú!!úú!!ú₥ú!!!!úúúúú!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!ú₥úúúúúúúúúúúúúúúúú!!!úúúúúúúúúú₥ú!!!!!!!!!!", "!!!!!!!!!!!!!!!!úúúúúúú₥úúúúúúúúú!!úúúú!!!ú₥úúúúúúúú!!!!!!!!!", "!!!!!!!!!!!!!!ú₥ú₥úú!!úúúúúúúúú₥úúúúúú!!!!!úúúúúúúú₥ú!!!!!!!!", "!!!!!!!!!!!!!!úúúúúú!!!ú₥ú₥úú!ú₥úúú₥!!!!ú!!!!!ú₥ú₥úúúú!!!!!!!", "!!!!!!!!!!!!!úú₥úúú₥úúúúúúúúú!!úúúúúú!úúú!!!!ú!ú₥úúúúú!!!!!!!", "!!!!!!!!!!!!!úú!ú₥ú₥ú!!!!úú₥ú!!!!!!!ú₥₥₥₥úú!úú!ú₥úú₥ú!ú!!!!!!", "!!!!!!!!!!!!úúú!úúú₥!!!!!!ú₥ú!!!!!!!úúúúú₥₥!úúúúú₥úúúú₥ú!!!!!", "!!!!!!!!!!!!úúúúúúúú!!!!!!ú₥ú!!!!!!!úú!!úúúúú!ú₥úúúúúúúú!!!!!", "!!!!!!!!!!!!ú₥úúúú₥ú!!!ú!!úú!!!!!!!úúú!!!ú₥ú!!úúúúúúúúú₥ú!!!!", "!!!!!!!!!!ú₥úúúúúú₥úúú₥₥úúúú!!!!!ú!ú₥ú!!!úúúú!úú!úúúú₥úúú!!!!", "!!!!!!!!!!úúúúúúúúúú₥úúúúú₥ú!!!!!ú!úúú!!!ú₥₥₥ú!ú!₥ú!!úúúú!!!!", "!!!!!!!!!!úúú₥úúúúúúúúú!!ú₥ú!!!!!!!ú₥ú!!!úúúú₥ú!úú₥ú!úú₥úú!!!", "!!!!!!!!!!úúúú₥úúú₥ú!ú!!!!úú!!!!!!!!úú!!!ú!!ú₥úú!₥₥ú!!úúúú!!!", "!!!!!!!!!!!ú!úúúúú₥ú!!!!!!ú₥ú!!!!úúúúú!!!!!!!₥úúúúúú!!!!!úú!!", "!!!!!!!!!!!!!!!úúú₥!!!!!!!!úú!!!!₥ú₥₥ú!!!!!!!ú₥ú!!úú!!!!!!ú!!", "!!!!!!ú!!!!!!!ú₥úúú!!!!!!!!ú₥!!!ú!!ú₥ú!!!!!!!ú₥úú₥ú!!!!!!!ú!!", "!!!!!!!!!!!!!úúúú₥ú!!!!!!!!ú₥ú!!ú!!ú₥ú!!!!!!!!ú₥úúú!!!!!!!ú!!", "!!!!!!!!!!!!!ú₥úú₥ú!!!!!!!!ú₥ú!!!!!!úú!!!!!!!!₥úú₥ú!ú!!!!!ú!!", "!!!!!!!!!!!!!ú₥úúúú!!!!!!!!ú₥!!!!!!!úú!!!!!!!úúú₥úúúú!!!!!!!!", "!!!!!!!ú!!!!!!úúúú₥!!!!!!!!úú!!!!!!!ú₥ú!!!!!!ú!!ú₥úúú!!!!!!!!", "!!!!!!!ú!!!!!!úúúúúú!!!!!úú₥ú!!ú!!!!!úúú!!!!!!!!!úúúú!!!!!!!!", "!!!!!!!!!!!!!!ú₥!úú₥₥úúúú₥₥ú!!úú!!!!!ú₥úúúúúú!!!!!úú!!!!!!!!!", "!!!!!!!!!!!!!!!úúúúúú₥úúúúúú!!!!!!!!!!úúúúú₥ú!!!!úú!!!!!!!!!!", "!!!!!!!!!!!!!!!!!úúúúú₥úúúúúú!!!!!!!úúúúúú₥ú!!!!úúú!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!ú₥úúú₥₥úúúúúúú₥₥úúúúúúúú₥ú!!úú₥ú!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!!úúúúúúúúú₥₥ú!úúú!!!ú₥úúúúúúúúú!!!!!!!!!!!!", "!!!!!!!!!!!ú!!!!!!!ú₥úú!!úúúúúú!!!!!!!úúúúú₥₥ú!!!!!!ú!!!!!!!!", "!!!!!!!!!!!₥ú!!!!!!!úú₥úúúú!!ú₥úúúúú!!úúúúúúúú!!!!!ú!!!!!!!!!", "!!!!!!!!!!!ú₥!!!!!!!!!ú₥₥úú!!úú₥₥ú₥úúúúú₥₥₥ú!!!!!!!ú!!!!!!!!!", "!!!!!!!!!!!!úú!!!!!!!!!úú!!!!!!úúú₥úú!!úúú!!!!!!!ú!ú!!!!!!!!!", "!!!!!!!!!!!!ú₥₥▮!!!!!!!!!!!!úúúúúúúúú!!!!!!!!úú!ú₥!!!!!!!!!!!", "!!!!!!!!!!!!!!▮▮ú!₥!!!!!!!!!!úúú!!!!!!!!!!!!!₥ú!₥▮!!!!!!!!!!!", "!!!!!!!!!!!!!!₥▮ú!₥!!ú!!!!!!!!!!!!!!!!!!!úú!!₥▮ú₥₥!!!!!!!!!!!", "!!!!!!!!!!!!!!!₥▮ú₥!₥▮!!úúú!!!!!!!!!!!!!ú₥ú!ú▮▮!úú!!!!!!!!!!!", "!!!!!!!!!!!!!!!!▮▮▮ú₥▮ú!₥▮₥!!ú₥ú!!!!!▮₥!ú▮▮!!▮▮!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!ú▮▮▮▮₥!₥▮▮₥!▮▮▮ú!ú▮▮▮▮!ú▮▮úú▮ú!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!ú▮▮▮▮ú▮▮▮ú!▮▮▮▮!₥▮▮▮▮₥▮▮▮₥▮₥!!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!!₥▮▮▮ú▮▮₥₥₥▮▮▮▮!ú▮▮▮▮▮▮▮₥₥▮ú!!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!!!!₥▮!▮úú▮▮▮▮▮▮₥₥▮▮▮▮▮▮▮₥ú!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!ú!!!!!!!!!!!!▮▮!▮▮▮▮▮▮▮▮▮▮▮▮úú₥!!!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!úú!!!!!!!!!!!!!!!₥▮▮▮▮₥₥▮₥▮▮ú!!!!!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!!ú!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!!úú!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!!ú₥!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!!!úú!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!úú!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!₥₥ú!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!ú!!úúú!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!úú!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ú!!!!!!!!!!!!", "!!!!!!!!!!!!ú!!!!úú!!!!!!!!!!!!!!!!!!!!!!!!!!₥₥!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!!₥₥!!!!!!!!!!!!!!!!!!!!!!ú₥▮▮!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!!₥₥!ú!!!!!!!!!!!!!!!!!₥₥!₥!▮₥!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!!!!!▮▮ú!!!!!!!!!!!ú₥ú!▮▮!₥!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!!!!!▮▮▮▮▮ú!₥ú!!úú!₥▮▮!ú₥!₥!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!!!!!úú!₥▮₥!▮▮₥▮▮▮!ú▮▮ú!!!ú!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!!!!!!!!ú▮ú!▮▮₥₥▮▮!!▮▮!!!!!!!!!!!!!!!!!!!!!!", "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ú!!!₥ú!!ú!!!!!!!!!!!!!!!!!!!!!!!"];
  var larryColors = {
    "!": color(0, 0, 0),
    "ú": color(122, 0, 0),
    "₥": color(153, 0, 8),
    "▮": color(255, 110, 125)
  };
  function draw2dLarry(x, y, size) {
    var createData = larryText;
    var colors = {
      "!": color(0, 0, 0),
      "ú": color(122, 0, 0),
      "₥": color(153, 0, 8),
      "▮": color(255, 110, 125)
    };
    drawHugePixelArt(x, y, size, createData, colors);
  }
  function grassSkin(x, y, size, frame) {
    var createData = ["bcacb", "cdebe", "egdef", "feege", "edfef"];
    var colors = {
      "a": color(150, 200, 0),
      "b": color(100, 150, 0),
      "c": color(125, 175, 0),
      "d": color(100, 30, 30),
      "e": color(135, 65, 65),
      "f": color(150, 90, 90),
      "g": color(100, 100, 100)
    };

    // Call the utility function 'drawHugePixelArt' (requires the utility code to be pasted above this)
    drawHugePixelArt(x, y, size, createData, colors, frame);
  }
  function pixelSkin(x, y, size, frame) {
    var createData = [["aaaaaaaa", "abcaacba", "abcaacba", "aaaaaaaa", "aaaaaaaa", "acaaaaca", "aaccccaa", "aaaaaaaa"],
    // looking right
    ["aaaaaaaa", "abcaabca", "abcaabca", "aaaaaaaa", "aaaaaaaa", "acaaaaca", "aaccccaa", "aaaaaaaa"],
    // looking left
    ["aaaaaaaa", "acbaacba", "acbaacba", "aaaaaaaa", "aaaaaaaa", "acaaaaca", "aaccccaa", "aaaaaaaa"]];
    var colors = {
      "a": color(255, 0, 0),
      "b": color(255, 255, 255),
      "c": color(0, 0, 0)
    };

    // Call the utility function 'drawHugePixelArt' (requires the utility code to be pasted above this)
    drawHugePixelArt(x, y, size, createData, colors, frame);
  }

  // Flip array
  function flipArray(canvasData, type) {
    if (type === "horrizontal") {
      return canvasData.reverse();
    } else {
      var flippedData = [];
      for (var i = 0; i < canvasData.length; i++) {
        flippedData.push(canvasData[i].split("").reverse().join(""));
      }
      return flippedData;
    }
  }
  var animationToggle = 0;
  var marioDir = "right";
  function drawMario(x, y, size) {
    var canvasData = [];
    if (animationToggle === 0) {
      canvasData = ["-----rrrr------", "----rrrrrrrr---", "----bbbbss-----", "---bssbssbsss--", "---bssbbssbsss-", "--bbbssssbbbb--", "-----sssssss---", "----bbbbbb-----", "---bbbbrrbb----", "---bbbrrsrr----", "---bbbbrrrrr---", "---rbsssrrrr---", "---rrssrrrrr---", "---rrrr-rrr----", "---bbb--bbb----", "---bbbb-bbbb---"];
    } else if (animationToggle === 1) {
      canvasData = ["-----rrrr------", "----rrrrrrrr---", "----bbbbss-----", "---bssbssbsss--", "---bssbbssbsss-", "--bbbssssbbbb--", "-----sssssss---", "--bbbbrrbb---ss", "ssbbbbrrrbbbsss", "sss-bbrsrrrbbss", "ss--rrrrrrr--b-", "---rrrrrrrrrbb-", "--rrrrrrrrrrbb-", "-bbbrr---rrrbb-", "-bbb-----------", "--bbb----------"];
    } else if (animationToggle === 2) {
      canvasData = ["-----rrrr------", "----rrrrrrrr---", "----bbbbss-----", "---bssbssbsss--", "---bssbbssbsss-", "--bbbssssbbbb--", "-----sssssss---", "----bbbbbr-s---", "---sbbbbbbsss--", "--ssrrbbbbss---", "bbrrrrrrrrrr---", "bbrrrrrrrrrr---", "bbrrrr--rrr----", "b------bbb-----", "-------bbbb----"];
    } else if (animationToggle === 3) {
      canvasData = ["------rrrr---sss", "-----rrrrrrrrsss", "-----bbbbss--bbb", "----bssbssbsssbb", "----bssbbssbsssb", "---bbbssssbbbbb-", "------sssssssb--", "--bbbbbrbbbrb---", "-bbbbbbbrbbbr--b", "ssbbbbbbrrrrr--b", "sss-rrbrrsrrsrbb", "-s-brrrrrrrrrrbb", "--bbbrrrrrrrrrbb", "-bbbrrrrrrr-----", "-b--rrrr--------"];
    }
    if (marioDir === "left") {
      canvasData = flipArray(canvasData);
    }
    var colorMap = {
      "r": color(255, 0, 0),
      "b": color(12, 35, 240),
      "s": color(255, 195, 170)
    };
    drawHugePixelArt(x, y, size, canvasData, colorMap);
  }

  // ]
  var imgs = {
    larry: {},
    grassImage: {},
    pixelSkinStraight: {},
    pixelSkinLeft: {},
    pixelSkinRight: {}
  };
  var activeSprite = imgs.pixelSkinStraight;
  var currentSkin = 0;

  // Player
  var Player = function Player(x, y) {
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.r = 0;

    // States
    this.paralyzed = false;
    this.frozen = false;
    this.frozenFrames = 0;
    this.hurtFrames = 0;

    // Decay State
    this.decayFrames = 0;
    this.isDecaying = false;

    // Launching
    this.launching = false;
    this.launchTargetX = 0;
    this.launchTargetY = 0;

    // Animation Targets
    this.visualW = this.w;
    this.visualH = this.h;
    this.targetW = this.w;
    this.targetH = this.h;
    this.stretchLerp = 0.3;
    this.recoveryLerp = 0.2;
    this.prevVy = 0;
    this.faceX = 0;
    this.faceY = 0;
    this.faceTargetX = 0;
    this.faceTargetY = 0;
    this.mouth = 'closed';

    // physics
    this.vx = 0;
    this.vy = 0;
    this.accel = 0.8;
    this.friction = 0.87;
    this.airFriction = 0.95;
    this.gravity = 0.6;
    this.jumpForce = -12;
    this.bounceForce = -25; // trampoline/spike

    this.maxSpeed = 6;
    this.terminalVelocity = 15;
    this.grounded = false;
    this.isVariableJumping = false; // Only normal jumps can be extended
    this.justLanded = false; // for landing particles
    this.prevGrounded = false;
    this.spikeCooldown = 0;

    // Death & Respawn
    this.lives = 10;
    this.deathTriggered = false;
    this.health = 100;
    this.deathTimer = 50;
    this.deathFrames = 0;
    this.dead = false;
    this.gameOver = false;
    this.spawning = false;
    this.spawningTimer = 0;
  };
  Player.prototype.update = function () {
    if (this.spawning && !this.dead) {
      this.spawningTimer++;
      if (this.spawningTimer < 10) {
        spawnParticles(this.x, this.y, 20, "spawn", 1.5);
      }
      if (this.spawningTimer > 27) {
        this.spawning = false;
      }
      return;
    }
    if (this.dead) {
      return;
    }

    // Decay Status Effect
    if (this.isDecaying) {
      this.decayFrames++;

      // Spawn green/purple rot decay particles around the player
      if (frameCount % 8 === 0) {
        // Generates particles around the player's bounding box
        var pX = this.x + random(-this.w / 2, this.w / 2);
        var pY = this.y + random(-this.h / 2, this.h / 2);
        spawnParticles(pX, pY, 1, "decay", 1.5);
      }

      // Deal 1 damage roughly every 7 frames (~25 damage over 180 frames)
      if (this.decayFrames % 9 === 0) {
        this.health -= 1;
        this.hurtFrames = 10; // Brief visual flash of pain
      }

      // End effect after 3 seconds (180 frames)
      if (this.decayFrames >= 180) {
        this.isDecaying = false;
        this.decayFrames = 0;
      }

      // Check for death if health drops to 0
      if (this.health <= 0) {
        this.health = 0;
        this.dead = true;
        // (Trigger your death/respawn methods here if needed)
      }
    }
    if (this.spikeCooldown > 0) {
      this.spikeCooldown--;
    }

    // Paralysis tick
    if (this.paralyzed) {
      this.paralyzedFrames++;
      if (this.paralyzedFrames >= this.paralyzedDuration) {
        this.paralyzed = false;
        this.paralyzedFrames = 0;
        this.spikeCooldown = 20; // brief grace after paralysis ends
      }
      this.vy += this.gravity; // still fall
      this.vy = min(this.vy, this.terminalVelocity);
      this.y += this.vy;
      this.grounded = false;
      return; // skip all input
    }
    if (this.frozen) {
      this.frozenFrames++;
      if (this.frozenFrames >= this.frozenDuration) {
        this.frozen = false;
        this.frozenFrames = 0;
        this.spikeCooldown = 20; // brief grace after paralysis ends
      }
      this.vy += this.gravity; // still fall
      this.vy = min(this.vy, this.terminalVelocity);
      this.y += this.vy;
      this.grounded = false;
      return; // skip all input
    }
    this.prevGrounded = this.grounded;
    this.prevVy = this.vy;
    var jumpKeyHeld = isPressed(UP) || isPressed('w') || isPressed(' ');
    activeSprite = imgs.pixelSkinStraight;

    // If launching is activated
    if (this.launching) {
      this.x = lerp(this.x, this.launchTargetX, 0.1);
      this.y = lerp(this.y, this.launchTargetY - 135, 0.1);
      var buffer = 40;
      if (round(this.x) - buffer <= this.launchTargetX && round(this.x) + buffer >= this.launchTargetX && round(this.y) - buffer <= this.launchTargetY && round(this.y) + buffer >= this.launchTargetY) {
        this.launching = false; // end launch
      }
    }

    // Stops if launching or ending level
    if (!this.launching && !levelEnd) {
      // horizontal movement
      if (isPressed(LEFT) || isPressed('a')) {
        // Move LEFT
        this.vx -= this.grounded ? this.accel : this.accel * 0.5;
        activeSprite = imgs.pixelSkinLeft;
        marioDir = "left";
        ballSkinRotation -= 2;
        if (this.grounded && abs(this.vx) > 2 && frameCount % 5 === 0) {
          // dust
          spawnParticles(this.x, this.y + this.h / 2, 1, "dust", 0.5);
        } // Particles if on the ground
      } else if (isPressed(RIGHT) || isPressed('d')) {
        // Move right
        this.vx += this.grounded ? this.accel : this.accel * 0.5;
        ballSkinRotation += 2;
        activeSprite = imgs.pixelSkinRight;
        marioDir = "right";
        if (this.grounded && abs(this.vx) > 2 && frameCount % 5 === 0) {
          // dust
          spawnParticles(this.x, this.y + this.h / 2, 1, "dust", 0.5);
        } // Particles if on ground
      } else {
        // friction
        this.vx *= this.grounded ? this.friction : this.airFriction;
        if (abs(this.vx) < 0.1) {
          this.vx = 0;
        }
      }

      // clamp speed
      this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);

      // Normal grounded jump
      if (jumpKeyHeld && this.grounded && !bossIntro) {
        this.vy = this.jumpForce;
        this.grounded = false;
        this.isVariableJumping = true;

        // jump particles
        spawnParticles(this.x, this.y + this.h / 2 + 6, 7, "dust", 1.4);
      }
    }

    // jump extending
    if (!this.grounded && this.vy < 0 && this.isVariableJumping) {
      if (jumpKeyHeld) {
        this.vy *= 1.017;
      } else {
        this.vy /= 1.15;
      }
    }

    // Face look direction
    if (isPressed(LEFT) || isPressed('a')) {
      this.faceTargetX = -5;
    } else if (isPressed(RIGHT) || isPressed('d')) {
      this.faceTargetX = 5;
    } else {
      this.faceTargetX = 0;
    }

    // Vertical expression
    if (this.vy < -1) {
      // Jumping upward
      this.faceTargetY = -2;
    } else if (this.vy > 1) {
      // Falling downward
      this.faceTargetY = 2;
    } else {
      this.faceTargetY = 0;
    }
    this.faceX = lerp(this.faceX, this.faceTargetX, 0.2);
    this.faceY = lerp(this.faceY, this.faceTargetY, 0.2);

    // Gravity
    this.vy += this.gravity;
    // Clamp terminal velocity
    this.vy = min(this.vy, this.terminalVelocity);

    // Dynamic Air Stretching
    if (!this.grounded) {
      // Stretch amount
      var stretchAmount = abs(this.vy) * 0.016;

      // Stretch vertically when moving fast (up or down), squash horizontally
      this.targetW = this.w / (1 + stretchAmount);
      this.targetH = this.h * (1 + stretchAmount);
    }
    // Move player
    //println(lvlEndScene);
    if (!levelEnd || lvlEndScene === 2) {
      this.y += this.vy;
    }
    if (!levelEnd) {
      this.x += this.vx;
    }
    this.grounded = false;
    if (currentSkin === 19 && frameCount % 2 === 0) {
      // Pass 'this' as the 6th argument so the particle can attach to you
      spawnParticles(this.x, this.y, 2, "pi", 0, this);
    }
    ballSkinRotation += this.vx * 2.5;
  };
  Player.prototype.drawBase = function (w, h, bodyColor, fX, fY, fYMove) {
    var scaleOffset = this.w * 0.25;

    // Body
    fill(bodyColor);
    noStroke();
    var cornerRad = w * 0.25;
    rect(-w / 2, -h, w, h, cornerRad);

    // Eyes
    if (this.hurtFrames > 0) {
      stroke(0);
      strokeWeight((this.w + this.h) / 30);
      // Left eye
      line(fX - scaleOffset * 1.4, fY, fX - scaleOffset / 2, fY);
      line(fX - scaleOffset * 1.1, fY - scaleOffset / 2, fX - scaleOffset / 2, fY);
      line(fX - scaleOffset * 1.1, fY + scaleOffset / 2, fX - scaleOffset / 2, fY);
      // Right eye
      line(fX + scaleOffset * 1.4, fY, fX + scaleOffset / 2, fY);
      line(fX + scaleOffset * 1.1, fY - scaleOffset / 2, fX + scaleOffset / 2, fY);
      line(fX + scaleOffset * 1.1, fY + scaleOffset / 2, fX + scaleOffset / 2, fY);
    } else {
      fill(255);
      ellipse(fX / 2 - scaleOffset, fY, this.w / 3, this.w / 3);
      ellipse(fX / 2 + scaleOffset, fY, this.w / 3, this.w / 3);
      fill(0);
      ellipse(fX - scaleOffset, fY + fYMove * 0.5, this.w / 6, this.w / 6);
      ellipse(fX + scaleOffset, fY + fYMove * 0.5, this.w / 6, this.w / 6);
    }

    // Mouth
    var mouthY = fY + h * 0.32;
    if (this.hurtFrames > 0) {
      noStroke();
      fill(0);
      ellipse(fX / 2, mouthY / 1.15, this.w / 6, this.h / 6);
    } else {
      if (this.mouth === 'closed') {
        stroke(0);
        noFill();
        strokeWeight(this.w * 0.05);
        arc(fX / 2, mouthY, this.w / 2, this.w / 3, 0, 180);
      } else if (this.mouth === 'open') {
        stroke(0);
        strokeWeight(this.w * 0.05);
        line(fX / 2 - scaleOffset, mouthY, fX / 2 + scaleOffset, mouthY);
        arc(fX / 2, mouthY, this.w / 2, this.w / 3, 0, 180);
      } else {
        noStroke();
        fill(0);
        ellipse(fX / 2, mouthY / 1.15, this.w / 6, this.h / 6);
      }
    }
  };
  var masterXScroll;
  Player.prototype.draw = function () {
    if (this.spawning || this.dead) {
      return;
    }
    if (this.paralyzed) {
      this.targetW = this.w;
      this.targetH = this.h;
      this.visualW = this.w;
      this.visualH = this.h;
    }
    // Smoothly pull the target back to base size
    this.targetW = lerp(this.targetW, this.w, this.recoveryLerp);
    this.targetH = lerp(this.targetH, this.h, this.recoveryLerp);
    this.visualW = lerp(this.visualW, this.targetW, this.stretchLerp);
    this.visualH = lerp(this.visualH, this.targetH, this.stretchLerp);

    // Face Position Logic
    var scaleOffset = this.w * 0.25;
    var faceX = constrain(this.vx * 0.7, -scaleOffset, scaleOffset);
    var faceYMove = constrain(this.vy * 0.3, -this.h * 0.25, this.h * 0.25);
    var faceY = -this.visualH * 0.65 + faceYMove;

    // Get current skin data safely
    var sData = skins[currentSkin] || {
      mainColor: color(255, 0, 0)
    };
    pushMatrix();
    // Origin (0,0) is now set to the bottom-center of the player
    translate(this.x, this.y + this.h / 2);
    rotate(this.r);

    // Skin Switcher
    switch (currentSkin) {
      case 1:
        // Classic
        noStroke();
        fill(sData.mainColor);
        rect(-this.w / 2, -this.h, this.w, this.h);
        break;
      case 2:
        // Chef
        this.drawBase(this.visualW, this.visualH, sData.mainColor, faceX, faceY, faceYMove);

        // JUICY HAT PHYSICS:
        // Calculate a visual lag based on vertical velocity (vy).
        // When falling (vy is +), hat moves UP (-Y) to look like it's lifting off.
        var hatLagY = -constrain(this.vy * 0.5, -8, 12);

        // Dampen the squash/stretch so the hat stays relativelyy structured
        var hatW = lerp(this.w, this.visualW, 0.3);
        var hatH = lerp(this.h, this.visualH, 0.3);

        // Position the hat base right on top of the dynamic head position + lag
        var hX = faceX * 0.3; // Hat slightly leans into face direction
        var hY = -this.visualH + hatLagY;
        stroke(0);
        strokeWeight(2);
        fill(255);

        // Top puffs 
        ellipse(hX + hatW / 2, hY - hatH / 3, hatW / 1.5, hatH / 1.5);
        ellipse(hX - hatW / 2, hY - hatH / 3, hatW / 1.5, hatH / 1.5);
        ellipse(hX, hY - hatH / 2, hatW / 1.5, hatH / 1.5);

        // Base fill
        noStroke();
        rect(hX - hatW / 2, hY - hatH / 2, hatW, hatH / 1.6);

        // Brim detailing lines
        stroke(0);
        line(hX - hatW / 2, hY + hatH / 7, hX - hatW / 2, hY - hatH / 4);
        line(hX + hatW / 2, hY + hatH / 7, hX + hatW / 2, hY - hatH / 4);
        line(hX - hatW / 2, hY + hatH / 8, hX + hatW / 2, hY + hatH / 8);
        break;
      case 3:
        // Minecraft block
        imageMode(CENTER);
        image(imgs.grassImage, 0, -this.visualH / 2, this.visualW, this.visualH);
        break;
      case 4:
        // Sphere Costume 
        pushMatrix();
        // Apply squash/stretch as a global matrix scale BEFORE rotating.
        // This keeps the squash axis locked to the world floor
        var floorOffset = (this.h - this.visualH) / 2;

        //Translate to the base center, then push DOWN by the floorOffset
        // to perfectly counteract the center-squash floating effect.
        translate(0, -this.h / 2 + floorOffset);
        scale(this.visualW / this.w, this.visualH / this.h);

        // Draw the body as a perfect circle (the scale transform turns it into an ellipse)
        fill(sData.mainColor);
        noStroke();
        ellipse(0, 0, this.w, this.h);

        // Rotate the face texture independently INSIDE the squashed space
        pushMatrix();
        rotate(ballSkinRotation);

        // Draw features using standard base dimensions (scale handles the deformation)
        fill(255);
        ellipse(-this.w / 4.5, -this.h / 7, this.w / 3, this.h / 3);
        ellipse(this.w / 4.5, -this.h / 7, this.w / 3, this.h / 3);
        fill(0);
        ellipse(-this.w / 4.5, -this.h / 7, this.w / 6, this.h / 6);
        ellipse(this.w / 4.5, -this.h / 7, this.w / 6, this.h / 6);
        noFill();
        stroke(0);
        strokeWeight(this.w / 20);
        arc(0, this.h / 7, this.w / 2, this.h / 3, 0, 180);
        popMatrix(); // Exit face rotation
        popMatrix(); // Exit squash scale
        break;
      case 5:
        boss1Graphic(0, -this.h / 2, this.w);
        break;
      case 6:
        // Boing Skin

        // Shortcut variables
        var w = this.visualW;
        var h = this.visualH;
        var eyeXOffset = faceX;
        var eyeYBase = faceY + h * 0.05;

        // legs
        stroke(0, 150, 0);
        noFill();
        strokeWeight(w / 10);
        var mouthY = -h + h / 1.1 + faceYMove;

        // Left Mouth Arc
        arc(-w * 0.15, mouthY, w, h * 1.3, 180, 239);
        // Right Mouth Arc
        arc(w * 0.15, mouthY, w, h * 1.3, 301, 360);
        noStroke();
        fill(50, 100, 180);

        // Main body
        rect(-this.visualW / 2, -this.visualH, this.visualW, this.visualH, this.visualW / 3);

        // Eyes
        fill(255, 255, 0);
        noStroke();
        // Left Eye
        ellipse(-w * 0.15 + eyeXOffset, eyeYBase, w / 5, h / 2);
        // Right Eye
        ellipse(w * 0.15 + eyeXOffset, eyeYBase, w / 5, h / 2);
        break;

      // No DK Converter was used. It was entirely traced by hand (trust)
      case 7:
        imageMode(CENTER);
        image(imgs.larry, 0, -this.h / 2, this.w, this.h);
        break;
      case 8:
        // Warrior Skin 
        // more shortcuts
        var w = this.visualW;
        var h = this.visualH;
        var fX = faceX;
        var fY = faceY;
        var fYMove = faceYMove;

        // drawbase handles the body, eyes, hurt frames, and mouth perfectly
        this.drawBase(w, h, color(255, 0, 0), fX, fY, fYMove);

        // cute hat
        var hatLagY = -constrain(this.vy * 0.3, -6, 8);
        var hatY = -h + hatLagY;

        // Helmet Plume 
        fill(200, 30, 30);
        noStroke();
        arc(fX * 0.2, hatY - 2, w * 0.5, h * 0.4, 180, 360);

        // Helmet Base 
        fill(140, 150, 160);
        stroke(0);
        strokeWeight(2);
        arc(fX * 0.2, hatY + 5, w * 1.05, h * 0.6, 180, 360);

        // Nose Guard
        fill(100, 110, 120);
        noStroke();
        triangle(fX * 0.2 - w * 0.08, hatY + 4, fX * 0.2 + w * 0.08, hatY + 4, fX * 0.2, hatY + h * 0.25);

        // shield
        // goes in the direction the player is going
        var shieldX = fX > 0 ? w * 0.65 : -w * 0.65;
        var shieldY = -h * 0.4 + fYMove * 0.3;
        var shieldW = w * 0.45;
        var shieldH = h * 0.6;

        // Outer Shield
        fill(205, 127, 50);
        stroke(0);
        strokeWeight(2);
        beginShape();
        vertex(shieldX - shieldW / 2, shieldY - shieldH / 2);
        vertex(shieldX + shieldW / 2, shieldY - shieldH / 2);
        bezierVertex(shieldX + shieldW / 2, shieldY + shieldH / 4, shieldX, shieldY + shieldH / 2, shieldX, shieldY + shieldH / 1.8);
        bezierVertex(shieldX, shieldY + shieldH / 2, shieldX - shieldW / 2, shieldY + shieldH / 4, shieldX - shieldW / 2, shieldY - shieldH / 2);
        endShape(CLOSE);

        // Inner Shield Core 
        fill(110, 120, 130);
        beginShape();
        vertex(shieldX - shieldW / 3, shieldY - shieldH / 2.5);
        vertex(shieldX + shieldW / 3, shieldY - shieldH / 2.5);
        bezierVertex(shieldX + shieldW / 3, shieldY + shieldH / 5, shieldX, shieldY + shieldH / 2.5, shieldX, shieldY + shieldH / 2.2);
        bezierVertex(shieldX, shieldY + shieldH / 2.5, shieldX - shieldW / 3, shieldY + shieldH / 5, shieldX - shieldW / 3, shieldY - shieldH / 2.5);
        endShape(CLOSE);
        break;
      case 9:
        // Pixel Dash
        // No squash/stretch.
        imageMode(CENTER);
        image(activeSprite, 0, -this.h / 2, this.h, this.h);
        break;
      case 10:
        boss2Graphic(0, -this.h / 2, this.w);
        break;
      case 11:
        // Dino Costume
        // basic setup
        var w = this.visualW;
        var h = this.visualH;
        var lagY = -constrain(this.vy * 0.3, -5, 5);
        var topHead = -h + lagY;
        var dinoGreen = color(46, 139, 87);
        var dashRed = color(230, 40, 40);

        // Draw the base
        fill(dashRed);
        noStroke();
        var cornerRad = w * 0.25;
        rect(-w / 2, topHead, w, h, cornerRad);

        // Eyes (copied mostly)
        var scaleOffset = this.w * 0.25;
        var dinoFX = faceX;
        var dinoFY = topHead + h * 0.5; // Centers the eyes in the mouth window

        if (this.hurtFrames > 0) {
          stroke(0);
          strokeWeight((this.w + this.h) / 30);
          // Left eye
          line(dinoFX - scaleOffset * 1.4, dinoFY, dinoFX - scaleOffset / 2, dinoFY);
          line(dinoFX - scaleOffset * 1.1, dinoFY - scaleOffset / 2, dinoFX - scaleOffset / 2, dinoFY);
          line(dinoFX - scaleOffset * 1.1, dinoFY + scaleOffset / 2, dinoFX - scaleOffset / 2, dinoFY);
          // Right eye
          line(dinoFX + scaleOffset * 1.4, dinoFY, dinoFX + scaleOffset / 2, dinoFY);
          line(dinoFX + scaleOffset * 1.1, dinoFY - scaleOffset / 2, dinoFX + scaleOffset / 2, dinoFY);
          line(dinoFX + scaleOffset * 1.1, dinoFY + scaleOffset / 2, dinoFX + scaleOffset / 2, dinoFY);
        } else {
          fill(255);
          ellipse(dinoFX / 2 - scaleOffset, dinoFY, this.w / 3, this.w / 3);
          ellipse(dinoFX / 2 + scaleOffset, dinoFY, this.w / 3, this.w / 3);
          fill(0);
          ellipse(dinoFX - scaleOffset, dinoFY + faceYMove * 0.5, this.w / 6, this.w / 6);
          ellipse(dinoFX + scaleOffset, dinoFY + faceYMove * 0.5, this.w / 6, this.w / 6);
        }
        stroke(0);
        strokeWeight(1);

        // top green hood
        fill(dinoGreen);
        rect(-w / 2, topHead, w, h * 0.25, cornerRad, cornerRad, 0, 0);

        // Lower jaw
        fill(dinoGreen);
        rect(-w / 2, topHead + h * 0.72, w, h * 0.28, 0, 0, cornerRad, cornerRad);

        // Top teeth
        fill(255);
        var topToothY = topHead + h * 0.25;
        var toothW = w / 4;
        for (var i = 0; i < 4; i++) {
          var tx = -w / 2 + i * toothW;
          triangle(tx, topToothY, tx + toothW / 2, topToothY + 7, tx + toothW, topToothY);
        }

        // Bottom teeth
        var botToothY = topHead + h * 0.72;
        for (var i = 0; i < 4; i++) {
          var tx = -w / 2 + i * toothW;
          var bx = tx + toothW * 0.25;
          if (bx + toothW / 2 < w / 2) {
            triangle(tx, botToothY, tx + toothW / 2, botToothY - 6, tx + toothW, botToothY);
          }
        }

        // Orange dino spikes
        fill(255, 140, 0);
        triangle(-w / 4, topHead, -w / 6, topHead - 12, 0, topHead);
        triangle(0, topHead, w / 6, topHead - 12, w / 4, topHead);

        // Dino eyes
        noStroke();
        fill(0);
        ellipse(-w / 3, -h / 1.2, w / 10, h / 10);
        ellipse(w / 3, -h / 1.2, w / 10, h / 10);
        break;
      case 12:
        // Zapp Costume 
        var w = this.visualW;
        var h = this.visualH;
        var lagY = -constrain(this.vy * 0.3, -5, 5);
        var topHead = -h + lagY;
        var bodyColor = color(190);
        var hairColor = color(255, 255, 0);
        stroke(0);
        strokeWeight(2);
        fill(bodyColor);
        var cornerRad = w * 0.15;
        rect(-w / 2, topHead, w, h, cornerRad);
        fill(hairColor);
        beginShape();
        vertex(-w / 2, topHead + h * 0.25);

        // Inner forehead zig-zags
        vertex(-w * 0.25, topHead + h * 0.15);
        vertex(0, topHead + h * 0.28);
        vertex(w * 0.25, topHead + h * 0.15);
        vertex(w / 2, topHead + h * 0.25);

        // Outer boundary up to the top lightning spikes
        vertex(w / 2, topHead);
        vertex(w * 0.35, topHead - h * 0.25); // Right spike peak
        vertex(w * 0.18, topHead - h * 0.05); // Dip
        vertex(0, topHead - h * 0.40); // Center tallest spike peak
        vertex(-w * 0.18, topHead - h * 0.05); // Dip
        vertex(-w * 0.35, topHead - h * 0.25); // Left spike peak
        vertex(-w / 2, topHead);
        endShape(CLOSE);

        // Eyes
        var eyeSize = w * 0.34;
        var eyeY = topHead + h / 1.1 + faceY / 2;
        var eyeOffset = w * 0.23 + faceX / 2;

        // Left Outer Eye Circle
        fill(255, 240, 0);
        ellipse(eyeOffset - w / 2.1, eyeY, eyeSize, eyeSize);
        // Right Outer Eye Circle
        ellipse(eyeOffset, eyeY, eyeSize, eyeSize);

        // Left Outer Eye arc
        fill(255, 50, 0);
        arc(eyeOffset - w / 2.1, eyeY, eyeSize, eyeSize, 200, 380);
        // Right Outer Eye Arc
        arc(eyeOffset, eyeY, eyeSize, eyeSize, 160, 340);
        fill(hairColor);
        strokeWeight(1);
        var footW = w * 0.12;
        var footH = h * 0.28;
        var footY = -h * 0.1;
        rect(-w * 0.42, footY, footW, footH, footW / 2);
        rect(-w * 0.26, footY, footW, footH, footW / 2);
        rect(w * 0.14, footY, footW, footH, footW / 2);
        rect(w * 0.30, footY, footW, footH, footW / 2);
        break;
      case 13:
        // Ninja Skin
        var w = this.visualW;
        var h = this.visualH;
        var fX = faceX;
        var fY = faceY;
        var fYMove = faceYMove;
        var cornerRad = w * 0.25;
        this.drawBase(w, h, color(255, 0, 0), fX, fY, fYMove);
        var maskColor = color(0, 0, 0);
        fill(maskColor);
        noStroke();
        rect(-w / 2, -h, w, h * 0.25, cornerRad, cornerRad, 0, 0);
        rect(-w / 2, -h * 0.52, w, h * 0.52, 0, 0, cornerRad, cornerRad);
        stroke(122, 0, 0);
        strokeWeight(w * 0.04);
        var lineY1 = -h + h * 0.12;
        var lineY2 = -h + h * 0.22;
        line(-w / 2 + 3, lineY1, w / 2 - 3, lineY1);
        line(-w / 2 + 3, lineY2, w / 2 - 3, lineY2);
        var starX = -w * 0.55 + fX * 0.1;
        var starY = -h * 0.25 + fYMove * 0.3;
        var starSize = w * 0.3;
        fill(160, 170, 175);
        stroke(120, 120, 120);
        strokeWeight(1.5);
        pushMatrix();
        translate(starX, starY);
        rotate(15);
        beginShape();
        for (var i = 0; i < 8; i++) {
          // Alternates between long sharp points and inner dips
          var angle = i * 45;
          var radius = i % 2 === 0 ? starSize / 2 : starSize / 5;
          var sx = cos(angle) * radius;
          var sy = sin(angle) * radius;
          vertex(sx, sy);
        }
        endShape(CLOSE);

        // Center point hole detail of the shuriken
        fill(maskColor);
        noStroke();
        ellipse(0, 0, starSize / 5, starSize / 5);
        popMatrix();
        break;
      case 14:
        drawMario(0, -this.h / 2, this.w / 15);
        break;
      case 15:
        boss3Graphic(0, -this.h / 2, this.w);
        break;
      case 16:
        // ech0
        var scaleOffset = this.w * 0.25;
        var fX = faceX;
        var fY = faceY;
        var w = this.visualW;
        var h = this.visualH;

        // Body (Using your custom semi-transparent blue color)
        fill(0, 0, 140, 170);
        noStroke();
        var cornerRad = w * 0.25;
        rect(-w / 2, -h, w, h, cornerRad);

        // Eyes (1:1 copy from your original drawBase function)
        if (this.hurtFrames > 0) {
          stroke(0);
          strokeWeight((this.w + this.h) / 30);
          // Left eye
          line(fX - scaleOffset * 1.4, fY, fX - scaleOffset / 2, fY);
          line(fX - scaleOffset * 1.1, fY - scaleOffset / 2, fX - scaleOffset / 2, fY);
          line(fX - scaleOffset * 1.1, fY + scaleOffset / 2, fX - scaleOffset / 2, fY);
          // Right eye
          line(fX + scaleOffset * 1.4, fY, fX + scaleOffset / 2, fY);
          line(fX + scaleOffset * 1.1, fY - scaleOffset / 2, fX + scaleOffset / 2, fY);
          line(fX + scaleOffset * 1.1, fY + scaleOffset / 2, fX + scaleOffset / 2, fY);
        } else {
          fill(255);
          ellipse(fX / 2 - scaleOffset, fY, this.w / 3, this.w / 3);
          ellipse(fX / 2 + scaleOffset, fY, this.w / 3, this.w / 3);
          fill(166, 0, 0);
          ellipse(fX - scaleOffset, fY + faceYMove * 0.5, this.w / 6, this.w / 6);
          ellipse(fX + scaleOffset, fY + faceYMove * 0.5, this.w / 6, this.w / 6);
        }
        break;
      case 17:
        // a relic
        var w = this.visualW;
        var h = this.visualH;
        var bodyColor = sData.mainColor;
        var fX = faceX;
        var fY = faceY;
        var fYMove = faceYMove;
        var scaleOffset = this.w * 0.25;

        // 
        fill(255, 0, 0);
        noStroke();
        var cornerRad = w * 0.25;
        rect(-w / 2, -h, w, h, cornerRad);
        if (this.hurtFrames > 0) {
          stroke(0);
          strokeWeight((this.w + this.h) / 30);
          // Left eye
          line(fX - scaleOffset * 1.4, fY, fX - scaleOffset / 2, fY);
          line(fX - scaleOffset * 1.1, fY - scaleOffset / 2, fX - scaleOffset / 2, fY);
          line(fX - scaleOffset * 1.1, fY + scaleOffset / 2, fX - scaleOffset / 2, fY);
          // Right eye
          line(fX + scaleOffset * 1.4, fY, fX + scaleOffset / 2, fY);
          line(fX + scaleOffset * 1.1, fY - scaleOffset / 2, fX + scaleOffset / 2, fY);
          line(fX + scaleOffset * 1.1, fY + scaleOffset / 2, fX + scaleOffset / 2, fY);
        } else {
          fill(255);
          ellipse(fX / 2 - scaleOffset, fY, this.w / 3, this.w / 3);
          ellipse(fX / 2 + scaleOffset, fY, this.w / 3, this.w / 3);
          fill(0);
          ellipse(fX - scaleOffset, fY - fYMove * 0.5 + 2, this.w / 6, this.w / 6);
          ellipse(fX + scaleOffset, fY - fYMove * 0.5 - 2, this.w / 6, this.w / 6);
        }
        var mouthY = fY + h * 0.32;
        if (this.hurtFrames <= 0) {
          noStroke();
          fill(0);
          ellipse(fX / 2, mouthY / 1.15, this.w / 6, this.h / 6);
        } else {
          stroke(0);
          noFill();
          strokeWeight(this.w * 0.05);
          arc(fX / 2, mouthY, this.w / 2, this.w / 3, 0, 180);
        }
        break;
      case 18:
        // Kineto
        pushMatrix();
        scale(0.5);
        translate(-300, -340);

        // Layer 4
        fill(0, 230, 255);
        stroke(0, 0, 0);
        strokeWeight(4);
        beginShape();
        vertex(306, 304);
        bezierVertex(326, 324, 356, 219, 376, 239);
        bezierVertex(372, 331, 319, 301, 338, 309);
        vertex(263, 312);
        bezierVertex(260, 302, 228, 317, 218, 240);
        bezierVertex(244, 218, 244, 285, 296, 306);
        vertex(306, 305);
        endShape();
        // Layer 5
        fill(60, 60, 255);
        stroke(0, 0, 0);
        strokeWeight(4);
        beginShape();
        vertex(222, 250);
        vertex(269, 304);
        vertex(259, 317);
        vertex(245, 306);
        vertex(235, 292);
        vertex(223, 273);
        vertex(221, 249);
        endShape();
        // Layer 6
        fill(60, 60, 255);
        stroke(0, 0, 0);
        strokeWeight(4);
        beginShape();
        vertex(373, 252);
        vertex(333, 299);
        vertex(346, 309);
        vertex(365, 287);
        vertex(374, 269);
        vertex(373, 251);
        endShape();
        popMatrix();
        fill(0, 200, 255);
        noStroke();
        rect(-this.visualW / 2, -this.visualH, this.visualW, this.visualH, this.visualW * 0.25);
        pushMatrix();
        scale(0.5);
        translate(-300, -340);

        // Layer 3
        fill(0, 0, 200);
        stroke(0, 0, 0);
        strokeWeight(4);
        beginShape();
        vertex(279, 338);
        bezierVertex(291, 304, 310, 306, 323, 340);
        vertex(281, 340);
        endShape();

        // Layer 2
        fill(0, 150, 255);
        stroke(0, 0, 0);
        strokeWeight(4);
        beginShape();
        vertex(245, 319);
        bezierVertex(272, 312, 284, 319, 301, 326);
        bezierVertex(320, 319, 328, 310, 360, 321);
        bezierVertex(345, 286, 306, 297, 297, 286);
        bezierVertex(295, 299, 270, 276, 242, 319);
        endShape();

        // Layer 1
        fill(0, 230, 255);
        stroke(0, 0, 0);
        strokeWeight(2);
        beginShape();
        vertex(276, 261);
        bezierVertex(287, 247, 296, 222, 301, 204);
        bezierVertex(306, 223, 311, 248, 323, 261);
        bezierVertex(343, 281, 347, 283, 361, 281);
        bezierVertex(362, 302, 348, 295, 337, 307);
        bezierVertex(326, 327, 308, 320, 303, 339);
        bezierVertex(295, 322, 276, 327, 262, 303);
        bezierVertex(253, 293, 243, 304, 239, 282);
        bezierVertex(259, 278, 260, 276, 277, 263);
        endShape();
        popMatrix();
        fill(0, 120, 255);
        noStroke();
        ellipse(-this.visualW * 0.25 + faceX / 2, this.y - this.visualH / 1.7, this.visualW / 4, this.visualH / 5);
        ellipse(this.visualW * 0.25 + faceX / 2, this.y - this.visualH / 1.7, this.visualW / 4, this.visualH / 5);
        fill(255);
        ellipse(-this.visualW * 0.2 + faceX / 2, this.y - this.visualH / 1.8, this.visualW / 13, this.visualH / 13);
        ellipse(this.visualW * 0.2 + faceX / 2, this.y - this.visualH / 1.8, this.visualW / 13, this.visualH / 13);
        break;
      case 19:
        // Digits of Pi Skin 
        // base
        fill(255, 0, 0);
        noStroke();
        rect(-this.visualW / 2, -this.visualH, this.visualW, this.visualH, this.visualW * 0.25);
        pushMatrix();
        var sFace = this.visualW * 0.25;
        translate(sFace - sFace, sFace - sFace / 3.1);
        noStroke();
        fill(0);

        // Eyes
        ellipse(faceX / 2 - sFace * 1.335, faceY - sFace / 5.5, sFace / 1.9, sFace / 1.9);
        ellipse(faceX / 2 + sFace * 1.43, faceY - sFace / 1.9, sFace / 1.9, sFace / 1.9);

        // Mouth 
        strokeWeight(sFace / 10);
        stroke(0);
        noFill();
        if (this.hurtFrames <= 0) {
          // Smile
          arc(faceX / 2 + sFace / 10, faceY - sFace / 10, sFace / 1.3, sFace / 1.3, -7, 176);
        } else {
          // Frown
          arc(faceX / 2 + sFace / 10, faceY + sFace / 5, sFace / 1.3, sFace / 1.3, 187, 341);
        }
        popMatrix();

        // top hat
        var hatLagY = -constrain(this.vy * 2, 0, 12);
        var hatW = lerp(this.w, this.visualW, 0.3);
        var hatH = lerp(this.h, this.visualH, 0.3);
        var hX = faceX * 0.3;
        var hY = -this.visualH + hatLagY;
        stroke(0);
        strokeWeight(this.h / 15);

        // Hat Brim Base
        fill(25, 25, 25);
        rect(hX - hatW * 0.6, hY, hatW * 1.2, hatH * 0.15, hatW);
        // Hat Tall Main Crown
        rect(hX - hatW * 0.4, hY - hatH * 0.75, hatW * 0.8, hatH * 0.75);

        // Red Highlight Ribbon Accent
        fill(255, 0, 0);
        noStroke();
        rect(hX - hatW * 0.39, hY - hatH * 0.14, hatW * 0.78, hatH * 0.13);
        break;
      case 20:
        // champion!
        this.drawBase(this.visualW, this.visualH, sData.mainColor, faceX, faceY, faceYMove);
        var hatLagY = -constrain(this.vy * 0.5, -8, 12);
        var baseW = lerp(this.w, this.visualW, 0.3);
        var baseH = lerp(this.h, this.visualH, 0.3);
        var hatW = baseW;
        var hatH = baseH * 0.55;
        var hX = faceX * 0.3;
        var hY = -this.visualH + hatLagY;
        drawCrown(hX, hY, hatW, hatH);
        break;
      case 21:
        var w = this.visualW;
        var h = this.visualH;
        var x = faceX;
        var y = faceY + h / 6;
        var s = w * 2;
        fill(255, 0, 255);
        noStroke();
        var cornerRad = w * 0.25;
        rect(-w / 2, -h, w, h, cornerRad);

        // Left Eye (White Base)
        fill(255, 255, 255, 255);
        beginShape();
        vertex(x - s / 29.57, y - s / 8);
        vertex(x - s / 5.56, y - s / 5.88);
        bezierVertex(x - s / 6.25, y + s / 13.33, x - s / 15.38, y + s / 15.38, x - s / 29.57, y - s / 8);
        endShape();

        // Right Eye (White Base)
        fill(255, 254, 254, 255);
        beginShape();
        vertex(x + s / 16.67, y - s / 8);
        vertex(x + s / 5.18, y - s / 5.88);
        bezierVertex(x + s / 5.26, y + s / 13.33, x + s / 15.38, y + s / 15.38, x + s / 16.67, y - s / 8);
        endShape();

        // Left Eye (Black Iris)
        fill(0, 0, 0, 255);
        stroke(0, 0, 0, 255);
        strokeWeight(s / 100);
        beginShape();
        vertex(x - s / 7.69, y - s / 6.89);
        vertex(x - s / 13.33, y - s / 7.4);
        bezierVertex(x - s / 11.11, y + s / 20, x - s / 7.14, y - s / 22.22, x - s / 7.69, y - s / 6.89);
        endShape();

        // Left Pupil Glow
        noStroke();
        fill(255, 255, 255, 255);
        ellipse(x - s / 10.52, y - s / 8, s / 40, s / 40);

        // Right Eye (Black Iris)
        fill(0, 0, 0, 255);
        stroke(0, 0, 0, 255);
        strokeWeight(s / 100);
        beginShape();
        vertex(x + s / 10.52, y - s / 7.14);
        vertex(x + s / 6.45, y - s / 6.45);
        bezierVertex(x + s / 6.45, y - s / 100, x + s / 10, y + s / 28.57, x + s / 10.52, y - s / 7.14);
        endShape();

        // Right Pupil Glow
        noStroke();
        fill(255, 255, 255, 255);
        ellipse(x + s / 7.4, y - s / 7.4, s / 40, s / 40);

        // Mouth
        noFill();
        stroke(0, 0, 0, 255);
        strokeWeight(s / 66.7);
        beginShape();
        vertex(x - s / 9.52, y + s / 7.4);
        bezierVertex(x - s / 14.28, y + s / 11.11, x + s / 14.28, y + s / 11.11, x + s / 9.52, y + s / 7.4);
        endShape();
        break;
      default:
        // Fallback to base (Skin 0 / Default)
        this.drawBase(this.visualW, this.visualH, color(255, 0, 0), faceX, faceY, faceYMove);
        break;
    }

    // --- Overlays & Effects ---
    if (this.paralyzed) {
      pushMatrix();
      // Pulsing electric aura
      var pulse = sin(frameCount * 0.25) * 0.5 + 0.8;
      noFill();

      // Outer glow layers
      for (var i = 3; i > 0; i--) {
        var alpha = (60 + i * 25) * pulse;
        stroke(255, 240, 80, alpha);
        strokeWeight(6 + i * 3);
        rect(-this.visualW / 2 - i * 4, -this.visualH - i * 4, this.visualW + i * 8, this.visualH + i * 8, this.visualW * 0.3);
      }

      // Bright core outline
      stroke(255, 255, 120, 220);
      strokeWeight(3);
      rect(-this.visualW / 2, -this.visualH, this.visualW, this.visualH, this.visualW * 0.25);

      // Electric arcs / lightning bolts
      stroke(255, 255, 100, 255);
      strokeWeight(2.5);
      var time = frameCount * 0.3;
      for (var i = 0; i < 6; i++) {
        var baseAngle = i / 6 * 360 + time * 25;
        var offset = sin(time * 2 + i * 1.3) * 25;
        var x1 = cos(baseAngle) * this.w * 0.45;
        var y1 = sin(baseAngle) * this.h * 0.45 - this.h * 0.4;
        var x2 = cos(baseAngle + offset) * this.w * 0.85;
        var y2 = sin(baseAngle + offset) * this.h * 0.75 - this.h * 0.45;
        var mx = (x1 + x2) * 0.5 + random(-12, 12);
        var my = (y1 + y2) * 0.5 + random(-12, 12);
        line(x1, y1, mx, my);
        line(mx, my, x2, y2);
      }
      if (frameCount % 5 < 2) {
        fill(255, 255, 200, 90);
        rect(-this.visualW / 2, -this.visualH, this.visualW, this.visualH, this.visualW * 0.25);
      }
      popMatrix();
    }
    this.hurtFrames--;
    popMatrix();
  };
  Player.prototype.reset = function (spawnX, spawnY) {
    if (currentLevel === 16) {
      this.finalBossReset();
      masterXScroll = 0;
      return;
    }
    this.grounded = false;
    this.hurtFrames = 0;
    this.x = spawnX;
    this.y = spawnY;
    this.vx = 0;
    this.vy = 0;
    this.visualW = this.w;
    this.visualH = this.h;
    this.targetW = this.w;
    this.targetH = this.h;
    this.isVariableJumping = false;
    this.paralyzed = false;

    // Reset decay
    this.isDecaying = false;
    this.decayFrames = 0;
    this.health = 100; // Restore health on clean reset if necessary

    this.spawning = true;
    this.spawningTimer = 0;
    ballSkinRotation = 0;
    if (currentLevel === 14) {
      lastLoadedLevel = -1;
      ECH0 = null;
    }
  };
  //]

  // Boss functions and objects [

  // Initialize boss
  var Boss = function Boss(x, y, variant, difficultySet) {
    this.printDebug = false;
    this.invincible = true;
    this.hitCooldown = 0;
    this.spawnX = x;
    this.spawnY = y;
    this.x = x;
    this.y = y;
    this.initialY = y;
    this.size = 95;
    this.vx = 0;
    this.speed = 2;
    this.w = 140;
    this.h = 140;
    this.r = 0;
    this.bossNum = variant;
    this.variant = guardVariant[variant - 1];
    if (this.bossNum === 1) {
      this.name = 'DIAMOND GUARD';
    }
    if (this.bossNum === 2) {
      this.name = 'EMERALD GUARD';
    }
    if (this.bossNum === 3) {
      this.name = 'RUBY GUARD';
    }
    if (this.bossNum === 4) {
      this.name = 'PARKOUR MASTER';
    }

    // STATES
    this.state = "cutscene";

    // WAVES
    this.wave = 1;
    if (this.bossNum !== 4) {
      this.maxWaves = 3;
    } else {
      this.maxWaves = 5;
    }
    this.attacksThisWave = 0;

    // MOVEMENT
    this.positions = [this.x - 450, this.x - 330, this.x - 220, this.x - 110, this.x + 10];
    this.currentSpot = 4;
    this.targetSpot = round(random(-0.4, 2.4));
    this.spawnedMinions = false;
    this.moveCount = 0;
    if (this.bossNum === 4) {
      this.maxMoves = 1;
    } else {
      this.maxMoves = 5;
    }
    this.moving = false;
    this.moveType = "jump";
    this.moveTimer = 0;
    this.moveQueue = [];

    // ATTACKS
    this.attackIndex = 0;
    this.attackIndex2 = 0;
    if (this.bossNum === 4) {
      this.phase1Attacks = ["laserCross", "parkourFall", "decaySpots"];
      this.phase2Attacks = ["parkourFallX", "poisonWave"];
    } else {
      this.availableAttacks = difficultySet;
    }
    this.currentAttack = null;
    this.attackTimer = 0;
    this.throwSide = 1;

    // Vulnerable
    this.vulnerableTimer = 0;

    // Animation
    this.visualY = y;

    // Dead
    this.dead = false;
    this.deathFrames = 0;
    if (this.printDebug) {
      println("Boss initialized.");
    }
  };
  Boss.prototype.startFight = function () {
    if (this.printDebug) {
      println("Fight started.");
    }
    this.randomizeAttacks();
    this.prepareMoves();
    bossIntro = true;
    targetArenaY = -1000; // move arena into place

    this.state = "moving";
  };

  // Boss MOVING
  Boss.prototype.prepareMoves = function () {
    this.moveQueue = ["ground", "ground", "jump", "jump", "jump", "jump"];
    this.moveQueue = shuffleArray(this.moveQueue);
    this.moveCount = 0;
    if (this.printDebug) {
      println("Movement queue prepared.");
      println(this.moveQueue);
    }
  };
  Boss.prototype.getValidMoves = function () {
    var valid = [];
    for (var i = 0; i < 5; i++) {
      if (abs(i - this.currentSpot) > 1) {
        valid.push(i);
      }
    }
    return valid;
  };
  Boss.prototype.startMove = function () {
    // FINAL POSITIONING MOVE
    if (this.moveCount === this.maxMoves - 1) {
      if (this.printDebug) {
        println("Final positioning move.");
      }

      // LEFT SIDE
      if (this.currentSpot === 0 || this.currentSpot === 1) {
        this.targetSpot = 0;
        if (this.printDebug) {
          println("Boss choosing LEFT side.");
        }
      }

      // RIGHT SIDE
      else if (this.currentSpot === 3 || this.currentSpot === 4) {
        this.targetSpot = 4;
        if (this.printDebug) {
          println("Boss choosing RIGHT side.");
        }
      }

      // MIDDLE RANDOMIZES
      else {
        if (random(1) < 0.5) {
          this.targetSpot = 0;
          if (this.printDebug) {
            println("Boss randomly chose LEFT.");
          }
        } else {
          this.targetSpot = 4;
          if (this.printDebug) {
            println("Boss randomly chose RIGHT.");
          }
        }
      }

      // Random movement type
      this.moveType = "ground";
    }

    // NORMAL MOVEMENT
    else {
      var valid = this.getValidMoves();
      this.targetSpot = valid[floor(random(valid.length))];
      this.moveType = this.moveQueue[this.moveCount];
      this.startX = this.x;
      this.totalDistance = abs(this.positions[this.targetSpot] - this.startX);
      this.jumpCount = abs(this.targetSpot - this.currentSpot);
    }
    this.moving = true;
    if (this.printDebug) {
      println("Boss moving.");
      println("Move type: " + this.moveType);
      println("Target spot: " + this.targetSpot);
    }
  };
  Boss.prototype.updateMoving = function () {
    // Special detour for the final boss
    if (this.bossNum === 4) {
      this.updateFinalBossMoving();
      return; // Exit early so it doesn't run normal movement logic
    }
    if (!this.moving) {
      this.startMove();
    }
    var targetX = this.positions[this.targetSpot];
    if (this.x < targetX) {
      this.vx = this.speed;
    }
    if (this.x > targetX) {
      this.vx = -this.speed;
    }
    if (abs(this.x - targetX) > this.speed + 1) {
      this.x += this.vx;
    }

    // GROUND MOVE
    if (this.moveType === "ground") {
      if (abs(this.x - targetX) < this.speed + 1) {
        this.finishMove();
      }
    }

    // JUMP MOVE
    else {
      // Horizontal movement progress
      var traveled = abs(this.x - this.startX);
      var progress = traveled / this.totalDistance;

      // Clamp
      progress = constrain(progress, 0, 1);

      // Perfect jump count based on spaces moved
      this.visualY = this.y - abs(sin(progress * 180 * this.jumpCount)) * 100;

      // Finish move
      if (abs(this.x - targetX) < this.speed + 1) {
        this.visualY = this.y;
        this.finishMove();
      }
    }
  };
  Boss.prototype.updateFinalBossMoving = function () {
    var targetCeilingY = this.initialY - 150;
    spawnParticles(this.x, this.y, 2, 'masterParticles', 4.5);

    //bossXShift = (this.positions[2] - p.x) / 5;

    // 1 float upward smoothly
    // Also move to center
    if (this.y > targetCeilingY && !this.spawnedMinions) {
      this.y -= 3;
      this.visualY = this.y;
      this.vx = (this.positions[2] - this.x) / (this.initialY - targetCeilingY) * 10;
      this.x += this.vx;
    }

    // 2 spawn the guards once
    else if (!this.spawnedMinions) {
      this.vx = 0;
      this.minions = [new Boss(this.positions[4], this.initialY, 5, []), new Boss(this.positions[4], this.initialY, 5, [])];
      for (var i = 0; i < this.minions.length; i++) {
        this.minions[i].isMinion = true;
        if (i === 0) {
          this.minions[i].x = this.positions[0];
          this.minions[i].currentSpot = 0;
        } else {
          this.minions[i].currentSpot = 4;
        }
        this.minions[i].maxMoves = 4;
        this.minions[i].startFight();
      }
      this.spawnedMinions = true;
      this.returningToGround = false; // Initialize our descent flag
    }

    // 3 update the guards while they run around
    else if (this.minions && this.minions.length > 0) {
      var allMinionsDone = true;
      for (var i = 0; i < this.minions.length; i++) {
        this.minions[i].update();
        this.minions[i].draw();
        spawnParticles(this.minions[i].x, this.minions[i].y, 1, 'masterParticlesFrom', 1, this.minions[i]);
        if (this.minions[i].state !== "minionDone") {
          allMinionsDone = false;
        }
      }

      // Minions are done! Despawn them and trigger the descent state
      if (allMinionsDone) {
        this.minions = []; // 1 Despawn all minions instantly
        this.returningToGround = true;
      }
    }

    // End still in the air
    else {
      this.finishMove();
    }
  };
  Boss.prototype.finishMove = function () {
    if (this.printDebug) {
      println("Move completed.");
    }
    this.currentSpot = this.targetSpot;
    this.moveCount++;
    this.moveTimer = 0;
    this.moving = false;
    this.vx = 0;
    spawnParticles(this.x, this.y + 50, 10, "dust", 2);
    if (this.moveCount >= this.maxMoves) {
      if (this.printDebug) {
        println("Movement phase complete.");
      }
      if (this.isMinion) {
        this.state = "minionDone";
      } else {
        this.startAttackPhase(); // Main boss transitions into phase 1 / phase 2 attacks!
      }
    }
  };

  // Boss ATTACKING
  Boss.prototype.randomizeAttacks = function () {
    if (this.bossNum === 4) {
      this.attackOrder = shuffleArray(this.phase1Attacks);
      this.attackOrder2 = shuffleArray(this.phase2Attacks);
      if (this.printDebug) {
        println("Attack order randomized:");
        println(this.attackOrder2);
      }
    } else {
      this.attackOrder = shuffleArray(this.availableAttacks);
    }
    if (this.printDebug) {
      println("Attack order randomized:");
      println(this.attackOrder);
    }
  };
  Boss.prototype.startAttackPhase = function () {
    this.state = "attack";
    this.attackTimer = 0;
    if (this.bossNum === 4 && this.attacksThisWave > 0 && this.wave > 3) {
      this.currentAttack = this.attackOrder2[this.attackIndex2];
      this.attackIndex2++;
    } else {
      this.currentAttack = this.attackOrder[this.attackIndex];
      this.attackIndex++;
    }
    if (this.printDebug) {
      println("Attack phase started.");
      println("Current attack: " + this.currentAttack);
    }
    if (this.attackOrder && this.attackIndex >= this.attackOrder.length) {
      this.attackIndex = 0;
    }
    if (this.attackOrder2 && this.attackIndex2 >= this.attackOrder2.length) {
      this.attackIndex2 = 0;
    }
  };
  Boss.prototype.updateAttack = function () {
    this.attackTimer++;
    var dir = 0;
    if (this.currentSpot === 0) {
      dir = 1; // facing right
    }
    if (this.currentSpot === 4) {
      dir = -1; // facing left
    }

    // BULLETS
    if (this.currentAttack === "bullets") {
      // Boss bullet circle
      if (round(bulletCircleSize) < 120 && this.attackTimer < 540) {
        bulletCircleSize = lerp(bulletCircleSize, 120, 0.1);
      }
      if (this.attackTimer > 540) {
        bulletCircleSize = lerp(bulletCircleSize, 0, 0.15);
      }
      drawBulletCircle(this.x + 71 * dir, this.y + 10 + handAnimationY, bulletCircleSize);

      // Shoot bullets periodically
      if (this.attackTimer % 60 === 0 && this.attackTimer < 540) {
        bossBullets.push({
          x: this.x - 30 + 80 * dir,
          y: random(this.y - 30, this.y + 40),
          vx: random(1.3, 2.9) * dir,
          size: 40,
          explosion: false
        });
        if (this.printDebug) {
          println("Bullet fired.");
        }
      }

      // End bullets
      if (this.attackTimer > 540 && bossBullets.length === 0) {
        this.completeAttack();
      }
    }

    // DIVE
    else if (this.currentAttack === "dive") {
      var outline;
      this.diveTime = 230;

      // Pre-dive visuals and calculations
      if (this.attackTimer < this.diveTime) {
        // Only spawn particles part of the time
        if (this.attackTimer < this.diveTime - 30) {
          spawnParticles(this.x, this.y, this.attackTimer / 15, "bossDive", this.attackTimer / 50, this);
        }
        outline = this.attackTimer / 12;

        // Calculate dive X (Y is always the same)
        diveTargetX = p.x - this.x;
        diveSpeedX = diveTargetX / 30;

        // Line
        var numPoints = abs(diveTargetX / 25);
        for (var d = 0; d < numPoints; d++) {
          stroke(0, 0, 0, 255 - d * (255 / numPoints + 1));
          strokeWeight(7);
          point(this.x + d * ((diveTargetX - numPoints) / numPoints), this.y + d * (220 / numPoints));
        }

        // Orange outline buildup
        stroke(255, 180, 0, this.attackTimer / 1.4);
        strokeWeight(outline);
        beginShape();
        vertex(this.x, this.y - 50);
        vertex(this.x + 50, this.y);
        vertex(this.x, this.y + 50);
        vertex(this.x - 50, this.y);
        vertex(this.x, this.y - 50);
        vertex(this.x + 50, this.y);
        endShape();
      }

      // Actual dive, over 30 frames
      else if (this.attackTimer < this.diveTime + 30) {
        // Yay fun particles
        spawnParticles(this.x, this.y, 5 - this.attackTimer / 120, "diveLaunch", 50 - this.attackTimer / 4.5);

        // Move boss
        this.x += diveSpeedX;
        this.y += 6;
        this.visualY += 6;
        if (checkDiamondHit(p, this.hitbox)) {
          p.hurtFrames = 20;
          p.health -= 4;
          if (this.printDebug) {
            println("Player colliding with boss");
          }
        }
      }

      // Wait 10 frames then go back if a 2nd attack is needed
      else if (this.attackTimer > this.diveTime + 40) {
        this.visualY = this.y;
        if (this.wave === 3 && this.attacksThisWave === 0) {
          if (this.x >= this.positions[2]) {
            if (this.x <= this.positions[4]) {
              this.vx = this.speed;
            } else {
              this.currentSpot = 4;
              this.completeAttack();
            }
          }
          if (this.x < this.positions[2]) {
            if (this.x >= this.positions[0]) {
              this.vx = -this.speed;
            } else {
              this.currentSpot = 0;
              this.completeAttack();
            }
          }
          this.x += this.vx;
        } else {
          this.currentSpot = 2;
          this.completeAttack();
        }
      }
      this.vx = 3 * dir; // which way to face

      // Moving up high
      if (this.y > this.initialY - 180 && this.attackTimer < this.diveTime) {
        this.y -= 4;
        this.visualY -= 4;
      }
    }

    // BOMBS
    else if (this.currentAttack === "bombs") {
      this.throwAnim = max(0, this.throwAnim - 1);

      // Moving up high
      if (this.y > this.initialY - 180 && this.attackTimer < 300) {
        this.y -= 4;
        this.visualY -= 4;
      }

      // Back and forth movement
      if (this.x >= this.positions[4] - 20 && this.attackTimer < 600) {
        this.vx = -this.speed;
      }
      if (this.x <= this.positions[0] + 20 && this.attackTimer < 600) {
        this.vx = this.speed;
      }
      if (this.y <= this.initialY - 180) {
        this.x += this.vx;
      } // Start moving once up top

      // Periodically spawn in bombs
      if (this.attackTimer % 35 === 0 && this.y <= this.initialY - 180) {
        // which side are we throwing on?
        this.throwSide *= -1;

        // spawn in at hands
        var xOffset = this.throwSide * 70;
        var dir = this.throwSide;

        // how many frames animation is
        this.throwAnim = 15;
        bossBombs.push({
          x: this.x + xOffset,
          y: this.y + 25,
          vx: random(1, 1.5) * dir,
          vy: -6,
          size: random(50, 65),
          r: 0,
          vr: random(-6, 6)
        });
        if (this.printDebug) {
          println('Bomb dropped.');
        }
      }

      // Hands go up for throw animation
      if (this.throwAnim > 0) {
        bossXShift = lerp(bossXShift, 300 * this.throwSide * dir, 0.05);
      }
      // Hands return to normal
      else {
        bossXShift = lerp(bossXShift, 0, 0.05);
      }

      // If time is long enough
      // AND boss is at the far left or right screen
      if (this.attackTimer > 600 && (this.x >= this.positions[4] - 20 || this.x <= this.positions[0] + 20)) {
        this.y += 6;
        this.visualY += 6; // lower boss

        // In case the boss switched ends during throwing
        if (this.x >= this.positions[4] - 20) {
          this.currentSpot = 4;
        }
        if (this.x <= this.positions[0] + 20) {
          this.currentSpot = 0;
        }

        // Reset values and finish attack phase
        if (this.y >= this.initialY) {
          this.y = this.initialY;
          this.visualY = this.y;
          this.throwAnim = 0;
          this.vx = 0;
          bossXShift = 0; // end facing animation

          this.completeAttack(); // end attack
        }
      }
    }

    // ICICLES
    else if (this.currentAttack === "icicles") {
      //translate(random(-1, 1), random(-1, 1));
      if (frameCount % 25 === 0 && this.attackTimer < 480) {
        bossIcicles.push({
          x: random(this.positions[0], this.positions[4]),
          y: this.initialY - 250,
          vy: 0.07,
          spawnSize: 0.01,
          size: 50
        });
        bossIcicles.push({
          x: random(this.positions[0], this.positions[4]),
          y: this.initialY - 250,
          vy: 0.07,
          spawnSize: 0.01,
          size: 50
        });
      }
      if (this.attackTimer > 480 && bossIcicles.length === 0) {
        if (!p.frozen) {
          this.completeAttack();
        } else {
          this.prepareMoves();
          this.state = "moving";
          p.frozenFrames = p.frozenDuration;
          p.hurtFrames = 0;
        }
      }
    }

    // SPIKES
    else if (this.currentAttack === "spikes") {
      // This is a part that ChatGPT specifically helped me design, because the mechanics are pretty complicated

      // Generate 18 open spike slots
      // 6 of them (in pairs of 3) will stay open
      if (this.attackTimer === 1) {
        spikeSlots = [];
        var startX = this.positions[0] - 15;
        var spacing = 28.5;

        // First safe group (3 slots)
        var safeGroup1 = floor(random(0, 8.4));

        // Second safe group (3 slots)
        var safeGroup2;
        do {
          safeGroup2 = floor(random(8.5, 15.4));
        } while (abs(safeGroup2 - safeGroup1) < 5);
        var safe = {};

        // Group 1
        safe[safeGroup1] = true;
        safe[safeGroup1 + 1] = true;
        safe[safeGroup1 + 2] = true;

        // Group 2
        safe[safeGroup2] = true;
        safe[safeGroup2 + 1] = true;
        safe[safeGroup2 + 2] = true;

        // Everything else gets spikes
        for (var i = 0; i < 18; i++) {
          if (!safe[i]) {
            spikeSlots.push(startX + i * spacing);
          }
        }

        // Shuffle spike positions
        for (var i = spikeSlots.length - 1; i > 0; i--) {
          var j = floor(random(i + 1));
          var temp = spikeSlots[i];
          spikeSlots[i] = spikeSlots[j];
          spikeSlots[j] = temp;
        }
      }

      // move to top
      if (this.visualY > this.initialY - 180 && this.attackTimer < 400) {
        this.y -= 4;
        this.visualY -= 4;
      }

      // Spawn spikes in 3 waves
      if (this.attackTimer === 60) {
        spawnSpikeWave(4, this.initialY + 38);
      }
      if (this.attackTimer === 140) {
        spawnSpikeWave(4, this.initialY + 38);
      }
      if (this.attackTimer === 250) {
        spawnSpikeWave(4, this.initialY + 38);
      }

      // Charge animation while spikes are happening
      if (this.attackTimer > 60 && this.attackTimer < 360) {
        bulletCircleSize = 100 + sin(frameCount * 12) * 20;
        bossXShift = lerp(bossXShift, 150, 0.15);
      } else {
        bossXShift = lerp(bossXShift, 0, 0.15);
      }

      // End attack when all spikes are gone
      if (this.attackTimer > 400 && bossSpikes.length === 0) {
        if (this.y < this.initialY) {
          this.y += 4;
          this.visualY += 4;
        } else {
          this.completeAttack();
        }
      }
    }

    // Final boss attacks [

    // PARKOUR FALL
    else if (this.currentAttack === "parkourFall") {
      drawFallingHazards();

      // 1 Start movement velocity
      if (this.attackTimer === 1) {
        this.vx = this.speed * 1.2;
      }

      // 2 Spawning
      if (this.attackTimer % 70 === 0 && this.attackTimer < 660) {
        // Choose a random amount to spawn in this wave (e.g., 1 to 3 hazards)
        var spawnAmount = floor(random(2, 4));
        for (var s = 0; s < spawnAmount; s++) {
          // Randomly select type: 50% chance for lava, 50% chance for spike
          var hazardType = random(1) < 0.5 ? 'lava' : 'spike';

          // Generate a random X value across the screen width
          var randomX = random(this.positions[0], this.positions[4]);
          if (hazardType === 'lava') {
            fallingHazards.push({
              type: 'lava',
              x: randomX,
              y: this.initialY - 350,
              // Start just off-screen
              w: 90,
              // Width of the falling drop
              h: 70,
              // Height of the falling drop
              vy: random(1, 2.5),
              // Falling speed variation
              r: 0
            });
          } else {
            fallingHazards.push({
              type: 'spike',
              x: randomX,
              y: this.initialY - 350,
              w: 55,
              h: 20,
              vy: random(1, 2.5),
              r: 180,
              // Rotated 180 degrees to point downward
              amount: 3
            });
          }
        }
      }

      // Back and forth movement
      if (this.x >= this.positions[4]) {
        this.vx = -this.speed;
      }
      if (this.x <= this.positions[0]) {
        this.vx = this.speed;
      }
      this.x += this.vx;

      // 3 Call the hazard update and collision handler
      updateFallingHazards(this);

      // 4 End Attack Phase condition
      if (this.attackTimer > 540 && fallingHazards.length === 0) {
        this.completeAttack();
      }
    }

    // PARKOUR FALL X
    else if (this.currentAttack === "parkourFallX") {
      drawFallingHazards();

      // 1 Start movement velocity
      if (this.attackTimer === 1) {
        this.vx = this.speed * 1.2;
      }

      // 2 Spawning
      if (this.attackTimer % 70 === 0 && this.attackTimer < 660) {
        // Choose a random amount to spawn in this wave (e.g., 1 to 3 hazards)
        var spawnAmount = floor(random(1, 4));
        for (var s = 0; s < spawnAmount; s++) {
          // Randomly select type: 50% chance for lava, 50% chance for spike
          var hazardType = random(1) < 0.5 ? 'poison' : 'thorn';

          // Generate a random X value across the screen width
          var randomX = random(this.positions[0], this.positions[4]);
          if (hazardType === 'poison') {
            fallingHazards.push({
              type: 'poison',
              x: randomX,
              y: this.initialY - 350,
              // Start just off-screen
              w: 90,
              // Width of the falling drop
              h: 70,
              // Height of the falling drop
              vy: random(1, 2.5),
              // Falling speed variation
              r: 0
            });
          } else {
            fallingHazards.push({
              type: 'thorn',
              x: randomX,
              y: this.initialY - 350,
              size: 50,
              vy: random(1, 2.5),
              r: 180 // Rotated 180 degrees to point downward
            });
          }
        }
      }

      // Back and forth movement
      if (this.x >= this.positions[4]) {
        this.vx = -this.speed;
      }
      if (this.x <= this.positions[0]) {
        this.vx = this.speed;
      }
      this.x += this.vx;

      // 3 Call the hazard update and collision handler
      updateFallingHazards(this);

      // 4 End Attack Phase condition
      if (this.attackTimer > 540 && fallingHazards.length === 0) {
        this.completeAttack();
      }
    }

    // LASER CROSS
    else if (this.currentAttack === "laserCross") {
      var cycleLen = 130; // Length of one laser cycle
      var maxCycles = 3; // Total number of cross blasts

      // Calculate current phase timer
      var cycleTimer = (this.attackTimer - 1) % cycleLen + 1;

      // 1 Initialize target on frame 1 of each cycle
      if (cycleTimer === 1) {
        this.laserTargetX = p.x;
        this.laserTargetY = p.y;
      }

      // 2 Telegraph Phase (Frames 1 to 80)
      if (cycleTimer <= 80) {
        // Track player position smoothly for the first 70 frames, then lock
        if (cycleTimer <= 75) {
          this.laserTargetX = lerp(this.laserTargetX, p.x, 0.1);
          this.laserTargetY = lerp(this.laserTargetY, p.y, 0.1);
        }

        // Lines grow increasingly opaque over time
        var opacity = 10 + cycleTimer / 80 * 120;
        stroke(220, 0, 0, opacity);
        strokeWeight(p.w * 0.8);

        // Draw horizontal and vertical crossing guide lines
        line(this.positions[0] - 100, this.laserTargetY, this.positions[4] + 100, this.laserTargetY);
        line(this.laserTargetX, this.initialY - 300, this.laserTargetX, this.initialY + 300);
      }

      // 3 Fire Phase (Frames 81 to 105)
      else if (cycleTimer <= 105) {
        // Screen shake effect
        translate(random(-4, 4), random(-4, 4));

        // Outer dangerous red beam aura
        stroke(255, 0, 0, 255);
        strokeWeight(p.w);
        line(this.positions[0] - 100, this.laserTargetY, this.positions[4] + 100, this.laserTargetY);
        line(this.laserTargetX, this.initialY - 300, this.laserTargetX, this.initialY + 300);

        // Inner white-hot laser core
        stroke(255, 255, 255, 255);
        strokeWeight(p.w * 0.5);
        line(this.positions[0] - 100, this.laserTargetY, this.positions[4] + 100, this.laserTargetY);
        line(this.laserTargetX, this.initialY - 300, this.laserTargetX, this.initialY + 300);

        // COLLISION

        // Define horizontal beam as an OBB structure (Centered at X = 300)
        var horizontalBeam = {
          x: this.positions[0] - 100,
          y: this.laserTargetY,
          w: 800,
          h: 24,
          // Matches outer beam thickness
          r: 0
        };

        // Define vertical beam as an OBB structure (Centered at Y = 325)
        var verticalBeam = {
          x: this.laserTargetX,
          y: this.initialY - 300,
          w: 24,
          // Matches outer beam thickness
          h: 800,
          r: 0
        };

        // Run checks through your OBB engine
        var hitHorizontal = checkCollision(p, horizontalBeam);
        var hitVertical = checkCollision(p, verticalBeam);

        // If either registers, trigger damage
        if (hitHorizontal || hitVertical) {
          p.health -= 2; // Base beam hazard damage
          p.hurtFrames = 25;
          spawnParticles(p.x, p.y, 12, "laser", 3);
          if (this.printDebug) {
            println("Player fried by Laser Cross!");
          }
        }
      }

      // 4 Cooldown / Recovery Phase (Frames 106 to 120)
      else {
        // Leaving this room blank creates a brief rest pause between blasts 
      }

      // 5 Check completion of all 3 cycles
      if (this.attackTimer >= cycleLen * maxCycles) {
        this.completeAttack();
      }
    }

    // DECAY SPOTS
    else if (this.currentAttack === "decaySpots") {
      var spotWidth = 65; // Zone sizes
      var attackDuration = 540; // How long it lasts

      // 1 Initial Setup (Frame 1)
      if (this.attackTimer === 60) {
        // Generate 4 non-overlapping spots
        while (bossDecaySpots.length < 3) {
          var randomX;
          var isOverlapping;
          var attempts = 0;
          do {
            attempts++;
            if (attempts > 50000) {
              break;
            }
            randomX = random(this.positions[0] + 30, this.positions[4] - 30);
            isOverlapping = false;
            for (var j = 0; j < bossDecaySpots.length; j++) {
              var otherSpot = bossDecaySpots[j];

              // Too close?
              if (abs(randomX - otherSpot.x) < spotWidth * 1.6) {
                isOverlapping = true;
                break;
              }
            }
          } while (isOverlapping);

          // Draw randomized lines for the spots
          var decayLines = [];
          for (var l = 0; l <= spotWidth / 13; l++) {
            decayLines.push({
              h: random(spotWidth / 2.5, spotWidth / 15)
            });
          }
          bossDecaySpots.push({
            x: randomX,
            y: 200,
            w: spotWidth,
            initialW: 0,
            decayLines: decayLines
          });
        }

        // Spawn one guard minion near the center stage
        this.minions = [new Boss(this.positions[4], this.initialY, 5, [])];
        this.minions[0].isMinion = true;
        this.minions[0].currentSpot = 4;
        this.minions[0].maxMoves = 50;
        this.minions[0].startFight();
        if (this.printDebug) {
          println("Decay zones initialized. Guard deployed.");
        }
      }

      // 2 Manually update boss guard
      if (this.attackTimer <= attackDuration && this.minions[0] && this.attackTimer >= 60) {
        this.minions[0].update();
        this.minions[0].draw();
      }

      // 3 Cleanup and Despawn
      if (this.attackTimer > attackDuration) {
        bossDecaySpots = []; // Instantly clear the positions array

        // Get rid of minion
        this.minions = [];
        if (this.printDebug) {
          println("Decay zones clean. Ending attack.");
        }
        this.completeAttack();
      }
    }

    // POISON WAVE
    else if (this.currentAttack === "poisonWave") {
      var waveWidth = 250; // Width of hitbox
      var waveHeight = 550; // Height of hitbox
      var waveRiseSpeed = 0.65; // Upward velocity
      var waveMoveSpeed = 5; // Horizontal speed
      var platformSpawnRate = 110; // Spawn a new platform every X frames

      if (this.x > this.positions[0] + 50) {
        this.vx = -this.speed;
        this.x += this.vx;
      } else {
        this.vx = this.speed;
      }

      // 1 Initial Setup (Frame 1)
      if (this.attackTimer === 1) {
        this.wavePlatforms = [];

        // Align coordinates to center-points to match your OBB engine requirements
        this.waveX = this.positions[0] - 50 + waveWidth / 6;
        this.waveY = this.initialY + 250; // Start completely hidden below the screen floor
        this.waveW = waveWidth;
        this.waveH = waveHeight;

        // Phases: "rising" -> "moving" -> "done"
        this.waveState = "rising";
        if (this.printDebug) {
          println("Poison Wave sequence initialized.");
        }
      }

      // 2 Spawn Falling Solid Platforms (2 at a time)
      if (this.attackTimer % platformSpawnRate === 0 && this.waveState !== "done") {
        this.wavePlatforms.push({
          x: random(this.positions[1], this.positions[3]),
          y: this.initialY - 330,
          w: random(75, 100),
          // Random procedural widths for variety
          h: 30,
          vy: 1.2,
          // Downward descent speed
          r: 0
        });
      }

      // 3 Process, Render, and Collide Platforms
      if (this.wavePlatforms) {
        for (var i = this.wavePlatforms.length - 1; i >= 0; i--) {
          var plat = this.wavePlatforms[i];
          plat.y += plat.vy; // Apply gravity vector

          // Render solid platform geometry
          fill(150);
          noStroke();
          rectMode(CENTER);
          rect(plat.x, plat.y, plat.w, plat.h, 4);
          rectMode(CORNER); // Safely reset to standard engine default

          // Solid Collision Resolution using your SAT OBB Engine
          var hitPlat = checkCollision(p, plat);
          if (hitPlat !== null) {
            // Push the player out of the platform geometry instantly
            p.x += hitPlat.x;
            p.y += hitPlat.y;

            // If displacement vector pushed player UP, they are standing on top
            if (hitPlat.y < 0) {
              p.vy = plat.vy; // Match the platform speed to stop jittering
              p.grounded = true; // Trigger engine grounding if tracked
            }
          }

          // Cull off-screen platforms
          if (plat.y > this.initialY + 90) {
            this.wavePlatforms.splice(i, 1);
          }
        }
      }
      // 4 Wave Motion Controllers
      if (this.waveState === "rising") {
        // Arrive up to submerge the bottom floor space
        var targetCenterY = this.initialY - waveHeight + 450;
        if (this.waveY > targetCenterY) {
          this.waveY -= waveRiseSpeed;
        } else {
          this.waveState = "moving";
        }
      } else if (this.waveState === "moving") {
        translate(random(-2, 2), random(-2, 2));

        // Slide horizontally across stage
        this.waveX += waveMoveSpeed;

        // Check if the trailing edge has completely exited right arena boundary (600)
        if (this.waveX - waveWidth / 2 > this.positions[4] + 100) {
          this.waveState = "done";
        }
      }

      // Wave drawn and collided with in draw function

      // Complete Attack Phase
      if (this.waveState === "done" && this.wavePlatforms.length === 0) {
        if (this.printDebug) {
          println("Poison Wave cleared. Ending attack.");
        }
        this.completeAttack();
      }
    }

    //]
  };
  Boss.prototype.completeAttack = function () {
    this.attacksThisWave++;
    if (this.bossNum === 4 && this.wave > 3 && this.attacksThisWave < 2) {
      this.startAttackPhase();
    } else if (this.wave === 3 && this.attacksThisWave < 2 && this.bossNum !== 4) {
      this.startAttackPhase();
    } else {
      this.beginVulnerable();
      this.attacksThisWave = 0;
    }
  };

  // Boss VULNERABLE
  Boss.prototype.beginVulnerable = function () {
    if (this.printDebug) {
      println("Boss vulnerable.");
    }
    this.state = "vulnerable";
    this.invincible = false;
    this.vulnerableTimer = 140;
  };
  Boss.prototype.updateVulnerable = function () {
    this.vulnerableTimer--;

    // Final boss always moves to the ground now
    if (this.bossNum === 4 && this.y < this.initialY) {
      this.visualY += 5;
      this.y = this.visualY;
    }

    // PLAYER DASH HIT
    var hit = checkDiamondHit(p, this.hitbox);
    if (hit && !this.invincible) {
      if (this.printDebug) {
        println("Boss hit!");
      }
      this.damage();
      this.spawnedMinions = false;
      this.hitCooldown = 60;
    }

    // FAILED
    if (this.vulnerableTimer <= 0) {
      if (this.printDebug) {
        println("Player failed vulnerability.");
      }
      this.prepareMoves();
      this.spawnedMinions = false;
      this.state = "moving";
    }
  };
  Boss.prototype.damage = function () {
    this.hitCooldown = 60; // half second

    this.wave++;
    spawnParticles(this.x, this.y, 100, "bossHit", 10, this);
    if (p.x < this.x) {
      p.vx = -10;
    } else {
      p.vx = 10;
    }
    if (this.printDebug) {
      println("Boss damaged.");
      println("Current wave: " + this.wave);
    }

    // FINAL DEATH
    if (this.wave > this.maxWaves) {
      this.dead = true;
      this.state = "dead";
      this.deathTimer = 120;
      if (this.printDebug) {
        println("Boss defeated!");
      }
      return;
    }
    this.prepareMoves();
    this.invincible = true;
    this.state = "moving";
  };
  var phase2Dead;
  Boss.prototype.checkCollision = function () {
    if (this.hitCooldown > 0) {
      return;
    }

    // Collision
    if (checkDiamondHit(p, this.hitbox) && p.health > 0) {
      if (this.isMinion) {
        p.health -= 1;
        p.hurtFrames = 20;
      } else if (this.bossNum !== 4) {
        p.health -= 1.5;
        p.hurtFrames = 20;
      }
      if (this.printDebug) {
        println("Player colliding with boss");
      }
    }
  };
  Boss.prototype.reset = function () {
    Boss.call(this, this.spawnX, this.spawnY, this.bossNum, this.availableAttacks);
    bossOpacity = 255;
    bossXShift = 0;
  };
  Boss.prototype.defeat = function () {
    if (p.health >= 99.5) {
      unlockAchievement("Pixel Perfect");
    }
    p.vx = 0;
    if (this.visualY > this.y - 120) {
      this.visualY -= 0.75;
      spawnParticles(this.x, this.visualY, 3, "bossHit", 5, this);
    } else {
      this.deathFrames++;
    }
    if (this.deathFrames > 90) {
      if (this.bossNum === 4) {
        cutsceneName = "masterX";
        cutsceneIs = true;
        return;
      }
      levelEnd = true;
      lvlEndScene = 1;
      bossEndX = p.x;
    }
  };
  Boss.prototype.update = function () {
    if (phase2Dead) {
      this.dead = true;
    }
    if (this.hitCooldown > 0) {
      this.hitCooldown--;
    }

    // HITBOX
    this.hitbox = {
      x: this.x,
      y: this.visualY,
      w: this.size,
      h: this.size
    };
    updateBossAnim(this, this.size);
    if (this.dead) {
      this.defeat();
      return;
    }
    switch (this.state) {
      case "cutscene":
        break;
      case "moving":
        this.updateMoving();
        break;
      case "attack":
        this.updateAttack();
        break;
      case "vulnerable":
        this.updateVulnerable();
        break;
    }
    this.checkCollision();
  };
  Boss.prototype.draw = function () {
    pushMatrix();
    translate(this.x, this.visualY);
    if (this.bossNum === 4) {
      parkMast(0, 0, this.size * 1.2, this);
    } else {
      drawGuard(0, 0, this.size, this.variant, this);
    }
    popMatrix();

    // DEBUG
    if (showHitboxes) {
      drawDiamondHitbox(this.hitbox);
    }
  };
  var drawBossHealth = function drawBossHealth(x, y, s, boss) {
    var name;
    if (boss.bossNum === 1) {
      name = 'DIAMOND GUARD';
    }
    if (boss.bossNum === 2) {
      name = 'EMERALD GUARD';
    }
    if (boss.bossNum === 3) {
      name = 'RUBY GUARD';
    }
    if (boss.bossNum === 4) {
      name = 'PARKOUR MASTER';
    }
    stroke(0);
    if (boss.bossNum === 4) {
      stroke(255);
    }
    arcSize(s / 16);
    arcText('THE', x - s / 2, y - s / 1.8);
    stroke(boss.variant.col);
    arcSize(s / 10);
    arcText(name + '', x - s / 2.1, y - s / 2.9);
    for (var l = 0; l < boss.maxWaves; l++) {
      stroke(0);
      if (boss.bossNum === 4) {
        stroke(90, 20, 200);
      }
      strokeWeight(s / 30);
      fill(boss.variant.col, 60);
      ellipse(x - s / 3.4 + l * s / 1.9, y, s / 2.9, s / 2.9);
    }
    // Fill in lives remaining
    for (var l = 0; l < boss.maxWaves - boss.wave + 1; l++) {
      stroke(0);
      if (boss.bossNum === 4) {
        stroke(90, 20, 200);
      }
      strokeWeight(s / 30);
      fill(boss.variant.col);
      ellipse(x - s / 3.4 + l * s / 1.9, y, s / 2.9, s / 2.9);
      stroke(255, 255, 255, 100);
      arc(x - s / 3.4 + l * s / 1.9, y, s / 4.5, s / 4.5, 300, 330);
    }
  };
  var guardBannerSquares = [];
  for (var i = 0; i < 30; i++) {
    guardBannerSquares.push({
      x: random(-50, 650),
      y: random(-20, 30),
      // top banner
      size: random(60, 130),
      rot: random(-45, 45),
      col: floor(random(-0.4, 1.4))
    });
    guardBannerSquares.push({
      x: random(-50, 650),
      y: random(570, 620),
      // bottom banner
      size: random(60, 130),
      rot: random(-45, 45),
      col: floor(random(-0.4, 1.4))
    });
  }

  // Array of all bosses
  var bosses = [new Boss(3410, -4130, 1, ["bullets", "dive", "bombs"]), new Boss(4820, -190, 2, ["dive", "bombs", "icicles"]), new Boss(5525, -3280, 3, ["bombs", "icicles", "spikes"]), new Boss(5525, -3280, 4)];
  //]

  // Final Boss [

  // Array to store active bullets
  var xBullets = [];

  // Bullet blueprint object
  function xBullet() {
    this.x = 0; // Starts at the exact left edge
    this.y = random(0, 600); // Spawns at a random height (adjust based on canvas)

    // Random angle pointing generally right (between -45 and +45 degrees)
    // PI / 4 radians is equal to 45 degrees
    var angle = random(-PI / 4, PI / 4);
    var speed = 15; // Adjust speed as needed

    // Split the speed into X and Y movements based on the angle
    this.vx = cos(angle) * speed;
    this.vy = sin(angle) * speed;
    this.update = function () {
      this.x += this.vx;
      this.y += this.vy;
    };
    this.draw = function () {
      fill(220, 0, 0);
      noStroke();
      ellipse(this.x, this.y, 60, 5); // Elongated ellipse to look fast
    };
  }

  // Helper function to create a new bullet
  function spawnXBullet() {
    xBullets.push(new xBullet());
  }
  var finalChallengeInit = false;
  var masterXScroll = 0;
  var finalBossPhase = 1;
  var bossRemixStage = 0;
  var phase2Dead = false;
  var switchBossRemix = false;
  var parkMastDialogue = [];
  var bossTransTimer = 0;
  var bossTransDuration = 60; // Total duration of the effect in frames
  var bossTransCoverFrame = 30; // The exact middle frame where the screen is fully dark

  var bossScreenOpacity = 0;

  // Unique variables tracking if the wipe is executing
  var screenWipeActive = false;
  var screenWipeDirection = "in"; // "in" or "out"

  // Platforms state array
  var wipePlatforms = [];
  var wipeNumPlatforms = 4;
  var wipeHeight = 600 / wipeNumPlatforms; // 150px per bar

  var initWipePlatforms = function initWipePlatforms() {
    wipePlatforms = [];
    for (var i = 0; i < wipeNumPlatforms; i++) {
      // Alternate starting sides (left vs right side of the screen)
      var startX = i % 2 === 0 ? -600 : 600;
      wipePlatforms.push({
        startX: startX,
        x: startX,
        y: i * wipeHeight,
        w: 600,
        h: wipeHeight
      });
    }
  };
  var handleScreenWipe = function handleScreenWipe() {
    if (!screenWipeActive) {
      return;
    }
    p.vx = 0;
    bossTransTimer++;

    // Calculate 0.0 to 1.0 progress for both phases
    var progress = bossTransTimer / bossTransDuration;

    // Loop through each sliding block
    for (var i = 0; i < wipePlatforms.length; i++) {
      var plat = wipePlatforms[i];
      if (progress <= 0.5) {
        // Phase 1: Moving in from sides to center
        var localProgress = progress * 2; // Map 0->0.5 into 0->1
        plat.x = lerp(plat.startX, 0, localProgress);
      } else {
        // Phase 2: Moving out from center to opposite sides
        var localProgress = (progress - 0.5) * 2; // Map 0.5->1.0 into 0->1
        var targetX = plat.startX < 0 ? 600 : -600;
        plat.x = lerp(0, targetX, localProgress);
      }

      // Draw the aesthetic transition platforms matching your game style
      fill(170);
      noStroke();
      rect(plat.x, plat.y, plat.w, plat.h, 10);
    }

    // Frame when everything is covered
    if (bossTransTimer === bossTransCoverFrame) {
      // Safe zone to alter scenes, update coordinates, reset maps, etc.
      bossRemixStage++;
      loadLevel(currentLevel);
      p.reset(lvl.spawn.x, lvl.spawn.y);
    }

    // Clean up animation flags once finished
    if (bossTransTimer >= bossTransDuration) {
      screenWipeActive = false;
      switchBossRemix = false;
      bossTransTimer = 0;
    }
  };

  // Trigger logic block to run at any moment
  var triggerScreenWipe = function triggerScreenWipe() {
    initWipePlatforms();
    bossTransTimer = 0;
    screenWipeActive = true;
  };

  //used for much of the dialogue
  var currentIndex = 0;

  //]

  // ECH0 [

  var ech0Background = function ech0Background(x, y) {
    fill(0, 0, 40); // Deep dark blue background
    rect(x, y, 600, 2000);
    noFill();
    stroke(255, random(50, 110), 255);
    strokeWeight(5);
    var lineAnim = sin(frameCount * 0.7) * 30;
    for (var q = 0; q < 6; q++) {
      pushMatrix();
      translate(q * 100, 0);
      beginShape();
      vertex(x, y);
      for (var i = 0; i < 20; i++) {
        var direction = i % 2 === 0 ? 1 : -1;
        bezierVertex(x, y + i * 100, x + lineAnim * direction, y + 50 + i * 100, x, y + 100 + i * 100);
      }
      endShape();
      popMatrix();
    }
    for (var q = 0; q < 20; q++) {
      pushMatrix();
      translate(0, q * 100); // Translate down instead of right

      beginShape();
      vertex(x, y);
      for (var i = 0; i < 6; i++) {
        var direction = i % 2 === 0 ? 1 : -1;

        // X and Y coordinates are swapped here to make the wave flow horizontally
        bezierVertex(x + i * 100, y, x + 50 + i * 100, y + lineAnim * direction, x + 100 + i * 100, y);
      }
      endShape();
      popMatrix();
    }
  };
  var FakeAI = function FakeAI(startX, startY, jumpPoints) {
    // Structural Dimensions (Hitbox stays locked and stable)
    this.x = startX;
    this.y = startY;
    this.w = 40;
    this.h = 40;

    // Visual Dimensions (For smooth squash & stretch scaling)
    this.drawW = 40;
    this.drawH = 40;
    this.targetW = 40;
    this.targetH = 40;

    // Visual offset anchoring system to prevent floating gaps
    this.squashAnchor = "center"; // Can be "center", "bottom", or "top"
    this.visualOffsetY = 0;

    // Rotational & Sprite states matching the player
    this.rotation = 0;
    this.activeSprite = null; // Assigned dynamically based on vx (lookingStraight/Left/Right)

    // Face & Eye Vector Tracking
    this.faceX = 0;
    this.faceY = 0;
    this.faceTargetX = 5;
    this.faceTargetY = 0;

    // Movement Engine Constants (1:1 with Player physics)
    this.vx = 0;
    this.vy = 0;
    this.accel = 0.5;
    this.maxSpeed = 6.1;
    this.friction = 0.85;
    this.airFriction = 0.98;
    this.gravity = 0.6;
    this.jumpForce = -12;
    this.bounceForce = -25;
    this.terminalVelocity = 15;

    // Ground Tracking States
    this.grounded = false;
    this.prevGrounded = false;
    this.prevVy = 0;

    // Automated Variable Jump Triggers Array
    this.jumpPoints = jumpPoints;
    this.currentJumpIndex = 0;
    this.isVariableJumping = false;

    // Fallback Skin Configuration (If custom sprites aren't rendered)
    this.skinColor = color(70, 80, 95);
    this.eyeColor = color(255, 255, 255);
  };
  FakeAI.prototype.update = function (levelObjects) {
    // Track previous physics states at the absolute start of the frame
    this.prevGrounded = this.grounded;
    this.prevVy = this.vy;
    if (p.x < this.x) {
      p.health = 0;
    }

    // Run the Jump Array Engine
    if (this.currentJumpIndex < this.jumpPoints.length) {
      if (this.x >= this.jumpPoints[this.currentJumpIndex]) {
        this.vy = this.jumpForce;
        this.currentJumpIndex++;
        this.grounded = false;
        this.isVariableJumping = true; // Engage variable jumping hold track
        spawnParticles(this.x, this.y + this.h / 2 + 6, 7, "dust", 1.4);
      }
    }
    if (abs(p.x - this.x) > 370 && p.x > 700) {
      this.maxSpeed = 10;
    } else {
      this.maxSpeed = 6.1;
    }
    if (this.x <= 20350) {
      // Simulate constant horizontal movement acceleration
      this.vx += this.grounded ? this.accel : this.accel * 0.5;
    } else {
      this.vx = 0;
    }
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);

    // Simulated Max-Hold Variable Jump Calculation
    if (!this.grounded && this.vy < 0 && this.isVariableJumping) {
      this.vy *= 1.017; // Mimics manual spacebar hold updates
    } else if (this.vy >= 0) {
      this.isVariableJumping = false; // Turn off hold system once apex is reached
    }

    // Apply standard gravity forces
    this.vy += this.gravity;
    this.vy = min(this.vy, this.terminalVelocity);

    // Apply position updates
    this.x += this.vx;
    this.y += this.vy;

    // Reset grounded state right before evaluating block collision systems
    this.grounded = false;

    // Environmental Block Interactions Loop
    for (var i = 0; i < levelObjects.length; i++) {
      var o = levelObjects[i];
      if (o.type === 'spike' || o.type === 'checkpoint') {
        continue;
      } else if (o.type === 'lava' || o.type === 'poison') {
        var mtv = checkCollision(this, o);
        if (mtv) {
          var lavaLeft = o.x - o.w / 2;
          var lavaRight = o.x + o.w / 2;
          var eLeft = this.x - this.w / 2;
          var eRight = this.x + this.w / 2;
          if (eLeft >= lavaLeft && eLeft <= lavaRight && eRight >= lavaLeft && eRight <= lavaRight) {
            this.grounded = false;
            spawnParticles(this.x, this.y + this.h / 2 - 8, 1, "lava", 2);
          }
        }
      } else if (o.type === 'trampoline') {
        var mtv = checkCollision(this, o);
        if (mtv) {
          this.x += mtv.x;
          this.y += mtv.y;
          if (mtv.y < 0 && abs(mtv.y) >= abs(mtv.x)) {
            this.vy = this.bounceForce;
            this.grounded = false;
            this.isVariableJumping = false;
            o.springOffset -= 10;
            o.springVel -= 5.5;
            o.impactTimer = 3;
            spawnParticles(this.x, this.y + this.h / 2 - 8, 8, "dust", 2.5);
          } else if (abs(mtv.x) > abs(mtv.y)) {
            this.vx = 0;
          }
        }
      } else if (o.type === 'launcher') {
        var mtv = checkCollision(this, o);
        if (mtv) {
          this.x += mtv.x;
          this.y += mtv.y;
          if (mtv.y < 0 && abs(mtv.y) >= abs(mtv.x)) {
            if (!this.prevGrounded && this.prevVy > 2) {
              var impact = constrain(this.prevVy * 3, 0, 40);
              this.targetW = this.w + impact;
              this.targetH = this.h - impact;
              this.squashAnchor = "bottom";
            }
            this.grounded = true;
            this.vy = 0;
            this.isVariableJumping = false;
            this.x = lerp(this.x, o.x, 0.1);
            this.vx = 0;
          } else if (mtv.y > 0 && this.vy < 0) {
            var impact = constrain(abs(this.vy) * 3, 0, 40);
            this.targetW = this.w + impact;
            this.targetH = this.h - impact;
            this.vy = 0;
            this.isVariableJumping = false;
            this.squashAnchor = "top";
          }
          if (abs(mtv.x) > abs(mtv.y)) {
            this.vx = 0;
          }
        }
      } else if (o.type === 'conveyorbelt' || o.type === 'hyperbelt') {
        var mtv = checkCollision(this, o);
        if (mtv) {
          this.x += mtv.x;
          this.y += mtv.y;
          if (mtv.y < 0 && abs(mtv.y) >= abs(mtv.x)) {
            if (!this.prevGrounded && this.prevVy > 2) {
              var impact = constrain(this.prevVy * 3, 0, 40);
              this.targetW = this.w + impact;
              this.targetH = this.h - impact;
              this.squashAnchor = "bottom";
            }
            this.grounded = true;
            this.vy = 0;
            this.isVariableJumping = false;
            var dirX = cos(o.r) * o.d;
            var dirY = sin(o.r) * o.d;
            if (o.type === 'conveyorbelt') {
              this.x += dirX * 4;
            }
            if (o.type === 'hyperbelt') {
              this.x += dirX * 8;
              this.vy = dirY * 4;
            }
          } else if (mtv.y > 0 && this.vy < 0) {
            var impact = constrain(abs(this.vy) * 3, 0, 40);
            this.targetW = this.w + impact;
            this.targetH = this.h - impact;
            this.vy = 0;
            this.isVariableJumping = false;
            this.squashAnchor = "top";
          }
          if (abs(mtv.x) > abs(mtv.y)) {
            this.vx = 0;
          }
        }
      } else if (o.type !== 'arrowSign') {
        var mtv = checkCollision(this, o);
        if (mtv) {
          this.x += mtv.x;
          this.y += mtv.y;
          if (mtv.y < 0 && abs(mtv.y) >= abs(mtv.x)) {
            if (!this.prevGrounded && this.prevVy > 2) {
              var impact = constrain(this.prevVy * 3, 0, 40);
              this.targetW = this.w + impact;
              this.targetH = this.h - impact;
              this.squashAnchor = "bottom";
            }
            this.grounded = true;
            this.vy = 0;
            this.isVariableJumping = false;
          } else if (mtv.y > 0 && this.vy < 0) {
            var impact = constrain(abs(this.vy) * 3, 0, 40);
            this.targetW = this.w + impact;
            this.targetH = this.h - impact;
            this.vy = 0;
            this.isVariableJumping = false;
            this.squashAnchor = "top";
          }
          if (abs(mtv.x) > abs(mtv.y)) {
            this.vx = 0;
          }
        }
      }
    }

    // RUN SQUASH / STRETCH & OFFSET ENGINE (At the bottom of the frame)
    var targetOffsetY = 0;
    if (!this.grounded) {
      if (this.squashAnchor === "top") {
        // Recovering from ceiling impact mid-air
        this.targetW = lerp(this.targetW, this.w, 0.18);
        this.targetH = lerp(this.targetH, this.h, 0.18);
        if (abs(this.targetH - this.h) < 0.2) {
          this.squashAnchor = "center";
        }
      } else {
        // Standard velocity-based air stretching (centered)
        this.squashAnchor = "center";
        var stretchAmount = abs(this.vy) * 0.016;
        this.targetW = this.w / (1 + stretchAmount);
        this.targetH = this.h * (1 + stretchAmount);
      }
    } else {
      // Grounded: Return landing squash smoothly back to normal sizes
      this.squashAnchor = "bottom";
      this.targetW = lerp(this.targetW, this.w, 0.18);
      this.targetH = lerp(this.targetH, this.h, 0.18);
    }

    // Position modifications based on active collision anchoring rules
    if (this.squashAnchor === "bottom") {
      targetOffsetY = (this.h - this.targetH) / 2; // Snaps visual base to ground
    } else if (this.squashAnchor === "top") {
      targetOffsetY = -(this.h - this.targetH) / 2; // Snaps visual top to ceiling
    } else {
      targetOffsetY = 0; // Center stretching
    }

    // Scale and position interpolation tracking loops
    this.drawW = lerp(this.drawW, this.targetW, 0.3);
    this.drawH = lerp(this.drawH, this.targetH, 0.3);
    this.visualOffsetY = lerp(this.visualOffsetY, targetOffsetY, 0.3);

    // Process skin sprite assignment and eye look direction mechanics
    this.rotation += this.vx * 2.5;
    if (this.vx > 0.1) {
      this.faceTargetX = 5;
      //this.activeSprite = lookingRight;
    } else if (this.vx < -0.1) {
      this.faceTargetX = -5;
      //this.activeSprite = lookingLeft;
    } else {
      this.faceTargetX = 0;
      //this.activeSprite = lookingStraight;
    }
    if (this.vy < -1) {
      this.faceTargetY = -2;
    } else if (this.vy > 1) {
      this.faceTargetY = 2;
    } else {
      this.faceTargetY = 0;
    }
    this.faceX = lerp(this.faceX, this.faceTargetX, 0.2);
    this.faceY = lerp(this.faceY, this.faceTargetY, 0.2);
  };
  FakeAI.prototype.draw = function () {
    pushMatrix();
    // Move canvas position to match entity position plus sub-pixel anchor offset adjustments
    translate(this.x, this.y + this.visualOffsetY);

    // Apply universal GPU canvas scales to transform any custom drawing method natively
    scale(this.drawW / this.w, this.drawH / this.h);

    // Keep the push/popStyle kineto
    pushStyle();
    rectMode(CENTER);
    fill(0, 0, 140, 170);
    noStroke();
    rect(0, 0, this.w, this.h, this.w / 4);

    // Procedural eye details
    var eyeW = 13;
    var eyeSep = 9;
    fill(this.eyeColor);
    popStyle();
    pushMatrix();
    translate(0, this.vy / 2);
    fill(255);
    ellipse(-eyeSep + this.faceX, this.faceY - 5, eyeW, eyeW);
    ellipse(eyeSep + this.faceX, this.faceY - 5, eyeW, eyeW);
    pushMatrix();
    translate(0, this.vy / 4);
    fill(255, 0, 0);
    ellipse(eyeSep + this.faceX + 2, this.faceY - 5, eyeW / 1.8, eyeW / 1.8);
    ellipse(-eyeSep + this.faceX + 2, this.faceY - 5, eyeW / 1.8, eyeW / 1.8);
    popMatrix();
    popMatrix();
    popMatrix();
  };

  // ]

  // World drawing visibility. These bounds follow the inverse of the actual
  // camera transform, including shake, zoom, rotation and canvas scaling. Only
  // drawing is culled: simulation and random-number consumption stay unchanged.
  var worldRenderView = {
    active: false,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  };
  var worldRenderStats = {
    objectsTested: 0,
    objectsCulled: 0,
    spikesDrawn: 0,
    particlesCulled: 0,
    enemiesCulled: 0
  };
  function updateWorldRenderView(shakeX, shakeY) {
    var view = worldRenderView;
    var viewW = width / gameScale,
      viewH = height / gameScale;
    view.active = isFinite(viewW) && isFinite(viewH) && gameScale > 0;
    worldRenderStats.objectsTested = 0;
    worldRenderStats.objectsCulled = 0;
    worldRenderStats.spikesDrawn = 0;
    worldRenderStats.particlesCulled = 0;
    worldRenderStats.enemiesCulled = 0;
    if (!view.active) {
      return;
    }
    if (round(zoomScale) === 1) {
      view.left = cam.x - shakeX;
      view.top = cam.y - shakeY;
      view.right = view.left + viewW;
      view.bottom = view.top + viewH;
    } else if (zoomScale > 0 && isFinite(zoomScale)) {
      var c = cos(zoomRot),
        s = sin(zoomRot);
      var x1 = viewW * c / zoomScale,
        x2 = viewH * s / zoomScale;
      var y1 = -viewW * s / zoomScale,
        y2 = viewH * c / zoomScale;
      view.left = Math.min(0, x1, x2, x1 + x2) - zoomX;
      view.right = Math.max(0, x1, x2, x1 + x2) - zoomX;
      view.top = Math.min(0, y1, y2, y1 + y2) - zoomY;
      view.bottom = Math.max(0, y1, y2, y1 + y2) - zoomY;
    } else {
      view.active = false;
    }
    // Keep antialiased edges and thick strokes at the viewport boundary.
    view.left -= 4;
    view.top -= 4;
    view.right += 4;
    view.bottom += 4;
  }
  function worldBoundsVisible(x, y, halfW, halfH) {
    var v = worldRenderView;
    if (!v.active || !isFinite(x) || !isFinite(y) || !isFinite(halfW) || !isFinite(halfH) || halfW < 0 || halfH < 0) {
      return true;
    }
    return x + halfW >= v.left && x - halfW <= v.right && y + halfH >= v.top && y - halfH <= v.bottom;
  }
  function worldObjectVisible(o) {
    // The arrow's custom text controls font state; leave its small draw intact.
    if (o.type === 'arrowSign') {
      return true;
    }
    // Let the original renderer perform its first-frame default initialization.
    if (o.type === 'spike' && (!o.w || !o.h || o.amount < 0)) {
      return true;
    }
    var hw = abs(o.w) / 2 + 4;
    var hh = abs(o.h) / 2 + 4;
    if (o.type === 'spike') {
      hw += 14;
      hh = abs(o.h) / 1.8 + 4;
    } else if (o.type === 'trampoline') {
      hh = abs(o.h || 15) / 2 + abs(o.springOffset || 0) * 2.2 + 8;
    } else if (o.type === 'launcher') {
      hh = abs(o.h) * 1.15 + 4;
    } else if (o.type === 'sign') {
      hw = 36;
      hh = 520; // Includes the sign's wrapped tiny print.
    } else if (o.type === 'checkpoint') {
      hw = max(hw, abs(o.w) * 0.75 + 4);
      hh = max(hh, abs(o.h) * 0.7 + abs(o.w) * 0.12 + 4);
      if (checkpointReached && checkCircSize < 1200) {
        hw = max(hw, checkCircSize / 2 + 16);
        hh = max(hh, checkCircSize / 2 + 16);
      }
    } else if (o.type === 'conveyorbelt' || o.type === 'hyperbelt') {
      hw += 10;
      hh = max(hh, 10);
    }
    // Lava is drawn without object rotation in the original world renderer.
    if (o.r && o.type !== 'lava' && o.type !== 'poison') {
      var c = abs(cos(o.r)),
        s = abs(sin(o.r));
      var rotatedW = hw * c + hh * s;
      hh = hw * s + hh * c;
      hw = rotatedW;
    }
    return worldBoundsVisible(o.x, o.y, hw, hh);
  }
  function advanceCulledWorldObject(o) {
    // Reproduce animation updates and the final Processing style, without
    // submitting invisible geometry. This is deliberately not a simulation LOD.
    if (o.type === 'lava' || o.type === 'poison') {
      if (!o.bubbles) {
        o.bubbles = [];
        for (var b = 0; b < o.w / 25; b++) {
          o.bubbles.push({
            x: random(-o.w / 2 + 20, o.w / 2 - 20),
            y: random(-o.h / 2 - 100, -o.h / 2),
            speed: random(0.25, 0.4),
            size: random(8, 10),
            op: 0
          });
        }
      }
      var lastOpacity;
      for (var b = 0; b < o.bubbles.length; b++) {
        var bub = o.bubbles[b];
        bub.y += bub.speed;
        if (bub.y > o.h / 2 - 17) {
          bub.x = random(-o.w / 2 + 20, o.w / 2 - 20);
          bub.y = random(-o.h / 2 - 100, -o.h / 2);
          bub.op = 0;
        }
        if (bub.y > o.h / 2 - 27) {
          bub.op -= 20;
        }
        lastOpacity = bub.op;
        if (bub.y > -o.h / 2 && bub.op < 255) {
          bub.op += 10;
        }
      }
      noStroke();
      if (lastOpacity === undefined) {
        if (o.type === 'lava') {
          fill(255, 0, 0);
        } else {
          fill(200, 255, 200);
        }
      } else if (o.type === 'lava') {
        fill(255, 150, 0, lastOpacity);
      } else {
        fill(0, 200, 0, lastOpacity);
      }
    } else if (o.type === 'conveyorbelt' || o.type === 'hyperbelt') {
      var segments = max(1, floor(o.w / 40));
      var spacing = o.w / segments;
      if (o.offset === undefined) {
        o.offset = 0;
      }
      var dirX = cos(o.r) * o.d;
      o.offset += dirX * (o.type === 'conveyorbelt' ? 4 : 8);
      o.offset = o.offset % spacing;
      if (o.type === 'hyperbelt') {
        fill(50);
        stroke(230, 0, 0);
      } else {
        fill(100);
        stroke(0, 0, 0);
      }
      strokeWeight(6);
      // Only the final arrow affects style. Find it without constructing paths.
      for (var j = segments; j >= -1; j--) {
        var x = -o.w / 2 + j * spacing + spacing / 2 + o.offset;
        if (x > -o.w / 2.2 && x < o.w / 2.2) {
          var t = map(x, -o.w / 2, o.w / 2, 0, 1);
          var opacity = constrain(min(map(t, 0, 0.2, 0, 255), map(t, 0.8, 1, 255, 0)), 0, 255);
          if (o.type === 'hyperbelt') {
            stroke(230, 130, 0, opacity);
          } else {
            stroke(255, 255, 255, opacity);
          }
          strokeWeight(4);
          break;
        }
      }
    } else if (o.type === 'spike') {
      fill(175, 165, 165);
      strokeWeight(3);
      stroke(200);
    } else if (o.type === 'trampoline') {
      if (!o.h) {
        o.h = 15;
      }
      fill(158, 158, 158);
      if (world === 4) {
        stroke(255);
      } else {
        stroke(0);
      }
      strokeWeight(7.5);
      noFill();
    } else if (o.type === 'sign') {
      fill(0);
      strokeWeight(5);
      stroke(130, 70, 0);
      textSize(4);
      textAlign(CENTER);
    } else if (o.type === 'checkpoint') {
      noStroke();
      fill(170);
      stroke(205);
      strokeWeight(4);
      if (checkpointReached && checkCircSize < 1200) {
        fill(0, 230, 0, 200 - checkCircSize / 4);
        stroke(0, 230, 0);
        strokeWeight(30);
      }
    } else if (o.type === 'launcher') {
      imageMode(CENTER);
    } else {
      fill(150);
      noStroke();
    }
  }
  var worldSpikeRange = {
    first: 0,
    last: 0
  };
  function visibleWorldSpikeRange(o, amount, spikeW) {
    var result = worldSpikeRange;
    result.first = 0;
    result.last = amount;
    if (!worldRenderView.active || !(spikeW > 0) || !isFinite(spikeW)) {
      return result;
    }
    var v = worldRenderView;
    var c = cos(o.r || 0),
      s = sin(o.r || 0);
    var center = ((v.left + v.right) / 2 - o.x) * c + ((v.top + v.bottom) / 2 - o.y) * s;
    var extent = (v.right - v.left) / 2 * abs(c) + (v.bottom - v.top) / 2 * abs(s) + 16;
    result.first = max(0, floor((center - extent + o.w / 2) / spikeW) - 1);
    result.last = min(amount, ceil((center + extent + o.w / 2) / spikeW) + 1);
    return result;
  }
  function drawVisibleWorldEnemy(enemy) {
    var known = enemy instanceof Boing || enemy instanceof Zapp || enemy instanceof Thorn;
    if (!known || worldBoundsVisible(enemy.x, enemy.y, abs(enemy.size) * 2 + 25, abs(enemy.size) * 2 + 25)) {
      enemy.draw();
      return;
    }
    worldRenderStats.enemiesCulled++;
    if (enemy instanceof Boing) {
      stroke(255, 255, 255, 50);
      strokeWeight(enemy.size / 20);
      noStroke();
      if (enemy.type === 'X') {
        fill(220, 0, 0);
      } else {
        fill(255, 255, 0);
      }
    } else if (enemy instanceof Zapp) {
      fill(255, 80, 0);
      strokeWeight(enemy.size / 10);
      if (enemy.type === 'X') {
        stroke(255, 100, 0);
      } else {
        stroke(255, 255, 0);
      }
    } else {
      fill(70);
      strokeWeight(enemy.size / 12);
      stroke(255, 255, 255, 50);
    }
  }
  // End world drawing visibility helpers.

  // Camera
  var cam = {
    x: 0,
    y: 0,
    // Normally follows player but not always (for cutscenes)
    targetX: 0,
    // Y doesn't follow player
    targetY: 0,
    // lerping speed
    speed: 0.075
  };
  var updateCamera = function updateCamera() {
    // Lerp X toward the target
    cam.x = lerp(cam.x, cam.targetX, cam.speed);
    // Lerp Y toward the y target
    cam.y = lerp(cam.y, cam.targetY, cam.speed);
  };
  var cameraShakeTimer = 0;
  var cameraShakeDuration = 0;
  var cameraShakeIntensity = 0;
  var cameraShake = function cameraShake(duration, intensity) {
    cameraShakeTimer = duration;
    cameraShakeDuration = duration;
    cameraShakeIntensity = intensity;
  };

  // Starting level and player
  var lvl = levels[currentLevel];
  if (currentLevel === 15) {
    lvl = levels[currentLevel].levels[bossRemixStage];
  }
  loadLevel(currentLevel);
  var p = new Player(lvl.spawn.x, lvl.spawn.y);
  // CHECkPOINT!!
  var lastCheckpoint = {
    x: lvl.spawn.x,
    y: lvl.spawn.y
  };
  var showDebugInfo = false;
  var debugLine = function debugLine(label, value, state) {
    text(label + ": " + value, 10, state.y);
    state.y += 16;
  };
  var roundTo = function roundTo(num, places) {
    places = places || 0;
    var factor = pow(10, places);

    // Proper rounding
    var rounded = Math.round(num * factor) / factor;

    // Convert to string, strip trailing zeros, then back to number
    return +rounded.toFixed(places);
  };
  var resetCharTimer = 0;

  //]
  // dang almost 8k lines

  // more shop [

  var buttonHovers = [];
  for (var i = 0; i < 40; i++) {
    buttonHovers[i] = 0;
  }
  var you = function you(x, y, sz, id) {
    pushMatrix();
    translate(x, y);

    // Scale it down a little
    var scaled = sz / 40;
    scale(scaled);

    // Create temporary player object
    var tempPlayer = new Player(0, 0);
    tempPlayer.visualW = 40;
    tempPlayer.visualH = 40;
    tempPlayer.targetW = 40;
    tempPlayer.targetH = 40;
    tempPlayer.hurtFrames = 0;
    tempPlayer.paralyzed = false;
    tempPlayer.r = 0;

    // Temporarily switch skin
    var originalSkin = currentSkin;
    currentSkin = id;

    // Draw the player
    tempPlayer.draw();

    // Clean up our mess
    currentSkin = originalSkin;

    // And keep it contained
    popMatrix();
  };
  var equipButton = function equipButton(x, y, s, skinId, btnIndex) {
    var isEquipped = currentSkin === skinId;
    var target = worldMouseX >= x && worldMouseX <= x + s && worldMouseY >= y && worldMouseY <= y + s / 3 ? 1 : 0;
    buttonHovers[btnIndex] = lerp(buttonHovers[btnIndex], target, 0.2);
    var h = buttonHovers[btnIndex];
    var btnW = s + h * 10;
    var btnH = s / 3 + h * 3.3;
    var curX = x - h * 5;
    var curY = y - h * 1.6;
    fill(lerpColor(isEquipped ? color(0, 150, 0) : color(0, 255, 0), color(0, 200, 0), h));
    stroke(0);
    strokeWeight(3);
    rect(curX, curY, btnW, btnH, s / 5);
    if (target === 1 && mouseIsPressed) {
      currentSkin = skinId;
    }
    arcAlign(CENTER);
    arcSize(s / 11 + h);
    stroke(0);
    arcText(isEquipped ? "Equipped" : "Equip", curX + btnW / 2, curY + btnH / 1.8);
  };
  var buyButton = function buyButton(x, y, s, skin, btnIndex) {
    var locked = skin.cost === null;
    var canAfford = !locked && vouchers >= skin.cost;
    var target = worldMouseX >= x && worldMouseX <= x + s && worldMouseY >= y && worldMouseY <= y + s / 3 ? 1 : 0;
    buttonHovers[btnIndex] = lerp(buttonHovers[btnIndex], target, 0.2);
    var h = buttonHovers[btnIndex];
    var btnW = s + h * 10;
    var btnH = s / 3 + h * 3.3;
    var curX = x - h * 5;
    var curY = y - h * 1.6;

    // Button colors
    var c1, c2;
    if (locked) {
      c1 = color(200, 200, 200);
      c2 = color(160, 160, 160);
    } else if (canAfford) {
      c1 = color(0, 255, 255);
      c2 = color(0, 180, 255);
    } else {
      c1 = color(200, 0, 0);
      c2 = color(150, 0, 0);
    }
    fill(lerpColor(c1, c2, h));
    stroke(0);
    strokeWeight(3);
    rect(curX, curY, btnW, btnH, s / 5);

    // Buying
    if (target === 1 && mouseIsPressed && canAfford && !skin.owned && !locked) {
      skin.owned = true;
      vouchers -= skin.cost;
    }

    // Text
    var txt = locked ? "LOCKED" : "Buy - " + skin.cost;
    arcAlign(CENTER);
    arcSize(s / 11 + h);
    stroke(0);
    arcText(txt, curX + btnW / 2, curY + btnH / 1.8);
  };

  // I love this graphic
  var lvlVoucher = function lvlVoucher(x, y, s) {
    noFill();
    stroke(0);
    strokeWeight(s / 20);
    fill(255, 240, 0); //First half
    beginShape();
    vertex(x - s / 10, y - s / 12);
    vertex(x - s / 9, y - s / 6);
    vertex(x - s / 4.5, y - s / 7);
    vertex(x - s / 4.5, y - s / 12);
    vertex(x - s / 2.8, y - s / 20);
    vertex(x - s / 2.6, y - s / 8);
    vertex(x - s / 1.9, y - s / 13);
    vertex(x - s / 2, y);
    bezierVertex(x - s / 2, y, x - s / 4, y + s / 2, x, y + s / 5);
    bezierVertex(x + s / 20, y + s / 5, x - s / 10, y + s / 5, x - s / 10, y - s / 15);
    endShape();
    fill(255, 0, 0); //Circle in the middle
    noStroke();
    ellipse(x - s / 15, y + s / 4, s / 7, s / 7);
    stroke(0);
    //Second Half
    fill(255, 150, 0);
    beginShape();
    vertex(x + s / 10, y - s / 25);
    vertex(x + s / 9, y - s / 8);
    vertex(x + s / 4, y - s / 10);
    vertex(x + s / 4.2, y - s / 30);
    vertex(x + s / 2.7, y - s / 60);
    vertex(x + s / 2.5, y - s / 12);
    vertex(x + s / 2, y - s / 19);
    bezierVertex(x + s / 2, y, x + s / 3, y + s / 2, x - s / 6, y + s / 3.4);
    bezierVertex(x - s / 5, y + s / 3.4, x + s / 20, y + s / 3, x + s / 10, y - s / 25);
    endShape();
  };

  // Ripped from our backgrounds sandbox
  var xMovement = 1;
  var yMovement = 1;
  var shopBackground = function shopBackground() {
    background(255);
    stroke(0, 0, 0, 50);
    strokeWeight(1);
    xMovement++;
    yMovement++;
    for (var x = 0; x < width; x += 35) {
      line(x + xMovement % 35, 0, x + xMovement % 35, height); // Vertical lines
    }
    for (var y = 0; y < height; y += 35) {
      line(0, y + yMovement % 35, width, y + yMovement % 35); // Horizontal lines
    }
  };
  var displayY = function displayY(baseY) {
    return baseY - shopScroll;
  };
  var skinCache = [];
  var cacheInitialized = false;
  var skinCache = [];
  var cacheInitialized = false;
  var initSkinCache = function initSkinCache() {
    pushMatrix();
    pushStyle();
    imageMode(CORNER);
    for (var i = 0; i < skins.length; i++) {
      var sId = skins[i].id;
      background(0, 0, 0, 0);
      pushMatrix();
      translate(100, 100);
      you(0, 0, 55, sId);
      popMatrix();
      skinCache[sId] = get(25, 25, 150, 150);
    }
    popStyle();
    popMatrix();
    background(255);
    cacheInitialized = true;
  };

  //]

  // LEVEL SELECT [
  var worldBackground = function worldBackground(gx, gy, world) {
    var target = worlds[world - 1];

    // smoother lerp
    var lerpSpeed = 0.08;

    // true transition
    currentBG = lerpColor(currentBG, target.bg, lerpSpeed);
    currentLine = lerpColor(currentLine, target.line, lerpSpeed);
    currentWeight = lerp(currentWeight, target.weight, lerpSpeed);

    // subtle pulse
    var pulse = (sin(frameCount * 1.2) + 1) * 30;

    // apply pulse after transition
    var drawBG;
    if (world < 4) {
      drawBG = color(red(currentBG) + pulse, green(currentBG) + pulse, blue(currentBG) + pulse);
    }
    background(drawBG);
    if (world === 4) {
      background(0);
    }
    stroke(currentLine);
    strokeWeight(currentWeight);
    noFill();
    var spacing = 64;
    var overdraw = spacing * 3;
    var ox = gx % spacing;
    var oy = gy % spacing;

    // vertical lines
    for (var x = -overdraw; x <= 600 + overdraw; x += spacing) {
      line(x + ox + 70, -overdraw, x + ox - 70, 600 + overdraw);
    }

    // horizontal lines
    for (var i = -20; i <= 40; i++) {
      var wy = i * spacing + oy;
      var y1 = wy * 0.8 - 30;
      var y2 = wy * 1.25;
      line(-overdraw, y1, 600 + overdraw, y2);
    }
  };
  var drawBackButton = function drawBackButton(x, y, currentSize, baseSize) {
    // Draw the button background
    fill(255, 255, 255, 100);
    stroke(0);
    strokeWeight(currentSize / 15);
    ellipse(x, y, currentSize, currentSize);
    noFill();
    stroke(100, 100, 100, 40);
    arc(x, y, currentSize / 1.3, currentSize / 1.3, 305 + (currentSize - baseSize) / baseSize * 1450, 325 + (currentSize - baseSize) / baseSize * 1450);

    // Draw back arrow
    stroke(255, 0, 0);
    strokeWeight(currentSize / 8);
    var arrowLength = currentSize / 3;
    var arrowTipX = x - arrowLength / 2;
    var arrowTipY = y;

    // Main arrow line
    line(x + arrowLength / 2, y, arrowTipX, arrowTipY);

    // Arrow head
    line(arrowTipX, arrowTipY, arrowTipX + currentSize / 6, arrowTipY - currentSize / 6);
    line(arrowTipX, arrowTipY, arrowTipX + currentSize / 6, arrowTipY + currentSize / 6);
  };
  var backButton = function backButton(x, y, baseSize) {
    // Initialize state if this is the first time the button is drawn
    if (buttonStates.back === undefined) {
      buttonStates.back = baseSize;
    }

    // Use the current animated size for the hover detection
    var hovered = dist(worldMouseX, worldMouseY, x, y) < buttonStates.back / 2;

    // Update the size for this specific button
    buttonStates.back = animateButton(buttonStates.back, baseSize, hovered);
    var currentSize = buttonStates.back;
    drawBackButton(x, y, currentSize, baseSize);

    // Interaction logic
    if (hovered) {
      cursor(HAND);
      if (mouseIsPressed && !transitionActive) {
        transitionActive = true;
        sceneButtonFrames = 0;
        sceneToTransition = "title";
      }
    }
  };
  var areaXlogo = function areaXlogo(x, y, s) {
    arcSize(s / 3);
    if (frameCount % round(random(0, 2))) {
      fill(255, 255, 255, 200);
      arcText("X", x + random(-s / 8, s / 8) - s / 3, y + random(-s / 8, s / 8));
    } //White glitch

    if (frameCount % round(random(0, 2))) {
      fill(0, 0, 255);
      arcText("X", x + random(-s / 8, s / 8) - s / 3, y + random(-s / 8, s / 8));
    } //Blue glitch

    stroke(random(180, 220), 0, 0);
    arcText("X", x - s / 3, y);
    textAlign(LEFT, BASELINE);
  };
  var xPortalRot = 0;
  var areaXPortal = function areaXPortal(x, y, s, rot, mode) {
    pushMatrix();
    translate(x, y);
    rotate(rot);

    // Outer rings
    for (var c = 0; c < 40; c++) {
      stroke(130, 0, 0, 255 - c * 17);
      strokeWeight(4);
      noFill();
      ellipse(0, 0, s + c * 7, s + c * 7);
    }

    // Vortex lines coming out
    strokeWeight(s / 18);
    stroke(150, 0, 0); // dark red
    for (var a = 0; a < 4; a++) {
      pushMatrix();
      rotate(a * 90);
      arc(0, 0, s, s * random(1.77, 1.8), 270, 360);
      popMatrix();
    }
    stroke(0); // black
    for (var a = 0; a < 4; a++) {
      pushMatrix();
      rotate(45 + a * 90);
      arc(0, 0, s, s * random(1.45, 1.5), 270, 360);
      popMatrix();
    }

    // Center
    stroke(0);
    strokeWeight(s / 15);
    ellipse(0, 0, s, s);
    noStroke();
    for (var c = 0; c < 40; c++) {
      fill(random(140, 150) - c * (800 / s), 0, 0);
      ellipse(0, 0, s - c * 5, s - c * 5);
    }
    popMatrix();
  };
  var worldSubScreen = 0; // what scene to activate
  var worldSubScreenTo = 0; // what scene to go to?

  var areaSelected = [];
  var areaSelect = 0;
  var areaSelectBck;
  var aSelectX = 610;
  var aSelectXGoal = 265;
  var arrowToGo = [0, 0];
  var areaSelectButton = function areaSelectButton(x, y, baseSize, world) {
    // Create unique state for each button
    if (buttonStates[world] === undefined) {
      buttonStates[world] = {
        size: baseSize,
        outlineOp: 0
      };
    }
    var state = buttonStates[world];

    // Hover detection
    var hovered = dist(worldMouseX, worldMouseY, x, y) < state.size / 2;
    var unlocked = lvlUnlock > (world - 1) * 4;

    // Animate size
    state.size = animateButton(state.size, baseSize, hovered);
    var currentSize = state.size;
    var target = worlds[world - 1];

    // Animate outline opacity
    if (hovered && unlocked) {
      state.outlineOp = lerp(state.outlineOp, 255, 0.1);
      areaSelected[world - 1] = true;
      if (world === 1) {
        arrowToGo[0] = x;
        arrowToGo[1] = y + currentSize / 2;
      }
      if (world === 2) {
        arrowToGo[0] = x - currentSize / 2;
        arrowToGo[1] = y;
      }
      if (world === 3) {
        arrowToGo[0] = x + currentSize / 2;
        arrowToGo[1] = y - currentSize / 2;
      }
      if (world === 4) {
        arrowToGo[0] = x;
        arrowToGo[1] = y;
      }
    } else {
      state.outlineOp = lerp(state.outlineOp, 0, 0.1);
      areaSelected[world - 1] = false;
    }

    // Draw background

    fill(worlds[world - 1].bg, state.outlineOp);
    if (world === 4) {
      stroke(255, 230, 230, state.outlineOp);
    } else {
      stroke(0, 0, 0, state.outlineOp);
    }
    strokeWeight(currentSize / 20);
    rect(x - currentSize / 2, y - currentSize / 2, currentSize, currentSize, currentSize / 8);

    // Shading
    noFill();
    stroke(100, 100, 100, state.outlineOp / 6.375);
    strokeWeight(currentSize / 25);
    arc(x + currentSize / 3.3, y - currentSize / 3.3, currentSize / 5, currentSize / 5, 290, 340);
    var bossFloat = 0;
    if (hovered && unlocked) {
      bossFloat = sin(frameCount * 3) * 6;
    }

    // Graphics
    if (world === 1) {
      boss1Graphic(x, y + bossFloat, currentSize / 1.6);
    }
    if (world === 2) {
      boss2Graphic(x, y + bossFloat, currentSize / 1.7);
    }
    if (world === 3) {
      boss3Graphic(x, y + bossFloat, currentSize / 1.6);
    }
    if (world === 4) {
      areaXPortal(x, y, currentSize / 2, xPortalRot);
    }

    // Interaction
    if (hovered && unlocked) {
      cursor(HAND);
      if (mouseIsPressed && !transitionActive) {
        transitionActive = true;
        sceneButtonFrames = 0;
        sceneToTransition = "Play";
        worldSubScreenTo = world;
      }
    }
  };

  // Random platform data
  var mapPlatforms = [];

  // Generate platforms
  if (mapPlatforms.length === 0) {
    var attempts = 0;
    while (mapPlatforms.length < 20 && attempts < 1000) {
      var newPlat = {
        x: random(0, 560),
        y: random(0, 570),
        w: random(40, 120),
        h: random(12, 26),
        type: floor(random(0, 3))
      };
      var overlapping = false;

      // Check against existing platforms
      for (var j = 0; j < mapPlatforms.length; j++) {
        var pl = mapPlatforms[j];

        // Padding between platforms
        var spacing = 20;
        if (newPlat.x < pl.x + pl.w + spacing && newPlat.x + newPlat.w > pl.x - spacing && newPlat.y < pl.y + pl.h + spacing && newPlat.y + newPlat.h > pl.y - spacing) {
          overlapping = true;
          break;
        }
      }

      // Only add if no overlap
      if (!overlapping) {
        mapPlatforms.push(newPlat);
      }
      attempts++;
    }
  }
  var levelSelectButton = function levelSelectButton(x, y, baseSize, level) {
    // Create unique state for each button
    if (buttonStates[level] === undefined) {
      buttonStates[level] = {
        size: baseSize,
        outlineOp: 0
      };
    }
    var state = buttonStates[level];
    var currentSize = state.size;

    // Hover detection
    var hovered = worldMouseX > x - currentSize / 4 && worldMouseX < x - currentSize / 4 + currentSize * 2 && worldMouseY > y - currentSize / 2 && worldMouseY < y - currentSize / 2 + currentSize / 1.4;

    // Animate size
    state.size = animateButton(state.size, baseSize, hovered);

    // Draw background

    fill(255, 255, 255, 255);
    stroke(0);
    strokeWeight(currentSize / 15);
    rect(x - currentSize + baseSize, y - currentSize / 2, currentSize * 2.3, currentSize / 1.4, currentSize);

    // Shading
    noFill();
    stroke(100, 100, 100, 100);
    strokeWeight(currentSize / 25);
    arc(x + currentSize * 1.05 + baseSize, y - currentSize / 4, currentSize / 5, currentSize / 5, 290, 340);
    if (lvlUnlock > (worldSubScreen - 1) * 4 + level) {
      fill(0, 240, 100);
    } else if (lvlUnlock === (worldSubScreen - 1) * 4 + level) {
      fill(220, 0, 0);
    } else {
      fill(150);
    }
    stroke(0);
    if (level !== 4) {
      ellipse(x + baseSize - currentSize / 1.5, y - currentSize / 7, currentSize / 2.5, currentSize / 2.5);
    } else {
      if (lvlUnlock < (worldSubScreen - 1) * 4 + level) {
        fill(0);
      }
      noStroke();
      quad(x + baseSize - currentSize / 1.65, y - currentSize / 3, x + baseSize - currentSize / 2.5, y - currentSize / 8, x + baseSize - currentSize / 1.65, y + currentSize / 15, x + baseSize - currentSize / 1.24, y - currentSize / 8);
      ellipse(x + baseSize - currentSize / 2.6, y - currentSize / 30, currentSize / 10, currentSize / 10);
      ellipse(x + baseSize - currentSize / 1.2, y - currentSize / 30, currentSize / 10, currentSize / 10);
    }
    if (worldSubScreen === 1) {
      stroke(0, 0, 100);
    }
    if (worldSubScreen === 2) {
      stroke(0, 100, 0);
    }
    if (worldSubScreen === 3) {
      stroke(130, 50, 0);
    }
    if (worldSubScreen === 4) {
      stroke(random(130, 240), 0, 0);
    }
    arcSize(currentSize / 4.5);
    if (level === 4) {
      arcText('BOSS', x + baseSize - currentSize / 4, y - currentSize / 10);
    } else if (worldSubScreen < 4) {
      arcText(worldSubScreen + ' - ' + level, x + baseSize - currentSize / 5, y - currentSize / 10);
    } else {
      arcText('X - ' + level, x + baseSize - currentSize / 5, y - currentSize / 10);
    }

    // Interaction
    if (hovered) {
      cursor(HAND);
      if (mouseIsPressed && !transitionActive && lvlUnlock >= (worldSubScreen - 1) * 4 + level) {
        transitionActive = true;
        sceneButtonFrames = 0;
        sceneToTransition = "game";
        world = worldSubScreen;
        currentLevel = (worldSubScreen - 1) * 4 + level - 1;
      }
    }
  };
  var exitSelectButton = function exitSelectButton(x, y, baseSize) {
    // Initialize state if this is the first time the button is drawn
    if (buttonStates.back === undefined) {
      buttonStates.back = baseSize;
    }

    // Use the current animated size for the hover detection
    var hovered = dist(worldMouseX, worldMouseY, x, y) < buttonStates.back / 2;

    // Update the size for this specific button
    buttonStates.back = animateButton(buttonStates.back, baseSize, hovered);
    var currentSize = buttonStates.back;
    drawBackButton(x, y, currentSize, baseSize);

    // Interaction
    if (hovered) {
      cursor(HAND);
      if (mouseIsPressed && !transitionActive) {
        transitionActive = true;
        sceneButtonFrames = 0;
        sceneToTransition = "Play";
        worldSubScreenTo = 0;
      }
    }
  };

  //]

  // MORE FINAL BOSS [

  var finalPlayerInit = false;
  Player.prototype.finalBossUpdate = function () {
    p.spikeCooldown--;

    // Paralysis tick
    if (this.paralyzed) {
      this.paralyzedFrames++;
      if (this.paralyzedFrames >= this.paralyzedDuration) {
        this.paralyzed = false;
        this.paralyzedFrames = 0;
        //this.spikeCooldown = 20; // brief grace after paralysis ends
      }
      return; // skip all input
    }

    // horizontal movement
    var moveVelX = random(0, 20);
    if ((isPressed(LEFT) || isPressed('a')) && p.x > 45) {
      // Move LEFT
      this.vx -= moveVelX;
    } else if ((isPressed(RIGHT) || isPressed('d')) && p.x < 515) {
      // Move right
      this.vx += moveVelX;
    } else {
      // friction
      this.vx *= 0.9;
      if (abs(this.vx) < 0.1) {
        this.vx = 0;
      }
    }

    // vertical movement
    var moveVelY = random(0, 20);
    if ((isPressed(UP) || isPressed('w')) && p.y > 45) {
      // Move up
      this.vy -= moveVelY;
    } else if ((isPressed(DOWN) || isPressed('s')) && p.y < 515) {
      // Move down
      this.vy += moveVelY;
    } else {
      // friction
      this.vy *= 0.9;
      if (abs(this.vy) < 0.1) {
        this.vy = 0;
      }
    }
    this.maxSpeed = random(0, 8);
    // clamp speed
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    // Move player
    this.x += this.vx;
    this.y += this.vy;
    this.grounded = false;
  };
  Player.prototype.initiateFinalBoss = function () {
    p.x = 280;
    p.y = 280;
    p.health = 100;
  };
  Player.prototype.finalBossReset = function () {
    p.health = 100;
    finalBossPhase = 2;
    cutsceneIs = true;
    cutsceneName = "masterX";
    bossScreenOpacity = 0;
    cFrames = 0;
    cutsceneX[0] = 0;
    p.paralyzed = false;
    p.lives--;
  };

  // Vortex Hyperspace setup [

  // General setup
  var numStars = 700;
  var baseTunnelSpeed = 7;
  var tunnelSpeed = baseTunnelSpeed;
  var maxZ = 700;
  var stars = [];

  // Anything in between these two values are picked
  var hyperspaceColor1 = color(130, 0, 0);
  var hyperspaceColor2 = color(235, 170, 170);

  // Initialization
  for (var i = 0; i < numStars; i++) {
    var randAngle = random(0, 360);
    var randR = random(60, 140); // Radius of the tunnel wall
    var randZ = random(1, maxZ);
    var randLen = random(40, 80); // Length of the hyperspace streaks
    var randWeight = random(1, 3.5);

    // pick a color in between them
    var randColor = lerpColor(hyperspaceColor1, hyperspaceColor2, random(0, 1));
    stars.push({
      angle: randAngle,
      r: randR,
      z: randZ,
      len: randLen,
      w: randWeight,
      c: randColor
    });
  }

  //]

  var poisonBall = function poisonBall(x, y, s) {
    pushMatrix();
    translate(x, y);
    scale(s / 120);
    translate(-254, -242);

    // Main shape and outline
    fill(150, 200, 150);
    stroke(10, 100, 10);
    strokeWeight(7);
    beginShape();
    vertex(230, 294);
    bezierVertex(186, 272, 188, 186, 251, 187);
    bezierVertex(301, 182, 335, 253, 286, 292);
    vertex(278, 256);
    vertex(261, 297);
    vertex(240, 259);
    vertex(230, 294);
    endShape();
    // Pink inside
    fill(230, 160, 160);
    noStroke();
    beginShape();
    vertex(237, 233);
    vertex(256, 256);
    vertex(270, 232);
    vertex(291, 239);
    bezierVertex(281, 182, 221, 201, 217, 240);
    vertex(236, 231);
    endShape();
    popMatrix();

    // Shine
    noFill();
    strokeWeight(s / 20);
    stroke(255, 255, 255, 100);
    arc(x + s / 11, y - s / 11, s / 2, s / 2, 290, 340);
  };
  var shuffleArray = function shuffleArray(arr) {
    // Make copy so original array isn't destroyed
    var a = arr.slice(0);
    for (var i = a.length - 1; i > 0; i--) {
      var j = floor(random(i + 1));
      var temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    return a;
  };
  var vortexCollapseSize = 1000;
  // Phase 3 mechanics
  // Google's Gemini AI helped with turning our developed ideas into a basic structure. We then edited it to fit the game's needs

  // track phase 3 stats
  var FinalPhase = {
    livesRemaining: 5,
    vortexStability: 100,
    // Decreases over time
    currentState: "SURVIVAL",
    // Status

    attacks: ["fireballs", "spikeWalls", "paralysisBeams", "thornShots", "poisonSpray"],
    attackQueue: [],
    attackTimer: 0,
    obstacleTimer: 0,
    currentAttackPattern: null,
    touchpoints: [],
    obstacles: []
  };

  // Spawns a series of touchpoints when vortex is unstable
  FinalPhase.spawnTouchpoints = function () {
    this.touchpoints = [];
    var count = map(this.livesRemaining, 4, 1, 3, 6);
    var pathRadius = 250; // Half of your 500x500 circle diameter
    var centerX = 300; // Center of the screen
    var centerY = 300;

    // Minimum angular separation in degrees to prevent overlapping edges
    var minAngleBuffer = 25;
    for (var i = 0; i < count; i++) {
      var angle;
      var isValid = false;
      var attempts = 0; // Guard to prevent infinite loops if space runs out

      // Keep searching for a unique spot until a safe one is found
      while (!isValid && attempts < 100) {
        angle = random(0, 360);
        isValid = true; // Assume it's good until proven otherwise
        attempts++;

        // Compare this new angle against every touchpoint already added
        for (var j = 0; j < this.touchpoints.length; j++) {
          var existingTp = this.touchpoints[j];

          // Calculate the absolute difference between the two angles
          var angleDiff = abs(angle - existingTp.angle);

          // Handle the 0/360 degree wrap-around seam (e.g., 5 deg and 355 deg are close)
          if (angleDiff > 180) {
            angleDiff = 360 - angleDiff;
          }

          // If it's within our danger zone buffer, reject this angle
          if (angleDiff < minAngleBuffer) {
            isValid = false;
            break; // Exit the inner loop and try a new angle choice
          }
        }
      }

      // Push the safely validated object into our array
      this.touchpoints.push({
        angle: angle,
        // Safe, non-overlapping angle tracking metric
        pathRadius: pathRadius,
        radius: 40,
        isHit: false,
        x: centerX,
        y: centerY
      });
    }
  };

  // Controls the 5 attacks
  FinalPhase.triggerAttack = function (patternName) {
    this.currentAttackPattern = patternName;
    this.obstacleTimer = 0;
    this.obstacles = []; // Clear out old data from previous patterns safely
  };
  FinalPhase.updateAttack = function () {
    if (this.currentAttackPattern === "fireballs") {
      this.obstacleTimer++; // Track attack duration

      var centerX = 300;
      var centerY = 300;

      // 1 Spawn 4 fireballs every 100 frames
      if (this.obstacleTimer <= 400 && this.obstacleTimer % 105 === 0) {
        // Pick a random target trajectory angle
        var travelAngle = random(0, 360);
        // Target distance from center
        var maxDistance = random(0, 300);
        for (var f = 0; f < 8; f++) {
          this.obstacles.push({
            angle: random(0, 360),
            maxDist: random(40, 260),
            z: 0,
            // Depth tracker
            speed: random(0.005, 0.015),
            // Acceleration
            baseRadius: 8,
            // Tiny spawn size
            maxRadius: 45,
            // Full foreground explosion danger size
            isDead: false
          });
        }
      }

      // 2 Loop backwards through active objects
      for (var i = this.obstacles.length - 1; i >= 0; i--) {
        var fb = this.obstacles[i];

        // Progress the deep Z-layer timeline forward
        fb.z += fb.speed;

        // Convert raw depth values into a exponential expansion curves
        var currentRadius = lerp(fb.baseRadius, fb.maxRadius, fb.z);

        // Calculate pseudo-3D positions
        fb.x = centerX + cos(fb.angle) * (fb.maxDist * fb.z);
        fb.y = centerY + sin(fb.angle) * (fb.maxDist * fb.z);

        // 3 Rings shrink down toward danger size
        // They start huge at z = 0, and match the exact fireball radius at z = 1.0
        var warningRingRadius = lerp(fb.maxRadius * 4, currentRadius, fb.z);

        // 4 Hit Detection Window Active ONLY when the warning ring aligns perfectly
        if (fb.z >= 1.0 && fb.z < 1.15) {
          // Construct a dynamic hitbox reference object matching player system formats
          var fireballHitbox = {
            x: fb.x,
            y: fb.y,
            w: currentRadius,
            h: currentRadius
          };

          // Collision
          if (checkCollision(p, fireballHitbox)) {
            p.health -= 10; // Trigger damage loop on player step
            fb.isDead = true;
            //println('hit!');
          }
        }

        // 5 Despawn projectile once it blows past the active viewport plane
        if (fb.z >= 1.25) {
          fb.isDead = true;
        }

        // Remove dead elements from memory pipeline instantly
        if (fb.isDead) {
          spawnParticles(fb.x, fb.y, 50, 'lava', 4);
          this.obstacles.splice(i, 1);
        }
      }

      // 6 Attack Sequence Wrap-Up
      if (this.obstacleTimer > 500 && this.obstacles.length === 0) {
        this.currentAttackPattern = null; // Cleanly open space for next queued attack
        //println("Fireball pattern complete!");
      }
    } else if (this.currentAttackPattern === "spikeWalls") {
      this.obstacleTimer++;

      // 1 Spawn a wall every 180 frames
      if (this.obstacleTimer <= 450 && this.obstacleTimer % 180 === 1) {
        // Randomly choose 1 or 2 openings
        var holesCount = 2;
        var holeZones = [];
        for (var h = 0; h < holesCount; h++) {
          holeZones.push({
            x: random(100, width - 100),
            y: random(100, height - 100),
            size: 110 // Size of the safety hole zone
          });
        }
        this.obstacles.push({
          type: "spikewall",
          z: 0.0,
          // 3D scale tracking (0 to 1)
          speed: 0.007,
          // Wall approach speed
          holes: holeZones,
          // Safe spots saved inside the wall instance
          falling: false,
          // Tracks if it is currently dropping away
          fallY: 0,
          // Drops down after damage window
          isDead: false
        });
      }

      // 2 Update and check active walls
      for (var i = this.obstacles.length - 1; i >= 0; i--) {
        var wall = this.obstacles[i];
        if (!wall.falling) {
          wall.z += wall.speed;

          // 3 Trigger exactly when wall hits foreground
          if (wall.z >= 1.0) {
            var playerSafe = false;

            // Check if player is standing within any of the wall holes
            for (var h = 0; h < wall.holes.length; h++) {
              var hole = wall.holes[h];
              var holeHitbox = {
                x: hole.x,
                y: hole.y,
                w: hole.size,
                h: hole.size
              };
              // Distance check from the player to center of the hole
              if (checkCollision(p, holeHitbox)) {
                playerSafe = true;
                break;
              }
            }
            if (!playerSafe) {
              p.health -= 25; // Massive damage for crashing into a solid wall!
              spawnParticles(p.x, p.y, 10, 'spikes', 20);
              //println("Crashed into wall!");
            }

            // Turn on falling state to drop it down off screen
            wall.falling = true;
          }
        } else {
          // Lerp cleanly toward the bottom of the screen
          wall.fallY += 20;
          if (wall.fallY > height) {
            wall.isDead = true;
          }
        }

        // Remove dead elements from memory pipeline instantly
        if (wall.isDead) {
          this.obstacles.splice(i, 1);
        }
      }

      // 4 Attack Sequence Wrap-Up
      if (this.obstacleTimer > 550 && this.obstacles.length === 0) {
        this.currentAttackPattern = null;
        //println("Spike Wall pattern complete!");
      }
    } else if (this.currentAttackPattern === "paralysisBeams") {
      this.obstacleTimer++;

      // 1 Spawn Waves at specific global frames
      // Wave 1 fires at frame 1. Wave 2 fires at frame 200.
      if (this.obstacleTimer === 1 || this.obstacleTimer === 170 || this.obstacleTimer === 340) {
        // Each wave randomly decides its own orientation
        var chosenOrientation = random(1) < 0.5 ? "horizontal" : "vertical";
        var beamCount = 5;
        for (var b = 0; b < beamCount; b++) {
          var randomPos = random(40, 560); // Kept slightly away from raw edges

          this.obstacles.push({
            type: "paralysisBeam",
            orientation: chosenOrientation,
            pos: randomPos,
            thickness: 50,
            spawnFrame: this.obstacleTimer,
            // CRITICAL: Marks when this specific wave was born
            telegraphTime: 120,
            activeTime: 60,
            hasHitPlayer: false,
            isDead: false
          });
        }

        //println('Spawning beam wave at frame: ' + this.obstacleTimer);
      }

      // 2 Update logic loop
      for (var i = this.obstacles.length - 1; i >= 0; i--) {
        var beam = this.obstacles[i];
        if (beam.type !== "paralysisBeam") {
          continue;
        }

        // Calculate how long this beam has been alive
        var localAge = this.obstacleTimer - beam.spawnFrame;
        var startDamageFrame = beam.telegraphTime;
        var endDamageFrame = beam.telegraphTime + beam.activeTime;

        // 3 Collision based on local age
        if (localAge > startDamageFrame && localAge <= endDamageFrame) {
          var hit = false;
          var beamHitbox;
          // Hitbox
          if (beam.orientation === "horizontal") {
            beamHitbox = {
              x: 300,
              y: beam.pos - beam.thickness / 2,
              w: 600,
              h: beam.thickness
            };
            if (checkCollision(p, beamHitbox)) {
              hit = true;
            }
          } else if (beam.orientation === "vertical") {
            beamHitbox = {
              x: beam.pos - beam.thickness / 2,
              y: 300,
              w: beam.thickness,
              h: 600
            };
            if (checkCollision(p, beamHitbox)) {
              hit = true;
            }
          }
          fill(255, 0, 0);
          //rect(beamHitbox.x, beamHitbox.y, beamHitbox.w, beamHitbox.h);

          // Apply paralysis status
          if (hit && !beam.hasHitPlayer) {
            p.health -= 100 / 3;
            p.paralyzed = true;
            p.paralyzedFrames = 0;
            p.paralyzedDuration = 120;
            beam.hasHitPlayer = true;
            //println("Player paralyzed!");
          }
        }

        // 4 Cleanup
        if (localAge > endDamageFrame) {
          beam.isDead = true;
        }
        if (beam.isDead) {
          this.obstacles.splice(i, 1);
        }
      }

      // 5 Attack Sequence Wrap-Up
      // We close the pattern safely at frame 400.
      if (this.obstacleTimer > 400 && this.obstacles.length === 0) {
        this.currentAttackPattern = null;
        //println("Paralysis Beams pattern complete!");
      }
    } else if (this.currentAttackPattern === "thornShots") {
      this.obstacleTimer++;

      // 1 spawns 1 every 100 frames
      if (this.obstacleTimer <= 301 && (this.obstacleTimer === 1 || (this.obstacleTimer - 1) % 100 === 0)) {
        for (var i = 0; i < 1; i++) {
          // Spawn thorn directly at boss location
          var spawnX = random(100, 500);
          var spawnY = random(100, 500);

          // Random dynamic angles (Pong velocities)
          var angleSpeedX = random(1) < 0.5 ? -3.5 : 3.5;
          var angleSpeedY = random(2.5, 4.5);

          // NEW: Calculate initial angle based on the starting velocity vector (converted to degrees)
          var startingAngle = Math.atan2(angleSpeedY, angleSpeedX) * 180 / Math.PI;
          this.obstacles.push({
            type: "pongThorn",
            x: spawnX,
            y: spawnY,
            vx: angleSpeedX,
            vy: angleSpeedY,
            r: startingAngle,
            // Updated from random(360) to match direction
            size: 50
          });
        }
      }

      // 2 Movement, Boundaries, & Collision Updates
      for (var i = this.obstacles.length - 1; i >= 0; i--) {
        var thorn = this.obstacles[i];
        if (thorn.type !== "pongThorn") {
          continue;
        }

        // Apply movement physics
        thorn.x += thorn.vx;
        thorn.y += thorn.vy;

        // Track if a bounce happens so we can update the angle
        var didBounce = false;

        // Pong Ball Wall Bounce Check (Left / Right Screen Boundaries)
        if (thorn.x < 10 || thorn.x > 590) {
          thorn.vx *= -1;
          thorn.x = constrain(thorn.x, 25, 575);
          didBounce = true;
        }

        // Pong Ball Wall Bounce Check (Top / Bottom Canvas Boundaries)
        if (thorn.y < 10 || thorn.y > 590) {
          thorn.vy *= -1;
          thorn.y = constrain(thorn.y, 25, 575);
          didBounce = true;
        }

        // NEW: If the thorn bounced off a wall, recalculate its angle to face the new direction
        if (didBounce) {
          thorn.r = Math.atan2(thorn.vy, thorn.vx) * 180 / Math.PI + 90;
        }

        // Execute custom collision via our refactored OBB helper
        if (checkThornHit(p, thorn) && p.spikeCooldown <= 0) {
          spawnParticles(p.x, p.y, 20, "spike", 10);
          p.health -= 25; // Standard attack damage variant
          p.hurtFrames = 25;
          p.spikeCooldown = 15; // Safe frame reset window
        }
      }

      // 3 Attack Pattern Wrap-Up Duration
      if (this.obstacleTimer > 650) {
        this.obstacles = []; // Wipe arrays
        this.currentAttackPattern = null;
        //println("Thorn Shots pattern complete!");
      }
    } else if (this.currentAttackPattern === "poisonSpray") {
      this.obstacleTimer++;

      // 1 Spawning Mechanics: Spawn 2 new balls every 100 frames
      if (this.obstacleTimer <= 301 && (this.obstacleTimer === 1 || (this.obstacleTimer - 1) % 100 === 0)) {
        for (var i = 0; i < 3; i++) {
          // Distribute them randomly across the screen width
          var spawnX = random(30, 570);
          var spawnY = 650; // Starts from below or near the bottom edge

          this.obstacles.push({
            type: "mainPoisonBall",
            x: spawnX,
            y: spawnY,
            vy: -5,
            // Snappy float speed upward so later balls reach the top in time
            radius: 35,
            // 25 radius = 50x50 diameter
            isSpraying: false,
            sprayFramesLeft: 60
          });
        }
      }

      // 2 Update balls and particles
      for (var i = this.obstacles.length - 1; i >= 0; i--) {
        var obj = this.obstacles[i];
        if (!obj) {
          continue;
        }

        // Poison ball
        if (obj.type === "mainPoisonBall") {
          // Float up
          if (!obj.isSpraying) {
            obj.y += obj.vy;
            if (obj.y <= 70) {
              // Top of the screen boundary threshold
              obj.y = 70;
              obj.isSpraying = true;
            }
          }
          // Spray particles
          else if (obj.sprayFramesLeft > 0) {
            obj.sprayFramesLeft--;

            // Spawn 2 particles every 5 frames
            if (obj.sprayFramesLeft % 5 === 0) {
              for (var k = 0; k < 2; k++) {
                // Spray like a cone
                var angle = random(245, 295);
                var speed = random(3, 6);
                this.obstacles.push({
                  type: "poisonParticle",
                  x: obj.x,
                  y: obj.y,
                  vx: cos(angle) * speed * 0.8,
                  vy: -sin(angle) * speed,
                  opacity: 200,
                  size: random(6, 10) // Small particle size
                });
              }
            }
          }

          // Insta-kill collision
          var playerRadius = (p.w || 30) / 2;
          if (dist(obj.x, obj.y, p.x, p.y) < obj.radius + playerRadius) {
            p.health = 0;
            p.hurtFrames = 25;
          }
        }

        // Spray particles
        else if (obj.type === "poisonParticle") {
          // Update particle positions
          obj.x += obj.vx;
          obj.y += obj.vy;

          // Decay opacity over time
          obj.opacity -= 4;

          // Check dist() hitbox
          var playerRadius = (p.w || 30) / 2;
          if (dist(obj.x, obj.y, p.x, p.y) < obj.size / 2 + playerRadius) {
            p.health -= 2;
            p.hurtFrames = 10;

            // Spliced immediately out of array on player impact
            this.obstacles.splice(i, 1);
            continue;
          }

          // Splice particle entirely when invisible
          if (obj.opacity <= 0) {
            this.obstacles.splice(i, 1);
            continue;
          }
        }
      }

      // 3 Attack Pattern Wrap-Up Duration
      if (this.obstacleTimer > 500) {
        this.obstacles = []; // Clear array of remaining elements
        this.currentAttackPattern = null;
      }
    }
  };
  FinalPhase.update = function () {
    this.attackTimer++;

    // state 1 - spawning attacks
    if (this.currentState === "SURVIVAL") {
      this.vortexStability -= 0.05;

      // Cycle attacks smoothly based on your timer structure
      if ((this.attackTimer + 580) % 600 === 0) {
        // If our shuffled deck is empty, reshuffle a fresh playlist!
        if (this.attackQueue.length === 0) {
          this.attackQueue = shuffleArray(this.attacks);
        }

        // Pull the next unique attack off the top of the deck
        var attack = this.attackQueue.shift();
        this.triggerAttack(attack);
      }

      // Vortex collapses periodically
      if (this.vortexStability <= 40) {
        this.currentState = "STABILIZE_VORTEX";
        this.spawnTouchpoints();
      }
      this.updateAttack();
    }

    // state 2 - stabalizing vortex touchpoints
    if (this.currentState === "STABILIZE_VORTEX") {
      this.vortexStability -= 0.075;
      this.obstacles = [];
      var centerX = 300;
      var centerY = 300;
      var movementSpeed = 0.5;
      var remainingTouchpoints = 0;
      for (var i = 0; i < this.touchpoints.length; i++) {
        var tp = this.touchpoints[i];
        if (!tp.isHit) {
          remainingTouchpoints++;

          // Move the angle forward along circle
          tp.angle += movementSpeed;
          tp.x = centerX + cos(tp.angle) * tp.pathRadius;
          tp.y = centerY + sin(tp.angle) * tp.pathRadius;
          var tpHitbox = {
            x: tp.x - tp.radius / 1.5,
            y: tp.y - tp.radius / 1.5,
            w: tp.radius * 1.5,
            h: tp.radius * 1.5
          };

          // 3 Collision logic remains exactly the same!
          if (checkCollision(p, tpHitbox)) {
            tp.isHit = true;
            spawnParticles(tp.x, tp.y, 40, "vortexEnergy", 10);
          }
        }
      }

      // Check if all are cleared...
      if (remainingTouchpoints === 0) {
        this.livesRemaining--;
        spawnParticles(this.x, this.y, 120, "majorBossDamage");
        if (this.livesRemaining <= 1) {
          this.currentState = "DEAD";
        } else {
          this.vortexStability = 100;
          this.currentState = "SURVIVAL";
          this.attackTimer = 0;
        }
      }
      if (this.vortexStability <= 0) {
        p.health = 0;
      }
    }
    if (this.livesRemaining === 1) {
      cutsceneIs = true;
      cutsceneName = 'intoArea1';
    }
  };
  FinalPhase.reset = function () {
    this.livesRemaining = 5;
    this.vortexStability = 100;
    this.currentState = "SURVIVAL";

    // Clear out active gameplay objects so nothing is left over
    this.attackQueue = [];
    this.touchpoints = [];
    this.obstacles = [];

    // Reset all timing mechanics
    this.attackTimer = 0;
    this.currentAttackPattern = null;

    // Fixed both the working timer and the typoed variable from the initialization
    this.obstacleTimer = 0;
    this.obstaclewasdawdasdawdasdawdasdawdasdTimer = 0;

    // println("Final Phase has been successfully reset!");
  };

  // Draw it! :D
  FinalPhase.drawHUD = function (x, y, s) {
    // Health bar divided cleanly into 6 segments
    pushMatrix();
    translate(x + 50, y);
    scale(s / 100);
    translate(-150, -60);
    var segmentWidth = 45;
    noStroke();
    for (var i = 0; i < 5; i++) {
      fill(0, 0, 0, 100);
      noStroke();
      rect(17.5 + i * (segmentWidth + 10), 47.5, segmentWidth, 15, 3);
      if (i < this.livesRemaining) {
        fill(230, 40, 40); // Active life segment
      } else {
        fill(0, 0, 0); // Broken life segment
      }
      rect(12.5 + i * (segmentWidth + 10), 42.5, segmentWidth, 15, 3);
      stroke(255, 255, 255, 150);
      strokeWeight(3);
      arc(51 + i * (segmentWidth + 10), 49, 5, 7, 290, 360);
    }
    var shift = random(6.25 - this.vortexStability / 16, -6.25 + this.vortexStability / 16);
    if (finalBossPhase === 3) {
      stroke(65, 200, 255);
      arcSize(12);
      arcText('Stability:', 90, 78);
      noStroke();
      fill(0, 0, 0, 100);
      rect(47.5 + shift, 100, 200, 10, 5);
      fill(20, 20, 90, 255);
      rect(42.5 + shift, 95, 200, 10, 5);
      // Vortex stability health bar warning indicator
      if (this.vortexStability > 70) {
        fill(65, 200, 255);
      } else if (this.vortexStability > 35) {
        fill(50, 140, 230);
      } else {
        fill(52, 52, 200);
      }
      rect(42.5 + shift, 95, this.vortexStability * 2, 10, 5);
    }
    popMatrix();
    pushMatrix();
    translate(50, -10);
    arcSize(s / 7);
    stroke(0, 0, 0, 100);
    arcText('MASTER', x - s / 1.3, y - s / 3.7);
    stroke(255);
    if (finalBossPhase === 4) {
      stroke(0);
    }
    arcText('MASTER', x - s / 1.2, y - s / 3.3);
    areaXlogo(x + s / 1.3, y - s / 3, s / 1.7);
    popMatrix();
  };

  //]

  // ACHIEVEMENT STAMPS [

  var drawStampBorder = function drawStampBorder(x, y, r, col) {
    // Main circle
    stroke(col);
    strokeWeight(r / 4);
    noFill();
    ellipse(x, y, r * 2, r * 2);

    // Diamonds
    fill(255);
    noStroke();
    for (var i = 0; i < 36; i++) {
      var a = i * 10;
      var dx = x + cos(a) * r;
      var dy = y + sin(a) * r;
      pushMatrix();
      translate(dx, dy);
      rotate(a);
      quad(0, -r / 10, r / 10, 0, 0, r / 10, -r / 10, 0);
      popMatrix();
    }
  };
  var boss1Stamp = function boss1Stamp(x, y, s) {
    var col = rarityColorMap.Uncommon;
    drawStampBorder(x, y, s / 2, col);
    fill(col);
    noStroke();

    // Main body
    rect(x - s / 8, y - s / 4, s / 4, s / 2, s / 20);

    // Side protrusions
    rect(x + s / 12, y - s / 8, s / 4, s / 18, s / 50);
    rect(x + s / 10, y + s / 12, s / 6, s / 18, s / 50);
    rect(x - s / 3.3, y, s / 4, s / 18, s / 50);
    rect(x - s / 3.8, y + s / 8, s / 4, s / 18, s / 50);
    rect(x - s / 4.5, y - s / 5, s / 6, s / 18, s / 50);
  };
  var boss2Stamp = function boss2Stamp(x, y, s) {
    var col = rarityColorMap.Rare;
    drawStampBorder(x, y, s / 2, col);
    fill(col);
    noStroke();

    // Bottom body
    rect(x - s / 4, y, s / 2, s / 4, s / 20);

    // Platforms
    rect(x - s / 2.5, y - s / 10, s / 3, s / 12, s / 30);
    rect(x + s / 6, y - s / 8, s / 4, s / 12, s / 30);
    rect(x - s / 5, y - s / 4, s / 2.5, s / 12, s / 30);

    // Supports
    rect(x - s / 3.3, y - s / 12, s / 40, s / 6);
    rect(x - s / 3.3, y + s / 15, s / 1.5, s / 40);
    rect(x + s / 3, y - s / 12, s / 40, s / 6);
    rect(x, y - s / 4, s / 40, s / 4);
  };
  var boss3Stamp = function boss3Stamp(x, y, s) {
    var col = rarityColorMap.Legendary;
    drawStampBorder(x, y, s / 2, col);
    fill(col);
    noStroke();

    // Main body
    rect(x - s / 4, y - s / 6, s / 2, s / 3, s / 20);

    // Left extension
    rect(x - s / 2.7, y - s / 30, s / 4, s / 12, s / 40);

    // Right extension
    rect(x + s / 8, y - s / 10, s / 4, s / 12, s / 40);
  };
  var boss4Stamp = function boss4Stamp(x, y, s) {
    var col = rarityColorMap.Mythical;
    drawStampBorder(x, y, s / 2, col);
    fill(col);
    noStroke();
    pushMatrix();
    translate(x, y);
    rotate(45);
    rect(-s / 5, -s / 5, s / 3, s / 3, s / 40); // head
    rect(-s / 4, s / 5, s / 10, s / 10); // arms
    rect(s / 5, -s / 4, s / 10, s / 10);
    popMatrix();

    // cape (not rotated)
    rect(x - s / 4.4, y - s / 18, s / 2.2, s / 8);
  };

  // Image load all the stamps [
  background(0, 0, 0, 0);
  boss1Stamp(100, 100, 150);
  var boss1Img = get(0, 0, 200, 200);
  background(0, 0, 0, 0);
  boss2Stamp(100, 100, 150);
  var boss2Img = get(0, 0, 200, 200);
  background(0, 0, 0, 0);
  boss3Stamp(100, 100, 150);
  var boss3Img = get(0, 0, 200, 200);
  background(0, 0, 0, 0);
  boss4Stamp(100, 100, 150);
  var boss4Img = get(0, 0, 200, 200);

  //]

  //]

  // Speedruns [

  var speedrun = false;
  var framesToTime = function framesToTime(frames) {
    // Calculate hours, minutes, seconds, and hundredths of a second
    var hours = floor(frames / 216000);
    frames %= 216000;
    var minutes = floor(frames / 3600);
    frames %= 3600;
    var seconds = floor(frames / 60);
    var hundredths = floor(frames % 60 * 100 / 60);
    var txt = "";

    // Format hours if they exist
    if (hours > 0) {
      txt += hours + ":";
      if (minutes < 10) {
        txt += "0";
      }
    }

    // Format minutes
    txt += minutes + ":";

    // Format seconds
    if (seconds < 10) {
      txt += "0";
    }
    txt += seconds + ".";

    // Format hundredths
    if (hundredths < 10) {
      txt += "0";
    }
    txt += hundredths;
    return txt;
  };
  var Clock = function Clock(x, y, Size) {
    this.x = x || 0;
    this.y = y || 0;
    this.size = Size;
    this.time = 0;
    this.running = false;
  };
  Clock.prototype.update = function () {
    if (this.running) {
      this.time++;
    }
  };
  Clock.prototype.startTimer = function () {
    this.running = true;
  };
  Clock.prototype.pauseTimer = function () {
    this.running = false;
  };
  Clock.prototype.resetTime = function () {
    this.time = 0;
  };
  Clock.prototype.setTime = function (frames) {
    this.time = frames;
  };
  Clock.prototype.getSeconds = function () {
    return this.time;
  };
  Clock.prototype.draw = function () {
    var txt = framesToTime(this.time);
    var r = this.size / 2;

    // Shadow
    noStroke();
    fill(0, 0, 0, 35);
    ellipse(this.x + r * 0.07, this.y + r * 0.07, r * 2, r * 2);

    // Stopwatch body
    fill(245);
    stroke(240, 100, 0);
    strokeWeight(r * 0.17);
    ellipse(this.x, this.y, r * 2, r * 2);

    // Top button
    noStroke();
    fill(255, 200, 0);
    rect(this.x - r * 0.3, this.y - r * 1.45, r * 0.6, r * 0.25, r * 0.08);

    // Crown
    fill(130);
    rect(this.x - r * 0.10, this.y - r * 1.25, r * 0.20, r * 0.20, r * 0.05);

    // Side button
    pushMatrix();
    translate(this.x + r * 0.72, this.y - r * 0.72);
    rotate(35);
    fill(255, 200, 0);
    stroke(70);
    strokeWeight(r * 0.05);
    rect(-r * 0.08, -r * 0.18, r * 0.16, r * 0.36, r * 0.05);
    popMatrix();

    // Hour marks
    stroke(130, 0, 0);
    strokeWeight(r * 0.07);
    for (var i = 0; i < 12; i++) {
      var a = i * 30 - 90;
      var x1 = this.x + cos(a) * r * 0.72;
      var y1 = this.y + sin(a) * r * 0.72;
      var x2 = this.x + cos(a) * r * 0.88;
      var y2 = this.y + sin(a) * r * 0.88;
      line(x1, y1, x2, y2);
    }

    // Stopwatch hand (1 revolution every minute)
    stroke(163, 31, 154);
    strokeWeight(r * 0.1);
    var hand = this.time / 60 % 60 * 6 - 90;
    line(this.x, this.y, this.x + cos(hand) * r * 0.55, this.y + sin(hand) * r * 0.55);

    // Center pin
    noStroke();
    fill(163, 31, 154);
    ellipse(this.x, this.y, r / 4.5, r / 4.5);

    // Time text
    if (scene === "game" && !cutsceneIs) {
      fill(0);
      if (world === 4) {
        fill(255);
      }
      textAlign(CENTER, CENTER);
      textSize(r * 0.85);
      text(txt, this.x, this.y + r * 1.7);
    }
  };
  var speedClock = new Clock(530, 160, 60);
  speedClock.startTimer();

  //]

  // transitions [
  var dropDownInitialY = -450;
  var dropDownVisibleY = 100;
  var dropDownGoToY = dropDownInitialY;
  var dropDownY = dropDownGoToY;
  var dropDownMenu = function dropDownMenu(x, y, s, title, txt) {
    // main rectangle outline
    fill(255);
    stroke(180, 0, 0);
    strokeWeight(s / 20);
    rect(x, y, s, s, s / 15);

    // Background graphics
    if (title === "Boss Fights") {
      noStroke();
      fill(0, 0, 0, 50);
      var size = s / 4;
      quad(x + size, y + s / 2, x + s / 2, y + size, x + s - size, y + s / 2, x + s / 2, y + s - size);
      ellipse(x + s / 5, y + s / 1.75, s / 10, s / 10);
      ellipse(x + s / 1.25, y + s / 1.75, s / 10, s / 10);
    }
    if (title === "Level Vouchers") {
      lvlVoucher(x + s / 2, y + s / 2, s / 1.9);
      fill(255, 255, 255, 190);
      noStroke();
      rect(x + s / 5, y + s / 5, s / 1.6, s / 1.6);
    }

    // Menu title
    stroke(0, 0, 0);
    arcAlign(CENTER);
    arcSize(s / 23);
    arcText(title, x + s / 1.95, y + s / 8);
    line(x + s / 2 - title.length * 11, y + s / 5.5, x + s / 2 + title.length * 11, y + s / 5.5);

    // Menu text
    stroke(40);
    arcSize(s / 35);
    arcAlign(LEFT);
    arcText(txt + '', x + s / 13, y + s / 3);
    arcSize(s / 45);
    arcText('- Click to continue -', x + s / 3.8, y + s / 1.1);
  };
  var bossMenuGone = false;
  var voucherMenuGone = false;

  // Reset certain stats during a transition
  var currentBoss;
  var cutsceneReset = function cutsceneReset() {
    cFrames = 0;
    cRectY = [600, -70];
    ctOpacity = 0;
    ctOpacity2 = 255;
    cutsceneY = [0, 0, 0];
    cutsceneX = [0, 0];
    cutsceneS = 1;
    clipY = 0;
    cutsceneJumpVel = [-10, -10, -10];
    cutsceneIsJump = [false, false, false];
    cutsceneBckCol = [0, 0, 0];
    cutsceneIs = false;
  };
  var resetStats = function resetStats() {
    // Game over stats
    skullSize = 20000;
    skullTrans = 0;
    deathAnimationFrames = 0;
    shakeIntensity = 25;
    gameOverTextTransparency = 1;
    shakeX = 0;
    shakeY = 0;
    innerCircleSize = 1;

    // Q menu
    qMenuActive = false;
    qMenuX = -300;
    qMenuWidth = 300;
    titleFrames = 0;
    cutsceneReset();

    // Final Boss
    bossRemixStage = 0;
    finalBossPhase = 1;
    FinalPhase.reset();

    // Speedrun
    speedClock.resetTime();
    speedClock.resetTime();
    if (lvlUnlock > 16) {
      speedrun = true;
    }

    // Level stats
    levelEnd = false;
    checkpointReached = false;
    checkCircSize = 0;
    var lvl = levels[currentLevel];
    if (currentLevel === 15) {
      lvl = levels[currentLevel].levels[bossRemixStage];
    }
    loadLevel(currentLevel);
    p.reset(lvl.spawn.x, lvl.spawn.y);
    lvlEndScene = 1;

    // Camera transformations
    zoomScale = 1;
    zoomX = 0;
    zoomY = 0;
    zoomRot = 0;
    bossFight = false;
    bossIntro = false;
    bossIntroFrames = 0;
    bossFloatY = 0;
    if (scene === 'game' && (currentLevel === 3 || currentLevel === 7 || currentLevel === 11 || currentLevel === 15)) {
      lvl.arenaY = 0;
      //currentBoss.reset();
    }
    shopScroll = 0;
    targetScroll = 0;
  };
  //]

  // Loading setup [
  // Images for you to load
  var imgs = {
    hotStuffIcon: {
      // the width & height of the image
      w: 600,
      h: 600,
      mImg: function mImg() {
        imageMode(CORNER);
        hotStuff(0, 0, 50);
      }
    },
    welcomeIcon: {
      // the width & height of the image
      w: width,
      h: height,
      mImg: function mImg() {
        imageMode(CORNER);
        drawDKLogo(300, 300, 400);
      }
    },
    welcomeBackIcon: {
      w: width,
      h: height,
      mImg: function mImg() {
        pushMatrix();
        imageMode(CORNER);
        translate(300, 300);
        scale(-1, 1);
        drawDKLogo(0, 0, 400);
        popMatrix();
      }
    },
    greenStuffIcon: {
      // the width & height of the image
      w: width,
      h: height,
      mImg: function mImg() {
        imageMode(CORNER);
        poisonBucket(0, 0, 50);
      }
    },
    nonStopIcon: {
      w: width,
      h: height,
      mImg: function mImg() {
        background(255, 182, 143);
        fill(0, 0, 0);
        hamMan(300, 300, 600);
        fill(255);
        textFont(createFont("serif"), 35);
        textAlign(CENTER, CENTER);
        text("H A M I L T O N", 300, 365);
        textSize(12.5);
        fill(255, 253, 229);
        text("AN AMERICAN MUSICAL", 300, 420);
        textFont(createFont("default because this is obviously not a font"));
      }
    },
    electricGuyIcon: {
      w: width,
      h: height,
      mImg: function mImg() {
        drawIdleZapp(-200, 100, 800);
      }
    },
    stopLightIcon: {
      w: width / 2,
      h: height / 2,
      mImg: function mImg() {
        drawStopLight(150, 150, 300);
      }
    },
    boingIcon: {
      w: width,
      h: height,
      mImg: function mImg() {
        drawIdleBoing(300, 100, 300);
      }
    },
    dedBoingIcon: {
      w: width,
      h: height,
      mImg: function mImg() {
        drawIdleBoing(300, 500, 300);
      }
    },
    thornIcon: {
      w: width,
      h: height,
      mImg: function mImg() {
        drawIdleThorn(300, 400, 600);
      }
    },
    spikeIcon: {
      w: width,
      h: height,
      mImg: function mImg() {
        drawIdleSpike(300, 600, 400);
      }
    },
    gapIcon: {
      w: width,
      h: height,
      mImg: function mImg() {
        drawIdleGap(300, 400, 400);
      }
    },
    crownIcon: {
      w: width,
      h: height,
      mImg: function mImg() {
        background(255);
        drawIdleCrown(300, 400, 400);
      }
    },
    pxlPerfectIcon: {
      w: width,
      h: height,
      mImg: function mImg() {
        pxlPerfect(300, 300, 75);
      }
    },
    larry: {
      w: width,
      h: height,
      mImg: function mImg() {
        background(0, 0);
        randomSeed(1);

        //imageMode(CENTER);

        draw2dLarry(300, 300, 10);
      }
    },
    grassImage: {
      w: width,
      h: height,
      mImg: function mImg() {
        background(0, 0);
        randomSeed(1);
        grassSkin(300, 300, 120);
      }
    },
    pixelSkinStraight: {
      w: width,
      h: height,
      mImg: function mImg() {
        background(0, 0);
        randomSeed(1);
        pixelSkin(300, 300, 75, 1);
      }
    },
    pixelSkinRight: {
      w: width,
      h: height,
      mImg: function mImg() {
        background(0, 0);
        randomSeed(1);
        pixelSkin(300, 300, 75, 2);
      }
    },
    xPortalDark: {
      w: width * (2 / 3),
      h: height * (2 / 3),
      mImg: function mImg() {
        background(0, 0);
        randomSeed(1);

        //imageMode(CENTER);

        areaXPortal(200, 200, 170, 0, "dark");
      }
    },
    pixelSkinLeft: {
      w: width,
      h: height,
      mImg: function mImg() {
        background(0, 0);
        randomSeed(1);
        pixelSkin(300, 300, 75, 3);
      }
    },
    skull: {
      w: width * (2 / 3),
      h: height * (2 / 3),
      mImg: function mImg() {
        pushMatrix();
        fill(255, 255, 255);
        noStroke();
        drawSkull(200, 200, 300);
        fill(0);
        drawEye(210, 190, 300);
        popMatrix();
      }
    },
    skulls: {
      w: width * (2 / 3),
      h: height * (2 / 3),
      mImg: function mImg() {
        randomSeed(1);
        imageMode(CENTER);
        for (var i = 0; i < 10; i++) {
          var x = 200 + random(-120, 120);
          var y = 200 + random(-120, 120);
          var s = random(120, 220);
          var r = random(-180, 180);
          pushMatrix();
          translate(x, y);
          rotate(r);
          var c = random(220, 255);

          // KA-safe tint (8 args style safe fallback)
          tint(c, c, c, 255);
          image(imgs.skull, 0, 0, s, s);
          popMatrix();
        }
        noTint();
      }
    },
    tonsOfSkulls: {
      w: width * (2 / 3),
      h: height * (2 / 3),
      mImg: function mImg() {
        randomSeed(2);
        imageMode(CENTER);
        for (var i = 0; i < 35; i++) {
          var x = 200 + random(-180, 180);
          var y = 200 + random(-180, 180);
          var s = random(60, 200);
          var r = random(-180, 180);
          pushMatrix();
          translate(x, y);
          rotate(r);
          var c = random(220, 255);

          // KA-safe tint (8 args style safe fallback)
          tint(c, c, c, 255);
          image(imgs.skull, 0, 0, s, s);
          popMatrix();
        }
        noTint();
      }
    }
  };
  var skinsLoaded = false;

  // Delay before loading each image. Generally 0 is fine, but if you have large images that take longer to load they could jump, so you can increase this to make it appear less jumpy.
  var loadDelay = 0;

  // Varibles needed for the loading
  // change loading to true to redraw textures
  var loading = true;
  var loadTimer = loadDelay / 4,
    curLoad = 0,
    growAmount = 1,
    cx = 600 / 2,
    cy = 600 / 2,
    fadeOutAmount = 250,
    lastLoadedImage = null,
    percentEase = 0,
    transitionProgress = 0,
    transitioning = false,
    doneWaiting = 0;

  // Easing functions for a smoother transition
  function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }
  function easeInSine(t) {
    return -1 * Math.cos(t * (Math.PI / 2)) + 1;
  }
  var load = function load() {
    pushMatrix();
    loadTimer++;
    // --- Loading Phase ---
    if (!transitioning) {
      if (loadTimer >= loadDelay && curLoad < Object.keys(imgs).length) {
        loadTimer = 0;
        background(255, 0);
        var imgKey = Object.keys(imgs)[curLoad];
        var img = imgs[imgKey];
        img.mImg();
        imgs[imgKey] = get(0, 0, img.w, img.h);
        lastLoadedImage = imgs[imgKey];
        background(0, 0, 0, 0);
        curLoad++;
      }
    }
    // --- Transition to Next Scene ---
    if (curLoad === Object.keys(imgs).length && percentEase > 0.99 && !transitioning) {
      percentEase = 1;
      transitioning = true; // Start the transition
    }
    if (transitioning) {
      doneWaiting++;
      if (doneWaiting > 30) {
        // Increment transition progress from 0 to 1
        transitionProgress += 0.02; // Adjust speed here
        transitionProgress = constrain(transitionProgress, 0, 1);
        // Animate the zoom
        var zoomAmount = lerp(1, 20, easeInOutQuart(transitionProgress));
        translate(cx * (1 - zoomAmount), cy * (1 - zoomAmount));
        scale(zoomAmount);
        // End the transition and signal done loading
        if (transitionProgress >= 1) {
          transitioning = false;
        }
      }
    }
    // --- Display Loading UI ---
    var totalImages = Object.keys(imgs).length;
    var progress = curLoad / totalImages;
    percentEase += (progress - percentEase) * 0.1;
    background(10, 15, 25);
    var r = 600 / 4;
    noFill();
    strokeWeight(15);
    stroke(0, 150, 255, 40);
    ellipse(cx, cy, r * 2.1, r * 2.1);
    if (transitioning) {
      stroke(0, 214, 43);
    } else {
      stroke(255, 50, 50);
    }
    arc(cx, cy, r * 2, r * 2, -90, -90 + 360 * percentEase);
    stroke(255, 255, 255, 30);
    ellipse(cx, cy, r * 1.8, r * 1.8);
    noStroke();
    arcSize(width / 20);
    arcDashAlign = CENTER;
    if (transitioning) {
      stroke(97, 255, 129);
      arcText(Math.floor(percentEase * 100) + '%', cx + 10, cy);
    } else {
      stroke(255, 255, 255);
      arcText(Math.floor(percentEase * 100) + '%', cx, cy);
    }
    stroke(0, 200, 255, 255);
    arcSize(15);
    arcText("Loading...", cx, cy + r * 0.8);
    if (lastLoadedImage) {
      imageMode(CENTER);
      image(lastLoadedImage, cx, cy + 250, 50, 50);
      stroke(200);
      arcSize(12);
      var k = Object.keys(imgs)[max(curLoad - 1, 0)];
      arcText("Loading:" + k, cx, cy + r * 1.2 + 12);
    }
    var fadeAmount = easeInSine(transitionProgress * 2) * 255;
    fill(0, fadeAmount);
    rect(0, 0, width, height);
    popMatrix();
    if (transitionProgress > 0.5) {
      loading = false;
    }
  };

  // ]

  // More savecode stuff [
  initAchievements();
  groupBadges();

  // Engine Loader Interface (Safely loads your unified layout)
  var loadedData = Save.load(saveCode);
  if (loadedData !== null) {
    applyLoadedDataToGlobals(loadedData);
  }
  var goalsReady = false;

  // Finally, load the save code so we can use it
  loadSaveString(saveCode);
  //]

  // Draw loop
  draw = function draw() {
    updateScaling();
    if (loading) {
      pushMatrix();
      scale(gameScale);
      load();
      popMatrix();
    } else {
      if (!skinsLoaded) {
        initSkinCache();
        skinsLoaded = true;
      }
      pushMatrix();
      scale(gameScale);
      // Reset the cursor every frame (will be turned to pointer if on a button later)
      cursor(ARROW);
      if (!goalsReady) {
        initAchievements();
        groupBadges();
        goalsReady = true;
      }
      if (logoIs) {
        noStroke();
        pushMatrix();
        translate(0, slideOut);
        if (frameCount > 50) {
          logoFrames++;
        }
        if (frameCount % 20 === 0) {
          logoDots += ".";
        }
        if (logoDots === "....") {
          logoDots = "";
        }
        logoBackground();
        if (barrelYac > 0 && logoFrames >= 1) {
          barrelY += barrelYac;
          barrelYac *= 0.9;
          barrelSize -= barrelYac / 70;
          barrelX += barrelYac / 35;
        }
        drawBarrel(barrelX, barrelY, barrelSize);
        fill(255, 255, 255);
        textSize(40);
        drawText("&", 276, andTextY, 7);
        logoTxt(presentsTextX, 100, 7);
        if (logoFrames > 20) {
          andTextY += andTextYac;
          andTextYac *= 0.9;
          kinetoTextX += kinetoTextXac;
          kinetoTextXac *= 0.9;
          digitsofpiTextX -= digitsofpiTextXac;
          digitsofpiTextXac *= 0.9;
        }
        if (logoFrames > 40) {
          presentsTextX += presentsTextXac;
          presentsTextXac *= 0.9;
        }
        fill(0, 200, 255);
        textSize(45);
        drawText("KINETO", kinetoTextX, 172, 6);
        fill(255, 0, 0);
        textSize(45);
        drawText("DIGITSOFPI", digitsofpiTextX, 42, 6);
        if (logoFrames > 140 && slideOut < 300) {
          slideOut -= slideOutac;
          slideOutac *= 1.1;
        }
        if (slideOut < -1000) {
          logoIs = false;
        }
        popMatrix();
        noStroke();
        fill(0, 0, 0, fadeOutAmount);
        fadeOutAmount -= 10;
        rect(0, 0, width, height);
      } else {
        // begining of game code

        // PARKOUR MASTER ANIMATIONS [

        // Hand Animation
        handAnimationY += handAnimationVel;
        if (handAnimationY >= 5) {
          handAnimationVel = -0.1;
        }
        if (handAnimationY <= -5) {
          handAnimationVel = 0.1;
        }

        // Blink Animation
        pmBlinkTimer++;
        if (pmBlinkTimer >= pmBlinkInterval) {
          pmBlinkY += pmBlinkVel;
        }
        if (pmBlinkY >= 20) {
          pmBlinkVel = -1.5;
        }
        if (pmBlinkTimer > pmBlinkInterval + 1 && pmBlinkY <= 0) {
          pmBlinkTimer = 0;
          pmBlinkY = 0;
          pmBlinkVel = 1.5;
          pmBlinkInterval = random(240, 420);
        }

        //]

        switch (scene) {
          case "title":
            //[

            worldBackground(frameCount / 4, frameCount / 4, 1);

            // parkMast(20, 50, 100);

            gearButton(60, 500, 140, 'Settings');
            sceneButton(175, 487.5, 'Goals', 85);
            sceneButton(300, 475, 'Play', 105);
            sceneButton(425, 487.5, 'Shop', 85);
            sceneButton(540, 500, 'Runs', 85);
            titleFrames++;
            dashLogo(100, 35, 250, titleFrames);
            var titlePlayer = new Player(0, 0, currentSkin);
            titlePlayer.mouth = "open";
            titlePlayer.vx = 8;
            pushMatrix();
            translate(300 + cos(frameCount * 1.7) * 20, 330);
            rotate(-15);
            scale(3.4);
            titlePlayer.draw();
            popMatrix();
            fill(170, 0, 0);
            pxlText('DIGITSOFPI', 130, 570, 2);
            fill(0);
            pxlText('AND', 306, 570, 2);
            fill(0, 0, 170);
            pxlText('KINETO', 370, 570, 2);
            //]
            break;
          case "Goals":
            //[
            startY = lerp(startY, targetY, 0.2);
            background(0);
            // Draw all badges and classes
            drawBadgesAndClasses(badgeClassOrder, 100, startY, badgeSpacing, badgeWidth);
            textAlign(CENTER);
            textSize(16);
            fill(0, 0, 0, 200);
            noStroke();
            rect(-1, -1, 602, 190);

            // The logo
            fill(255, 255, 0);
            achievementsLogo(490, 70, 100);

            // Display the title
            stroke(184, 184, 184);
            arcSize(18);
            arcText("Achievements", width / 2, 40);

            // Draw selected badge details if any
            drawBadgeDetails(100, 100, 18);
            backButton(40, 40, 50);
            //]
            break;
          case "settings":
            //[
            arcAlign(LEFT);
            darkModeRatio = lerp(darkModeRatio, settings.darkMode ? 1 : 0, 0.1);
            currentX = lerp(currentX, transitionX, 0.15);
            background(getC("bg"));
            textAlign(LEFT, CENTER);

            // menu
            if (currentX > -590) {
              var i = 0;
              for (var cat in config) {
                var y = 165 + i * 90;
                var isHover = worldMouseX > 30 + currentX && worldMouseX < 570 + currentX && worldMouseY > y && worldMouseY < y + 75;
                hovers[cat] = lerp(hovers[cat] || 0, isHover ? 1 : 0, 0.2);
                fill(lerpColor(getC("card"), getC("hover"), hovers[cat]));
                noStroke();
                rect(60 + currentX, y, 510, 75, 12);
                stroke(getC("text"));
                arcSize(15);
                arcText(cat, 105 + currentX, y + 38.5);

                // Arrow slide
                var arrowBase = 519; // starting point
                var arrowTarget = 525; // ending point

                var arrowX = lerp(arrowBase, arrowTarget, hovers[cat] || 0);
                fill(getC("text"));
                textSize(35);
                text(">", arrowX + currentX, y + 37.5);
                i++;

                // Signal which category is being hovered over

                if (isHover && cat === "General") {
                  wrenchSelected = true;
                } else if (cat === "General") {
                  wrenchSelected = false;
                }
                if (isHover && cat === "Game") {
                  wasdSelected = true;
                } else if (cat === "Game") {
                  wasdSelected = false;
                }
                if (isHover && cat === "Display") {
                  tvSelected = true;
                } else if (cat === "Display") {
                  tvSelected = false;
                }
                if (isHover && cat === "Audio") {
                  musNoteSelected = true;
                } else if (cat === "Audio") {
                  musNoteSelected = false;
                }
              }

              // Draw the wrench
              wrench(currentX + 45, 206, 52, wrenchRot);

              // Draw the WASD keys
              pushMatrix();
              translate(currentX + 33, 270);
              rotate(-10);
              wasdKeys(0, 0, 52, wasdSpacing / 1.3);
              popMatrix();

              // Draw the TV Monitor
              pushMatrix();
              translate(currentX + 43, 380);
              rotate(352);
              tvMonitor(0, 0, 62 + tvSize);
              popMatrix();

              // Draw the music notes
              largeMusicNote(currentX + 35, 470 + musNoteOscilate / 1.5, 35, -10);
              smallMusicNote(currentX + 70, 470 - musNoteOscilate / 1.5, 30, 10);

              // gear stuff
              gearRot += PI / 3;
              var gearBob = sin(frameCount * 1) * 800;
              gearGraphic(300 + currentX + gearBob / 4, 80, 200);
              fill(getC("bg"), 180);
              noStroke();
              rect(0, 0, 600, 150);

              // title shadow
              stroke(getC("text"), 40);
              arcSize(35);
              arcText("Settings", 95 + currentX, 90);

              // main title
              fill(getC("text"));
              stroke(getC("text"));
              arcSize(35);
              arcText("Settings", 90 + currentX, 85);
              backButton(40 + currentX, 40, 50);
            }

            // subpage (not subpage)
            var activeSub = currentPage === "Menu" ? lastPage : currentPage;
            if (activeSub !== "") {
              var subX = currentX + 600;

              // Back Button
              var backHover = worldMouseX > 20 + subX && worldMouseX < 140 + subX && worldMouseY < 50;

              // smooth ratio
              backHoverRatio = lerp(backHoverRatio, backHover ? 1 : 0, 0.2);

              // brighens on hover
              var hotAccent = lerpColor(getC("accent"), color(255), 0.25);
              fill(lerpColor(getC("accent"), hotAccent, backHoverRatio));
              textSize(23);

              // split arrow and text so arrow can slide
              var arrowStart = 28;
              var arrowEnd = 23;
              var arrowPos = lerp(arrowStart, arrowEnd, backHoverRatio);

              // draw pieces
              textAlign(CENTER, CENTER);
              text("<", arrowPos + subX, 38);
              //Back text is in the Dash Font
              arcSize(11);
              stroke(lerpColor(getC("accent"), hotAccent, backHoverRatio));
              arcText("Back", -arrowPos / 3 + 58 + subX, 38);

              // title
              stroke(getC("text"));
              arcSize(22);
              arcText(activeSub, 38 + subX, 90);

              // Show Icons in their respective categories
              if (activeSub === "General") {
                wrench(subX + 490, 530, 90, sin(frameCount) * 40);
              } // wrench
              if (activeSub === "Game") {
                pushMatrix();
                translate(subX + 470, 480);
                rotate(10);
                wasdKeys(0, 0, 95, sin(frameCount * 2) * 7 + 10);
                popMatrix();
              } // wasd
              if (activeSub === "Display") {
                pushMatrix();
                translate(subX + 480, 520);
                rotate(5);
                tvMonitor(0, 0, 130 + sin(frameCount * 2) * 15);
                popMatrix();
              } // monitor
              if (activeSub === "Audio") {
                largeMusicNote(subX + 440, 525 + sin(frameCount * 1.5) * 10, 65, 10);
                smallMusicNote(subX + 500, 530 - sin(frameCount * 1.5) * 10, 60, 10);
              } // monitor

              var cardW = 340;
              var cardX = 30 + subX;
              var items = config[activeSub];
              for (var j = 0; j < items.length; j++) {
                var yS = 130 + j * 72;
                var cardHover = worldMouseX > cardX && worldMouseX < cardX + cardW && worldMouseY > yS && worldMouseY < yS + 60;
                var swX = cardX + cardW - 90;
                var swY = yS + 7;
                var switchHover = worldMouseX > swX && worldMouseX < swX + items[j].sw.w && worldMouseY > swY && worldMouseY < swY + items[j].sw.h;
                if (cardHover || switchHover) {
                  hoverDescKey = items[j].key;
                  descText = items[j].desc || "No description.";
                  descFadeTarget = 1;
                }
                hovers[items[j].key] = lerp(hovers[items[j].key] || 0, cardHover || switchHover ? 1 : 0, 0.15);
                fill(lerpColor(getC("card"), getC("hover"), hovers[items[j].key]));
                noStroke();
                rect(cardX, yS, cardW, 60, 12);
                stroke(getC("text"));
                arcSize(11);
                arcText(items[j].label, cardX + 22, yS + 30);
                items[j].sw.draw(swX, swY);
              }

              // typing logic
              descFade = lerp(descFade, descFadeTarget, 0.12);
              if (descFade > 0.02 && hoverDescKey !== "") {
                if (descCharPos < descText.length) {
                  descCharPos += descSpeed;
                  if (descCharPos > descText.length) {
                    descCharPos = descText.length;
                  }
                }
              } else {
                descCharPos = 0;
              }

              // Description pannel
              if (descFade > 0.01) {
                var boxX = cardX + cardW + 10;
                var boxY = 120;
                var boxW = 200;
                var boxH = 340;
                fill(lerpColor(getC("card"), getC("hover"), 0.1));
                rect(boxX, boxY, boxW, boxH, 10);
                stroke(getC("text"));
                arcSize(8);
                arcAlign(LEFT);
                var toShow = descText.substring(0, floor(descCharPos));

                // caret as part of string
                var caret = round(frameCount) % 60 < 30 ? "|" : "";

                //text(toShow + caret, boxX+10, boxY+10, boxW-20, boxH-20);
                arcText(toShow + caret, boxX + 11, boxY + 17, boxW);
                textAlign(LEFT, CENTER);
              }
            }
            stroke(150, 0, 0);
            strokeWeight(35);
            noFill();
            rect(-10, -10, 620, 620, 50);
            if (currentPage === "Menu" && currentX > -1) {
              lastPage = "";
            }
            resetTypingOnChange();

            // Wrench Animation
            if (wrenchSelected) {
              wrenchFrames++;
              wrenchRot = sin(wrenchFrames * 1.5) * 20 - 10;
            } else {
              wrenchRot = lerp(wrenchRot, -10, 0.15);
              wrenchFrames = 0;
            }
            if (wrenchFrames > 240) {
              wrenchFrames = 0;
            } // reset so frame calculations don't get too long

            // WASD Animation
            if (wasdSelected) {
              wasdFrames++;
              wasdSpacing = sin(wasdFrames * 2) * 3 + 5;
              wasdShadeFrames++;
            } else {
              wasdSpacing = lerp(wasdSpacing, 0, 0.15);
              wasdFrames = -35;
              wasdShadeFrames = 0;
              wasdKeyShade = 0;
            }
            if (round(wasdShadeFrames) % 45 === 0 && wasdSelected) {
              wasdKeyShade = round(random(0.5, 4.4));
            }

            // TV Monitor Animation
            if (tvSelected) {
              tvFrames++;
              tvSize = sin(tvFrames * 2.5) * 10;
            } else {
              tvSize = lerp(tvSize, 0, 0.15);
              tvFrames = 0;
            }

            // Music Notes Animation
            if (musNoteSelected) {
              musNoteFrames++;
              musNoteOscilate = sin(musNoteFrames) * 15;
            } else {
              musNoteOscilate = lerp(musNoteOscilate, 0, 0.15);
              musNoteFrames = 0;
            }
            //]
            break;
          case "Shop":
            // [

            activeSprite = imgs.pixelSkinStraight;
            shopBackground();
            if (keys[DOWN]) {
              targetScroll = constrain(targetScroll + 6, 0, 1000);
            }
            if (keys[UP]) {
              targetScroll = constrain(targetScroll - 6, 0, 1000);
            }
            shopScroll = lerp(shopScroll, targetScroll, 0.15);
            imageMode(CORNER);
            you(335, displayY(260), 100, currentSkin);
            arcAlign(LEFT);
            arcSize(17);
            stroke(0);
            arcText(skins[currentSkin].name, 405, displayY(240));

            // Sections Logic
            var sections = [{
              name: "One",
              col: color(0, 0, 255),
              areaId: "1",
              unlocked: area1Unlocked,
              show: true
            }, {
              name: "Two",
              col: color(0, 150, 0),
              areaId: "2",
              unlocked: area2Unlocked,
              show: true
            }, {
              name: "Three",
              col: color(255, 100, 0),
              areaId: "3",
              unlocked: area3Unlocked,
              show: true
            }, {
              name: "X",
              col: color(120, 0, 0),
              areaId: "X",
              unlocked: true,
              show: areaXUnlocked
            }, {
              name: "Special",
              col: color(150, 0, 200),
              areaId: "S",
              unlocked: true,
              show: allRunsComplete
            }];
            var currentY = 160;

            // Default Skin row
            arcSize(18);
            stroke(0);
            arcText("Default Skin", 10, displayY(currentY));

            // Use the cached image for default skin item
            imageMode(CENTER);
            image(skinCache[0], 55, displayY(currentY + 60));
            equipButton(15, displayY(currentY + 100), 80, 0, 39);
            currentY += 200;
            for (var s = 0; s < sections.length; s++) {
              var sec = sections[s];
              if (!sec.show) {
                continue;
              }
              if (sec.unlocked) {
                stroke(0);
                arcSize(18);
                arcAlign(LEFT);
                if (sec.name !== 'Special') {
                  arcText("Area", 10, displayY(currentY - 20));
                  stroke(sec.col);
                  arcText(sec.name, 115, displayY(currentY - 20));
                } else {
                  stroke(sec.col);
                  arcText(sec.name, 10, displayY(currentY));
                }
                var count = 0;
                for (var j = 0; j < skins.length; j++) {
                  if (skins[j].area === sec.areaId && skins[j].id !== 0) {
                    var x = 15 + count * 120;
                    var y = currentY + 50;

                    // --- THE OPTIMIZATION BLOWOUT ---
                    // Instead of calling you(), draw the pre-baked GPU texture cache 
                    imageMode(CENTER);
                    image(skinCache[skins[j].id], x + 40, displayY(y) + 20);
                    if (skins[j].owned) {
                      equipButton(x, displayY(y + 60), 80, skins[j].id, j);
                    } else {
                      buyButton(x, displayY(y + 60), 80, skins[j], j);
                    }
                    count++;
                  }
                }
              } else {
                lock(300, displayY(currentY + 90), 120);
                stroke(0);
                arcSize(18);
                arcAlign(CENTER);
                arcText("Unlock at Area", 300, displayY(currentY) - 50);
                stroke(sec.col);
                arcText(sec.name, 300, displayY(currentY));
              }
              currentY += 250;
            }

            // Header (Keep on top layer)
            fill(255);
            stroke(0);
            strokeWeight(7);
            rect(-10, -10, 620, 120);
            stroke(0);
            arcAlign(LEFT);
            arcSize(32);
            arcText("SHOP", 85, 60);
            fill(255, 0, 0);
            noStroke();
            rect(-10, 90, 290, 12, 10);
            stroke(0);
            arcSize(20);
            arcText("x" + vouchers, 480, 60);
            lvlVoucher(420, 45, 100);
            backButton(40, 40, 50);

            //]
            break;
          case "Play":
            //[

            if (lvlUnlock === 2 && !voucherMenuGone) {
              dropDownGoToY = dropDownVisibleY;
            }
            if (worldSubScreen === 0) {
              if (areaSelected[0] || areaSelected[1] || areaSelected[2] || areaSelected[3]) {
                aSelectX = lerp(aSelectX, aSelectXGoal, 0.2);
              } else {
                aSelectX = lerp(aSelectX, 610, 0.2);
              }
              background(255);
              for (var i = 0; i < areaSelected.length; i++) {
                if (areaSelected[i] === true) {
                  areaSelect = i;
                  worldBackground(-frameCount / 3, 0, areaSelect + 1);
                  strokeWeight(4);
                  stroke(0);
                  fill(255);
                  triangle(aSelectX + 40, 490, aSelectX + 80, 490, arrowToGo[0], arrowToGo[1]);
                }
              }

              // Draw random floating platforms
              for (var i = 0; i < mapPlatforms.length; i++) {
                var pl = mapPlatforms[i];

                // Different colors/styles
                if (pl.type === 0) {
                  fill(150);
                } else if (pl.type === 1) {
                  fill(170);
                } else {
                  fill(190);
                }
                stroke(0);
                strokeWeight(3);

                // Floating animation
                var floatY = sin(frameCount * 1.5 + i * 25) * 3;
                rect(pl.x, pl.y + floatY, pl.w, pl.h, 10);
              }
              noStroke();
              fill(255, 255, 255, 160);
              rect(0, 0, 600, 600);
              fill(240, 240, 240, 200);
              stroke(150, 0, 0);
              strokeWeight(10);
              rect(415, -20, 210, 172, 20);
              arcSize(23);
              stroke(0);
              arcText('WORLD', 435, 50);
              arcSize(26);
              stroke(0, 100, 220);
              arcText('MAP', 477, 115);
              areaSelectButton(290, 125, 180, 1);
              areaSelectButton(480, 360, 180, 2);
              areaSelectButton(120, 475, 180, 3);
              if (lvlUnlock > 12) {
                areaSelectButton(275, 340, 180, 4);
              }

              // Dot pathways
              strokeWeight(10);
              for (var d = 0; d < 7; d++) {
                stroke(0, 160, 130);
                point(365 + d * 15 + sin((frameCount - d * 10) * 2) * 5, 160 + d * 24);
              }
              for (var d = 0; d < 8; d++) {
                stroke(190, 140, 0);
                point(400 - d * 25, 440 + d * 10 + sin((frameCount - d * 10) * 2) * 5);
              }
              for (var d = 0; d < 11; d++) {
                stroke(100, 0, 140);
                point(90 + d * 12 + sin((frameCount - d * 10) * 2) * 5, 420 - d * 28);
              }
              arcSize(20);
              arcAlign(CENTER);
              stroke(0, 100, 255);
              arcText('Area\nONE', 125, 140);
              stroke(0, 200, 50);
              arcText('Area\nTWO', 520, 230);
              stroke(200, 100, 0);
              arcText('Area\nTHREE', 100, 330);
              arcAlign(LEFT);
              if (lvlUnlock > 16) {
                sceneButton(530, 530, "Runs", 90 + sin(frameCount * 2) * 10);
              }
              stroke(0);
              strokeWeight(7);
              fill(255);
              rect(aSelectX, 490, 360, 130, 30);
              arcSize(20);
              arcText('TO GO', aSelectX + 180, 560);
              stroke(worlds[areaSelect].line);
              arcText('CLICK', aSelectX + 20, 560);
              fill(255, 255, 255, 100);
              stroke(200, 0, 0);
              rect(-50, -50, 310, 130, 30);
              backButton(50, 40, 60);
              if (lvlUnlock > 1) {
                stroke(0);
                arcSize(20);
                arcText('x' + vouchers, 200, 40);
                lvlVoucher(150, 30, 80);
              }
            } else {
              worldBackground(-frameCount / 3, 0, worldSubScreen);
              arcSize(26);
              arcAlign(LEFT);
              if (worldSubScreen === 4) {
                stroke(255);
              } else {
                stroke(0);
              }
              arcText('AREA', 20, 80);
              arcSize(28);
              if (worldSubScreen === 1) {
                stroke(0, 50, 150);
                arcText('ONE', 195, 77);
              }
              if (worldSubScreen === 2) {
                stroke(0, 100, 0);
                arcText('TWO', 195, 77);
              }
              if (worldSubScreen === 3) {
                stroke(230, 50, 0);
                arcText('THREE', 195, 77);
              }
              if (worldSubScreen === 4) {
                areaXlogo(230, 75, 100);
              }
              fill(200, 0, 0);
              stroke(0);
              strokeWeight(3);
              var lineW;
              if (worldSubScreen === 3) {
                lineW = 405;
              } else {
                lineW = 335;
              }
              rect(-10, 105, lineW, 12, 10);
              if (worldSubScreen === 1) {
                boss1Graphic(140 + sin(frameCount * 1.5) * 10, 350, 300);
              }
              if (worldSubScreen === 2) {
                boss2Graphic(150 + sin(frameCount * 1.5) * 10, 300, 250);
              }
              if (worldSubScreen === 3) {
                boss3Graphic(170 + sin(frameCount * 1.5) * 10, 350, 280);
              }
              if (worldSubScreen === 4) {
                areaXPortal(150 + random(-1, 1), 320 + random(-1, 1), 200, xPortalRot / 2, 'light');
              }

              // Initialize other platforms
              noStroke();
              fill(150, 150, 150);
              rect(250 + sin(frameCount * 1.2) * 40, 140, 120, 25, 8);
              rect(570 + sin(frameCount * 1.6 + 40) * 35, 260, 150, 35, 8);
              rect(360 + sin(frameCount * 2.0 + 140) * 35, 445, 120, 25, 8);
              rect(40 + sin(frameCount * 1.4 + 200) * 28, 550, 80, 40, 8);
              if (worldSubScreen === 4) {
                stroke(120);
              } else {
                stroke(0);
              }
              strokeWeight(10);
              line(470, 214, 470, 475);
              levelSelectButton(340, 190, 90, 1);
              levelSelectButton(340, 300, 90, 2);
              levelSelectButton(340, 410, 90, 3);
              levelSelectButton(270, 540, 120, 4);
              exitSelectButton(555, 45, 55);
              if (lvlUnlock > 1) {
                pushMatrix();
                translate(240, 10);
                stroke(0);
                if (worldSubScreen === 4) {
                  stroke(255);
                }
                arcSize(20);
                arcText('x' + vouchers, 200, 40);
                lvlVoucher(150, 30, 80);
                popMatrix();
              }
            }
            if (p.gameOver) {
              p.lives = 10;
              p.gameOver = false;
              p.health = 100;
            }

            //]
            break;
          case "Runs":
            //[

            if (keys[DOWN]) {
              targetScroll = constrain(targetScroll + 6, 0, 1000);
            }
            if (keys[UP]) {
              targetScroll = constrain(targetScroll - 6, 0, 1000);
            }
            shopScroll = lerp(shopScroll, targetScroll, 0.15);
            background(255, 255, 150);
            stroke(150, 0, 0);
            arcSize(35);
            arcText('RUNS', 150, 70);
            fill(255);
            strokeWeight(20);
            stroke(230, 70, 0);
            rect(400, 60 - shopScroll, 250, 600, 20);
            rect(-20, 150 - shopScroll, 640, 1600);
            noStroke();
            rect(410.4999, 140 - shopScroll, 600, 600);
            var clockDrawing = new Clock(0, 0, 100);
            pushMatrix();
            translate(500, 160 - shopScroll);
            rotate(8 + sin(frameCount) * 10);
            clockDrawing.draw();
            popMatrix();
            stroke(0);
            pushMatrix();
            translate(0, -shopScroll);
            for (var i = 0; i < 4; i++) {
              var s = i * 340;
              arcSize(20);
              stroke(0);
              arcAlign(LEFT);
              arcText('Area', 20, 240 + s);
              if (i === 0) {
                stroke(0, 100, 255);
                arcText('ONE', 140, 240 + s);
              } else if (i === 1) {
                stroke(0, 200, 0);
                arcText('TWO', 140, 240 + s);
              } else if (i === 2) {
                stroke(255, 100, 0);
                arcText('THREE', 140, 240 + s);
              } else {
                stroke(255, 0, 0);
                arcText('X', 140, 240 + s);
              }
              for (var q = 0; q < 4; q++) {
                var w = i + 1;
                if (i === 3) {
                  w = 'X';
                }
                if (i === 0) {
                  stroke(0, 100, 255);
                } else if (i === 1) {
                  stroke(0, 200, 0);
                } else if (i === 2) {
                  stroke(255, 100, 0);
                } else {
                  stroke(255, 0, 0);
                }
                var l = q + 1;
                arcSize(15);
                arcAlign(LEFT);
                arcText(w + '-' + l, 100, 300 + s + q * 50);
                stroke(0);
                var time = levelTimes[i * 4 + q];
                var timeTxt = framesToTime(time);
                if (time === undefined) {
                  timeTxt = '--:--.--';
                }
                arcText(timeTxt + '', 200, 300 + s + q * 50);
                arcAlign(CENTER);
              }
              if (i === 0) {
                stroke(0, 100, 255);
              } else if (i === 1) {
                stroke(0, 200, 0);
              } else if (i === 2) {
                stroke(255, 100, 0);
              } else {
                stroke(255, 0, 0);
              }
              var totalFrames = levelTimes[i * 4] + levelTimes[i * 4 + 1] + levelTimes[i * 4 + 2] + levelTimes[i * 4 + 3];
              var totalTimeTxt = framesToTime(totalFrames);
              if (!totalFrames) {
                totalTimeTxt = '--:--.--';
              }
              arcAlign(LEFT);
              arcText('TOTAL: ', 140, 510 + s);
              stroke(0);
              arcText(totalTimeTxt + '', 270, 510 + s);
            }
            popMatrix();
            backButton(50, 40, 60);
            sceneButton(540, 540, "Play", 80);

            //]
            break;
        }
        if (lvlUnlock > 4) {
          area2Unlocked = true;
        }
        if (lvlUnlock > 8) {
          area3Unlocked = true;
        }
        if (lvlUnlock > 12) {
          areaXUnlocked = true;
        }
        if (lvlUnlock > 16) {
          allAreasComplete = true;
        }
        syncSkinAndAchievementStates();
        if (scene === 'game' && !cutsceneIs) {
          if (finalBossPhase !== 3) {
            if (finalBossPhase === 4 && !finalChallengeInit) {
              currentLevel = 16;
              loadLevel(currentLevel);
              lvl = levels[currentLevel];
              p = new Player(lvl.spawn.x, lvl.spawn.y);
              world = 1;
              finalChallengeInit = true;
            }

            // Epic background
            worldBackground(frameCount / 10 - cam.x / 6, frameCount / 10, world);
            if (currentLevel === 15) {
              areaXPortal(150 + random(-0.5, 0.5) - p.vx / 5, 250 + random(-0.5, 0.5), 80, xPortalRot / 2, 'light');
            }
            if (currentLevel === 16) {
              areaXPortal(150 + random(-0.5, 0.5) - p.vx / 5, 200 + random(-0.5, 0.5), random(90, 100), xPortalRot, 'light');
            }

            // Final boss has multiple 'levels' so this makes it simpler
            var levelObjects;
            levelObjects = lvl.objects;

            // Which boss is it?
            var currentBoss = bosses[world - 1];
            if (lvlUnlock > 4) {
              bossMenuGone = true;
            }

            // Level Ending Animation
            if (levelEnd) {
              // Save the current time
              var currentRun = speedClock.getSeconds();

              // Only if there is another time there
              if (levelTimes[currentLevel] !== undefined) {
                // Save previous time
                var prevRun = levelTimes[currentLevel];
                // If this time is faster, save it as the new one
                if (currentRun < prevRun) {
                  levelTimes[currentLevel] = currentRun;
                }
              }
              // If there is no other time, automatically save it
              else {
                levelTimes[currentLevel] = currentRun;
              }

              // So we get a dash close-up
              zoomRot = lerp(zoomRot, -10, 0.1);
              if (lvlEndScene === 1) {
                zoomX = lerp(zoomX, -p.x + 100, 0.1);
                zoomY = lerp(zoomY, -p.y + 110, 0.1);
              }
              zoomScale = lerp(zoomScale, 3.5, 0.1);

              // Change player face to look at text
              p.faceY = -2;
              p.faceX = -2;
              p.mouth = 'open';

              // Animate text screen until frame 10
              if (lvlEndFrames < 10) {
                lvlEndFrames++;
              }
              if (lvlEndScene === 2) {
                p.vy = -3;
                p.faceY = -3;
                p.faceX = 0;
                p.mouth = 'closed';

                // Check this first cause otherwise portal doesn't exist and everything breaks
                if (!bossFight) {
                  if (p.y < lvl.portal.y - 200) {
                    // Increase level unlock by 1
                    if (currentLevel + 1 === lvlUnlock) {
                      lvlUnlock++;
                      vouchers += voucherRewards[currentLevel];
                    }
                    transitionActive = true;
                    sceneToTransition = 'Play';
                  }
                } else if (p.y < currentBoss.y - 120) {
                  // Increase level unlock by 1
                  if (currentLevel + 1 === lvlUnlock) {
                    lvlUnlock++;
                  }
                  transitionActive = true;
                  sceneToTransition = 'Play';
                }
              }
            }

            // echo setup
            if (currentLevel !== lastLoadedLevel && p.x > 450) {
              if (currentLevel === 14) {
                //MAKE ECH0 JUMP
                var jumpTriggers = [730, 1620, 2217, 2840, 3220, 3520, 4100, 4900, 5300, 5600, 6195, 7150, 7700, 8150, 8895, 9300, 9600, 10680, 11330, 11800, 12400, 13100,
                // Hop over hyperbelt spikes at 13200
                13950,
                // Clear lava pit at 14100
                14507,
                // Leap off edge of Platform 7 (Right edge is 14510)

                14980,
                // Hop over spikes at 15060

                15900, 16680,
                // Hop over spikes at 16760
                17055,
                // Leap off edge of Platform 10 (Right edge is 17060)

                17900,
                // Clear lava pit at 18000
                18430, 19220,
                // Hop over spikes at 19300
                19720,
                // Clear final lava pit at 19900
                20150];
                ECH0 = new FakeAI(-150, 200, jumpTriggers);
              } else {
                ECH0 = null;
              }
              lastLoadedLevel = currentLevel;
            }

            // Update player
            if (!transitionActive) {
              // Set animation based on grounded + input
              if (!p.grounded) {
                animationToggle = 3;
              } else {
                // on ground: walking or idle
                if (keys[LEFT] || keys[RIGHT] || keys[68] || keys[65]) {
                  if (frameCount % 5 === 0) {
                    animationToggle++;
                  }
                  if (animationToggle > 2 || animationToggle < 0) {
                    animationToggle = 0;
                  }
                } else {
                  animationToggle = 0; // idle
                }
              }
              p.update();
            }

            // Restart Level
            if (isPressed('r') && !p.dead) {
              resetCharTimer += 8;
              p.hurtFrames = 1;
            } else {
              resetCharTimer -= 16;
            }
            resetCharTimer = constrain(resetCharTimer, 0, 360);
            if (resetCharTimer >= 360) {
              p.health = 0;
              resetCharTimer = 0;
            }

            // Collide with objects
            if (!p.launching) {
              for (var i = 0; i < levelObjects.length; i++) {
                var o = levelObjects[i];
                if (o.type === 'spike') {
                  if (checkSpikeHit(p, o) && p.spikeCooldown <= 0) {
                    spawnParticles(p.x, p.y, 10, "spike", 2);
                    p.health -= 25;
                    p.hurtFrames = 25;
                    p.vy = p.bounceForce / 2;
                    p.isVariableJumping = false;
                    // invincible frames
                    p.spikeCooldown = 10;
                    unlockAchievement("Pointy");
                    continue;
                  }
                } else if (o.type === 'lava' || o.type === 'poison') {
                  var mtv = checkCollision(p, o);
                  if (mtv && p.health > 0) {
                    // only damage if BOTH the left AND right vertical sides of the player are inside the lava's horizontal bounds (i.e. the entire player width

                    var lavaLeft = o.x - o.w / 2;
                    var lavaRight = o.x + o.w / 2;
                    var pLeft = p.x - p.w / 2;
                    var pRight = p.x + p.w / 2;
                    var leftSideTouching = pLeft >= lavaLeft && pLeft <= lavaRight;
                    var rightSideTouching = pRight >= lavaLeft && pRight <= lavaRight;
                    if (leftSideTouching && rightSideTouching) {
                      if (o.type === 'lava') {
                        p.health -= 1.5;
                        unlockAchievement("Hot Stuff");
                        p.hurtFrames = 1;
                      } else {
                        p.health = 0;
                        unlockAchievement("Poisonous");
                      }
                      p.grounded = false;
                      spawnParticles(p.x, p.y + p.h / 2 - 8, 1, "lava", 2);
                    }
                  }
                } else if (o.type === 'trampoline') {
                  // Make sure these are defined
                  if (!o.springOffset) {
                    o.springOffset = 0;
                  }
                  if (!o.springVel) {
                    o.springVel = 0;
                  }
                  if (!o.impactTimer) {
                    o.impactTimer = 0;
                  }
                  if (o.impactTimer > 0) {
                    o.impactTimer--;
                  }
                  var stiffness = 0.9;
                  var damping = 0.74;
                  var force = -o.springOffset * stiffness;
                  o.springVel += force;
                  o.springVel *= damping;
                  o.springOffset += o.springVel;
                  if (abs(o.springOffset) < 0.7 && abs(o.springVel) < 0.5) {
                    o.springOffset = 0;
                    o.springVel = 0;
                    o.impactTimer = 0;
                  }
                  var mtv = checkCollision(p, o);
                  if (mtv) {
                    p.x += mtv.x;
                    p.y += mtv.y;
                    if (mtv.y < 0 && abs(mtv.y) >= abs(mtv.x)) {
                      p.vy = p.bounceForce;
                      p.grounded = false;
                      p.isVariableJumping = false;
                      if (!o.springOffset) {
                        o.springOffset = 0;
                      }
                      if (!o.springVel) {
                        o.springVel = 0;
                      }
                      if (!o.impactTimer) {
                        o.impactTimer = 0;
                      }
                      o.springOffset -= 10;
                      o.springVel -= 5.5;
                      o.impactTimer = 3;
                      spawnParticles(p.x, p.y + p.h / 2 - 8, 8, "dust", 2.5);
                    } else if (abs(mtv.x) > abs(mtv.y)) {
                      p.vx = 0;
                    }
                  }
                } else if (o.type === 'checkpoint') {
                  var mtv = checkCollision(p, o);
                  if (mtv) {
                    if (!checkpointReached) {
                      p.health = 100;
                      checkpointReached = true;
                      lastCheckpoint = {
                        x: o.x,
                        y: o.y + o.h / 2
                      };
                    }
                  }
                  if (checkpointReached) {
                    checkCircSize += 30;
                  }
                } else if (o.type === 'launcher') {
                  var mtv = checkCollision(p, o);
                  if (mtv) {
                    p.x += mtv.x;
                    p.y += mtv.y; // Player does not go inside

                    if (mtv.y < 0 && abs(mtv.y) >= abs(mtv.x)) {
                      if (!p.grounded && p.prevVy > 2) {
                        var impact = constrain(p.prevVy * 3, 0, 50);
                        p.targetW = p.w + impact;
                        p.targetH = p.h - impact;
                      }
                      if (!p.prevGrounded && p.prevVy > 2) {
                        spawnParticles(p.x, p.y + p.h / 2, p.prevVy / 2, "dust", 2.8);
                      }
                      p.grounded = true;
                      p.vy = 0;
                      p.isVariableJumping = false;
                      p.x = lerp(p.x, o.x, 0.1);
                      p.vx = 0;
                      var buffer = 4;
                      if (round(p.x) - buffer <= o.x && round(p.x) + buffer >= o.x) {
                        p.launching = true;
                        p.launchTargetX = o.targetX;
                        p.launchTargetY = o.targetY;
                        spawnParticles(o.x, o.y, 100, 'launch', 30);
                      }
                    } else if (mtv.y > 0 && p.vy < 0) {
                      var impact = constrain(abs(p.vy) * 3, 0, 40);
                      p.targetW = p.w + impact;
                      p.targetH = p.h - impact;
                      p.vy = 0;
                      p.isVariableJumping = false;
                    }
                    if (abs(mtv.x) > abs(mtv.y)) {
                      p.vx = 0;
                    }
                  }
                } else if (o.type === 'conveyorbelt' || o.type === 'hyperbelt') {
                  // Is player on/in the block?
                  var mtv = checkCollision(p, o);
                  if (mtv) {
                    p.x += mtv.x;
                    p.y += mtv.y; // Player does not go inside

                    if (mtv.y < 0 && abs(mtv.y) >= abs(mtv.x)) {
                      if (!p.grounded && p.prevVy > 2) {
                        var impact = constrain(p.prevVy * 3, 0, 50);
                        p.targetW = p.w + impact;
                        p.targetH = p.h - impact;
                      }

                      // Set outputs for the obstacle
                      p.grounded = true;
                      p.vy = 0;
                      p.isVariableJumping = false;

                      // Caclulate the vector for rotated belts
                      var dirX = cos(o.r) * o.d;
                      var dirY = sin(o.r) * o.d;

                      // Move player based on the vector
                      if (o.type === 'conveyorbelt') {
                        // Change player X and Y
                        p.x += dirX * 4;
                      }
                      if (o.type === 'hyperbelt') {
                        // Change player X and Y
                        p.x += dirX * 8;
                        p.vy = dirY * 4;
                      }
                    } else if (mtv.y > 0 && p.vy < 0) {
                      var impact = constrain(abs(p.vy) * 3, 0, 40);
                      p.targetW = p.w + impact;
                      p.targetH = p.h - impact;
                      p.vy = 0;
                      p.isVariableJumping = false;
                    }
                    // Landing

                    if (abs(mtv.x) > abs(mtv.y)) {
                      p.vx = 0;
                    }
                  }
                } else if (o.type !== 'arrowSign') {
                  // normal blocks
                  var mtv = checkCollision(p, o);
                  if (mtv) {
                    p.x += mtv.x;
                    p.y += mtv.y;
                    if (mtv.y < 0 && abs(mtv.y) >= abs(mtv.x)) {
                      if (!p.grounded && p.prevVy > 2) {
                        var impact = constrain(p.prevVy * 3, 0, 50);
                        p.targetW = p.w + impact;
                        p.targetH = p.h - impact;
                      }
                      if (!p.prevGrounded && p.prevVy > 2) {
                        spawnParticles(p.x, p.y + p.h / 2, p.prevVy / 2, "dust", 2.8);
                      }
                      p.grounded = true;
                      p.vy = 0;
                      p.isVariableJumping = false;
                    } else if (mtv.y > 0 && p.vy < 0) {
                      var impact = constrain(abs(p.vy) * 3, 0, 40);
                      p.targetW = p.w + impact;
                      p.targetH = p.h - impact;
                      p.vy = 0;
                      p.isVariableJumping = false;
                    }
                    if (abs(mtv.x) > abs(mtv.y)) {
                      p.vx = 0;
                    }
                  }
                }
              }
              for (var i = 0; i < enemies.length; i++) {
                var e = enemies[i];
                // for Boing/Zapp too (they just don't have .checkHit yet)
                if (e.checkHit && e.checkHit(p) && p.health > 0 && p.spikeCooldown <= 0 && !p.paralyzed) {
                  if (e instanceof Zapp) {
                    if (e.type === 'X') {
                      p.health -= 50;
                    } else {
                      p.health -= 100 / 3;
                    }
                    p.paralyzed = true;
                    p.paralyzedFrames = 0;
                    p.paralyzedDuration = 120; // 2 seconds at 60fps
                    p.hurtFrames = p.paralyzedDuration;
                    unlockAchievement("Electrifying");
                    p.vx = 0;
                    p.vy = 0;
                  } else if (e instanceof Boing) {
                    if (e.type === 'X') {
                      p.health -= 1;
                    }
                    p.health -= 2;
                    unlockAchievement("Falling Anvil");
                  } else {
                    spawnParticles(p.x, p.y, 10, "spike", 2);
                    p.hurtFrames = 15;
                    p.health -= 75;
                    p.vy = p.bounceForce / 2;
                    p.isVariableJumping = false;
                    p.spikeCooldown = 10;
                    unlockAchievement("Really Pointy");
                  }
                }
              }
            }
            var activeSignText = null;
            for (var i = 0; i < signs.length; i++) {
              var s = signs[i];

              // Simple AABB check 
              if (p.x + p.w / 2 > s.x - s.w / 2 && p.x - p.w / 2 < s.x + s.w / 2 && p.y + p.h / 2 > s.y - s.h / 2 && p.y - p.h / 2 < s.y + s.h / 2) {
                activeSignText = s.text;
                break; // only show the first overlapping sign
              }
            }
            if (p.health <= 0 && !p.deathTriggered) {
              deaths++;
              p.health = 0;
              spawnParticles(p.x, p.y, 30, "death", 5);
              p.dead = true;
              p.deathTriggered = true;
              p.deathFrames = 1;
              p.lives--;
              if (p.lives === 0) {
                p.gameOver = true;
                // Pick a death message
                currentDeathMessage = deathMessages[floor(random(deathMessages.length))];
              }
            }
            if (deaths > 0) {
              unlockAchievement("One of Many");
            }
            if (deaths >= 10) {
              unlockAchievement("Ten of Many");
            }
            if (deaths >= 100) {
              unlockAchievement("Hundred of Many");
            }
            if (p.health <= 0) {
              p.health = 0;
            }
            if (p.deathFrames > 0 && !p.gameOver) {
              p.deathFrames++;
              if (settings.instantRespawn) {
                p.deathFrames = 314159;
              }
              if (p.deathFrames >= p.deathTimer) {
                p.health = 100;
                p.deathFrames = 0;
                p.deathTriggered = false;
                p.dead = false;
                p.reset(lastCheckpoint.x, lastCheckpoint.y);

                // Reset the boss fight if going
                if (bossFight) {
                  bossFight = false;
                  bossIntro = false;
                  lvl.arenaY = 0;
                  bossIntroFrames = 0;
                  bossFloatY = 0;
                  currentBoss.reset();
                }
              }
            }

            // X follow player
            if (!bossIntro && !bossFight) {
              cam.targetX = p.x - 300;
            }

            // Example cam y "zones"
            if (p.y < -200) {
              cam.targetY = -600;
            } else if (p.y < 100 && p.y > -100) {
              cam.targetY = -300;
            } else if (p.y > 300) {
              cam.targetY = 0;
            }

            // TEMPORARY
            cam.targetY = p.y - 300;

            // Update camera SHAKE
            var shakeX = 0;
            var shakeY = 0;
            if (cameraShakeTimer > 0) {
              var strength = cameraShakeIntensity * (cameraShakeTimer / cameraShakeDuration);
              shakeX = random(-strength, strength);
              shakeY = random(-strength, strength);
              cameraShakeTimer--;
            }
            var arena = bossArena[world - 1];
            if (currentLevel === 15) {
              arena = bossArena[world - 1].levels[bossRemixStage];
            }
            // Boss-fight-specific camera y centering
            if (currentLevel === 3 || currentLevel === 15 || currentLevel === 7 || currentLevel === 11) {
              if (!bossFight) {
                cam.targetY = p.y - 350;
              } else {
                cam.targetY = arena.objects[0].y + lvl.arenaY - 400;
              }
            }

            // Kill player if they go too far off screen
            if (p.y > 1000 && !p.deathTriggered) {
              p.health = 0;
              unlockAchievement("Bottomless");
            }
            // During boss levels, kill player if off arena
            // (arena is different for each level)
            if (bossFight && p.y > arena.objects[0].y + lvl.arenaY + 400) {
              p.health = 0;
            }
            updateCamera();

            // Render
            updateWorldRenderView(shakeX, shakeY);
            pushMatrix();
            if (round(zoomScale) === 1) {
              translate(-cam.x + shakeX, -cam.y + shakeY);
              zoomX = -cam.x;
              zoomY = -cam.y;
            } else {
              rotate(zoomRot);
              scale(zoomScale);
              translate(zoomX, zoomY);
            }

            // Draw Area 0
            if (ECH0 !== null) {
              ech0Background(ECH0.x - 600, -500);
            }

            // Particles behind
            for (var i = particles.length - 1; i >= 0; i--) {
              var pp = particles[i];
              pp.update();

              // Only draw non-spawn/death particles in this pass
              if (pp.type !== "spawn" && pp.type !== "death") {
                pp.draw();
              }
              if (pp.life <= 0) {
                particles.splice(i, 1);
              }
            }
            noStroke();
            if (currentLevel !== 3 && currentLevel !== 7 && currentLevel !== 11 && currentLevel !== 15 && currentLevel !== 16) {
              // Animate Portal Color
              if (portalCol >= 150) {
                portalColChange = -1;
              }
              if (portalCol <= 0) {
                portalColChange = 1;
              }
              portalCol += portalColChange;

              // Draw Portal
              if (!lvl.portal.bubbles) {
                lvl.portal.bubbles = [];
                for (var b = 0; b < 7; b++) {
                  lvl.portal.bubbles.push({
                    x: random(10, 120),
                    y: random(5, 150),
                    speed: random(0.25, 0.5),
                    size: random(8, 10),
                    op: 255,
                    col: random(255, 150)
                  });
                }
              }
              for (var b = 0; b < lvl.portal.bubbles.length; b++) {
                var pBub = lvl.portal.bubbles[b];
                pBub.y -= pBub.speed;
                if (pBub.y < 10) {
                  fill(0, pBub.col, 100, pBub.op);
                  ellipse(lvl.portal.x + pBub.x - lvl.portal.w / 2, lvl.portal.y + pBub.y, pBub.size, pBub.size);
                  pBub.op -= 0.75;
                }
                if (pBub.op <= 0) {
                  pBub.x = random(10, 120);
                  pBub.y = random(5, 150);
                  pBub.op = 255;
                }
              }
              fill(0, portalCol, 255);
              rect(lvl.portal.x - lvl.portal.w / 2, lvl.portal.y - lvl.portal.h / 2, 130, 17, 10);

              // Portal collisions
              if (lvl.portal) {
                var mtv = checkCollision(p, lvl.portal);
                if (mtv) {
                  p.x += mtv.x;
                  p.y += mtv.y;
                  if (mtv.y < 0 && abs(mtv.y) >= abs(mtv.x)) {
                    if (!p.grounded && p.prevVy > 2) {
                      var impact = constrain(p.prevVy * 3, 0, 50);
                      p.targetW = p.w + impact;
                      p.targetH = p.h - impact;
                    }
                    if (!p.prevGrounded && p.prevVy > 2) {
                      spawnParticles(p.x, p.y + p.h / 2, p.prevVy / 2, "dust", 2.8);
                    }
                    p.grounded = true;
                    p.vy = 0;
                    p.isVariableJumping = false;
                    p.vx = 0;
                    p.x = lerp(p.x, lvl.portal.x, 0.075);
                    var buffer = 10;
                    if (round(p.x) - buffer <= lvl.portal.x && round(p.x) + buffer >= lvl.portal.x) {
                      levelEnd = true;
                      if (lvlEndScene === 0) {
                        lvlEndScene = 1;
                      }
                    }
                  } else if (mtv.y > 0 && p.vy < 0) {
                    var impact = constrain(abs(p.vy) * 3, 0, 40);
                    p.targetW = p.w + impact;
                    p.targetH = p.h - impact;
                    p.vy = 0;
                    p.isVariableJumping = false;
                  }
                  if (abs(mtv.x) > abs(mtv.y)) {
                    p.vx = 0;
                  }
                }
              }
            }

            // Update BOSS projectiles
            for (var i = bossBullets.length - 1; i >= 0; i--) {
              var b = bossBullets[i];
              b.x += b.vx; // Move along x axis

              // Left or right bullet?
              // Left or right bullet?
              if (bosses[world - 1].currentSpot === 0) {
                image(bossBulletRight, b.x + b.size * 1.2, b.y + b.size / 2, b.size * 1.5, b.size * 1.5);
              }
              if (bosses[world - 1].currentSpot === 4) {
                image(bossBulletLeft, b.x + b.size * 1.2, b.y + b.size / 2, b.size * 1.5, b.size * 1.5);
              }
              if (b.x > currentBoss.positions[4] + 130 || b.x < currentBoss.positions[0] - 130) {
                bossBullets.splice(i, 1);
              } // Remove if off-screen

              var bulletHitbox = {
                x: b.x + b.size / 1.4,
                y: b.y - b.size / 4,
                w: b.size,
                h: b.size / 2
              }; // Create hitbox

              if (showHitboxes) {
                rect(bulletHitbox.x - bulletHitbox.w / 2, bulletHitbox.y + bulletHitbox.h / 2, bulletHitbox.w, bulletHitbox.h);
              }
              if (checkCollision(p, bulletHitbox)) {
                p.hurtFrames = 20;
                b.explosion = true;
              }
              if (b.explosion) {
                spawnParticles(b.x + b.size / 2, b.y, 40, 'bullet', 2.5);
                bossBullets.splice(i, 1);
                p.health -= 10;
              }
              // Remove bullet and spawn particles
            }
            for (var i = bossBombs.length - 1; i >= 0; i--) {
              var b = bossBombs[i];

              // Animate it!
              b.x += b.vx;
              b.y += b.vy;
              b.vy += b.size / 250;
              b.r += b.vr;
              if (frameCount % 6 === 0) {
                spawnParticles(b.x, b.y, 1, "fuse", 1);
              }

              // Draw it!
              pushMatrix();
              translate(b.x, b.y);
              rotate(b.r);
              imageMode(CORNER);
              image(bossBomb, -b.size / 2, -b.size / 2, b.size, b.size);
              popMatrix();

              // Explodes when touches ground OR collison with player
              if (b.y >= currentBoss.initialY + 50) {
                b.explosion = true;
              }
              var bombHitbox = {
                x: b.x - b.size / 2.5,
                y: b.y - b.size / 2.5,
                w: b.size / 1.2,
                h: b.size / 1.2,
                r: b.r
              };
              if (showHitboxes) {
                //rect(bombHitbox.x, bombHitbox.y, bombHitbox.w, bombHitbox.h);
              }
              if (checkCollision(p, bombHitbox)) {
                p.hurtFrames = 20;
                p.health -= 20;
                b.explosion = true;
              }
              if (b.explosion) {
                spawnParticles(b.x, b.y, 1.2 * b.size, 'explosion', 6);
                bossBombs.splice(i, 1);
              }
            }
            for (var q = bossIcicles.length - 1; q >= 0; q--) {
              var i = bossIcicles[q];

              // Animate it!
              i.y += i.vy;
              i.vy += 0.07;

              // Draw it!
              image(bossIce, i.x - i.spawnSize / 4, i.y - i.spawnSize / 2, i.spawnSize, i.spawnSize);
              i.spawnSize = lerp(i.spawnSize, i.size, 0.04);

              // Explodes when touches ground OR collison with player
              if (i.y >= currentBoss.initialY + 100) {
                bossIcicles.splice(q, 1);
              }
              var iceHitbox = {
                x: i.x - i.spawnSize / 3.3,
                y: i.y - i.spawnSize / 2,
                w: i.spawnSize / 1.5,
                h: i.spawnSize
              };
              if (checkCollision(p, iceHitbox) && !p.frozen) {
                //println("Player hit by icicle!");

                p.health -= 100 / 3;
                p.frozen = true;
                p.frozenFrames = 0;
                p.frozenDuration = 120; // 2 seconds at 60fps
                p.hurtFrames = p.frozenDuration;
                p.vx = 0;
                p.vy = 0;
                currentBoss.attackTimer = 1000;
                // boss changes to moving once time is up
              }
            }
            for (var q = bossSpikes.length - 1; q >= 0; q--) {
              var s = bossSpikes[q];
              s.timer++;
              s.w = s.size / 2.55;
              s.h = s.size / 2;
              s.amount = 1;
              s.r = 0;
              if (!bossFight) {
                bossSpikes.splice(q, 1);
              }
              if (s.timer === 60) {
                s.active = true;
                cameraShake(25, 12);
                spawnParticles(s.x + s.size / 4, s.targetY + s.size / 2, random(30, 60), "rock", random(2, 4));
              }
              if (s.active) {
                imageMode(CENTER);
                image(bossSpike, s.x, s.y, s.size / 2, s.size / 2);
                s.y = lerp(s.y, s.targetY, 0.3);
                var collision = checkSpikeHit(p, s);
                if (collision && p.health > 0) {
                  p.health -= 40;
                  p.hurtFrames = 25;
                  p.vy = p.bounceForce / 2;
                  p.isVariableJumping = false;
                  // invincible frames
                  p.spikeCooldown = 10;
                }
              }
              if (currentBoss.attackTimer > 400) {
                s.y = lerp(s.y, s.targetY + 50, 0.4);
                if (s.y >= s.targetY + 30) {
                  bossSpikes.splice(q, 1);
                }
              }
              if (showHitboxes) {
                // draw each spike triangle
                var amount = s.amount || max(1, floor(s.w / 20));
                var spikeW = s.w / amount;
                for (var n = 0; n < amount; n++) {
                  var bx = -s.w / 2 + n * spikeW;
                  var rx = bx + spikeW;
                  var ax = bx + spikeW * 0.5;
                  var by = s.h / 2;
                  var ay = -s.h / 2;

                  // world-sapce vertices
                  var A = rotatePoint(s.x + bx, s.y + by, s.x, s.y, s.r);
                  var B = rotatePoint(s.x + rx, s.y + by, s.x, s.y, s.r);
                  var C = rotatePoint(s.x + ax, s.y + ay, s.x, s.y, s.r);
                  strokeWeight(1.2);
                  stroke(255, 0, 0);
                  triangle(A.x, A.y, B.x, B.y, C.x, C.y);
                }
              }
            }

            // Draw and Update Enemies & Objects
            for (var i = 0; i < enemies.length; i++) {
              if (!enemies[i].alive) {
                enemies.splice(i, 1);
                continue;
              }
              enemies[i].update(p, lvl.objects);
              drawVisibleWorldEnemy(enemies[i]);
            }
            for (var i = 0; i < levelObjects.length; i++) {
              var o = levelObjects[i];
              worldRenderStats.objectsTested++;
              if (!worldObjectVisible(o)) {
                worldRenderStats.objectsCulled++;
                advanceCulledWorldObject(o);
                continue;
              }
              if (o.type === 'spike') {
                // Only submit spikes intersecting the inverse camera viewport.
                var amount = o.amount || max(1, floor(o.w / 20));
                var spikeW = o.w / amount;
                pushMatrix();
                translate(o.x, o.y);
                rotate(o.r);

                // Keep simulation defaults intact; missing dimensions use the
                // original first-frame path until they have been initialized.
                var spikeRange = visibleWorldSpikeRange(o, amount, spikeW);
                for (var s = spikeRange.first; s < spikeRange.last; s++) {
                  worldRenderStats.spikesDrawn++;
                  if (!o.h) {
                    o.h = 20;
                  }
                  if (!o.w) {
                    o.w = 20 * amount;
                  }
                  var bx = -o.w / 2 + s * spikeW;
                  var rx = bx + spikeW;
                  var ax = bx + spikeW * 0.5;
                  var by = o.h / 1.8;
                  var ay = -o.h / 2;
                  noStroke(); // main triangle
                  fill(175, 165, 165);
                  triangle(bx, by, rx, by, ax, ay);
                  strokeWeight(3);
                  stroke(200); // light tint
                  line(bx + 11.5, by / 10, bx + 10.5, ay / 9);
                }
                // Even a row outside the local horizontal interval leaves the
                // same drawing style as its original final spike.
                if (amount > 0) {
                  fill(175, 165, 165);
                  strokeWeight(3);
                  stroke(200);
                }
                popMatrix();
              } else if (o.type === 'lava' || o.type === 'poison') {
                // Initialize bubbles
                if (!o.bubbles) {
                  o.bubbles = [];
                  for (var b = 0; b < o.w / 25; b++) {
                    o.bubbles.push({
                      x: random(-o.w / 2 + 20, o.w / 2 - 20),
                      y: random(-o.h / 2 - 100, -o.h / 2),
                      speed: random(0.25, 0.4),
                      size: random(8, 10),
                      op: 0
                    });
                  }
                }

                // Draw Lava Body
                pushMatrix();
                translate(o.x, o.y);
                noStroke();
                if (o.type === 'lava') {
                  fill(180, 0, 0);
                } else {
                  fill(10, 100, 10);
                }
                rect(-o.w / 2, -o.h / 2, o.w, o.h - 15);
                rect(-o.w / 2, -o.h / 2, o.w, o.h, 15);
                if (o.type === 'lava') {
                  fill(255, 0, 0);
                } else {
                  fill(200, 255, 200);
                }
                rect(-o.w / 2 + 15, -o.h / 2, o.w - 30, o.h - 13, 10);
                rect(-o.w / 2 + 15, -o.h / 2, o.w - 30, o.h - 23);

                // Draw and Update Bubbles
                for (var b = 0; b < o.bubbles.length; b++) {
                  var bub = o.bubbles[b];
                  bub.y += bub.speed;

                  // Reset bubble after edge
                  if (bub.y > o.h / 2 - 17) {
                    bub.x = random(-o.w / 2 + 20, o.w / 2 - 20);
                    bub.y = random(-o.h / 2 - 100, -o.h / 2);
                    bub.op = 0; // Set opacity to 0
                  }

                  // Fade out when near edge
                  if (bub.y > o.h / 2 - 27) {
                    bub.op -= 20;
                  }

                  // Fill bubble based on type
                  if (o.type === 'lava') {
                    fill(255, 150, 0, bub.op);
                  } else {
                    fill(0, 200, 0, bub.op);
                  }

                  // Draw the bubble within lava
                  noStroke();
                  if (bub.y > -o.h / 2) {
                    if (bub.op < 255) {
                      bub.op += 10;
                    }
                    ellipse(bub.x, bub.y, bub.size, bub.size);
                  }
                }
                popMatrix();
              } else if (o.type === 'trampoline') {
                if (!o.h) {
                  o.h = 15;
                }
                pushMatrix();
                translate(o.x, o.y);
                if (o.r) {
                  rotate(o.r);
                }
                var tw = o.w;
                var th = o.h;
                var padY = -th / 2;
                var deformation = o.springOffset || 0;
                fill(158, 158, 158);
                noStroke();
                rect(-tw * 0.44, padY, -tw * 0.07, th);
                rect(tw * 0.44, padY, tw * 0.07, th);
                if (world === 4) {
                  stroke(255);
                } else {
                  stroke(0);
                }
                strokeWeight(7.5);
                noFill();
                var ctrlOffset = deformation * 2.2;

                // The top
                bezier(-tw / 2, padY, -tw / 3.8, padY - ctrlOffset, tw / 3.8, padY - ctrlOffset, tw / 2, padY);
                popMatrix();
              } else if (o.type === 'sign') {
                pushMatrix();
                translate(o.x, o.y);
                if (o.r) {
                  rotate(o.r);
                }
                noStroke();
                fill(130, 70, 0);
                rect(-8, 10, 16, 20);
                fill(175, 90, 0);
                strokeWeight(5);
                stroke(130, 70, 0);
                rect(-30, -30, 60, 40, 8);
                fill(0);
                textSize(4);
                textAlign(CENTER);
                text("I like cats. Meow. Reow. Meow. I love cats yay! They cute and amazing and majestic and cute and awesome and ok bye", -24, -21.5, 50, 500);
                popMatrix();
              } else if (o.type === 'checkpoint') {
                pushMatrix();
                translate(o.x, o.y);
                if (o.r) {
                  rotate(o.r);
                }

                // for the waving
                var t = frameCount * 3;

                // Flag waving values
                var wave = sin(t + o.x) * o.w * 0.12 + o.h * 0.1;
                var flap = cos(t * 1.4 + o.x) * o.w * 0.05;

                // Flag color
                noStroke();
                if (!checkpointReached) {
                  fill(200, 0, 0);
                } else {
                  fill(0, 230, 0);
                }

                // animated waving flag
                beginShape();
                vertex(0, -o.h * 0.5);
                bezierVertex(o.w * 0.25, -o.h * 0.55 + wave * 0.2, o.w * 0.45, -o.h * 0.45 + wave, o.w * 0.65 + flap, -o.h * 0.35 + wave);
                bezierVertex(o.w * 0.45, -o.h * 0.15 + wave * 0.6, o.w * 0.2, -o.h * 0.08 + wave * 0.2, 0, -o.h * 0.1);
                endShape(CLOSE);
                // Base
                noStroke();
                fill(170);
                rect(0 - o.w / 2, 0 + o.h / 3, o.w, o.h / 6, (o.w + o.h) / 5);
                rect(0 - o.w / 8, 0 - o.h / 2, o.w / 4, o.h, (o.w + o.h) / 5);

                // Shine
                stroke(205);
                strokeWeight(4);
                line(0 + o.h / 23, 0 - o.h / 2.7, 0 + o.h / 23, 0 - o.h / 4);

                // Checkpoint reached effect
                if (checkpointReached && checkCircSize < 1200) {
                  fill(0, 230, 0, 200 - checkCircSize / 4);
                  stroke(0, 230, 0);
                  strokeWeight(30);
                  ellipse(0, 0, checkCircSize, checkCircSize);
                }
                popMatrix();
              } else if (o.type === 'launcher') {
                pushMatrix();
                translate(o.x, o.y);
                if (o.r) {
                  rotate(o.r);
                }
                imageMode(CENTER);
                image(launcherImg, 0, o.h / 7, o.w, o.h * 2);
                popMatrix();
              } else if (o.type === 'arrowSign') {
                pushMatrix();
                translate(o.x, o.y);
                if (o.r) {
                  rotate(o.r);
                }
                noStroke();
                fill(0);
                if (o.way === 'left') {
                  rect(o.w / 3, 0, o.w / 10, o.h * 2.05);
                }
                if (o.way === 'right') {
                  rect(-o.w / 5.5, 0, o.w / 10, o.h * 2.05);
                }

                // Arrow flip
                pushMatrix();
                // Flip if other direction
                if (o.way === 'left') {
                  rotate(180);
                  translate(-o.w / 4, 0);
                }
                fill(200, 0, 0);
                rect(-o.w / 2, -o.h / 2.6, o.w / 1.5, o.h / 1.3, (o.w + o.h) / 30);
                triangle(0, -o.h, o.w / 2, 0, 0, o.h);
                popMatrix();
                stroke(0);
                arcSize((o.w + o.h) / 20);
                var level = currentLevel + 1 - (world - 1) * 4;
                if (o.way === 'left') {
                  if (world === 4) {
                    arcText('X - ' + level, o.w / 3, o.h / 10);
                  } else {
                    arcText(world + ' - ' + level, o.w / 3, o.h / 10);
                  }
                }
                if (o.way === 'right') {
                  if (world === 4) {
                    arcText('X - ' + level, -o.w / 3, o.h / 10);
                  } else {
                    arcText(world + ' - ' + level, -o.w / 3, o.h / 10);
                  }
                }
                popMatrix();
              } else if (o.type === 'conveyorbelt' || o.type === 'hyperbelt') {
                pushMatrix();
                translate(o.x, o.y);
                if (o.r) {
                  rotate(o.r);
                }
                if (o.type === 'hyperbelt') {
                  stroke(230, 0, 0);
                }
                if (o.type === 'conveyorbelt') {
                  stroke(0, 0, 0);
                }
                strokeWeight(6);
                if (o.type === 'hyperbelt') {
                  fill(50);
                }
                if (o.type === 'conveyorbelt') {
                  fill(100);
                }
                rect(-o.w / 2, -o.h / 2, o.w, o.h, 20);
                var segments = max(1, floor(o.w / 40));
                var spacing = o.w / segments;

                // Initialize
                if (o.offset === undefined) {
                  o.offset = 0;
                }
                var dirX = cos(o.r) * o.d;
                var dirY = sin(o.r) * o.d;

                // Default arrow speed

                if (o.type === 'conveyorbelt') {
                  o.offset += dirX * 4;
                } else {
                  o.offset += dirX * 8;
                }

                // Wrap offset
                o.offset = o.offset % spacing;
                for (var j = -1; j < segments + 1; j++) {
                  var x = -o.w / 2 + j * spacing + spacing / 2 + o.offset;
                  if (x > -o.w / 2.2 && x < o.w / 2.2) {
                    // Normalize position from left → right (0 to 1)
                    var t = map(x, -o.w / 2, o.w / 2, 0, 1);

                    // Fade in on left side (adjust 0.2 for how long the fade lasts)
                    var fadeIn = map(t, 0, 0.2, 0, 255);
                    var fadeOut = map(t, 0.8, 1, 255, 0);
                    var opacity = constrain(min(fadeIn, fadeOut), 0, 255);

                    // Apply stroke with alpha
                    if (o.type === 'hyperbelt') {
                      stroke(230, 130, 0, opacity);
                    }
                    if (o.type === 'conveyorbelt') {
                      stroke(255, 255, 255, opacity);
                    }

                    //Different arrow directions for direction
                    strokeWeight(4);
                    beginShape();
                    if (o.d === 1) {
                      vertex(x - 5, 0);
                      vertex(x + 7, 0);
                      vertex(x + 1, -6);
                      vertex(x + 9, 0);
                      vertex(x + 1, 6, x + 7, 0);
                      vertex(x + 7, 0);
                    } else if (o.d === -1) {
                      vertex(x + 7, 0);
                      vertex(x - 5, 0);
                      vertex(x - 1, -6);
                      vertex(x - 7, 0);
                      vertex(x - 1, 5);
                    }
                    endShape();
                  }
                }
                popMatrix();
              } else {
                // unknown type fallback to simple block
                fill(150);
                noStroke();
                pushMatrix();
                translate(o.x, o.y);
                rotate(o.r);
                rect(-o.w / 2, -o.h / 2, o.w, o.h, 30);
                popMatrix();
              }
            }
            if (currentLevel === 16) {
              p.vx = 7;
              var finalBossX = 300 + masterXScroll;
              var masterXHitbox = {
                x: finalBossX,
                y: 300,
                w: 100,
                h: 100
              };
              if (checkDiamondHit(p, masterXHitbox) && p.health > 0) {
                cutsceneIs = true;
                cutsceneName = "victory";
              }
              masterX(finalBossX, 300, 100);
              masterXScroll += 4;
              if (200 + masterXScroll < p.x + 200) {
                masterXScroll += 1.5;
              }
            }
            var arena;
            if (world === 4) {
              arena = bossArena[world - 1].levels[bossRemixStage].objects[0];
            } else {
              arena = bossArena[world - 1].objects[0];
            }
            // Activate boss appears cutscene (different every level)
            if ((currentLevel === 3 || currentLevel === 7 || currentLevel === 11 || currentLevel === 15) && p.x >= arena.x - arena.w / 20 && p.x <= arena.x + arena.w / 20 && p.y <= arena.y - arena.h * 1.3 && p.y >= arena.y - arena.h * 2.6 && !bossFight && !bossIntro) {
              if (currentLevel === 15) {
                if (bossRemixStage === 2) {
                  currentBoss.startFight();
                } else {
                  switchBossRemix = true;
                }
              } else {
                currentBoss.startFight();
              }
            }

            // Once boss intro cutscene is activated
            if (bossIntro || bossFight) {
              if (currentLevel === 15) {
                finalBossPhase = 2;
              }
              if (lvl.arenaY > targetArenaY && bossIntroFrames >= 370) {
                lvl.arenaY -= 8;
              } else if (bossIntroFrames >= 370) {
                bossFight = true;
                bossIntro = false;
              }

              // Draw and collide the arena
              var o = arena;
              if (!levelEnd) {
                cam.targetX = o.x - 300;
              }
              noStroke(); // drawwwwwww
              fill(150);
              rect(o.x - o.w / 2, o.y + lvl.arenaY - o.h / 2, o.w, o.h, o.h / 7);
              var arenaObj = {
                x: o.x,
                y: o.y + lvl.arenaY,
                w: o.w,
                h: o.h,
                r: o.r
              }; // arena hitbox

              var mtv = checkCollision(p, arenaObj);
              if (mtv) {
                p.x += mtv.x;
                p.y += mtv.y;
                if (mtv.y < 0 && abs(mtv.y) >= abs(mtv.x)) {
                  p.grounded = true;
                  p.vy = 0;
                }
                if (abs(mtv.x) > abs(mtv.y)) {
                  p.vx = 0;
                }
              } // collide the arena

              if (bossIntro) {
                bossIntroFrames++;

                // Dash looking right, left, and right again
                if (bossIntroFrames < 50) {
                  p.faceX = lerp(p.faceX, 5, 0.15);
                }
                if (bossIntroFrames >= 50 && bossIntroFrames < 100) {
                  p.faceX = lerp(p.faceX, -5, 0.15);
                }
                if (bossIntroFrames >= 100) {
                  p.faceX = lerp(p.faceX, 5, 0.15);
                }

                // set dash x
                p.x = o.x - o.w / 20;

                // Shake ground
                if (bossIntroFrames < 160) {
                  cam.y += random(-3.5, 3.5);
                  p.mouth = 'surprised'; // dash is very surprised ig
                } else if (bossFloatY > -350) {
                  bossFloatY -= 5;
                  cam.targetY = p.y - 350;
                } // boss floats up

                // Zoom up on guard
                if (bossFloatY <= -350 && bossIntroFrames < 370) {
                  zoomScale = lerp(zoomScale, 4, 0.15);
                  zoomX = lerp(zoomX, -cam.x - 380, 0.15);
                  zoomY = lerp(zoomY, -cam.y - 240, 0.25);
                  p.mouth = 'closed';
                } else {
                  zoomScale = lerp(zoomScale, 1, 0.15);
                  zoomX = lerp(zoomX, -cam.x, 0.15);
                  zoomY = lerp(zoomY, -cam.y, 0.25);
                }
                var bossArenaTranslateY;
                if (bossIntroFrames >= 370) {
                  bossArenaTranslateY = lvl.arenaY + 120;
                } else {
                  bossArenaTranslateY = 0;
                }

                // Pre-fight guard
                if (world === 4) {
                  parkMast(o.x + o.w / 2.7, o.y + 100 + bossFloatY + handAnimationY + bossArenaTranslateY, currentBoss.size * 1.2, currentBoss.variant, currentBoss);
                } else {
                  drawGuard(o.x + o.w / 2.7, o.y + 100 + bossFloatY + handAnimationY + bossArenaTranslateY, currentBoss.size, currentBoss.variant, currentBoss);
                }
              }
              if (bossFight && !levelEnd) {
                if (bossMenuGone) {
                  currentBoss.update();
                } else {
                  dropDownGoToY = dropDownVisibleY;
                }
                currentBoss.draw();
              }
            }
            if (currentLevel === 15 && bossRemixStage !== 2) {
              var masterOffset;
              if (bossRemixStage === 0) {
                masterOffset = 0;
              }
              if (bossRemixStage === 1) {
                masterOffset = -400;
              }
              parkMast(arena.x + arena.w / 3 + masterOffset, arena.y - 300 + handAnimationY, currentBoss.size * 1.2, currentBoss.variant, currentBoss);
              if (switchBossRemix) {
                if (!screenWipeActive) {
                  triggerScreenWipe();
                }
              }
            }
            // Boss Poison Wave + collision
            if (currentBoss.waveState !== "done" && bossFight && currentBoss.state === "attack" && currentBoss.currentAttack === "poisonWave") {
              // Execute your custom wave layout drawing assignment
              bossPoisonWave(currentBoss.waveX + 65, currentBoss.waveY + 60, 190);

              // Hazard Damage / Condition Mapping
              var waveHitbox = {
                x: currentBoss.waveX + currentBoss.waveW / 5,
                y: currentBoss.waveY + currentBoss.waveH / 2,
                w: currentBoss.waveW,
                h: currentBoss.waveH,
                r: 0
              };

              // Draw hitbox
              fill(170, 0, 255, 45);
              stroke(0, 255, 50);
              strokeWeight(3);
              rectMode(CENTER);
              rect(waveHitbox.x, waveHitbox.y, waveHitbox.w, waveHitbox.h);
              rectMode(CORNER); // Reset default alignment

              if (checkCollision(p, waveHitbox)) {
                // Damage dash
                if (p.health > 0) {
                  p.health = 0;
                  p.hurtFrames = 20;
                }
              }
            }

            // Boss Decay Spots
            for (var i = bossDecaySpots.length - 1; i >= 0; i--) {
              var spot = bossDecaySpots[i];
              spot.y = currentBoss.initialY + 60;

              // Calculate the centered X coordinate based on its current growing width
              var centerX = spot.x - spot.initialW / 2;

              // Render with thick dark purple outlines
              noFill();
              stroke(85, 20, 115);
              strokeWeight(13);

              // Centered horizontal base line
              line(centerX, spot.y, centerX + spot.initialW, spot.y);
              strokeWeight(13);
              for (var l = 0; l < spot.decayLines.length; l++) {
                var thisLine = spot.decayLines[l];

                // Offset the vertical lines relative to the new centered X
                line(centerX + l * 13, spot.y, centerX + l * 13, spot.y + thisLine.h + sin(frameCount * 2) * 4);
              }
              stroke(255, 255, 255, 100);
              strokeWeight(4);
              // Adjusted the arc position to scale relative to the new centered coordinates
              arc(centerX + spot.initialW / 1.1, spot.y + spot.initialW / 14, spot.initialW / 8, spot.initialW / 7, 270, 360);
              if (spot.initialW < spot.w) {
                spot.initialW += 1.5;
              }

              // Hitbox perfectly lined up with the centered drawing
              var spotHitbox = {
                x: centerX + spot.initialW / 2,
                // Center of the hitbox
                y: spot.y + spot.initialW / 3,
                // Center of the hitbox vertically
                w: spot.initialW,
                h: spot.initialW,
                r: 0
              };

              // Render the debug red hitbox using standard center coordinates
              fill(255, 0, 0, 150);
              rectMode(CENTER);
              if (showHitboxes) {
                rect(spotHitbox.x, spotHitbox.y, spotHitbox.w, spotHitbox.h);
              }
              rectMode(CORNER);

              // If player is standing on the spot, flag the condition active
              if (checkCollision(p, spotHitbox) !== null) {
                if (this.printDebug) {
                  println('decaying');
                }
                p.isDecaying = true;
                //p.decayFrames = 0; // Resets the 3-second timer if hit again
              }
              if (!bossFight) {
                bossDecaySpots.splice(i, 1);
              }
            }

            // Boss spike spawn warning rects OVER boss arena
            for (var q = bossSpikes.length - 1; q >= 0; q--) {
              var s = bossSpikes[q];
              if (!s.active) {
                var pulseSpeed = 0.04;
                var alpha = s.timer * 4;
                fill(200 + alpha / 10, 0, 0, alpha);
                noStroke();
                rectMode(LEFT);
                rect(s.x - s.size / 4, s.targetY + s.size / 4, s.size / 2.55, 10, 5);
              }
            }

            // ECH0
            if (currentLevel === 14 && ECH0 !== null) {
              ECH0.update(levelObjects);
              noStroke();
              fill(230, 0, 255, 150);
              rect(ECH0.x - 10, -3000, 20, 6000);
              ECH0.draw();
              var catchMtv = checkCollision(p, ECH0);
              if (catchMtv && p.health > 0 && p.spikeCooldown <= 0 && !p.paralyzed) {
                spawnParticles(p.x, p.y, 10, "spike", 2);
                p.health -= 100;
                p.hurtFrames = 15;
                p.vy = p.bounceForce / 2;
                p.spikeCooldown = 30;
              }
            }

            // Particles 2nd pass (on top)
            for (var i = particles.length - 1; i >= 0; i--) {
              var pp = particles[i];

              // Only draw spawn/death particles in this pass
              if (pp.type === "spawn" || pp.type === "death") {
                pp.draw();
              }
            }
            if (!p.dead) {
              p.draw();
            }
            if (showHitboxes) {
              // draw object hitboxes
              for (var i = 0; i < lvl.objects.length; i++) {
                var o = lvl.objects[i];
                if (!o.type || o.type === 'block' || o.type === 'trampoline' || o.type === 'lava' || o.type === 'conveyorbelt' || o.type === 'hyperbelt' || o.type === "checkpoint" || o.type === "launcher") {
                  // draw exact OBB
                  var v = getVertices(o);
                  noFill();
                  stroke(255, 0, 0, 200);
                  strokeWeight(1.5);
                  quad(v[0].x, v[0].y, v[1].x, v[1].y, v[2].x, v[2].y, v[3].x, v[3].y);
                } else if (o.type === 'spike') {
                  // draw each spike triangle
                  var amount = o.amount || max(1, floor(o.w / 20));
                  var spikeW = o.w / amount;
                  for (var s = 0; s < amount; s++) {
                    var bx = -o.w / 2 + s * spikeW;
                    var rx = bx + spikeW;
                    var ax = bx + spikeW * 0.5;
                    var by = o.h / 2;
                    var ay = -o.h / 2;

                    // world-sapce vertices
                    var A = rotatePoint(o.x + bx, o.y + by, o.x, o.y, o.r);
                    var B = rotatePoint(o.x + rx, o.y + by, o.x, o.y, o.r);
                    var C = rotatePoint(o.x + ax, o.y + ay, o.x, o.y, o.r);
                    strokeWeight(1.2);
                    triangle(A.x, A.y, B.x, B.y, C.x, C.y);
                  }
                }
              }
              for (var i = 0; i < signs.length; i++) {
                var s = signs[i];
                noFill();
                stroke(0, 200, 255, 200);
                strokeWeight(1.5);
                var sv = getVertices(s);
                quad(sv[0].x, sv[0].y, sv[1].x, sv[1].y, sv[2].x, sv[2].y, sv[3].x, sv[3].y);
              }
              for (var i = 0; i < enemies.length; i++) {
                var e = enemies[i];
                if (e instanceof Boing) {
                  var boingBox = {
                    x: e.x,
                    y: e.y + e.size * 0.25,
                    w: e.size,
                    h: e.size * 1.5,
                    r: 0
                  };
                  var bv = getVertices(boingBox);
                  noFill();
                  stroke(0, 34, 128, 200);
                  strokeWeight(1.5);
                  quad(bv[0].x, bv[0].y, bv[1].x, bv[1].y, bv[2].x, bv[2].y, bv[3].x, bv[3].y);
                } else if (e instanceof Thorn) {
                  var sf = e.size / 50;
                  var hb = 20 * sf;
                  var hh = 20 * sf;
                  var tv = [{
                    x: e.x - hb,
                    y: e.y
                  }, {
                    x: e.x + hb,
                    y: e.y
                  }, {
                    x: e.x,
                    y: e.y - hh
                  }];
                  noFill();
                  stroke(79, 0, 0, 200);
                  strokeWeight(1.5);
                  triangle(tv[0].x, tv[0].y, tv[1].x, tv[1].y, tv[2].x, tv[2].y);
                } else if (e instanceof Zapp) {
                  var zb = {
                    x: e.x + e.size / 2,
                    y: e.y + e.size / 4,
                    w: e.size,
                    h: e.size / 1.5,
                    r: 0
                  };
                  var zv = getVertices(zb);
                  noFill();
                  stroke(255, 204, 0, 200);
                  strokeWeight(1.5);
                  quad(zv[0].x, zv[0].y, zv[1].x, zv[1].y, zv[2].x, zv[2].y, zv[3].x, zv[3].y);
                }
              }

              // draw exact player OBB too
              var pv = getVertices(p);
              noFill();
              stroke(0, 255, 0, 200);
              strokeWeight(1.5);
              quad(pv[0].x, pv[0].y, pv[1].x, pv[1].y, pv[2].x, pv[2].y, pv[3].x, pv[3].y);
              if (currentLevel !== 3 && currentLevel !== 7 && currentLevel !== 11 && currentLevel !== 15 && currentLevel !== 16) {
                // draw exact OBB
                var portv = getVertices(lvl.portal);
                noFill();
                stroke(255, 0, 0, 200);
                strokeWeight(1.5);
                quad(portv[0].x, portv[0].y, portv[1].x, portv[1].y, portv[2].x, portv[2].y, portv[3].x, portv[3].y);
              }
            }

            // The reset animation
            stroke(255 - resetCharTimer / 1.1, 0, 0);
            strokeWeight(5);
            noFill();
            arc(p.x, p.y, p.w * 1.5, p.h * 1.5, 0, resetCharTimer);

            // END OF CAMERA!
            worldRenderView.active = false;
            popMatrix();
            if (screenWipeActive) {
              handleScreenWipe();
            }

            // Game Over Screen
            if (p.gameOver) {
              if (deathAnimationFrames > 20 && deathAnimationFrames < 100) {
                if (shakeIntensity > 1) {
                  shakeX = random(-shakeIntensity, shakeIntensity);
                  shakeY = random(-shakeIntensity, shakeIntensity);
                }
                shakeIntensity -= 0.6;
              }
              noStroke();
              fill(0);
              ellipse(300, 300, innerCircleSize - 1, innerCircleSize - 1);
              innerCircleSize = deathAnimationFrames * 50;
              if (deathAnimationFrames > 100) {
                // Text Fade-in
                stroke(234, 7, 7);
                arcSize(40);
                arcAlign(CENTER);
                arcText("Game Over", 320, 260);
                noStroke();
                fill(0, 0, 0, 255 - gameOverTextTransparency);
                rect(0, 0, 600, 600);
                arcSize(19);
                stroke(41, 230, 224);
                arcText(currentDeathMessage, 310, 325);
                fill(0, 0, 0, 510 - gameOverTextTransparency);
                noStroke();
                rect(0, 300, 600, 100);
                stroke(0, 255, 191);
                arcSize(20);
                arcText("- Click to Continue -", 300, 450);
                fill(0, 0, 0, 800 - gameOverTextTransparency);
                noStroke();
                rect(0, 420, 600, 50);
                arcAlign(LEFT);
              }

              // Draw skull
              pushMatrix();
              translate(300 + shakeX, 300 + shakeY);
              rotate(-5);
              fill(255, 255, 255, skullTrans);
              drawSkull(0, 0, skullSize * 1.5);
              fill(0, 0, 0, skullTrans * 2);
              drawEye(0, 0, skullSize * 1.5);
              popMatrix();
              if (deathAnimationFrames < 100 && skullTrans < 255) {
                skullTrans += 10;
              }
              if (deathAnimationFrames < 100 && skullSize > 200) {
                skullSize /= 1.3;
              }
              if (deathAnimationFrames > 120) {
                skullSize += 10;
                skullTrans -= 10;
                gameOverTextTransparency += 5;
              }
              deathAnimationFrames++;
            }

            // Level Ending Screen
            if (levelEnd) {
              p.vx = -2;
              p.vy = -2;

              // Confetti
              for (var i = 0; i < confetti.length; i++) {
                confetti[i].update();
                confetti[i].draw();
              }
              rectMode(LEFT);

              // Banners on the side
              for (var l = 0; l < 5; l++) {
                strokeWeight(20);
                if (l === 0 || l === 4) {
                  stroke(30);
                }
                if (l === 1 || l === 3) {
                  if (world === 1) {
                    stroke(0, 50, 170);
                  }
                  if (world === 2) {
                    stroke(0, 130, 0);
                  }
                  if (world === 3) {
                    stroke(220, 80, 0);
                  }
                  if (world === 4) {
                    stroke(255, 0, 0);
                  }
                }
                if (l === 2) {
                  stroke(240);
                }
                line(0, 80 + l * 20 - sin(frameCount * 2) * 2, -140 + l * 55 + lvlEndFrames * 40 - sin(frameCount * 2) * 6, -10);
                line(200, 620 + l * 20 - sin(frameCount * 2) * 2, 680 + l * 55 - sin(frameCount * 2) * 6, 850 - lvlEndFrames * 40);
              }
              var lvlText = world + ' - ' + (currentLevel + 1 - (world - 1) * 4);
              if (world === 4) {
                lvlText = 'X - ' + (currentLevel + 1 - (world - 1) * 4);
              }

              // Banner text
              pushMatrix();
              translate(-160 + lvlEndFrames * 20, 90 + sin(frameCount * 2) * 5);
              arcSize(23);
              if (currentLevel === 3 || currentLevel === 7 || currentLevel === 11) {
                stroke(0, 0, 0, 190);
                arcText('World  ' + world + '\nCOMPLETE!', 5, 5);
                arcText(world + '-BOSS', 355, 425);
                if (world !== 4) {
                  stroke(worlds[world - 1].line);
                } else {
                  stroke(255, 70, 70);
                }
                arcText('World  ' + world + '\nCOMPLETE!', 0, 0);
                arcText(world + '-BOSS', 350, 420);
              } else {
                stroke(0, 0, 0, 190);
                arcText('Level\nCLEARED!', 5, 5);
                arcText(lvlText, 355, 425);
                if (world !== 4) {
                  stroke(worlds[world - 1].line);
                } else {
                  stroke(255, 70, 70);
                }
                arcText('Level\nCLEARED!', 0, 0);
                arcText(lvlText, 350, 420);
              }
              popMatrix();
              pushMatrix();
              translate(140, 380);
              rotate(-10);
              if (bossFight) {
                fill(0, 0, 0, 70);
                noStroke();
                ellipse(25, 25, 230 + sin(frameCount * 3) * 10, 230 + sin(frameCount * 3) * 10);
              }

              // Boss stamps
              if (currentLevel === 3) {
                image(boss1Img, 0, 0, 300 + sin(frameCount * 3) * 15, 300 + sin(frameCount * 3) * 15);
              }
              if (currentLevel === 7) {
                image(boss2Img, 0, 0, 300 + sin(frameCount * 3) * 15, 300 + sin(frameCount * 3) * 15);
              }
              if (currentLevel === 11) {
                image(boss3Img, 0, 0, 300 + sin(frameCount * 3) * 15, 300 + sin(frameCount * 3) * 15);
              }
              if (currentLevel === 15) {
                image(boss4Img, 0, 0, 300 + sin(frameCount * 3) * 15, 300 + sin(frameCount * 3) * 15);
              }
              popMatrix();

              // Click to continue text
              arcSize(12 + sin(frameCount * 2) * 1.1);
              stroke(0, 0, 0, 190);
              arcText('Click to Continue', 23 - sin(frameCount * 2) * 11, 578);
              stroke(255);
              arcText('Click to Continue', 20 - sin(frameCount * 2) * 11, 575);
            }

            // Boss Introduction Screen
            if (bossIntro && bossFloatY <= -350 && bossIntroFrames < 370) {
              /// Top & bottom square banners
              rectMode(CENTER);
              noStroke();
              for (var i = 0; i < guardBannerSquares.length; i++) {
                var s = guardBannerSquares[i];
                pushMatrix();
                translate(s.x, s.y + sin(frameCount + i * 50) * 10);
                rotate(s.rot);
                if (currentBoss.bossNum === 1) {
                  if (s.col === 0) {
                    fill(0, 0, 130); // dark blue
                  } else if (s.col === 1) {
                    fill(0, 200, 255); // blue
                  }
                } else if (currentBoss.bossNum === 2) {
                  if (s.col === 0) {
                    fill(0, 80, 0); // dark green
                  } else if (s.col === 1) {
                    fill(0, 200, 0); // green
                  }
                } else if (currentBoss.bossNum === 3) {
                  if (s.col === 0) {
                    fill(150, 50, 0); // dark orange
                  } else if (s.col === 1) {
                    fill(210, 90, 0); // orange
                  }
                } else if (currentBoss.bossNum === 4) {
                  if (s.col === 0) {
                    fill(204, 37, 204); // pink
                  } else if (s.col === 1) {
                    fill(40, 0, 70); // purple
                  }
                } else {
                  fill(0); // black
                }
                rect(0, 0, s.size, s.size, s.size / 30);
                popMatrix();
              }
              rectMode(LEFT);
              pushMatrix();
              translate(30, 290);
              rotate(-2);
              stroke(0);
              if (currentBoss.bossNum === 4) {
                stroke(255);
              }
              arcSize(20);
              arcText("THE", 0, -70);
              var displayName = currentBoss.name.replace(" ", "\n");
              if (currentBoss.bossNum === 1) {
                stroke(0, 0, 120);
              }
              if (currentBoss.bossNum === 2) {
                stroke(0, 80, 0);
              }
              if (currentBoss.bossNum === 3) {
                stroke(180, 50, 0);
              }
              if (currentBoss.bossNum === 4) {
                stroke(255, 102, 240);
              }
              arcSize(30);
              arcText(displayName, 0, 0);
              popMatrix();
            }

            // Smooth health transition
            visualHealth = lerp(visualHealth, p.health, 0.35);
            if (activeSignText) {
              pushMatrix();

              // Main text
              if (world === 4) {
                stroke(255);
              } else {
                stroke(0);
              }
              strokeWeight(6);
              arcSize(11);
              arcAlign(CENTER);
              // This is the most computationally expensive line of the entire program. Packed with hundreds of complex draw calls, this needs MAJOR optimization.
              arcText(activeSignText, 300, 170);
              popMatrix();
            }

            // UI
            if (showDebugInfo) {
              var dbg = {
                y: 8
              }; // simple state object

              noStroke();
              rectMode(LEFT);
              fill(255, 180);
              rect(0, 0, 160, dbg.y * 27);
              fill(0);
              textAlign(LEFT, TOP);
              textSize(13);

              // PLAYER
              debugLine("Health", roundTo(p.health, 2), dbg);
              debugLine("Lives", p.lives, dbg);
              debugLine("Pos", round(p.x) + ", " + round(p.y), dbg);
              debugLine("Vel", roundTo(p.vx, 2) + ", " + roundTo(p.vy), dbg);
              debugLine("Grounded", p.grounded, dbg);
              debugLine("Paralyzed", p.paralyzed, dbg);

              // CAMERA
              debugLine("Cam", round(cam.x) + ", " + round(cam.y), dbg);

              // PERFORMANCE
              debugLine("FPS", roundTo(this.__frameRate, 2), dbg);

              // STATE
              debugLine("Level", currentLevel + 1, dbg);
              debugLine("World", world, dbg);
              debugLine("Particles", particles.length, dbg);
              debugLine("Enemies", enemies.length, dbg);
              debugLine("Checkpoint Reached", checkpointReached, dbg);
            } else if (!levelEnd && !p.gameOver && !bossIntro && finalBossPhase !== 4) {
              drawHealthBox(440, 20, visualHealth, p.health);
              drawLeftHUD(20, 40, currentLevel + 1, world, p.lives);
              if (checkpointReached) {
                stroke(0, 100, 200);
                arcSize(11);
                arcText('Checkpoint Reached', 365, 130);
              }
            }
            if (speedrun) {
              speedClock.draw();
              if (!levelEnd) {
                speedClock.update();
              }
            }
            if (finalBossPhase === 4) {
              FinalPhase.drawHUD(250, 100, 120);
            }

            // Q MENU [

            // Where the menu should go
            var qMenuTargetX = qMenuActive ? 0 : -qMenuWidth;
            qMenuX = lerp(qMenuX, qMenuTargetX, 0.15); // Smoothly slide into place

            // Draw when on screen
            if (qMenuX > -qMenuWidth + 1 && !levelEnd) {
              // Draw basic menu background
              fill(100, 35, 35, 235);
              noStroke();
              rect(qMenuX, 0, qMenuWidth, height);
              stroke(0);
              strokeWeight(12);
              line(qMenuX + qMenuWidth, 0, qMenuX + qMenuWidth, height);

              // Text
              stroke(255);
              arcSize(15);
              arcText("LEVEL MENU", qMenuX + 50, 60);

              // back button
              backButton(qMenuX + qMenuWidth / 2, 180, 70);

              // continue button
              continueButton(qMenuX + qMenuWidth / 2, 280, 150, 45);
            }

            //]

            // Boss health meter
            if (bossFight && !levelEnd) {
              drawBossHealth(80, 570, 130, currentBoss);
            }
            fill(0, 0, 0, bossScreenOpacity);
            noStroke();
            rect(0, 0, 600, 600);
          } else {
            if (p.health <= 0) {
              if (p.health < 0) {
                p.health = 0;
              }
              bossScreenOpacity += random(2, 8);
              if (bossScreenOpacity > 255 && p.lives > 1) {
                p.finalBossReset();
              }
              if (p.lives === 1) {
                p.lives = 0;
                p.gameOver = true;
              }
            }
            if (p.health <= 0 && !p.deathTriggered) {
              p.deathTriggered = true;
              if (p.lives === 0) {
                p.gameOver = true;
                // Pick a death message
                currentDeathMessage = deathMessages[floor(random(deathMessages.length))];
              }
            }
            if (deaths > 0) {
              unlockAchievement("One of Many");
            }
            if (deaths >= 10) {
              unlockAchievement("Ten of Many");
            }
            if (deaths >= 100) {
              unlockAchievement("Hundred of Many");
            }
            if (!finalPlayerInit) {
              p.initiateFinalBoss();
              finalPlayerInit = true;
            }
            background(255);

            // camera SHAKE
            var shakeX = 0;
            var shakeY = 0;
            var numCircles = 10;
            for (var i = 0; i < numCircles; i++) {
              var flicker = 15 - FinalPhase.livesRemaining * 2;
              if (FinalPhase.currentState === "STABILIZE_VORTEX") {
                flicker = 15;
              }
              fill(i * (130 / numCircles) + random(-flicker, flicker), 0, 0);
              noStroke();
              ellipse(300, 300, 990 - i * (900 / numCircles), 990 - i * (900 / numCircles));
            }
            pushMatrix();
            translate(width / 2, height / 2); // Center the camera

            for (var i = 0; i < stars.length; i++) {
              var s = stars[i];

              // Move the star down the tunnel toward the camera
              s.z -= tunnelSpeed;
              if (s.z <= 0) {
                s.z = maxZ;
                s.angle = random(0, 360);
                s.r = random(60, 140);
              }

              // Perspective scaling factor
              var k = 350;

              // Current projected position (Clossest point of the streak)
              var x1 = cos(s.angle) * s.r * k / s.z;
              var y1 = sin(s.angle) * s.r * k / s.z;

              // Trail position further down the Z axis (Farthest point of the streak)
              var zTrail = s.z + s.len;
              var x2 = cos(s.angle) * s.r * k / zTrail;
              var y2 = sin(s.angle) * s.r * k / zTrail;
              var alpha = 255;

              // Fade in when spawning far away
              if (s.z > maxZ - 100) {
                alpha = map(s.z, maxZ, maxZ - 100, 0, 255);
              }
              // Fade out right before hitting the camera viewport edge
              if (s.z < 90) {
                alpha = map(s.z, 90, 0, 255, 0);
              }

              // Render the streak
              stroke(s.c, alpha);
              strokeWeight(s.w);
              line(x1, y1, x2, y2);
            }
            popMatrix();

            // Handle Game Objects
            FinalPhase.update();

            //p.initiateFinalBoss();
            p.finalBossUpdate();

            // Wavy, glitchy ring expanding outwards
            noFill();
            var centerX = 300 + random(-5, 5);
            var centerY = 300 + random(-5, 5);
            var baseRadius = vortexCollapseSize / 3;

            // Loops outward to create a thick, glitchy wall without filling the center
            for (var layer = 0; layer < 160; layer += 15) {
              stroke(random(50, 0), 0, 0);
              strokeWeight(random(4, 18)); // Varying thickness for a digital look
              beginShape();
              for (var angle = 0; angle < 360; angle += 10) {
                var radAngle = angle * Math.PI / 180;

                // Combine sine waves and random noise for the glitch effect
                var wave = Math.sin(angle * 8 + layer) * 25;
                var glitch = random(-8, 8);
                var totalRadius = baseRadius + layer + wave + glitch;
                var x = centerX + Math.cos(radAngle) * totalRadius;
                var y = centerY + Math.sin(radAngle) * totalRadius;
                vertex(x, y);
              }
              endShape(CLOSE);
            }

            // Render game entities relative to states
            if (FinalPhase.currentState === "STABILIZE_VORTEX") {
              vortexCollapseSize = lerp(vortexCollapseSize, 670, 0.1);
              tunnelSpeed += 0.04;
              for (var i = 0; i < FinalPhase.touchpoints.length; i++) {
                var tp = FinalPhase.touchpoints[i];

                // Only draw if player hasn't hit it yet
                if (!tp.isHit) {
                  // Dark blue
                  fill(10, 40, 120, 150);
                  var pulse = sin(frameCount + i * 100) * 17;

                  // Give it a clean, bright electric blue or white border so it is highly visible
                  stroke(0, 180, 255, pulse * 4 + 100);
                  strokeWeight(5);

                  // Draw the ellipse with pulse
                  ellipse(tp.x, tp.y, tp.radius * 2 + pulse, tp.radius * 2 + pulse);
                }
              }
            } else {
              vortexCollapseSize = lerp(vortexCollapseSize, 1000, 0.1);
              tunnelSpeed = lerp(tunnelSpeed, baseTunnelSpeed, 0.2);
            }

            // Render Interface Elements
            FinalPhase.drawHUD(250, 100, 120);
            masterX(300 + sin(frameCount * 3) * sin(frameCount) * random(8, 12), 300 + sin(frameCount * 3) * random(4, 7), 85 + sin(frameCount) * 8);

            // Draw projectiles
            if (FinalPhase.currentState === "SURVIVAL") {
              for (var i = 0; i < FinalPhase.obstacles.length; i++) {
                // Drawing fireballs
                if (FinalPhase.currentAttackPattern === "fireballs") {
                  var fb = FinalPhase.obstacles[i];

                  // Recalculate for rendering
                  var currentRadius = lerp(fb.baseRadius, fb.maxRadius, fb.z);
                  var ringRadius = lerp(fb.maxRadius * 3, currentRadius, constrain(fb.z, 0, 1));

                  // Fireball
                  noStroke();
                  fill(180 + sin(frameCount * 7) * 10, 0, 0, fb.z * 255);
                  ellipse(fb.x, fb.y, currentRadius * 2, currentRadius * 2);
                  fill(230, 100, 0, fb.z * 125.5);
                  ellipse(fb.x, fb.y, currentRadius * 1.25, currentRadius * 1.25);
                  fill(230, 190, 0, fb.z * 125.5);
                  ellipse(fb.x, fb.y, currentRadius * 0.5, currentRadius * 0.5);
                }

                // Drawing spike walls
                if (FinalPhase.currentAttackPattern === "spikeWalls") {
                  var wall = FinalPhase.obstacles[i];
                  var centerX = 300;
                  var centerY = 300;

                  // Calculate dynamic perspective dimension metrics
                  var wallWidth = lerp(40, width, wall.z);
                  var wallHeight = lerp(40, height, wall.z);

                  // Track visual placement from center, adding gravity offsets if it's falling
                  var wallX = centerX - wallWidth / 2;
                  var wallY = centerY - wallHeight / 2 + wall.fallY;

                  // 2 Render wall split across grid layers to sculpt hole boundaries safely
                  var cols = 6;
                  var rows = 6;
                  var segW = wallWidth / cols;
                  var segH = wallHeight / rows;

                  // Calculate what segment sizes would look like at full scale (unscaled)
                  var unscaledSegW = width / cols;
                  var unscaledSegH = height / rows;
                  for (var r = 0; r < rows; r++) {
                    for (var c = 0; c < cols; c++) {
                      // Calculate where this specific block segment lands on screen
                      var blockX = wallX + c * segW;
                      var blockY = wallY + r * segH;

                      // Find the center of this grid cell in original, unscaled screen coordinates
                      var unscaledBlockCenterX = c * unscaledSegW + unscaledSegW / 2;
                      var unscaledBlockCenterY = r * unscaledSegH + unscaledSegH / 2;
                      var inHole = false;

                      // Check if this grid block point overlaps any saved safe zone holes
                      for (var h = 0; h < wall.holes.length; h++) {
                        var hole = wall.holes[h];

                        // FIXED: Compare unscaled coordinates to completely stop hole drifting
                        if (dist(unscaledBlockCenterX, unscaledBlockCenterY, hole.x, hole.y) < hole.size / 2) {
                          inHole = true;
                          break;
                        }
                      }

                      // Only draw the grid segment block if it is NOT inside a safe opening!
                      if (!inHole) {
                        fill(45, 45, 48);
                        noStroke();
                        rect(blockX, blockY, segW, segH);

                        // indentation yay
                        for (var x = 0; x < 4; x++) {
                          for (var y = 0; y < 4; y++) {
                            for (var k = 0; k < 10; k++) {
                              fill(80 + k * 7);
                              ellipse(blockX + segW / 8 + x * segW / 4, blockY + segH / 8 + y * segH / 4, segW / 4 - k * 2, segH / 4 - k * 2);
                            }
                          }
                        }
                      }
                    }
                  }
                }

                // Drawing paralysis beams
                if (FinalPhase.currentAttackPattern === "paralysisBeams") {
                  var beam = FinalPhase.obstacles[i];
                  if (beam.type !== "paralysisBeam") {
                    continue;
                  }
                  var localAge = FinalPhase.obstacleTimer - beam.spawnFrame;

                  // fade a thin warning line into view
                  if (localAge <= beam.telegraphTime) {
                    var alphaFade = map(localAge, 0, beam.telegraphTime, 15, 140);
                    fill(255, 235, 40, alphaFade);
                    noStroke();
                    if (beam.orientation === "horizontal") {
                      rect(0, beam.pos - 6, 600, 12);
                    } else {
                      rect(beam.pos - 6, 0, 12, 600);
                    }
                  }
                  // lightning bolt active phase
                  else if (localAge <= beam.telegraphTime + beam.activeTime) {
                    var lightningFlicker = random(170, 245);

                    // Draw the outer neon energy beam aura
                    noStroke();
                    fill(255, 200, 0, lightningFlicker);
                    if (beam.orientation === "horizontal") {
                      rect(0, beam.pos - beam.thickness / 2, 600, beam.thickness);
                    } else {
                      rect(beam.pos - beam.thickness / 2, 0, beam.thickness, 600);
                    }

                    // Draw the crackling lightning core
                    stroke(255, 255, 255, lightningFlicker + 10); // Bright white/yellow core
                    strokeWeight(5);
                    noFill();
                    var segments = 20;
                    var shiftSpeed = 4;
                    var timeSeed = floor(frameCount / shiftSpeed) * 0.5;
                    beginShape();
                    if (beam.orientation === "horizontal") {
                      for (var j = 0; j <= segments; j++) {
                        var x = j / segments * 600;
                        // Map noise to create a jagged offset constrained within the beam's thickness
                        var noiseVal = noise(j * 0.6, timeSeed + beam.pos);
                        var offset = (noiseVal - 0.5) * beam.thickness;
                        vertex(x, beam.pos + offset * 1.5);
                      }
                    } else {
                      for (var j = 0; j <= segments; j++) {
                        var y = j / segments * 600;
                        var noiseVal = noise(j * 0.6, timeSeed + beam.pos);
                        var offset = (noiseVal - 0.5) * beam.thickness;
                        vertex(beam.pos + offset * 1.5, y);
                      }
                    }
                    endShape();
                  }
                }

                // Drawing thorns
                if (FinalPhase.currentAttackPattern === "thornShots") {
                  var thorn = FinalPhase.obstacles[i];
                  drawThornSprite(thorn);
                }

                // Drawing poison spray elements
                if (FinalPhase.currentAttackPattern === "poisonSpray") {
                  var obj = FinalPhase.obstacles[i];
                  if (obj && obj.type === "poisonParticle") {
                    // Tiny dynamic particles rendering with active alpha values
                    fill(82, 110, 82);
                    noStroke();
                    ellipse(obj.x, obj.y, obj.size, obj.size);
                  } else if (obj && obj.type === "mainPoisonBall") {
                    // 50x50 Perfect Red Circular Hitbox Placeholder
                    fill(255, 0, 0);
                    noStroke();
                    poisonBall(obj.x, obj.y, obj.radius * 2);
                  }
                }
              }
            }
            for (var i = particles.length - 1; i >= 0; i--) {
              var pp = particles[i];
              pp.update();

              // Only draw non-spawn/death particles in this pass
              if (pp.type !== "spawn" && pp.type !== "death") {
                pp.draw();
              }
              if (pp.life <= 0) {
                particles.splice(i, 1);
              }
            }
            spawnParticles(p.x + p.w / 2, p.y + p.h / 2, 1, 'masterParticles', 4);
            fill(255, 0, 0);
            noStroke();
            rect(p.x, p.y, p.w, p.h, 8);
            visualHealth = lerp(visualHealth, p.health, 0.35);
            fill(90, 10, 80);
            rect(170, 545, 260, 40, 10);
            fill(0, 0, 0, 150);
            rect(175, 550, 250, 30, 10);
            fill(255 - visualHealth * 2, visualHealth * 2, 0);
            rect(175, 550, visualHealth * 2.5, 30, 10);
            fill(0, 0, 0, bossScreenOpacity);
            noStroke();
            rect(0, 0, 600, 600);

            // Game Over Screen
            if (p.gameOver) {
              if (deathAnimationFrames > 20 && deathAnimationFrames < 100) {
                if (shakeIntensity > 1) {
                  shakeX = random(-shakeIntensity, shakeIntensity);
                  shakeY = random(-shakeIntensity, shakeIntensity);
                }
                shakeIntensity -= 0.6;
              }
              noStroke();
              fill(0);
              ellipse(300, 300, innerCircleSize - 1, innerCircleSize - 1);
              innerCircleSize = deathAnimationFrames * 50;
              if (deathAnimationFrames > 100) {
                // Text Fade-in
                stroke(234, 7, 7);
                arcSize(40);
                arcAlign(CENTER);
                arcText("Game Over", 320, 260);
                noStroke();
                fill(0, 0, 0, 255 - gameOverTextTransparency);
                rect(0, 0, 600, 600);
                arcSize(19);
                stroke(41, 230, 224);
                arcText(currentDeathMessage, 310, 325);
                fill(0, 0, 0, 510 - gameOverTextTransparency);
                noStroke();
                rect(0, 300, 600, 100);
                stroke(0, 255, 191);
                arcSize(20);
                arcText("- Click to Continue -", 300, 450);
                fill(0, 0, 0, 800 - gameOverTextTransparency);
                noStroke();
                rect(0, 420, 600, 50);
                arcAlign(LEFT);
              }

              // Draw skull
              pushMatrix();
              translate(300 + shakeX, 300 + shakeY);
              rotate(-5);
              fill(255, 255, 255, skullTrans);
              drawSkull(0, 0, skullSize * 1.5);
              fill(0, 0, 0, skullTrans * 2);
              drawEye(0, 0, skullSize * 1.5);
              popMatrix();
              if (deathAnimationFrames < 100 && skullTrans < 255) {
                skullTrans += 10;
              }
              if (deathAnimationFrames < 100 && skullSize > 200) {
                skullSize /= 1.3;
              }
              if (deathAnimationFrames > 120) {
                skullSize += 10;
                skullTrans -= 10;
                gameOverTextTransparency += 5;
              }
              deathAnimationFrames++;
            }
          }
          // phase 3 changes everything you know about dash parkour
        }

        // Drop-Down Menu
        dropDownY = lerp(dropDownY, dropDownGoToY, 0.1);
        if (round(dropDownY) !== dropDownInitialY) {
          if (scene === "Play" && lvlUnlock === 2) {
            dropDownMenu(100, dropDownY, 400, 'Level Vouchers', '   Level vouchers are the\ncurrency used in the\nchallenge. You will\nreceive some after every\nnon-boss level.\n   Go to the SHOP to buy\nmany cool skins and\ncostumes!');
          }
          if (currentLevel === 3) {
            dropDownMenu(100, dropDownY, 400, 'Boss Fights', '   Throughout the Parkour\nChallenge, you will come\nacross multiple Bosses.\n\n    Defeat them by dodging\ntheir attacks, and then\nrunning into them when they\nbecome tired.');
          }
        }
        if (cutsceneIs) {
          cFrames++;
          if (cutsceneName === "intro") {
            if (cFrames === 1) {
              ctOpacity = 255;
            }
            arcAlign(LEFT);
            // Scene 1 "One day..."
            if (cFrames <= 250) {
              pushMatrix();
              background(0); // black background

              // 1 - Fade in the first text at frames 10-70
              if (cFrames > 10 && cFrames <= 70) {
                ctOpacity -= 4.25;
              }
              // 2 - Fade in the second text at frames 80-140
              if (cFrames > 80 && cFrames <= 140) {
                ctOpacity2 -= 4.25;
              }

              // 3 - Shake the screen starting at frame 170
              if (cFrames > 170) {
                translate(random(-1.2, 1.2), random(-1.2, 1.2));
              }

              // 4 - Fade out both texts at frames 210-250
              if (cFrames > 210) {
                ctOpacity += 6.375;
                ctOpacity2 += 6.375;
              }

              // Scene Text
              stroke(255, 255, 255);
              arcSize(20);
              arcText('One day...', 200, 250);
              stroke(255, 255, 255);
              arcText('A legend was made...', 90, 310);

              // Rects to cover text (for smooth fade-in)
              fill(0, 0, 0, ctOpacity);
              noStroke();
              rect(190, 220, 220, 60);
              fill(0, 0, 0, ctOpacity2);
              rect(80, 280, 470, 60);

              // This is for the camera shake
              popMatrix();
            }

            // Scene 2 (parkour master descends)
            if (cFrames > 250 && cFrames <= 405) {
              pushMatrix();
              background(20); // almost black background

              // 1 - Fade in at frames 250-300
              if (cFrames > 250 && cFrames <= 275) {
                ctOpacity -= 10.2;
              }

              // 2 - Parkour Master descends at frames 300-375
              if (cFrames > 265 && cFrames <= 340) {
                cutsceneY[0] += 4;
              }

              // 3 - Fade out at frame 390
              if (cFrames > 380) {
                ctOpacity += 10.2;
              }

              //Show the Parkour Master
              parkMast(300, cutsceneY[0] + sin(frameCount * 3) * 5, 175);

              // Slightly transparent rect to make Parkour Master have more of a shadow effect
              noStroke();
              fill(10, 10, 10, 180);
              rect(0, 0, 600, 600);

              // Mist effect
              // Large circles
              fill(255, 255, 255, 60);
              ellipse(110, 395, 200, 50);
              ellipse(490, 405, 200, 50);
              ellipse(330, 450, 200, 50);
              // Medium circles
              fill(255, 255, 255, 40);
              ellipse(190, 430, 150, 40);
              ellipse(590, 420, 150, 40);
              ellipse(70, 460, 150, 40);
              ellipse(470, 470, 150, 40);
              // Small circles
              fill(255, 255, 255, 25);
              ellipse(470, 425, 100, 30);
              ellipse(330, 390, 100, 30);
              ellipse(200, 480, 100, 30);
              fill(0, 0, 0, ctOpacity);
              rect(0, 0, 600, 600);
              popMatrix();
            }

            // Scene 3 "The famous Parkour Master..."
            if (cFrames > 405 && cFrames <= 635) {
              background(0); // black background

              // 1 - Fade in the first text at frames 405-465
              if (cFrames > 405 && cFrames <= 465) {
                ctOpacity -= 4.25;
              }
              // 2 - Fade in the second text at frames 486-546
              if (cFrames > 485 && cFrames <= 545) {
                ctOpacity2 -= 4.25;
              }

              // 4 - Fade out both texts at frames 596 - 636
              if (cFrames > 595) {
                ctOpacity += 6.375;
                ctOpacity2 += 6.375;
              }

              // Scene Text
              stroke(255, 255, 255);
              arcSize(17);
              arcText('The Parkour Master created...', 30, 250);
              stroke(255, 255, 255);
              arcText('The ultimate challenge', 100, 310);

              // Rects to cover text (for smooth fade-in)
              fill(0, 0, 0, ctOpacity);
              noStroke();
              rect(20, 220, 565, 60);
              fill(0, 0, 0, ctOpacity2);
              rect(80, 280, 470, 60);
            }

            // Scene 4 (ground + lava crashes into place)
            if (cFrames > 635 && cFrames <= 750) {
              if (cFrames === 636) {
                ctOpacity = 0;
              }
              background(20); // almost black background

              pushMatrix();

              // 1 - Move in first set of platforms
              if (platXChange1 < 0) {
                platXChange1 += 20;
              }
              // 2 - Move in second set of platforms
              if (platXChange2 < 0 && cFrames > 650) {
                platXChange2 += 20;
              }

              // 3 - Shake the screen
              if (cFrames > 670) {
                translate(random(-3, 3), 0);
              }

              // Smallest ground
              fill(30);
              rect(190 - platXChange2, 340, 210, 23, 20);
              rect(320 - platXChange1, 180, 210, 23, 20);
              // Small ground
              fill(40);
              rect(-10 + platXChange1, 230, 210, 30, 20);
              rect(380 + platXChange2, 300, 210, 30, 20);
              rect(30 - platXChange2, 400, 210, 30, 20);
              // Medium ground
              fill(60);
              rect(70 + platXChange2, 280, 210, 45, 20);
              rect(430 - platXChange1, 240, 210, 45, 20);
              drawLavaBody(530 - platXChange1, 240, 25, 20);
              // Large ground
              fill(80);
              rect(-30 + platXChange1, 350, 190, 70, 20);
              rect(360 - platXChange2, 450, 280, 70, 20);
              drawLavaBody(10 + platXChange1, 350, 35, 30);
              // Largest up-close ground
              fill(100);
              rect(-30 + platXChange2, 450, 350, 120, 20);
              rect(410 - platXChange1, 360, 320, 120, 20);
              drawLavaBody(100 + platXChange2, 450, 60, 50);
              drawLavaBody(580 - platXChange1, 360, 60, 50);
              popMatrix();

              // 4 - Fade screen to white
              if (cFrames > 695 && ctOpacity < 255) {
                ctOpacity += 5;
              }
              fill(255, 255, 255, ctOpacity);
              rect(0, 0, 600, 600); // white overlay rect
            }

            // Scene 5 "The hardest parkour couse..."
            if (cFrames > 750 && cFrames <= 1125) {
              if (cFrames === 751) {
                ctOpacity2 = 0;
              }

              // 1 - Fade out the white overlay rect
              if (cFrames > 750 && cFrames <= 810) {
                ctOpacity -= 4.25;
              }
              var w;
              // 2 - First background
              if (cFrames > 750 && cFrames <= 875) {
                w = 1;
              }

              // 3 - Fade in text
              if (cFrames > 800 && cFrames <= 860) {
                ctOpacity2 += 4.25;
              }

              // 4 - Second background
              if (cFrames > 875 && cFrames <= 1000) {
                w = 2;
              }

              // 5 - Third background
              if (cFrames > 1000 && cFrames <= 1125) {
                w = 3;
              }

              // 6 - Fade in a black overlay rect
              if (cFrames > 1065 && cFrames <= 1125) {
                ctOpacity += 4.25;
              }
              worldBackground(-frameCount / 5, 0, w);

              // Obstacle challenge
              // Trampoline
              stroke(200);
              strokeWeight(7);
              line(1200 + cutsceneX[0], 405, 1200 + cutsceneX[0], 420);
              line(1300 + cutsceneX[0], 405, 1300 + cutsceneX[0], 420);
              stroke(0);
              line(1200 + cutsceneX[0], 405, 1300 + cutsceneX[0], 405);
              fill(150); // Grounds
              noStroke();
              rect(-60 + cutsceneX[0], 440, 380, 120, 20);
              rect(460 + cutsceneX[0], 390, 380, 170, 20);
              rect(960 + cutsceneX[0], 420, 380, 170, 20);
              rect(1440 + cutsceneX[0], 370, 380, 170, 20);

              // Lavas
              drawLavaBody(100 + cutsceneX[0], 440, 100, 70);
              drawLavaBody(700 + cutsceneX[0], 390, 90, 90);
              drawLavaBody(1550 + cutsceneX[0], 370, 100, 90);

              // Spikes
              fill(180);
              triangle(550 + cutsceneX[0], 370, 560 + cutsceneX[0], 390, 540 + cutsceneX[0], 390);
              triangle(570 + cutsceneX[0], 370, 580 + cutsceneX[0], 390, 560 + cutsceneX[0], 390);
              triangle(590 + cutsceneX[0], 370, 600 + cutsceneX[0], 390, 580 + cutsceneX[0], 390);
              triangle(610 + cutsceneX[0], 370, 620 + cutsceneX[0], 390, 600 + cutsceneX[0], 390);
              triangle(1100 + cutsceneX[0], 400, 1110 + cutsceneX[0], 420, 1090 + cutsceneX[0], 420);
              triangle(1150 + cutsceneX[0], 400, 1160 + cutsceneX[0], 420, 1140 + cutsceneX[0], 420);
              cutsceneX[0] -= 3;

              // Scene Text
              arcSize(17);
              stroke(0, 0, 0, ctOpacity2);
              arcText('The hardest parkour course', 60, 250);
              stroke(0, 0, 0, ctOpacity2);
              arcText('The world had EVER seen', 70, 310);
              noStroke();
              if (cFrames <= 810) {
                fill(255, 255, 255, ctOpacity);
              }
              if (cFrames > 1065) {
                fill(0, 0, 0, ctOpacity);
              }
              rect(0, 0, 600, 600); // white/black overlay rect
            }

            // Scene 6 "And he placed three Guards..." 
            if (cFrames > 1125 && cFrames <= 1325) {
              // 1 - Fade in text
              if (cFrames > 1125 && cFrames <= 1185) {
                ctOpacity -= 4.25;
              }
              // 2 - Fade out text
              if (cFrames > 1265 && cFrames <= 1325) {
                ctOpacity += 4.25;
              }
              background(0);

              // Scene Text
              stroke(255);
              arcSize(17);
              arcText('And he placed three Guards', 60, 250);
              stroke(255);
              arcText('To defend it', 190, 310);

              // Rects to cover text (for smooth fade-in)
              fill(0, 0, 0, ctOpacity);
              noStroke();
              rect(20, 220, 565, 60);
              fill(0, 0, 0, ctOpacity);
              rect(80, 280, 470, 60);
            }

            // Scene 7 (each guard falls onto platform)
            if (cFrames > 1325 && cFrames <= 1685) {
              bossXShift = 0;

              // 1 - Fade in scene
              if (cFrames > 1325 && cFrames <= 1355) {
                ctOpacity -= 8.5;
              }

              // 2 - Zoom in on Diamond Guard
              if (cFrames > 1405 && cFrames <= 1475) {
                cutsceneBckCol[2] = lerp(cutsceneBckCol[2], 60, 0.2);
                cutsceneS = lerp(cutsceneS, 1.4, 0.1);
                cutsceneX[0] = lerp(cutsceneX[0], 100, 0.1);
                cutsceneY[0] = lerp(cutsceneY[0], -240, 0.1);
              }

              // 3 - Zoom in on Emerald Guard
              else if (cFrames > 1475 && cFrames <= 1545) {
                cutsceneBckCol[1] = lerp(cutsceneBckCol[1], 40, 0.2);
                cutsceneBckCol[2] = lerp(cutsceneBckCol[2], 0, 0.1);
                cutsceneS = 1.4;
                cutsceneX[0] = lerp(cutsceneX[0], -330, 0.1);
                cutsceneY[0] = lerp(cutsceneY[0], -200, 0.1);
              }

              // 4 - Zoom in on Ruby Guard
              else if (cFrames > 1545) {
                cutsceneBckCol[0] = lerp(cutsceneBckCol[0], 60, 0.2);
                cutsceneBckCol[1] = lerp(cutsceneBckCol[1], 0, 0.1);
                cutsceneS = 1.4;
                cutsceneX[0] = lerp(cutsceneX[0], -110, 0.1);
                cutsceneY[0] = lerp(cutsceneY[0], 40, 0.1);
              } else {
                cutsceneS = 1;
                cutsceneX[0] = 0;
                cutsceneY[0] = 0;
              }

              // 5 - Fade out scene
              if (cFrames > 1595 && cFrames <= 1625) {
                ctOpacity += 8.5;
              }

              // Dynamic background
              background(cutsceneBckCol[0], cutsceneBckCol[1], cutsceneBckCol[2]);

              // Draw guards on platforms
              pushMatrix();
              translate(cutsceneX[0], cutsceneY[0]); // shift
              scale(cutsceneS); // scale

              var obj = {
                vx: 0
              };
              drawGuard(300, 190 + sin(frameCount) * 5, 130, guardVariant[2], obj); // Ruby Guard
              fill(150);
              rect(190, 270, 220, 300, 20);
              drawGuard(450, 340 - sin(frameCount * 1.5) * 5, 130, guardVariant[1], obj); // Emerald Guard
              fill(180);
              rect(340, 420, 220, 300, 20);
              drawGuard(150, 360 + sin(frameCount * 2) * 5, 130, guardVariant[0], obj); // Diamond Guard
              fill(180);
              rect(40, 440, 220, 300, 20);
              popMatrix();
              fill(0, 0, 0, 140); // Darkening rect
              rect(0, 0, 600, 600);
              fill(0, 0, 0, ctOpacity); // Scene transition
              rect(0, 0, 600, 600);
            }

            // Scene 8 "The world's greatest players tried
            if (cFrames > 1685 && cFrames <= 2030) {
              if (cFrames === 1686) {
                cutsceneY[0] = 380;
                cutsceneY[1] = 380;
                cutsceneY[2] = 380;
              }

              // 1 - Fade in text & course
              if (cFrames > 1685 && cFrames <= 1745) {
                ctOpacity -= 4.25;
              }

              // 2 - Scroll the Obstacle course
              cutsceneX[1] -= 3;

              // 3 - Fade out text & course
              if (cFrames > 1970 && cFrames <= 2030) {
                ctOpacity += 4.25;
              }
              worldBackground(-frameCount / 2, 0, 1); // Area 1 bckg

              // Scene Text
              stroke(0);
              arcSize(17);
              arcText('The world\'s greatest', 110, 150);
              stroke(0);
              arcText('players tried', 190, 200);

              // Obstacle Course
              fill(150);
              noStroke();
              rect(-15 + cutsceneX[1], 420, 1000, 400, 15);
              rect(1150 + cutsceneX[1], 270, 1000, 400, 15);
              drawLavaBody(500 + cutsceneX[1], 420, 120, 100);

              // Spikes
              fill(180);
              triangle(750 + cutsceneX[1], 400, 760 + cutsceneX[1], 420, 740 + cutsceneX[1], 420);
              triangle(770 + cutsceneX[1], 400, 780 + cutsceneX[1], 420, 760 + cutsceneX[1], 420);
              triangle(790 + cutsceneX[1], 400, 800 + cutsceneX[1], 420, 780 + cutsceneX[1], 420);
              triangle(810 + cutsceneX[1], 400, 820 + cutsceneX[1], 420, 800 + cutsceneX[1], 420);

              // Players
              if (cutsceneX[1] === -459) {
                spawnParticles(80, cutsceneY[0] + 20, 20, "deathG", 5);
              }
              if (cutsceneX[1] > -460) {
                fill(0, 220, 0); // GREEN
                rect(60, cutsceneY[0], 40, 40, 10);
                fill(255);
                ellipse(95, cutsceneY[0] + 15, 15, 15);
                ellipse(75, cutsceneY[0] + 15, 15, 15);
                fill(0);
                ellipse(97, cutsceneY[0] + 15, 7, 7);
                ellipse(77, cutsceneY[0] + 15, 7, 7);
              }
              if (cutsceneX[1] === -645) {
                spawnParticles(150, cutsceneY[0] + 20, 20, "deathY", 5);
              }
              if (cutsceneX[1] > -645) {
                fill(255, 220, 0); // YELLOW
                rect(130, cutsceneY[1], 40, 40, 10);
                fill(255);
                ellipse(165, cutsceneY[1] + 15, 15, 15);
                ellipse(145, cutsceneY[1] + 15, 15, 15);
                fill(0);
                ellipse(167, cutsceneY[1] + 15, 7, 7);
                ellipse(147, cutsceneY[1] + 15, 7, 7);
              }
              fill(0, 230, 200); // BLUE
              rect(200, cutsceneY[2], 40, 40, 10);
              fill(255);
              ellipse(235, cutsceneY[2] + 15, 15, 15);
              ellipse(215, cutsceneY[2] + 15, 15, 15);
              fill(0);
              ellipse(237, cutsceneY[2] + 15, 7, 7);
              ellipse(217, cutsceneY[2] + 15, 7, 7);

              // Loops through each player attributes and tells what to do when jumping
              for (var i = 0; i < cutsceneY.length; i++) {
                if (cutsceneIsJump[i]) {
                  cutsceneY[i] += cutsceneJumpVel[i];
                  cutsceneJumpVel[i] += 0.4;
                }
                if ((cutsceneY[i] > 380 || cutsceneJumpVel[i] > 10) && cutsceneX[1] > -690) {
                  cutsceneY[i] = 380;
                  cutsceneIsJump[i] = false;
                  cutsceneJumpVel[i] = -10;
                }
              }
              if (cutsceneX[1] === -300) {
                cutsceneIsJump[0] = true;
              } // Green jumps

              if (cutsceneX[1] === -330) {
                cutsceneIsJump[1] = true;
              } // Yellow jumps
              if (cutsceneX[1] === -495) {
                cutsceneIsJump[1] = true;
              }
              if (cutsceneX[1] === -255) {
                cutsceneIsJump[2] = true;
              } // Blue jumps
              if (cutsceneX[1] === -480) {
                cutsceneIsJump[2] = true;
              }
              if (cutsceneX[1] === -690) {
                cutsceneIsJump[2] = true;
              }

              // Fade-in black rect
              fill(0, 0, 0, ctOpacity);
              rect(0, 0, 600, 600);
              for (var i = particles.length - 1; i >= 0; i--) {
                var pp = particles[i];
                pp.update();
                pp.draw();
                if (pp.life <= 0) {
                  particles.splice(i, 1);
                }
              }
            }

            // Scene 9 "But no one could conquer it"
            if (cFrames > 2030 && cFrames <= 2210) {
              // 1 - Fade in text
              if (cFrames > 2030 && cFrames <= 2090) {
                ctOpacity -= 4.25;
              }
              if (cFrames > 2150 && cFrames <= 2210) {
                ctOpacity += 4.25;
              }
              background(0);

              // Scene Text
              stroke(255);
              arcSize(17);
              arcText('But no one could conquer it', 50, 290);

              // Rects to cover text (for smooth fade-in)
              fill(0, 0, 0, ctOpacity);
              noStroke();
              rect(20, 260, 565, 60);
            }

            // Scene 10 "But Dash refused to give up"
            if (cFrames > 2210 && cFrames <= 2470) {
              // 1 - Fade in scene
              if (cFrames > 2260 && cFrames <= 2320) {
                ctOpacity -= 4.25;
              }

              // 2 - Fade out text
              if (cFrames > 2410 && cFrames <= 2470) {
                ctOpacity += 4.25;
              }
              background(20);

              // Scene Text
              stroke(255);
              arcSize(17);
              arcText('However...', 210, 150);
              arcText('Dash refused to give up', 85, 220);
              fill(70);
              noStroke();
              rect(100, 460, 400, 200, 20);
              fill(150, 0, 0);
              rect(270, 400, 60, 60, 15);

              // Rects to cover text (for smooth fade-in)
              noStroke();
              fill(0, 0, 0, ctOpacity);
              rect(0, 0, 600, 600);
            }

            // Scene 11 (close up of dash)
            if (cFrames > 2470 && cFrames <= 2680) {
              if (cFrames > 2470 && cFrames <= 2530) {
                ctOpacity -= 4.25;
              }
              if (cFrames > 2620 && cFrames <= 2680) {
                ctOpacity += 4.25;
              }
              worldBackground(-frameCount / 5, 0, 1); // Area 1 bckg

              noStroke();
              fill(255, 0, 0);
              rect(100, 300, 100, 100, 25);
              fill(255);
              ellipse(180, 335, 35, 35);
              ellipse(130, 335, 35, 35);
              fill(0);
              ellipse(185, 335, 20, 20);
              ellipse(135, 335, 20, 20);
              noFill();
              stroke(0);
              strokeWeight(5);
              arc(160, 370, 40, 30, 10, 170);
              line(120, 310, 150, 325);
              line(190, 310, 165, 325);
              fill(150);
              noStroke();
              rect(-10, 400, 300, 200, 10);

              // Rects to cover text (for smooth fade-in)
              noStroke();
              fill(0, 0, 0, ctOpacity);
              rect(0, 0, 600, 600);
            }

            // Scene 12 "Can he complete it?"
            if (cFrames > 2680 && cFrames <= 2950) {
              if (cFrames === 2681) {
                ctOpacity = 255;
              }

              // 1 - Fade in each text separately
              if (cFrames > 2680 && cFrames <= 2740) {
                ctOpacity -= 4.25;
              }
              if (cFrames > 2770 && cFrames <= 2830) {
                ctOpacity2 -= 4.25;
              }

              // 2 - Fade out both texts together
              if (cFrames > 2890 && cFrames <= 2950) {
                ctOpacity += 4.25;
                ctOpacity2 += 4.25;
              }
              background(0);

              // Scene Text
              stroke(255);
              arcSize(17);
              arcText('Can he complete it?', 120, 220);
              arcText('Can he become', 170, 310);
              arcText('the Parkour Champion?', 100, 360);

              // Rects to cover text (for smooth fade-in)
              noStroke();
              fill(0, 0, 0, ctOpacity);
              rect(20, 200, 565, 60);
              fill(0, 0, 0, ctOpacity2);
              rect(20, 290, 565, 90);
            }

            // Scene 13 "Only time will tell..."
            if (cFrames > 2950 && cFrames <= 3160) {
              // 1 - Fade in the text
              if (cFrames > 2950 && cFrames <= 3040) {
                ctOpacity -= 2.83334;
              }

              // 2 - Fade out both texts together
              if (cFrames > 3100 && cFrames <= 3160) {
                ctOpacity += 4.25;
              }
              background(0);

              // Scene Text
              stroke(255);
              arcSize(17);
              arcText('Only time will tell...', 120, 290);

              // Rects to cover text (for smooth fade-in)
              noStroke();
              fill(0, 0, 0, ctOpacity);
              rect(20, 270, 565, 60);
            }

            // end
            if (cFrames > 3160) {
              transitionActive = true;
              sceneToTransition = "title";
            }
          } else if (cutsceneName === "masterX") {
            currentSkin = 0;
            world = 4;
            // Scene 1 - "The (Almost) End"
            if (cFrames <= 250) {
              p.vx = -10;
              if (cutsceneX[0] < 180) {
                cutsceneX[0] += 0.8;
              }
              pushMatrix();
              if (cFrames > 195) {
                translate(random(-8, 8), random(-8, 8));
              }
              if (cFrames > 200) {
                cutsceneY[0] += 8;
              } else {
                spawnParticles(160 + cutsceneX[0], 300, 2, 'crown', 3);
              }
              worldBackground(-frameCount / 3, 100, 4);
              parkMast(50 + cutsceneX[0], 300, 180);
              p.x = 450;
              p.y = 360;
              p.w = 80;
              p.h = 80;
              p.mouth = "open";
              p.draw();
              fill(150);
              noStroke();
              rect(-10, 400, 620, 170, 0);
              for (var i = particles.length - 1; i >= 0; i--) {
                var pp = particles[i];
                pp.update();
                pp.draw();
                if (pp.life <= 0) {
                  particles.splice(i, 1);
                }
              }
              drawCrown(160 + cutsceneX[0], 300 + cutsceneY[0], 80, 40);
              popMatrix();

              // Confetti
              for (var i = 0; i < confetti.length; i++) {
                confetti[i].update();
                confetti[i].draw();
              }
              rectMode(LEFT);
            }

            // Scene 2 - "Disaster"
            else if (cFrames <= 400) {
              spawnXBullet();
              translate(random(-4, 4), random(-4, 4));
              worldBackground(frameCount * 2, 100, 4);

              // This is for the laser effect
              for (var i = xBullets.length - 1; i >= 0; i--) {
                var b = xBullets[i];
                b.update();
                b.draw();

                // Removes the bullet if it goes off the right side (600), top (0), or bottom (600)
                if (b.x > 600 || b.y < 0 || b.y > 600) {
                  xBullets.splice(i, 1);
                }
              }
              areaXPortal(50, 300, 400, -frameCount * 10);
              areaXPortal(50, 300, 400, -frameCount * 10 + 50);
            }

            // Scene 3 - "Dash and Dodge"
            else if (cFrames <= 650) {
              worldBackground(-frameCount / 3, 100, 4);
              translate(random(-4, 4), random(-4, 4));
              cutsceneX[0] = 0;
              p.vx = sin(frameCount) * 10;
              fill(150);
              noStroke();
              rect(-10, 250, 620, 250);
              parkMast(300 - sin(frameCount) * 200, 200, 160);
              p.x = 300 + sin(frameCount * 3) * 200;
              p.y = 400;
              p.w = 70;
              p.h = 70;
              p.hurtFrames = 1;
              p.draw();
              if (frameCount % 10 === 0) {
                spawnXBullet();
              }
              // This is for the laser effect
              for (var i = xBullets.length - 1; i >= 0; i--) {
                var b = xBullets[i];
                b.update();
                b.draw();

                // Removes the bullet if it goes off the right side (600), top (0), or bottom (600)
                if (b.x > 600 || b.y < 0 || b.y > 600) {
                  xBullets.splice(i, 1);
                }
              }
            }

            // Scene 4 - "Slowly Sneaking"
            else if (cFrames <= 850) {
              worldBackground(-frameCount / 10, 100, 4);
              p.vx = 5;
              fill(150);
              noStroke();
              rect(-10, 330, 620, 150);
              cutsceneX[0] -= 0.7;
              stroke(random(200, 250), 0, 0);
              strokeWeight(10);
              line(610 + cutsceneX[0], 300, 690 + cutsceneX[0], 300);
              p.x = 240 + sin(cFrames * 0.5) * 50;
              p.y = 300;
              p.w = 70;
              p.h = 70;
              p.hurtFrames = 1;
              p.draw();
            }

            // Scene 5 - "A Master but a Friend"
            else if (cFrames <= 950) {
              worldBackground(-frameCount / 10, 100, 4);
              fill(150);
              noStroke();
              rect(-10, 450, 620, 150);
              cutsceneX[0] = 0;
              pushMatrix();
              translate(-100 + sin(frameCount * 0.5) * 50, 0);
              parkMast(300, 300, 350);
              fill(0);
              ellipse(300, 345, 80, 40);
              stroke(0);
              noFill();
              arc(230, 215, 140, 50, 30, 70);
              arc(370, 215, 140, 50, 110, 150);
              popMatrix();
            }

            // Scene 6 - "Parkour Protector"
            else if (cFrames <= 1040) {
              worldBackground(-frameCount / 10, 100, 4);
              cutsceneX[0]++;
              fill(150);
              noStroke();
              rect(-10, 350, 620, 150);
              parkMast(0 + cutsceneX[0] * 4, 260 + cutsceneX[0], 170);
              p.x = 250;
              p.y = 400;
              p.w = 70;
              p.h = 70;
              p.hurtFrames = 1;
              p.draw();
              stroke(random(200, 250), 0, 0);
              strokeWeight(10);
              line(500 - cutsceneX[0], 400, 580 - cutsceneX[0], 400);
            }

            // Scene 7 - "The Sacrifice"
            else if (cFrames <= 1200) {
              worldBackground(-frameCount / 3, 100, 4);
              cutsceneX[1] += 15;
              translate(random(-8, 8), random(-8, 8));
              fill(150);
              noStroke();
              rect(-10, 350, 620, 150);
              p.x = 270 - cutsceneX[1] * 0.6;
              p.y = 350;
              p.w = 90;
              p.h = 90;
              p.hurtFrames = 1;
              p.draw();
              fill(random(200, 255), 0, 0);
              ellipse(400, 350, 200 + cutsceneX[1], 200 + cutsceneX[1]);
              fill(random(220, 255));
              ellipse(400, 350, 150 + random(-5, 5) + cutsceneX[1] * 0.75, 150 + random(-5, 5) + cutsceneX[1] * 0.75);
            }

            // Scene 8 - "A Realization"
            else if (cFrames <= 1400) {
              worldBackground(-frameCount / 3, 100, 4);
              ctOpacity2 -= 1.5;
              fill(150);
              noStroke();
              rect(-10, 350, 620, 250);
              p.x = 160;
              p.y = 340;
              p.w = 60;
              p.h = 60;
              p.mouth = 'closed';
              p.draw();
              noStroke();
              fill(255, 0, 0);
              rect(p.x - p.w / 3, p.y + p.h / 10, p.w / 1.5, p.h / 3);
              fill(0);
              ellipse(p.x, p.y + p.h / 4, 15, 15);
              masterX(800, 200, 1000);
              noStroke();
              fill(255, 255, 255, ctOpacity2);
              rect(0, 0, 600, 600);
            }

            // Scenes 9-11 - "An Unfriendly Greeting"
            else if (cFrames <= 1450) {
              worldBackground(-frameCount / 3, 100, 4);
              fill(150);
              noStroke();
              rect(-10, 450, 620, 250);
              masterX(300, -100, 1000);
            } else if (cFrames <= 1500) {
              worldBackground(-frameCount / 3, 100, 4);
              fill(150);
              noStroke();
              rect(-10, 450, 620, 250);
              masterX(0, 100, 1000);
            } else if (cFrames <= 1650) {
              worldBackground(-frameCount / 3, 100, 4);
              cutsceneY[0] = 0; // for next scene

              areaXPortal(300, 350, 100, -frameCount * 3);
              fill(150);
              noStroke();
              rect(-10, 450, 620, 250);
              masterX(480, 300, 450);

              /// Top & bottom square banners
              rectMode(CENTER);
              noStroke();
              for (var i = 0; i < guardBannerSquares.length; i++) {
                var s = guardBannerSquares[i];
                pushMatrix();
                translate(s.x, s.y + sin(frameCount + i * 50) * 10);
                rotate(s.rot);
                if (s.col === 0) {
                  fill(0); // black
                } else if (s.col === 1) {
                  fill(random(200, 220), 0, 0); // dark red
                }
                rect(0, 0, s.size, s.size, s.size / 30);
                popMatrix();
              }
              rectMode(LEFT);
              pushMatrix();
              translate(15 + random(-1, 1), 270 + random(-1, 1));
              rotate(-2);
              arcSize(30);
              stroke(255, 0, 0);
              arcAlign(LEFT);
              arcText('MASTER', 0, 0);
              arcSize(35);
              stroke(255);
              arcText('X', 290, 0);
              popMatrix();
            } // Master X

            // Scene 12 - "The Portal to the World"
            else if (cFrames <= 1800) {
              worldBackground(-frameCount / 3, 100, 4);
              cutsceneY[0] -= 2;
              areaXPortal(300, 150, 400, -frameCount * 2);
              masterX(300, 650 + cutsceneY[0], 100);
            }

            // Scene 13 - "A Masterful Gift"
            else if (cFrames <= 1950) {
              worldBackground(-frameCount / 3, 100, 4);
              cutsceneY[0] = 0;
              cutsceneY[1]--;
              fill(150);
              noStroke();
              rect(-30, 400, 500, 250, 30);
              spawnParticles(p.x, p.y, 3, 'masterParticles', 4);
              for (var i = particles.length - 1; i >= 0; i--) {
                var pp = particles[i];
                pp.update();
                pp.draw();
                if (pp.life <= 0) {
                  particles.splice(i, 1);
                }
              }
              p.x = 160 + sin(frameCount * 2) * 60;
              p.y = 370 + cutsceneY[1];
              p.w = 60;
              p.h = 60;
              p.draw();
              noStroke();
              fill(255, 0, 0);
              rect(p.x - p.w / 3, p.y + p.h / 10, p.w / 1.5, p.h / 3);
              fill(0);
              ellipse(p.x, p.y + p.h / 4, 15, 15);
            }

            // Scene 14 - "Into the Unkown"
            else if (cFrames <= 2150) {
              worldBackground(-frameCount / 3, 100, 4);
              cutsceneX[0] += 1.5;
              cutsceneX[1] += 2;
              cutsceneY[1]--;
              cutsceneY[0] = 0;
              areaXPortal(650, 250, 500, -frameCount * 4);
              spawnParticles(p.x, p.y, 3, 'masterParticles', 4);
              for (var i = particles.length - 1; i >= 0; i--) {
                var pp = particles[i];
                pp.update();
                pp.draw();
                if (pp.life <= 0) {
                  particles.splice(i, 1);
                }
              }
              p.x = -30 + cutsceneX[0];
              p.y = 300;
              p.w = 50;
              p.h = 50;
              p.draw();
              masterX(-50 + cutsceneX[1], 650 + cutsceneY[1], 130);
            }

            // Scene 15 - "A Showdown"
            else if (cFrames <= 2350) {
              worldBackground(-frameCount / 3, 100, 4);
              cutsceneY[0] += 2;
              areaXPortal(300, 300, 500 + cutsceneY[0], -frameCount * 4);
              pushMatrix();
              translate(300, 300);
              for (var i = 0; i < stars.length; i++) {
                var s = stars[i];

                // Move the star down the tunnel toward the camera
                s.z -= tunnelSpeed;
                if (s.z <= 0) {
                  s.z = maxZ;
                  s.angle = random(0, 360);
                  s.r = random(60, 140);
                }

                // Perspective scaling factor
                var k = 350;

                // Current projected position (Clossest point of the streak)
                var x1 = cos(s.angle) * s.r * k / s.z;
                var y1 = sin(s.angle) * s.r * k / s.z;

                // Trail position further down the Z axis (Farthest point of the streak)
                var zTrail = s.z + s.len;
                var x2 = cos(s.angle) * s.r * k / zTrail;
                var y2 = sin(s.angle) * s.r * k / zTrail;
                var alpha = 255;

                // Fade in when spawning far away
                if (s.z > maxZ - 100) {
                  alpha = map(s.z, maxZ, maxZ - 100, 0, 255);
                }
                // Fade out right before hitting the camera viewport edge
                if (s.z < 90) {
                  alpha = map(s.z, 90, 0, 255, 0);
                }

                // Render the streak
                stroke(s.c, alpha);
                strokeWeight(s.w);
                line(x1, y1, x2, y2);
              }
              popMatrix();
              spawnParticles(p.x, p.y, 3, 'masterParticles', 4);
              for (var i = particles.length - 1; i >= 0; i--) {
                var pp = particles[i];
                pp.update();
                pp.draw();
                if (pp.life <= 0) {
                  particles.splice(i, 1);
                }
              }
              p.x = 300;
              p.y = 630 - cutsceneY[0] / 2;
              fill(255, 0, 0);
              noStroke();
              rect(p.x - 25, p.y - 25, 50, 50, 10);
              masterX(300, 450 - cutsceneY[0] / 3, 100);
            } else if (cFrames > 2350) {
              cutsceneIs = false;
              finalBossPhase = 3;
              FinalPhase.reset();
              cutsceneReset();
            }

            // Easter Egg!!!!
            // say 'i luvvv ech0'
            // No one will probably ever find this
          } else if (cutsceneName === "intoArea1") {
            currentSkin = 0;
            //cFrames = 750;
            if (cFrames <= 190) {
              background(100, 0, 0);
              spawnParticles(p.x, p.y, 5, 'masterParticles', 5);
              for (var i = particles.length - 1; i >= 0; i--) {
                var pp = particles[i];
                pp.update();
                pp.draw();
                if (pp.life <= 0) {
                  particles.splice(i, 1);
                }
              }
              p.x = 150 + ctOpacity / 2;
              p.y = 360;
              p.w = 80;
              p.h = 80;
              p.hurtFrames = 1;
              p.draw();
              ctOpacity++;
              fill(255);
              for (var i = 0; i < 15; i++) {
                fill(255, 255, 255, i * 2.55 + ctOpacity - 50);
                ellipse(0 + i * 60, 300, 600, 800);
              }
            } else if (cFrames <= 320) {
              worldBackground(frameCount / 3, 100, 1);
              if (round(cutsceneS) < 100) {
                cutsceneS = lerp(cutsceneS, 100, 0.05);
              }
              areaXPortal(100, 200, cutsceneS, -frameCount * 3);
              fill(120);
              rect(250, 350, 400, 100, 20);
              fill(150);
              rect(50, 500, 400, 150, 20);
            } else if (cFrames <= 500) {
              worldBackground(frameCount / 3 + 100, 100, 1);
              areaXPortal(0, 270, 300, -frameCount * 2);
              cutsceneX[0] += 5;
              masterX(-70 + cutsceneX[0], 300 + sin(frameCount * 4) * 15, 100);
              p.vx = 5;
              spawnParticles(p.x, p.y, 1, 'masterParticles', 3);
              for (var i = particles.length - 1; i >= 0; i--) {
                var pp = particles[i];
                pp.update();
                pp.draw();
                if (pp.life <= 0) {
                  particles.splice(i, 1);
                }
              }
              p.x = -300 + cutsceneX[0];
              p.y = 250;
              p.w = 35;
              p.h = 35;
              p.draw();
            } else if (cFrames <= 600) {
              worldBackground(frameCount / 3 + 200, 100, 1);
              var obj = {
                state: "vulnerable"
              };
              cutsceneX[0] = 0;
              cutsceneX[1] += 2;
              masterX(100 + cutsceneX[1], 250 + sin(frameCount * 2) * 10, 200, obj);
            } else if (cFrames <= 700) {
              worldBackground(frameCount / 3, 100, 1);
              p.vx = 10;
              spawnParticles(p.x, p.y, 4, 'masterParticles', 5);
              for (var i = particles.length - 1; i >= 0; i--) {
                var pp = particles[i];
                pp.update();
                pp.draw();
                if (pp.life <= 0) {
                  particles.splice(i, 1);
                }
              }
              if (cFrames > 600) {
                cutsceneX[0] += 10;
              } else {
                cutsceneX[0] += 2;
              }
              p.x = 100 + cutsceneX[0];
              p.y = 300;
              p.w = 80;
              p.h = 80;
              p.draw();
              stroke(0);
              strokeWeight(4);
              line(p.x - p.w / 3, p.y - p.h / 2.5, p.x - p.w / 20, p.y - p.h / 4);
              line(p.x + p.w / 2.5, p.y - p.h / 2.5, p.x + p.w / 10, p.y - p.h / 4);
            } else if (cFrames <= 800) {
              worldBackground(frameCount / 3 + 100, 100, 1);
              cutsceneX[0] = 0;
              cutsceneX[1] = 0;
              if (cutsceneY[0] < 270) {
                cutsceneY[0] += 15;
              }
              p.x = 200;
              p.y = 100 + cutsceneY[0];
              p.w = 60;
              p.h = 60;
              p.hurtFrames = 1;
              p.draw();
              fill(150);
              rect(100, 400, 600, 400, 30);
            } else if (cFrames <= 900) {
              worldBackground(frameCount / 3 + 100, 100, 1);
              cutsceneX[0] += 5;
              p.vx = 5;
              p.x = 50 + cutsceneX[0];
              p.y = 425;
              p.w = 50;
              p.h = 50;
              p.draw();
              fill(150);
              noStroke();
              rect(0, 450, 600, 500, 0);
              var obj = {
                state: "vulnerable"
              };
              masterX(-100 + cutsceneX[0] * 2, 250, 140, obj);
            }
            if (cFrames > 900) {
              finalBossPhase = 4;
              finalChallengeInit = false;
              bossFight = false;
              p.health = 100;
              cutsceneIs = false;
              cutsceneReset();
            }
          } else if (cutsceneName === "victory") {
            currentSkin = 0;
            if (cFrames > 1670) {
              currentSkin = 20;
            }
            p.vy = 0;

            // Scene 1 - "Dashing Dash"
            if (cFrames <= 30) {
              worldBackground(frameCount / 3, 100, 1);
              var obj = {
                state: "vulnerable"
              };
              masterX(450, 300, 200, obj);
              cutsceneX[0] += 10;
              for (var i = 0; i < 5; i++) {
                fill(random(200, 255), 0, 0, i * 40);
                noStroke();
                rect(p.x - p.w * 2 + i * 20, p.y - p.h / 2, 70, 70);
              }
              p.x = 100 + cutsceneX[0];
              p.y = 350;
              p.w = 70;
              p.h = 70;
              p.draw();
            }

            // Scene 2 - "Impact"
            else if (cFrames <= 150) {
              worldBackground(frameCount / 3 + 100, 100, 1);
              cutsceneX[1] += cFrames / 25;
              var obj = {
                state: "vulnerable"
              };
              spawnParticles(350 + cutsceneX[1], 300, 5, 'masterX', 5);
              for (var i = particles.length - 1; i >= 0; i--) {
                var pp = particles[i];
                pp.update();
                pp.draw();
                if (pp.life <= 0) {
                  particles.splice(i, 1);
                }
              }
              masterX(350 + cutsceneX[1], 300, 280, obj);
              p.x = 250 + cutsceneX[1] / 5;
              p.y = 350;
              p.w = 100;
              p.h = 100;
              p.draw();
              stroke(0);
              strokeWeight(4);
              line(p.x - p.w / 3, p.y - p.h / 2.5, p.x - p.w / 20, p.y - p.h / 4);
              line(p.x + p.w / 2.5, p.y - p.h / 2.5, p.x + p.w / 10, p.y - p.h / 4);
            }

            // Scene 3 - "Sealed Evil"
            else if (cFrames <= 300) {
              if (cutsceneS > 0) {
                cutsceneS -= 0.007;
              }
              worldBackground(frameCount / 3 + 100, 100, 1);
              areaXPortal(300, 300, 350 * cutsceneS, -frameCount);
              var obj = {
                state: "vulnerable"
              };
              spawnParticles(300, 700 - cutsceneS * 400, 5, 'masterX', 5);
              for (var i = particles.length - 1; i >= 0; i--) {
                var pp = particles[i];
                pp.update();
                pp.draw();
                if (pp.life <= 0) {
                  particles.splice(i, 1);
                }
              }
              masterX(300, 700 - cutsceneS * 400, 280, obj);
            }

            // Scene 4 - "Regeneration"
            else if (cFrames <= 800) {
              worldBackground(frameCount / 3 + 200, 100, 1);
              if (cutsceneY[0] < 600) {
                cutsceneY[0] += 3;
              }
              if (cFrames > 650 && ctOpacity < 255) {
                ctOpacity += 5;
              }
              fill(150);
              noStroke();
              rect(0, 400, 600, 300);
              p.vx = -10;
              p.x = 450;
              p.y = 350;
              p.w = 100;
              p.h = 100;
              p.draw();
              noStroke();
              fill(255, 0, 0);
              rect(p.x - p.w / 3, p.y + p.h / 10, p.w / 1.5, p.h / 3);
              fill(0);
              ellipse(p.x - p.w / 20, p.y + p.h / 4, 25, 25);
              parkMast(-150, -700 + cutsceneY[0], 1000);
              fill(0, 0, 0, ctOpacity);
              noStroke();
              rect(0, 0, 600, 600);
            }

            // Scene 5 - "Champion's Ceremony"
            else if (cFrames <= 1100) {
              worldBackground(frameCount / 3 + 200, 100, 1);
              ctOpacity -= 5;
              fill(150);
              noStroke();
              rect(100, 300, 400, 100, 15);
              parkMast(200, 235, 100);
              p.vx = -5;
              p.x = 410;
              p.y = 280;
              p.w = 40;
              p.h = 40;
              p.draw();
              drawCrown(260, 230, 40, 20);
              noStroke();
              for (var i = 0; i < crowd.length; i++) {
                fill(crowd[i].c);
                rect(crowd[i].x, crowd[i].y + sin(frameCount * 3 + i * 50) * 50 + 450, 90, 90, 20);
              }
              fill(0, 0, 0, ctOpacity);
              noStroke();
              rect(0, 0, 600, 600);
            }

            // Scene 6 - "Bluey The Circle"
            // here u go romanstarcoder
            else if (cFrames <= 1300) {
              ctOpacity = 0;
              cutsceneX[0] = 0;
              worldBackground(frameCount / 3 + 200, 100, 1);
              fill(150);
              noStroke();
              rect(0, 100, 600, 500);
              RomanStarCodersBlueyTheCircle(100, 200 + sin(frameCount * 3) * 50, 0.7);
              for (var i = 0; i < crowd.length; i++) {
                fill(crowd[i].c);
                rect(crowd[i].x, crowd[i].y + sin(frameCount * 3 + i * 50) * 50 + 240, 90, 90, 20);
              }
            }

            // Parkour MAster Dialogue
            else if (cFrames <= 2150) {
              worldBackground(frameCount / 3 + 200, 100, 1);
              fill(150);
              noStroke();
              rect(-40, 400, 680, 200, 15);
              parkMast(150 + cutsceneX[0], 300, 150);
              p.vx = -5;
              p.x = 430;
              p.y = 370 + cutsceneY[1];
              p.w = 60;
              p.h = 60;
              p.draw();
              if (cFrames <= 1670) {
                drawCrown(240 + cutsceneX[0], 300 + handAnimationY, 60, 30);
              }
              if (cFrames > 1400 && cFrames <= 1510) {
                var startFrame = 1400;
                if (cFrames <= startFrame + 30) {
                  ctOpacity += 8.5;
                } else if (cFrames > startFrame + 80) {
                  ctOpacity -= 8.5;
                }
                stroke(0, 0, 0, ctOpacity);
                arcSize(15);
                arcAlign(CENTER);
                arcText('You are more than\na Champion, Dash.', 300, 100);
              } else if (cFrames > 1510 && cFrames <= 1620) {
                var startFrame = 1510;
                if (cFrames <= startFrame + 30) {
                  ctOpacity += 8.5;
                } else if (cFrames > startFrame + 80) {
                  ctOpacity -= 8.5;
                }
                stroke(0, 0, 0, ctOpacity);
                arcSize(15);
                arcAlign(CENTER);
                arcText('Without you, the\nentire challenge would\nhave crumbled...', 300, 100);
              } else if (cFrames > 1620 && cFrames <= 1730) {
                if (cutsceneX[0] < 180) {
                  cutsceneX[0] += 3;
                }
                var startFrame = 1620;
                if (cFrames <= startFrame + 30) {
                  ctOpacity += 8.5;
                } else if (cFrames > startFrame + 80) {
                  ctOpacity -= 8.5;
                }
                stroke(0, 0, 0, ctOpacity);
                arcSize(15);
                arcAlign(CENTER);
                arcText('Thank you.\nTake this, and\nthe title of Parkour\nChampion.', 300, 100);
              } else if (cFrames > 1730 && cFrames <= 1840) {
                var startFrame = 1730;
                if (cutsceneX[0] > 0) {
                  cutsceneX[0] -= 4;
                }
                if (cFrames <= startFrame + 30) {
                  ctOpacity += 8.5;
                } else if (cFrames > startFrame + 80) {
                  ctOpacity -= 8.5;
                }
                stroke(0, 0, 0, ctOpacity);
                arcSize(15);
                arcAlign(CENTER);
                arcText('Let\'s hear it for\nDash Parkour!!', 300, 100);
              } else if (cFrames > 1890 && cFrames <= 2000) {
                var startFrame = 1890;
                if (cFrames <= startFrame + 30) {
                  ctOpacity += 8.5;
                } else if (cFrames > startFrame + 80) {
                  ctOpacity -= 8.5;
                }
                stroke(0, 0, 0, ctOpacity);
                arcSize(15);
                arcAlign(CENTER);
                arcText('Now that you\'ve\nfinished everything,\nhow well can you\nmaster it?', 300, 100);
              } else if (cFrames > 2000 && cFrames <= 2200) {
                var startFrame = 2000;
                if (cFrames <= startFrame + 30) {
                  ctOpacity += 8.5;
                } else if (cFrames > startFrame + 80) {
                  ctOpacity -= 8.5;
                }
                stroke(0, 0, 0, ctOpacity);
                arcSize(15);
                arcAlign(CENTER);
                arcText('This is a Speedrun Clock.\nGood luck, Dash!', 300, 100);
                var clock = new Clock(260, 280 + handAnimationY + cutsceneY[1], 60);
                // Draw timer
                clock.draw();
                p.mouth = "open";
              }
              if (cFrames > 2060) {
                cutsceneY[1] -= 4;
              }
            }
            if (cFrames > 2150) {
              transitionActive = true;
              sceneToTransition = "title";
              lvlUnlock = 17;
            }
            if (cFrames > 800) {
              // Confetti
              for (var i = 0; i < confetti.length; i++) {
                confetti[i].update();
                confetti[i].draw();
              }
              rectMode(LEFT);
            }
          } else if (cutsceneName === "victory?") {
            //cFrames = 410;

            if (cFrames <= 750) {
              p.vx = 5;
              worldBackground(frameCount / 3, 100, 3);
              if (cFrames > 330) {
                areaXPortal(250, 200, cutsceneS, -frameCount);
                cutsceneS = lerp(cutsceneS, 90, 0.1);
              }
              fill(150);
              noStroke();
              rect(0, 350, 600, 200, 0);
              p.x = 100;
              p.y = 315;
              p.w = 70;
              p.h = 70;
              p.draw();
              if (cutsceneY[0] < 300 && cFrames < 200) {
                cutsceneY[0] += 3;
              }
              if (cFrames > 500) {
                cutsceneY[0] -= 3;
              }
              parkMast(450, -110 + cutsceneY[0], 170);
              if (cFrames > 130 && cFrames <= 280) {
                var startFrame = 130;
                if (cFrames <= startFrame + 30) {
                  ctOpacity += 8.5;
                } else if (cFrames > startFrame + 120) {
                  ctOpacity -= 8.5;
                }
                stroke(0, 0, 0, ctOpacity);
                arcSize(15);
                arcAlign(CENTER);
                arcText('Congratulations,\nbut the challenge is\nnot over.', 300, 50);
              }
              if (cFrames > 400 && cFrames <= 550) {
                var startFrame = 400;
                if (cFrames <= startFrame + 30) {
                  ctOpacity += 8.5;
                } else if (cFrames > startFrame + 120) {
                  ctOpacity -= 8.5;
                }
                stroke(0, 0, 0, ctOpacity);
                arcSize(15);
                arcAlign(CENTER);
                arcText('I will be waiting\nfor you in Area X...', 300, 50);
              }
              if (cFrames > 700) {
                p.mouth = "closed";
                p.w = 40;
                p.h = 40;
                transitionActive = true;
                sceneToTransition = "Play";
                if (lvlUnlock < 13) {
                  lvlUnlock = 13;
                }
              }
            }
          }
          arcAlign(LEFT);
          if (cFrames >= 10000) {
            background(0);
          }
          cRectY[0] = lerp(cRectY[0], 530, 0.2);
          cRectY[1] = lerp(cRectY[1], 0, 0.2);
        } else {
          cRectY[0] = lerp(cRectY[0], 600, 0.2);
          cRectY[1] = lerp(cRectY[1], -70, 0.2);
        }
        fill(0);
        noStroke();
        if (cutsceneIs && (cutsceneName === "intro" || cutsceneName === "masterX" || cutsceneName === "victory" || cutsceneName === "intoArea1")) {
          rect(-30, cRectY[0], 660, 70);
          rect(-60, cRectY[1], 660, 70);
          skipButton(500, 545);
        }

        // Portal animation
        xPortalRot -= 3;

        // Boss Blinking animation
        for (var i = 0; i < bossBlinks.length; i++) {
          updateBossBlink(bossBlinks[i]);
        }

        // Transition
        if (transitionActive) {
          transitionY += transitionSpeed; // move the transition
        }
        if (settings.sceneTransitions && transitionActive) {
          transition(300, transitionY); // draw the transition

          if (transitionY === 135) {
            scene = sceneToTransition;
            worldSubScreen = worldSubScreenTo;
            resetStats(); // reset everything
          }
          if (transitionY >= tranEndY) {
            transitionY = tranStartY;
            transitionActive = false;
          }
        } else if (transitionActive) {
          scene = sceneToTransition;
          worldSubScreen = worldSubScreenTo;
          resetStats(); // reset everything
          transitionActive = false;
          transitionY = tranStartY;
        }
        fadeIntoGame -= fadeIntoGameac;
        fadeIntoGameac *= 1.2;
        fill(0);
        noStroke();
        rect(-10, -10, 700, fadeIntoGame + 350);
      }
    }
    popMatrix();
  };

  // Event handlers [

  // input
  mouseClicked = function mouseClicked() {
    if (currentPage === "Menu") {
      var i = 0;
      for (var cat in config) {
        var y = 165 + i * 90;
        if (worldMouseX > 30 + currentX && worldMouseX < 570 + currentX && worldMouseY > y && worldMouseY < y + 75) {
          currentPage = cat;
          lastPage = cat;
          transitionX = -600;
        }
        i++;
      }
    } else {
      var subX = currentX + 600;

      // back
      if (worldMouseX > 20 + subX && worldMouseX < 120 + subX && worldMouseY < 50) {
        currentPage = "Menu";
        transitionX = 0;
        hoverDescKey = "";
        descCharPos = 0;
        descText = "";
        descFadeTarget = 0;
        return;
      }
      var cardW = 340;
      var cardX = 30 + subX;
      var items = config[currentPage];
      for (var j = 0; j < items.length; j++) {
        var yS = 130 + j * 72;
        var swX = cardX + cardW - 90;
        var swY = yS + 3;
        if (worldMouseX > swX && worldMouseX < swX + items[j].sw.w && worldMouseY > swY && worldMouseY < swY + items[j].sw.h) {
          settings[items[j].key] = !settings[items[j].key];
        }
      }
    }
    if (lvlEndScene === 1 && levelEnd) {
      if (currentLevel === 11) {
        cutsceneName = "victory?";
        cutsceneIs = true;
        return;
      }
      lvlEndScene = 2;
    }
    if (dropDownGoToY !== dropDownInitialY) {
      dropDownGoToY = dropDownInitialY;
      if (currentLevel === 3) {
        bossMenuGone = true;
      }
      if (lvlUnlock === 2 && scene === "Play") {
        voucherMenuGone = true;
      }
    }
    if (p.gameOver) {
      transitionActive = true;
      sceneToTransition = 'Play';
      worldSubScreenTo = world;
    }
  };
  keyPressed = function keyPressed() {
    keys[keyCode] = true;
    if (key !== CODED) {
      keys[key.toString().toLowerCase()] = true;
    }

    // Q Key to toggle pause menu
    if (keyCode === 81 || key === 'q' || key === 'Q') {
      qMenuActive = !qMenuActive;
    }
    if (settings.generalSetting) {
      // Y for debug mode
      if (keyCode === 89) {
        showDebugInfo = !showDebugInfo;
      }
      // H for hitboxes
      if (keyCode === 72) {
        showHitboxes = !showHitboxes;
      }
      // Alt to print frame rate and unlock one of many for some reason
      if (keyCode === ALT) {
        println(this.__frameRate);
      }
      // C for Save System Verification & Validation (V&V)
      if (keyCode === 67) {
        runSaveSystemCheck();
      }
    }
    // P for save code
    if (keyCode === 80) {
      console.clear();
      var printedCode = generateSaveString();
      println('save code: \nvar saveCode = "' + printedCode + '";');
    }
  };
  keyReleased = function keyReleased() {
    keys[keyCode] = false;
    if (key !== CODED) {
      keys[key.toString().toLowerCase()] = false;
    }
  };

  // Prevent page scroll
  (function () {
    return this;
  })()[['document']][['getElementById']]('output-canvas').onwheel = function (e) {
    e.preventDefault();
  };
  mouseScrolled = function mouseScrolled() {
    targetY = constrain(targetY + mouseScroll * 20, -110, 300);
    targetScroll = constrain(targetScroll - mouseScroll * 50, 0, 1000);
  };

  // ]

  // Not a number I'm proud of. When people advertise how many lines of code their program is, that's silly. Do the least possible without sacrificing quality.
}
window.__dashParkourBootPromise = runPJS(program);
