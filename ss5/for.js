// console.log("In ra cac so tu 0 den 100!");

// for(let i=0;i<=100;i++)
// {
//     console.log(i);
// }
// let month = parseInt(prompt("Nhap thang: "));
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("Thang co 31 ngay!");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("Thang co 30 ngay!");
//     break;
//   case 2:
//     console.log("Thang co 28 hoac 29 ngay!");
//     break;
//   default:
//     console.log("Nhap ngu!");
// }
// console.log("Cac so chan tu 0 den 10!");

// for (let index = 10; index >=0; index-=2) {
//     // console.log("Ez game!");
//     console.log(index);

// }
// console.log("Cac so le tu 0 den 10!");
// for (let index = 1; index <= 10; index+=2) {
//     console.log(index);
// }
// let m = Number(prompt("Nhap so m: "));
// let n = Number(prompt("Nhap so n: "));
// // console.log("In ra cac so trong doan!");

// if (m < n) {
//   for (let i = m; i < n; i++) {
//     console.log(i);
//   }
// }else if(m===n) console.log("Khong chay vong lap!");
// else {
//   for (let i = n; i < m; i++) console.log(i);
// }
// let a = Math.max(m, n);
// let b = Math.min(m, n);
// for(let i = b;i < a;i++)
// {
//     console.log(i);
// }
// tinh tong
// let s = 0;
// let m = parseInt(prompt("Nhap so m(m>0): "));
// for(let i=0;i<=m;i+=2)
// {
//     s += i;
// }
// console.log("Tong cac so chan tu 0 den "+m+": ", +s);
// let s1 = 0;
// for(let i=1;i<m;i+=2)
// {
//     s1 += i;
// }
// console.log("Tong cac so le tu 0 den "+m+": ", +s1);
// let s2 = 0;
// for(let i=1;i<m;i++)
// {
//     s2 += 1/i;
// }
// console.log("Tong cac so tu 1 den 1/"+m+": ", +s2);
// let s3 = 0;
// for(let i=1;i<m;i++)
// {
//     s3 += 1/(i*(i+1));
// }
// console.log("Tong cac so tu 1/2 den 1/m*(m+1):", +s3);
// let s4 = 0;
// for(let i=1;i<m;i++)
// {
//     s4 += i/(i+1);
// }
// console.log("Gia tri cua 1/2 + ...m/m+1 la: ",+s4);
// let giaithua = 1;
// let s6 = 1;
// for(let i=1;i<=m;i++)
// {
//     for(let j=1;j<=i;j++)
//     {
//         giaithua*=j;
//     }
//     s6 += giaithua;
// }
// let m = Number(prompt("Nhap mot so: "));
// while(m < 8){
//     m = Number(prompt("Nhap lai m>8: "));
// }
// console.log(m);
// let password = prompt("Nhap mat khau: ");
// while(password.length < 8){
//    password = prompt("Mat khau qua ngan, nhap lai!");
// }
// console.log(password);
// let n = parseInt(prompt("Nhap so chan n: "));
// while(n<=10 || n%2!==0){ //!(n>10 && n%2==0)
//     n = prompt("Nhap lai n: ");
// }
// console.log(n);

// let pass = prompt("Nhap mat khau: ");
// while(!(pass.length >8 && pass.indexOf("@")>=0)){
//     pass = prompt("Nhap lai mat khau: ");
// }
// console.log(pass);
for(let i=2;i<=10;i++)
{
    if(i%2===1)
    {
        break;
    }
    console.log(i);
}