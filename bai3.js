function tinhY1(x){
    return 4*(x*x + 10*x*Math.sqrt(x) + 3*x +1);
}
function tinhY2a(x){
    return (Math.sin(Math.PI*x*x) + Math.sqrt(x*x+1));
}
function tinhY2b(x){
    return (Math.pow(Math.E, 2*x) + Math.cos((Math.Pi/4)*x));
}
function tinhY2(x){
    return tinhY2a(x)/tinhY2b(x);
}
var x = parseFloat(prompt("Nhap gia tri x cua bieu thuc Y1: "));
var kq = parseFloat(tinhY1(x));
console.log('Gia tri bieu thuc Y1 la: ' + kq);
var x1 = parseFloat(prompt("Nhap gia tri x cua bieu thuc Y2: "));
var kq1 = parseFloat(tinhY2a(x1));
console.log('Gia tri bieu thuc Y2 la: ' + kq1);

