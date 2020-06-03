class Instruction {
    constructor(){}

    display(){
        
        var W = createElement('h2');
        W.html("press 'W' to move forwards" );
        W.position(168, 164);

        var S = createElement('h2');
        S.html("press 'S' to move backwards" );
        S.position(168, 214);

        var A = createElement('h2');
        A.html("press 'A' to move left" );
        A.position(168, 264);

        var D = createElement('h2');
        D.html("press 'D' to move right" );
        D.position(168, 314);

        var Q = createElement('h2');
        Q.html("press Q to angle the turret like this");
        Q.position(169, 414);
        
        var E = createElement('h2');
        E.html("press E to angle the turret like this");
        E.position(168, 560);

        var _2 = createElement('h2');
        _2.html("press 2 to angle the turret like this");
        _2.position(169, 706);

        var X = createElement('h2');
        X.html("press X to angle the turret like this");
        X.position(544, 164);

        var _3 = createElement('h2');
        _3.html("press 3 to angle the turret like this");
        _3.position(544, 310);

        var C = createElement('h2');
        C.html("press C to angle the turret like this");
        C.position(544, 476);

        var Z = createElement('h2');
        Z.html("press Z to angle the turret like this");
        Z.position(544, 622);

        var _1 = createElement('h2');
        _1.html("press 1 to angle the turret like this");
        _1.position(931, 194);
        // fill("red")
        // ellipse(472, 565,1000,50);
        // rect(301, 705,20,100)
        

        var ready = createButton('PREPARE');
        ready.position(displayWidth/2,858)

        ready.mousePressed(function(){
            W.hide();
            S.hide();
            A.hide();
            D.hide();
            Q.hide();
            E.hide();
            _2.hide();
            X.hide();
            _3.hide();
            C.hide();
            Z.hide();
            _1.hide();
            ready.hide();
            
            wait.display();
            
        

            // if(playercount === 2 ){
            //     Wait.hide();
            //     waiting.hide();
            // }
            
            database.ref('player' + player.index).update({
                gamestate : 2
            })
            database.ref('/').update({
                
                gamestate : player.index
            })
        })
    }
    waiting(){
        var Wait = createElement('h2');
        Wait.html('get ready soldier')
        Wait.position(724, 376)
        var waiting = createElement('h3');
        waiting.html('waiting for the enemy to comence the war')
        waiting.position(633, 416);
    }
}