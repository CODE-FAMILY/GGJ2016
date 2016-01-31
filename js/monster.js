//Monster Class
function monster(name,hp,drop,imageName,lvl){
    this.name = name;
    this.lvl = lvl;
	this.hp = hp;
	this.cons = hp;
    this.drop = drop;
	this.enemyImg = imageName;
	this.nowTime = 0;
	this.desc = "";

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
	this.getDesc = function(){
		return this.desc;
	}
	
//Setters
	this.setHp = function() {
		this.hp = Math.floor((Math.random() * Math.log(this.lvl)*10 + 1) * hp);
		this.cons = this.hp;
	}
	
//Methods
	this.dealDmg = function(){
		playa.takeDmg(10);
	}
	
	this.takeDmg = function(){
		this.hp -= playa.getDmg();
		if (this.hp <= 0){
			document.getElementById("monstHealth").style.width = "0%";
		} else {
			document.getElementById("monstHealth").style.width = (this.hp / (this.cons))*100 + "%";
		}
        if (new Date().getMilliseconds() - this.timeStart > 10000){
			this.dealDmg();
		}
	}
    
	this.die = function() {
        document.getElementById("monstImage").src = ("");
        document.getElementById("spawn").innerHTML = "";
		//this.enemyImg.parentNode.removeChild(this.name);
	}
    
    this.clone = function(){
        var second = new monster(this.name,this.hp,this.drop,this.enemyImg,playa.enemyLvl);
		second.setHp();
		
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