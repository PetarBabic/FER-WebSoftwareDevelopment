//Appending categories to the sidebar
changeCategory(data[0])
updateCart();
{
    for(const category of data) {
        const ul = document.getElementById("categories");
        const li = document.createElement("li");
        const link = document.createElement("a");

        link.style.color = "black";
        link.style.textDecoration = "none";

        li.setAttribute("id", category.name);

        if(category.name === data[0].name) {
            li.style.backgroundColor = "whitesmoke";
            li.style.fontWeight = "bold";
        }

        link.onclick = () => {
            for(category2 of data) {
                const tmp = document.getElementById(category2.name)
                tmp.style.fontWeight = "normal";
                tmp.style.backgroundColor = null;
            }

            li.style.backgroundColor = "whitesmoke";
            li.style.fontWeight = "bold";
            changeCategory(category);
            return false;
        }

        link.setAttribute('href', 'index.html');
        link.appendChild(document.createTextNode(category.name));
        li.appendChild(link);
        ul.appendChild(li);
    }
}

function changeCategory(category) {
    var header = document.getElementById("current-category");
    header.innerHTML = category.name;

    var productList = document.getElementById("productsId");
    productList.innerHTML = '';

    for(const product of category.products) {
        const div = document.createElement("div");
        const productImage = document.createElement("img");
        const addToCartImage = document.createElement("img");
        const button = document.createElement("button");
        const counter = document.createElement("div");
        counter.className = "counter";
        counter.style.visibility = 'hidden';

        if(localStorage.getItem(product.name) != null) {
            counter.innerHTML = localStorage.getItem(product.name);
            counter.style.visibility = 'visible';
        }

        div.style.borderColor = randomColor();

        button.onclick = () => {
            if(localStorage.getItem(product.name) != null)
                localStorage.setItem(product.name, parseInt(localStorage.getItem(product.name)) + 1);
            else
                localStorage.setItem(product.name, 1);

            counter.innerHTML = localStorage.getItem(product.name);
            counter.style.visibility = 'visible';
            updateCart();
        }
        button.appendChild(addToCartImage);
        productImage.setAttribute("src", "images/products/".concat(product.image));
        addToCartImage.setAttribute("src", "images/icons/addToCart.png");
        
        const productText = document.createElement("div");
        productText.setAttribute("class", "productText");

        productText.innerHTML = "<b>".concat(product.name).concat("</b>.<br>").concat(category.name);

        const divImage = document.createElement("div");
        divImage.appendChild(productImage);
        divImage.appendChild(button);
        divImage.appendChild(counter);
        div.appendChild(divImage);
        // div.appendChild(productImage);
        // div.appendChild(button);
        // div.appendChild(counter);
        div.appendChild(productText);
        
        productList.appendChild(div);
        div.setAttribute("class", "product");
    }
}

function updateCart() {
    var total = parseInt(0);

    // = {...localStorage};
    const values = Object.values(localStorage);
    for(value of values) {
        total += parseInt(value);
    }

    if(total == 0)
        document.getElementById("cartCounter").style.visibility = 'hidden';
    else {
        document.getElementById("cartCounter").style.visibility = 'visible';
        document.getElementById("cartCounter").innerHTML = total;
    }
}

function randomColor() {
    var colors = ["Red", "Green", "Blue", "Black", "Salmon", "Gold"];

    return colors[getRandomInt(colors.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}