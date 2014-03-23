$(function() {
  function showSection(sectionName, scroll) {
    $('.js-section').hide();
    $('.js-section-' + sectionName).show();
    $('.js-button').removeClass('active');
    $('.js-button-' + sectionName).addClass('active');
    window.location.hash = sectionName;
    if (scroll) {
      $('html, body').scrollTop($('.js-toolbar').offset().top);
    }
  }

  if (window.location.hash) {
    showSection(window.location.hash.replace('#', ''), false);
  }

  $('.js-button-clicktarget').tooltip({
    container: 'body'
  }).click(function(e) {
    e.preventDefault();
    showSection($(this).data('section'), $(this).data('is-navbar'));
  });
  $('.js-toolbar').waypoint(function(direction) {
    $('.js-navbar').toggleClass('is-navbar-visible', direction === 'down');
  }, {
    offset: function() {
      return -2 * $(this).height();
    }
  });
});
