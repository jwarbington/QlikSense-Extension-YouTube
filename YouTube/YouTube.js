define( [
],
/**
* @owner Joe Warbington (jaw)
*/
function ( ) {

	return {
			
		initialProperties : {
			version : 1.0,
			video : '9X00ud_i8dc' //9X00ud_i8dc is Qlik Sense Getting Started video
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
							type : "string",
							label : "YouTube Video ID"
						}
					}
				}
			}
		},
	
		paint: function ($element,layout) {
			var source = "'//www.youtube.com/embed/" + layout.video + "'";
			$element.html("<iframe style='height: 100%; width: 100%;' src=" + source + " frameborder='0' allowfullscreen></iframe>");
		},

		snapshot: {
			canTakeSnapshot: true
		}
	};

 
} );
