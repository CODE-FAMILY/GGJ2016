//Enemy Objects
//Monsters
var skeleton = new monster("Skeletor", 100, 1, "image/skeletonImg.png");
var ghost = new monster("Ghost", 100, 3, "ghostImg.png");
var zombie = new monster("Zombie", 100, 5, "image/zombieImg.png");
var zombieNazi = new monster("Nazi Zombie", 100, 6, "image/zombieNaziImg.png");
var mermaid = new monster("Mermaid", 100, 4, "image/mermaidImg/png");
var minitaur = new monster("Minitaur", 100, 3, "image/minitaurImg.png");
var centaur = new monster("Centaur", 100, 2, "image/centaurImg.png");
var unicorn = new monster("Unicorn", 100, 4, "image/unicornImg.png");
var teletubby = new monster("Teletubby", 100, 8, "image/teletubbyImg.png");
var bunny = new monster("Bunny", 100, 7, "image/bunnyImg.png");

//Bosses
var pikachu = new monster("Pikachu", 1000, 0, "image/pikachuImg.png");
var trump = new monster("Trump", 1000, 0, "image/trumpImg.png");
var hllary = new monster("Hillary", 1000, 0, "image/hillaryImg.png");
var graham = new monster("Dr. Graham", 1000, 0, "image/grahamImg.png");
var howard = new monster("Dr. Howard", 1000, 0, "image/howardImg.png");
var hitler = new monster("Hitler", 1000, 0, "image/hitlerImg.png");
var santa = new monster("Santa", 1000, 0, "image/snataImg.png");

//Sets
var pentMonsters = [mermaid, centaur, minitaur, unicorn];
var pentBoss = [trump, hillary];

var pokeMonsters = [teletubby, bunny];
var pokeBoss = [pikachu, santa];

var tomeMonsters = [skeleton, zombie, zombieNazi, ghost];
var tomeBoss = [hitler, howard, graham];