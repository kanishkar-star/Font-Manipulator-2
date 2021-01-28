function set_text(){
    input = document.getElementById("name_input").value;
    if(input == ""){
        alert("Please Enter your name");
    }
    else{
        alert("Hi " + input + "! Your name is added Successfully");
    }

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 490);
    canvas.position(700, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotpose);
}

function modelLoaded(){
    console.log("Posenet Is Initialised");
}

function gotpose(results){
    if(results > 0){
        console.log(results);
    }
}

function draw(){
    background('#cccccc');

    fill('red');
    textSize(20)
    text('Your Name is here - ' , 200, 20);
}