// // lấy được phần tử DOM username -> lấy giá trị mình nhập (.value)
// let user = document.querySelector(".username")
// let pass = document.querySelector(".password")

// // gắn sự kiện lên ô input để lấy được giá trị của nó

// // document.addEventListener 
// // 

// // oninput: mỗi lần gõ thì sự kiện được kích hoạt và in ra giá trị phần tử DOM
// const handleUserNameChange = ()=>{
//  console.log(user.value + " username") 
// }

// const handlePasswordChange = () => {
//   console.log(pass.value + " password")
// }

// // onsubmit

// // username phải có ít nhất 6 ký tự, nếu ít hơn 6 ký tự sẽ thông báo lỗi (alert, console)
// const handleSubmit = ()=>{
//   if (user.value.length >= 6){
//     console.log(user.value + " username...") 
//     console.log(pass.value + " password...")
//   }else{
//     console.log("Ko du dieu kien")
//   }
// }

// Nhập quá 10 ký tự ở answer thì có 1 dòng chữ màu đỏ xuất hiện khi Answer không được lớn hơn 10 ký tự 
// let answer = document.querySelector(".answer")
// let warning = document.querySelector(".warning")
// let submitAnswer = () => {
//   if (answer.value.length > 10){
//     alert("Ko hop le")
//   }else{
//     alert("Thanh cong")
//   }
// }
// // 
// let check = () => {
//   if (answer.value.length > 10){
//     warning.textContent = "Ko hop le"
//     warning.style.color = "red"
//   }else{
//     warning.textContent = ""
//   }
// }

// let newItem = document.querySelector(".newItem")
// let itemList = document.querySelector(".itemList")
// // khởi tạo mảng rỗng
// let data = ["Tao tau", "Nho my"]


// // Đối với form khi submit -> trình duyệt sẽ tự động auto reload lại trang

// let addItem = (event) => {
//   event.preventDefault(); // ngắn chặn hành động reload lại trang
//   data.push(newItem.value)
//   console.log(data + "aaa")
  
//   event.target.reset(); // tự động reset các ô input trong form
//   displayData()
// }

// let displayData = () => {
//   let html = ""
//   for (let i=0; i<data.length; i++){
//     html += `
//       <li>${data[i]}</li>
//     `
//   }
//   itemList.innerHTML = html
// }

// displayData()
// console.log(data)

// newItem.style.backgroundColor = "yellow"
// let changeColor = () => {
//   if (newItem.value == ""){
//     newItem.style.backgroundColor = "yellow"
//   }else{
//     newItem.style.backgroundColor = "white"
//   }
  
// }

let studentId = document.querySelector(".studentId")
let studentName = document.querySelector(".studentName")
let age = document.querySelector(".age")
let phone = document.querySelector(".phone")
let email = document.querySelector(".email")

// // ngăn cho form không bị reset khi submit
// let create = (event) => {
//   event.preventDefault();
//   if (studentId.length == 6 && studentName.value != "" && age.value >= 18 && phone.value != "" && email.value > 8){
//     alert("Khoi tao thanh cong")
//   }else{
//     alert("Dieu kien ko phu hop")
//   }
//   event.target.reset();
// }
// Khi nhập ít hơn 6 ký tự, sẽ xuất hiện dòng chữ màu đỏ ở dưới báo lỗi, tương tự như các ô input khác
let p1 = document.querySelector(".p1")
let p2 = document.querySelector(".p2")
let p3 = document.querySelector(".p3")
let p4 = document.querySelector(".p4")
let p5 = document.querySelector(".p5")

let errId = document.querySelector(".errId")
let errId2 = document.querySelector(".errId2")
let errId3 = document.querySelector(".errId3")
let errId4 = document.querySelector(".errId4")
let errId5 = document.querySelector(".errId5")

let check1 = () => {
  console.log("AAA")
  if (studentId.value.length <= 6){
    errId.textContent = "Student id phải lớn hơn 6 ký tự"
    errId.style.color = "red"
  }else {
    errId.textContent = ""
  }
}

let check2 = () => {
  console.log("AAA")
  if (studentName.value == ""){
    errId2.textContent = "Student name ko dc bo trong"
    errId2.style.color = "red"
  }else {
    errId2.textContent = ""
  }
}

let check3 = () => {
  console.log("AAA")
  if (age.value < 18){
    errId3.textContent = "Age phai lon hon 18"
    errId3.style.color = "red"
  }else {
    errId3.textContent = ""
  }
}

let check4 = () => {
  console.log("AAA")
  if (phone.value == ""){
    errId4.textContent = "Phone ko dc bo trong"
    errId4.style.color = "red"
  }else {
    errId4.textContent = ""
  }
}

let check5 = () => {
  console.log("AAA")
  if (email.value.length <= 8){
    errId5.textContent = "Email phải lớn hơn 8 ký tự"
    errId5.style.color = "red"
  }else {
    errId5.textContent = ""
  }
}
