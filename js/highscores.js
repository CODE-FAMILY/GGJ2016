var highscores = "100-tomy-200-tomyshadow-300-ellescuba-400-joe\\-burns\\-the\\-html\\-master"; // change this variable to whatever highscores there are, you may choose to save this in a cookie and put the results in this variable, or store the information in a database and use a server side language such as PHP to get the information
var currentname = "";
var namearray = new Array();
var i2 = 0;
var flip = 0;
var currentname2 = "";
var currentscore = "";
var highscorearray = new Array();
var i3 = 0;
var flip2 = 0;
var numberoflines = "";
var firsttestinfinalfor = 0;
var lowi = 0;
var highi = 0;
var numberoflines2 = "\\\\-";
function getscores() {
for(i=0;i<=highscores.length-1;i++) {
if (flip == 0) {
if (highscores[i] != "-") {
currentname += "" + highscores[i] + "";
}
if (highscores[i+1] == "-") {
currentname += "-";
flip = 1;
}
} else {
if (highscores[i] != "-") {
if (i <= highscores.length-1) {
if (!highscores[i+1] || highscores[i+1] == "null" || highscores[i+1] == "undefined") {
currentname += "" + highscores[i] + "";
} else {
if (highscores[i] != "\\" || highscores[i+1] != "-") {
currentname += "" + highscores[i] + "";
}
}
}
}
if (!highscores[i+1] || highscores[i+1] == "null" || highscores[i+1] == "undefined") {
} else {
if (highscores[i] == "\\" && highscores[i+1] == "-") {
currentname += "\\-";
i++;
}
}
if (i == highscores.length-1) {
namearray[i2] = currentname;
}
if (!highscores[i+1] || highscores[i+1] == "null" || highscores[i+1] == "undefined") {
} else {
if (highscores[i+1] == "-") {
namearray[i2] = currentname;
i2++;
currentname = "";
flip = 0;
}
}
}
}
i = 0;
while (i3 <= namearray.length-1) {
if (flip2 == 0) {
if (namearray[i3][i] != "-") {
currentscore += "" + namearray[i3][i] + "";
}
if (namearray[i3][i+1] == "-") {
flip2 = 1;
}
i++;
} else {
if (namearray[i3][i] != "-") {
if (i <= namearray[i3].length-1) {
if (!highscores[i+1] || highscores[i+1] == "null" || highscores[i+1] == "undefined") {
currentname2 += "" + namearray[i3][i] + "";
} else {
if (namearray[i3][i] != "\\" || namearray[i3][i+1] != "-") {
currentname2 += "" + namearray[i3][i] + "";
}
}
}
}
if (!highscores[i+1] || highscores[i+1] == "null" || highscores[i+1] == "undefined") {
} else {
if (namearray[i3][i] == "\\" && namearray[i3][i+1] == "-") {
currentname2 += "\\-";
i++;
}
}
if (i == namearray[i3].length-1) {
if (!highscorearray[currentscore] || highscorearray[currentscore] == null || highscorearray[currentscore] == undefined) {
highscorearray[currentscore] = currentname2;
} else {
while (highscorearray["" + currentscore + "" + numberoflines + ""] || highscorearray["" + currentscore + "" + numberoflines + ""] != null || highscorearray["" + currentscore + "" + numberoflines + ""] != undefined) {
numberoflines += "\\\\-";
}
highscorearray["" + currentscore + "" + numberoflines + ""] = currentname2;
numberoflines = "";
}
currentscore = "";
currentname2 = "";
i = 0;
i3++;
flip2 = 0;
} else {
i++;
}
}
}
for (key in highscorearray) {
if (firsttestinfinalfor == 0) {
lowi = key;
highi = key;
firsttestinfinalfor = 1;
} else {
if (key < lowi) {
lowi = key;
}
if (key > highi) {
highi = key;
}
}
}
document.write("<ol>");
for (i=highi;i>=lowi;i--) {
if (!highscorearray["" + i + ""] || highscorearray["" + i + ""] == null || highscorearray["" + i + ""] == undefined) {
} else {
for (key in highscorearray) {
if (key == "" + i + "") {
document.write("<li>" + highscorearray['' + i + ''].replace(/\\-/g, '-') + " - " + key + "</li>"); // The username is stored in the variable highscorearray['' + i + ''].replace(/\\-/g, '-') and the the score is stored in the variable key, you might want to do something else with this than write it to the page using document.write, but be aware not all the code is outputted at once, instead looping through each username
}
}
if (!highscorearray["" + i + "\\\\-"] || highscorearray["" + i + "\\\\-"] == "null" || highscorearray["" + i + "\\\\-"] == "undefined") {
} else {
for (key in highscorearray) {
if (key == "" + i + "\\\\-") {
document.write("<li>" + highscorearray['' + i + '\\\\-'].replace(/\\-/g, '-') + " - " + key.replace(/\\\\-/g, '') + "</li>"); // The username is stored in the variable highscorearray['' + i + ''].replace(/\\-/g, '-') and the the score is stored in the variable key.replace(/\\\\-/g, ''), you might want to do something else with this than write it to the page using document.write, but be aware not all the code is outputted at once, instead looping through each username
}
}
while (highscorearray["" + i + "" + numberoflines2 + ""] || highscorearray["" + i + "" + numberoflines2 + ""] != null || highscorearray["" + i + "" + numberoflines2 + ""] != undefined) {
numberoflines2 += "\\\\-";
for (key in highscorearray) {
if (key == "" + i + "" + numberoflines2 + "") {
document.write("<li>" + highscorearray['' + i + '' + numberoflines2 + ''].replace(/\\-/g, '-') + " - " + key.replace(/\\\\-/g, '') + "</li>"); // The username is stored in the variable highscorearray['' + i + ''].replace(/\\-/g, '-') and the the score is stored in the variable key.replace(/\\\\-/g, ''), you might want to do something else with this than write it to the page using document.write, but be aware not all the code is outputted at once, instead looping through each username
}
}
}
}
}
}
}
document.write("</ol>");
getscores();