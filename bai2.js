function dtHinhVuong(a, b){
    return a*b;
}
function chuviHinhVuong(a, b){
    return (a+b)*2;
}
do{
    var a = parseFloat(prompt("Nhap chieu dai hinh vuong: "));
    var b = parseFloat(prompt("Nhap chieu rong hinh vuong: "));
}while(a < 0 || b < 0);
var kq = parseFloat(dtHinhVuong(a, b));
var kq1 = parseFloat(chuviHinhVuong(a, b));
console.log('Dien tich hinh vuong la: ' + kq);
console.log('Chu vi hinh vuong la: ' + kq1);

