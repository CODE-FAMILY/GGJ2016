function highScores(){
    document.write("<div id=\"blanket\" style=\"display:none\"> </div>");
    document.write("<div id=\"highScoresPopUp\" style=\"display:none\">");
    document.write("     <a href=\"#\" onclick=\"popup('highScoresPopUp')\" >Click to Close</a>");
    document.write("</div>");
    document.write("<button href=\"#\" id=\"sum\" class=\"btnsum\" onclick=\"popup('highScoresPopUp')\" img=\"#\">Upgrade</button>");
}