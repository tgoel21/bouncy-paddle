var ball, img, paddle, gamestate = "serve", score = 0;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(500, 400);
  ball=createSprite(30,200,20,20);
  ball.addImage (ballimg); 
  
  paddle=createSprite(470,200,20,100);
  paddle.addImage(paddleimg)
}

function draw() {
  background(205,153,0);
  
  paddle.y = World.mouseY;
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(paddle);
  
  paddle.collide(edges);
  
  
  
  if((keyDown("enter"))&&(gamestate === "serve")) {
    ball.velocityX=10;  
    ball.velocityY=10;
    ball.x = 30;
    ball.y = 200;
    gamestate = "play"
  }
   
  
  //to reset game when ball is out of the canvas
  if(ball.x > 500) {
     gamestate = "end"
     }
  
  if(score === 100) {
     gamestate = "win";
     }
  
  
  if(gamestate === "serve") {
     text("score till hundred and press enter to play and use arrow keys to control thee paddle", 30, 50);
   }
  drawSprites();
  
}
