$(function() {
   
// Form functions

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


  $('form').submit(function(event) {
    event.preventDefault();
  })

  $('.form-submit').on('click', function() {
 
    if ($('.terms input').prop('checked') == false) {
      $('.terms-alert').slideDown(600);
    }

    else{
      $('.terms-alert').slideUp(600);
    }

  })


// Smooth scrolling

  $('a').on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        window.location.hash = hash;
      });
    }
  });


});