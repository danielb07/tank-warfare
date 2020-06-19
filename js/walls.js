class Walls {
    constructor(){
        this.walls = [];
        // border walls

        // right wall 
        this.walls.push(new Wall(1292, 380,12,452))
        // left wall
        this.walls.push(new Wall(240, 380,12,452))
        // bottom wall
        this.walls.push(new Wall(768, 600,1064,12))
        // top wall
        this.walls.push(new Wall(768, 156,1064,12))
        
        // // in-game walls
            // this.walls.push(new Wall(64, 502,320, 20))  
            // this.walls.push(new Wall(1244, 272,320, 20)) 

        this.walls.push(new Wall(344,492,200,32))
        this.walls.push(new Wall(560 ,496,32,200))

        this.walls.push(new Wall(724,392,32,200))
        this.walls.push(new Wall(492,244,200,32))
        


        this.walls.push(new Wall(1184, 264,200,32))
        this.walls.push(new Wall(940, 252,32,200))
        this.walls.push(new Wall(1004, 508,200,32))


    }
    display(){
        for(var i=0; i<this.walls.length; i++){
            var wall = this.walls[i];
            wall.display();
        }
    }
    
}