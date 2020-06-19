class Form {
    constructor(){}
    display() {

        var heading = createDiv('Tank warfar');
        heading.position(729, displayHeight/2 - 90);
        heading.style('font-size', '48px');
        heading.style('color', '#cab772');

        

        var Name = createInput('Name');
        var button = createButton('continue');
        // var ready = createElement('h3');

        Name.position(729, displayHeight/2);
        button.position(774, displayHeight/2 + 40);

        // bottom right
         var _1 = createImg("img/1.png")
         _1.position(1110, 513);

        //top left 
         var _2 = createImg("img/2.png")
         _2.position(66, 91);

        // bottom left
         var _3 = createImg("img/3.png")
         _3.position(247, 513);

        // top-right
         var _4 = createImg("img/4.png")
         _4.position(1201, 91)

        
        
        button.mousePressed(()=>{
            Name.hide();
            button.hide(); 
            heading.hide();
            _1.hide();
            _2.hide();
            _3.hide();
            _4.hide();

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
