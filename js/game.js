class Game {
    constructor(){}
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

       var gamestateRef = database.ref('gamestate');
       gamestateRef.on("value", (data) => {
           var gamestate = data.val();
           if (battlestate === 3){
               console.log("game over");
                if(player.index === 1){
                    var player2healthRef = database.ref('player2/health')
                    player2healthRef.once("value", (data)=>{
                        var player2Health = data.val();
                        if(player.health < player2Health){
                            console.log("you win yay wow wo ho");
                            textSize(40);
                            var win = createElement('h1')
                            win.html("you Win")
                            win.position(displayWidth/2,displayHeight/2)
                             
                        } else{
                            console.log("sorry you lose, better luck next time");
                            var lose = createElement('h1')
                            lose.html("you Lose")
                            lose.position(displayWidth/2,displayHeight/2)
                        }
                    })
                }else if(player.index === 2){
                    var player1healthRef = database.ref('player1/health')
                    player1healthRef.once("value", (data)=>{
                        var player1Health = data.val();
                        if(player.health < player1Health){

                            console.log("you win yay wow wo ho");
                            var win = createElement('h1')
                            win.html("you Win")
                            win.position(displayWidth/2,displayHeight/2)
                        } else{
                            console.log("sorry you lose, better luck next time");
                            var lose = createElement('h1')
                            lose.html("you Lose")
                            lose.position(displayWidth/2,displayHeight/2)
                        }
                    })
                }

                
               
           }
       })
        
    }
}