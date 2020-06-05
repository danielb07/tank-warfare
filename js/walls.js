class Walls {
    constructor(){
        this.walls = [];
        // this.walls.push(new Wall(54, 554,390,20))
        // this.walls.push(new Wall(386, 700,20,400))
        // this.walls.push(new Wall(1418, 132,390,20))
        

        this.walls.push(new Wall(512, 432,60,240))
        // this.walls.push(new Wall(116,488,60,250))
        // this.walls.push(new Wall(316, 728, 250, 60))
        // this.walls.push(new Wall(330, 300, 250, 60))
         
    }
    display(){
        for(var i=0; i<this.walls.length; i++){
            var wall = this.walls[i];
            wall.display();
        }
    }
    
}