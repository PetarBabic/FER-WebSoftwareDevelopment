const values = Object.values(localStorage);
const keys = Object.keys(localStorage);
updateCart();

var main = document.getElementById('articles');

for(let i = 0; i < values.length; i++) {
    const article = document.createElement("article");
    const plusBtn = document.createElement("button");
    const minusBtn = document.createElement("button");
    const plusIcn = document.createElement("img");
    plusIcn.setAttribute("src", "images/icons/plus.png");
    plusBtn.appendChild(plusIcn);
    const minusIcn = document.createElement("img");
    minusIcn.setAttribute("src", "images/icons/minus.png");
    minusBtn.appendChild(minusIcn);

    article.style.borderColor = randomColor();

    const btnCounterContainer = document.createElement("div");

    const value = document.createElement("div");
    value.innerHTML = values[i];
    const name = document.createElement("div");
    name.innerHTML = keys[i];

    plusBtn.onclick = () => {
        values[i] = parseInt(values[i]) + parseInt(1);
        localStorage.setItem(keys[i], values[i]);
        value.innerHTML = values[i];

        updateCart()
    }
    minusBtn.onclick = () => {
        values[i] = parseInt(values[i]) - parseInt(1);
        if(values[i] <= parseInt(0)) {
            localStorage.removeItem(keys[i]);
            article.remove();
        }
        else {
            localStorage.setItem(keys[i], values[i]);
            value.innerHTML = values[i];
        }

        updateCart()
    }

    btnCounterContainer.appendChild(plusBtn);
    btnCounterContainer.appendChild(value);
    btnCounterContainer.appendChild(minusBtn);

    article.appendChild(name);
    article.appendChild(btnCounterContainer);
    
    main.appendChild(article);
}

function updateCart() {
    var total = parseInt(0);

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