(function($, window, document, undefined) {

   $(document).ready(function() {

		var video = $("video").get(0),
			playpause = $("#playpause"),
			mute = $("#mute"),
			volumebar = $("#volumebar"),
			time = $("#time"),
			progressbar = $("#progressbar"),
			valuestep = 0;

		playpause.on("click", function(){

			if (video.paused) {
				video.play();
				playpause.addClass("pause").removeClass("play");

			}else {
				video.pause();
		            playpause.addClass("play").removeClass("pause");
		    }

		});	


		mute.on("click", function(){
	        if($("video").prop("muted")){
	            $("video").prop("muted", false);
	            mute.addClass("mute").removeClass("mute-off");
	        }
	        else {
	            $("video").prop("muted", true);
	            mute.addClass("mute-off").removeClass("mute");
	        }
	    });

	    volumebar.on("input change", function(val){

		       setVolume(this.value); 

		});

		function setVolume(val) {
	        video.volume = val / 100;
		}

	    function formatTime(seconds) {
	        var seconds = Math.round(seconds),
	            minutes = Math.floor(seconds / 60),
	            remainingSeconds = seconds - minutes * 60;

	        if(remainingSeconds == 0)
	            remainingSeconds = "00";
	        else if(remainingSeconds < 10)
	            remainingSeconds = "0" + remainingSeconds;

	        return minutes + ":" + remainingSeconds;
	    }

	    video.oncanplaythrough = function () {
	        var curtime = formatTime(video.currentTime);
	        var duration = formatTime(video.duration);
	        time.html(curtime + " / " + duration);
	    };

	    video.ontimeupdate = function () {
	        var curtime = formatTime(video.currentTime);
	        var duration = formatTime(video.duration);
	        time.html(curtime + " / " + duration);

	        var currentProgress = (Math.round(video.currentTime) / Math.round(video.duration)) * 100;
	        progressbar.val(currentProgress);
	    };

	    progressbar.on("input change", function() {
	        var clickedPos = progressbar.val();
	        video.currentTime = clickedPos;
	    });

    });
})(jQuery, window, document);