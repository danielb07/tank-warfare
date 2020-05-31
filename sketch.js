

var cannonBall;
var tank;
let wall;
let turrent;

function setup() {
    createCanvas(displayWidth,displayHeight);
    
    // turrent = new Turrent(displayWidth/2,displayHeight/2, 60, 10)

    walls = new Walls();

    tank = new Tank(330, 436,20,20);
    cannonBall = new CannonBall();
}

function draw() {
   
    background(200);

    walls.display();
    
    if(keyIsDown(32) && (Number.isNaN(cannonBall.distance))){
        tank.fire();
    }
    cannonBall.display();
    cannonBall.bounceOff() 
    
    tank.display();
    tank.movement();
    tank.collision();
}

function mousePressed(){
    // console.clear
    // 386, 700,20,400
    // x  , y  ,w, h
   console.log(mouseX +", "+mouseY);
   
}


