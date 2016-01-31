var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.addEventListener("load", reqListener);
xhr.open("GET", "http://www.freecodecamp.com/news/hot");
xhr.send();

function reqListener() {
  console.log(xhr.response[1].link);
  if (xhr.status === 200) {
    news = xhr.response;

    var newContent = '';
    for (var i = 0; i < news.length; i++) {

      newContent += '<a class="tile tile-lg tile-light-green ripple-effect" href="' + news[i].link + '">';
      newContent += '<span class="content-wrapper">';
      newContent += '<span class="tile-content">';
      newContent += '<span class="tile-img tile-img-bg" style="background-image: url(' + news[i].image + ');"></span>';
      newContent += '<span class="tile-holder tile-holder-sm">';
      newContent += '<span class="title">' + news[i].headline + '</span>';
      newContent += '</span></span></span></a>';
    }
    var content = document.getElementById('news');
    content.innerHTML = newContent;
  }
}


//ToDo
// -make default background image if none exists
// -assign colors of tiles to key words in title
// -assign tile size depending on title length
// -add upvote, rank, author and 


$(function($) {
  $('.ripple-effect').click(function(e) {
    var rippler = $($this);

    // create .ink element if it doesn't exist
    if (rippler.find('.ink').length === 0) {
      rippler.append("<span class='ink'></span>");
    }

    var ink = rippler.find('.ink');

    // prevent quick double clicks
    ink.removeClass('animate');

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
    }).addClass('animate');
  });
});
