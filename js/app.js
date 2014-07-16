$(document).ready(function() {

	$('#input-add').on('click', 'button', function() {
		//alert('add button');
		var inputitem = $('#input-text').find('#list-input').val();
		var listitem = $('<li>'+inputitem+'</li>');
		$('.list-items').append(listitem);
		//$('.list-items').clear(inputitem);
		$('#list-input').val('');
	});




})