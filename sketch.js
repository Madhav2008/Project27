const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
    createCanvas(1535, 718);
    engine = Engine.create();
    world = engine.world;

    bob1 = new Bob(650, 500);
    bob2 = new Bob(710, 500);
    bob3 = new Bob(770, 500);
    bob4 = new Bob(830, 500);
    bob5 = new Bob(890, 500);
    roof = new Roof(770, 200, 400, 50);
    rope1 = new Rope(bob1.body, roof.body, -60 * 2, 0);
    rope2 = new Rope(bob2.body, roof.body, -30 * 2, 0);
    rope3 = new Rope(bob3.body, roof.body, 0 * 2, 0);
    rope4 = new Rope(bob4.body, roof.body, 30 * 2, 0);
    rope5 = new Rope(bob5.body, roof.body, 60 * 2, 0);

    Engine.run(engine);
}

function draw() {
    background("magenta");

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    roof.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    strokeWeight(15);
    stroke("gold");
    fill("black");
    textSize(80);
    text("NEWTON'S CRADLE", 400, 100);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -55, y: -45 });
    }

    if (keyCode === DOWN_ARROW) {
        Matter.Body.applyForce(bob5.body, bob5.body.position, { x: 55, y: 45 });
    }
}