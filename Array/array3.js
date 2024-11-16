// Bài 1: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau.

// let arr2 = [1,-22,-22,-21,-15,3,-2,-9,-8,-7];
// for (let i=0; i<10; i++){
//   let input = parseInt(prompt("Nhap 1 so: "))
//   arr.push(input)
// }
// alert(arr)

// 1. Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
// for - of
// let arr2 = []
// for (let num of arr){
//   if (num >= 10){
//     arr2.push(num)
//     // alert(num)  hiển thị ra 4 lần thông báo
//   }
// }
// alert(arr2)

// 2. phần tử có giá trị lớn nhất và lớn thứ 2 trong mảng:
// sắp xếp mảng tăng dần:
// arr2.sort( (a,b) => a-b);
// [1,3,5,7,9] -> Chỉ số: 4 -> 5 - 1
//. 0 1 2 3 4
// let arr2Length = arr2.length
// let firstNum = arr2[arr2Length-1]
// let secondNum = 0
// alert(firstNum) // max
// for (let i=arr2Length-1; i>=0; i--){
//   if (arr2[i] < firstNum){
//     secondNum = arr2[i]
//     break
//   }
// }
// alert(secondNum)
// [1,2,3,7,8,9,15,21,22,22] -> Phần tử lớn thứ 2 là 21:

// 3. vị trí của phần tử lớn nhất trong mảng:

// 3.1 Copy sang mảng arr2 và sắp xếp mảng tăng dần, phần tử lớn nhất là phần tử cuối cùng trong mảng -> lưu nó vào 1 biến
// let arr2 = [1, 22, 22, 21, 15, 3, 2, 9, 8, 7];
// arr2 sau khi sort  [1,3,2,...,21,22]
// let arr = [...arr2]
// arr.sort((a,b) => a-b)
// let max = arr[arr.length-1]
// let indexMax = arr2.findIndex(ele => ele == max)

// for (for - in):
// let max = arr2[0]
// let maxIndex = 0// tạo biến
// for (let num in arr2){
//   if (arr2[num] > max){
//     max = arr2[num]
//     maxIndex = num
//   }
// }
// alert(max)
// alert(maxIndex)

// 4. giá trị trung bình của các phần tử trong mảng.
// total = 0
// average = 0
// arrLength = arr2.length
// for (let num of arr2){
//   total += num
//   average = total / arrLength
// }
// alert(total)
// alert(average)

/* Bài 2: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. 
    1. Nhập phần tử số nguyên và tìm xem số đó có nằm trong mảng số nguyên không? Nếu có thuộc mảng số nguyên thì in ra vị trí của phần tử đó, nếu không in ra -1.
    -> Không sử dụng các hàm có sẵn trong javascript như indexOf hay findIndex (linear search).
    */
// let arr = [1, 22, 22, 21, 15, 3, 2, 9, 8, 7];
// let index = -1
// let input = parseInt(prompt("Nhap 1 so: "))
// for (let num = 0 ; num < arr.length; num++){
//   if (arr[num] == input){
//     index = num
//   }
// }
// alert(index)
// 2. Yêu cầu người dùng nhập một giá trị cần tìm. Sau đó, tìm và in ra số lần mà giá trị đó xuất hiện trong mảng.
// Input: arr = 3 4 5 3 -> X = 3
// Output: 2
// let arr = [1, 22, 22, 21, 15, 3, 2, 9, 8, 7];
// let count = 0
// let input = parseInt(prompt("Nhap 1 so: "))
// for (let i = 0; i < arr.length; i++) {
//   if (input == arr[i]) {
//     count += 1
//   }
// }
// alert(count)
// Bài 3: Cho mảng số nguyên nums và một số nguyên tự nhập vào là target. Hãy tìm hai phần tử mà tổng của chúng chính bằng target, trả về kết quả là 2 số của chúng trong mảng nums.
//nums = [2,7,11,15]
// input = 13 -> [0,2]
// 2 vòng for để lấy 2 số trong mảng nums
// let nums = [2, 3, 4, 7, 9, 5]
// let target = parseInt(prompt("Nhap 1 so: "))
// // Lấy được số thứ nhất trong mảng
// for (let i = 0; i < nums.length; i++){
//   // Lấy được số thứ hai trong mảng:
//   for (let j = i+1; j < nums.length; j++){
//     if (nums[i] + nums[j] == target){
//       alert(i)
//       alert(j)
//       break
//     }
//   }
// }

