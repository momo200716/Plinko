const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
var engine , world;
var divisionHeight = 300;


var particles = [];
var plinkos = [];
var divisions = [];



function setup() {
  createCanvas(800,800);
  engine = Engine.create();
world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(400, 780, 800, 10 );
  for(var i = 0; i<= width; i = i+80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight))
  }
}
for( var w = 50; w<= width; w = w+50){
  plinkos.push(new Plinko (w, 50));
}
for(var w = 75; w<= width; w = w+75){
  plinkos.push(new Plinko(t, 175));
}


function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  for(var i = 0; i<= divisions.length; i++){
    divisions[i].display();
  }
  for(var w = 50; w<=plinkos.length; w++){
    plinkos[w].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new particles(random(width/2-40, width/2+30),10,10))
  }

  for(var j = 0; j<= particles.length; j++){
    particles[j].display();
  }
  drawSprites();
}