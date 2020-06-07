class Bandage {
    constructor(x, y){
        this.s = 40;
        this.x = x;
        this.y = y;
    }

    display(){
       
        image(bandageImg, this.x, this.y)
        bandageImg.resize(this.s, this.s)
    }
    
}