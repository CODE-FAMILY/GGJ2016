function quest(){
	this.id = 1;
	this.limit = 1;
	this.done = 0;
	this.monster = skeleton;
	this.questString = "example";
	this.pointReward = 100;
    
	this.getmonster = function() {
		return this.monster.clone();
	}
		this.getquestString = function() {
		return this.questString;
	}
	
    this.completed = function(){
		playa.points += this.pointReward;
        var selected = Math.floor(Math.random() * adventures.length);
        while (adventures[selected].id == this.id){
            var selected = Math.floor(Math.random() * adventures.length);
        }
        this.clone(adventures[selected]);
    }
    
	this.compare = function(){
		if (this.monster.name == commonEnemy.name){
			return true;
		} else {
			return false;
		}
	}
	
	this.killedOne = function(){
		this.done += 1;
		if (this.done >= this.limit){
			this.completed();
		}
	}
	
    this.clone = function(other){
        this.id = other.id;
	this.name = other.name;
        this.limit = other.limit;
        this.monster = other.monster;
        this.questString = other.questString;
        this.done = 0;
    }
}

