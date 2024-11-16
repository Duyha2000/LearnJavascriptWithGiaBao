// Bài tập 1: Viết chương trình khai báo mảng gồm nhiều chuỗi bất kỳ, yêu cầu người dùng nhập vào 1 chuỗi bất kỳ.
// Xây dựng hàm có 2 tham số là 1 mảng và 1 chuỗi, kết quả trả về là tất cả các phần tử trong mảng có chứa chuỗi vừa nhập. In kết quả trả về ra màn hình.

// arr = ["Xin", "chao", "cac", "ban", "xin"]
// Input: xin
// Output: hiển thị ra tất cả chữ xin

// B1: Nhập 1 chuỗi, khai báo 1 array (gồm nhiều chuỗi bất kỳ)

// B2: Viết hàm để tìm kiếm

// B3: Gọi hàm

// let arr = ["Xin", "chao", "cac", "ban", "xin"];
// let input = "chao";

// function find(arr, input) {
//   let arrFind = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == input) {
//       arrFind.push(arr[i]);
//     }
//   }

//   return arrFind;
// }

// console.log(find(arr, input));

// Bài tập 2:  Viết chương trình khai báo 3 số ngẫu nhiên,
// xây dựng hàm kiểm tra chẵn lẻ và gọi hàm với mỗi số đã khai báo,
// in kết quả ra màn hình console.

// B1: khai báo 3 số ngẫu nhiên
// Bước 2: viết hàm chẵn lẻ (boolean: đúng hoặc sai)
// Bước 3: gọi hàm

let a = 3;
let b = 5;
let c = 4;

function oddEven(x) {
  if (x % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

if (oddEven(a)) {
  console.log("a là số chẵn");
} else {
  console.log("a là số lẻ");
}

if (oddEven(b)) {
  console.log("b là số chẵn");
} else {
  console.log("b là số lẻ");
}

if (oddEven(c)) {
  console.log("c là số chẵn");
} else {
  console.log("c là số lẻ");
}

/*
Bài tập 3: Viết chương trình khai báo mảng gồm các thành phần ngẫu nhiên,
xây dựng hàm nhận có tham số là 1 mảng và kết quả trả về là phần tử có độ dài lớn nhất
trong mảng đó. Gọi hàm với mảng đã khai báo và in kết quả ra màn hình.
*/
// Bước 1: khai báo 1 mảng ngẫu nhiên
// Input: let arr = ["Xin", "chao", "cac", "ban", "xin"];
// Output: chào

// let arr = ["Xin", "chao", "cac", "ban", "xin"];

// function find(arr) {
//   let result = " ";
//   let max = arr[0].length; // 3
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i].length )
//     // 3 4 3 3 3
//     // Cho max là phần tử đầu tiên -> so sánh các phần tử đằng sau
//     // Nếu phần tử nào có chiều dài lớn hơn thì nó là max
//     if (arr[i].length > max) {
//       max = arr[i].length;
//     }
//   }
//   console.log(max + " max"); // 4
//   // Xử lý logic code để ra chữ chào?
//   for (let i of arr) {
//     if (i.length == 4) {
//       result = i;
//     }
//   }
//   return result;
// }

// console.log(find(arr)); // chao

/*
Bài tập 4: Viết chương trình khai báo chuỗi bất kỳ, xây dựng hàm có tham số
là 1 chuỗi và kết quả trả về là chuỗi được truyền vào nhưng viết hoa tất cả
các chữ cái đầu. Gọi hàm với chuỗi đã được khai báo và in kết quả ra màn hình.
*/

// Input: xin chao tat ca cac ban
// Output: Xin Chao Tat Ca Cac Ban

// Bước 1: Nhập 1 chuỗi input -> dùng split để biến chuỗi vừa nhập vào mảng

// [xin, chao, tat, ca, cac, ban]
// Dùng vòng lặp for để lấy từng phần tử, rồi dùng toUpper để viết hoa lên

let str = "xin chao tat ca cac ban";

const fruits = "Banana";
const citrus = fruits.slice(1); // dùng slice để cắt chuỗi
console.log(citrus);

function upperCase(str) {
  let array = str.split(" ");
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let ele = array[i][0].toUpperCase() + array[i].slice(1); // in , hao, at, a ,ac, an
    // slice: lấy phần còn lại của chuỗi

    result.push(ele); //
  }
  return result; // X,C,T,C,C,B
}

console.log("Kết quả" + upperCase(str));

// Bài tập 5: Viết chương trình khai báo mảng số nguyên, yêu cầu người dùng nhập
// vào 1 số nguyên bất kỳ. Xây dựng hàm có 2 tham số là 1 mảng và 1 số,
// kết quả trả về là một cặp số trong mảng đã khai báo sao cho tổng của cặp số
// tìm được bằng với số đã nhập vào.

// Bước 1: Khởi tạo 1 mảng, 1 số input
// Bước 2: viết function(arr, number) (vòng 2 for)
// Bước 3: kiểm tra xem số number bằng tổng 2 số nào trong mảng, trả về 2 số đấy

// Input: arr [ 2,3,7,9] và number 5
// Output: 2,3

// let arr2 = [2, 3, 5, 6, 9, 7, 4];
// let number = 7;

// function sum(arr, number) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] + arr[i] == number) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// console.log("Result : " + sum(arr2, number));

/*
Bài 6: Viết chương trình khai báo mảng ngẫu nhiên, xây dựng hàm có tham số là
1 mảng với kết quả trả về là true khi mảng đó đối xứng, nếu không thì
kết quả trả về là false. Gọi hàm với mảng đã khai báo và in kết quả ra màn hình.
Mảng đối xứng nếu có dạng [1, 2, 3, 2, 1], [“z”, ”z”], [1, ”c”, “c”, 1].
*/

// let arr = ["b", "o", "b"]
// let reverseArr = []

// function reverse(arr, reverseArr){
//   for (let i=arr.length-1; i>=0; i--){
//     reverseArr.push(arr[i])
//   }
//   let str = arr.join(" ")
//   let reverseStr = reverseArr.join(" ")
//   console.log(str + " - Str")
//   console.log(reverseStr + " - reverseStr")
  
//   if (reverseStr == str){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(reverse(arr, reverseArr))

/*
Bài tập 7: Viết chương trình khai báo mảng số nguyên, xây dựng hàm
kiểm tra số nguyên tố và sử dụng hàm để in ra tất cả các số nguyên tố trong mảng
đã khai báo.

Input: arr [2,3,5,6,8,10]
output: 2,3,5
-> Function boolean (true/false):
*/

let arr = [2,3,5,6,8,10]
let number = 0

function primeCheck(number){
  
    for (let i = 2; i < number; i++){
      if (number % i == 0){
        return false
      }
    }
  return true
}

for(let i of arr){
  number = i
  if (primeCheck(number)){
    console.log(number)
  }
}