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
  // $(".box").empty();
  data.forEach(function(obj){
    songBox(obj);
  })
}

function songBox(obj){
  console.log(obj);
}