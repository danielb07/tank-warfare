class Walls {
    constructor(){
        this.walls = [];
        // border walls

        // right wall 
        this.walls.push(new Wall(displayWidth-248, displayHeight/2-55,12,displayHeight-350))
        // left wall
        this.walls.push(new Wall(displayWidth%displayWidth + 248, displayHeight/2-55,12,displayHeight-350))
        // bottom wall
        this.walls.push(new Wall(displayWidth/2, displayHeight-232,displayWidth-483,12))
        this.walls.push(new Wall(displayWidth/2, displayWidth%displayWidth +116,displayWidth-483,12))
        
        // // in-game walls
        // this.walls.push(new Wall(64, 502,300, 20))  
        // this.walls.push(new Wall(1244, 272,300, 20))  
        this.walls.push(new Wall(displayWidth/4,displayHeight/2,20,20))
        this.walls.push(new Wall(displayWidth/2.75,displayHeight/2,625,20))
        this.walls.push(new Wall(displayWidth/2,displayHeight/2,20,20))

    }
    display(){
        for(var i=0; i<this.walls.length; i++){
            var wall = this.walls[i];
            wall.display();
        }
    }
    
}