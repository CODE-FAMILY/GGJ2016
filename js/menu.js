
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
    var power = "   <p id=\"power\">"+playa.getPower()+"/5</p> <button img=\"#\" onclick=\"playa.addPower()\">Upgrade</button> ";
    var cons = "   <p id=\"cons\">"+playa.getCons()+"/5</p> <button img=\"#\" onclick=\"playa.addCons()\">Upgrade</button> ";
    var speed = "   <p id=\"speed\">"+playa.getSpeed()+"/5</p> <button img=\"#\" onclick=\"playa.addSpeed()\">Upgrade</button> ";
    document.getElementById("upgrade").style.display = "block";
    
    showAll()
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