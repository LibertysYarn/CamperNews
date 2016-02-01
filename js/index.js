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


      newContent += '<div class="mdl-card mdl-cell mdl-cell--4" >';
      newContent += '<div class="mdl-card__media mdl-color-text--grey-50" style="background-image: url(' + news[i].image + ');">';
      newContent += '<h3><a href="' + news[i].link + '">' + news[i].headline + '</a></h3>';
      newContent += '</div>';
      newContent += '<div class="mdl-card__supporting-text meta mdl-color-text--grey-600">';
      newContent += '<div class="minilogo"><a href="http://www.freecodecamp.com/' + news[i].author.username + '"><img class="avatar" src="' + news[i].author.picture + ')"></a></div>';
      newContent += '<div>';
      newContent += '<button class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--colored"><i class="material-icons mdl-color-text--white" role="presentation">arrow_upward</i><span class="visuallyhidden">arrow_upward</span></button>'
      newContent += '<a class="author-link" href="http://www.freecodecamp.com/' + news[i].author.username + '"><strong>' + news[i].author.username + '</strong></a>';
      newContent += '<span>' + jQuery.timeago(news[i].timePosted) + '</span>';
      newContent += '</div>';
      newContent += '</div>';
      newContent += '</div>';
      newContent += '</div>';


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
// -sort by newest, rank, tag
// -figure out where to put "mdl-menu--bottom-right"




  $.ready(function($) {
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
