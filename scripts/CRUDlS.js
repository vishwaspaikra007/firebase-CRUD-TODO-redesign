//script for CRUD and local storage
var todos = [],timeLocal,local,uid;
function mapping () {
    var box = document.getElementById('res');
    box.innerHTML = "";
    todos.map((todo,i) => {
    box.innerHTML +=  `<div class='resBox'><p id="todoData" contenteditable="true"> ${todo}</p>
        <div class="upDel">
        <button onclick=upd(${i}) >update</button>
        <button onclick=del(${i}) id="del">delete</button>
        </div></div>`
    });
    var currentUser = firebase.auth().currentUser;
    if(currentUser) {
        firestorage(currentUser.uid);
        // alert("mapping " + currentUser.uid);    
    }
}
function add(){
    const todo = document.getElementById('todo').value + "<br>" + Date();
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
    let updvalue = prompt("Update",todos[i]);
    if(updvalue) {
        timeLocal = Date.now();
        todos[i] = updvalue + '<br>' + Date();
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