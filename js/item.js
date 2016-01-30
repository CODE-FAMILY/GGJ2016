function item() {
	//basic
	this.name = "example";
	this.power = 1;
	this.speed = 1;
	this.cond = 3;
	
		
	this.getPower = function() {
		return this.power;
	}
	this.getCond =  function() {
		return this.cond;
	}
	this.getSpeed = function() {
		return this.speed;
	}
}