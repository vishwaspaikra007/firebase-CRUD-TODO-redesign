var time=[],timeEnd=[],i=[],run=[true],barWidth =[],notified;
// deadline possibility check ................................................................
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
// ...........................................................................................
// possibility = 1 then fill local ........................................................... 
function fillLocal(index) {
    var timeTaker =  document.querySelector('#deadline' + index);
    // for fillStorage function of CRUD
    todos[index].deadline = new Date(timeTaker.value).toString();
    timeLocal = Date.now();
    fillStorage(uid);
    // fillStorage calling done
}
//..............................................................................................
// not needed will be removing it soon anymore..................................................
function stop(index) {
    clearInterval(timeEnd[index]);
    run[index] = true;
    timer(index);
}
//................................................................................................
// to set the date input..........................................................................
function setDateInput(x) {
    var set = document.querySelector('#deadline' + x);
    var dline = new Date(todos[x].deadline);
    var years = dline.getFullYear();
    var months = dline.getMonth() + 1;  
    months = (months <10 ? "0" : "") + months;  
    var days = dline.getDate();
    days = (days <10 ? "0" : "") + days;  
    var hours = dline.getHours();
    hours = (hours <10 ? "0" : "") + hours;  
    var minutes = dline.getMinutes();
    minutes = (minutes <10 ? "0" : "") + minutes;  
    set.value = years + "-" + months + "-" + days + "T" + hours + ":" + minutes;
    return set;
}
//...................................................................................................
// timer is called after refresh.....................................................................
function timer() { 
notified = new Array(todos.length).fill(0);
console.log(time); 
timeEnd = setInterval(() => {
    for(x=0;x<todos.length;x++) {
        i[x] = (Date.now() - new Date(todos[x].date).getTime())/10;
        barWidth[x] = document.querySelector('#box' + x);
        time[x] = (new Date((todos[x].deadline)).getTime() - new Date(todos[x].date).getTime())/10;
        if(new Date(todos[x].deadline).getTime() == new Date(todos[x].date).getTime())
            continue;
        else if(i[x] >= time[x]) {
            barWidth[x].style.width = "calc(100% + 14px)";
            continue;
        }
        barWidth[x].style.width = "calc(" + (i[x]/time[x])*100 + "% + 14px)";   
        // bar width more than 50%
        if(barWidth[x].style.width.slice(5,12) >= 50 && notified[x] === 0) {
            notify50(x); 
            notified[x] = 1;
        }     
        }

    }, 10);    
}
//....................................................................................................