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

