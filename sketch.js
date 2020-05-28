

var cannonBall;
var cannonBall2;
var engine;
var world;
var box
let walls
var leftEdge = 376;
var rightEdge = 396;
var bottomEdge = 300;
var topEdge = 1100;
var gSlider;


function setup() {
    createCanvas(displayWidth,displayHeight);
    
    

    walls = new Walls();


    // // top border
    // cannonBall = new CannonBall(438, 218, 3, 3);

    // // bottom border
    cannonBall = new CannonBall(638, 678,-2, -2)

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
    cannonBall.display();
    cannonBall.bounceOff();
}

function mousePressed(){
    // console.clear
    // 386, 700,20,400
    // x  , y  ,w, h
   console.log(mouseX +", "+mouseY);
   
   
    
}

function moveMent(){
    var xdir = cannonBall.xdir;
    var ydir = cannonBall.ydir;

  

}

