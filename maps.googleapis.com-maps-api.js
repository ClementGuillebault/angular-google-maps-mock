var google = {
    maps : {
        OverlayView : function () {
        },
        Marker : function () {
        },
        InfoWindow : function () {
        },
        LatLng: function(lat, lng){
        	return [lat, lng];
        },
        Map: function(obj){

        },
        DirectionsRenderer: function() {
            return {
                setMap: function(id) {
                },
                setDirections: function() {
                },
                setPanel: function() {
                }
            }
        },
        DirectionsService: function() {
        },
        Geocoder: function() {
        },
        MapTypeId: {ROADMAP: true},
        places: {
        	AutocompleteService: function(){

        	},
    		PlacesService: function(obj){
    			return {
    				PlacesServiceStatus: {
	        			OK: true
	        		},
	        		textSearch: function(query){
	        			return [];
	        		},
	        		nearbySearch: function(query){
	        			return [];
	        		}
    			};	
    		}
        }
    }
};
