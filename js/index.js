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
      newContent += '</div>';
      newContent += '<h3><a href="' + news[i].link + '">' + news[i].headline + '</a></h3>';
      newContent += '<div class="mdl-card__supporting-text meta mdl-color-text--grey-600">';
      newContent += '<div class="minilogo"><a href="http://www.freecodecamp.com/' + news[i].author.username + '"><img class="avatar" src="' + news[i].author.picture + ')"></a></div>';
      newContent += '<div>';

      newContent += '<a class="author-link" href="http://www.freecodecamp.com/' + news[i].author.username + '"><strong>@' + news[i].author.username + '</strong></a>';
      newContent += '<span>' + jQuery.timeago(news[i].timePosted) + '</span>';
      newContent += '<span>' + news[i].rank + (news[i].rank > 1 ? " points" : " point") + '</span></div>';
      newContent += '<button class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--primary mdl-upvote-btn"><i class="material-icons mdl-color-text--white" role="presentation">arrow_upward</i><span class="visuallyhidden">arrow_upward</span></button>';
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
// -add upvote, rank, author and
// -sort by newest, rank, tag





$.ready(function() {
  var div = document.createElement('div');
  var alreadyUpvoted = false;

  $(div).find('.mdl-upvote-btn').each(function(idx, btn) {
    var $btn = $(btn);
    if (alreadyUpvoted) {
      $btn.addClass('disabled');
      $btn.text('upvoted!');
    }
    $btn.data('upVotes', news[i].upVotes);
  });



});
