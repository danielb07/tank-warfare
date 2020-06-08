class Waiting {
    constructor(){
        this.Wait;
        this.waiting;
        this.img
    }

    display(){
        this.Wait = createElement('h2');
        this.Wait.html('get ready soldier')
        this.Wait.position(724, 376)
        this.waiting = createElement('h3');
        this.waiting.html('waiting for the enemy to comence the war')
        this.waiting.position(633, 416);

        this.img = createImage(waitGif);   
        this.img.position(782, 550)
        
        // this.img = loadIm

    }

    hide(){
        this.Wait.hide();
        this.waiting.hide();
    }
}