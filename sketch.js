let enemyPositionRef, tankPositionRef, cannonPositionRef, turretAngleRef,gamestateRef, database;
let bg

var tankCannonBall, enemyCannonBall;
var tank, enemy;
let tanks = [];
let wall;
let tankTurret;
let enemyTurret;
let position
let game;
let wait;
let player;
let battlestate
let hearts = [];


// preload = () =>{

// }

 function setup(){
     
    database = firebase.database();
    createCanvas(displayWidth,displayHeight);

    
    game = new Game();
    
    wait = new Waiting();
    player = new Player();
    var playerCountRef = database.ref('playerCount');
    playerCountRef.once("value", (data) => {
        var playercount = data.val();
        if (playercount < 2){
            var form = new Form();
            form.display();
            //          
        }
    });
    game.gameState();


    // tank = new Tank(displayWidth + 29, displayWidth + 20 ,25,25);
    // enemy = new Tank(1143, 276,25,25)

    
    player1gamestateRef = database.ref('player1/gamestate');
    player1gamestateRef.on("value", (data)=>{
         var player1gamestate = data.val();
         if(player1gamestate === 2){
            player2gamestateRef = database.ref('player2/gamestate');
            player2gamestateRef.on("value",(data)=>{
                var player2gamestate = data.val();
                if(player2gamestate === 2){
                    battlestate = 2;
                    if(player.index === 1){
                        
                        
                        tank = new Tank(52, 864,40,"blue");
                        
                        
                        enemy = new Tank(1142, 276,40, "#B80909")
                        
                        tankPositionRef = database.ref('player1/tank/position');
                        tankPositionRef.on("value", tankMovement);
                        enemyPositionRef = database.ref('player2/tank/position');
                        enemyPositionRef.on("value", enemyMovement);

                        tankcannonPositionRef = database.ref('player1/tank/cannonball/position');
                        tankcannonPositionRef.on("value", tankcannonBallMovement);                    
                        tankturretAngleRef = database.ref('player1/tank/turret/angle')
                        tankturretAngleRef.on("value", tankturretAngle)
                        
                        healthCheckRef = database.ref('player1/health')
                        healthCheckRef.on("value",healthStatus)

                        enemycannonPositionRef = database.ref('player2/tank/cannonball/position');
                        enemycannonPositionRef.on("value", enemycannonBallMovement);                    
                        enemyturretAngleRef = database.ref('player2/tank/turret/angle')
                        enemyturretAngleRef.on("value", emenyturretAngle)           

                    } else if(player.index === 2){
                        
                        tank = new Tank(1142, 276,40, "#0924B8")
                        
                        enemy = new Tank(52, 864,40,"#B80909")
                       
                        tankPositionRef = database.ref('player2/tank/position');
                        tankPositionRef.on("value", tankMovement);
                        enemyPositionRef = database.ref('player1/tank/position');
                        enemyPositionRef.on("value", enemyMovement);

                        tankcannonPositionRef = database.ref('player2/tank/cannonball/position');
                        tankcannonPositionRef.on("value", tankcannonBallMovement);
                    
                        tankturretAngleRef = database.ref('player2/tank/turret/angle')
                        tankturretAngleRef.on("value", tankturretAngle);
                        
                        healthCheckRef = database.ref('player2/health')
                        healthCheckRef.on("value",healthStatus)

                        enemycannonPositionRef = database.ref('player1/tank/cannonball/position');
                        enemycannonPositionRef.on("value", enemycannonBallMovement);                    
                        enemyturretAngleRef = database.ref('player1/tank/turret/angle')
                        enemyturretAngleRef.on("value", emenyturretAngle)
                    }
                    wait.hide();
                }
            })
         }
    })
    
    walls = new Walls();


    
    tankTurret = new Turret();
    enemyTurret = new Turret();
    tankCannonBall = new CannonBall();
    enemyCannonBall = new CannonBall();
    
}

draw = () => {

    background('#645F55');
    
   
    
    if(battlestate === 2 ){
        gamePlay();
    }
    else{
        // background(bg)
    }

    
}

gamePlay = () => {
    walls.display();
    tankTurret.x = tank.x;
    tankTurret.y = tank.y;
    if(keyIsDown(32) && (Number.isNaN(tankCannonBall.distance))){
        tank.fire();
    }
    tankCannonBall.display();
    tankCannonBall.bounceOff();

    for(var i=0; i< health.length; i++){
        
    }

    tankTurret.display();
    tankTurret.aiming();
    
    tank.display();
    tank.updateMovement();
    
    tank.collision();

    enemyTurret.display();
    enemyTurret.aiming();
    enemy.display();
    enemyCannonBall.display();

    

    shake();
    // enemy.updateMovement();
    // enemy.collision();

    

}

 mousePressed = () =>{
   console.log(mouseX + ", " + mouseY);
   
}

writeTankPosition = (x,y) =>{
    database.ref('player' + player.index + '/tank/position').update({
        x : tank.x + x * tank.speed,
        y : tank.y + y * tank.speed

    })
}


 tankMovement = (data) =>{
    var position = data.val();
    tank.x = position.x;
    tank.y = position.y;
}

healthLoss = (health) =>{
    database.ref('player' + player.index).update({
        health : player.health - health
    })
    
}

healthStatus = (data) =>{
    var health = data.val();
    player.health = health;
    if(player.health === 0){

        battlestate = 3

        database.ref('/').update({
            gamestate : 3
        })
    }
}

 enemyMovement = (data) =>{
    var position = data.val();
    enemy.x = position.x;
    enemy.y = position.y;
}

writeCannonBallPosition = (x,y) => {
        if(tankCannonBall !== undefined){
            database.ref('player' + player.index + '/tank/cannonball/position').update({
                x : tankCannonBall.x + x,
                y : tankCannonBall.y + y
            })
        }
    }


tankcannonBallMovement = (data) =>{
    var BallPosition = data.val();
    tankCannonBall.x = BallPosition.x;
    tankCannonBall.y = BallPosition.y;
}

rightAngle = (angle) => {
    database.ref('player' + player.index + '/tank/turret').update({
        angle : angle
    })
}
tankturretAngle = (data) =>{
    tankTurret.angle = data.val();
}

enemycannonBallMovement = (data) =>{
    var ballPosition = data.val();
    enemyCannonBall.x = ballPosition.x;
    enemyCannonBall.y = ballPosition.y;
}


emenyturretAngle = (data) =>{
    enemyTurret.angle = data.val();
}

shake = () =>{
    // console.log("start");
    
    // console.log(tankCannonBall.x)
    // console.log(enemy.x)
    // console.log(enemy.w/2)
    // console.log(tankCannonBall.y)
    // console.log(enemy.y)
    // console.log(enemy.h/2)
    // console.log("end");
    
    
    
    
    if(tankCannonBall.x > enemy.x - enemy.r/2 && tankCannonBall.x < enemy.x + enemy.r/2 && tankCannonBall.y > enemy.y - enemy.r/2 && tankCannonBall.y < enemy.y + enemy.r/2){        
        healthLoss(1);
        console.log(player.health);
        
        
        tankCannonBall.distance = 250
        writeCannonBallPosition(displayWidth+20, displayHeight/2);
    }

}

 