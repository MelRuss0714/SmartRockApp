$(document).ready(function(){
    var band =  $('#searchTerm').val();

     var queryYoutube = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + band + "key=AIzaSyDg-J5eAdD3Kf2Y6aMYz0BtKHEnEHJS-yI"
       $.ajax({
           url: queryYoutube,
           method: "GET"
       })
       //Write youtube video to html from youtube
             var tag = document.createElement('script');
               tag.src = "https://www.youtube.com/iframe_api";
               var ifTag = document.getElementsByTagName('script')[0];
                   ifTag.parentNode.insertBefore(tag, ifTag);

               // 3. This function creates an <iframe> (and YouTube player)
               //    after the API code downloads.
               var playerYT;
               function onYouTubeIframeAPIReady() {
                   playerYT = new YT.Player('player', {
                       height: '390',
                       width: '640',
                       src: "https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1",
                       events: {
                           'onReady': onPlayerReady,
                           'onStateChange': onPlayerStateChange
                        }
                    });
                }
               
               
               // 4. The API will call this function when the video player is ready.
               function onPlayerReady(event) {
                event.target.playVideo();
            }

               // 5. The API calls this function when the player's state changes.
               //    The function indicates that when playing a video (state=1),
               //    the player should play for six seconds and then stop.
               var done = false;
               function onPlayerStateChange(event) {
                   if (event.data == YT.PlayerState.PLAYING && !done) {
                       setTimeout(stopVideo, 6000);
                       done = true;
                   }
               }
               function stopVideo() {
                   player.stopVideo();
               }
            })