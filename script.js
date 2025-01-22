const todo_lst = [];

function render() {
  let todo_display = "";
  for (let i = 0; i < todo_lst.length; i++) {
    let todoObj = todo_lst[i];
    todo_display += `
    <div class="todo_content">
        <div>${todoObj.msg}</div> 
        <div>${todoObj.dt}</div>
        <button class="dlt_btn" onclick="todo_lst.splice(${i},1); render();">Delete</button>
      </div>
        `;
  }
  document.querySelector(".content2").innerHTML = todo_display;
}

function add() {
  const msg = document.querySelector(".ip_text").value;
  const dt = document.querySelector(".ip_date").value;
  todo_lst.push({ msg, dt });
  document.querySelector(".ip_text").value = "";
  document.querySelector(".ip_date").value = "";
  render();
}
