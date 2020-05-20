// console.dir(document.getElementById("title").innerHTML);
// document.getElementById("title").innerHTML = "Welcome JS 71";
// document.getElementsByClassName("gg").innerHTML = "ff";
let class10 = document.getElementsByClassName("10");
console.log(class10);
// document.getElementsByClassName("10")[0].innerHTML = "Welcome JS71";
// document.getElementsByClassName("10")[1].innerHTML = "Welcome JS71";
let idtitle = document.getElementById("title");
// for(let i=0;i<class10.length;i++)
// {
//     class10[i].innerHTML = "Welcome JS71";
// }
// idtitle.style.color = blue;
idtitle.innerHTML = "Welcome JS71 <h3>Đây là thẻ h3/h3>";
let ulFoods = document.getElementById("Food");
// ulFoods.innerHTML = `<li>
// Cơm rang
// <img src ="https://ameovat.com/wp-content/uploads/2018/03/cach-lam-com-chien-trung-4.jpg" />
// `
let listFoods = [
    "Pho",
    "Bun ca",
    "Mi tom",
    "Com cuon",
]
let listImgs = [
    "https://ameovat.com/wp-content/uploads/2018/03/cach-lam-com-chien-trung-4.jpg",
    "https://ameovat.com/wp-content/uploads/2018/03/cach-lam-com-chien-trung-4.jpg",
    "https://ameovat.com/wp-content/uploads/2018/03/cach-lam-com-chien-trung-4.jpg",
    "https://ameovat.com/wp-content/uploads/2018/03/cach-lam-com-chien-trung-4.jpg",
]
let a = Math.min(listFoods.length, listImgs.length);
// for(let i=0;i<a;i++)
// {
//     let htmlFood= "<li>"+listFoods[i]+"<img width = 100px src='"+listImgs[i]+"'/></li>";
//     ulFoods.innerHTML += htmlFood;
// }
let listFood = [
    {
        food: "Phở",
        img: "https://ameovat.com/wp-content/uploads/2018/03/cach-lam-com-chien-trung-4.jpg",
        description: "Đây là ảnh đồ ăn",
        linkDetail: "https://www.google.com/",
    },
    {
        food: "Cơm rang",
        img: "https://ameovat.com/wp-content/uploads/2018/03/cach-lam-com-chien-trung-4.jpg",
        description: "Đây là ảnh đồ ăn",
        linkDetail: "https://www.google.com/",
    },
    {
        food: "Mi tom",
        img: "https://ameovat.com/wp-content/uploads/2018/03/cach-lam-com-chien-trung-4.jpg",
        description: "Đây là ảnh đồ ăn",
        linkDetail: "https://www.google.com/",
    },
    {
        food: "Mi tron",
        img: "https://ameovat.com/wp-content/uploads/2018/03/cach-lam-com-chien-trung-4.jpg",
        description: "Đây là ảnh đồ ăn",
        linkDetail: "https://www.google.com/",
    },
]
// for(let i=0;i<listFood.length;i++)
// {
//     let htmlFood = "<li>"+listFood[i].food+"<img width = 100px src='"+listFood[i].img+"'/></li>"
//     ulFoods.innerHTML += htmlFood;
// }
let idFoods = document.getElementById("Foods");
for (let i = 0; i <listFood.length ;i++) {
    const element = listFood[i];
    let html = `<tr>
                <td>${i+1}</td>
                <td><img src ="${listFood[i].img}" width = 100px</td>
                <td>${listFood[i].food}</td>
                <td>${listFood[i].description}</td>
                <td><a href="${listFood[i].linkDetail}" target="_blank">Detail</a></td>
</tr>
    `
    idFoods.innerHTML += html;
}