var products = [
  (obj1 = {
    date: "15",
    description: "Exclusive Size Online Only, Limited Store",
    gender: "WOMEN",
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439707/item/ingoods_56_439707.jpg?width=1600&impolicy=quality_75",
    name: "WOMEN Ultra Light Down Relaxed Jacket",
    price: "4990.00",
    sprice: "Rs. 4990.00",
    size: "M",
    color: 4,
  }),
  (obj2 = {
    date: "12",
    description: "Exclusive Size Online Only, Limited Store",
    gender: "WOMEN",
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439702/item/ingoods_13_439702.jpg?width=1008&impolicy=quality_75",
    name: "WOMEN Ultra Light Down Jacket",
    price: "4990.00",
    sprice: "Rs. 4990.00",
    size: "XL",
    color: 8,
    star: 5,
    rating: "(14)",
  }),
  (obj3 = {
    date: "7",
    description: "",
    gender: "WOMEN",
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439704/item/ingoods_71_439704.jpg?width=1008&impolicy=quality_75",
    name: "WOMEN Ultra Light Down Parka",
    price: "5990.00",
    sprice: "Rs. 5990.00",
    size: "S-3XL",
    color: 5,
    star: 5,
    rating: "(4)",
  }),
  (obj4 = {
    date: "3",
    description: "",
    gender: "WOMEN",
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439709/item/ingoods_09_439709.jpg?width=1008&impolicy=quality_75",
    name: "WOMEN Ultra Light Down Hooded Coat",
    price: "7990.00",
    sprice: "Rs. 7990.00",
    size: "S-M",
    color: 2,
  }),
  (obj5 = {
    date: "6",
    description: "",
    gender: "WOMEN",
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/429452/item/ingoods_09_429452.jpg?width=1600&impolicy=quality_75",
    name: "WOMEN Ultra Light Down Vest",
    price: "3490.00",
    sprice: "Rs. 3490.00",
    size: "S-3XL",
    color: 5,
    star: 5,
    rating: "(1)",
  }),
  (obj6 = {
    date: "20",
    description: "",
    gender: "WOMEN",
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/419778/item/ingoods_18_419778.jpg?width=1600&impolicy=quality_75",
    name: "WOMEN Ultra Light Down Compact Vest",
    price: "2990.00",
    sprice: "Rs. 2990.00",
    size: "S-3XL",
    color: 2,
    star: 5,
    rating: "(1)",
  }),
  (obj7 = {
    date: "20",
    description: "",
    gender: "WOMEN",
    image:"https://image.uniqlo.com/UQ/ST3/in/imagesgoods/419778/item/ingoods_01_419778.jpg?width=1008&impolicy=quality_75",
    name: "WOMEN Ultra Light Down Compact Vest",
    price: "2990.00",
    sprice: "Rs. 2990.00",
    size: "S-3XL",
    color: 2,
    star: 5,
    rating: "(1)",
  }),
  (obj8 = {
    date: "20",
    description: "",
    gender: "WOMEN",
    image:
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439149/item/ingoods_09_439149.jpg?width=1008&impolicy=quality_75",
    name: "WOMEN Ultra Light Down Compact Vest",
    price: "2990.00",
    sprice: "Rs. 2990.00",
    size: "S-3XL",
    color: 2,
    star: 5,
    rating: "(1)",
  }),
  
  //   obj7={
  //       date: "23",
  //      description: "",
  //      gender: "WOMEN",
  //      image: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/429454/item/goods_07_429454.jpg?width=1600&impolicy=quality_75",
  //      name: "WOMEN Ultra Light Down Parka",
  //      price: "3,990.00",
  //      size: "M",
  //      color:1,
  //      star:5,
  // },
];
// 
// 
// document.querySelector("#S").addEventListener("onclick","filterCat(products)");
// function filterCat(products) {
//   console.log("hie");
//   var selected = "S-3XL";
//   var filterList = products.filter(function (elem) {
//     return elem.size == selected;
//   });
//   console.log(filterList);
//   display(filterList);
// }
localStorage.setItem("data",JSON.stringify(products));


