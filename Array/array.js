// Khái niệm: 1 biến nhớ, chứa được nhiều nội dung
// Cú pháp khai báo mảng:
// Cách 1: khai báo trực tiếp (ưu tiên dùng cách này):
let arr = [2, 4, 7, 5];
// Cách 2: dùng từ khóa new để khởi tạo 1 đối tượng Array (ít dụng):
let arr2 = new Array(1, 2, 3, 4, 5);
// Java, C++: array phải cùng kiểu dữ liệu:

// Chỉ số của mảng: bắt đầu từ 0, phần tử cuối cùng chỉ số là n -1
let first = arr[0];
let lengthArr = arr.length;
// console.log(lengthArr) // 7
// Chiều dài mảng: length
let last = arr[lengthArr - 1];
// console.log(last)
// Các phương thức làm việc với mảng:
// Duyệt các phần tử trong mảng:
// cách 1: dùng vòng lặp for
// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i])
// }

//  vòng lặp for - in: lấy ra các chỉ số trong mảng
// for(let i in arr){
//   // console.log(i)  các chỉ số trong mảng
//   console.log(arr[i])
// }

// vòng lặp for of:
// k ứng với các phần tử trong mảng:
for (let k of arr) {
  console.log(k);
}

// Thêm phần tử trong mảng: push: thêm vào cuối mảng
// Thêm số 6 vào mảng arr
arr.push(6);
console.log(arr);
// let arr = [2, 4, 7, 5, 6]
// Thêm số 3 vào chỉ số thứ 2 (splice): thêm vào vị trí chỉ định
// arr.splice(2, 0, 3)
// alert(arr)
// Splice: vừa có thể xóa, vừa có thể thêm phần tử mới
// start: number (chỉ số bắt đầu)
// deleteCount: số phần tử muốn xóa
// các phần tử muốn thêm vào
// xóa phần tử số 5: bằng splice
// arr.splice(3, 1)
// alert(arr)
// chỉnh sửa số 4 thành số 7 trong mảng: bằng splice
// arr.splice(1, 1, 7)
// alert(arr)
// arr[1] = 7
// alert(arr)

// Tìm kiếm phần tử trong mảng: find, findIndex, includes

// Ví dụ: tìm kiếm số 5 trong mảng ở vị trí nào:
// findIndex: trả về vị trí phần tử đầu tiên thỏa mãn, nếu không có trả về -1
let indexNumber = arr.findIndex((ele) => ele === 5);
let indexNumber2 = arr.findIndex((ele) => ele === 9);
// alert(indexNumber2)
let juices = ["Apple", "Banana", "Orange"];
// Tìm kiếm phần tử Banana trong mảng này ở vị trí nào
let indexBanana = juices.findIndex((ele) => ele === "Banana");
// alert(indexBanana)

// Find: trả về phần tử đầu tiên thỏa mãn, nếu không có trả undefined
let juice = juices.find((ele) => ele === "Hehe");

alert(juice);
// includes: trả về true nếu có phần tử trong mảng, false nếu không
const arr3 = [3, 1, 2, 0, 4];
// const check = arr3.includes(5)
// alert(check);

let input = "ap";

// Hiển thị ra được sản phẩm Apple do người dùng tìm kiếm khi họ nhập Ap -> kết hợp vòng lặp for
for (let juice of juices) {
  if (juice.toLowerCase().includes(input.toLowerCase())) {
    console.log(juice);
  }
}

// Sắp xếp mảng: sort
alert(arr3.sort());
// Đảo ngược mảng: reverse
alert(arr3.reverse());
