listSongs();

$("body").on("click", ".link", function(){
  event.preventDefault();
  var url = $(this).attr("href");
  var image = $(this).parent().parent().find(".img").attr("src");
  $(".media-player").empty();
  $(".media-player").append(playsong(url, image));
})






// functions for listing songs
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
            <a href="${obj.url}" class="link"><i class="fa fa-play" aria-hidden="true"></i></a> </p> \
          </li>`
}

// audio player

function playsong(url, image){
 return `<img src="${image}" class="img-responsive cover"/> \
        <audio controls autoplay> \
          <source src="${url}"> \
        </audio>`
}