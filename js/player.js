function char(){
//Basic
    this.name = "Ritualist";
    this.hp = 100;
	this.score = 0; //max
    this.points = 0; //points - upgradeCost
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
    
    //items
    var weapons = [];
	//var potions = [];
	//var artifacts = [];
    
//Skills
	this.power = 1;
	this.cons = 100;
	this.speed = 1;
	this.item = 1;
	this.damage = 1;
		
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
	this.getDamage = function(){
		return this.damage;
	}
	
//Methods
	this.enemyLvlUp = function(){
		this.enemyLvl += 1;
	}
	
    this.click = function(){
        this.score = this.score + this.power;
        this.points += this.power;
		document.getElementById("score").innerHTML = (this.getScore());
		//commonEnemy.takeDmg();
		//if (commonEnemy.hp <= 0){
			//this.score += 100;
			//this.points += 100;
			//commonEnemy.die();
		//}
    }
	
	this.setDamage = function(){
		this.damage = this.power * this.power;
	}
	
	this.addHp = function(health){
		if (this.hp + health > this.cons) {
			this.hp = this.cons;
		} else {
			this.hp += this.cons;
		}
	}
	
	this.takeDamage = function(dmg){
		if (this.hp - dmg <= 0) {
			this.die();
		} else {
			this.hp -= dmg;
		}
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

function monster(name,hp,drop,imageName){
    this.name = name;
    this.lvl = playa.enemyLvl;
	this.hp = hp;
    this.drop = drop;
	var enemyImg = document.createElement("imageName");

//Getters
	this.getName = function(){
		return this.name;
	}
    this.getHp = function(){
        return this.hp;
    }  
	this.getLvl = function() {
		return this.lvl;
	}
	this.getDrop = function() {
		return this.drop;
	}
	
//Setters
	this.setHp = function() {
		this.hp = Math.floor((Math.random() * this.lvl + 1) * hp);
	}
	
//Methods
	this.takeDmg = function() {
		hp = hp - playa.getDmg();
	}
	this.die = function() {
		this.enemyImg.parentNode.removeChild(enemyImg);
	}
}