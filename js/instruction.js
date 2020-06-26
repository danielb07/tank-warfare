class Instruction {
    constructor(){}

    display(){
        
        var W = createElement('h2');
        W.html("Press W to move FORWARD" );
        W.class('inst');
        W.position(168, 114);

        var S = createElement('h2');
        S.html("Press S to move BACKWARD" );
        S.class('inst');
        S.position(168, 155);

        var A = createElement('h2');
        A.html("Press A to move LEFT" );
        A.class('inst');
        A.position(168, 196);

        var D = createElement('h2');
        D.html("Press D to move RIGHT" );
        D.class('inst');
        D.position(168, 237);

        var Q = createElement('h2');
        Q.html("Press Q to angle the turret like this");
        Q.class('inst');
        Q.position(544, 114);

        var ex1 = createImg("img/tankfromleft.png")
        ex1.position(714, 167)

        var E = createElement('h2');
        E.html("Press E to angle the turret like this");
        E.class('inst');
        E.position(544, 215);

        var ex2 = createImg("img/tankfromright.png")
        ex2.position(717, 268)
        
        var _2 = createElement('h2');
        _2.html("Press 2 to angle the turret like this");
        _2.position(544, 316);
        _2.class('inst');

        var ex3 = createImg("img/tankfromtop.png")
        ex3.position(714, 374 )
        
        var X = createElement('h2');
        X.html("Press X to angle the turret like this");
        X.class('inst');
        X.position(1044, 114);

        var ex4 = createImg("img/tankfrombottom.png")
        ex4.position(1224, 171)

        var _3 = createElement('h2');
        _3.html("Press 3 to angle the turret like this");
        _3.class('inst');
         _3.position(1044, 390);

         var ex5 = createImg("img/tankangle1.png")
        ex5.position(1224, 463)

        var C = createElement('h2');
        C.html("Press C to angle the turret like this");
        C.class('inst');
        C.position(1044, 548);
        var ex6 = createImg("img/tankangle2.png")
        ex6.position(1224, 620)

        var Z = createElement('h2');
        Z.html("Press Z to angle the turret like this");
        Z.class('inst');
        Z.position(544, 450);

        var exZ = createImg("img/tankanglez.png")
        exZ.position(712, 521)

        var _1 = createElement('h2');
        _1.html("Press 1 to angle the turret like this");
        _1.class('inst');
        _1.position(1044, 242);

        var ex_1 = createImg("img/tankangle3.png")
        ex_1.position(1224, 310);

        // fill("red")
        // ellipse(472, 565,1000,50);
        // rect(301, 705,20,100)
        

        var ready = createButton('PREPARE');
        ready.position(displayWidth/2,658)

        ready.mousePressed(()=>{
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
            ex1.hide();
            ex2.hide();
            ex3.hide();
            ex4.hide();
            ex5.hide();
            ex6.hide();

            
            Z.hide();
            _1.hide();

            exZ.hide();
            ex_1.hide();
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
    
}