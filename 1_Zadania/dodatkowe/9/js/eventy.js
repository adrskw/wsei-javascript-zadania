document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("article a");

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
            this.parentNode.querySelector(".content").style.display = "block";
        });
    }
});
