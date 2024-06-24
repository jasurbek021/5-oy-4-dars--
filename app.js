
function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

document.getElementById("button1").addEventListener("click", function() {
    changeBackground("lightblue");
});

document.getElementById("button2").addEventListener("click", function() {
    changeBackground("lightgreen");
});

document.getElementById("button3").addEventListener("click", function() {
    changeBackground("lightcoral");
});