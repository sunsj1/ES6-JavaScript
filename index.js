
const input=document.getElementById('task');
const btn=document.getElementById('btn');
const todo=document.getElementById('li');

// const handleclick=()=>{
   
//     li.innerHTML='suraj';
//     todo.appendChild(li);
// }
//btn.handleclick();
let task;
const handleinput=({target})=>{
    task=target.value;
}
const handleclick=()=>{
    
    const li=document.createElement('li');
    li.innerText=task;
    todo.appendChild(li);
};
input.addEventListener("change",handleinput);
btn.addEventListener("click",handleclick);