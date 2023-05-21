function addChar(letter) {
    var input = document.getElementById("display-input").value += letter;
}
function output() {
    document.getElementById("display-output").value = eval(document.getElementById("display-input").value);
}
function allclear() {
    document.getElementById("display-output").value = "";
    document.getElementById("display-input").value = "";
}
function removeChar() {
    document.getElementById("display-input").value = document.getElementById("display-input").value.slice(0, -1);
}