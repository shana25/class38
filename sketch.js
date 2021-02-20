var database;
var form, player, playerCount;
var gameState=0;
var allPlayers;
var distance=0;
var cars,car1,car2,car3,car4;

function setup()
{
    database=firebase.database();
 

    createCanvas(displayWidth,displayHeight);

   game=new Game();
   game.getState();
   game.start();

   
}


function draw()
{
  if ( playerCount===4 )
  {
    game.update(1)
  }

 if ( gameState===1 )
 {
   clear();
     game.play()
 }

}


