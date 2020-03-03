let arr = [1, 3, 5, 7, 9]; //mang rong khong co gi ben trong
let arr1 = [1, 2, 3, 4]; // cac gia tri khong nhat thiet cung 1 kieu du lieu
// chi java script
// nen quy ve cung 1 kieu du lieu
let listName = ["2a", "2b", "2c"];
console.log(listName.length);
// Array.length do dai cua mang
arr.push(10); // cho vao cuoi mang
arr.unshift(10); // cho vao dau mang
console.table(arr);
console.dir(arr);
arr[arr.length] = 500;
// mang.splice(vi tri ban dau, so luong muon xoa)
arr.splice(1, 2); // xoa vi tri thu 1 va xoa 2 phan tu
// pop() doi lap voi push
// shift() doi lap unshift
// => tra ra gia tri vua xoa
let a = arr.pop();
let b = arr.shift();
console.log(`a = $(a), b = $(b)`);
//stack 
// first In last out push() pop()
// shift() unshift()

//queue
//first In first out 
//push() unshift()
//shift() pop();