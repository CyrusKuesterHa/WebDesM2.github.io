var numClicksOne = 0;
var numClicksTwo = 0;
function buttonOneClicked(){
    numClicksOne++;
    document.getElementById("text1").innerHTML="Button 1 has been clicked "+numClicksOne+" times!";
}
function buttonTwoClicked(){
    numClicksTwo++;
    document.getElementById("text2").innerHTML="Button 2 has been clicked "+numClicksTwo+" times!";
}
function changeToGreen(){
 document.getElementById("bodyArea").setAttribute("bgcolor","green");
}
function changeBackToWhite(){
 document.getElementById("bodyArea").setAttribute("bgcolor","white");
}