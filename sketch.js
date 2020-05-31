let tankPositionRef,database;
var cannonBall;
var tank;
let wall;
let turret;
let position


function setup() {
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    // console.log(database);
    
    // turrent = new Turrent(displayWidth/2,displayHeight/2, 60, 10)

    walls = new Walls();

    tank = new Tank(330, 436,25,25);
    turret = new Turret();
    cannonBall = new CannonBall();

    tankPositionRef = database.ref('tank/position');
    tankPositionRef.on("value", movement)
}

function draw() {
   
    background(200);

    walls.display();
    turret.x = tank.x;
    turret.y = tank.y;
    if(keyIsDown(32) && (Number.isNaN(cannonBall.distance))){
        tank.fire();
    }
    cannonBall.display();
    cannonBall.bounceOff() 

    turret.display();
    turret.aiming();
    
    tank.display();
    tank.updateMovement()
    tank.collision();

   
}

function mousePressed(){
    // console.clear
    // 386, 700,20,400
    // x  , y  ,w, h
   console.log(mouseX +", "+mouseY);
   
}

function writePosition(x,y){
    console.log(x, y);
    
    database.ref('tank/position').set({
        'x' : tank.x + x * tank.speed,
        'y' : tank.y + y * tank.speed

    })
}

function movement(data){
    if(data.val() !== undefined){
        console.log(data.val());
        
        var position = data.val();
        tank.x = position.x;
        tank.y = position.y;
    }
}
