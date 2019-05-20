// for place holder ...............................................................................
function placeHolder(a) {
    placeHolder = document.querySelector(a);
    placeHolder.style.transition= "0.5s";
    placeHolder.style.top = "20px";
    placeHolder.style.fontSize = "20px";
    placeHolder.style.width = "80%";
    placeHolder.style.left = "4px";
    placeHolder.style.opacity = "1";
    setTimeout(() => {
    placeHolder.style.textIndent = "20px";
    }, 500);
}
//..................................................................................................
// for loading .....................................................................................
var endLoad=0;
function loading() {
    var i = 0;
    load = document.querySelector(".loading");
    load.style.display = "block";
    endLoad = setInterval(() => {
        if(i==0){
            load.innerHTML = "L";
            i++;
        }else if(i==1){
            load.innerHTML += "o";
            i++;
        }else if(i==2){
            load.innerHTML += "a";
            i++;
        }else if(i==3){
            load.innerHTML += "d";
            i++;
        }else if(i==4){
            load.innerHTML += "i";
            i++;
        }else if(i==5){
            load.innerHTML += "n";
            i++;
        }else if(i==6){
            load.innerHTML += "g";
            i++;
        }else if(i==7){
            load.innerHTML += "...";
            i=0;
        }
    }, 250);
}
function endLoading() {
    clearInterval(endLoad);
    load = document.querySelector(".loading");
    load.style.display = "none";
}
//..............................................................................................