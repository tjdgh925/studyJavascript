const divs = document.querySelectorAll('div');

function logText(e){
    console.log(this.classList.value);
    e.stopPropagation(); //해당하는 영역만 신경쓴다.
}

// divs.forEach(div => div.addEventListener('click', logText));
// bubbling
//아래에서 위로 

divs.forEach(div => div.addEventListener('click', logText,{
    capture: false,
    once: true      //한 번만 작동할 수 있도록 제한하는 방법
}));
//event capture
//위에서 아래로