//Bài 4: Tạo một ứng dụng to do list:
let todoList = ["Go to school at 7am", "Read book at 12 am"];
// while, switch - case để nhập các lựa chọn (C R U D E
/*
    Tạo một ứng dụng to do list:
    let todoList= [“Go to school at 7am”, “Read book at 12 am”] 
    
    Cho người dùng nhập vào 5 chữ cái C/R/U/D/E

    C – Cho người dùng nhập vào nội dung công việc mới, thêm công việc mới vào cuối mảng. Sau đó in ra toàn bộ các phần tử trong todoList

    R – In ra toàn bộ các phần tử trong todoList

    U – Hỏi người dùng vị trị của công việc muốn cập nhật. Sau đó cho người dùng nhập nội dung muốn update. Tiến hành update và in ra toàn bộ các phần tử trong todoList

    D – Hỏi người dùng vị trị của công việc muốn xóa. Tiến hành xóa và in ra toàn bộ các phần tử trong todoList

    E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình tạo ứng dụng todoList
    */
// let check = true
// while (check){
//   let input = prompt("Nhap chuc nang: (C, R, U, D, E)")
//   switch (input){
//     case "C":
//       let newTodo = prompt("Nhap cong viec moi: ")
//       todoList.push(newTodo)
//       alert(todoList)
//       break
//     case "R":
//       let todoList2 = []
//       for (let chore of todoList){
//         todoList2.push(chore)
//       }
//       alert(todoList2)
//       break
//     case "U":
//       let position = parseInt(prompt("Nhap vi tri muon cap nhat: "))
//       let updateTodo = prompt("Nhap cong viec moi: ")
//       todo[position] = updateTodo
//       alert(todoList)
//       break
//     case "D":
//       let position2 = parseInt(prompt("Nhap vi tri muon xoa: "))
//       // tìm được vị trí = findIndex
//       // splice để xóa
//       let find = todoList.findIndex(ele => ele == position2)
//       // start: là index muốn chèn hoặc xóa phần tử , deleteCount là số lượng phần tử muốn xóa, ... -> những phần tử muốn thêm
//       todoList.splice(find, 1)
//       alert(todoList)
//       break
//     case "E":
//       check = false
//       break
//   }
// }

/*
    Bài 5: Cho 2 mảng
    let store =[“Laptop” ,”Keyboard”, “ Mouse”, “PC”]
    let cart = [
      ["Laptop", 0],
      ["Keyboard", 0],
      ["Mouse", 0],
      ["PC", 0],
    ];

    Tạo một ứng dụng mua hàng trong store.

    Cho người dùng nhập vào 5 chữ cái C/R/U/D/E

    C – Cho người dùng nhập vào đồ dùng muốn mua, thêm đồ dùng vào mảng cart (nếu có cộng thêm 1). Sau đó in ra toàn bộ các phần tử trong cart

    R – In ra toàn bộ các phần tử trong cart

    U – Hỏi người dùng có muốn update số lượng có trong cart. Sau đó cho người dùng nhập số lượng muốn update. Tiến hành update và in ra toàn bộ các phần tử trong cart

    D – Hỏi người dùng đồ dùng muốn xóa khỏi cart. Tiến hành xóa và in ra toàn bộ các phần tử trong cart

    E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình ứng dụng giỏ hàng
    */
let store = ["Laptop", "Keyboard", "Mouse", "PC"];
let cart = [
  ["Laptop", 0], // [0]
  ["Keyboard", 0], // [1]
  ["Mouse", 0], // [2]
  ["PC", 0], // [3]
];

let check = true;
while (check) {
  let input = prompt("Nhap chuc nang: (C, R, U, D, E)");
  switch (input) {
    case "C":
      let buyable = prompt("Nhap do dung muon mua: ");
      switch (buyable) {
        case "Laptop":
          cart[0][1] = cart[0][1] + 1;
          break;
        case "Keyboard":
          cart[1][1] = cart[1][1] + 1;
          break;
        case "Mouse":
          cart[2][1] = cart[2][1] + 1;
          break;
        case "PC":
          cart[3][1] = cart[3][1] + 1;
          break;
      }
      alert(cart);
      break;
    case "R":
      let arrStuff = [];
      for (let stuff of cart) {
        arrStuff.push(stuff);
      }
      alert(arrStuff);
      break;

    case "U":
      let position = parseInt(prompt("Nhap vi tri muon cap nhat: "));
      let newAmount = parseInt(prompt("Nhap so luong muon cap nhat: "));
      cart[position][1] = newAmount;
      alert(cart);
      break;

    case "D":
      let position2 = parseInt(prompt("Nhap vi tri muon xoa: "));
      let find = cart.findIndex((ele) => ele == position2);
      cart.splice(find, 1);
      alert(cart);
      break;

    case "E":
      check = false;
      break;

    default:
      alert("Nhập sai, mời bạn lựa chọn lại!!");
      break;
  }
}
