class ENEMYhealth {
    constructor(x,y){
        this.x =x;
        this.y = y;
    }

    display(){
        image(enemyhealthImg, this.x, this.y);
        enemyhealthImg.resize(80,40)
    }
    
}