status = "";
objects = [];
function setup() {
    canvas = createCanvas(380, 380)
    canvas.center()
  video = createCapture(VIDEO);
  video.size(380, 380);
  video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
    objectName = document.getElementById("objectName").value;
    
}

function modelLoaded(){
    console.log("Modelo Carregado!");
    status = true;
}

function draw(){
    image(video, 0, 0, 380, 380);
    if(status != ""){
        objectDetector.detect(video, gotResult);
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: objetos detectados";
            
            fill("#FF0000");
            percent - floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15,  objects[i].y + 15);
            noFill();
            stroke("FF0000");
            rect( objects[i].x,  objects[i].y,  objects[i].,  objects[i].
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
