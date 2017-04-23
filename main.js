listSongs();
var favorites = [];

// events for playing audio
$("body").on("click", ".link", function(){
  event.preventDefault();
  var url = $(this).attr("href");
  var image = $(this).parent().parent().find(".img").attr("src");
  $(".media-player").empty();
  $(".media-player").append(playsong(url, image));
})

// events for favorites
$("body").on("click", ".fa-star-o", function(){
  $(this).toggleClass("favorite");
  if($(this).hasClass("favorite")){
    addToFavorites($(this));
  }
  else{
    removeFromFavorites($(this));
  }
})

// events for filtering
$("#all").on("click", function(){
  listSongs();
})

$("#favorites").on("click", function(){
  listFavorites();
})


// listing songs
function listSongs(){
  $.ajax({
    type: "GET",
    url: "http://starlord.hackerearth.com/sureify/cokestudio"
  }).done(function(response){
    displayAllSongs(response);
  })
}

function displayAllSongs(data){
  $(".box").empty();
  data.forEach(function(obj){
    $(".box").append(songBox(obj));
  })
}

function songBox(obj){
  return `<li> \
            <img src="${obj.cover_image}" class="img-responsive img"/> \
            <p>${obj.song} - ${obj.artists} \
            <a href="${obj.url}" class="link"><i class="fa fa-play" aria-hidden="true"></i></a> \
            <i class="fa fa-star-o" aria-hidden="true"></i> \
            </p> \
          </li>`
}

// audio player
function playsong(url, image){
 return `<img src="${image}" class="img-responsive cover"/> \
        <audio controls autoplay> \
          <source src="${url}"> \
        </audio>`
}

// favorites
function addToFavorites(song){
  var songData = {
  }

  songData.image = song.parent().parent()[0].firstElementChild.src;
  songData.artist = song.parent()[0].firstChild.data.trim();
  songData.url = song.parent()[0].firstElementChild.href;

  favorites.push(songData);
}

function removeFromFavorites(song){
  for (var i =0;i < favorites.length; i++){
    if (song.parent().parent()[0].firstElementChild.src == favorites[i]["image"]){
      favorites.splice(i, 1);
    }
  }
}

function listFavorites(){
  $(".box").empty();
  favorites.forEach(function(obj){
    $(".box").append(favoriteBox(obj));
  })
}

function favoriteBox(obj){
    return `<li> \
            <img src="${obj.image}" class="img-responsive img"/> \
            <p>${obj.artist} \
            <a href="${obj.url}" class="link"><i class="fa fa-play" aria-hidden="true"></i></a> \
            <i class="fa fa-star-o" aria-hidden="true"></i> \
            </p> \
          </li>`
}