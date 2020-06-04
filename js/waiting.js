class Waiting {
    constructor(){
        this.Wait;
        this.waiting;
    }

    display(){
        this.Wait = createElement('h2');
        this.Wait.html('get ready soldier')
        this.Wait.position(724, 376)
        this.waiting = createElement('h3');
        this.waiting.html('waiting for the enemy to comence the war')
        this.waiting.position(633, 416);
    }

    hide(){
        this.Wait.hide();
        this.waiting.hide();
    }
}