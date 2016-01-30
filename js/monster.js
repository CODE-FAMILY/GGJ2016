//Monster Class
function monster(name,hp,drop,imageName,lvl){
    this.name = name;
    this.lvl = lvl;
	this.hp = hp;
	this.cons = hp;
    this.drop = drop;
	var enemyImg = imageName;

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
		this.cons = this.hp;
	}
	
//Methods
	this.takeDmg = function() {
		hp -= playa.getDmg();
		document.getElementById("meter").style.width = (this.hp / (this.cons)) + "%";
	}
	this.die = function() {
		//this.enemyImg.parentNode.removeChild(this.name);
	}
}