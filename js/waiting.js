class Waiting {
    constructor(){
        this.Wait;
        this.waiting;
        this.img
    }

    display(){
        this.Wait = createElement('h2');
        this.Wait.html('get ready soldier')
        this.Wait.class('inst');
        this.Wait.position(724, 376)
        this.waiting = createElement('h3');
        this.waiting.html('waiting for the enemy to comence the war')
        this.waiting.class('inst');
        this.waiting.position(633, 416);

       
        // this.img = loadIm

    }

    hide(){
        this.Wait.hide();
        this.waiting.hide();
    }
}