display(products);
function display(products) {
  document.querySelector(".product").innerHTML="";
  // console.log(products);

  products.map(function (elem) {
    var box = document.createElement("div");
    box.setAttribute("class", "mainbox");

    document.querySelector(".product").append(box);

    var b1 = document.createElement("div");
    b1.setAttribute("id", "box1");
    var image = document.createElement("img");
    image.setAttribute("src", elem.image);
    image.setAttribute("class","imagewidth");
    var a = document.createElement("a");
    a.append(image);
    a.setAttribute("id","atag3");

    var b2 = document.createElement("div");
    b2.setAttribute("id", "box2");
    var color = document.createElement("div");
    color.setAttribute("id", "col");
    document.querySelector(".product").append(box);
    b1.append(a);
    box.append(b1, b2);
    b2.append(color);
    a.addEventListener("click",function(){
      window.location.href="Productpage.html";
    })
    document.querySelector(".mainbox").addEventListener("click", openNewPage);

    function openNewPage() {
      console.log("saurv");
      // window.location.href.Productpage.html;
    }

    for (let i = 0; i < elem.color; i++) {
      var colortip = document.createElement("div");
      colortip.setAttribute("id", "coltip");
      color.append(colortip);
    }
    var genderbox = document.createElement("div");
    b2.append(genderbox);
    genderbox.setAttribute("id", "gender");
    var gender = document.createElement("div");
    gender.setAttribute("id", "gend");
    var size = document.createElement("div");
    size.setAttribute("id", "size");
    genderbox.append(gender, size);
    gender.textContent = elem.gender;
    size.textContent = elem.size;
    var name = document.createElement("div");
    name.textContent = elem.name;
    name.setAttribute("id", "name");
    b2.append(name);
    var desc = document.createElement("div");
    desc.textContent = elem.description;
    b2.append(desc);
    var price = document.createElement("div");
    price.setAttribute("id", "price");
    price.textContent = 
    price.textContent = elem.sprice;
    b2.append(price);
    var rating = document.createElement("div");
    rating.setAttribute("id", "rate");

    b2.append(rating);
    for (let i = 0; i <= elem.star; i++) {
      if (i < elem.star) {
        var star = document.createElement("div");
        star.setAttribute("id", "star");
        rating.append(star);
        var starimage = document.createElement("img");
        starimage.setAttribute(
          "src",
          "https://cdn-icons.flaticon.com/png/128/956/premium/956100.png?token=exp=1639601551~hmac=05757ec69e632d87cec889dfe31eb9c9"
        );
        starimage.setAttribute("id", "starimage");
        star.append(starimage);
      }

      if (i == elem.star) {
        var number = document.createElement("div");
        number.setAttribute("id", "number");
        number.textContent = elem.rating;
        rating.append(number);
      }
    }
    
  });
}

document.querySelector("#S").addEventListener("click",filterSize);

function filterSize(){
  // var selected = "";
  let krarr = []
  var filterList = products.filter(function(elem)
  {

    if(elem.size == 'S-3XL') {
      
      krarr.push(elem);
    }
    display(krarr)
  })


  // console.log('kritu');
  
}




var a;
function disp() {
  if (a == 1) {
    document.querySelector(".ap").style.display = "inline";
    return (a = 0);
  } else {
    document.querySelector(".ap").style.display = "none";
    return (a = 1);
  }
}

function psort()
{
  var selected = document.querySelector("#priceSort").value;
  console.log(selected);
  if(selected =="high")
  {
    products.sort(function(a,b)
    {
      return Number(b.price) - Number(a.price);
    })
    display(products);
  }
  console.log(products);

   if(selected =="low")
  {
    products.sort(function(a,b)
    {
      return Number(a.price) - Number(b.price);
    })
    
  }
  console.log(products);
  display(products);
}
