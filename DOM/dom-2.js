/* 
Bài tập 1: Không viết thêm gì vào thẻ ngoại trừ nhúng javascript trong file html, viết chương trình hiển thị danh sách lên trang web như sau
 List item number 1
 List item number 2
 List item number 3
 -> B1: Trong html fake 1 thẻ ul
 -> B2: chọc vào phần tử DOM chứa thẻ ul, rồi dùng innnerHTML để thêm nội dung vào
 
 let list = document.querySelector(".list") // lấy được ul rồi
list.innerHTML = ` <li> Xin chao </li>
  <li> Xin chao </li>
  <li> Xin chao </li>`
console.log(list)

 
Bài tập 2:  Xây dựng giao diện gồm 1 nút bấm, khi bấm vào nút thì hiển thị thông báo xin chào cho người dùng.
2 cách làm: 
- addEventListener
- gắn sự kiện cho nút bấm bằng sự kiện onclick 

Bài tập 3: Xây dựng giao diện gồm 1 nút bấm và 1 dòng chữ, khi ấn vào nút thì dòng chữ sẽ thay đổi nội dung của dòng chữ trên giao diện.
Chuyển đổi giữa 2 chữ this text is optional và text after change sau mỗi lần bấm

let text = document.querySelector(".txt")

let change = () => {
  if (text.textContent == "text is optional"){
    text.textContent = "text after change"
  }else{
    text.textContent = "text is optional"
  }
}


Bài tập 4: Viết chương trình khai báo mảng names chứa họ tên của người dùng,
tiến hành in tất cả các tên trong mảng lên danh sách trên màn hình trình duyệt.
Ví dụ: khai báo mảng names = [“Nguyễn Văn A”, “Vũ Thị B”, “Nguyễn Minh C”] sẽ tạo ra
danh sách trên màn hình
Bước 1: fake 1 thẻ ul rồi chọc vào phần tử DOM của phần tử này
Bước 2: Dùng vòng lặp for-of cho mảng names, bên trong kết hợp với innerHtml
(toán tử +=) để cộng dồn các li lại
Bước 3: In ra toàn bộ thông tin ra màn hình

let names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"]
let nameList = document.querySelector(".nameList")
console.log(nameList + "aaa")
// nameList.innerHTML = `<p>xin chao</p>`
for (name of names){
  console.log(name) // ra đúng 3 tên rồi
  nameList.innerHTML += `<li>${name}</li>`
}

Bài tập 5:
table
th: table header: phần đầu của bảng
tr: table row: 1 dòng
td: table data: dữ liệu trên 1 dòng
tbody: phần thân bảng
-> 1 bảng sẽ có phần th + tbody (trên tbody sẽ có nhiều dòng)
let table = document.querySelector(".table");

let data = [
  {
    id:1,
    name: "Cell 1 Row 2",
    name2: "Cell 1 Row 2",
    name3: "Cell 1 Row 2",
  },
  {
    id:2,
    name: "Cell 2 Row 3",
    name2: "Cell 1 Row 2",
    name3: "Cell 1 Row 2",
  },
  {
    id:3,
    name: "Cell 1 Row 3",
    name2: "Cell 1 Row 2",
    name3: "Cell 1 Row 2",
  },
  
]

console.log(JSON.stringify(data, null, 2), "data before delete");


// Hiển thị dữ liệu mảng data vào table
let displayData = () => {
  // innerHTML để hiển thị các dữ liệu vào trong table
  let html = " ";  // Xóa nội dung bảng trước khi hiển thị lại
  for (let i=0; i<data.length; i++){
    html += `
      <tr>
        <td>${data[i].name}</td>
        <td>${data[i].name2}</td>
        <td>${data[i].name3}</td>
        <td><button onclick="updateRow(${i})">Update</button></td>
        <td><button onclick="deleteRow(${i})">Delete</button></td>
      </tr>
    `
  }
  table.innerHTML = html;
};

// Khi click nút update thì dòng đấy sẽ đổi giá trị thành Null - null -null

let deleteRow = (index) => {
  console.log(index + "index");
  // Xóa phần tử trong mảng data: 
  // Splice để xóa
  data.splice(index, 1)
  // Đã xóa ở mảng rồi nhưng ngoài giao diện chưa hiển thị lại
  console.log(JSON.stringify(data, null, 2), "data after delete");
  
  // Phải gọi lại displayData để hiển thị lại dữ liệu sau khi xóa
  displayData();
}


let addRow = () => {
  table.innerHTML += `
    <tr>
      <td>Cell 1 Row 2</td>
      <td>Cell 2 Row 2</td>
      <td>Cell 3 Row 2</td>
      <td><button>Update</button></td>
      <td><button>Delete</button></td>
    </tr>
  `;
};

let updateRow = (index) => {
  data[index].name = "null"
  data[index].name2 = "null"
  data[index].name3 = "null"
  displayData();
}

displayData();


Bài tập 6:
Xây dựng chương trình Jokes Generator với giao diện như dưới đây.
Mỗi lần ấn vào nút Get Another Joke thì một câu Joke ngẫu nhiên trong mảng Jokes
sẽ được hiển thị ra màn hình trình duyệt kèm theo background của body
sẽ đổi sang 1 màu ngẫu nhiên

let jokes = [
  {
    "joke": "All vampires keep their money in a special place—the blood bank."
  },
  {
    "joke": "What do you call someone who can’t stick to a diet? A desserter."
  },
  {
    "joke": "I only seem to get sick on weekdays. I must have a weekend immune system."
  },
  {
    "joke": "You can tell it's a dogwood tree from its bark."
  },
  {
    "joke": "What do you call a sheep that knows karate? A lamb chop."
  },
  {
    "joke": "What does a dad get in their stocking if they’ve been naughty? Char-coal."
  },
  {
    "joke": "Why did the scarecrow win an award? Because he was outstanding in his field"
  },
  {
    "joke": "What do you call a cow with no legs? Ground beef."
  },
  {
    "joke": "What has ears but cannot hear? A cornfield!"
  },
  {
    "joke": "I don’t get why Marvel doesn’t use the Hulk to advertise more. He’s basically one big Banner."
  }
]

let colors = ["red", "blue", "green", "yellow"]
// Nếu để randomColor chỉ làm được 1 lần

let body = document.getElementsByTagName("body")[0];
let joke = document.querySelector(".joke")

let addJoke = () => {
  // Math.random(): trả về giá trị từ 0 đến 1
  let randomColor = colors[Math.floor(Math.random() * colors.length)]
  let randomJoke = jokes[Math.floor(Math.random() * jokes.length)].joke
  body.style.backgroundColor = randomColor
  joke.textContent = randomJoke
}



Bài tập 7: - number +

Click vào button number + sẽ tăng số đấy lên 1
Click vào button number - sẽ tăng số đấy đi 1

*/


let num = document.querySelector(".num")

// Để xử lý các bài dữ liệu không thay đổi khi click (thêm, tăng) thì phải định nghĩa 1 hàm displayData
let displayData = () => {
  num.textContent = parseInt(num.textContent)
}
//
let add = () => {
  // Trong kho chỉ có 5 sản phẩm, khi num là 5 thì không cho + được nữa
  if (num.textContent < 5){
    num.textContent++;
  }
  
  displayData();
}
let sub = () => {
  // Khi num là số 1, sẽ không bấm - được nữa
  if (num.textContent > 1){
    num.textContent--;
  }
  
  displayData();
}



