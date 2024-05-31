const add=document.getElementById("wishlist-add");
const input=document.getElementById("wishlist-input");
let container=document.getElementById("wishlist-container");
let item;
let list=[];


function randomID(){
    return Math.floor(Math.random()*1090394);
}


add.addEventListener("click",(event)=>{
    event.preventDefault();
    list.push({id:randomID(),text:input.value,status:true});
    console.log(list);
    let element=document.createElement("div");
    element.innerHTML=`<input type="checkbox" id="item1">
    <label for="item1">${input.value}</label>
    <i class="fa fa-trash"></i>`;
   container.appendChild(element);
   console.log("clicked")
})
