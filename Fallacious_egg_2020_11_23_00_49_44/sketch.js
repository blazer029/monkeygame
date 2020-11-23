var banana,bananaImage,obstacle,obstacleImage,obstacleGroup,backdrop,backgroundImage,score;

function preload(){

  backgroundImage = loadImage("jungle.jpg");
  
}
function setup() {
  createCanvas(400, 400);
  backdrop = createSprite(200,200,400,400);
  backdrop.addImage("jungle",backgroundImage);

  
  backdrop.x = backdrop.width /2;
  backdrop.velocityX = -2;
}

function draw() {

drawSprites();
}