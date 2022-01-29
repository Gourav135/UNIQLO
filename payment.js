var array1 = JSON.parse(localStorage.getItem("summary"));
var item = document.querySelector("#totalitsms");
item.textContent=array1[0].length;
var price = document.querySelector("#totalprice1");
price.textContent=array1[0].totalprice;
console.log(price)
var total = document.querySelector("#totalpriceshipping");
total.textContent=Number(array1[0].totalprice)+100;
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