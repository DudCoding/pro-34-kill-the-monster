const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var engine, world; 
var backgroundImage; 
var bg; 

var ground, hero; 
var fly; 

function preload() {
    //preload the images here
    backgroundImage = loadImage("GamingBackground.png");
}

function setup() {
    createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world; 

    // create sprites here

    // not added to world so it doesn't interact with other bodies
    // we just need to see it
    // background
    bg = Bodies.rectangle(0,0,20,20);

    ground = new Ground(1500,780,3000,40);

    hero = new Hero(1000,500);

    fly = new Fly(hero.body, {x:1000, y:200});

}

function draw(){
    Engine.run(engine);
    background(0);



    // bg image
    image(backgroundImage, bg.position.x, bg.position.y, 3000,800)

    ground.display();

    hero.display();


    fly.display();


}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x: mouseX, y:mouseY });
}

