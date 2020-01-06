document.addEventListener("DOMContentLoaded", function () {
    // punkt 2
    console.log("Dziala");

    var showButton = document.getElementById("showButton");
    var hideButton = document.getElementById("hideButton");
    var tagInput = document.getElementById("tagInput");
    var tagInputValue = "";
    var list = document.querySelectorAll("#gallery img");

    console.log(showButton);
    console.log(hideButton);
    console.log(tagInput);
    console.log(list);

    // punkt 3, 4
    showButton.addEventListener("click", function () {
        console.log("klikniêto: " + this.id);
        tagInputValue = tagInput.value;
        tagInput.value = "";

        console.log(tagInputValue);
    });

    hideButton.addEventListener("click", function () {
        console.log("klikniêto: " + this.id);
        tagInputValue = tagInput.value;
        tagInput.value = "";

        console.log(tagInputValue);
    });
});
