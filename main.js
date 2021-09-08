prediction1="";
prediction2="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("webcam_output").innerHTML="<img id='img' src='"+data_uri+"'>";
    })
}

console.log("ml5 version=", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lIE9W6NkP/model.json", model_loaded);

function model_loaded()
{
    console.log("model loaded is working");
}

function speak()
{
    api=window.speechSynthesis;
    speak_data1="The first prediction is" + prediction1;
    speak_data2="The second prediction is" + prediction2;
    utterThis= new SpeechSynthesisUtterance(speak_data1+speak_data2);
    api.speak(utterThis);
}