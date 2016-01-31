//generates menu

function tempPopUp(){
    document.write("<div id=\"blanket\" style=\"display:none\"> </div>");
    document.write("<div id=\"popUpDiv\" style=\"display:none\">");
    document.write("<button href=\"#\" onclick=\"popup('popUpDiv')\" >Click to Close CSS Pop Up</button>");
    document.write("</div>");
    document.write("<button href=\"#\" onclick=\"popup('popUpDiv')\">Click to Open CSS Pop Up</button>");
}

function upgrade() {
    var power = "   <p id=\"power\">"+playa.getPower()+"/5</p> <button img=\"#\" onclick=\"playa.addPower()\">Upgrade</button> ";
    var cons = "   <p id=\"cons\">"+playa.getCons()+"/5</p> <button img=\"#\" onclick=\"playa.addCons()\">Upgrade</button> ";
    var speed = "   <p id=\"speed\">"+playa.getSpeed()+"/5</p> <button img=\"#\" onclick=\"playa.addSpeed()\">Upgrade</button> ";
    document.write("<div id=\"blanket\" style=\"display:none\"> </div>");
    document.write("<div id=\"popUpDiv\" style=\"display:none\">");
    document.write("<a href=\"#\" onclick=\"popup('popUpDiv')\" >Click to Close</a>");
    document.write(power);
    document.write(cons);
    document.write(speed);
    document.write("</div>");
    document.write("<button href=\"#\" onclick=\"popup('popUpDiv')\" img=\"#\">Upgrade</button>");
}