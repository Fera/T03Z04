(function($, window, document, undefined) {

   $(document).ready(function() {

		var video = $("video").get(0),
			playpause = $("#playpause"),
			mute = $("#mute"),
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

    });
})(jQuery, window, document);