do{
    let x = parseInt(prompt("Nhap so tien x la boi so cua 10k vnd: "));
}while(x < 10000 && x%10000 !=0);
let a, b, c, d;
a = parseInt(x/100000);
b = parseInt((x - a*100000)/50000);
c = parseInt((x - a*100000 - b*50000)/20000);
d = parseInt((x - a*100000 - b*50000 - c*20000)/10000);
console.log(" "+ x + " vnd =   "+ a +" to 100000 + "+ b +" to 50000 + "+ c +" to 20000 + "+ d +" to 10000 ");

