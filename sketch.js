let enemyPositionRef, tankPositionRef, cannonPositionRef, turretAngleRef,gamestateRef, database;
let bg

var tankCannonBall, enemyCannonBall,tankImg;
let bandage;
var tank, enemy;
let tanks = [];
let wall;
let tankTurret;
let enemyTurret;
let position
let bandageImg
let waitGif
let game;
let wait;
// let _1img
// 
let bandagePos;

let player;
let  heartImage, enemyhealthImg;
let battlestate
let enemyHearts = [];
let Hearts = [];


preload = () =>{
    enemyhealthImg = loadImage("img/enemyhealth.png");
    heartImage = loadImage("img/health.png");
    bandageImg = loadImage("img/bandage.png");
    waitGif = loadImage("img/waiting.gif")
    HwallImg = loadImage("img/wallhorizonal.png")
    VwallImg = loadImage("img/wallvertical.png")
    tankImg = loadImage("img/tankbody.png")
    turretImg = loadImage("img/turret.png")
    
    // _1img = loadImage("img/1.png");
}

  setup = () =>{
     
    database = firebase.database();
    createCanvas(1754,900);

    
    game = new Game();
    
    wait = new Waiting();
    player = new Player();
    bandage = new Bandage(315, 653);
    var playerCountRef = database.ref('playerCount');
    playerCountRef.once("value", (data) => {
        var playercount = data.val();
        if (playercount < 2){
            var form = new Form();
            form.display();
        }
    });
    
    var bandageposRef = database.ref('bandagepos');
    bandageposRef.once("value", (data)=>{
        bandagePos = data.val();


    });
    game.gameState();


    gamesetup();

    
    
    
    walls = new Walls();


    
    tankTurret = new Turret();
    enemyTurret = new Turret();
    console.log(enemyTurret);
    
    tankCannonBall = new CannonBall();
    enemyCannonBall = new CannonBall();
    
    enemyHearts.push(new ENEMYhealth(505, 100))
    enemyHearts.push(new ENEMYhealth(585, 100))
    enemyHearts.push(new ENEMYhealth(665, 100))
    enemyHearts.push(new ENEMYhealth(745, 100))
    enemyHearts.push(new ENEMYhealth(825, 100))
    enemyHearts.push(new ENEMYhealth(905, 100))

    Hearts.push(new Health(505,  620))
    Hearts.push(new Health(585, 620))
    Hearts.push(new Health(665, 620))
    Hearts.push(new Health(745, 620))
    Hearts.push(new Health(825, 620))
    Hearts.push(new Health(905, 620))

   
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
    enemyTurret.x = enemy.x;
    enemyTurret.y = enemy.y;
    if(keyIsDown(32) && (Number.isNaN(tankCannonBall.distance))){
        tank.fire();
    }
    tankCannonBall.display();
    tankCannonBall.bounceOff();

    for(var i=0; i< player.enemyhealth; i++){
        enemyHearts[i].display();
    }

    for(var i=0; i< player.health; i++){
        Hearts[i].display();
    }
    bandage.display();

    if(frameCount%300 === 0){        
        var randomPos = random(bandagePos);
        database.ref('/').update({
            randompos : randomPos
        })

    }

    tankTurret.display();
    tankTurret.aiming();
    
    tank.display();
    tank.updateMovement();
    
    tank.collision();
    tank.healthBoost();

    enemyTurret.display();
    enemyTurret.aiming();
    enemy.display();
    enemyCannonBall.display();

    shake();

}

 mousePressed = () =>{
   console.log(mouseX + ", " + mouseY); 
//    console.log(displayWidth + ", " +displayHeight);
   
   
   
   
}

writeTankPosition = (x,y) =>{
    database.ref('player' + player.index + '/tank/position').update({
        x : tank.x + x * tank.speed,
        y : tank.y + y * tank.speed

    })
}


 tankMovement = (data) =>{
    var position = data.val();
    if(position !== null){
        tank.x = position.x;
        tank.y = position.y;
    }
}

healthLoss = (h) =>{
    if(player.index === 1){ 
        database.ref('player2').update({
            health : player.enemyhealth - h
        })
    }else if(player.index === 2){   
        database.ref('player1' ).update({
            health : player.enemyhealth - h
        })
    }
}

healthGain = (h) =>{
    if(player.health < 6){
        database.ref('player' + player.index ).update({
            health : player.health + h
        })
    }
   
       
    
}
enemyhealthStatus = (data) => {

     var health = data.val();
     player.enemyhealth = health;
     if(player.enemyhealth === 0){
         battlestate = 3;
        
        game.winGame()
        
            
        
        
    }
}

playerhealthStatus = (data) => {
    var health = data.val();
    player.health = health;
    if(player.health === 0){
        battlestate = 3;
        
        game.loseGame();
        
        
    }
}



enemyMovement = (data) =>{
    var position = data.val();
    if(position !== null){
        enemy.x = position.x;
        enemy.y = position.y;
    }
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
    var ballPosition = data.val();
    if (ballPosition !== null){
        tankCannonBall.x = ballPosition.x;
        tankCannonBall.y = ballPosition.y;
    }
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
    if (ballPosition !== null){
        enemyCannonBall.x = ballPosition.x;
        enemyCannonBall.y = ballPosition.y;
    }
}


emenyturretAngle = (data) =>{
    enemyTurret.angle = data.val();
}

shake = () =>{
    if(tankCannonBall.x > enemy.x - enemy.r/2 && tankCannonBall.x < enemy.x + enemy.r/2 && tankCannonBall.y > enemy.y - enemy.r/2 && tankCannonBall.y < enemy.y + enemy.r/2){        
        healthLoss(1);
        
        tankCannonBall.distance = 550;
        writeCannonBallPosition(displayWidth+20, displayHeight/2);
    }
    
}


 Firebase = () =>{
    database.ref('/').update({
        playerCount : 0,
                                                                                                  
//                                      740, 571          , 575                                                                              ||
        bandagepos : [[656, 385], [770, 393],[487, 189],[1001, 556],[724, 499],[721, 203],[1012, 447],[485, 308],[2031, 340],[2031, 340],[2031, 340],[2031, 340]],
        gamestate : 0 
    })
}

gamesetup = () =>{
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
                        
                        
                        tank = new Tank(340, 560,40,"#0000ff");
                        
                        
                        enemy = new Tank(1168, 190,40,"#ff0000")
                        
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

                        var playerheathStatusRef = database.ref('player1/health')
                        playerheathStatusRef.on("value", playerhealthStatus)

                        var enemyhealthStatusRef = database.ref('player2/health')
                        enemyhealthStatusRef.on("value", enemyhealthStatus)

                    } else if(player.index === 2){
                        
                        tank = new Tank(1168, 190,40,"#0000ff")
                        
                        enemy = new Tank(340, 560,40,"#ff0000")
                       
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

                        var playerhealthStatusRef = database.ref('player2/health')
                        playerhealthStatusRef.on("value", playerhealthStatus)

                        var enemyhealthStatusRef = database.ref('player1/health')
                        enemyhealthStatusRef.on("value", enemyhealthStatus)
                    }
                    var randomPosRef = database.ref('randompos');
                    randomPosRef.on("value", (data)=>{
                        var randomPos = data.val();
                        bandage.x = randomPos[0];
                        bandage.y = randomPos[1];
                    })
                    wait.hide();
                }
            })
         }
    })
}
 