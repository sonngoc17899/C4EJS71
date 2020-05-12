// function hello(x){
//     alert("Hello "+x+"");
// }
// let name = prompt("Nhập tên của bạn: ");
// helloWorld(name);
// function sum(x, y){
//     console.log(x+y);
// }
// sum(2, 4);
// function tinhtong(x, y){
//     return x+y;
// }
// let kq = tinhtong(5, 8);
// console.log(kq);
// function array(a){
//     // if(typeof a == 'array'){
//     let s = 0;
//     for(let i=0;i<a.length;i++)
//     {
//         s += a[i];
//     }
//     return s;
    // }   
    // else return 0;
// }
// let n = parseInt(prompt("Nhap so phan tu cua mang: "));
// let a = [];
// for(let i=0;i<n;i++)
// {
//     let x = prompt("Nhap a["+i+"] = ");
//     a.push(x);
// }
// let kq = array(a);
// console.log(kq);
// let sum = array([3, 5, 6, 7]);
// console.log(sum);
// return dung function ngay lap tuc
// viet function khong co ngoac tron thi in ra cau dinh nghia

function fibonaci(n){
    if(n===1 || n===2) return 1;
    if(n>=3) return fibonaci(n-1)+fibonaci(n-2);
}
let kq = fibonaci(6);
console.log(kq);
