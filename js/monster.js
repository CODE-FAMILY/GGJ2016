//Monster Class
function monster(name,hp,drop,imageName,lvl){
    this.name = name;
    this.lvl = lvl;
	this.hp = hp;
	this.cons = hp;
    this.drop = drop;
	this.enemyImg = imageName;

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
		this.hp -= playa.getDmg();
		document.getElementById("monstHealth").style.width = (this.hp / (this.cons))*100 + "%";
        console.log("shit happened");
	}
	this.die = function() {
		//this.enemyImg.parentNode.removeChild(this.name);
	}
    
    this.clone = function(){
        var second = new monster(this.name,this.hp,this.drop,this.enemyImg,this.lvl);
        /*
        second.name = this.name;
        second.lvl = this.lvl;
        second.hp = this.hp;
        second.cons = this.cons;
        second.drop = this.drop;
        second.enemyImg = this.enemyImg;
        */
        return second;
    }
}