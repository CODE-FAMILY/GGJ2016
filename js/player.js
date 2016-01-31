function char(){
//Basic
    this.name = "Ritualist";
    this.hp = 100;
	this.score = 0; //max
    this.points = 0; //points - upgradeCost
	this.killCount = 0;
	this.enemyLvl = 1;
	this.equipedIndex = 0;
	this.equipedOn;
    this.clicked = 0;
	
//Basic Getters
	this.getScore = function(){
		return this.score;
	}
	this.getPoints = function(){
		return this.points;
	}
	this.getName = function(){
		return this.name;
	}
    this.getHp = function(){
        return this.hp;
    }
	this.getEnemyLvl = function(){
		return this.enemyLvl;
	}
    
//Items
	this.setEquiped = function(x){
		this.equipedIndex = x;
        	changeSVGImage(items[this.equipedIndex].filePath, "item-image" );
        	updateSVGText(items[this.equipedIndex].name, "weapon-name" );
            this.audio = items[this.equipedIndex].soundPath;
	}
	this.getEquiped = function(){
		return items[this.equipedIndex];
	}
	this.dmgEquiped = function(){
		/*if (items[this.equipedIndex].name != "Fist"){
			items[this.equipedIndex].cond -= 1;
		}
		if (items[this.equipedIndex].cond <= 0){
			items.splice(this.equipedIndex,1);
			if (items.length > 1){
				this.setEquiped(1);
			}else{
				this.setEquiped(0);
			}
		}*/
		if (this.equipedOn.name != "Fist"){
			this.equipedOn.cond -= 1;
		}
		if (this.equipedOn.cond <= 0){
			this.equip(fist)
		}
	}
	this.takeItem = function(box){
		if (box != null){
			if (items.length >= 5){
				items.splice(1,1);
				items[items.length] = box;
			}else{
				items[items.length] = box;
			}
			if(items.length > 1){
				this.setEquiped(1);
			}
		}
	}
	
	this.dropItem = function(thing){
		items.splice(items.indexOf(thing), 1);
	}
	this.equip = function(box){
		this.equipedOn = box;
		changeSVGImage(items[this.equipedIndex].filePath, "item-image" );
		updateSVGText(items[this.equipedIndex].name, "weapon-name" );
		this.audio = items[this.equipedIndex].soundPath;
	}
    
//Skills
	this.power = 1;
	this.cons = 1;
	this.speed = 1;
	this.item = 1;
	this.skillLvl = 1;
	this.skillLvlTail = 1;
	this.temp = 1;
		
//Skill Getters
	this.getPower = function() {
		return this.power + this.equipedOn.power;
	}
	this.getCons =  function() {
		return this.cons;
	}
	this.getSpeed = function() {
		return this.speed;
	}
	this.getItem = function() {
		return this.item;
	}
	this.getDmg = function(){
		return this.power;
	}
	
//Methods
	this.addKill = function(){
		this.killCount += 1;
	}
	this.enemyLvlUp = function(){
		this.enemyLvl += 1;
	}
	this.setHpBar = function(){
		document.getElementById("health").style.width = (this.hp / (this.cons)) + "%";
	}
	
	this.updateCost = function(){
		this.points -= this.skillLvl * 100;
		this.temp = this.skillLvl;
		this.skillLvl += this.skillLvlTail;
		this.skillLvlTail = this.temp;
		document.getElementById("upgrade-points").innerHTML = (this.getPoints());
	}

	this.addPower = function(){
		if (this.points >= this.skillLvl * 100 && this.power < 5){
			this.power += 1;
			this.updateCost();
            upgrade();
		}
	}
	this.addCons = function(){
		if (this.points >= this.skillLvl * 100 && this.cons < 5){
			this.cons += 1;
			this.updateCost();
            upgrade();
		}
	}
	this.addSpeed = function(){
		if (this.points >= this.skillLvl * 100 && this.speed < 5){
			this.speed += 1;
			this.updateCost();
            upgrade();
		}
	}
	this.addItem = function(){
		if (this.points >= this.skillLvl * 100 && this.item < 5){
			this.item += 1;
			this.updateCost();
            upgrade();
		}
	}
	
    this.click = function(){
		var i;
		for(i = 0; i < this.speed + this.equipedOn.speed; i++){
			this.score += this.power;
			this.points += this.power;
			commonEnemy.takeDmg();
			if (Math.floor(Math.random() * 25) + 1 == 1){
				this.dmgEquiped();
			}
			if (commonEnemy.hp <= 0){
				this.score += 100;
				this.points += 100;
				if (runningQuest.compare()){
					runningQuest.killedOne();
				}
				var box = commonEnemy.dropItem();
				this.takeItem(box);
				commonEnemy.die();
				this.addKill();
				this.enemyLvlUp();
				console.log("He's dead");
                this.clicked = 0;
				break;
			}
			document.getElementById("points").innerHTML = (this.getScore());
			document.getElementById("upgrade-points").innerHTML = (this.getPoints());
		}
        if(document.getElementById("bgsound").ended){
            document.getElementById("loopsound").play();
            document.getElementById("loopsound").loop = true;
            document.getElementById("loopsound").volume = 0;
        }
        if(this.equipedOn.cooldown == this.clicked){
            var play = new Audio(this.equipedOn.soundPath);
            play.volume = .9999;
            play.play();
            this.clicked = 0;
            console.log("played sound");
        }else{
            this.clicked ++;
        }
		document.getElementById("points").innerHTML = (this.getScore());
		document.getElementById("upgrade-points").innerHTML = (this.getPoints());
    }
	
    this.kill = function(){
        var i;
        for(i = 0; i < 500; i++){
            this.click();
        }
    }
	
	this.addHp = function(health){
		if (this.hp + health > this.cons * 100) {
			this.hp = this.cons * 100;
		} else {
			this.hp += health;
		}
		document.getElementById("health").style.width = (this.hp / (this.cons * 100))*100 + "%";
	}
	
	this.takeDmg = function(dmg){
		if (this.hp - dmg <= 0) {
			document.getElementById("health").style.width = "0%";
			this.die();
		} else {
			this.hp -= dmg;
			document.getElementById("health").style.width = (this.hp / (this.cons * 100))*100 + "%";
		}
	}
	
	this.die = function(){
		//Game Over!!!
        alert("You Have Died in combat with the" + commonEnemy.getName());
        location.href = 'Credits.html';
	}
	
	this.addItemToList = function() {
		items.push("item");
	}
	
	this.randCall = function() {
		Math.floor((Math.random() * 10) + 1); //Random from 1 to 10
	}
}
