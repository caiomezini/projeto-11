var navio, navio_img;
var mar, mar_img;

function preload(){
navio_img = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
mar_img = loadImage("sea.png"); 
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(400, 175, 200, 50);
  mar.addImage(mar_img);
  mar.velocityX = -6;
  mar.scale = 0.5;
  navio = createSprite(125, 200, 5, 50);
  navio.addAnimation("navegando", navio_img);
  navio.scale = 0.25;
}

function draw() {
  background("blue");
  if(mar.x < 0){
    mar.x = width*2;
  }
    drawSprites();

 
}
