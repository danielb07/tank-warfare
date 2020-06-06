class Health {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    display(){
        fill(250, 0,10);
        noStroke();
        ellispeMode(CENTER);
        ellipse(this.x, this.y, 20,50);
    }
}