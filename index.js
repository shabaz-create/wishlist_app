const add=document.getElementById("wishlist-add");
const input=document.getElementById("wishlist-input");
let container=document.getElementById("wishlist-container");
let item="";
let wish_list=[];
let ID;

//function to generate randomID, this can be further customised
function randomID(){
    return Math.floor(Math.random()*1090394);
}


//adding wishes to an array
add.addEventListener("click",(e)=>{
e.preventDefault();
   item=input.value;
   ID=randomID();
   if(item.length>0){
    wish_list.push({ID,item,isChecked:false})
   }
   console.log(wish_list);
   rendering();
   item="";
   input.value="";
})


//removing the elements & striking the elements
container.addEventListener("click",(event)=>{
    event.preventDefault();
    let key=event.target.dataset.key;
    let delKey=event.target.dataset.delkey;
    console.log(event.target.dataset);
    wish_list=wish_list.map((element)=>
    (element.ID==key)?{
        ...element,
        isChecked:!element.isChecked
    }:element
    );


    wish_list=wish_list.filter(element=>element.ID!=delKey);

    rendering();
})



//rendering the array

function rendering(){
    container.innerHTML=wish_list.map((element)=>
        `<div>
            <input type="checkbox" id="${element.ID}" data-key=${element.ID} ${element.isChecked?"checked":""}>
            <label for="${element.ID}" data-key=${element.ID} class=${element.isChecked?"strike":""}>${element.item}</label>
            <button  id="delete-button" ><i data-delKey=${element.ID} class="fa fa-trash">
        </i></button></div>`)
}


rendering();

