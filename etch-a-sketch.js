$(document).ready(function() {
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
	$(this).css({"background-color": "black"})
}

function erase() {
	$(".box").css({"background-color": "white"})
}

$('#erase').on('click', erase);