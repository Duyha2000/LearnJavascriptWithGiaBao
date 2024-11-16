// // // DOM: document object modal

// // // Truy xuất thành phần trong dom dựa vào class heading
// // // let heading = document.querySelector(".heading")
// // // console.log(heading)
// // let heading2 = document.getElementsByClassName("heading")
// // let h2 = document.getElementsByTagName("h2")
// // console.log(h2)
// // console.log(heading2 + "heading")
// // // Truy xuất thành phần trong dom dựa vào id title

// // let title = document.getElementById("title")
// // let title2 = document.querySelector("#title")
// // console.log(title)
// // console.log(title2)

// // // Lấy ra tất cả các thẻ h3 có class là desc
// // let desc = document.querySelectorAll(".desc")
// // console.log(desc)

// // // 1. Truy cập và thay đổi nội dung (text của phần tử DOM)
// // // Chèn nội dung xin chào vào thẻ h3 có class desc thứ 2
// // let secondh3 = document.querySelectorAll("h3")[1]
// // // innerHTML chèn được nhiều thẻ ul, li, các thẻ div, h3, h4
// // // secondh3.innerHTML = "<h2> xin chao </h2>"
// // secondh3.textContent = "xin chao "

// // // textContent: chuyên chèn nội dung vào thẻ
// // console.log(secondh3)

// // Thay đổi css của trang web:
// // Đổi màu chữ của thẻ thành màu red có nội dung là xin chào 3
// let xinchao3 = document.getElementsByTagName("h2")[2];
// xinchao3.style.color = "red";
// console.dir(xinchao3);
// console.log(xinchao3);

// // Truy xuất thẻ <h1 id="title">Xin chao</h1> và thay đổi text thành Hello và đổi màu background sang đỏ, chữ vàng
// let title = document.getElementById("title");
// title.textContent = "Hello";
// title.style.backgroundColor = "red";
// title.style.color = "yellow";
// console.log(title);
// console.dir(title);

// // Lấy giá trị 2 ô input để khi submit form lấy ra được giá trị
// let email = document.getElementById("email");
// let pass = document.getElementById("password");

// // Event: sư kiện: onClick,onSubmit, oninput

// // Khi click vào button Xin chào sẽ hiển thị ra alert là Hello
// let button = document.getElementById("btn");
// console.log(button);

// // addEventlistener("tên sự kiện", hàm)
// button.addEventListener("click", () => {
//   console.log("Hello");
// });

// // Khi click button Submit sẽ hiển thị bạn có muốn submit form không
// let button2 = document.querySelector(".btn2");
// button2.addEventListener("click", () => {
//   console.log("bạn có muốn submit form không?");
// });

// // let button3 = document.querySelector(".btn");
// let head = document.querySelector(".heading");
// // Cách 1: addEventListener
// // button3.addEventListener("click", () => {
// //   head.style.color = "blue";
// // });

// // Cách 2: onclick
// const clickBtn = () => {
//   if (head.style.color == "black") {
//     head.style.color = "blue";
//   } else {
//     head.style.color = "black";
//   }
// };
// // Khi click lại lần nữa button sẽ chuyển từ xanh -> đen và ngược lại (!)
// let switchbtn = document.querySelector(".switch");
// let clickSwitch = () => {
//   if (switchbtn.textContent == "ON") {
//     switchbtn.textContent = "OFF";
//     switchbtn.style.backgroundColor = "red";
//   } else {
//     switchbtn.textContent = "ON";
//     switchbtn.style.backgroundColor = "green";
//   }
// };

// /*
// Bài tập: Bạn được yêu cầu tạo một trang web đơn giản với một nút "Thay Đổi Màu".
// Mỗi lần người dùng click vào nút này, màu nền của trang web sẽ thay đổi ngẫu nhiên giữa bốn
// màu sau: trắng (#FFFFFF), đỏ (#FF0000), xanh lá cây (#00FF00), và xanh dương (#0000FF).
// 	B1: Tạo một mảng color chứa bốn mã màu hex tương ứng với trắng, đỏ, xanh lá cây, và xanh dương.
// 	B2: Tạo một nút trên trang web với văn bản là "Thay Đổi Màu" và thêm sự kiện onclick
// 	B3: Thêm sự kiện random màu sắc mỗi khi người dùng click:
//   Math.floor(Math.random() * color.length);
// */
// let colors = ["white", "red", "green", "blue"];
// let colorBtn = document.querySelector(".color");
// let body = document.getElementsByTagName("body")[0];

// let changeColor = () => {
//   let random = Math.floor(Math.random() * colors.length); // 0,1,2,3
//   body.style.backgroundColor = colors[random]
// };
