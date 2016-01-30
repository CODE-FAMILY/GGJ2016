//generates menu

function tempPopUp(){
    print("<div id=\"blanket\" style=\"display:none\"> </div>");
    print("<div id=\"popUpDiv\" style=\"display:none\">");
    print("     <a href=\"#\" onclick=\"popup('popUpDiv')\" >Click to Close CSS Pop Up</a>");
    print("</div>");
    print("<a href=\"#\" onclick=\"popup('popUpDiv')\">Click to Open CSS Pop Up</a>");
}

function upgrade() {
    var power = "   <p>"+playa.getPower()+"/5</p>";
    var cons = "   <p>"+playa.getCons()+"/5</p>";
    var speed = "   <p>"+playa.getSpeed()+"/5</p>";
    print("<div id=\"blanket\" style=\"display:none\"> </div>");
    print("<div id=\"popUpDiv\" style=\"display:none\">");
    print("     <a href=\"#\" onclick=\"popup('popUpDiv')\" >Click to Close</a>");
    print(power);
    print(cons);
    print(speed);
    print("</div>");
    print("<a href=\"#\" onclick=\"popup('popUpDiv')\" img=\"#\">Upgrade</a>");
}