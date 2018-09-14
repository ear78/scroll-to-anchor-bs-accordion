/*
 * collapse menu scroll to anchor functionality
 */

$('div.card-block a.close-it').on('click', function (event) {
  var aTag = $(this).attr('href');// grab targeted <a></a> using .close-it class name tag on click

  // bootstrap callback fired when collapses it's accordion
  $('' + aTag + '').on('hide.bs.collapse', function () {

    var headerHeight = $('#header').height() + 50; // get header height to offset from top
    var anchorPoint = $(this).parent().find('.card-header').offset().top;// find header element per button

    //scroll to anchor point
    $('html,body').animate({
      scrollTop: anchorPoint - headerHeight + 'px'
    }, 'all 300ms ease-in-out');

  });
})
