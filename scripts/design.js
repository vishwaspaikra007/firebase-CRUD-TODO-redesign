// for place holder
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

//
