// 1. Lưu thông tin học viên trong bảng với tên mảng là students
let students = [
  {
    id: 1, // mỗi học sinh sẽ có 1 identification riêng
    name: "rikkei",
    email: "rikkei@gmail.com",
    phone: "0823868888",
    address: "Ha Noi",
    gender: "nam",
  },
  {
    id: 2,
    name: "academy",
    email: "academy@gmail.com",
    phone: "0828638888",
    address: "HCM",
    gender: "nu",
  },
  {
    id: 3,
    name: "bacademy",
    email: "academy@gmail.com",
    phone: "0828638888",
    address: "HCM",
    gender: "nu",
  },
];

// Hiển thị students vào table bằng vòng lặp for và htmlFor
let table = document.querySelector(".table");
console.log("aaa", table);

function displayData() {
  let html = "";
  for (let i = 0; i < students.length; i++) {
    html += `
    <tr>
      <td>${students[i].id}</td>
      <td>${students[i].name}</td>
      <td>${students[i].email}</td>
      <td>${students[i].phone}</td>
      <td>${students[i].address}</td>
      <td>${students[i].gender}</td>
      <td>
      <button onclick="edit(${i})">edit</button>
      <button onclick="deleteStudent(${i})">delete</button>
      </td>
    </tr>
    
  `;
    table.innerHTML = html;
  }
}

displayData();

// 2. Form thông tin sinh viên
// Khi nhập hết thông tin trong form -> Lưu lại, thì thông tin học sinh đấy sẽ được hiển thị dưới table
let nameHtml = document.getElementById("name");
let emailHtml = document.getElementById("email");
let phoneHtml = document.getElementById("phone");
let addressHtml = document.getElementById("address");

// radio
let radios = document.getElementsByName("gender");
let valueGender = "nam";

function change() {
  for (let radio of radios) {
    // console.log(radio);
    // console.log(radio.checked);
    // tick vào name thì gán value cho biến valueGender
    if (radio.checked) {
      valueGender = radio.value;
      break;
    }
  }
}


function save(event) {
  // ngăn form reset sau khi bấm lưu lại để lưu thông tin input vào form
  // thiếu id và thiếu trường gender (hiện tại đang bị undefined)
  // fake random Id
  //Math.random() -> giá trị sẽ từ 0 -> 1
  event.preventDefault();
  let objStudent = {
    id: Math.floor(Math.random() * 1000),
    name: nameHtml.value,
    email: emailHtml.value,
    phone: phoneHtml.value,
    address: addressHtml.value,
    gender: valueGender,
  };
  students.push(objStudent);
  // hiển thị lại danh sách học sinh
  // reset form lại rỗng
  event.target.reset();
  displayData();
}

// 3. Delete student
function deleteStudent(index) {
  students.splice(1, index);
  displayData();
}

// 5. Sắp xếp thông tin học viên theo tên
function sortData(){
//   cho những số, chữ tăng dần
  // sort cho object 
  // products.sort((product1, product2) => product1.price - product2.price); -> chỉ so sánh được khi giá là số
  // còn nếu sort theo chữ phải dùng localeCompare
  // khi bấm lại 1 lần nữa sẽ xuất hiện như ban đầu
  if (students[0].id != 1){
    students.sort((student1, student2) => student1.id - student2.id)
  }else{
    students.sort((student1, student2) => student1.name.localeCompare(student2.name))
  }
  
  displayData()
  console.log("students", students)
}

