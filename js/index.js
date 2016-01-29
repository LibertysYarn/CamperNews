$(document).ready(function() {
  getNews();
  var $title = $('.title')
  var $timePosted = $('.time')
  var $link = $('.link')
  var $metaDescription = $('.meta')
  var $rank = $('.rank')
  var $upVotes = $('.upvotes')
  var $userId = $('.userId')
  var $img = $('.title-img');

  function getNews() {
    $.get('http://www.freecodecamp.com/news/hot', function(hotNews) {
      var title = hotNews.headline;
      var link = hotNews.link;
      var time = hotNews.timePosted;
      var rank = hotNews.rank;
      var upvotes = hotNews.upvotes.length;
      var author = hotNews.author;
      var userId = hotNews.userId;
      var img = hotNews.image;
      var meta = hotNews.metaDescription;

      $title.text(title);
      $link.text(link);
      $img.append("<img src="img">");
      console.log(title);


    }, 'jsonp')
  }





)
})


(function($) {
  $(".ripple-effect").click(function(e) {
    var rippler = $(this);

    // create .ink element if it doesn't exist
    if (rippler.find(".ink").length == 0) {
      rippler.append("<span class='ink'></span>");
    }

    var ink = rippler.find(".ink");

    // prevent quick double clicks
    ink.removeClass("animate");

    // set .ink diametr
    if (!ink.height() && !ink.width()) {
      var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
      ink.css({
        height: d,
        width: d
      });
    }

    // get click coordinates
    var x = e.pageX - rippler.offset().left - ink.width() / 2;
    var y = e.pageY - rippler.offset().top - ink.height() / 2;

    // set .ink position and add class .animate
    ink.css({
      top: y + 'px',
      left: x + 'px'
    }).addClass("animate");
  })
})(jQuery);


}
