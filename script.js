$(function() {
   
	   $('.form-radio').on('change', 'input', function() {
	   
	    if($(this).val() === "join"){
	      $('.join-events').show('slow');
	      $('.create-events').hide('slow');
	    }
	     
	     else{
	      $('.join-events').hide('slow');
	      $('.create-events').show('slow');
	    }
	     
	   })         

	// if($('.terms').checked === false){

	// 	alert('You need')
	// }




});


// set up event select list with ajax and arrays