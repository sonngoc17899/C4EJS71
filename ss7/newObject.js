// khai bao 1 object, chua thong tin dien thoai
// chua ten, gia, hang san xuat
//1. in thogn tin dien thoai ra man hinh
//2. cho nguoi dung nhap them key value cua dt nay
//3. cho nguoi dung sua 1 value cua dien thoai nay
//4. nhap 1 key, xoa thong tin nay trong dt

// let phone = {
//     'name': "Xiaomi note 7",
//     "Gia": 5e6,
//     "Hang san xuat": "Xiaomi",
// }
// for (const key in phone) {
//     if (phone.hasOwnProperty(key)){
//         const element = phone[key];  
//         console.log(key+": "+element);
//     }
// }
// let releaseDate = prompt("Nhap value cua key: ");
// phone.releaseYear = releaseDate;
// let newKey = prompt("Nhap 1 key thuoc object: ");
// while(!(phone.hasOwnProperty(newKey)))
// {
//     newKey = prompt("Nhap lai key: ");
// }
// phone[newKey] = prompt("Nhap gia tri moi: ");
// let deleteKey = prompt("Nhap key can xoa: ");
// delete phone.deleteKey;
// II. Khai báo 1 mảng chứa thông tin 3 đt, mỗi đt gồm:
// tên, giá, hãng sx
// 1. in ds đt ra màn hình (không sử dụng log mảng và log object)
// 2. cho ngdung thêm 1 đt mới vào mảng, bằng cách cho ngdung nhập tên, giá, hãng rồi thêm đt mới này vào mảng
// 3. ngdung nhập stt và key muốn sửa, cho người dùng sửa thông tin của đt có stt đó
// 4. nhập stt, xóa đt có stt đó
// 5. Nhập 1 tên đt, tìm đt có tên đó (ko phân biệt hoa thường)
// 6. Nhập 2 số, tìm các đt có giá nằm giữa 2 số đó
// 7. Nhập 1 hãng SX, tìm các đt thuộc hãng sx đó
// 8. sắp xếp DS đt theo tên, theo giá, (tăng, giảm dần)


// t 1 mang rong
// 1 list
// push thong tin cua object la mang
let listName = [
    {
        "name": "Xiaomi",
    },
    {
        "name": "SamSung",
    },
    {
       "name": "Iphone",
    },
];
let newPhone = {
    "name": "oppo",
};
listName.push(newPhone);
for(let i=0;i<listName.length;i++)
{
    const phone = listName[i];
    console.log(i+1);
    for (const key in phone){
        const value = phone[key];
        console.log(key+": "+value); 
    }
    console.log("\t----\t----"); 
}

