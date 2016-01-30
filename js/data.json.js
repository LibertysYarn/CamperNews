var xhr = new XMLHttpRequest()

xhr.onload = function() {
  if (xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    for (var i = 0; i < responseObject.length; i++) {
      newContent += '<a class="tile tile-lg tile-light-green ripple-effect" href="' + responseObject[i].link + '">';
      newContent += '<span class="content-wrapper">';
      newContent += '<span class="tile-content">';
      newContent += '<span class="tile-img tile-img-bg"></span>';
      newContent += '<span class="tile-holder tile-holder-sm">';
      newContent +=  '<span class="title"> responseObject[i].headline </span>';
      newContent +=  '</span></span></span></a>';
    }

document.getElementById('#content').innerHTML = newContent }
};

xhr.open('GET', 'http://www.freecodecamp.com/news/hot', true)
