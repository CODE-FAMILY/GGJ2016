function summonMenu() {
    var pent = "   <button img=\"#\" >Pentagram</button>";
    var poke = "   <button img=\"#\" >Pokeball</button>";
    var tome = "   <button img=\"#\" >Tome of Death</button>";
    document.write("<div id=\"blanket\" style=\"display:none\"> </div>");
    document.write("<div id=\"summonPopUp\" style=\"display:none\">");
    document.write("     <a href=\"#\" onclick=\"popup('summonPopUp')\" >Click to Close</a>");
    document.write(pent);
    document.write(poke);
    document.write(tome);
    document.write("</div>");
    document.write("<button href=\"#\" id=\"sum\" class=\"btnsum\" onclick=\"popup('summonPopUp')\" img=\"#\">Upgrade</button>");
}

function summonRand() {
    
}