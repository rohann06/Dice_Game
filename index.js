// random number generator
var rn1 = Math.floor(Math.random() * 6) + 1;
var rn2 = Math.floor(Math.random() * 6) + 1;

//create image name 
var rn_Img_1 = "dice" + rn1 + ".png";
var rn_Img_2 = "dice" + rn2 + ".png";


var randomImgSource1 = "images/" + rn_Img_1;
var randomImgSource2 = "images/" + rn_Img_2;

document.querySelectorAll("img")[0].setAttribute("src", randomImgSource1);;
document.querySelectorAll("img")[1].setAttribute("src", randomImgSource2);

// who wins the game?
if (rn1 > rn2){
    document.querySelector("h1").innerHTML ="Player 1 Wins the game";
}
else if(rn1 < rn2){
    document.querySelector("h1").innerHTML ="Player 2 Wins the game";
}
else{
    document.querySelector("h1").innerHTML ="game is tie";
}


