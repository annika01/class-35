var form,player;
var db,gameState;
var playerCount, game;

function setup(){
db=firebase.database();
  createCanvas(500,500);
game=new Game()
 game.getState()
game.start()
}

function draw(){
  
  
  
}

