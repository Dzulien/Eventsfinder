$(document).ready(function() {

    /*** Scripty sem ***/

    $('.js-submenu-mobile').on('click', function(){
    	$(this).find('.js-more').toggle();
    });

	 /* Fixed menu */
      $(window).on('scroll', function() {
    if ($(window).scrollTop() > 60) {
      $("nav").addClass("fixed-menu");
    } else {
      $("nav").removeClass("fixed-menu");
    }
  });

});