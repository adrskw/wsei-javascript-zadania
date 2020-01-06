document.addEventListener("DOMContentLoaded", function () {
    // punkt 2
    console.log("Dziala");

    var menuList = document.querySelectorAll(".nav>ul>li");

    console.log(menuList);

    // punkt 3, 4, 5, 6, 7
    for (var i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener("mouseover", function () {
            let innerList = this.querySelector("ul");

            if (innerList !== null) {
                innerList.style.display = "block";
            } 
        });

        menuList[i].addEventListener("mouseout", function () {
            let innerList = this.querySelector("ul");

            if (innerList !== null) {
                innerList.style.display = "none";
            } 
        });
    }

    // punkt 8
    // strona poprawnie dzia³a, nie widzê ¿adnych problemów
});
