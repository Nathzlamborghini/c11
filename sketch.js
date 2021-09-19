var sea ,seaimg;
var ship ,shipimg;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(1200,400);
  sea = createSprite(600,200,1,1);
  sea.addImage("seaimg", seaImg);
  ship = createSprite(300,200,1,1);
  ship.addAnimation("shipimg", shipImg);
  ship.scale = 0.5;
}

function draw() {
  background("blue");
  sea.x = sea.x - 12;
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  drawSprites();
}