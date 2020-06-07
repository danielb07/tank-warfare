class Form {
    constructor(){}
    display() {

        var heading = createElement('h2');
        heading.html("Tank-warfare" );
        heading.position(729, displayHeight/2 - 90);

        var Name = createInput('Name')
        var button = createButton('continue')
        // var ready = createElement('h3');

        Name.position(729, displayHeight/2);
        button.position(774, displayHeight/2 + 40);

        
        
        button.mousePressed(()=>{
            Name.hide();
            button.hide(); 
            heading.hide();

            var playerCountRef = database.ref('playerCount');
            var name = Name.value();
            player.name = name;
            playerCountRef.once("value", (data)=>{
                var playerCount = data.val() + 1;
                player.index = playerCount;

                if (player.index === 1){
                    database.ref('player1/health').once("value", (data)=>{
                        player.health = data.val();
                    })
                    database.ref('player2/enemyhealth').once("value", (data)=>{
                        player.enemyhealth = data.val();
                    })
                } else if (player.index === 2){
                    database.ref('player2/health').once("value", (data)=>{
                        player.health = data.val();
                    })
                    database.ref('player1/enemyhealth').once("value", (data)=>{
                        player.enemyhealth = data.val();
                    })
                }
                
                database.ref('player' + player.index).update({
                    name : name,
                    gamestate : 1               
                })
                database.ref('/').update({
                    playerCount : playerCount
                })
            })        
        })
    }
}
