//script for CRUD and local storage
var todos = [],timeLocal,local,uid;
function mapping () {
    var box = document.getElementById('res');
    box.innerHTML = "";
    todos.map((todo,i) => {
    box.innerHTML +=  
        `<div class='resBox'>
            <p id="todoData${i}" contenteditable="true"> ${todo.data}</p>
            <div class="upDel">
                <button onclick=upd(${i}) >update</button>
                <button onclick=del(${i}) id="del">delete</button>
                <button onclick="edit(${i});setDateInput(${i})"" id="edit">Edit</button>
            </div>
            <div id="edit${i}" class="edit">
                <label>
                    <div><div>Enter Deadline</div></div>
                    <input type="datetime-local" name="deadline" id="deadline${i}" >
                </label>
                <button onclick="decide(${i})">start</button>
            </div>
            <div id="second${i}" class="second">
                <div id="box${i}" class="box"></div>
            </div>
        </div>`;
    });
    timer(i);
    var currentUser = firebase.auth().currentUser;
    if(currentUser) {
        firestorage(currentUser.uid);
        // alert("mapping " + currentUser.uid);    
    }
}
// Edit section
function edit(i) {
    var editBox = document.querySelector('#edit' + i);
    if(editBox.style.height == "0px" || editBox.style.height == 0) {
        editBox.style.height = "100px";
    } else {
        editBox.style.height = "0px";
    }
}

function add(){
    const todo = {data : document.getElementById('todo').value,
                  date : Date(),
                  deadline: Date()}
    todos.push(todo);
    timeLocal = Date.now();
    fillStorage();
}
function del(i) {
    todos.splice(i,1);
    timeLocal = Date.now();
    fillStorage();
}
function upd(i) {
    let updvalue = document.querySelector('#todoData' + i)
    if(updvalue) {
        timeLocal = Date.now();
        todos[i].data = updvalue.textContent;
        todos[i].date = Date();
        todos[i].deadline = Date();
    }
    fillStorage();
}
function fillStorage() {
    // alert("storing");
    var local = {
        uid : uid,
        Time : timeLocal,
        Todos : todos
    }
    localStorage.clear();
    window.localStorage.setItem(`local`,JSON.stringify(local));
    mapping();
}
window.onload = ()=> {
    if(localStorage.getItem('local'))
    {
        local = JSON.parse(localStorage.getItem('local'));
        uid = local.uid;
        timeLocal = local.Time;
        todos = local.Todos;
        mapping();
    }
    else
    {
        todos = [];
        timeLocal = 0;
        fillStorage();
    }
}
