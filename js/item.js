function item() {
	//basic
	this.name = "example";
	this.power = 1;
	this.speed = 1;
	this.cond = 5;
	this.filePath = "";
	var soundPath = [];
	this.getName = function() {
		return this.name;
	}
	this.getPower = function() {
		return this.power;
	}
	this.getCond =  function() {
		return this.cond;
	}
	this.getSpeed = function() {
		return this.speed;
	}
	
	this.clone = function(){
		var box = new item();
		box.name = this.name;
		box.power = this.power;
		box.speed = this.speed;
		box.cond = this.cond;
		box.soundPath = this.soundEffects;
	}
}