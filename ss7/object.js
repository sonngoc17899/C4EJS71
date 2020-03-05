// cu phap
// "key": value;
// cac cap cach nhau boi dau phay
//"key1": value1;
let myInfo = {
    "name": "Son",
    "age": 21,
    "country": "Ha Noi",
}
// kieu key ko can dau "" cung duoc
// key co dau cach thi can "", key nen viet lien
// key khong duoc trung nhau
// neu trung chi lay key dang sau
//object rong
// let O = {};
// console.log(myInfo);
// Duyet object["key"] => value tai key cua object
//object.key key la 1 thuoc tinh cua object
for (const name in myInfo){
    if (myInfo.hasOwnProperty(name)) {
        const element = myInfo[name];
        console.log(element);
    }
}
//them moi object["key moi"] = value;
// object.key = value;
myInfo.phone = 69;
// xoa 1 key dung ham delet object["key can xoa"];
