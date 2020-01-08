document.addEventListener("DOMContentLoaded", function () {
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    var totalPrice = document.getElementById("price");
    var submit = document.querySelector("form button");
    var price = 0;

    checkboxes[0].checked = false;
    checkboxes[checkboxes.length - 1].checked = false;

    submit.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Do zap³aty: " + price.toFixed(2) + " z³");
    });

    checkboxes[0].addEventListener("click", function () {
        if (this.checked === true) {
            for (var i = 1; i < checkboxes.length - 1; i++) {
                checkboxes[i].checked = true;

                calculatePrice();
            }
        }
    });

    checkboxes[checkboxes.length - 1].addEventListener("click", function () {
        if (this.checked === true) {
            for (var i = 0; i < checkboxes.length - 1; i++) {
                checkboxes[i].checked = false;

                calculatePrice();
            }
        }
    });

    for (var i = 1; i < checkboxes.length - 1; i++) {
        checkboxes[i].checked = false;

        checkboxes[i].addEventListener("change", calculatePrice);
    }

    function calculatePrice() {
        price = 0;

        for (var i = 1; i < checkboxes.length - 1; i++) {
            if (checkboxes[i].checked === true) {
                price += parseFloat(checkboxes[i].dataset.price);
            }
        }

        totalPrice.innerText = price.toFixed(2) + " z³";
    }
});