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

    // punkt 3, 4, 5, 6, 7
    showButton.addEventListener("click", function () {
        console.log("klikniêto: " + this.id);
        tagInputValue = tagInput.value;
        tagInput.value = "";

        console.log("tag: " + tagInputValue);

        for (var i = 0; i < list.length; i++) {
            if (list[i].dataset.tag.indexOf(tagInputValue) >= 0) {
                list[i].classList.remove("invisible");
            }
            else {
                list[i].classList.add("invisible");
            }
        }
    });

    hideButton.addEventListener("click", function () {
        console.log("klikniêto: " + this.id);
        tagInputValue = tagInput.value;
        tagInput.value = "";

        console.log("tag: " + tagInputValue);

        for (var i = 0; i < list.length; i++) {
            if (list[i].dataset.tag.indexOf(tagInputValue) >= 0) {
                list[i].classList.remove("invisible");
            }
            else {
                list[i].classList.add("invisible");
            }
        }
    });
});
