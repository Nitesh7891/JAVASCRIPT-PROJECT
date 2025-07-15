var add=document.querySelector("#add")
var rem=document.querySelector("#rem")
var inp=document.querySelector("input")
var ul=document.querySelector("ul")
var li;

add.addEventListener("click",function(){
    if(inp.value.trim()===''){}
    else{
         li=document.createElement('li')
         li.textContent=inp.value;
         ul.appendChild(li);
         inp.value=''
    }
    rem.addEventListener("click",function(){
        ul.removeChild(li);
    })
})