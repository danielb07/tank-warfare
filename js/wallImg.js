class WImg {
    constructor(x,y,i ) {
        this.x = x;
        this.y = y;
        this.i = i;
        }
        display(){       
            rectMode(CENTER);
            fill("#000000");
            image(this.i,this.x, this.y)
            
        
    }  
}