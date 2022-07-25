
function func() {
    if (a.innerHTML == "Order Placed!") {
        a.innerHTML = "Order Now";
    } else {
        a.innerHTML = "Order Placed!";;
    }
}

var elem = document.getElementsByTagName('button');

var a = elem[0];
a.addEventListener("click", func);
