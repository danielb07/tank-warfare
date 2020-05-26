
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.

 
var engine;
var world;
var box
 
var wall;
var gSlider;

function setup() {
    createCanvas(displayWidth,displayHeight);
    wall = new Wall(displayWidth/2,displayHeight/2+190,displayWidth,20);
     cannonBall = new CannonBall(displayWidth/2,displayHeight/2);
    //  824, 285,100,10

    

}
 

    
        
       
       

 
function draw() {
   
    // Draw all the elements including the slider that 
    background(200);
    wall.display();
    cannonBall.display();
}
function mousePressed(){
    console.log(mouseX + ", " + mouseY)
}
