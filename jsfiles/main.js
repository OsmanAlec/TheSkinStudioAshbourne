src="https://code.jquery.com/jquery-3.6.4.min.js"

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a:not(.no-scroll)").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(window).scroll(function () {
  // Check if the scroll position is at the bottom
  if ($(window).scrollTop() + $(window).height() + 100 >= $(document).height()){
    // Hide the button when at the bottom
    $('.fixed-bottom').fadeOut(); // Hide the button
  }

  else if ($(this).scrollTop() > 100) { // Adjust the scroll distance as needed
    $('.fixed-bottom').fadeIn(); // Show the button
  } 

  else {
    $('.fixed-bottom').fadeOut(); // Hide the button
  }
});

