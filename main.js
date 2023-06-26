noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');
    document.getElementById("text_size").innerHTML = "Font size of the text = " + difference + "px";
    fill('#f5d442');
    stroke('#f5d442');
    textSize(difference);
    text('Vivaan', noseX, noseY);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + ", nose y = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left wrist x = " + leftWristX + ", right wrist x = " + rightWristX + ", difference = " + difference);
    }
}

function modelLoaded() {
    console.log('Model loaded successfully!');
}