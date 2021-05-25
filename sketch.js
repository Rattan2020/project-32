const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bg;
var backgroundImg;

function preload() {
    
}

function setup(){
     createCanvas(1200,700);
   
    engine = Engine.create();
    world = engine.world;

     getBackgroundImg();
}

function draw(){
    
    // add condition to check if any background image is there to add
  
if (backgroundImg){
    background(backgroundImg);
}

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
var responseJSON= await response.json();

var datetime= responseJSON.datetime;

    // write code slice the datetime

var hour = datetime.slice(11,13);
console.log(hour);
    // add conditions to change the background images from sunrise to sunset
if (hour>= 4   &&  hour<=6 ){
bg= "sunrise1.png";
}
if (hour>=6    &&  hour<=8 ){
bg= "sunrise2.png";

}
if (hour>=8    &&  hour<=10 ){
bg= "sunrise3.png";

}
if (hour>=10    &&  hour<=12 ){
bg= "sunrise4.png";

}
if (hour>=12    &&  hour<=14 ){
bg= "sunrise5.png";

}
if (hour>=14    &&  hour<=16 ){
bg= "sunrise6.png";

}
if (hour>=16    &&  hour<=18 ){
bg= "sunset7.png";

}
if (hour>=18    &&  hour<=20 ){
bg= "sunset8.png";

}
if (hour>=20    &&  hour<=22 ){
bg= "sunset9.png";

}
if (hour>=22    &&  hour<=24 ){
bg= "sunset10.png";

}
if (hour>=24    &&  hour<=0 ){
bg= "sunset11.png";

}
else{
bg= "sunset12.png";

}

    //load the image in backgroundImg variable here

backgroundImg=loadImage(bg);

}
