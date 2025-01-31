var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

window.addEventListener('load', function() {
    var activeCollapsibles = document.querySelectorAll('.active');
    activeCollapsibles.forEach(function(collapsible) {
        var content = collapsible.nextElementSibling;
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = 1;
    })
})