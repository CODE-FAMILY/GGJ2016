function itemScreen(){
    displayNone();

    var itemImage = document.getElementById("item-image");
    var weaponName = document.getElementById("weapon-name");

	weaponName.childNodes[0].nodeValue = "hello";

    console.log( weaponName.textContent );
    console.log( "a" );

    //itemImage.href.setAttribute("baseVal", playa.items[playa.getEquiped()].filePath);
    //weaponName.textContent = "hello"; //playa.items[playa.getEquiped()].name;
    //document.getElementById("item").style.display = "block";
}

function inventoryScreen(){
    
}
