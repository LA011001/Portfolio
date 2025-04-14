
let projectItems = document.querySelectorAll(".project-item");
projectItems.forEach(item => {
    item.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "0.3s";
    });
    item.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
});

let contactLinks = document.querySelectorAll(".contact a");
contactLinks.forEach(link => {
    link.addEventListener("mouseover", function () {
        this.style.color = "yellow";
    });
    link.addEventListener("mouseout", function () {
        this.style.color = "white";
    });
});