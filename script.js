const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === '')
    {
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "deleteButton";
        
        li.appendChild(deleteButton); 
       
    }
    inputBox.value = '';
    saveData()
}

listContainer.addEventListener("click", function(f){
    if(f.target.tagName === "LI"){
        f.target.classList.toggle("checked");
        saveData()
    }
    else if(f.target.tagName === "BUTTON"){
        f.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();
