class Tank {
    UPKEY = 87;
    DOWNKEY = 83;
    LEFTKEY = 65;
    RIGHTKEY = 68

    constructor(x,y,h,w){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
         this.xdir = 0;
        this.ydir = 0;
        this.bounceOff = 1;
        this.speed = 1;
        
       
    }
    fire(){
        cannonBall.x = tank.x;
        cannonBall.y = tank.y;
        cannonBall.speed = 2;
        cannonBall.xdir = 2;
        cannonBall.ydir = 0;
        cannonBall.distance = 0;
    }
    movement(){
 
        // this.x += this.xdir  ;
        // this.y += this.ydir ;
        if (keyIsDown(DOWN_ARROW) || keyIsDown(this.DOWNKEY)) {
            this.y += this.speed;
        } else if (keyIsDown(UP_ARROW)|| keyIsDown(this.UPKEY)) {
            this.y -= this.speed;
        } else if(keyIsDown(LEFT_ARROW)|| keyIsDown(this.LEFTKEY)){
            this.x -= this.speed;
        } else if(keyIsDown(RIGHT_ARROW)|| keyIsDown(this.RIGHTKEY)){
            this.x += this.speed;
        }

    }
    display(){
        push();
        ellipseMode(CENTER);
        fill("black");
        tint(255,0)
        ellipse(this.x,this.y,this.h,this.w);
        pop();
    }
    collision(){
        for(var i=0; i <walls.walls.length;i++ ){
            var wall = walls.walls[i];

            if(this.x - this.w/2 === wall.x + (wall.w/2) && this.y >wall.y- (wall.h/2) && this.y < wall.y+ (wall.h/2)){  // right wall
                this.x += this.bounceOff;
                
            } else if(this.x + this.w/2 === (wall.x - (wall.w/2))   && this.y < wall.y+ (wall.h/2) && this.y > wall.y- (wall.h/2)){ // left wall
                this.x -= this.bounceOff;
                
            } else if(this.y - this.h/2 === (wall.y + (wall.h/2)) && this.x < wall.x + (wall.w/2) && this.x > (wall.x - (wall.w/2))){  // bottom wall
                 this.y += this.bounceOff; 
             } else if(this.y + this.h/2 === (wall.y - (wall.h/2))&& this.x < wall.x + (wall.w/2) && this.x > (wall.x - (wall.w/2))){  // top wall
                this.y -= this.bounceOff; 
            }
        }
    }
}
