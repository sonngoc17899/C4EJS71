do{
    var x = parseInt(prompt("Nhap so tien x la boi so cua 10k vnd: "));
}while(x < 10000 && x%10000 !=0);
var a, b, c, d;
parseInt(a);
parseInt(b);
parseInt(c);
parseInt(d);
a = x/100000;
b = (x - a*100000)/50000;
c = (x - a*100000 - b*50000)/20000;
d =  (x - a*100000 - b*50000 - c*20000)/10000;
console.log(" "+ x + " vnd =   "+ a +" to 100000 + "+ b +" to 50000 + "+ c +" to 20000 + "+ d +" to 10000 ");

