status="";
function preload() {
}
function setup() {
    canvas = createCanvas(380, 300);
    canvas.position(450, 260);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 380, 300);
}
input = " ";
function start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting"; 
    input = document.getElementById('name').value;
    console.log(input);
}
function modelLoaded() {
    console.log("model loaded");
    console.log("loaded cocossd");
    status = true;
}