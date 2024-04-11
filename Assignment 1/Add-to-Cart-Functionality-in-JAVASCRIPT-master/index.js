var product = [
    {
        id: 1,
        name: "camera",
        price: 6400,
        image: "https://i.pinimg.com/736x/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg",
        quantity: 1
    },
    {
        id: 2,
        name: "camera lens",
        price: 4650,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJaE09jheyFF07NZMIzoMK8S_A0UiHyuceg&usqp=CAU",
        quantity: 1
    },
    {
        id: 3,
        name: "iphone",
        price: 3300,
        image: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/fall-2023-iphone-colors-iphone-15-pro.png",
        quantity: 1
    },
    {
        id: 4,
        name: "shirt",
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Df6LJJSgOok1x9w7RB2bcO57cPeyZHS9ew&usqp=CAU",
        quantity: 1
    },
    {
        id: 5,
        name: "laptop",
        price: 8800,
        image: "https://i.rtings.com/assets/pages/IxCXzynA/apple-laptop-lineup-20220825-3-medium.jpg", 
        quantity: 1
    },
    {
        id: 6,
        name: "Cold drink",
        price: 100,
        image: "https://www.luckystore.in/cdn/shop/articles/1000_F_412511989_xq1xPnTkdaQUrxgnbvdxTYol7vWXHbm5.jpg?v=1691501707", 
        quantity: 1
    },
    {
        id: 7,
        name: "Sneaker",
        price: 2400,
        image: "https://images.augustman.com/wp-content/uploads/sites/3/2022/06/22211112/Untitled-design-2022-06-22T184057.090.jpg?tr=w-1920",
        quantity: 1
    },
    {
        id: 8,
        name: "jacket",
        price: 400,
        image: "images/jacket2.jpeg",
        quantity: 1
    },
]


let total = 0;
// var i = 0;
var CartData = [];
var cartItem = document.getElementById('Shopping');
for (var i in product) {
    var pro = document.createElement("div");
    tbl = `<div class="Child"><h3>${product[i].name}</h3>
    <img src="${product[i].image}">
    <p> ${"Price:$" + product[i].price}</p>
    <button class= "btn"onclick="AddToCart(${product[i].id})">ADD To Cart</button>
    </div>`;
    pro.innerHTML = tbl;
    cartItem.appendChild(pro);
}


function showData(pro) {
    var thead = document.getElementById('thead');
    thead.classList.remove("change");
    var tbody = document.getElementById("tbody");
    const row = document.createElement('tr');
    row.id = "row" + pro.id;

    var showrow = "";
    var deleteRow = "";

    showrow = `<td>${pro.name}</td>
     <td> <img src="${pro.image}" width="200px" height="150px"></td>
     <td><input type="number" min="0" oninput="this.value=Math.abs(this.value) "value="${pro.quantity}" id="Cart${pro.id}" onchange ="PriceShow(${pro.id},${pro.price})"></td>
     <td>${"Price:$" + pro.price}</td>
     <td id="pro${pro.id}" class = " totalPrice change" onchange = "totalPrice(${pro.id})">${pro.price}</td>
     <td><i class="fa fa-trash-o" onclick="RemoveItem(${pro.id})"style="font-size:48px;color:red"></i></td>`;

    row.innerHTML = showrow;
    tbody.appendChild(row);

    tfoot = document.getElementById("tfoot");
    tfoot.classList.remove("change");

    deleteRow = `<br><tr><td rowspan="2">Total Price:$<span id="total"></span></td>
      <td><input type="button" id="del" value="PurChase" class="btn" onclick="payNow()"></td></tr>`;
    tfoot.innerHTML = deleteRow;
    totalPrice();
}
function AddToCart(id) {

    let pro = product.find(e => {
        return e.id == id;
    });
    if (!CartData.includes(pro)) {
        CartData.push(pro);

    }
    else {
        var quan = document.getElementById("Cart"+pro.id);
        // console.log(quan)
        quan.value = Number(quan.value)+1;
        PriceShow(pro.id, pro.price);
        return;
    }
    showData(pro);
}

function RemoveItem(id) {
    CartData = CartData.filter(e => {
        return e.id != id;
    });
    if (CartData.length == 0) 
    {
        document.getElementById('row' + id).remove();
        document.getElementById("thead").classList.add("change");
        document.getElementById("tfoot").classList.add("change");
    }
    else 
    {
        document.getElementById("row" + id).remove();
       
    }
    totalPrice();

}
function PriceShow(id, price) {
    let qp = document.getElementById(`Cart${id}`);
    qp = Math.abs(qp.value);
    document.getElementById(`pro${id}`).innerHTML = qp * price;
    totalPrice();
}

function totalPrice() {
    let price = document.getElementsByClassName('totalPrice');
    total = 0;
    for (let j = 0; j < price.length; j++) {
        total += +price[j].innerHTML;
    }
    document.getElementById('total').innerHTML = total;
}
function payNow() {
    alert("Thanks to Purchase!");
    location.reload();
}












