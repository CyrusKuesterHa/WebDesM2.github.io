document.write("hello");
document.write("The area of a rectangle with a width of " + width + " and a length of " + length + " is " + area);
    document.write("<br>");


var num = 1;
num = num+1;

document.write(num);
document.write("<br>");
for(var i = 0; i <= 9; i++){
    document.write("Hello World");
    document.write("<br>")
}

function drawSquare(length){
    for(var i=0; length >= i; i++;){
        var line = document.write("*");
        line1 = line * length;
        document.write("<br>");
    }
}
drawSquare(2);

