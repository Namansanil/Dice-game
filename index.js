var randomnumber = Math.floor(Math.random(1, 6)* 6 +  1);
var randomedice = ("./dice" + randomnumber +".png");
document.querySelectorAll("img")[0].setAttribute("src", randomedice);

//dicee 2:

var randomnumber2 = Math.floor(Math.random(1, 6)* 6 + 1);
var randomdice2 =("./dice" + randomnumber2 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", randomdice2);

if(randomedice > randomdice2){
    document.querySelector("h1").innerHTML ="player 1 won!!!!!";
}else if(randomdice2 > randomedice){
    document.querySelector("h1").innerHTML ="player 2 won!!!!!";
}else{
    document.querySelector("h1").innerHTML ="OHH its a tie......";
}
