nose_X = 0;
nose_Y = 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/L5Y05kpv/Clown-Nose-PNG-High-Quality-Image-1-768x768.png');
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose, nose_X, nose_Y, 30, 30);
}

function modelLoaded(){
    console.log('Posenet is Initiating!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_X = results[0].pose.nose.x-15;
        nose_Y = results[0].pose.nose.y-15;
        console.log("nose x co-ordinate =" +nose_X);
        console.log("nose y co-ordinate =" +nose_Y);
    }
}

function take_snapshot(){
    save('myselfie.png');
}