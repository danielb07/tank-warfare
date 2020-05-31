class CannonBall {
    constructor(){
        this.speed = 1;
        this.distance;
        this.x = displayWidth+20;
        this.y = displayHeight/2;
        
    }

    display(){
        fill("red");
        
        // the radius of the ellipse is fixed to 10
        // this could be changed later
        ellipseMode(CENTER);
        ellipse(this.x,this.y,10)

        this.x += this.xdir * this.speed;
        this.y += this.ydir * this.speed;

        this.distance += 2

        if(this.distance > 250){
            console.log("at last");
            this.distance = undefined;
            this.x = displayWidth+20;
            this.y = displayHeight/2;
        }
    }

    bounceOff () {
        // console.log(this.xdir);
        
        
        var xdir = this.xdir;
        var ydir = this.ydir;
        // console.clear();
        // (xdir +", "+ ydir);
        
        
        for(var i=0; i <walls.walls.length;i++ ){
            var wall = walls.walls[i];   
            if(xdir === 0 || ydir === 0){
                
                
                if(this.x === (wall.x - (wall.w/2)) && this.y > (wall.y-(wall.h/2)) && this.y < (wall.y+(wall.h/2))  ){
                    this.xdir = -(xdir)
                }
                else if(this.x === (wall.x + (wall.w/2)) && this.y > (wall.y-(wall.h/2)) && this.y < (wall.y+(wall.h/2))  ){
                    this.xdir = -(xdir);
                }
                if(this.y === (wall.y - (wall.h/2)) && this.x > (wall.x-(wall.w/2)) && this.x < (wall.x+(wall.w/2))  ){
                    this.ydir = -(ydir)
                }
                else if(this.y === (wall.y + (wall.h/2)) && this.x > (wall.x-(wall.w/2)) && this.x < (wall.x+(wall.w/2))  ){
                    console.log("heere");
                    
                    this.ydir = -(ydir);
                }
                // if(this.y > (wall.y - (wall.h/2))  || this.y > wall.y + (wall.h/2) ){
                //     this.ydir = -(ydir)
                // }
            } else if(xdir > 0 && ydir > 0){
                if (this.x > (wall.x - (wall.w/2))  && this.x < wall.x + (wall.w/2) && this.y === wall.y- (wall.h/2)){
                    this.ydir = -(ydir);
                    
                } else if (this.x === (wall.x - (wall.w/2)) && this.y > wall.y- (wall.h/2) && this.y < wall.y+ (wall.h/2)){
                    this.xdir = -(xdir)
                }
            } else if (xdir < 0 && ydir > 0){
                if(this.y=== wall.y-(wall.h/2) && this.x > wall.x -(wall.w/2) && this.x < wall.x +(wall.w/2)){
                    this.ydir = -(ydir)
                    
                } else if(this.x === wall.x +(wall.w/2) && this.y > (wall.y-(wall.h/2)) && this.y < (wall.y+(wall.h/2))){
                    this.xdir = -(xdir)
                    
                }
            } else if (xdir > 0 && ydir < 0){
                if(this.y === (wall.y + (wall.h/2)) && this.x > wall.x -(wall.w/2) && this.x < wall.x +(wall.w/2)){
                    this.ydir = -(ydir);
                    
                } else if(this.x === wall.x -(wall.w/2)&& this.y > (wall.y-(wall.h/2)) && this.y < (wall.y+(wall.h/2))){
                    this.xdir = -(xdir);
                    
                }
                // ("bottom & left");
            }
            else if(xdir < 0 && ydir < 0){
                if(this.y === (wall.y + (wall.h/2) + 1) && this.x > wall.x -(wall.w/2) && this.x < wall.x +(wall.w/2)){
                    this.ydir = -(ydir)
                    
                } else if(this.x === wall.x +(wall.w/2) && this.y > (wall.y-(wall.h/2)) && this.y < (wall.y+(wall.h/2))){
                    this.xdir = -(xdir)
                    
                }
                // ("bottom and right");
                
            }
        }
    }
}