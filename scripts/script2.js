function toCelsius(farTemp){
    var celTemp = (farTemp-32)*(5/9);
    document.write("The Celsius Temperature = " + celTemp);
    document.write("<br>");
}

function toFahrenheit(celTemp){
    var farTemp = celTemp*(9/5)+32;
    document.write("The Fahrenheit Temperature = " + farTemp);
    document.write("<br>");
}

function getPerimeter(width,length){
    var perim = 2*width + 2*length;
    document.write("The peremeter of a rectangle with a width of " + width + " and a length of " + length + " is " + perim);
    document.write("<br>");
}

function getArea(width,length){
    var area = width * length;
    document.write("The area of a rectangle with a width of " + width + " and a length of " + length + " is " + area);
    document.write("<br>");
}

function getAreaAndPerimeter(width,length){
    getPerimeter(width,length);
    getArea(width,length);
}

function getCelsiusFahrenheitAreaAndPerimeter(farNum,celNum,width,length){
    toCelsius(farNum);
    toFahrenheit(celNum);
    getPerimeter(width,length);
    getArea(width,length);
}

if( 2==1 ){
getCelsiusFahrenheitAreaAndPerimeter(32,0,12,34);
}

function lessThanFifty(num){
    if(num<50){
       document.write(num + " is smaller than 50!")
   }else{
        document.write(num + " is not smaller than 50.")
    }
}
lessThanFifty(2);
document.write("<br>")

function getRank(rankNum){
    switch(rankNum){
        case 1:
            document.write("You came in first.");
            document.write("<br>");
            break;
        case 2:
            document.write("You came in second.");
            document.write("<br>");
            break;
        case 3:
            document.write("You came in third.");
            document.write("<br>"); 
            break;
        default:
            document.write("Your not in the Top 3");
            document.write("<br>");    
    }
}

getRank(1);

function shortToLongDayOfWeek(shortWeekDay){
    switch(shortWeekDay){
        case "m":
            document.write("Monday");
            document.write("<br>")
            break;
        case "t":
            document.write("Tuesday");
            document.write("<br>")
            break;
        case "w":
            document.write("Wendsday");
            document.write("<br>")
            break;
        case "th":
            document.write("Thursday");
            document.write("<br>")
            break;
        case "f":
            document.write("Friday");
            document.write("<br>")
            break;    
        case "sa":
            document.write("Saturday");
            document.write("<br>")
            break; 
        case "s":
            document.write("Sunday");
            document.write("<br>")
            break;    
        default:
            document.write("Invalid");
            document.write("<br>");        
    }
}

shortToLongDayOfWeek("m");