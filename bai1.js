function dtHinhTron(r)
{
    return 3.14*r*r;
}
function chuviHinhTron(r)
{
    return 2*3.14*r;
}
do{
var r = parseFloat(prompt("Nhap ban kinh hinh tron: "));
}while(r<0);
var kq = parseFloat(dtHinhTron(r));
var kq1 = parseFloat(chuviHinhTron(r));
console.log('Dien tich hinh tron la: ' + kq);
console.log('Chu vi hinh tron la: ' + kq1);




