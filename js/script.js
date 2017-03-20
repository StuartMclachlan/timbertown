$(function() {
   
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
	});

});