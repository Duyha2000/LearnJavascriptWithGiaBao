// // localStorage:
// //local: Nội bộ (chỉ tồn tại trên máy tính mình)
// //Storage: kho
// // backend
// // frontend: giao diện trang web

// let num = document.querySelector(".num")
// let number = 0

// function display(){
//   num.innerHTML = localStorage.getItem("num")
// }
// function sub(){
//   number = localStorage.getItem("num")
//   number--
//   localStorage.setItem("num", number)
//   display()
// }

// function add(){
//   let number = localStorage.getItem("num") || 0
//   number++
//   localStorage.setItem("num", number)
//   disPlay()
// }
// display()

// // num = localStorage.getItem("num")
// // Cú pháp:
// // session: 1 phiên sử dụng
// // thiết lập dữ liệu: set
// // localStorage.setItem("key" , value);
// localStorage.setItem("number", 5);
// // key student name là Dung
// localStorage.setItem("student", "Dung")
// // hiển thị dữ liệu: get
// // localStorage.getItem("key") -> lôi ra được value của nó
// const a = localStorage.getItem("number");
// console.log("a " + a);

// // remove 1 key
// // localStorage.removeItem("number");

// hiển thị dữ liệu lên màn hình console 1 user mới
// username: 111
// password: 12345
let usernameHtml = document.querySelector(".username");
let passwordHtml = document.querySelector(".password");

// value
// ngăn cản hành động reset form

// Trong localStorage: key và value chỉ lưu được dưới dạng String
// localStorage.setItem("object",JSON.stringify({
//   name:"Bao",
//   age:18
// }))

// let x = JSON.parse(localStorage.getItem("object"))
// ép kiểu dữ liệu ->

let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
let table = document.querySelector(".table");

function displayData() {
  let html = "";
  for (let i = 0; i < accounts.length; i++) {
    html += `
      <tr>
        <td>${accounts[i].id}</td>
        <td>${accounts[i].username}</td>
        <td>${accounts[i].password}</td>
        <td><button onclick="deleteRow(${i})">Delete</button></td>
      </tr>
    `;
  }
  table.innerHTML = html;
}

// 2 accounts
function save(event) {
  event.preventDefault();
  let objAccount = {
    id: Math.floor(Math.random() * 1000),
    username: usernameHtml.value,
    password: passwordHtml.value,
  };
  accounts.push(objAccount);
  localStorage.setItem("accounts", JSON.stringify(accounts));

  // hiển thị lại danh sách học sinh
  // reset form lại rỗng
  displayData();
  event.target.reset();
}
console.log("accounts : ", accounts);
// hiển thị hết các account ra table, gồm 3 trường STT, username và password
displayData();

function deleteRow(index) {
  localStorage.setItem("accounts", JSON.stringify(accounts));

  accounts.splice(index, 1);
  displayData();
  // cập nhật lại local, và hiển thị lại
}

// students.sort((student1, student2) => student1.name.localeCompare(student2.name))
// products.sort((product1, product2) => product1.price - product2.price);

let check = true
let accountsCopy = [...accounts]
function sort(){
  check = !check
  if (check==true){
    accounts.sort((acc1, acc2) => acc1.username.localeCompare(acc2.username))
  }else{
    accounts = [...accountsCopy]
  }
  displayData()
}

// edit, filter: 