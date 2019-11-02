var tCost = parseFloat(document.getElementById('shirt').value);
var sweatCost = parseFloat(document.getElementById('sweater').value);
var sleeveCost = parseFloat(document.getElementById('sleeveless').value);
var poloCost = parseFloat(document.getElementById('polo').value);

var xsCost = parseFloat(document.getElementById('XS').value);
var sCost = parseFloat(document.getElementById('S').value);
var mCost = parseFloat(document.getElementById('M').value);
var lCost = parseFloat(document.getElementById('L').value);
var xlCost = parseFloat(document.getElementById('XL').value);
var xxlCost = parseFloat(document.getElementById('XXL').value);
var xxxlCost = parseFloat(document.getElementById('XXXL').value);

var subtot = 0;
var tx = 0;
var tot = 0;

// event listeners for the button functions
document.getElementById("add2Cart").addEventListener("click", add2Cart);
document.getElementById("clearCart").addEventListener("click", clearCart);
document.getElementById("clear").addEventListener("click", clearCart);
document.getElementById("submit").addEventListener("submit", validateForm);

function shirtSizeCost() {
    
    // selecting XS
    if (document.getElementById('size').selectedIndex == 0) {
        sz = 'XS';
        return xsCost;
    }
    // selecting S
    if (document.getElementById('size').selectedIndex == 1) {
        sz = 'S';
        return sCost;
    }
    // slecting M
    if (document.getElementById('size').selectedIndex == 2) {
        sz = 'M';
        return mCost;
    }
    // selecting L
    if (document.getElementById('size').selectedIndex == 3) {
        sz = 'L';
        return lCost;
    }
    // Selecting XL
    if (document.getElementById('size').selectedIndex == 4) {
        sz = 'XL';
        return xlCost
    }
    // Selecting XXL
    if (document.getElementById('size').selectedIndex == 5) {
        sz = 'XXL';
        return xxlCost;
    }
    // Selecting XXXL
    if (document.getElementById('size').selectedIndex == 6) {
        sz = 'XXXL';
        return xxxlCost;
    
    }
}

function totalCost() {
    if (document.getElementById('shirt').checked) {
        subtot = subtot + (document.getElementById('quantity').selectedIndex + 1) * (tCost + shirtSizeCost());
    }

    if (document.getElementById('sweater').checked) {
        subtot = parseFloat(subtot + (parseInt(document.getElementById('quantity').selectedIndex) + 1) * (sweatCost + shirtSizeCost()));
    }

    if (document.getElementById('sleeveless').checked) {
        subtot = parseFloat(subtot + (parseInt(document.getElementById('quantity').selectedIndex) + 1) * (sleeveCost + shirtSizeCost()));
    }

    if (document.getElementById('polo').checked) {
        subtot = parseFloat(subtot + (parseInt(document.getElementById('quantity').selectedIndex) + 1) * (poloCost + shirtSizeCost()));
    }

    tx = parseFloat(subtot * 0.13);
    tot = parseFloat(subtot + tx);
    return tot;
}

function add2Cart() {

    totalCost();

    if (document.getElementById('cart').innerHTML == 'Empty Cart') {
        document.getElementById('cart').innerHTML = 'Items: <br>';
    }

    if (document.getElementById('shirt').checked) {
        document.getElementById('cart').innerHTML += "T-Shirt " + '(' + sz + ')' + ' ';
    }

    if (document.getElementById('sweater').checked) {
        document.getElementById('cart').innerHTML += "Sweater " + '(' + sz + ')' + ' ';
    }

    if (document.getElementById('sleeveless').checked) {
        document.getElementById('cart').innerHTML += "Sleeveless " + '(' + sz + ')' + ' ';
    }

    if (document.getElementById('polo').checked) {
        document.getElementById('cart').innerHTML += "Polo " + '(' + sz + ')' + ' ';
    }

    document.getElementById('cart').innerHTML += "Quantity: " + (document.getElementById('quantity').selectedIndex + 1) + "<br>";

    document.getElementById('subtotal').innerHTML = "$ " + subtot.toFixed(2);
    document.getElementById('tax').innerHTML = '$ ' + tx.toFixed(2);
    document.getElementById('total').innerHTML = '$ ' + tot.toFixed(2);
}

function clearCart() {

    document.getElementById('cart').innerHTML = 'Empty Cart';
    document.getElementById('subtotal').innerHTML = '$ 0.00';
    document.getElementById('tax').innerHTML = '$ 0.00';
    document.getElementById('total').innerHTML = '$ 0.00';
    subtot = 0;
    tx = 0;
    tot = 0;
}

function validateForm() {
    var inputs = document.forms['shirtForm'].elements['input'];
    var valid = true;
    
    // looking for blank fields
    for(i = 0; i < inputs.length; i++ ) {
        if(inputs[i].value == ''){
            inputs[i].style.borderColor = 'red';
            inputs[i].style.borderWidth = '1px';
            valid = false;
        }
    }

    if (valid == false) {
        alert("Blank Field(s), please fill out properly.")
        return false;
    }

    return true;
}

function submitButton() {

    valid = validateForm();
    
    if (valid == true) {
        alert("Form submitted!")
        return true;
    }

    return false;
}

function clearButton() {
    clearCart();
}
