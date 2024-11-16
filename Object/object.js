// // Object: S + V + O
// // Ví dụ: 1 vật thể là máy tính
// // Loại: laptop
// // Hãng:Asus
// // hệ điều hành: win10
// // card đồ họa: NVIDIA

// // Key - value

// // Object litarals:
// let obj = {
//   name: "",
//   age: 0,
// };

// // Khởi tạo đối tượng bằng: từ khóa new:
// class Student {
//   constructor(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//   }
// }
// // OOP: class, object, attribute, prop
// let student = new Student("Bao", 17, true);
// let student2 = new Student("Hung", 17, true);

// console.log(student2);

// // Truy xuất giá trị value trong object
// // Cách 1:
// // console.log(computer.type) // key giống nhau thì khi lấy giá trị sẽ ra giá trị cuối cùng của key

// // // Cách 2: ["key"]: ít dùng
// // console.log(computer["system"])

// // Ví dụ: Kết hợp với mảng: tạo 1 danh sách thông tin sinh viên gồm có tên, tuổi, giới tính (true hoặc false)
// // (mỗi sinh viên ở đây là 1 object)
// // let students = [
// //   {
// //     name: "Bao",
// //     age: 17,
// //     gender: true,
// //   },
// //   {
// //     name: "Minh",
// //     age: 21,
// //     gender: true,
// //   },
// // ];
// // In ra tên Minh:
// // console.log(students[1].name);

// // Destructuring object
// const user = {
//   id: 1,
//   address: "Cầu giấy",
//   city: "HN",
// };

// // let id = user.id
// // let address = user.address
// // let city = user.city
// // console.log(id,address,city)

// let { id, address, city } = user;
// console.log(id);
// console.log(address);
// console.log(city);

// // Computer là tên của object
// let computer = {
//   type: "PC",
//   brand: "Asus",
//   system: "win10",
//   card: "NVIDIA",
//   operating_system: "win10",
// };
// // Dùng Destructuring object để in ra các thông tin của computer
// // let {type,brand,system,card,operating_system} = computer
// // console.log(type)
// // Chỉ lấy ra brand
// let { brand } = computer;
// console.log(brand);

// // Truy cập 1 key không có trong object
// let student3 = {
//   name: "Bao",
//   age: 17,
//   gender: true,
//   phoneNumber: {
//     phoneNumber1: "010101010",
//     phoneNumber2: "0101010102",
//   },
// };
// console.log(student3.phoneNumber.phoneNumber4);

// // Các kiểu dữ liệu trong JS
// // Kiểu dữ liệu nguyên thủy: String, boolean, Number, null, undefined
// // Kiểu dữ liệu object (tham chiếu): object,array, function
// let library = [
//   {
//     name: "ee",
//     author: "rr",
//     date: 0,
//   },
//   {
//     name: "qq",
//     author: "ww",
//     date: 1,
//   },
// ];
// console.log(typeof student3);
// console.log(typeof library);

// // Bộ nhớ RAM: bộ nhớ truy cập tạm thời
// // int, char, double
// // [- - - - -] - - - - - - - - - - - - -
// // - - - - - - - - - - - - - - - - - - -
// // - - - - - - - - - - - - - - - - - - -
// // - - - - - - - - - - - - - - - - - - -
// // - - - - - - - - - - - - - - - - - - -
// // - - - - - - - - - - - - - - - - - - -
// // - - - - - - - - - - - - - [- - - - -]

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3, 4, 5];
// console.log(arr === arr2);
// // Bao, Hung, Quoc Huy : lớp 12A
// // Bao Hung Quoc Huy: lớp 12B

// // Dùng vòng lặp để in ra các value trong object
// for (let i = 0; i < library.length; i++) {
//   let { name, author, date } = library[i];
//   console.log(name);
//   console.log(author);
//   console.log(date);
// }

// // Dùng vòng lặp for - in:  để in ra các key trong object
// for (let key in student3) {
//   console.log(key);
//   console.log(student3.key);
// }

// // Dùng vòng lặp for - in:  để in ra các key trong object
// for (let key in student3) {
//   console.log(key);
//   console.log(student3.key);
// }

// // Cập nhật và xóa giá trị của object:
// //  name: "ee" đổi thành abc
// library[0].name = "abc";
// console.log(library);
// // xóa đi key date và value của object: dùng delete delete
// delete library[0].date;
// // Xóa đi author của cuốn sách thứ 2:
// delete library[1].author;
// console.log(library);

