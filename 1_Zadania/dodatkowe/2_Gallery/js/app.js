/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener("DOMContentLoaded", function () {
    // Punkt 2
    console.log("Działa");
    var list = document.querySelectorAll(".gallery ul li");
    var bodyTag = document.body;

    console.log(list);
    console.log(bodyTag);

    // Punkt 3
    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function () {
            // Punkt 4
            console.log(this.baseURI);
            // Punkt 5
            var fullScreenDiv = document.createElement("div");
            fullScreenDiv.className = "fullScreen";

            var image = document.createElement("img");
            image.src = this.children[0].getAttribute("src");
            fullScreenDiv.appendChild(image);

            var btn = document.createElement("button");
            btn.className = "close";
            btn.innerText = "Close";

            // Punkt 6
            btn.addEventListener("click", function () {
                document.getElementsByClassName("fullScreen")[0].remove();
            });

            fullScreenDiv.appendChild(btn);

            bodyTag.appendChild(fullScreenDiv);
        });
    }
    // Nie zauważyłem żadnych błędów w działaniu strony
});