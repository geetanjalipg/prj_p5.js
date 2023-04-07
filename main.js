function preload(){

}

function setup(){
canvas=createCanvas(700,700,300);

canvas.position(100,250);
video=createCapture(VIDEO);
video.hide();
tint_colour="";



}



function draw(){
image(video,0,0,700,700);
tint(tint_colour);
}
function apply_filter(){
tint_colour=document.getElementById("colour").value;
}
function take_snapshot(){
save("yourpic.jpg")
}