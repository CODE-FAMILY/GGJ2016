function char(){
    //basic
    this.name = "Ritualist";
    this.hp = 100;
	this.score = 0; //max
    this.points = 0; //points - upgradeCost
	
	this.getScore = function(){
		return this.score;
	}
	this.getPoints = function() {
		return this.points;
	}
	this.getName = function(){
		return this.name;
	}
    this.getHp = function(){
        return this.hp;
    }    
    
    //items
    var weapons = [];
	//var potions = [];
	//var artifacts = [];
    
    //skills
	this.power = 1;
	this.cons = 1;
	this.speed = 1;
	this.item = 1;
	this.damage = 1;
		
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
	this.getDamage = function() {
		return this.damage;
	}
	
    //methods
    this.click = function(){
        this.score = this.score + this.power;
        this.points += this.power;
		document.getElementById("score").innerHTML = (this.getScore());
		//commonEnemy.takeDmg();
		//if (commonEnemy.hp <= 0) {
			//this.score += 100;
			//this.points += 100;
			//commonEnemy.die();
		//}
    }
	
	this.setDamage = function() {
		this.damage = this.power * this.power;
	}
	
	this.addItem = function() {
		weapons.push("item");
	}
	
	this.randCall = function() {
		Math.floor((Math.random() * 10) + 1); //Random from 1 to 10
	}
}

function monster(name,hp,lvl,drop,imageName){
    this.name = name;
    this.lvl = lvl;
    this.hp = Math.floor((Math.random() * this.lvl + 1) * this.hp);
    this.drop = drop;
	var enemyImg = document.createElement("imageName");
	
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
	this.takeDmg = function() {
		hp = hp - playa.getDmg();
	}
	this.die = function() {
		this.enemyImg.parentNode.removeChild(enemyImg);
	}
}