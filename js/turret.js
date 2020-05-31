class Turret {
    constructor()
    {
      this.x ;
      this.y ;
      this.h = 10;
      this.w = 25;
      this.angle =null ;
      // null, 4, 2, 4/3, -1,-4/3, -2, -4 
    }
    
    display(){
      push();
      rectMode(CENTER)
      fill(200);
      translate(this.x,this.y);
      rotate(PI/this.angle);
      rect(11,1,this.w,this.h)
      pop();
    }
  
  
  aiming(){
    
      if(keyIsDown(81)  ){
        this.angle = -1;
      }
    
      else if(keyIsDown(67)  ){
        this.angle = 4;
      }
      
      else if(keyIsDown(88) ){
        this.angle = 2;
      }
      
      else if(keyIsDown(90) ){
        this.angle = 4/3
      }
      else if(keyIsDown(69)  ){
        this.angle = null;
      }
    
      else if(keyIsDown(49)  ){
        this.angle = -4/3;
      }
    
      else if(keyIsDown(50)  ){
        this.angle = -2;
      }
    
      else if(keyIsDown(51)  ){
        this.angle = -4;
      }
    
    }
  }