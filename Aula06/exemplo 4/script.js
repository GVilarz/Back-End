document.addEventListener("keydown", function(e) {
if (e.key === "r"){
    document.body.style.backgroundColor = "red"
} else if (e.key === "g") {
    document.body.style.backgroundColor = "green"
} else {
    document.body.style.backgroundColor = "blue"
}
})