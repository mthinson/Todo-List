
//global variables
const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

//click event to add items in list
addButton.addEventListener('click', ()=>{
 let div = document.createElement('div');
 div.classList.add("list-div");
 

 //input value of p
 let paragraph = document.createElement('p');
 paragraph.innerText = input.value;
 paragraph.classList.add('list-item')
 input.value = "";

 //remove button
 let removeButton = document.createElement('button');
 removeButton.innerText = "X";
 removeButton.classList.add('removeButton')

 removeButton.addEventListener('click',() =>{
    container.removeChild(div);
 })
 //add elements into container
 container.appendChild(div);
 div.appendChild(paragraph);
 div.appendChild(removeButton);
 
})
