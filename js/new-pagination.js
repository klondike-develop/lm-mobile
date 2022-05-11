$(document).ready(function() {
    $(window).scroll(function (e) {
        if ($(this).scrollTop() > 0) {
          $('#scroller').fadeIn();
        } else {
          $('#scroller').fadeOut();
        }
      });
      $('#scroller').click(function (e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 400);
      });
    
});