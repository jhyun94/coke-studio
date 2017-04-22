listSongs();

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
            <p>Song: ${obj.song}</p> \
            <p>Artist: ${obj.artists}</p> \
            <a href="${obj.url}">Click to Play</a> \
          </li>`
}