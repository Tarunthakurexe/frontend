const toDoList = [{
    task:'',
    dueDate: ''
}    
]
function renderToDoHTML(){
    let toDoListHTML = '';
    for(let i = 0; i<toDoList.length; i++){
        const toDoObject = toDoList[i];
        const {task} = toDoObject;
        const {dueDate} = toDoObject;
        console.log(task,dueDate,isEmpty(task), isEmpty(dueDate))
        if(isEmpty(task)  && isEmpty(dueDate)){
            continue;
        }
        const html = `
        <div>${task}</div> 
        <div>${dueDate}</div>
        <button onclick = "
        toDoList.splice(${i},1);
        renderToDoHTML();
        " class = "css-delete-button">Delete</button>
        `
        toDoListHTML += html;
    }
    document.querySelector('.js-todo')
    .innerHTML = toDoListHTML;
}

function isEmpty(value) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
}

function addTodo(){
    const inputElement = document.querySelector('.js-query-selector');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-date-input');
    const dueDate = dateInputElement.value;

    toDoList.push({
        task: name,
        dueDate
    });
    inputElement.value='';
    dateInputElement.value='';
    renderToDoHTML();
}