var operator = 0;
var line = ""; 
var switchSides = 0;
var left = "";
var right = "";
var leftNum = 0;
var rightNum = 0;
var total = 0;

function displayNum(num){
    line = line+num;
    if(switchSides == 0){
       left = left+num;  
    }
    else{
       right = right+num;
    } 
    document.getElementById("text").innerHTML=line;
}
function displayOp(op){
    if(op == '+'){
        operator = 1;
    }
    else if(op == '-'){
        operator = 2;
    }
    else if(op == '*'){
        operator = 3;
    }
    else if(op == '/'){
        operator = 4;
    }
    else{
        operator = 0;
    }
    switchSides = 1;
    line = line+op;
    document.getElementById("text").innerHTML=line;
}
function displayEqual(){
    leftNum = parseInt(left);
    rightNum = parseInt(right);
    line = "";
    if(operator == 1){
        total = leftNum+rightNum;
        line = line+total;
        document.getElementById("text").innerHTML=line;
    }
    else if(operator == 2){
        total = leftNum-rightNum;
        line = line+total;
        document.getElementById("text").innerHTML=line;
    }
    else if(operator == 3){
        total = leftNum*rightNum;
        line = line+total;
        document.getElementById("text").innerHTML=line;
    }
    else if(operator == 4){
        total = leftNum/rightNum;
        line = line+total;
        document.getElementById("text").innerHTML=line;
    }
}