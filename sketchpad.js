function drawGrid (x, y, color) {
	

	color = "black";

	for (var i = 0; i < y; i++) {
		
		$('#grid').append('<div id="row' + i + '" class="grid-row"></div>');

		for (var j = 0; j < x; j++) {
			$('#row' + i).append('<div id="' + j + 'x' + i + '" class="grid-square"></div>');
		}
	}

	$('.grid-square').css("width", (500 / x) - 2);
	$('.grid-square').css("height", (500 / y) - 2);

	
    // TODO: Alter grid background directly, so that it can be done with different colours 
	$('.grid-square').hover( function () {
		console.log($(this).css);
		$( this ).css("background-color", color);
	});

}

function reset () {
	
	var size = 0;
	do {
		size = prompt("Please enter new grid size (min: 2, max: 64) : ");
	} while (size < 2 || size > 64)
	
	$('#grid').html("");
	drawGrid(size, size);
}

function changeColor () {
	color = prompt("Enter a valid CSS color");
	$('.grid-square').hover( function () {
		console.log($(this).css);
		$( this ).css("background-color", color);
	});
}

$(document).ready( function () {

	drawGrid(32, 32);
	$('#reset').click(reset);
	$('#changeColor').click(changeColor);	
});

