var people=document.querySelector(".people");
var input=document.querySelector("input")
var data=[
    { name:"Harsh",src:"https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"harshita",src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"harshika",src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Hari",src:"https://images.unsplash.com/photo-1552642986-ccb41e7059e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]


var pers="";
data.forEach(function(elem){
    pers+=`<div class="person">
                    <div class="img">
                       <img src="${elem.src}" alt="">
                    </div> 
                    <h4>${elem.name}</h4>
                    </div>`;
})

people.innerHTML=pers;
input.addEventListener("input",function(){
  var match=data.filter(function(e){
    return e.name.startsWith(input.value)
  })
  var newuser="";
match.forEach(function(elem){
   newuser+=`<div class="person">
                    <div class="img">
                       <img src="${elem.src}" alt="">
                    </div> 
                    <h4>${elem.name}</h4>
                    </div>`;
})
people.innerHTML=newuser;
})
 


