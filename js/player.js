function char(){
    //basic
    this.name = "example";
    this.hp = 100;
	this.score = 0;
	
	this.getScore = function(){
		return this.score;
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
	
    //methods
    this.click = function(){
        this.score = this.score + this.power;
    }
	
	this.setDamage = function() {
		this.damage = this.power * this.power;
	}
	
	this.addItem = function() {
		weapons.push("item");
	}
}

function monster(name,hp,lvl,drop){
    this.name = name;
    this.hp = hp;
    this.lvl = hp;
    this.drop = drop;
	
	this.getName = function(){
		return this.name;
	}
    this.getHp = function(){
        return this.hp;
    }  
	this.getLvl = function() {
		return this.getLvl;
	}
	this.getDrop = function() {
		return this.drop;
	}
}