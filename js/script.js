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


  $('form').submit(function(event) {
    event.preventDefault();
  })

  $('.form-submit').on('click', function() {
 
    if ($('.terms input').prop('checked') == false)

      alert("Sorry, you've got to accept the terms and conditions");
  })

  // $('.form-submit').on('click', function() {
 
  //   if ($('.form-radio input').prop('checked') == false)

  //     alert("Please select whether you want to join or create an event!");
  // })

  // createelemement <p>
  // appendclass termswarning

  // else ($('.terms input').prop('checked') == true)
  //   hide class 'termswarning'


});