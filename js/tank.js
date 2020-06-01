class Tank {
    UPKEY = 87;
    DOWNKEY = 83;
    LEFTKEY = 65;
    RIGHTKEY = 68

    constructor(h,w){

        this.h = h;
        this.w = w;
         this.xdir = 0;
        this.ydir = 0;
        this.bounceOff = 1;
        this.speed = 2;
        
       
    }
    fire(){
        cannonBall.speed = 1;
        cannonBall.distance = 0;
        if(turret.angle === -1){
            cannonBall.x = turret.x+4;
            cannonBall.y = turret.y;
            cannonBall.xdir = -2;
            cannonBall.ydir = 0;
            
            writeCannonBallPosition(cannonBall.xdir,cannonBall.ydir)
        }

        else if(turret.angle === null){
            cannonBall.x = turret.x+4;
            cannonBall.y = turret.y;
            cannonBall.xdir = 2;
            cannonBall.ydir = 0;
            
            
            writeCannonBallPosition(cannonBall.xdir,cannonBall.ydir)
        }

        else if(turret.angle === 2){
            cannonBall.x = turret.x;
            cannonBall.y = turret.y+4.5;
            cannonBall.xdir = 0;
            cannonBall.ydir = 2;
            
            writeCannonBallPosition(cannonBall.xdir,cannonBall.ydir)
            // writeCannonBallPosition(turret.x, turret.y+4.5)
        }

        else if(turret.angle === -2){
            cannonBall.x = turret.x;
            cannonBall.y = turret.y+4.5;
            cannonBall.xdir = 0;
            cannonBall.ydir = -2;
            
            writeCannonBallPosition(cannonBall.xdir,cannonBall.ydir)
        }

        else if(turret.angle === 4){
            cannonBall.x = turret.x;
            cannonBall.y = turret.y;
            cannonBall.xdir = 2;
            cannonBall.ydir = 2;
            
            writeCannonBallPosition(cannonBall.xdir,cannonBall.ydir)
        }

        else if(turret.angle === 4/3){
            cannonBall.x = turret.x;
            cannonBall.y = turret.y;
            cannonBall.xdir = -2;
            cannonBall.ydir = 2;
         
            writeCannonBallPosition(cannonBall.xdir,cannonBall.ydir)
        }

        else if(turret.angle === -4/3){
            cannonBall.x = turret.x;
            cannonBall.y = turret.y;
            cannonBall.xdir = -2;
            cannonBall.ydir = -2;
            
            writeCannonBallPosition(cannonBall.xdir,cannonBall.ydir)
        }

        else if(turret.angle === -4){
            cannonBall.x = turret.x;
            cannonBall.y = turret.y;
            cannonBall.xdir = 2;
            cannonBall.ydir = -2;
            
            writeCannonBallPosition(cannonBall.xdir,cannonBall.ydir)
        }
    }

    updateMovement(){
        if (keyIsDown(DOWN_ARROW) || keyIsDown(this.DOWNKEY)) {
            writeTankPosition(0,1);
        } else if (keyIsDown(UP_ARROW)|| keyIsDown(this.UPKEY)) {
            writeTankPosition(0,-1)
        } else if(keyIsDown(LEFT_ARROW)|| keyIsDown(this.LEFTKEY)){
            writeTankPosition(-1,0)
        } else if(keyIsDown(RIGHT_ARROW)|| keyIsDown(this.RIGHTKEY)){
            writeTankPosition(1,0)
        }
    }

   
    display(){
        push();
        ellipseMode(CENTER);
        fill("black");
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
