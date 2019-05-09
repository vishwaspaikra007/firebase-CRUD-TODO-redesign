var time=[],timeEnd=[],i=[],run=[true],barWidth =[];;
// var timeTaker =  document.querySelector('#deadline');
// var barWidth = document.querySelector('.box');
function decide(index) {
    var timeTaker =  document.querySelector('#deadline' + index);
    var barWidth = document.querySelector('#box' + index);
    // barWidth.style.width = (i/time)*100 + "%";
    // time = new Date(timeTaker.value).getTime() - new Date(todos[index].date).getTime();
    if (new Date(timeTaker.value).getTime() < Date.now()) {
        // console.log(new Date(timeTaker.value).getTime() - new Date(todos[i].date).getTime());
        alert("this deadline is not possible");
        return 0;
    }
    else if(run[index] == true) {
        // for fillStorage function of CRUD
        todos[index].deadline = new Date(timeTaker.value);
        console.log(new Date(timeTaker.value));
        timeLocal = Date.now();
        fillStorage(uid);
        // fillStorage calling done
        timer(index);
    } else {
        // for fillStorage function of CRUD
        todos[index].deadline = new Date(timeTaker.value);
        console.log(new Date(timeTaker.value));
        timeLocal = Date.now();
        fillStorage(uid);
        // fillStorage calling done
        stop(index);
    }
}
function stop(index) {
    clearInterval(timeEnd[index]);
    run[index] = true;
    timer(index);
}
// function timer(index) { 
//     alert("hello");
// i[index] = (Date.now() - new Date(todos[index].date).getTime())/10; 
// console.log(i[index]);
// // var timeTaker =  document.querySelector('#deadline' + index); 
// barWidth[index] = document.querySelector('#box' + index);
// console.log(time);
// run[index] =  false;
// time[index] = (new Date(todos[index].deadline).getTime() - new Date(todos[index].date).getTime())/10; 
// timeEnd[index] = setInterval(() => {
//         // console.log(i + " " + time);
//         barWidth[index].style.width = "calc(" + (i[index]/time[index])*100 + "% + 14px)";
//         if(i[index]++ >= time[index]) {
//         clearInterval(timeEnd[index]);
//         i[index]=0;
//         }
//     }, 10);    
// }

function timer() { 
console.log(time); 
timeEnd = setInterval(() => {
    for(x=0;x<todos.length;x++) {
        if(new Date(todos[x].deadline).getTime() == new Date(todos[x].date).getTime())
            continue;
        if(i[x]++ >= time[x]) {
            continue;
        }
        i[x] = (Date.now() - new Date(todos[x].date).getTime())/10;
        barWidth[x] = document.querySelector('#box' + x);
        time[x] = (new Date(todos[x].deadline).getTime() - new Date(todos[x].date).getTime())/10;
        barWidth[x].style.width = "calc(" + (i[x]/time[x])*100 + "% + 14px)";         
        }
    }, 10);    
}