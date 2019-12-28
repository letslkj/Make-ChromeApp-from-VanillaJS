const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input")
    toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos(){
    //localStorage.setItem(TODOS_LS, toDos);
    //로컬스토리지에는 자바데이터를 저장할수없음. 스트링형태로 저장됨
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //JSON.stringify는 자바스크립트 Obj를 String으로 바꿔주는 역할.
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;
    delBtn.innerHTML = "✖";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        //console.log(loadedToDos); 
        //스트링을 불러옴 JSON사용해야함
        const parseToDos = JSON.parse(loadedToDos);
        parseToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function init(){
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}

init();