// Bài 1: Number.isInteger(ele)
// alert(Number.isInteger(6.5))
// In ra quá nhiều alert: cách khắc phục, sử dụng 1 biến check (boolean)
// let check = false
// for (num of arr){
//   if (Number.isInteger(num)){
//     check = true
//   }
// }

// if(check == false) alert("Ko co so nguyen trong mang!!!")
// else alert("Mảng này có số nguyên!!!")

// Bài 2:
// let input = parseInt(prompt("Nhap so:")) // 3
// let find = arr.findIndex(ele => ele == input) // Vị trí: 1
// // In ra vị trí của phần tử trong mảng:
// if (find === -1 ){
//   alert("Ko co phan tu tren")
// }else{
//   alert(find)
// }

// Bài 3: Đếm số lần xuất hiện phần tử trong mảng
// let arr = [2,2, 3, 2, 4, 4]
// let input = parseInt(prompt("Nhap so trong mang:"))
// let count = 0
// for (num of arr){
//   if (num == input){
//     count += 1
//   }
// }
// alert(`${input} xuat hien ${count} lan trong mang`)

// Bài 4: Viết chương trình yêu cầu nhập vào hai số nguyên dương a và b, lưu các số chia hết cho b trong khoảng từ 1 đến a hoặc các số chia chia hết cho a trong khoảng từ 1 đến b vào một mảng và in mảng đó ra màn hình console.
// let a = parseInt(prompt("Nhap a:"))
// let b = parseInt(prompt("Nhap b:"))
// let arr = []
// let arr2 = []
// for (let i=1; i<=a; i++){
//   if (i%b==0){
//     arr.push(i)
//   }
// }
// for (let j=1; j<=b; j++){
//   if (j%a==0){
//     arr2.push(j)
//   }
// }
// alert(`Cac so chia het cho ${b} trong khoang tu 1 den ${a} la: ${arr}`)
// alert(`Cac so chia het cho ${a} trong khoang tu 1 den ${b} la: ${arr2}`)

// Bài 7:
// let arr = [2, 4, 6, 7, 5, 3]
// let arr2 = []
// let input = parseInt(prompt("Nhap 1 so:"))
// let plus = 0
// for (num of arr){
//   plus += num
//   arr2.push(num)
//   if (plus == input){
//     break
//   }
// }
// alert(arr2)

// Bài 8:
// let array = [1, 3, 5, 3, 7, 1, 9, 3, 5, 1];
// let result = []; // Mảng để lưu các phần tử xuất hiện từ hai lần trở lên
// let resultUnique = [];
// // 1
// for (num of array) {
//   let count = 0;
//   // Kiểm tra xem phần tử đã có trong mảng result chưa

//   // Duyệt qua mảng lần nữa để đếm số lần xuất hiện của phần tử hiện tại
//   for (num2 of array) if (num === num2) count++;
//   if (count >= 2) result.push(num);
// }

// // Result = [1,3,5,3,1,3,5,1]

// // Kết quả mong muốn: 1,3,5
// for (num3 of result) {
//   // num3: 1 , 3 , 5 , 3 , 1 ,3 , 5 ,1
//   if (!resultUnique.includes(num3)) resultUnique.push(num3);
//   // resultUnique:  1, 3 , 5
// }

// // In ra các phần tử xuất hiện từ hai lần trở lên
// if (resultUnique.length > 0) alert(resultUnique);
// else alert("Không có phần tử nào xuất hiện từ hai lần trở lên.");
