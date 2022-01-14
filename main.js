x=0;
y=0;
draw_circle="";
draw_rect="";
var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="System is Listening PLEASE SPEAK!";
    recognition.start();
}
recognition.onresult=function
(event){
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="Speech is recognized as:"+ content;
    if(content=="circle" || content=="Circle"){
        x=Math.floor(Math.random()*900);
         y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Drawing as Circle";
        draw_circle="set";
    }
    if(content=="rectangle" || content=="Rectangle"){
        x=Math.floor(Math.random()*900);
         y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Drawing  as Rectangle";
        draw_rect="set";
    }
}
function setup(){
    canvas=createCanvas(1000,700);
}
function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Drawing Finished as Circle";
        draw_circle="";
    }
   if(draw_rect=="set"){
        radius=Math.floor(Math.random()*100);
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="Drawing Finished as Rectangle";
        draw_rect="";
    } 
}