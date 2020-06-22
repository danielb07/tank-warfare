class Health {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    display(){
        fill(250, 0,10);
        noStroke();
        ellipseMode(CENTER);
        image(heartImage,this.x, this.y);
        heartImage.resize(60,50)
    }
}