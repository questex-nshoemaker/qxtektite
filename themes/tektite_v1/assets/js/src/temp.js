// Story-grid switcher
$(document).ready(function() {
  $('.story-grid-5').addClass('active');
  $(".story-grid-switcher a.list").click(function() {
    $('.story-grid-list').toggleClass('active');
    $('.story-grid-5').removeClass('active');
    $('.story-grid-3').removeClass('active');
    $('.story-grid-list').addClass('active');
  });

  $(".story-grid-switcher a.three").click(function() {
    $('.story-grid-3').toggleClass('active');
    $('.story-grid-list').removeClass('active');
    $('.story-grid-5').removeClass('active');
    $('.story-grid-3').addClass('active');
  });

  $(".story-grid-switcher a.five").click(function() {
    $('.story-grid-5').toggleClass('active');
    $('.story-grid-list').removeClass('active');
    $('.story-grid-3').removeClass('active');
    $('.story-grid-5').addClass('active');
  });
});
