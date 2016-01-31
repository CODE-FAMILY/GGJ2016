function summonMenu() {
    var pent = "   <p><button img=\"#\" onclick=\"summonRand(1)\">Pentagram</button></p>";
    var poke = "   <p><button img=\"#\" onclick=\"summonRand(2)\">Pokeball</button></p>";
    var tome = "   <p><button img=\"#\" onclick=\"summonRand(3)\">Tome of Death</button></p>";

    document.getElementById("dynamic-box").innerHTML="<h3>Summon</h3><p id=\"btnPent\"></p><p id=\"btnPoke\"></p><p id=\"btnTome\"></p>";
    document.getElementById("btnPent").innerHTML=pent;
    document.getElementById("btnPoke").innerHTML=poke;
    document.getElementById("btnTome").innerHTML=tome;
}

function summonRand(type) {
    var boss = Math.floor((Math.random() * 5) + 1);
    var select;
    switch(type){
        case 1:
            if(boss != 1){
                console.log("chose Pentagram - Minion");
                select = Math.floor(Math.random() * pentMonsters.length);
                commonEnemy = pentMonsters[select].clone();
            }
            else{
                console.log("chose Pentagram - Boss");
                select = Math.floor(Math.random() * pentBoss.length);
                commonEnemy = pentBoss[select].clone();
            }
            break;
        case 2:
            if(boss != 1){
                console.log("chose Pokeball - Minion");
                select = Math.floor(Math.random() * pokeMonsters.length);
                commonEnemy = pokeMonsters[select].clone();
            }
            else{
                console.log("chose Pokeball - Boss");
                select = Math.floor(Math.random() * pokeBoss.length);
                commonEnemy = pokeBoss[select].clone();
            }
            break;
        case 3:
            if(boss != 1){
                console.log("chose Tome of Death - Minion");
                select = Math.floor(Math.random() * tomeMonsters.length);
                commonEnemy = tomeMonsters[select].clone();
            }
            else{
                console.log("chose Tome of Death - Boss");
                select = Math.floor(Math.random() * tomeBoss.length);
                commonEnemy = tomeBoss[select].clone();
            }
            break;
    }
    commonEnemy = zombie.clone();
    document.getElementById("spawn").innerHTML = "<img draggable=false onclick=\"playa.click()\" id=\"monstImage\" />";
    document.getElementById("monstImage").src = (commonEnemy.enemyImg);
    document.getElementById("monstHealth").style.width = "100%";
}