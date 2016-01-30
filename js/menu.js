//generates menu

function tempPopUp(){
    document.write("<div id=\"blanket\" style=\"display:none\"> </div>");
    document.write("<div id=\"popUpDiv\" style=\"display:none\">");
    document.write("<button href=\"#\" onclick=\"popup('popUpDiv')\" >Click to Close CSS Pop Up</button>");
    document.write("</div>");
    document.write("<button href=\"#\" onclick=\"popup('popUpDiv')\">Click to Open CSS Pop Up</button>");
}

function upgrade() {
    var power = "   <p id=\"power\">"+playa.getPower()+"/5</p> <button img=\"#\" onclick=\"playa.addPower()\">Upgrade</button> <button img=\"#\" onclick=\"plusOne(1)\">Check</button>";
    var cons = "   <p id=\"cons\">"+playa.getCons()+"/5</p> <button img=\"#\" onclick=\"playa.addCons()\">Upgrade</button> <button img=\"#\" onclick=\"plusOne(2)\">Check</button>";
    var speed = "   <p id=\"speed\">"+playa.getSpeed()+"/5</p> <button img=\"#\" onclick=\"playa.addSpeed()\">Upgrade</button> <button img=\"#\" onclick=\"plusOne(3)\">Check</button>";
    document.write("<div id=\"blanket\" style=\"display:none\"> </div>");
    document.write("<div id=\"popUpDiv\" style=\"display:none\">");
    document.write("<a href=\"#\" onclick=\"popup('popUpDiv')\" >Click to Close</a>");
    document.write(power);
    document.write(cons);
    document.write(speed);
    document.write("</div>");
    document.write("<button href=\"#\" onclick=\"popup('popUpDiv')\" img=\"#\">Upgrade</button>");
}

function plusOne(type){
	
switch(type){
        case 1:
            if(playa.power != 1)
			{
                console.log("Not 1");
            }
            else{
                console.log("1");
            }
            break;
        case 2:
            if(playa.cons != 1){
                console.log("Not 1");
            }
            else{
                console.log("1");
            }
            break;
        case 3:
            if(playa.speed != 1){
                console.log("Not 1");
            }
            else{
                console.log("1");
            }
            break;
    }
}