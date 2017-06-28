let rss = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.freecodecamp.com%2Ffeed&api_key=l2geiepib5t1z0vtapwkilcxrtz3q2gsc0olmm3h&order_by=pubDate&count=20";
let content = document.getElementById('news');

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var news = JSON.parse(xhr.responseText);
    if (news.status == 'ok') {
      var newContent = '';
      for (var i = 0; i < news.items.length; i++) {

        newContent += '<div class="mdl-card mdl-cell mdl-cell--4" >';
        newContent += '<div class="mdl-card__media mdl-color-text--grey-50 nimg" style="background: url(' + randImg() + ') center center no-repeat;">';
        newContent += '</div>';
        newContent += '<h3><a href="' + news.items[i].guid + '">' + news.items[i].title + '</a></h3>';
        newContent += '<div class="mdl-card__supporting-text meta md+l-color-text--grey-600">';
        newContent += '<div class="minilogo" onclick="authListener(' + news.items[i].author + ');"><a href="' + news.feed.link + '"><img class="avatar" src="' + news.feed.image + '"></a></div>';
        newContent += '<div>';
        newContent += '<a class="author-link" href="http://www.freecodecamp.com/' + news.items[i].author + '"><strong>@' + news.items[i].author + '</strong></a>';
        newContent += '<span>' + jQuery.timeago(news.items[i].pubDate) + '</span></div>';
        // newContent += '<span>' + news.items[i].score + (news.items[i].score > 1 ? " votes" : " vote") + '</span></div>';
        // newContent += '<button id="' + news.items[i].id + '" class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--primary mdl-upvote-btn"><i class="material-icons mdl-color-text--white btn" role="presentation">arrow_upward</i><span class="visuallyhidden">arrow_upward</span></button>';
        newContent += '<button id="controller-selector" class="mdl-button mdl-js-button mdl-button--icon"><i class="material-icons" role="presentation">more_vert</i></button>';
        newContent += '<ul class="mdl-menu mdl-menu--top-right mdl-js-menu" data-mdl-for="menu-top-right">';
        (news.items[i].categories).map(e =>  newContent += '<li class="mdl-menu__item"><a href="https://medium.com/topic/' + e + '">' + e + '</a></li>');
        newContent += '</ul></div></div>';
        newContent += '</div>';
        newContent += '</div>';
        newContent += '</div>';
        newContent += '</div>';
      }

      content.innerHTML = newContent;

      function catChips() {
        let chips = (news.items[i].categories).map(function(e) {
          console.log(e);
          return 'newContent += <span class="mdl-chip"><span class="mdl-chip__text">' + e + '</span></span>';
        })
      }

      function randImg() {
        let imgNum = getRandomInt(1, 33);
        let urlVar = 'http://libertymontano.com/FCCfiles/CamperNews/img/mat/' + imgNum + '.png';
        let descToString = JSON.stringify(news.items[i].description);
        let jsonImg = descToString.split('"');
        let img = jsonImg[4];
        // console.log(img.slice(0, -1));
        let myRegExp = /^https?:\/\/.*\.(?:jpe?g|gif|png)/;
        let urlToValidate = img.slice(0, -1);
        if (!myRegExp.test(urlToValidate)) {
          return urlVar;
        } else {
          return img.slice(0, -1);
        }

        $('.nimg').error(function() {
          $(this).addClass('noImg');
        });

      }

      function getRandomInt(min, max) {
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
      }

    }
  }
};
xhr.open('GET', rss, true);
xhr.send();


// function authListener(id) {
//     var byUserId = JSON.search(news, '//*[contains(userId, "id")]');
//     var htm = Defiant.render('author_template', byUserId);
//     document.getElementById('news').innerHTML = htm;
// }



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

//https://getpocket.com/v3/add  url  title
// $.post('https://getpocket.com/v3/oauth/request',{'consumer_key': 'insert here', 'redirect_uri': 'http://freecodecamp.com/news'},function(data){
// 		$('pocket').html("result: "+data);
// 	},"json");

//consumer_key
//access_token
//http://twitter.com/intent/tweet?text= title url
//
