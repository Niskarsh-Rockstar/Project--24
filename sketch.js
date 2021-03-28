const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var myWorld,myEngine;
// var shape1,shape2,shape3,shape4
var ground1,box,pig,bird,log
function setup() {
  createCanvas(1200,500);
  myEngine=Engine.create();
  myWorld=myEngine.world
 ground1=new ground(600,height,1200,20)
box=new shape2(700,320,70,70)
// box2=new box(920,320,70,70)
// box3=new box(700,240,70,70)
// box4=new box(920,240,70,70)
pig=new shape4(810,350,50,50)
// pig2=new pig(810,220,50,50)
bird=new shape1(300,300,100,50);
log=new shape3(810,260,300,PI/2)
// log2=new log(810,180,300,PI/2)
// log3=new log(760,120,150,PI/7)
// log4=new log(870,120,150,-PI/7)
//  box5=new box(810,160,70,70)
// box3=new box(240,100,100,50)
// box4=new box(240,100,50,100)
console.log(box.body.angle);
}

function draw() {
  background("lightBlue");  
  Engine.update(myEngine);
  log.display()
  bird.display()
  pig.display()
  ground1.display()
  box.display()
  // box2.display()
  // pig2.display()
  // shape2.display()
  // box4.display()
  // log2.display()
  // box5.display()
  // log3.display()
  // log4.display()
  
}
// shape1 =bird
// shape2 = box shape3= log shape4=pig