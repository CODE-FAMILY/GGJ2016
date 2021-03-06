var playa = new char();

var fist = new item();
fist.name = "Fist";
fist.filePath = "fistImg.svg";
fist.aniPath = "Anis/Fist_Ani.gif";
fist.soundPath = "sound/punch.ogg";
fist.power = 1;
fist.speed = 1;
fist.cond = 5;
fist.cooldown = 1;

var dagger = new item();
dagger.name = "Dagger";
dagger.filePath = "daggerImg.svg";
dagger.aniPath = "Anis/Dagger_Ani.gif";
dagger.soundPath = "sound/dagger.ogg";
dagger.power = 2;
dagger.speed = 2;
dagger.cond = 5;
dagger.cooldown = 2;

var fish = new item();
fish.name = "Fish";
fish.filePath = "fishImg.svg";
fish.aniPath = "Anis/Fish_Ani.gif";
fish.soundPath = "sound/fish.ogg";
fish.power = 3;
fish.speed = 1;
fish.cond = 5;
fish.cooldown = 2;

var whip = new item();
whip.name = "Whip";
whip.filePath = "whipImg.svg";
whip.aniPath = "Anis/Whip_Ani.gif";
whip.soundPath = "sound/whip.ogg";
whip.power = 2;
whip.speed = 3;
whip.cond = 5;
whip.cooldown = 3;

var wand = new item();
wand.name = "Wand";
wand.filePath = "wandImg.svg";
wand.aniPath = "Anis/Wand_Ani.gif";
wand.soundPath = "sound/wand.ogg";
wand.power = 2;
wand.speed = 4;
wand.cond = 5;
wand.cooldown = 4;

var pistol = new item();
pistol.name = "Pistol";
pistol.filePath = "pistolImg.svg";
pistol.aniPath = "Anis/Pistol_Ani.gif";
pistol.soundPath = "sound/pistol.ogg";
pistol.power = 3;
pistol.speed = 3;
pistol.cond = 5;
pistol.cooldown = 3;

var rifle = new item();
rifle.name = "Rifle";
rifle.filePath = "rifleImg.svg";
rifle.aniPath = "Anis/Rifle_Ani.gif";
rifle.soundPath = "sound/rifle.ogg";
rifle.power = 4;
rifle.speed = 3;
rifle.cond = 5;
rifle.cooldown = 6; 

var rocket = new item();
rocket.name = "Rocket";
rocket.filePath = "rocketImg.svg";
rocket.aniPath = "Anis/Rocket_Ani.gif";
rocket.soundPath = "sound/rocketlauncher.ogg";
rocket.power = 5;
rocket.speed = 1;
rocket.cond = 5;
rocket.cooldown = 10;

var rayGun = new item();
rayGun.name = "Ray-Gun";
rayGun.filePath = "rayGunImg.svg";
rayGun.aniPath = "Anis/RayGun_Ani.gif";
rayGun.soundPath = "sound/raygun.ogg";
rayGun.power = 2;
rayGun.speed = 5;
rayGun.cond = 5;
rayGun.cooldown = 4

var items = [fist]; //, dagger, fish, whip, wand, pistol, rifle, rocket, rayGun
var myWeapon = new item();
playa.equipedOn = fist.clone();
