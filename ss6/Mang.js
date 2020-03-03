let arr = [];
for(let i=0;i<5;i++)
{
    let n = parseInt(prompt("Nhap 1 so bay ki: "));
    arr.push(n);
}
console.log("In ra 5 so vua nhap!");
let s = 0;
let tbc = 0;
for(let i=0;i<arr.length;i++)
{
    console.log(""+i+": "+arr[i]+"");
    s += arr[i];
}
tbc = s/arr.length;
console.log("Tong cac so trong mang: "+s);
console.log("Trung binh cong cac so trong mang: "+tbc);
let x = parseInt(prompt("Nhap 1 so bat ki: "));
let index = 0;
console.log("In ra cac so nho hon so "+x+" vua nhap(neu co)!");
for(let i=0;i<arr.length;i++)
{
    if(arr[i]===x){
        index++;
    }
    if(x>arr[i])
    {
        console.log(arr[i]);
    }
}
if(index >0) console.log("So "+x+" co trong mang!");
else console.log("So "+x+" khong co trong mang!");




