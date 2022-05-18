function preload(){

}

function setup(){
    Canvas=createCanvas(640,280);
    Canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw() {
    image(video,0,0,640,280);
    tint(tint_color);

}
function take_snapshot(){
    save ("rujula.png");
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value ;
}