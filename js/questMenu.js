function questPopup() {
    document.write("<div id=\"blanket\" style=\"display:none\"> </div>");
    document.write("<div id=\"questPopup\" style=\"display:none\">");
	document.write("<h1>");
	document.write("");
    document.write("     <a href=\"#\" onclick=\"popup('questPopup')\" >Complete</a>");
    document.write("</div>");
    document.write("<button href=\"#\" onclick=\"popup('questPopup')\" img=\"#\">Quest Pop Up</button>");
}

runningQuest.monster.name = title
runningQuest.questString = description