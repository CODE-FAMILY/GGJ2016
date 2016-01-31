//Enemy Objects
var commonEnemy;

//TODO!!!!!!!!!!!
var starter = new monster("Blob", 5, 0, "images/starter.png",playa.enemyLvl);

//Monsters
var skeleton = new monster("Skeletor", 100, 1, "images/skeletonImg.png",playa.enemyLvl);
var ghost = new monster("Ghost", 100, 3, "images/ghostImg.png",playa.enemyLvl);
var zombie = new monster("Zombie", 100, 5, "images/zombieImg.png",playa.enemyLvl);
var zombieNazi = new monster("Nazi Zombie", 100, 6, "images/zombieNaziImg.png",playa.enemyLvl);
var mermaid = new monster("Mermaid", 100, 4, "images/mermaidImg/png",playa.enemyLvl);
var minitaur = new monster("Minitaur", 100, 3, "images/minitaurImg.png",playa.enemyLvl);
var centaur = new monster("Centaur", 100, 2, "images/centaurImg.png",playa.enemyLvl);
var unicorn = new monster("Unicorn", 100, 4, "images/unicornImg.png",playa.enemyLvl);
var teletubby = new monster("Teletubby", 100, 8, "images/teletubbyImg.png",playa.enemyLvl);
var bunny = new monster("Bunny", 100, 7, "images/bunnyImg.png",playa.enemyLvl);

//Bosses
var pikachu = new monster("Pikachu", 1000, 0, "images/pikachuImg.png",playa.enemyLvl);
var trump = new monster("Trump", 1000, 0, "images/trumpImg.png",playa.enemyLvl);
var dragon = new monster("Dragon", 1000, 0, "images/dragonImg.png",playa.enemyLvl);
var graham = new monster("Dr. Graham", 1000, 0, "images/grahamImg.png",playa.enemyLvl);
var howard = new monster("Dr. Howard", 1000, 0, "images/howardImg.png",playa.enemyLvl);
var hitler = new monster("Hitler", 1000, 0, "images/hitlerImg.png",playa.enemyLvl);
var santa = new monster("Santa", 1000, 0, "images/snataImg.png",playa.enemyLvl);

//Sets
var pentMonsters = [mermaid, centaur, minitaur, teletubby];
var pentBoss = [trump, santa];

var pokeMonsters = [ bunny, unicorn];
var pokeBoss = [pikachu, dragon];

var tomeMonsters = [skeleton, zombie, zombieNazi, ghost];
var tomeBoss = [hitler, howard, graham];