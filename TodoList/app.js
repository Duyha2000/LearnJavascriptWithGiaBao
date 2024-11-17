/*
    Xử lý form 
    1. Tạo array todo = [{id, name, status},{id, name, status} ]
    2. Lấy dữ liệu ô input nhập vào -> submit tạo ra 1 object mới (nếu không nhập gì sẽ hiển thị Tên công việc không được để trống)
    nếu thêm -> đẩy vào array todo (.push)
 */

// lấy dữ liệu trong local ra để hiển thị
let todos = JSON.parse(localStorage.getItem("todos")) || [];

console.log(todos);
// setItem khi em thêm mới 1 todo vào -> set (thêm mới)
let addTodo = document.querySelector(".add");
// sau khi submit xong sẽ lưu giá trị vào local và reset lại form
let table = document.querySelector(".table");
function displayData() {
  let html = "";
  if (todos.length > 0) {
    for (let i = 0; i < todos.length; i++) {
      html += `
    <tr>
        <td><input type="checkbox"></td>
        <td><h1>${todos[i].name}</h1></td>
        <td>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
        </td>
        <td>
            <button onclick="deleteRow(${i})">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
        </td>
    </tr>
  `;
    }
  } else {
    html = "<p>No data</p>";
  }
  // không có dữ liệu (todos.length === 0) hiển thị display data
  table.innerHTML = html;
}

function add(event) {
  event.preventDefault();
  let objTodo = {
    id: Math.round(Math.random() * 1000),
    name: addTodo.value,
    status: false,
  };
  todos.push(objTodo);
  //   set lại dữ liệu ở local ("key","value") -> string
  // mà em đang thêm 1 object -> JSON.Stringify để chuyển object thành string
  localStorage.setItem("todos", JSON.stringify(todos));
  displayData();
  event.target.reset();
}
console.log(todos);

function deleteRow(index) {
  todos.splice(index, 1);
  displayData();
}
// display để hiển thị ra
displayData();
