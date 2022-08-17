jQuery(document).ready(function($){
  
  
  // Hide the extra content initially, using JS so that if JS is disabled, no problemo:
$('.read-more-content1').addClass('hide')
$('.read-more-show1, .read-more-hide1').removeClass('hide')

// Set up the toggle effect:
$('.read-more-show1').on('click', function(e) {
  $(this).next('.read-more-content1').removeClass('hide');
  $(this).addClass('hide');
  e.preventDefault();
});

// Changes contributed by @diego-rzg
$('.read-more-hide1').on('click', function(e) {
  var p = $(this).parent('.read-more-content1');
  p.addClass('hide');
  p.prev('.read-more-show1').removeClass('hide'); // Hide only the preceding "Read More"
  e.preventDefault();
});
  
  
  
  $(".accordion_head").click(function() {
    if ($('.accordion_body').is(':visible')) {
      $(".accordion_body").slideUp(300);
      $(".plusminus").text('+');
    }
    if ($(this).next(".accordion_body").is(':visible')) {
      $(this).next(".accordion_body").slideUp(300);
      $(this).children(".plusminus").text('+');
    } else {
      $(this).next(".accordion_body").slideDown(300);
      $(this).children(".plusminus").text('-');
    }
  });
   $(".main-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:4000,
    arrows:false
  });
  $(".announcement-bar__message").each(function(){
  $(this).removeClass("hide");
  });
  
  
  
});