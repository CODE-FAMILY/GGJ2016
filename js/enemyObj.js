//Enemy Objects
/*var commonEnemy = monster();
commonEnemy.name = name;
commonEnemy.hp = 100;
commonEnemy.lvl = 1;
commonEnemy.drop = drop;*/

var skeleton = new monster();
skeleton.name = "Skeletor";
skeleton.hp = 100;
skeleton.drop = 1;
skeleton.imageName = "skeletonImg";

var ghost = new monster();
ghost.name = "Ghost";
ghost.hp = 100;
ghost.drop = 3;
ghost.imageName = "ghostImg";

var zombie = new monster();
zombie.name = "Zombie";
zombie.hp = 100;
zombie.drop = 5;
zombie.imageName = "zombieImg";

var zombieNazi = new monster();
zombieNazi.name = "Nazi-Zombie";
zombieNazi.hp = 100;
zombieNazi.drop = 6;
zombieNazi.imageName = "zombieNaziImg";
//Fix attributes
var mermaid = new monster();
mermaid.name = "Mermaid";
mermaid.hp = 100;
mermaid.drop = 4;
mermaid.imageName = "MermaidImg";

var minitaur = new monster();
minitaur.name = "Minitaur";
minitaur.hp = 100;
minitaur.drop = 3;
minitaur.imageName = "minitaurImg";

var unicorn = new monster();
unicorn.name = "Unicorn";
unicorn.hp = 100;
unicorn.drop = 4;
unicorn.imageName = "zombieImg";

var teletubby = new monster();
teletubby.name = "Teletubby";
teletubby.hp = 100;
teletubby.drop = 8;
teletubby.imageName = "teletubbyImg";

var bunny = new monster();
bunny.name = "Bunny";
bunny.hp = 100;
bunny.drop = 7;
bunny.imageName = "bunnyImg";

var pentMonsters = [mermaid, centaur, minitaur, unicorn];
var pentBoss = [trump, hillary];

var pokeMonsters = [teletubby, bunny];
var pokeBoss = [pikachu, santa];

var tomeMonsters = [skeleton, zombie, zombieNazi, ghost];
var tomeBoss = [hitler, howard, graham];