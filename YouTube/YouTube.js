define( [
],
/**
* @owner Joe Warbington (jaw)
*/
function ( ) {

	return {
			
		initialProperties : {
			version : 1.1,
			video : 'hYBMECY4Yoo' //hYBMECY4Yoo is Qlik Sense Product Tour video
		},
	
		definition : {
			type : "items",
			component : "accordion",
			items : {
				settings : {
					uses : "settings",
					items : {
						video : {
							ref : "video",
							expression:"optional", //Added ability to use expression for video ID
							type : "string",
							label : "YouTube Video ID"
						}
					}
				}
			}
		},
	
		paint: function ($element,layout) {
			var source = "'//www.youtube.com/embed/" + layout.video + "?theme=light&showinfo=0&color=white&rel=0'";
			$element.html("<iframe style='height: 100%; width: 100%;' src=" + source + " frameborder='0' allowfullscreen></iframe>");
		},

		snapshot: {
			canTakeSnapshot: true
		}
	};

 
} );
