$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(300);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(300);
  });