megalovania = "";
come_2gether = "";
rightWristX = null;
rightWristY = null;
leftWristX = null;
leftWristY = null;

function preload(){
    megalovania = loadSound("Megalovania.mp3");
    come_2gether = loadSound("Come_2gether.mp3");
}

function setup(){
    canvas = createCanvas(600, 460);
    canvas.parent("center");

    document.getElementById("defaultCanvas0").style.removeProperty("position");

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    translate(width,0);
    scale(-1, 1);
    image(video, 0, 0, 600, 460);

    fill("#FF0000");
    circle(leftWristX, leftWristY, 20);
    circle(rightWristX, rightWristY, 20);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("LeftWristX = " + leftWristX + " LeftWristY = " + leftWristY + " RightWristX = " + rightWristX + " RightWristY = " + rightWristY);
    }
}