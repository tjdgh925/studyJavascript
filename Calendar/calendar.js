const monthNames = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
"JULY", "AUG", "SEP", "OCT", "NOV", "DEC"
];
const monthSelect = document.querySelector('.monthSelect');
var today = new Date();
var first = new Date(today.getFullYear(), today.getMonth(),1);
var change = first;
var year = first.getFullYear();
let month = first.getMonth();

function setMonth(){
    monthSelect.querySelector('span').innerText =
    `${monthNames[first.getMonth()]} ${first.getFullYear()}`
    console.log(first);
}
function changeMonth(e){
    if(e.target.classList.contains('previous')){
        if(change.getMonth()-1 < 0){
            change = new Date(first.getFullYear()-1, 11, 1);    
            first = change;
        }
        else{
            change = new Date(first.getFullYear(), first.getMonth()-1, 1); 
            first = change; 
        }
    }
    else if(e.target.classList.contains('following')){
        if(change.getMonth()+1 > 11){
            change = new Date(first.getFullYear()+1, 0, 1);    
            first = change;
        }
        else{
            change = new Date(first.getFullYear(), first.getMonth()+1, 1); 
            first = change; 
        }
    }
    else return;
    setMonth();
}

monthSelect.addEventListener('click',changeMonth);
setMonth();