class Walls {
    constructor(){
        this.walls = [];
        this.wImg = []
        this.border = [];
        // border walls

        // right wall 
        this.border.push(new Wall(1292, 380,12,452))
        // left wall
        this.border.push(new Wall(240, 380,12,452))
        // bottom wall
        this.border.push(new Wall(768, 600,1064,12))
        // top wall
        this.border.push(new Wall(768, 156,1064,12))
        
        // // in-game walls
            // this.walls.push(new Wall(64, 502,320, 20))  
            // this.walls.push(new Wall(1244, 272,320, 20)) 

        this.walls.push(new Wall(344,492,200,32))
        this.wImg.push(new WImg(244,476,HwallImg))

        this.walls.push(new Wall(560 ,496,32,200))
        this.wImg.push(new WImg(544 ,396,VwallImg))

        this.walls.push(new Wall(724,392,32,200))
        this.wImg.push(new WImg(708,292,VwallImg))

        this.walls.push(new Wall(492,244,200,32))
        this.wImg.push(new WImg(392,228,HwallImg))


        this.walls.push(new Wall(1184, 264,200,32))
        this.wImg.push(new WImg(1084, 248,HwallImg))

        this.walls.push(new Wall(940, 252,32,200))
        this.wImg.push(new WImg(924, 152,VwallImg))

        this.walls.push(new Wall(1004, 508,200,32))
        this.wImg.push(new WImg(904, 492,HwallImg))


    }
    display(){
        
        for(var i=0; i<this.walls.length; i++){
            var wall = this.walls[i];
            wall.display();
        }
        for(var k=0; k<this.wImg.length;k++){
            var Img = this.wImg[k]
            Img.display();
        }

        for(var j=0; j<this.border.length;j++){
            var border = this.border[j];
            border.display();
        }

        
    }
    
}