function itemScreen(){
    displayNone();
    document.getElementById("item-image").setAttribute("href",playa.items[playa.getEquiped()].filePath);
    document.getElementById("weapon-name").innerText=playa.items[playa.getEquiped()].name;
    document.getElementById("item").style.display = "block";
}

function inventoryScreen(){
    
}