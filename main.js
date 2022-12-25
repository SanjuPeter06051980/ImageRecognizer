camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
classifier=
 ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/voMr25sNu/model.json',modelLoaded);

 function modelLoaded(){
    console.log("Model loaded");
 }

 function check(){
    img= document.getElementById("selfie_image");
    classifier.classify(img,getResult);
 }

 function getResult(error,results)
 {
  if(error)
  {
    console.error(error);
  }
  else
  {
   console.log("results");
   document.getElementById("obj_name").innerHTML = results[0].label;
   document.getElementById("obj_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
 }