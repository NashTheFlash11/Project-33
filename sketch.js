var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var particle;
var count = 0;
var gameState = "play";
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    } 

}

function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  textSize(20)
  text("500",25,510);

  textSize(20)
  text("500",110,510);

  textSize(20)
  text("500",190,510);

  textSize(20)
  text("500",270,510);
  
  textSize(20)
  text("100",350,510);

  textSize(20)
  text("100",430,510);

  textSize(20)
  text("100",510,510);

  textSize(20)
  text("200",590,510);

  textSize(20)
  text("200",670,510);

  textSize(20)
  text("200",750,510);


  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle != null){
     particle.display();

     if(particle.body.position.y > 760){
       
      if(particle.body.position.x < 300){
         score = score + 500;
         particle = null;

         if(count>= 5){
           gameState = "end";
           textSize(40);
           text("Game Over", 400, 400);
         }
       }
      if(particle.body.position.x > 301 && particle.body.position.x < 600){
        score = score + 100;
        if(count>= 5){
          gameState = "end";
          textSize(40);
          text("Game Over", 400, 400);
        }
      }
      if(particle.body.position.x > 601 && particle.body.position.x < 900){
        score = score + 200;
        if(count>= 5){
          gameState = "end";
          textSize(40);
          text("Game Over", 400, 450);
        }
      }
     }
   }

  //  if(mousePressed()){
  //    count++;

  //    if(count >= 5){
  //      gameState = "end"
  //      textSize(40);
  //      text("Game Over", 400, 400);
  //    }
  //  }
}

function mousePressed(){
  if(gameState !== "end"){
    particle = new Particle(mouseX, 10, 10, 10);
    count++;
  }
}