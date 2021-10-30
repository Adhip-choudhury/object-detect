object_status="";
objects=[];



function preload(){

}


function setup(){
  canvas=createCanvas(400, 400);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(400,400);
  video.hide();
  object_detector=ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML="Status: Detecting Object";
}


function draw(){

    image(video, 0,  0, 400, 400);
    
    // fill("red");
    // text("Dog", 130,130);
    // noFill();
    // stroke("red");
    // rect(120, 110, 700,400);

    // noFill();
    // noStroke();

    // fill("yellow");
    // text("Cat", 440,150);
    // noFill();
    // stroke("yellow");
    // rect(430 ,130, 400,350);
    // noStroke();

    if(object_status != ""){  
        object_detector.detect(video, gotRuselt);
    var r=random(255);
    var g=random(255);
    var b=random(255);

      for(var i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML="Status: Detected Object";
        document.getElementById("Number_of_objects").innerHTML="Number of objects detected are: "+objects.length;
        fill(r,g,b);
        percent=Math.floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }   
    }
}


function modelLoaded(){
    console.log("Model is loaded......");
    object_status=true;
}


function gotRuselt(error ,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    objects=results;
  }
}