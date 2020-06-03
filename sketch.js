let enemyPositionRef, tankPositionRef, cannonPositionRef, turretAngleRef,gamestateRef, database;
let bg
var cannonBall;
var tank, enemy;
let tanks = [];
let wall;
let turret;
let position
let game;
let wait;
let player;
let battlestate


preload = () =>{
    bg = loadImage('tank.jpg')
}

 setup = () => {
     
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
        } else {
            var toomanyplayers = new TooManyPlayers();
            toomanyplayers.display();
        }
    });
    game.gameState();


    tank = new Tank(displayWidth + 29, displayWidth + 20 ,25,25);
    enemy = new Tank(1143, 276,25,25)

    
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
                        tank = new Tank(51, 865,25,25);
                        enemy = new Tank(1143, 276,25,25)
                        tankPositionRef = database.ref('player1/tank/position');
                        tankPositionRef.on("value", tankMovement);
                        enemyPositionRef = database.ref('player2/tank/position');
                        enemyPositionRef.on("value", enemyMovement);

                        tankcannonPositionRef = database.ref('player1/tank/cannonball/position');
                        tankcannonPositionRef.on("value", tankcannonBallMovement);                    
                        tankturretAngleRef = database.ref('player1/tank/turret/angle')
                        tankturretAngleRef.on("value", tankturretAngle)

                        enemycannonPositionRef = database.ref('player2/tank/cannonball/position');
                        enemycannonPositionRef.on("value", enemycannonBallMovement);                    
                        enemyturretAngleRef = database.ref('player2/tank/turret/angle')
                        enemyturretAngleRef.on("value", emenyturretAngle)                    

                    } else if(player.index === 2){
                        tank = new Tank(1143,276,25,25)
                        enemy = new Tank(51,865,25,25)
                        tankPositionRef = database.ref('player2/tank/position');
                        tankPositionRef.on("value", tankMovement);
                        enemyPositionRef = database.ref('player1/tank/position');
                        enemyPositionRef.on("value", enemyMovement);

                        tankcannonPositionRef = database.ref('player2/tank/cannonball/position');
                        tankcannonPositionRef.on("value", tankcannonBallMovement);
                    
                        tankturretAngleRef = database.ref('player2/tank/turret/angle')
                        tankturretAngleRef.on("value", tankturretAngle);

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


    
    turret = new Turret();
    cannonBall = new CannonBall();

    



    

    
}

draw = () => {

    background(200);
   
    
    if(battlestate === 2 ){
        gamePlay();
    }
    else{
        // background(bg)
    }

    
}

gamePlay = () => {
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

    enemy.display();
    // enemy.updateMovement();
    // enemy.collision();

    

}

 mousePressed = () =>{
    // console.clear
    // 386, 700,20,400
    // x  , y  ,w, h
   console.log(mouseX +", "+mouseY);
   
}

writeTankPosition = (x,y) =>{
    database.ref('player' + player.index + '/tank/position').set({
        'x' : tank.x + x * tank.speed,
        'y' : tank.y + y * tank.speed

    })
}

// function writeEnemyMovement(x,y){
//     database.ref('enemy/position').set({
//         'x' : enemy.x + x * enemy.speed,
//         'y' : enemy.y + y * enemy.speed
//     })
// }

 tankMovement = (data) =>{
    if(data.val() !== undefined){
        var position = data.val();
        tank.x = position.x;
        tank.y = position.y;
    }
}

 enemyMovement = (data) =>{
    if(data.val() !== undefined){
        var position = data.val();
        enemy.x = position.x;
        enemy.y = position.y;
    }
}

writeCannonBallPosition = (x,y) => {
        if(cannonBall !== undefined){
            database.ref('player' + player.index + '/tank/cannonball/position').set({
                'x' : cannonBall.x + x,
                'y' : cannonBall.y + y
            })
        }
    }


tankcannonBallMovement = (data) =>{
    if(data.val() !== undefined){
        var ballPosition = data.val();
        cannonBall.x = ballPosition.x;
        cannonBall.y = ballPosition.y;
    }
}

rightAngle = (angle) => {
    database.ref('player' + player.index + '/tank/turret').set({
        'angle' : angle
    })
}
tankturretAngle = (data) =>{
    if(data.val() !== undefined){
        turret.angle = data.val();
    }
}

enemycannonBallMovement = (data) =>{
    if(data.val() !== undefined){
        var ballPosition = data.val();
        cannonBall.x = ballPosition.x;
        cannonBall.y = ballPosition.y;
    }
}

emenyturretAngle = (data) =>{
    if(data.val() !== undefined){
        turret.angle = data.val();
    }
}

 