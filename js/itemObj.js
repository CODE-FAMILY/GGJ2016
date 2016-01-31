var playa = new char();

var fist = new item();
fist.name = "Fist";
//fist.filePath = "images/fistImg.svg";
//fist.soundPath = ["sound/fist1.ogg", "sound/fist2.ogg", "sound/fist3.ogg"];
fist.power = 1;
fist.speed = 1;
fist.cond = 5;

var dagger = new item();
dagger.name = "Dagger";
//dagger.filePath = "images/daggerImg.svg";
//dagger.soundPath = ["sound/dagger1.ogg", "sound/dagger2.ogg", "sound/dagger3.ogg"];
dagger.power = 2;
dagger.speed = 2;
dagger.cond = 5;

var fish = new item();
fish.name = "Fish";
//fish.filePath = "images/fishImg.svg";
//fist.soundPath = ["sound/fish1.ogg", "sound/fish2.ogg", "sound/fish3.ogg"];
fish.power = 3;
fish.speed = 1;
fish.cond = 5;

var whip = new item();
whip.name = "Whip";
//whip.filePath = "images/whipImg.svg";
//fist.soundPath = ["sound/whip1.ogg", "sound/whip2.ogg", "sound/whip3.ogg"];
whip.power = 2;
whip.speed = 3;
whip.cond = 5;

var wand = new item();
wand.name = "Wand";
//wand.filePath = "images/wandImg.svg";
//fist.soundPath = ["sound/wand1.ogg", "sound/wand2.ogg", "sound/wand3.ogg"];
wand.power = 2;
wand.speed = 4;
wand.cond = 5;

var pistol = new item();
pistol.name = "Pistol";
pistol.filePath = "images/pistolImg.svg";
//fist.soundPath = ["sound/pistol1.ogg", "sound/pistol2.ogg", "sound/pistol3.ogg"];
pistol.power = 3;
pistol.speed = 3;
pistol.cond = 5;

var rifle = new item();
rifle.name = "Rifle";
//rifle.filePath = "images/rifleImg.svg";
//fist.soundPath = ["sound/rifle1.ogg", "sound/rifle2.ogg", "sound/rifle3.ogg"];
rifle.power = 4;
rifle.speed = 3;
rifle.cond = 5;

var rocket = new item();
rocket.name = "Rocket";
//rocket.filePath = "images/rocketImg.svg";
//fist.soundPath = ["sound/rocket1.ogg", "sound/rocket2.ogg", "sound/rocket3.ogg"];
rocket.power = 5;
rocket.speed = 1;
rocket.cond = 5;

var rayGun = new item();
rayGun.name = "Ray-Gun";
//rayGun.filePath = "images/rayGunImg.svg";
//fist.soundPath = ["sound/rayGun1.ogg", "sound/rayGun2.ogg", "sound/rayGun3.ogg"];
rayGun.power = 2;
rayGun.speed = 5;
rayGun.cond = 5;

var items = [fist]; //, dagger, fish, whip, wand, pistol, rifle, rocket, rayGun
var myWeapon = new item();
playa.equipedOn = fist.clone();