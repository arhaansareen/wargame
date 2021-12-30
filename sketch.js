var towerImg,tower;
function preload()
{
  towerImg = loadImage("tower.png");
}
function setup() {
  createCanvas(800,800);

  tower = createSprite(400,400,20,20);
  tower.addImage(towerImg)
  tower.scale = 0.1;
}
function draw() {
  background(0);  
  drawSprites();
}
