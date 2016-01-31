function itemScreen(){
    //displayNone();

    	var itemImage = document.getElementById("item-image");
	var weaponName = document.getElementById("weapon-name");

	changeSVGImage("images/heart.svg", "item-image");
	updateSVGText("HardCore", "weapon-name");



	console.log( "stop" );

    //itemImage.href.setAttribute("baseVal", playa.items[playa.getEquiped()].filePath);
    //weaponName.textContent = "hello"; //playa.items[playa.getEquiped()].name;
    //document.getElementById("item").style.display = "block";
}

function inventoryScreen(){
    
}
