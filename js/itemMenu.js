function itemScreen() {
  //displayNone();

  var itemImage = document.getElementById("item-image");
  var weaponName = document.getElementById("weapon-name");

  changeSVGImage("images/heart.svg", "item-image");
  updateSVGText("HardCore", "weapon-name");
}

function inventoryScreen() {
  displayNone();
  document.getElementById("inventory").style.display = "inline";
  document.getElementById("upgrade-points-inv").innerHTML = playa.getPoints().toString();
}

function purchaseHealing() {
  if (playa.getPoints() >= 500) {
    playa.addHp(25);
    playa.points -= 500;
  }
  document.getElementById("upgrade-points-inv").innerHTML = (playa.getPoints());
}
