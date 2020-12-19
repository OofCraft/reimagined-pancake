const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var polygon,polygonPic;
var game=0
function preload() {
    polygonPic=loadImage("polygon.png")
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(600,350,400,20);
    box1 = new Box(500,300,50,80);
    box2 = new Box(551,300,50,80);
    box3 = new Box(602,300,50,80);
    box4 = new Box(653,300,50,80);
    box5 = new Box(525,219,50,80);
    box6 = new Box(576,219,50,80);
    box7 = new Box(609,219,50,80);
    box8 = new Box(550,138,50,80);
    box9=new Box(601,138,50,80);
    polygon = new Polygon(50,200,20,20);
    slingShot = new Slingshot(polygon.body,{x: 200, y:100});
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    polygon.display();
    slingShot.display();    
}

function mouseDragged(){
    if (game===0){
    Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
    }

}

function mouseReleased(){
    game=1
    slingShot.fly(bodyA=null);


}

 function keyPressed(){
        if(keyCode === 32){
            slingShot.attach(polygon.body);
        }

}
