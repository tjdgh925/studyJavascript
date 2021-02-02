const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.todo-list');
const items = JSON.parse(localStorage.getItem('items')) || [];
const time = document.querySelector('.header');
const monthNames = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"
];
const dayNames = [
    "일요일","월요일", "화요일", "수요일", "목요일", "금요일", "토요일"
]


function setTime(){
    const now = new Date();
    const date = now.getDate();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    const day = dayNames[now.getDay()];
    time.innerHTML = 
    `
    <div class="date-column">
        <div class="date">${date}</div>
            <div class="date-row">
                <div class="month">${month}</div>
                <div class="year">${year}</div>
        </div>
    </div>
    <div class="day">${day}</div>
    `
}

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]').value);
    const item = {
        text,
        done: false
    }
    items.push(item);
    uploadList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function uploadList(todos = [], todoList){
    todoList.innerHTML = todos.map((todo,i) =>{
        return `
            <li>
                <label for="item${i}">${todo.text}</label>
                <input type="button" class="delete" data-index=${i} value="삭제">
            </li>
        `
    }).join('');
}

function delItem(e){
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    uploadList(items, itemsList);
}
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', delItem);
setTime();
uploadList(items, itemsList);