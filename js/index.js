var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.addEventListener("load", reqListener);
xhr.open("GET", "http://www.freecodecamp.com/news/hot");
xhr.send();

function reqListener() {
  if (xhr.status === 200) {
    news = xhr.response;
    var newContent = '';
    for (var i = 0; i < news.length; i++) {

      newContent += '<div class="mdl-card mdl-cell mdl-cell--4" >';
      newContent += '<div class="mdl-card__media mdl-color-text--grey-50" style="background-image: url(' + news[i].image + ');">';
      newContent += '</div>';
      newContent += '<h3><a href="' + news[i].link + '">' + news[i].headline + '</a></h3>';
      newContent += '<div class="mdl-card__supporting-text meta mdl-color-text--grey-600">';
      newContent += '<div class="minilogo" onclick="authorPosts(' + news[i].author.userId + ');"><a href=""><img class="avatar" src="' + news[i].author.picture + ')"></a></div>';
      newContent += '<div>';
      newContent += '<a class="author-link" href="http://www.freecodecamp.com/' + news[i].author.username + '"><strong>@' + news[i].author.username + '</strong></a>';
      newContent += '<span>' + jQuery.timeago(news[i].timePosted) + '</span>';
      newContent += '<span>' + news[i].rank + (news[i].rank > 1 ? " votes" : " vote") + '</span></div>';
      newContent += '<button id="' + news[i].id + '" class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--primary mdl-upvote-btn"><i class="material-icons mdl-color-text--white btn" role="presentation">arrow_upward</i><span class="visuallyhidden">arrow_upward</span></button>';
      newContent += '</div>';
      newContent += '</div>';
      newContent += '</div>';
      newContent += '</div>';
    }
    content = document.getElementById('news');
    content.innerHTML = newContent;
  }
  //  else {
  //   var error = '<h1>"NO NEWS FOR YOU!"</h1>';
  //   content.innerHTML = error;
  // }
}

//http://www.freecodecamp.com/' + news[i].author.username + '
//ToDo
// -make default background image if none exists
// -assign colors of tiles to key words in title
// -add upvote, rank, author and
// -sort by newest, rank, tag
$(document).ready(function() {


  function authorPosts(name) {
    name = Id;
    console.log(Id);
  //   $.getJSON("http://www.freecodecamp.com/news/hot", function(json) {
  //     var authorContent = '';
  //     json = json.filter(function() {
  //       return (author.userId === Id);
  //     });
  //
  //     json.forEach(function() {
  //       authorContent += '<div class="mdl-card mdl-cell mdl-cell--4" >';
  //       authorContent += '<div class="mdl-card__media mdl-color-text--grey-50" style="background-image: url(' + news[i].image + ');">';
  //       authorContent += '</div>';
  //       authorContent += '<h3><a href="' + news[i].link + '">' + news[i].headline + '</a></h3>';
  //       authorContent += '<div class="mdl-card__supporting-text meta mdl-color-text--grey-600">';
  //       authorContent += '<div class="minilogo"><a href="http://www.freecodecamp.com/' + news[i].author.username + '"><img class="avatar" src="' + news[i].author.picture + ')"></a></div>';
  //       authorContent += '<div>';
  //       authorContent += '<a class="author-link" href="http://www.freecodecamp.com/' + news[i].author.username + '"><strong>@' + news[i].author.username + '</strong></a>';
  //       authorContent += '<span>' + jQuery.timeago(news[i].timePosted) + '</span>';
  //       authorContent += '<span>' + news[i].rank + (news[i].rank > 1 ? " votes" : " vote") + '</span></div>';
  //       authorContent += '<button id="' + news[i].id + '" class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--primary mdl-upvote-btn"><i class="material-icons mdl-color-text--white btn" role="presentation">arrow_upward</i><span class="visuallyhidden">arrow_upward</span></button>';
  //       authorContent += '</div>';
  //       authorContent += '</div>';
  //       authorContent += '</div>';
  //       authorContent += '</div>';
  //     });
  //     var content = document.getElementById('news');
  //     content.innerHTML = authorContent;
  //   });
  //
  }
});
