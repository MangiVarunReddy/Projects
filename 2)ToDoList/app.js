let topdivform=document.getElementById('topdivForm');
let todoinput =document.getElementById('todovalue');
let bottomdiv=document.getElementById("bottomdiv");
let todofield=document.getElementById("todofield");
let value;
let arr=[{

}];
let count=0;
function createElement(){

    count = count + 1;
    // creating todofield div
    let newElement = document.createElement('div');
    newElement.className='todofield';
    newElement.id=count;

    // creating todofield child elements
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.className=".input";

    //creating span tag
    let spantag=document.createElement('span');
    spantag.className="todovalue";
    spantag.textContent=value;

    //creating a button
    let deleteButton=document.createElement('button');
    deleteButton.textContent="delete";
    deleteButton.setAttribute("type","button");



    bottomdiv.appendChild(newElement);
    newElement.appendChild(checkbox);
    newElement.appendChild(spantag);
    newElement.appendChild(deleteButton);
    
 
    deleteButton.addEventListener('click',()=>{
        bottomdiv.removeChild(newElement);
    })
    checkbox.addEventListener('change',()=>{

        if(checkbox.checked){
            spantag.style.textDecoration='line-through';
        }
        else{
            spantag.style.textDecoration=null;
        }
    })

}

topdivform.addEventListener('submit',function addingElement(e){
    e.preventDefault();
    value=e.target[0].value;
    createElement();
    document.getElementById("todoinput").value=" ";



});