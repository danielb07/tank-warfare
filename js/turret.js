class Turret {
    constructor()
    {
      this.x ;
      this.y ;
      this.h = 10;
      this.w = 25;
      this.angle ;
      // null, 4, 2, 4/3, -1,-4/3, -2, -4 
    }
    
    display(){
      push();
      rectMode(CENTER)
      fill(200);
      translate(this.x,this.y);
      rotate(PI/this.angle);
      rect(11,1,this.w,this.h)
      // image(turretImg,11,1);
      // turretImg.resize(this.w, this.h)
      pop();
    }
  
  
  aiming(){
    
      if(keyIsDown(81)  ){
        rightAngle(-1);
      }
    
      else if(keyIsDown(67)  ){
        rightAngle(4);
      }
      
      else if(keyIsDown(88) ){
        rightAngle(2);
      }
      
      else if(keyIsDown(90) ){
        rightAngle(4/3)
      }
      else if(keyIsDown(69)  ){
        rightAngle(null);
      }
    
      else if(keyIsDown(49)  ){
        rightAngle(-4/3);
      }
    
      else if(keyIsDown(50)  ){
        rightAngle(-2);
      }
    
      else if(keyIsDown(51)  ){
        rightAngle(-4);
      }
    
    }
  }