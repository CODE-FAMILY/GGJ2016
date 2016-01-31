
//generates menu

function tempPopUp(){
    document.write("<div id=\"blanket\" style=\"display:none\"> </div>");
    document.write("<div id=\"popUpDiv\" style=\"display:none\">");
    document.write("<button href=\"#\" onclick=\"popup('popUpDiv')\" >Click to Close CSS Pop Up</button>");
    document.write("</div>");
    document.write("<button href=\"#\" onclick=\"popup('popUpDiv')\">Click to Open CSS Pop Up</button>");
}

function upgrade() {
    displayNone();
    document.getElementById("upgrade").style.display = "block";
    document.getElementById("upgrade-costs").innerHTML = (playa.skillLvl*100).toString();
    document.getElementById("upgrade-points").innerHTML = (playa.getPoints()).toString();
    showAll();
}


function showAll(){
    var i;
    var j;
    var types = ["pow","spe","const","wep"];
    var stats = [playa.getPower(),playa.getSpeed(),playa.getCons(),playa.getItem()];
    for(j = 0; j < 4; j++){
        for(i = 1; i <= 5; i++){
            if(stats[j] >= i){
                document.getElementById(types[j]+i).style.display = "inline";
                document.getElementById(types[j]+i).disabled = true;
                document.getElementById(types[j]+i).className = "lightgrey";
            }
            else{
                document.getElementById(types[j]+i).style.display = "none";
            }
        }
        if(stats[j] != 5){
            document.getElementById(types[j]+(stats[j]+1)).style.display = "inline";
            document.getElementById(types[j]+(stats[j]+1)).className = "purple";
            document.getElementById(types[j]+(stats[j]+1)).disabled = false;
        }
    }
}