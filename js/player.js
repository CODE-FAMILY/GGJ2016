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
	
	this.takeItem = function(thing){
		items.push(commonEnemy.dropItem);
	}
    
//Skills
	this.power = 25;
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
			document.getElementById("power").innerHTML = this.power + "/5 Cost: " + this.skillLvl * 100 * (this.power % 5) / this.power;
			document.getElementById("speed").innerHTML = this.speed + "/5 Cost: " + this.skillLvl * 100 * (this.speed % 5) / this.speed;
			document.getElementById("cons").innerHTML = this.cons + "/5 Cost: " + this.skillLvl * 100 * (this.cons % 5) / this.cons;
			//document.getElementById("item").innerHTML = this.item + "/5 Cost: " + this.skillLvl * 100 * (this.item % 5) / this.item;
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
			commonEnemy.die();
			this.addKill();
			this.enemyLvlUp();
			if (commonEnemy.dropItem){
			}
		}
		document.getElementById("points").innerHTML = ("Score: " + this.getScore() + " Points: " + this.getPoints());
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
			this.die();
		} else {
			this.hp -= dmg;
		}
		console.log("I'm hit!" + dmg);
	}
	
	this.die = function(){
		//Game Over!!!
	}
	
	this.addItem = function() {
		weapons.push("item");
	}
	
	this.randCall = function() {
		Math.floor((Math.random() * 10) + 1); //Random from 1 to 10
	}
}