class CannonBall {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.speed = 5;
        
        
    }

    display(){
        fill("red");
        // the radius of the ellipse is fixed to 10
        // this could be changed later

        this.x += 1 * this.speed;
        this.y -= 1 * this.speed;

        ellipseMode(CENTER);
        ellipse(this.x,this.y,10)
    }
}