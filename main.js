Vidstatus="";
objects = [];
function preload() {
}
function setup() {
    canvas = createCanvas(380, 300);
    canvas.position(450, 260);
    video = createCapture(VIDEO);
    video.hide();
}
objectDetector="";
function draw() {
    image(video, 0, 0, 380, 300);
    if(Vidstatus == true) {
        objectDetector.detect(video, gotResult);
    }
    
}
input = " ";
function start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting"; 
    input = document.getElementById('name').value;
    console.log(input);
    
    if(Vidstatus != " ") {
        for(i = 0; i < objects.length; i++) {

            stroke('#00000');
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke('#27523a');
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

            if(objects[i].label == input) { 
                video.stop();
                objectDetector.detect(gotResult);
                document.getElementById('status').innerHTML = "Status = " + input + " Found";
                var synth = window.speechSynthesis;
                speak_data = "Your " + input + "has been found";
                var utterThis = new SpeechSynthesisUtterance(speak_data);
                synth.speak(utterThis);
            } else{
                document.getElementById('status').innerHTML =  "Status = " + input + " NOT Found";
            }

        }
    }
    
}

function modelLoaded() {
    console.log("model loaded");
    console.log("loaded cocossd");
    Vidstatus = true;
}

function gotResult(error, results) {
    if(error) {
        console.error();
    }
    console.log(results);
    objects = results;
}