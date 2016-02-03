function displayNone(){
    document.getElementById("summon").style.display = "none";
    document.getElementById("upgrade").style.display = "none";
    document.getElementById("item").style.display = "none";
    document.getElementById("inventory").style.display = "none";
}

function summonMenu() {
    displayNone();
    document.getElementById("summon").style.display = "block";
}

function summonRand(type) {
    var boss = Math.floor((Math.random() * 5) + 1);
    var select;
    switch(type){
        case 1:
            if(boss != 1 || playa.getEnemyLvl() < 3){
                console.log("chose Pentagram - Minion");
                document.getElementById("enemy-inner-container").src = "images/monster_background.svg";
                select = Math.floor(Math.random() * pentMonsters.length);
                commonEnemy = pentMonsters[select].clone();
            }
            else{
                console.log("chose Pentagram - Boss");
                document.getElementById("enemy-inner-container").src = "images/boss_background.svg";
                select = Math.floor(Math.random() * pentBoss.length);
                commonEnemy = pentBoss[select].clone();
            }
            break;
        case 2:
            if(boss != 1 || playa.getEnemyLvl() < 3){
                console.log("chose Pokeball - Minion");
                document.getElementById("enemy-inner-container").src = "images/monster_background.svg";
                select = Math.floor(Math.random() * pokeMonsters.length);
                commonEnemy = pokeMonsters[select].clone();
            }
            else{
                console.log("chose Pokeball - Boss");
                document.getElementById("enemy-inner-container").src = "images/boss_background.svg";
                select = Math.floor(Math.random() * pokeBoss.length);
                commonEnemy = pokeBoss[select].clone();
            }
            break;
        case 3:
            if(boss != 1 || playa.getEnemyLvl() < 3){
                console.log("chose Tome of Death - Minion");
                document.getElementById("enemy-inner-container").src = "images/monster_background.svg";
                select = Math.floor(Math.random() * tomeMonsters.length);
                commonEnemy = tomeMonsters[select].clone();
            }
            else{
                console.log("chose Tome of Death - Boss");
                document.getElementById("enemy-inner-container").src = "images/boss_background.svg";
                select = Math.floor(Math.random() * tomeBoss.length);
                commonEnemy = tomeBoss[select].clone();
            }
            break;
    }
    //commonEnemy = zombie.clone();
    document.getElementById("spawn").innerHTML = "<img draggable=false onclick=\"playa.click()\" id=\"monstImage\" />";
    document.getElementById("monstImage").src = (commonEnemy.enemyImg);
    document.getElementById("monstHealth").style.width = "100%";
    if(commonEnemy.desc != ""){
        document.getElementById("monsterName").innerHTML = commonEnemy.getName();
        document.getElementById("questStory").innerHTML = commonEnemy.desc;
        console.log(commonEnemy.name);
    }//questStory
    
    
    //stop intro
    //document.getElementById("bgsound").muted = true;
    //sets battle music every monster summoning
    if(!toggleMute){
        if(document.getElementById("bgsound").ended && document.getElementById("loopsound").ended){
            document.getElementById("bgsound").play;
        }
    }
	    document.getElementById("summon").style.display = "none";
        document.getElementById("item").style.display = "block";

    playa.clicked = 0;
    //send player to item screen afterwards
}