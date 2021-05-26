var car,wall;
var speed,weight;
var deformation;


function setup() {
  createCanvas(1600,400);

  speed= random(50,100);
  weight= random(500,1000);

 car=createSprite(40, 200, 50, 50);
 wall=createSprite(1500, 200, 50, height*2);
wall=color(80,80,80);
 
car.velocityX=speed;

 
}

function deform(){
  if(car.isTouching(wall)){
  deformation= 0.5*weight*speed*speed/22500
  }
}

function tree(){
  if(deformation<100){
    car=color(0,225,0);
  }
}

function yellow(){
  if(deformation>100 && deformation<180){
    car=color(230,230,0);
  }
}

function crimson (){
  if(deformation>180){
    car=color(225,0,0);
  }
}

function draw() {
  background(255,255,255); 
  
  deform();
  tree();
  yellow();
  crimson();

  drawSprites();

}