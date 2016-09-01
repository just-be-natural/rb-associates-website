//= require jquery/dist/jquery.min
//= require jquery.mb.ytplayer/dist/jquery.mb.YTPlayer
//= require bootstrap
//= require owl.carousel/dist/owl.carousel.min

//= require 'app'

$(document).ready(function() {
  $('.player').mb_YTPlayer();

  $('.owl-carousel').owlCarousel({
    items: 3,
    margin: 15,
    dots: true
  });
});
