//Monster Class
function monster(name,hp,drop,imageName,lvl){
    this.name = name;
    this.lvl = lvl;
	this.hp = hp;
	this.cons = hp;
    this.drop = drop;
	this.enemyImg = imageName;
	this.startTime = 0;
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
	this.setTime = function(){
		this.startTime = 0;
		this.nowTime = new Date();
	}
	
//Methods
	this.dealDmg = function(){
		playa.takeDmg(Math.floor(Math.log(this.lvl)*10));
	}
	
	this.takeDmg = function(){
		this.hp -= playa.getDmg();
		if (this.hp <= 0){
			document.getElementById("monstHealth").style.width = "0%";
		} else {
			document.getElementById("monstHealth").style.width = (this.hp / (this.cons))*100 + "%";
		}
		if (this.startTime == 0){
			this.startTime = new Date();
		}
        if (new Date().getTime() - this.startTime.getTime() > Math.ceil(10000 / this.lvl)){
			if (new Date().getTime() - this.nowTime.getTime() > 3000){
			this.nowTime = new Date();
			this.dealDmg();
			}
		}
	}
	
	this.dropClick = function(){
		playa.takeItem();
	}
    
    this.dropItem = function(){
        var dropRate = Math.floor(Math.random * 10) +1;
        if(dropRate == 10){
            return drop.clone();
        }
        else if(dropRate == 1){
            //return potion.clone();
        }
        else{
            
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
		second.setTime();
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