$(window).on("load", function() {
  $(window)
    .scroll(function() {
      var bottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        var objBottom = $(this).offset().top - 350 + $(this).outerHeight();
        if (objBottom < bottom) {
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(500, 1);
          }
        } else {
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(500, 0);
          }
        }
      });
    })
    .scroll();
});
