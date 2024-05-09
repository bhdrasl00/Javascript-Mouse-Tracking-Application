var bebekler = document.getElementsByClassName("bebek");
console.log(bebekler);

document.onmousemove = function(event) {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";

    for (var i = 0; i < bebekler.length; i++) {
        bebekler[i].style.top = y;
        bebekler[i].style.left = x;
        bebekler[i].style.transform = "translate(" + x + "," + y + ")";
    }
};
