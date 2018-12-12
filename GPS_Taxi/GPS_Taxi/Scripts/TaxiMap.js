var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

$( document ).ready(function () {
		var value = document.getElementById('order_id').value;
        var actionUrl = '/TaxiCar/Freetaxi/' + value;
        $.getJSON(actionUrl, ShowFreeTaxi);
    });

function ShowFreeTaxi(response) {
	
	directionsDisplay = new google.maps.DirectionsRenderer();
	
	var geo_place = new google.maps.LatLng(49.842937, 24.03991);
		var mapOptions = {
			zoom: 13,
			center: geo_place
		}
	map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
		
	directionsDisplay.setMap(map);
		
	var myCenter=new google.maps.LatLng(49.842937,24.03991);
		
	if (response != null) {
            for (var i = 0; i < response.length; i++) {
				if(i == 0)
				{
					var latitude;
					var longitude;
					var geocoder = new google.maps.Geocoder();
					var address = response[i].Car1;
					var name =  response[i].Name;

					geocoder.geocode( { 'address': address}, function(results, status) {

						if (status == google.maps.GeocoderStatus.OK) {
							 latitude = results[0].geometry.location.lat();
							 longitude = results[0].geometry.location.lng();
							} 
						var myCenter=new google.maps.LatLng(latitude,longitude);
					
						var marker=new google.maps.Marker({
						  position:myCenter,
						  });

						marker.setMap(map);

						var infowindow = new google.maps.InfoWindow({
						  content:name
						  });

						infowindow.open(map,marker);
					});
				}
				else {
					var myCenter=new google.maps.LatLng(response[i].geo_latitude,response[i].geo_longitude);
					
					var marker=new google.maps.Marker({
					  position:myCenter,
					  });

					marker.setMap(map);

					var infowindow = new google.maps.InfoWindow({
					  content:response[i].Name
					  });

					infowindow.open(map,marker);
				}
            }
        }
			
	setupClickListener('changetype-all', []);
	setupClickListener('changetype-address', ['address']);
	setupClickListener('changetype-establishment', ['establishment']);
	setupClickListener('changetype-geocode', ['geocode']);
			
        
}
	
	
	
	
	
	
	
	
	
	