https://teachablemachine.withgoogle.com/models/g0s3bAIcE/
Webcam.set({
    width: 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});
cam=document.getElementById("cam");
Webcam.attach('cam');

function take(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured" src="'+data_uri+'">';
    });
}
console.log("ml5 version", ml5.version);
function modelLoaded(){
    console.log("done");
}
classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/g0s3bAIcE/model.json', modelLoaded);
function anything(error, working){
    if(error){
        console.error(error);
    }else{
        console.log(working);
        document.getElementById("c1").innerHTML=working[0].label;
        document.getElementById("c2").innerHTML=working[0].confidence.toFixed(2);
    }
}

function identify(){
    
        img=document.getElementById(">...<");
    classifier.classify(img, take);
    

}