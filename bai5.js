do{
    var x = parseInt(prompt("Nhap vao so x co 3 chu so: "));
}while(x<100 || x>1000);
var a, b, c;
a = x/100;
b = (x - a*100)/10;
c = (x - a*100 - b*10);
var d = a + b + c;
console.log("so "+ x +" co tong cac chu so la "+ d +"!");
