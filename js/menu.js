//generates menu

function tempPopUp(){
    document.write("<div id=\"blanket\" style=\"display:none\"> </div>");
    document.write("<div id=\"popUpDiv\" style=\"display:none\">");
    document.write("     <a href=\"#\" onclick=\"popup('popUpDiv')\" >Click to Close CSS Pop Up</a>");
    document.write("</div>");
    document.write("<a href=\"#\" onclick=\"popup('popUpDiv')\">Click to Open CSS Pop Up</a>");
}

function upgrade() {
    var power = "   <p>"+playa.getPower()+"/5</p>";
    var cons = "   <p>"+playa.getCons()+"/5</p>";
    var speed = "   <p>"+playa.getSpeed()+"/5</p>";
    document.write("<div id=\"blanket\" style=\"display:none\"> </div>");
    document.write("<div id=\"popUpDiv\" style=\"display:none\">");
    document.write("     <a href=\"#\" onclick=\"popup('popUpDiv')\" >Click to Close</a>");
    document.write(power);
    document.write(cons);
    document.write(speed);
    document.write("</div>");
    document.write("<a href=\"#\" onclick=\"popup('popUpDiv')\" img=\"#\">Upgrade</a>");
}