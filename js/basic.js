function init(){
    
    commonEnemy = starter.clone();
    document.getElementById("monstImage").src = (commonEnemy.enemyImg);
    document.getElementById("monstHealth").style.width = "100%";
    
    startPopUp();
}

function startPopUp(){
    document.write("<div id=\"blanket\" style=\"display:none\"> </div>");
    document.write("<div id=\"popUpStart\" style=\"display:none\">");
    document.write("<button href=\"#\" onclick=\"popup('popUpStart')\" >Click to Close CSS Pop Up</button>");
    document.write("</div>");
    document.write("<button href=\"#\" onclick=\"popup('popUpStart')\">Click to Open CSS Pop Up</button>");
}