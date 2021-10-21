object_status="";




function preload(){
    img=loadImage('dog_cat.jpg');
}


function setup(){
  canvas=createCanvas(965, 544);
  canvas.position(180, 90);

  objectDetector=ml5.objectDetector("cocosst", modelLoaded);
  document.getElementById("status").innerHTML="Status: Detecting Object";
}


function draw(){
    image(img, 150,  0, 695, 344);
    fill("red");
    text("Dog", 190, 70);
    noFill();
    stroke("red");
    rect(180, 55, 400,250);

    noFill();
    noStroke();

    fill("yellow");
    text("Cat", 300,90);
    noFill();
    stroke("yellow");
    rect(290 ,70, 300,250);
    noStroke();
}

function modelLoaded(){
  object_status=true;
  object_detector.detect(img, gotRuselt);
}


function gotRuselt(error,ruselts){
  if(error){
    console.error(error);
  }
  else{
    console.log(ruselts);
  }
}