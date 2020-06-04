class Tank {
    UPKEY = 87;
    DOWNKEY = 83;
    LEFTKEY = 65;
    RIGHTKEY = 68

    constructor(x,y,h,w,c){

        this.h = h;
        this.w = w;
         this.xdir = 0;
        this.ydir = 0;
        this.bounceOff = 1;
        this.speed = 2;
        this.x = x;
        this.y = y;
        this.sprite = c;
        
       
    }
    fire(){
        tankCannonBall.speed = 1;
        tankCannonBall.distance = 0;
        if(tankTurret.angle === -1){
            tankCannonBall.x = tankTurret.x+4;
            tankCannonBall.y = tankTurret.y;
            tankCannonBall.xdir = -2;
            tankCannonBall.ydir = 0;
            
            writeCannonBallPosition(tankCannonBall.xdir,tankCannonBall.ydir)
        }

        else if(tankTurret.angle === null){
            tankCannonBall.x = tankTurret.x+4;
            tankCannonBall.y = tankTurret.y;
            tankCannonBall.xdir = 2;
            tankCannonBall.ydir = 0;
            
            
            writeCannonBallPosition(tankCannonBall.xdir,tankCannonBall.ydir)
        }

        else if(tankTurret.angle === 2){
            tankCannonBall.x = tankTurret.x;
            tankCannonBall.y = tankTurret.y+4.5;
            tankCannonBall.xdir = 0;
            tankCannonBall.ydir = 2;
            
            writeCannonBallPosition(tankCannonBall.xdir,tankCannonBall.ydir)
        }

        else if(tankTurret.angle === -2){
            tankCannonBall.x = tankTurret.x;
            tankCannonBall.y = tankTurret.y+4.5;
            tankCannonBall.xdir = 0;
            tankCannonBall.ydir = -2;
            
            writeCannonBallPosition(tankCannonBall.xdir,tankCannonBall.ydir)
        }

        else if(tankTurret.angle === 4){
            tankCannonBall.x = tankTurret.x;
            tankCannonBall.y = tankTurret.y;
            tankCannonBall.xdir = 2;
            tankCannonBall.ydir = 2;
            
            writeCannonBallPosition(tankCannonBall.xdir,tankCannonBall.ydir)
        }

        else if(tankTurret.angle === 4/3){
            tankCannonBall.x = tankTurret.x;
            tankCannonBall.y = tankTurret.y;
            tankCannonBall.xdir = -2;
            tankCannonBall.ydir = 2;
         
            writeCannonBallPosition(tankCannonBall.xdir,tankCannonBall.ydir)
        }

        else if(tankTurret.angle === -4/3){
            tankCannonBall.x = tankTurret.x;
            tankCannonBall.y = tankTurret.y;
            tankCannonBall.xdir = -2;
            tankCannonBall.ydir = -2;
            
            writeCannonBallPosition(tankCannonBall.xdir,tankCannonBall.ydir)
        }

        else if(tankTurret.angle === -4){
            tankCannonBall.x = tankTurret.x;
            tankCannonBall.y = tankTurret.y;
            tankCannonBall.xdir = 2;
            tankCannonBall.ydir = -2;
            
            writeCannonBallPosition(tankCannonBall.xdir,tankCannonBall.ydir)
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
        fill(this.sprite);
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
