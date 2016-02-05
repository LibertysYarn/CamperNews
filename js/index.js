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
      newContent += '<div class="mdl-card__media mdl-color-text--grey-50" style="background-image: url(' + randImg(news[i].image) + ');">';
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






    function randImg() {
      var imgNum = getRandomInt();
      var myRegExp = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
      var urlToValidate = news[i].image;
      if (!myRegExp.test(urlToValidate)) {
        return 'http://libertymontano.com/FCCfiles/CamperNews/img/landscape/' + imgNum + '.jpg';
      } else {
        return news[i].image;
      }
    }

    function getRandomInt() {
      var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
      var random = [];
      for (var i = a; i = a.length; i--) {
        var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        return random;
      }

    }

  }
}


//http://www.freecodecamp.com/' + news[i].author.username + '
//ToDo
// -make default background image if none exists
// -assign colors of tiles to key words in title
// -add upvote, rank
// -sort by newest, rank -nav bar or button?
// -floating back to top button
// -footer with typical stuff
// -pull number of comments?
// -get posts by user posted
// -mouseover votes in upvote button
// -social share and 'add to pocket'
// -pull down to refresh - already there?
// -use upvote to poll

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


//https://getpocket.com/v3/add  url  title
// $.post('https://getpocket.com/v3/oauth/request',{'consumer_key': 'insert here', 'redirect_uri': 'http://freecodecamp.com/news'},function(data){
// 		$('pocket').html("result: "+data);
// 	},"json");



//consumer_key
//access_token
//http://twitter.com/intent/tweet?text= title url
//
