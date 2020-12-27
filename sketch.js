const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;

function setup() {
createCanvas(1200,480);

engine = Engine.create();
world = engine.world;

pendulum1 = new pendulum(900,200,"white");
pendulum2 = new pendulum(800,200,"white");
pendulum3 = new pendulum(700,200,"white");
pendulum4 = new pendulum(600,200,"white");
pendulum5 = new pendulum(500,200,"white");
pendulum6 = new pendulum(400,200,"white");
pendulum7 = new pendulum(300,200,"white");
pendulum8 = new pendulum(200,200,"white");

sling1 = new sling(pendulum1.body,{x:900,y:50});
sling2 = new sling(pendulum2.body,{x:800,y:50});
sling3 = new sling(pendulum3.body,{x:700,y:50});
sling4 = new sling(pendulum4.body,{x:600,y:50});
sling5 = new sling(pendulum5.body,{x:500,y:50});
sling6 = new sling(pendulum6.body,{x:400,y:50});
sling7 = new sling(pendulum7.body,{x:300,y:50});
sling8 = new sling(pendulum8.body,{x:200,y:50});
}

function draw() {
Engine.update(engine)

background("black");

pendulum1.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();
pendulum6.display();
pendulum7.display();
pendulum8.display();

sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();
sling6.display();
sling7.display();
sling8.display();
}

function mouseDragged() {
    Matter.Body.setPosition(pendulum1.body,{x:mouseX, y:mouseY})
}