$(function ($) {
    $(document).ready(function () {
      var $title = $('.title')
      var $timePosted = $('.time')
      var $link = $('.link')
      var $metaDescription = $('.meta')
      var $rank = $('.rank')
      var $upVotes = $('.upvotes')
      var $userId = $('.userId')
      var $tileImage = $('.tile-img')

      $(function getNews () {
        $.get('http://www.freecodecamp.com/news/hot', function (news) {
          // var title = news.headline
          // var link = news.link
          // var time = news.timePosted
          // var rank = news.rank
          // var upvotes = news.upvotes
          // var author = news.author
          // var userId = news.userId
          // var tileImage = news.image
          // var meta = news.metaDescription

          $title.text(news.headline)
          $link.append('href="' + news.link + '"')
          $tileImage.append('<img src=' + news.image + '>')
          console.log(news.headline)
        })
      })



    $('.ripple-effect').click(function (e) {
      var rippler = $(this)

      // create .ink element if it doesn't exist
      if (rippler.find('.ink').length === 0) {
        rippler.append("<span class='ink'></span>")
      }

      var ink = rippler.find('.ink')

      // prevent quick double clicks
      ink.removeClass('animate')

      // set .ink diametr
      if (!ink.height() && !ink.width()) {
        var d = Math.max(rippler.outerWidth(), rippler.outerHeight())
        ink.css({
          height: d,
          width: d
        })
      }

      // get click coordinates
      var x = e.pageX - rippler.offset().left - ink.width() / 2
      var y = e.pageY - rippler.offset().top - ink.height() / 2

      // set .ink position and add class .animate
      ink.css({
        top: y + 'px',
        left: x + 'px'
      }).addClass('animate')
    })
    })
})
