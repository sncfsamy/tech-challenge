
window.addEventListener("DOMContentLoaded", (event) => {
    document
    .getElementsByClassName("logo")[0]
    .addEventListener("click", function () {
        window.location.href = "index.html";
    });
    var hero = document.getElementsByClassName("hero")[0];
    if (hero !== undefined) {
    let heroh1 = hero.getElementsByTagName("h1")[0];
    heroh1.addEventListener("animationend", function () {
        heroh1.classList.remove("animin");
    });
    }
    function sendMessage() {
    alert(
        "We have received your message !\r\n\r\nWe usually respond within 48 hours.\r\n\r\nThank you for your interest !"
    );
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName("mail")[0].value = "";
    document.getElementsByName("message")[0].value = "";
    }
    var submitbutton = document.getElementsByTagName("button")[0];
    if (submitbutton !== undefined) {
    submitbutton.addEventListener("click", sendMessage);
    }

    // JS Modal pour image de W3C, adapté pour div background et addEventListener
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    Array.prototype.forEach.call(
    document.getElementsByClassName("portrait"),
    function (div) {
        div.addEventListener("click", function () {
        modal.style.display = "block";
        let style = window.getComputedStyle(this, false);
        document.getElementById("img01").src = style.backgroundImage
            .slice(4, -1)
            .replace(/"/g, "");
        document.getElementById(
            "caption"
        ).innerHTML = this.parentElement.getElementsByTagName(
            "span"
        )[0].innerHTML;
        });
    }
    );
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    if (span !== undefined) {
    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", function () {
        modal.style.display = "none";
    });
    }

    /* auto adjust textarea size */
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
        tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
        this.style.height = 0;
        this.style.height = (this.scrollHeight) + "px";
    }
});