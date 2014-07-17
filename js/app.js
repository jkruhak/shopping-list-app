$(document).ready(function() {

	//add list item using 'got it' button
	$('#input-add').on('click', 'button', function() {
		//alert('add button');
		var inputitem = $('#input-text').find('#list-input').val(); //declares input field item
		var listitem = $('<li>'+inputitem+'</li>'); //adds li to item
		$('.list-items').append(listitem); //adds item to the list
		$('#list-input').val(''); //clears input field
		//add .edit-buttons
	});

	//add list item using 'enter' key
	$('#input').keyup(function(event) {
		var inputitem = $('#input-text').find('#list-input').val();
		var listitem = $('<li>'+inputitem+'</li>');
		if (event.which == '13') {
			$('.list-items').append(listitem); 
			$('#list-input').val('');
		}
	});

	//remove item from list on mouse click
	$('#notepad').on('dblclick', 'li', function() {
		$(this).remove();
	});

	//strike through item
	$('#notepad').on('click', 'li', function() {
		$(this).css({'text-decoration': 'line-through'});
	});

})