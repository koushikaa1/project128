song1="";
song2="";
leftwristx="";
leftwristy="";
rightwristx="";
rightwristy="";
 function preload()
 {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
 }
function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

     poseNet = ml5.poseNet( video, modelLoaded);
     poseNet.on('pose',gotPoses)
}

function gotPoses(results) {
    if(results.length > 0)
    {
  console.log(results);


  leftwristx = results[0].pose.leftwrist.x;
  leftwristy = results[0].pose.leftwrist.y;
  rightwristx= results[0].pose.rightwrist.x;
  rightwristy = results[0].pose.rightwrist.y;
  console.log("left wrist X = "+ leftwristy + "leftWrist Y = " + leftwristy + "rightWristX = " + rightwristx + "rightWrist Y = " + rightwristy);
    }
}

 function modelLoaded() {
    console.log(" PoseNet is intialized! ");
}
function draw()
{
    image(video,0,0,600,500);
}
