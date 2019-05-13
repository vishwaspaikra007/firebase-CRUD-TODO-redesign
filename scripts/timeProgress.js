var time=[],timeEnd=[],i=[],run=[true],barWidth =[],notified;
function decide(index) {
    var timeTaker =  document.querySelector('#deadline' + index);
    if (new Date(timeTaker.value).getTime() < Date.now()) {
        alert("this deadline is not possible");
        return 0;
    }
    else if(run[index] == true) {
        fillLocal(index);        
        timer(index);
    } else {
        fillLocal(index);
        stop(index);
    }
}
function fillLocal(index) {
    var timeTaker =  document.querySelector('#deadline' + index);
    // for fillStorage function of CRUD
    todos[index].deadline = new Date(timeTaker.value);
    console.log(new Date(timeTaker.value));
    timeLocal = Date.now();
    fillStorage(uid);
    // fillStorage calling done
}
function stop(index) {
    clearInterval(timeEnd[index]);
    run[index] = true;
    timer(index);
}
// timer is called after refresh
function timer() { 
notified = new Array(todos.length).fill(0);
console.log(time); 
timeEnd = setInterval(() => {
    for(x=0;x<todos.length;x++) {
        i[x] = (Date.now() - new Date(todos[x].date).getTime())/10;
        barWidth[x] = document.querySelector('#box' + x);
        time[x] = (new Date((todos[x].deadline) | new Date(todos[x].deadline.seconds)*1000 ).getTime() - new Date(todos[x].date).getTime())/10;
        if(new Date(todos[x].deadline).getTime() == new Date(todos[x].date).getTime())
            continue;
        else if(i[x] >= time[x]) {
            barWidth[x].style.width = "calc(100% + 14px)";
            continue;
        }
        barWidth[x].style.width = "calc(" + (i[x]/time[x])*100 + "% + 14px)";   
        if(barWidth[x].style.width.slice(5,12) >= 50 && notified[x] === 0) {
            notify50(x); 
            notified[x] = 1;
        }     
        }

    }, 10);    
}