var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(900,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(515,580,215,30);
    block3.shapeColor = "black";

    block4 = createSprite(800,580,300,30);
    block4.shapeColor = "red";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

    ball.velocityY = 5;
    ball.velocityX = 5;
    

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if (ball.isTouching(block1)){
        ball.bounceOff(block1)
         ball.shapeColor = "blue";
      }
       
      if(ball.isTouching(block2)){
        ball.bounceOff(block2)
        ball.shapeColor = "orange";

      }

      if(ball.isTouching(block3)){
        ball.bounceOff(block3)
        ball.shapeColor = "black";

      }

      if(ball.isTouching(block4)){
        ball.bounceOff(block4)
        ball.shapeColor = "red";

      }
    
    //write code to bounce off ball from the block1 
    



   

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
