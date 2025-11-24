window.onload = function() {
    var add = this.document.getElementById("add");
    add.onclick = addSquare;
    // 1 add color button
    var colorsbutton = this.document.getElementById("colors");
    colorsbutton.onclick = changeColors;
    var squarearea = document.getElementById("squarearea");
    var squareCount = parseInt(Math.random() *21)+30




for (let i = 0; i < squareCount; i++) {
    var newSquare = document.createElement("div");
    newSquare.className = "square";
    newSquare.style.left = parseInt(Math.random() * 651) + "px";
    newSquare.style.top = parseInt(Math.random() * 251) + "px";
    newSquare.style.backgroundColor = getRandonColor();
    squarearea.appendChild(newSquare);}

}
        
function getRandonColor() {
    var possibilities  = "0123456789ABCDEF";
    var result = "#";
    for (var i = 0 ; i < 6; i++) {
        result += possibilities.charAt(parseInt(Math.random() * possibilities.length));}
    return result;
};

function addSquare() {
    var squarearea = document.getElementById("squarearea");
    var newSquare = document.createElement("div");
    newSquare.className = "square";
    newSquare.style.left = parseInt(Math.random() * 651) + "px";
    newSquare.style.top = parseInt(Math.random() * 251) + "px";
    newSquare.style.backgroundColor = getRandonColor();
    // 5) random square size 
    newSquare.style.width = parseInt(Math.random() * 10) + 45 + "px";
    newSquare.style.height = parseInt(Math.random() * 10) + 45 + "px";
    squarearea.appendChild(newSquare);
}

function changeColors() {
    //2  Look for all the squares and change their colors.
    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = getRandonColor();
    }
}