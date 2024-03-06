var canvas = document.getElementById('backgammon-canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * 0.6;
canvas.height = window.innerHeight * 0.6;

var board;

function setup() {
    board = new Board();
}

function display() {
    board.display();
}

setup();
display();