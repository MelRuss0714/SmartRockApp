$(document).ready(function() {

  $('#search').click(function(){
  $("#searchTerm").on("click", function() {
  var band =  $('#searchTerm').val();
})
   

var queryYoutube = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + band + 
     
        $.ajax({
         url: queryYoutube,
         method: "GET"
     })

     // After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    $('#search').attr('disabled', false);
  }
  
  // Search for a specified string.
  function search() {
    var request = gapi.client.youtube.search.list({
      q: band,
      part: 'snippet'
    });
  
    request.execute(function(response) {
      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');
    
        });
      }
    })
  })
