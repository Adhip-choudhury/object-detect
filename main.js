object_status="";
objects=[];



function preload(){
    img=loadImage('https://aldf.org/wp-content/uploads/2018/05/lamb-iStock-665494268-16x9-e1559777676675-1200x675.jpg');
}


function setup(){
  canvas=createCanvas(965, 544);
  canvas.position(180, 90);
  object_detector=ml5.objectDetector("cocossd", modelLoaded);
  document.getElementById("status").innerHTML="Status: Detecting Object";
}


function draw(){
    image(img, 0,  0, 965, 544);
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
      for(var i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML="Status: Detected Object";
        fill("red");
        percent=Math.floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
        noFill();
        stroke("red");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }   
    }
}


function modelLoaded(){
    console.log("Model is loaded......");
    object_status=true;
    object_detector.detect(img, gotRuselt);
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