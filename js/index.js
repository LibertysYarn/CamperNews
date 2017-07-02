function randImg(imgVar) {
  let imgNum = getRandomInt(1, 33);
  let urlVar = 'http://libertymontano.com/FCCfiles/CamperNews/img/mat/' + imgNum + '.png';

  let myRegExp = /^https?:\/\/.*\.(?:jpe?g|gif|png)/;
  if (!myRegExp.test(imgVar)) {
    return urlVar;
  } else {
    return imgVar;
  }

  $('.nimg').error(function() {
    $(this).addClass('noImg');
  });

}

function getRandomInt(min, max) {
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

let apiRequest1 = fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.freecodecamp.com%2Ffeed&api_key=l2geiepib5t1z0vtapwkilcxrtz3q2gsc0olmm3h&order_by=pubDate&count=20').then((response) => response.json())
  .then(function(data) {
    let newMed = data.results;
    return newMed.map(function(news) {
      let itemURL = news.items.guid,
        itemTitle = news.items.title,
        author = news.items.author,
        feedLink = news.feed.link,
        feedImg = news.feed.image,
        pubDate = news.items.pubDate,
        category = news.items.categories,
        descToString = JSON.stringify(news.items.description),
        jsonImg = descToString.split('"'),
        img = jsonImg[4],
        finalImg = randImg(img.slice(0, -1));

    }).catch(function(error) {
      console.log(error);
    })
  });

let apiRequest2 = fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC8butISFwT-Wl7EV0hUK0BQ&maxResults=10&order=date&type=video&key=AIzaSyB_pv93cd3WwdCT0AeI92xzC2KM4U9p1Q0').then((response) => response.json())
  .then(function(data) {
    let video = data.results;
    return video.map(function(videos) {
      let itemURL = 'https://youtube.com/watch?v=' + video.items.videoId;
       itemTitle = videos.snippet.title,
       author = videos.snippet.channelTitle,
      // let feedLink = news.feed.link;
       feedImg = videos.snippet.image,
       pubDate = videos.snippet.publishedAt,
      // let category = news.items.categories;
       finalImg = randImg(videos.snippet.medium.url);

    }).catch(function(error) {
      console.log(error);
    })
  });

let combinedData = {
  "apiRequest1": {},
  "apiRequest2": {}
};
Promise.all([apiRequest1, apiRequest2]).then(function(values) {
  combinedData["apiRequest1"] = values[0];
  combinedData["apiRequest2"] = values[1];
  console.log(combinedData);
  return combinedData;
});



let rss = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.freecodecamp.com%2Ffeed&api_key=l2geiepib5t1z0vtapwkilcxrtz3q2gsc0olmm3h&order_by=pubDate&count=20";
let content = document.getElementById('news');

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var news = JSON.parse(xhr.responseText);
    if (news.status == 'ok') {
      var newContent = '';
      for (var i = 0; i < news.items.length; i++) {

        newContent += '<div class="card" >';
        newContent += '<div class="card-image waves-effect waves-block waves-light">';
        newContent += '<img class="activator reponsive-img nimg" src=' + randImg() + ' style="center center no-repeat;">';
        newContent += '</div>';
        newContent += '<div class="card-content">';
        newContent += '<span class="card-title activator grey-text text-darken-4"><a href="' + news.items[i].guid + '">' + news.items[i].title + '</a><i class="material-icons right">more_vert</i></span>';
        newContent += '</div>';
        newContent += '<div class="card-reveal">';
        newContent += '<div><span class="card-title grey-text "><a href="' + news.items[i].guid + '">' + news.items[i].title + '</a>'
        newContent += '<div class="minilogo" onclick="authListener(' + news.items[i].author + ');"><a href="' + news.feed.link + '"><img class="avatar" src="' + news.feed.image + '"></a>';
        // newContent += '<div>';
        newContent += '<span class="block"><span class="author-container"><a class="author-link author-item" href="http://www.freecodecamp.com/' + news.items[i].author + '">@' + news.items[i].author + '</a>';
        newContent += '<span class="timeago author-it">  /  ' + jQuery.timeago(news.items[i].pubDate) + '</span></div>';
        (news.items[i].categories).map(e => newContent += '<div class="chip chip-text"><a href="https://medium.com/topic/' + e + '">' + e + '</a></div>');
        newContent += '<i class="material-icons right">close</i></div>';
        // newContent += '<span>' + news.items[i].score + (news.items[i].score > 1 ? " votes" : " vote") + '</span></div>';
        // newContent += '<button id="' + news.items[i].id + '" class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--primary mdl-upvote-btn"><i class="material-icons mdl-color-text--white btn" role="presentation">arrow_upward</i><span class="visuallyhidden">arrow_upward</span></button>';

        newContent += '</div>';
        newContent += '</div>';
        newContent += '</div>';
      }

      content.innerHTML = newContent;

      // function randImg() {
      //   let imgNum = getRandomInt(1, 33);
      //   let urlVar = 'http://libertymontano.com/FCCfiles/CamperNews/img/mat/' + imgNum + '.png';
      //
      //   let myRegExp = /^https?:\/\/.*\.(?:jpe?g|gif|png)/;
      //   if (!myRegExp.test(urlToValidate)) {
      //     return urlVar;
      //   } else {
      //     return urlToValidate;
      //   }
      //
      //   $('.nimg').error(function() {
      //     $(this).addClass('noImg');
      //   });
      //
      // }
      //
      // function getRandomInt(min, max) {
      //   var random = Math.floor(Math.random() * (max - min + 1)) + min;
      //   return random;
      // }

    }
  }
};
xhr.open('GET', rss, true);
xhr.send();

$('.button-collapse').sideNav({
  menuWidth: 300, // Default is 300
  edge: 'left', // Choose the horizontal origin
  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: true, // Choose whether you can drag to open on touch screens
});





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
