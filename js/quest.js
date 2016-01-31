var runningQuest = new quest().clone(q1);

function quest(){
	this.id = 1;
	this.limit = 1;
    this.done = 0;
	this.monster = skeleton;
	this.questString = "example";
<<<<<<< HEAD
	this.pointReward = 100;
    
	this.getmonster = function() {
		return this.monster.clone();
	}
		this.getquestString = function() {
		return this.questString;
	}
=======
>>>>>>> origin/master
	
    this.completed = function(){
		playa.points += this.pointReward;
        var selected = Math.floor(Math.random() * adventures.length);
        while (adventures[selected].id == this.id){
            var selected = Math.floor(Math.random() * adventures.length);
        }
<<<<<<< HEAD
        this.clone(adventures[selected]);
=======
 
        this.clone(adventure[selected]);
>>>>>>> origin/master
    }
    
	this.compare = function(){
		if (this.monster == commonEnemy.name){
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

var adventures = [q1,q2,q3,q4,q5,q6,q7,q8];

var q1 = new quest();
q1.id = 1;
q1.name = "Unburied Bones";
q1.limit = 3;
q1.pointReward = 200;
q1.monster = "Skeleton"";
q1.questString = "Summon 3 skeletons with the Tome of Death and put them back into the ground!";

var q2 = new quest();
q2.id = 2;
q2.name = "Man Horses";
q2.limit = 3;
q1.pointReward = 200;
q2.monster = "Centaur";
q2.questString = "Summon 5 centaurs with the Pentagram and send them to their doom!";

var q3 = new quest();
q3.id = 3;
q3.name = "Legged Narwhals";
q3.limit = 4;
q1.pointReward = 350;
q3.monster = "Unicorn";
q3.questString = "Summon 4 unicorns with the Pokeball and make them wish they were fictional!";

var q4 = new quest();
q4.id = 4;
q4.name = "Nazi Zombies";
q4.limit = 5;
q1.pointReward = 400;
q4.monster = "Nazi Zombie";
q4.questString = "Summon 3 Nazi zombies with the Tome of Death. Re-kill them, Call of Duty style.";

var q5 = new quest();
q5.id = 5;
q5.name = "Pika Pika";
q5.limit = 1;
q1.pointReward = 500;
q5.monster = "Pikachu"";
q5.questString = "Summon Pikachu from the Pokeball. Kill him. Kill Pikachu.";

var q6 = new quest();
q6.id = 6;
q6.name = "Ermorden Hitler";
q6.limit = 1;
q1.pointReward = 500;
q6.monster = "Hitler";
q6.questString = "Summon Hitler with the Tome of Death and dismantle his body, cell by cell.";

var q7 = new quest();
q7.id = 7;
q7.name = "Ho Ho Ho";
q7.limit = 1;
q1.pointReward = 500;
q7.monster = "Santa";
q7.questString = "Summon Santa with the Pentagram and show him some Christmas spirit. ;)";

var q8 = new quest();
q8.id = 8;
q8.name = "Stump the Trump";
q8.limit = 1;
q1.pointReward = 500;
q8.monster = "Trump";
q8.questString = "Summon Trump with the pentagon. Make him wish he built a wall around you.";