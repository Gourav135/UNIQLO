var a = JSON.parse(localStorage.getItem("Cart"));
var cartitem = document.querySelector("#cartitems")
var qty12 = 0
if (a == null) {
    console.log(cartitem.textContent = "Your cart is Empty")
}
else {


    a.map(function (elem, index) {
        qty12 = qty12 + Number(elem.qty);
        var maindiv = document.createElement("div");
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        maindiv.style.display = "flex";
        var img = document.createElement("img");
        img.setAttribute("src", elem.img);
        img.setAttribute("id", "imgcart");
        div1.setAttribute("class", "div1");
        div1.append(img);
        var h2 = document.createElement("h2");
        var cancel = document.createElement("button");
        var h3 = document.createElement("h3");
        var qty = document.createElement("h3");
        var size = document.createElement("h3");
        var h3pair = document.createElement("div");
        var h2pair = document.createElement("div");
        var qtypair = document.createElement("div");
        var sizepair = document.createElement("div");
        var forh3 = document.createElement("div");
        var forh2 = document.createElement("div");
        var forqty = document.createElement("div");
        var forsize = document.createElement("div");

        cancel.textContent = "X"

        h2.textContent = elem.name;
        h3.textContent = elem.color;
        qty.textContent = elem.qty;
        size.textContent = elem.size;
        forh3.style.display = "flex";
        forqty.style.display = "flex";
        forsize.style.display = "flex";
        forh3.setAttribute("class", "forh3")
        forqty.setAttribute("class", "forqty")
        forsize.setAttribute("class", "forsize")
        h3pair.textContent = "Color: ";
        qtypair.textContent = "Quantity: ";
        sizepair.textContent = "Size: ";
        forh3.append(h3pair, h3);
        forqty.append(qtypair, qty);
        forsize.append(sizepair, size);
        var h222 = document.createElement("h2");
        h222.textContent = "Rs:  4990.00";
        div2.append(h2, forh3, forqty, forsize, h222)
        cancel.setAttribute("id", "cancel");
        cancel.addEventListener("click", function () {
            deletetask(index);
        });
        cancel.addEventListener("click", function (event) {
            event.target.parentNode.remove();
            location.reload();
        })
        maindiv.append(div1, div2, cancel);
        maindiv.setAttribute("class", "maindiv");
        var div0 = document.querySelector("#cartitems");
        div0.append(maindiv);
    })
    function deletetask(index) {
        a.splice(index, 1);
        localStorage.setItem("Cart", JSON.stringify(a));
    }
    var maindiv1 = document.createElement("div");
    maindiv1.setAttribute("class", "maindiv1")
    var order = document.createElement("h2");
    var h22 = document.createElement("h2");
    var orderpair = document.createElement("h2");
    var h22pair = document.createElement("h2");
    var pppair = document.createElement("p");
    var pp = document.createElement("p");
    var forh22 = document.createElement("div");
    var forpp = document.createElement("div");
    var fororder = document.createElement("div");
    var pppair1 = document.createElement("p");
    var pp1 = document.createElement("p");
    var forpp1 = document.createElement("div");
    order.textContent = "ORDER SUMMARY | ITEMS(S) : "
    orderpair.textContent = a.length;
    fororder.append(order, orderpair);
    pp.textContent = "Item(s) subtotal";
    pppair.textContent = qty12 * 4990;
    forpp.append(pp, pppair);
    h22.textContent = "ORDER TOTAL";
    h22pair.textContent = ((qty12 * 4990) + 100);
    forh22.append(h22, h22pair)
    pp1.textContent = "Shipping";
    pppair1.textContent = "100";
    forpp1.append(pp1, pppair1);
    fororder.setAttribute("class", "fororder")
    forpp.setAttribute("class", "forpp")
    forpp1.setAttribute("class", "forpp1")
    forh22.setAttribute("class", "forh22")
    var buttondiv = document.createElement("div");
    var button12 = document.createElement("button");
    button12.textContent = "CHECKOUT"
    button12.setAttribute("class", "button12");
    buttondiv.append(button12);
    buttondiv.setAttribute("class", "buttondiv")
    button12.addEventListener("click", checkoutpage)

    function checkoutpage(event) {

        var details = JSON.parse(localStorage.getItem("Cart"));
        var arr12 = [];
        var pricetotal12 = 0;
        details.map(function (elem, index, array) {
            var pricetotal1 = elem.qty * 4990;
            pricetotal12 = pricetotal12 + pricetotal1;
        })
        var length = details.length;

        var dataobj = {
            length: length,
            totalprice: pricetotal12
        }
        arr12.push(dataobj);
        localStorage.setItem("summary", JSON.stringify(arr12));

        window.location.href = "checkout.html"
    }
    maindiv1.append(fororder, forpp, forpp1, forh22, buttondiv);
    var div00 = document.querySelector("#cartitems2");
    div00.append(maindiv1);
    if (a.length == 0) {
        maindiv1.style.display = "none";
        console.log(cartitem.textContent = "Your cart is Empty")
    }




}