const monthNames = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
"JULY", "AUG", "SEP", "OCT", "NOV", "DEC"
];
const monthSelect = document.querySelector('.monthSelect');
const calendarTable = document.querySelector('table');
var today = new Date();
var first = new Date(today.getFullYear(), today.getMonth(),1);
var change = first;
var year = first.getFullYear();
let month = first.getMonth();
const endOfMonth = [31, 28, 31, 30, 31, 30 ,31, 31, 30, 31, 30, 31];

//연도, 월 적용 함수
function setMonth(){
    monthSelect.querySelector('span').innerText =
    `${monthNames[first.getMonth()]} ${first.getFullYear()}`
}
//달력 출력
function setDate(){
    var cell;
    var startOfMonth = first.getDay();
    var todayDate = today.getDate();
    var cnt = startOfMonth;
    while (calendarTable.rows.length > 1)
        calendarTable.deleteRow(calendarTable.rows.length-1);
    
    var row = calendarTable.insertRow();
    
    for(var i = 0; i < startOfMonth; i++){
        cell = row.insertCell();
    }
    for(var i = 1; i < endOfMonth[first.getMonth()] + 1; i ++){
        if(cnt === 7){
            row = calendarTable.insertRow();
            cnt = 0;
        }
        cell = row.insertCell();
        cell.classList.add('day');
        cell.id = i;
        cell.innerHTML = i;
        cnt++;
        if(cnt%7 === 0)
            cell.classList.add('saturday');
        else if(cnt == 1)
            cell.classList.add('sunday');
        if(i === todayDate){
            cell.classList.add('selected');
        }
    }
}
//버튼 누를경우 연도, 월 바꾸는 함수
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
    setDate();
}
//날짜를 클릭할 경우 날짜에 배경이 생기도록 하는 함수.
function clickCalendar(e){
    var group = [];
    for(var i = 1; i <= endOfMonth[first.getMonth()]; i++){
        group[i] = document.getElementById(i);
        if(group[i].classList.contains('selected')){
            group[i].classList.remove('selected') 
        }
    }
    if(e.target.classList.contains('day')){
        e.target.classList.add('selected');
    }
        // if(e.target.)
    // }
    
}
setMonth();
setDate();
monthSelect.addEventListener('click',changeMonth);
calendarTable.addEventListener('click', clickCalendar);
