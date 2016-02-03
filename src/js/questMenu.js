function questPopup() {
	//var title = runningQuest.getMonster().name;
	//var description = runningQuest.getDescription();
	
    document.write("<div id=\"blanket\" style=\"display:none\"> </div>");
    document.write("<div id=\"questPopup\" style=\"display:none\">");
	//document.write("<h1>"+title+"</h1>");
	//document.write("<p>"+description+"</p>");
	//document.write("<img src="">Img Enemy</img>");
	//document.write("<img src="">Img Item</img>");
    document.write("     <a href=\"#\" onclick=\"popup('questPopup')\" >Complete</a>");
    document.write("</div>");
    document.write("<button href=\"#\" onclick=\"popup('questPopup')\" img=\"#\">Quest Pop Up</button>");
}