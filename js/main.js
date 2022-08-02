//############# Variable ///////////////////
const task = document.getElementById('create-task');
const btnAdd = document.getElementById('btn-add');
const myForm = document.getElementById('my-form');
const searchTask = document.getElementById('search-task');
const listTask = document.querySelector('ul');
const clearAll = document.getElementById('delet-all')
const itemTask = document.querySelectorAll('#item-task');



///////////////////// Functions //////////////////

loadEventListeners();

// Load all event listeners
function loadEventListeners() {

    // add task
    myForm.addEventListener('submit', addTask);

    // search Task 
    searchTask.addEventListener('keyup', search)

    // remove task
    listTask.addEventListener('click', removeTag);
    
    // clear tasks
   clearAll.addEventListener('click', clearAllList);

}


//////////////////// Discription Functions ///////////////

// addTask function
function addTask(e){

    const val = document.createElement('li');
    const textTagLi = document.createTextNode(task.value);
    val.className = "list-group-item pl-4 my-list-task d-flex justify-content-between";
    val.id = "item-task";
    val.appendChild(textTagLi);


    const val2 = document.createElement('i');
    val2.className = "fa fa-times text-danger mr-auto";
    val.appendChild(val2);

    const val3 = document.querySelector('ul');
    val3.appendChild(val);

    e.preventDefault();
}

// searchTask function
function search(e){
    // console.log(searchTask.value);
    let contain = searchTask.value;

    let child = listTask.children;
    
    for (let i = 0; i < child.length; i++) {
       
        let textElement = child[i].innerText;
        if(textElement.includes(contain)){
            child[i].classList.add("d-flex");
            
        }
        else{
            // child[i].remove();
            child[i].classList.remove("d-flex");
            child[i].style.display = "none";
            
        }
        
        
    }
    

    


}

// Remove tag
function removeTag(e){

    let val = e.target.className;

    if(val.includes("fa-times")){
        if(confirm("ایا مطمین هستی؟")){
            let j = e.target.parentElement;
            j.remove();
        }
    }
    
}

//clear all function
function clearAllList(){

    if(confirm("آیا می خواهید تمام تسک ها را پاک کنید؟")){
           
        let first = listTask.firstElementChild;
        while(first){
            first.remove();
            first = listTask.firstElementChild;
        }
     }

}