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
        
    }
}