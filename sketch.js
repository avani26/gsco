var speed,weight,deform;
speed = random(40,100);
weight= random(150,1500);
var car,wall;

function setup() {
  createCanvas(1600,400);

  car= createSprite(50, 200, 50, 50);
 car.velocityX=speed;

  wall= createSprite(1500, 200, 60, height/2);
  wall.shapecolour=('80,80,80');

}


function deformation(){
  if(car.isTouching(wall)){
    deform = 0.5*weight*speed*speed/22500;
  }

  if(deform<100){
    car.shapecolour='green';
  }

  else if(deform>100&&deform<180){
    car.shapecolour='yellow';
  }

  else if (deform>180){
    car.shapecolour='red';
  }
}



function draw() {
  background(255,255,255);  
  drawSprites();
  
  deformation();

 
}