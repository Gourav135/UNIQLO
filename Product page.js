window.onscroll = function(){myFunction()};
var navbar = document.querySelector(".nav");
var sticky = navbar.offsetTop;

function myFunction(){
    if(window.pageYOffset>=sticky){
        navbar.classList.add("sticky");
        
    }
    else{
        navbar.classList.remove("sticky");
    }
}

document.querySelector("#button").addEventListener("click",addItem);
var arr=JSON.parse(localStorage.getItem("Cart"))||[];
function addItem(event){
    event.preventDefault;
    var qty=document.querySelector("#select").value;
    var name = document.querySelector("#name").textContent;
    var rs = 4990;
    var color = document.querySelector("#colorselect").value;
    var size = document.querySelector("#sizechart").value;
    var img = document.querySelector("#img").src;
    console.log(img)
    var obj={
        name: name,
        img: img,
        qty: qty,
        color: color,
        size: size,
        rs: rs
    }
    arr.push(obj);
    localStorage.setItem("Cart",JSON.stringify(arr));

}