// /*
// Bài tập 1: 
// Viết chương trình khai báo đối tượng information có các thuộc tính id, name, phone, address. 
// Yêu cầu người dùng nhập vào thông tin cá nhân, lưu thông tin nhận được vào đối tượng và in ra màn hình.

// Bài tập 2: 

//   Tiến hành xóa thuộc tính address và thêm thuộc tính email cho đối tượng và in đối tượng ra màn hình.
// */
// let information = {
//   id: 1,
//   name: "Gia bảo",
//   phone: "0123818181",
//   address: "Cau Giay",
// };

// for (let key in information) {
//   console.log(key);
//   console.log(information[key]); // lấy ra thông tin value
// }
// delete information.address;

// // thêm trường bằng cách gán giá trị cho key chưa có
// information.email = "giabaohatage@gmail.com";
// console.log(information);

// /*
// Bài tập 3: Viết chương trình yêu cầu người dùng fake 4 sinh viên và
// thông tin của mỗi sinh viên. 
// Đối tượng sinh viên chỉ có 2 thuộc tính id và name. 
// Tất cả sinh viên sẽ được lưu vào một mảng, in mảng các sinh viên ra màn hình.
// */
// let students2 = [
//   {
//     id: 1,
//     name: "Bao",
//   },
//   {
//     id: 2,
//     name: "Minh",
//   },
//   {
//     id: 3,
//     name: "Hung",
//   },
//   {
//     id: 4,
//     name: "Huy",
//   },
// ];

// for (let student of students2) {
//   console.log(student);
//   for (let key in student) {
//     console.log(student[key]);
//   }
// }

// /*
// Bài tập 4: Viết chương trình khai báo mảng gồm nhiều đối tượng Book có hai thuộc tính
// author và name. 
// Yêu cầu người dùng nhập tên (fake tên) author từ bàn phím thông qua hàm prompt(). 
// Sau đó tiến hành tìm kiếm thông tin sách theo tác giả. 
// Nếu tìm thấy thì in ra ngoài màn hình đối tượng Book  tìm được, 
// Nếu không tìm thấy thì in ra “Không tìm thấy sách” 

// */
// let books = [
//   {
//     author: "asas",
//     name: "adad",
//   },
//   {
//     author: "qwqw",
//     name: "erer",
//   },
// ];

// let author = "qwqd";
// let check = true;
// for (let book of books) {
//   if (book.author == author) {
//     console.log(book);
//     check = true;
//     break;
//   } else {
//     check = false;
//   }
// }

// if (check == false) {
//   console.log("Không tìm thấy sách");
// }

// /*
// Bài tập 5:
// Fake mảng products gồm 3 sản phẩm (các trường id, phone và price)
// -> sau đó xếp giá tăng dần

// */
// let products = [
//   {
//     id: 1,
//     name: "iPhone",
//     price: 10000,
//   },
//   {
//     id: 2,
//     name: "laptop",
//     price: 30000,
//   },
//   {
//     id: 3,
//     name: "iPad",
//     price: 20000,
//   },
// ];

// // sort array: công thức để xếp giá tăng dần:

// products.sort((product1, product2) => product1.price - product2.price);

// console.log(products);

/*
Bài tập 6 :
Tạo một mảng users là một mảng trống. 
Lấy thông tin từ người dùng để tạo đối tượng user gồm các thông tin sau: id, user_name, email, password
Tiến hành validate (kiểm tra tính hợp lệ của) dữ liệu
Tên, email và mật khẩu không được để trống
Tên không được ngắn hơn 3 ký tự
Email không bỏ trống (@gmail)
Mật khẩu tối thiểu 8 ký tự
Nếu các dữ liệu nhập vào không thỏa mãn thì yêu cầu người dùng nhập lại dữ liệu
Nếu các dữ liệu nhập vào thỏa mãn điều kiện thì thêm đối tượng vào trong mảng

*/
let users = [
  {
    id: 1,
    username: "bao",
    email: "giabao@gmail.com",
    password: 123
  },
  {
    id: 2,
    username: "minh",
    email: "khaiminh@gmail.com",
    password: 234
  },
  {
    id: 3,
    username: "huy",
    email: "quanghuy@gmail.com",
    password: 345
  }
]

let username = "eeex"
let email = "eee@gmail.com"
let password = "412345678"



if (username.length > 3 && email != "" && password.length >= 8){
  // Khởi tạo user mới sau khi validate thành công
  const newUser = {
    id: 4, 
    username: username,
    email: email,
    password: password
  }
  // Thêm user mới này vào mảng
   users.push(newUser)
}
for(let key in users){
  console.log(users[key])
}