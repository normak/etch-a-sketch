$(document).ready(function() {
	colorize = false;
	createGrid();
	$(".box").hover(draw);
});

function createGrid() {
	$('#grid').empty();
	for (var i =0; i < 1170; i++) {
		$("#grid").append("<div class='box'></div>");

	}
}

function draw() {
	
	if (colorize) {
		$(this).css({"background-color": getRandomColor()})
	}
	else {
		$(this).css({"background-color": "black"})
	}
}

function erase() {
	$(".box").css({"background-color": "white"})
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setColorize() {
	if (colorize) {
		colorize = false;
	}
	else {
		colorize = true;
	}
}

$('#erase').on('click', erase);
$('#colorize').on('click', setColorize);
