function init(){
    
    commonEnemy = starter.clone();
    document.getElementById("monstImage").src = (commonEnemy.enemyImg);
    document.getElementById("monstHealth").style.width = "100%";
    
    var starterQ = new quest();
    starterQ.id = -1;
    starterQ.limit = 1;
    starterQ.monster = starter.clone();
    starterQ
    
    startPopUp();
    
}

function startPopUp(){
    document.write("<div id=\"blanket\" style=\"display:none\"> </div>");
    document.write("<div id=\"popUpStart\" style=\"display:none\">");
    document.write("<h2>The Summoning</h2>");
    document.write("<p>   You must click, and click the monster on the top right until you kill enough monsters and click enough times to join the holy order of the Clickers.</p>");
    document.write("<button href=\"#\" onclick=\"popup('popUpStart')\" >I am ready to complete my quest</button>");
    document.write("</div>");
}