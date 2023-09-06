const Input = document.getElementById("input");
const ListContent = document.getElementById("listContent");

function task(){
    if (Input.value === '') {
        alert("you must Enter your List")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = Input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
        saveData();

    }
        Input.value="";
        
        
}

list.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();





