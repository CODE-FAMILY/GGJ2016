//Enemy Objects
var commonEnemy;

//TO DO!!!!!!!!!!!
var starter = new monster("Blob", 5, 0, "images/starter.png",playa.enemyLvl);

//Monsters
var skeleton = new monster("Skeletor", 100, 1, "images/skeletonImg.png",playa.enemyLvl);
skeleton.Desc = "This unfortunate soul drowned after being stabbed in the back from a friend and pushed off of a cliff. This skeleton has return from the dead to get revenge from his once called best friend. While going on his quest, he got trapped in a book, the Tone of Death. Bound by the pages of it, he can only continue his quest by being summoned.";

var ghost = new monster("Ghost", 100, 3, "images/ghostImg.png",playa.enemyLvl);
ghost.Desc = "Probably the most laziness of monsters. More focusing on eating a bag of chips, this ghost can’t even scare other monsters, the monster’s itself scares him.";

var zombie = new monster("Zombie", 100, 5, "images/emo-zombie.svg",playa.enemyLvl);
zombie.Desc = "While being dead and slowly rotten away to become a skeleton in a sewer, this poor undead corpse never got it rest. The book, “Tone of Death” came for him after the week of his death. Turning the corpse into a walking dead against their wishes.";

var zombieNazi = new monster("Nazi Zombie", 100, 6, "images/zombieNaziImg.png",playa.enemyLvl);
zombieNazi.Desc = "Ambushed by a rival army, but killed by an ally. The Nazi couldn’t survive the accidental shot and died. Plan and simple, but still loyal to Hitler. Or is this a lie? Is he actually a spy and his sole purpose was to kill Hitler?";

var mermaid = new monster("Mermaid", 100, 4, "images/mermaidImg/png",playa.enemyLvl);
mermaid.Desc = "Always being misread of being the nicest creature in the sea, this one is feisty.  Summon her from the pentagram.";

var minitaur = new monster("Minitaur", 100, 3, "images/minitaurImg.png",playa.enemyLvl);
minitaur.Desc = "Being the runt of the minataur’s, this little guy is always being let down because of his small size. Even though he has the strength of a warrior and can handle both a sword and a shield. Wanting to prove himself, he went on many quests to prove his worth. Almost losing his arm to a monster, to cheat on death.";

var centaur = new monster("Centaur", 100, 2, "images/centaurImg.png",playa.enemyLvl);
centaur.Desc = "A creature that has half the body of a horse and top half a human, this powerful creature can be summon by the pentagram. He has the strength and speed of a regular horse, while the intelligence of a human.";

var unicorn = new monster("Unicorn", 100, 4, "images/unicornImg.png",playa.enemyLvl);
unicorn.Desc = "Born of the pureness of innocent people, this creature was walking down a stream getting a drink of water. But something shiny caught the Unicorn’s eyes. Walking up to the red and white ball, it was unusual for the dumb Unicorn, for it touched his nose on the ball and got itself capture in the small space. Forever trapped, unless someone release it or summon it from the ball.";

var teletubby = new monster("Teletubby", 100, 8, "images/teletubbyImg.png",playa.enemyLvl);
teletubby.Desc = ""; 

var bunny = new monster("Bunny", 100, 7, "images/bunnyImg.png",playa.enemyLvl);
bunny.Desc = "Just being the small cute creature from the forest, he was minding his own business. You know, eating the grass and cleaning his fur. This wonderful creature had no idea that he will be forever be stuck in the pokeball by a misguided pokemon master. Now counted as a pokemon, the bunny found out he has to help defeat the bosses.";

//Bosses
var pikachu = new monster("Pikachu", 1000, 0, "images/pikachuImg.png",playa.enemyLvl);
pikachu.Desc = "After his best friend’s death, drowning in despair and pain. Sadly little Pikachu couldn’t take it anymore. He wanted his best friend back. But no matter how much he tried to get out of his pokemon ball he can’t help but think that the reason why he was stuck in this small clastrophoic space was because his Master wanted him safe. Why was this safe? Why can’t he leave? No Matter how much he punches his little arms against the walls of the space until they turn bruised and broken and bloody did he realized he was trapped here and something happen to his Master. Slowly, he was forgotten and slowly did his sanity turned on him into depression and sorrow. Finally one day, he had enough. Pikachu got a wonderful idea and thought maybe, just maybe will he be able to escape the confines of the space by shooting out hundreds and hundreds of lightning. Tell he cannot shot anymore and slowly everything turned black and he escaped the prison, until the next time the pokeball will open back up.";

var trump = new monster("Trump", 1000, 0, "images/trumpImg.png",playa.enemyLvl);
//.Desc = "Everything was going in his favor, every single thing he planned. From paying his supporters to support him and to vote him to be the next President of the United. Though now, it was time to unlock what he always dream of! World Domination, and he did succeed in everything! But until one day people finally rebel back against him. Hundreds to thousands of people came up to his house. The first thing the rebels did was shaving his head, next was burning him and skinning him alive, where not even one skin remains. Though, not enough to kill him just yet, oh no, the rebels wanted one last torture for Trump. They drugged him and tied him up above a pool of sharks, cutting the rope Donald Trump is no more for he was eaten alive.";

var dragon = new monster("Dragon", 1000, 0, "images/dragonImg.png",playa.enemyLvl);
//.Desc = "The Chinese dragon death was uncommonly rare to all dragons. The dragon was flying like normal, minding his own business. Doing twirls, loopy doops, learning how to breath fire and anything else that is common with young foolish fledgling. But, his own stupidly caused his death. You see the dragon was attracted to shiny objects. One night in particular, he was flying over a town that’s celebrating New Years. Fireworks were shooting off in the sky and the young fledgling was to attracted to the shiny lights going on and off that he flew right into the path of a firework.  Now back from the undead, the young Chinese Dragon can now breath fire for it never had before.";

var graham = new monster("Dr. Graham", 1000, 0, "images/grahamImg.png",playa.enemyLvl);
//.Desc = "";

var howard = new monster("Dr. Howard", 1000, 0, "images/howardImg.png",playa.enemyLvl);
//.Desc = "";

var hitler = new monster("Hitler", 1000, 0, "images/hitlerImg.png",playa.enemyLvl);
//.Desc = "";

var santa = new monster("Santa", 1000, 0, "images/snataImg.png",playa.enemyLvl);
//.Desc = "He knows when you are sleeping, he know when you are awake. He have the magic that can make you crazy for some more! During the holidays, something tragic happen in the workshop. Our young Santa has just started working on gifts for the poor unfortunate souls, that he had no sleep for the past few nights. While yawning and starting to dose off, our young Santa accidently started the workshop on fire. His death was an untimely one as he tried and tried to escape the flames. But, breathing became as difficult as surviving the extremely hot temperature that his eyes started to have blac spots starting to form. As he takes that one last breath, everything went black. The roaring sound of the crackling and the sizzling of the fire slowly fade away.";

//Sets
var pentMonsters = [mermaid, centaur, minitaur, teletubby];
var pentBoss = [trump, santa];

var pokeMonsters = [ bunny, unicorn];
var pokeBoss = [pikachu, dragon];

var tomeMonsters = [skeleton, zombie, zombieNazi, ghost];
var tomeBoss = [hitler, howard, graham];