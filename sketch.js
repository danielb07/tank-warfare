

 
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

    cannonBall = new CannonBall(493, 770);
    //  824, 285,100,10
}

function draw() {
   
    background(200);

    
    walls.display();
    walls.collision();
    // cannonBall.display();
    var wall = walls.walls[0];

    if(cannonBall.x < (wall.x + (wall.w/2)) &&
            cannonBall.x > (wall.x - (wall.w/2)) &&
            cannonBall.y > (wall.y - (wall.h/2)) && 
            cannonBall.y < (wall.y + (wall.h/2))){
        console.log("yay");
    }
        
}
function mousePressed(){
    // console.clear
    // 386, 700,20,400
    // x  , y  ,w, h
   console.log(mouseX +", "+mouseY);
   
    
}
