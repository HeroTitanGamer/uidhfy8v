const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, base1, base2, base3, base4, base5, base6, base7, base8, base9, base10;
var engine,world,back,backimg;
var tri1, tri2, tri3, trian, button;
var line;

function preload(){
  backimg = loadImage("/assets/background.png")
  trian = loadImage("/assets/tri.png")
  line = loadImage("/assets/end.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  back = createSprite(width/2,height/2,width,height)
  back.addImage(backimg);
  back.scale = 2.7

  engine = Engine.create();
  world = engine.world;

  tri1 = createSprite(445,480);
  tri1.addImage(trian)
  tri1.scale = 0.1

  
ball = new Ball(200, 200, 20);
base1 = new Ground(150,300,300,25);
base2 = new Ground(450,500,250,25);
base3 = new Ground(440,290,25,185);
base4 = new Ground(313,400,25,225);
base5 = new Ground(562.5,429,25,165);
base6 = new Ground(226.6,190,451,25);
//base7 = new Ground(420,100,25,270);
//base8 = new Ground(600,200,250,25);
//base9 = new Ground(200,700,250,25);
//base10 = new Ground(600,200,250,25);

button = createButton("Touch");
button.position(50,50);
button.class("cstmbtn");
button.size(60,50);
}

//720 150
function draw() {
  //console.log(mouseX)
  console.log(mouseY)

  background(200);
  drawSprites();

  image(line,1270,150,50,30);
  
  Engine.update(engine);

  ball.display();
  base1.display();
  base2.display();
  base3.display();
  base4.display();
  base5.display();
  base6.display();
  //base7.display();
  //base8.display();
  //base9.display();
  //base10.display();


  if(keyIsDown(UP_ARROW)){
    move(0,-1);
    console.log("jump")
  }
  if(keyIsDown(LEFT_ARROW)){
    move(-1,0);
    console.log("left")
  }
  if(keyIsDown(RIGHT_ARROW)){
    move(1,0);
    console.log("right")
  }
  if(keyIsDown("space")){
    move(null,null);
    console.log("crashed")
  }
  
}

function move(moveX,moveY){
  Matter.Body.applyForce(ball.body, {x:0,y:0}, {x:moveX, y:moveY })
}