

var cannonBall;
var tank;
let wall;

function setup() {
    createCanvas(displayWidth,displayHeight);
    
    

    walls = new Walls();

    tank = new Tank(512, 604,20,20);

    // // top border
    // cannonBall = new CannonBall(438, 218, 3, 3);

    // // bottom border
    cannonBall = new CannonBall(638, 678,-4, -4)

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

// function moveMent(){

//     switch(keyCode) {
//         case 87:
//         tank.moveMent(0,-2);
//           break;
//         case 83:
//             tank.moveMent(0,2);
//           break;
//         case 65:
//             tank.moveMent(-2,0);
//           break;
//           case 68:
//             tank.moveMent(2,0);
//           break;
//         default:
//             tank.moveMent(0,0);
//       }

// }

