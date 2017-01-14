function drawGrid (x, y) {
	
	for (var i = 0; i < y; i++) {
		
		$('#grid').append('<div id="row' + i + '" class="grid-row"></div>');

		for (var j = 0; j <= x; j++) {
			$('#row' + i).append('<div id="' + j + 'x' + i + '" class="grid-square"></div>');
		}
	}

	$('.grid-square').hover( function () {
		$( this ).addClass('active-square');
	});

}

function reset () {
	
	var size = 0;
	do {
		size = prompt("Please enter new grid size (min: 2, max: 50) : ");
	} while (size < 2 || size > 50)
	
	$('#grid').html("");
	drawGrid(size, size);
}

$(document).ready( function () {

	drawGrid(32, 32);
	$('#reset').click(reset);	
});

