function char(){
//Basic
    this.name = "Ritualist";
    this.hp = 100;
	this.score = 0; //max
    this.points = 0; //points - upgradeCost
	this.killCount = 0;
	this.enemyLvl = 1;
	
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
    var items = [];
	
	this.takeItem = function(box){
		if (box != null){
			if (items.length() <= 5){
				items.push(box);
			}
		}
	}
	
	this.dropItem = function(thing){
		items.splice(items.indexOf(thing), 1);
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
		return this.power;
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
		}
	}
	this.addCons = function(){
		if (this.points >= this.skillLvl * 100 && this.cons < 5){
			this.cons += 1;
			this.updateCost();
		}
	}
	this.addSpeed = function(){
		if (this.points >= this.skillLvl * 100 && this.speed < 5){
			this.speed += 1;
			this.updateCost();
		}
	}
	this.addItem = function(){
		if (this.points >= this.skillLvl * 100 && this.item < 5){
			this.item += 1;
			this.updateCost();
		}
	}
	
    this.click = function(){
        this.score += this.power;
        this.points += this.power;
		commonEnemy.takeDmg();
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
		}
		document.getElementById("points").innerHTML = (this.getScore());
		document.getElementById("upgrade-points").innerHTML = (this.getPoints());
    }
	
    /*
	this.setDmg = function(){
		this.damage = this.power * this.power;
	}
	*/
	this.addHp = function(health){
		if (this.hp + health > this.cons) {
			this.hp = this.cons * 100;
		} else {
			this.hp += health;
		}
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
	}
	
	this.addItemToList = function() {
		items.push("item");
	}
	
	this.randCall = function() {
		Math.floor((Math.random() * 10) + 1); //Random from 1 to 10
	}
}