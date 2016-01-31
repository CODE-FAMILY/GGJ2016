var playa = new char();

var fist = new item();
fist.name = "Fist";
fist.filePath = "images/fistImg.svg";
fist.aniPath = "images/Anis/Fist_Ani.gif";
fist.soundPath = "sound/punch.ogg";
fist.power = 1;
fist.speed = 1;
fist.cond = 5;
fist.cooldown = 1;

var dagger = new item();
dagger.name = "Dagger";
dagger.filePath = "images/daggerImg.svg";
dagger.aniPath = "images/Anis/Dagger_Ani.gif";
dagger.soundPath = "sound/dagger.ogg";
dagger.power = 2;
dagger.speed = 2;
dagger.cond = 5;
dagger.cooldown = 2;

var fish = new item();
fish.name = "Fish";
fish.filePath = "images/fishImg.svg";
fish.aniPath = "images/Anis/Fish_Ani.gif";
fish.soundPath = "sound/fish.ogg";
fish.power = 3;
fish.speed = 1;
fish.cond = 5;
fish.cooldown = 2;

var whip = new item();
whip.name = "Whip";
whip.filePath = "images/whipImg.svg";
whip.aniPath = "images/Anis/Whip_Ani.gif";
whip.soundPath = "sound/whip.ogg";
whip.power = 2;
whip.speed = 3;
whip.cond = 5;
whip.cooldown = 3;

var wand = new item();
wand.name = "Wand";
wand.filePath = "images/wandImg.svg";
wand.aniPath = "images/Anis/Wand_Ani.gif";
wand.soundPath = "sound/wand.ogg";
wand.power = 2;
wand.speed = 4;
wand.cond = 5;
wand.cooldown = 4;

var pistol = new item();
pistol.name = "Pistol";
pistol.filePath = "images/pistolImg.svg";
pistol.aniPath = "images/Anis/Pistol_Ani.gif";
pistol.soundPath = "sound/pistol.ogg";
pistol.power = 3;
pistol.speed = 3;
pistol.cond = 5;
pistol.cooldown = 3;

var rifle = new item();
rifle.name = "Rifle";
rifle.filePath = "images/rifleImg.svg";
rifle.aniPath = "images/Anis/Rifle_Ani.gif";
rifle.soundPath = "sound/rifle.ogg";
rifle.power = 4;
rifle.speed = 3;
rifle.cond = 5;
rifle.cooldown = 6; 

var rocket = new item();
rocket.name = "Rocket";
rocket.filePath = "images/rocketImg.svg";
rocket.aniPath = "images/Anis/Rocket_Ani.gif";
rocket.soundPath = "sound/rocketlauncher.ogg";
rocket.power = 5;
rocket.speed = 1;
rocket.cond = 5;
rocket.cooldown = 10;

var rayGun = new item();
rayGun.name = "Ray-Gun";
rayGun.filePath = "images/rayGunImg.svg";
rayGun.aniPath = "images/Anis/RayGun_Ani.gif";
rayGun.soundPath = "sound/raygun.ogg";
rayGun.power = 2;
rayGun.speed = 5;
rayGun.cond = 5;
rayGun.cooldown = 4

var items = [fist]; //, dagger, fish, whip, wand, pistol, rifle, rocket, rayGun
var myWeapon = new item();
playa.equipedOn = fist.clone();