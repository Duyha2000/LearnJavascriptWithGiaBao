// https://docs.google.com/document/d/10On30jLkAkkGo7l9ao_VKqSXSf9x4xxy/edit

// Bài tập 1:
let obj = {
  name: "Bao",
  age: 17,
  address: "Cau Giay",
  phoneNum: "0123456789",
};

// console.log(obj.age)
// console.log(obj.phoneNum)

// Bài tập 2:
let student = {
  id: 1,
  name: "Dang Gia Bao",
  gender: "nam",
  age: 17,
  mark: 8.5,
};

let newStudent = {
  id: 2,
  name: "Dang Khai Minh",
  gender: "nam",
  age: 21,
  mark: 8,
};

let students = [];
students.push(student);
students.push(newStudent);

// bài tập 3: In ra toàn bộ thông tin học sinh có điểm cao hơn
// array students đang có 2 thằng học sinh: newStudent, student
// So sánh điểm 2 thằng này:

// Điểm của thằng học sinh đầu: students[0].mark
// Điểm của thằng học sinh thứ 2: students[1].mark
if (students[0].mark > students[1].mark) {
  console.log(students[0]);
} else {
  console.log(students[1]);
}

// Bài tập 4:

// BƯớc 1 : khởi tạo newStudent2
// Bước 2: thêm vào mảng
// Bướ c3: tính điểm trung bình 3 học sinh ( avg = student[0].mark + ...)
// Bước 4: Dùng if else để in ra đáp án
let newStudent2 = {
  id: 3,
  name: "Dang Khai Minh",
  gender: "nam",
  age: 21,
  mark: 7,
};
students.push(newStudent2);
console.log(students);

let total = 0;
let avg = 0;
// for (let i=0; i<students.length; i++){
//   total += students[i].mark
// }
for (let i of students) {
  total += i.mark;
}
avg = total / 3;
if (avg > 7.5) {
  console.log("Kha");
} else if (avg <= 7.5 && avg >= 5) {
  console.log("Trung binh");
} else {
  console.log("Yeu");
}

// https://docs.google.com/document/d/1M8nLfgdVrIuMyKx4t0Uzxb2dredy3pdy/edit

// Bài tập 5:

// a. Thêm 1 đối tượng với các thuộc tính:
// let newProduct ={} -> Đẩy vào mảng products bằng push
let products = [
  // element: thành tố
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];
let newProduct = {
  id: 4,
  name: "Cheese",
  count: 100,
};
products.push(newProduct);
console.log(products);

// b. Xóa đối tượng có id là 2

// Splice và findIndex
// Tìm xem id = 2 trong mảng nằm ở index nào
// splice (index, deleteCount) -> Xóa index và 1 phần tử
// const indexDelete = products.findIndex((ele) => ele.id === 2);
// console.log(indexDelete);
// products.splice(indexDelete, 1);
// console.log(products);

// c. Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0
let indexFind = products.findIndex((ele) => ele.id === 3);
products[indexFind].count = 0;
console.log(products);

// d. Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không? Nếu Có in toàn bộ thông tin, nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”
// findIndex -> trà về vị trí nếu tìm được phẩn tử đấy (nếu không tìm thấy trả về -1)

// find -> trả về 1 object nếu phần tử được tìm thấy (không có ra undefined)
// let key = "Butter"
// let find = products.findIndex((ele) => ele.name === key)
// console.log(find);
// if (find == -1){
//   console.log("Không có dữ liệu bạn tìm kiếm")
// }else{
//   console.log(products[find])
// }

// Bài tập 6:
// while, switch - case
// Có 1 mảng dữ liệu: todoList = [ ]
// let object = {
//   id: 1,
//   name: "HTML",
//   isComplete: false,
// };
// let arr = [
//   {
//     id: 1,
//     name: "HTML",
//     isComplete: false,
//   },
//   {
//     id: 2,
//     name: "CSS",
//     isComplete: false,
//   },
//   {
//     id: 3,
//     name: "JavaScript",
//     isComplete: false,
//   },
//   {
//     id: 4,
//     name: "npm",
//     isComplete: false,
//   },
//   {
//     id: 5,
//     name: "Git",
//     isComplete: false,
//   },
// ];

// let check = true;
// while (check == true) {
//   let input = "C";
//   switch (input) {
//     case "C":
//       let newSubject = {
//         id: 6,
//         name: "Python",
//         isComplete: false,
//       };
//       arr.push(newSubject);
//       console.log(arr);
//       break;

//     case "R":
//       for (let subject of arr) {
//         console.log(subject);
//       }
//       break;

//     case "U":
//       let place = 3;
//       let find = arr.findIndex((ele) => ele.id === place);
//       arr[place].name = "C++";
//       arr[place].isComplete = true;
//       console.log(arr);
//       break;

//     case "D":
//       let objDelete = 4;
//       arr.splice(objDelete, 1);
//       console.log(arr);
//       break;

//     case "E":
//       check = false;
//       console.log("Cảm ơn bạn đã đến với Rikkei Academy");
//       break;
//   }
// }

// Bài tập 6:
let stores = [
  { id: 19292, name: "Milk", count: 100 },
  { id: 229191, name: "Yakult", count: 100 },
  { id: 30202, name: "Butter", count: 100 },
];
let carts = [
  { id: 30202, name: "Butter", count: 1 },
];

let check = true
while (check == true){
  let input = "C"
  switch (input){
    case "C":
      let findProduct = stores.findIndex((ele) => ele.name === "Butter")
      let findProductCart = carts.findIndex((ele) => ele.name === "Butter")
      // Vấn đề: nếu Butter đã có trong mảng carts rồi thì ta tăng count lên 1. còn nếu chưa có thì khởi tạo 1 object mới với count = 1
      if (findProduct != -1 && findProductCart == -1){
        
        carts.push(
          {
            id: stores[findProduct].id,
            name: "Butter",
            count : 1,
          }
        )
        stores[findProduct].count -= 1
      }else if (findProductCart != -1){
        carts[findProductCart].count += 1
      }
      
      break
      
    case "R":
      for (let product of stores){
        console.log(product)
      }
      for (let product of carts){
        console.log(product)
      }
      break
      
    case "U":
      let findPrd = stores.findIndex((ele) => ele.name === "Butter")
      let findPrdCart = carts.findIndex((ele) => ele.name === "Butter")
      let updateAmount = 5
      carts[findPrdCart].count += updateAmount
      stores[findPrd].count -= updateAmount
      break
      
    case "D":
      let findDeleteCart = carts.findIndex((ele) => ele.name === "Butter")
      let findStores = stores.findIndex((ele) => ele.name === "Butter")
      carts.splice(findDeleteCart, 1)
      stores[findStores].count = 100
      break
      
    case "E":
      check = false
      console.log("Cảm ơn bạn đã đến với Rikkei Stores")
      break
  }
}
