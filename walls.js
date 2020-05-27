class Walls {
    constructor(){
        this.walls = [];
        // this.walls.push(new Wall(54, 555,390,20))
        // this.walls.push(new Wall(386, 700,20,400))
        // this.walls.push(new Wall(1418, 131,390,20))
        

        this.walls.push(new Wall(513, 435,60,250))
         
    }
    display(){
        for(var i=0; i<this.walls.length; i++){
            var wall = this.walls[i];
            wall.display();
            
            
        }
    }
    collision(){
        // for(var i=0; i<this.walls.length; i++){
            var wall = this.walls[0]
            // console.log(cannonBall.x);
            
            if(cannonBall.x === 386 ){
                console.log("collision");
                
            }
           
        // }
    }

}