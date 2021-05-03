const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var girl, boy, inviGround, snow, wind;

function preload(){
  bg = loadImage("snow.jpg");
  boyImg = loadImage("boy.png");
  girlImg = loadImage("girl.png");
  wind = loadSound("wind.mp3");
  snow = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;

  boy = createSprite(500, 400, 50, 50);
  boy.addImage(boyImg);
  boy.scale = 0.5;

  girl = createSprite(300 ,370, 50, 50);
  girl.addImage(girlImg);
  girl.scale = 0.5;

  inviGround = createSprite(400, 495, 800, 10);
  inviGround.visible = false;

  snowGroup = new Group();
  wind.play();
}

function draw() {
  background(bg);  

  Engine.update(engine);

  girl.velocityY = 5;
  boy.velocityY = 5;

  boy.collide(inviGround);
  girl.collide(inviGround);

  // displaying();
  // snow.display();
  spawn()
  drawSprites();
}

function spawn(){
  if(frameCount%10 === 0){
    rand = random(0, 800);
    var spawnS = createSprite(rand,10,30, 30);
    spawnS.addImage(snow);
    spawnS.scale = 0.09;
    spawnS.velocityY = 5;
    spawnS.lifetime = 300;
    snowGroup.add(spawnS);
  }
}

function displaying(){
rand = random(100, 400);
console.log(rand);
snow = new Snow(rand, 100, 100);
}

function keyPressed(){
  if(keyCode == 32)
    boy.velocityY -= 50; 

  if(keyCode == 87)
    girl.velocityY -= 50; 

  if(keyCode == 37)
    boy.x -= 30;
  
  if(keyCode == 39)
    boy.x+= 30;

  if(keyCode == 65)
    girl.x -= 30

  if(keyCode == 68)
     girl.x += 30
  }