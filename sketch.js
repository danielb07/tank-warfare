let tankPositionRef, cannonPositionRef, turretAngleRef,database;
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

    tank = new Tank(25,25);

    database.ref('tank/position').set({
        'x' : 316,
        'y' : 432

    })


    turret = new Turret();
    cannonBall = new CannonBall();

    tankPositionRef = database.ref('tank/position');
    tankPositionRef.on("value", tankMovement);

    cannonPositionRef = database.ref('cannonball/position');
    cannonPositionRef.on("value", cannonBallMovement);

    turretAngleRef = database.ref('turret/angle')
    turretAngleRef.on("value", turretAngle)
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

function writeTankPosition(x,y){
    database.ref('tank/position').set({
        'x' : tank.x + x * tank.speed,
        'y' : tank.y + y * tank.speed

    })
}

function tankMovement(data){
    if(data.val() !== undefined){
        var position = data.val();
        tank.x = position.x;
        tank.y = position.y;
    }
}

function writeCannonBallPosition(x,y) {
        if(cannonBall !== undefined){
            // console.log(cannonBall);
            
            database.ref('cannonball/position').set({
                'x' : cannonBall.x + x,
                'y' : cannonBall.y + y
            })
        }
    }


function cannonBallMovement(data){
    if(data.val() !== undefined){
        var ballPosition = data.val();
        cannonBall.x = ballPosition.x;
        cannonBall.y = ballPosition.y;
    }
}

rightAngle = (angle) =>{
    database.ref('turret').set({
        'angle' : angle
    })
}

function turretAngle(data){
    if(data.val() !== undefined){
        turret.angle = data.val();
    }
}
