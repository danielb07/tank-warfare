

var cannonBall;
var tank;
let wall;

function setup() {
    createCanvas(displayWidth,displayHeight);
    
    

    walls = new Walls();

    tank = new Tank(400, 394,20,20);
    cannonBall = new CannonBall();
    // // top border
    // cannonBall = new CannonBall(438, 218, 3, 3);

    // // bottom border
   

    // left border
    // cannonBall= new CannonBall(317, 594, 3, -3)

    // right border
    //   cannonBall = new CannonBall(704, 279, -2,2)

    //middle 
    // cannonBall = new CannonBall(displayWidth/2, displayHeight/2,-2,0);

    // frameRate(1000)
}

function draw() {
   
    background(200);

    // frameRate(120000);
    
    walls.display();

   

    tank.display();
    tank.movement();
    tank.collision();

    if(keyIsDown(32)){
        cannonBall.x = tank.x;
        cannonBall.y = tank.y;
        cannonBall.speed = 2;
        cannonBall.xdir =0;
        cannonBall.ydir = -1;
    }
    cannonBall.display();
    cannonBall.bounceOff() 
    
}

function mousePressed(){
    // console.clear
    // 386, 700,20,400
    // x  , y  ,w, h
   console.log(mouseX +", "+mouseY);
   
}
