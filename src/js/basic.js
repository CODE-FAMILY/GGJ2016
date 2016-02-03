var toggleMute = true;
var toggleAni = true;

function animation(){
    if(toggleAni){
        toggleAni = false;
        document.getElementById("aniBtn").src = "images/gif_button_2-1.svg";
    }
    else{
        toggleAni = true;
        document.getElementById("aniBtn").src = "images/gif_button_1-2.svg";
    }
    
}

function mute(){
    if(toggleMute){
        toggleMute = false;
        document.getElementById("mutingBtn").src = "images/volume_button_2-1.svg";
    }
    else{
        toggleMute = true;
        document.getElementById("mutingBtn").src = "images/volume_button_1-1.svg";
    }
}