//FIREBASE
var firebaseConfig = {
    apiKey: "AIzaSyAMtmmXFa3OPIXkffRbbqZ2csBkS_0fk4Y",
    authDomain: "organic-store-1ebc1.firebaseapp.com",
    databaseURL: "https://organic-store-1ebc1.firebaseio.com",
    projectId: "organic-store-1ebc1",
    storageBucket: "organic-store-1ebc1.appspot.com",
    messagingSenderId: "596164350557",
    appId: "1:596164350557:web:5d0b9d453d100a4479f3b4",
    measurementId: "G-1H92PHB7CN"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
//GLOBAL
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');
//DIVS
var fruitDIV = document.getElementById("fruitDIV");
var juiceDIV = document.getElementById("juiceDIV");
var saladDIV = document.getElementById("saladDIV");
//information
var FRUIT = [{
        name: 'Apple',
        price: 1
    },
    {
        name: 'Orange',
        price: 1
    },
    {
        name: 'cherry',
        price: 1
    },
    {
        name: 'Strawberry',
        price: 1
    },
    {
        name: 'Kiwi',
        price: 1
    },
    {
        name: 'Banana',
        price: 1
    },
];
var JUICE = [{
        name: 'JUICE #1',
        price: 10
    },
    {
        name: 'JUICE #2',
        price: 11
    },
    {
        name: 'JUICE #3',
        price: 12
    },
];
var SALAD = [{
        name: 'Salad #1',
        price: 13
    },
    {
        name: 'Salad #2',
        price: 14
    },
    {
        name: 'Salad #3',
        price: 15
    },
];
//HTML
function HTMLfruitproduct(con) {
    let URL = `img/fruits/fruit${con}.jpeg`;
    let btn = `btnFruit${con}`;
    return `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${FRUIT[con-1].name}</p>
                    <p class="card-text">price: ${FRUIT[con-1].price}.00</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" onclick="cart2('${FRUIT[con-1].name}','${FRUIT[con-1].price}','${URL}','${con}','${btn}')"
                                class="btn btn-outline-secondary" ><a href="cart.html" style="color:inherrit;">Buy</a></button>
                                <button id="${btn}" type="button" onclick="cart('${FRUIT[con-1].name}','${FRUIT[con-1].price}','${URL}','${con}','${btn}')" 
                                class="btn btn-sm btn-outline-secondary">Add to cart</button>
                            </div>
                                <small class="text-muted">Free shipping</small>
                        </div>
                </div>
        </div>
    </div>
    `
}

function HTMLjuiceproduct(con) {
    let URL = `img/juice/juice${con}.jpeg`;
    let btn = `btnjuice${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem," src="${URL}" alt="card image cap">
                <div class="card-body">
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <p class="card-text">${JUICE[con-1].name}</p>
            <p class="card-text">price: ${JUICE[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" onclick="cart2('${JUICE[con-1].name}','${JUICE[con-1].price}','${URL}','${con}','${btn}')"
                        class="btn btn-outline-secondary" ><a href="cart.html" style="color:inherrit;">Buy</a></button>
                        <button id="${btn}" type="button" onclick="cart('${JUICE[con-1].name}','${JUICE[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                    </div>
                        <small class="text-muted">Free shipping</small>
                </div>
            </div>
        </div>
    `
}

function HTMLsalaproduct(con) {
    let URL = `img/salads/salad${con}.jpeg`;
    let btn = `btnSalad${con}`;
    return `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style="height:16rem," src="${URL}" alt="card image cap">
        <div class="card-body">
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <i style="color:orange;" class="fa fa-star" ></i>
            <p class="card-text">${SALAD[con-1].name}</p>
            <p class="card-text">price: ${SALAD[con-1].price}.00</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" onclick="cart2('${SALAD[con-1].name}','${SALAD[con-1].price}','${URL}','${con}','${btn}')"
                    class="btn btn-outline-secondary" ><a href="cart.html" style="color:inherrit;">Buy</a></button>
                        <button id="${btn}" type="button" onclick="cart('${SALAD[con-1].name}','${SALAD[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">Add to cart</button>
                </div>
                     <small class="text-muted">Free shipping</small>
            </div>
        </div>
    </div>
    `
}
//ANIMATION
function animation() {
    const toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showconfirButton: false,
        timer: 1000
    });
    toast({
        type: 'success',
        title: 'Added to shopping cart'
    });
}
// CART FUNCTIONS
function cart(name, price, url, con, btncart) {
    var item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.disply = "none";
    animation();
}

function cart2(name, price, url, con, btncart) {
    var item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.disply = "none";
}
//RENDER
function render() {
    for (let index = 1; index <= 6; index++) {
        fruitDIV.innerHTML += `${HTMLfruitproduct(index)}`;
    }
    for (let index = 1; index <= 3; index++) {
        juiceDIV.innerHTML += `${HTMLjuiceproduct(index)}`;
        saladDIV.innerHTML += `${HTMLsalaproduct(index)}`;
    }
    if (localStorage.getItem("cart") == null) {

    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML = `[${products.length}]`;
    }
};