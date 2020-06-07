class Game {
    constructor(){
        this.rematch = 0;
    }
    gameState(){
        
        
       var player1GamestateRef = database.ref('player1/gamestate');
       player1GamestateRef.on("value", (data) => {
           var gamestate = data.val();
           if (player.index === 1){
            if(gamestate === 1){
                var manual = new Instruction();
                manual.display();
            }       
           }
       })
    
       var player2GamestateRef = database.ref('player2/gamestate');
       player2GamestateRef.on("value", (data) => {
           var gamestate = data.val();
           if (player.index === 2){
                if(gamestate === 1){
                    var manual = new Instruction();
                    manual.display();
                }
           }
       })

                     

         
        
    }
    winGame(){
        var win = createElement('h1')
        win.html("you Win")
        win.position(displayWidth/2,displayHeight/2)
        var reaload = createButton('play again')
        reaload.position(851, 629)
        battlestate = 0;
        reaload.mousePressed(()=>{
            win.hide();
            reaload.hide();
            wait.display();
            Firebase();
            gamesetup();
            database.ref('player' + player.index  ).update({
                gamestate : 2
            })
            
            
        })
    }

    loseGame(){
        var lose = createElement('h1')
        lose.html("you lose")
        lose.position(displayWidth/2,displayHeight/2)
        var reaload = createButton('play again')
        reaload.position(851, 629);
        reaload.mousePressed(()=>{
            lose.hide();
            reaload.hide();
            wait.display();
            Firebase();
            gamesetup();
            database.ref('player' + player.index  ).update({
                gamestate : 2
            })
            
        })
    }

   
        
    }
