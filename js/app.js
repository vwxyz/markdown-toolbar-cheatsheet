$(function() {
  var currentSectionName = "";

  function showSection(sectionName, scroll) {
    reset();
    $('.js-section-' + sectionName).show();
    $('.js-button-' + sectionName).addClass('active');
    window.location.hash = currentSectionName = sectionName;
    if (scroll) {
      $('html, body').scrollTop($('.js-toolbar').offset().top);
    }
  }

  function reset() {
    $('.js-section').hide();
    $('.js-button').removeClass('active');
  }

  if (window.location.hash) {
    showSection(window.location.hash.replace('#', ''), false);
  }

  $('.js-button-clicktarget').tooltip({
    container: 'body'
  }).click(function(e) {
    e.preventDefault();
    var sectionName = $(this).data('section');
    if (sectionName === currentSectionName) {
      currentSectionName = "";
      window.location.hash = '';
      reset();
    } else {
      showSection(sectionName, $(this).data('is-navbar'));
    }
  });

  $('.js-toolbar').waypoint(function(direction) {
    $('.js-navbar').toggleClass('is-navbar-visible', direction === 'down');
  }, {
    offset: function() {
      return -2 * $(this).height();
    }
  });
});
