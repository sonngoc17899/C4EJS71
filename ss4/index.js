// let x = parseInt(prompt("Nhap vao so nguyen x: "));
// if(x>8){
//     console.log("So "+ x +" lon hon so 8!"); 
// }
// if(x<8){
//     console.log("So "+ x +" nhon hon so 8!");    
// }
// if(x===8){
//     console.log("So "+ x +" bang so 8!");
// }

// if(x>8){
//     console.log("So "+ x +" lon hon so 8!"); 
// }
// else if(x<8){
//     console.log("So "+ x +" nhon hon so 8!");    
// }
// else console.log("So "+ x +" bang so 8!");
// % chia lay du, / chia lay thuong
// if(x%2 === 0) console.log("So "+ x +" la so chan!");
// else console.log("So "+ x +" la so le!");
// let x = parseInt(prompt("Nhap vao nam: "));
// if(x%4===0 && x%100!==0) console.log("Nam "+ x +" la nam nhuan!");
// else console.log("Nam "+ x +" khong phai nam nhuan!");

let month = parseInt(prompt("Nhap vao thang: "));
if(month === 1 || month ===3 || month === 5 || month ===7 || month ===8 || month ===10 || month ===12){
    console.log("Thang "+ month+" co 31 ngay!");    
}else if(month === 4 || month ===6 || month===9 || month===11){
    console.log("Thang "+ month +" co 30 ngay!");
}else if(month === 2) console.log("Thang "+ month+" co 28 hoac 29 ngay!");
else console.log('Nhap sai!');




