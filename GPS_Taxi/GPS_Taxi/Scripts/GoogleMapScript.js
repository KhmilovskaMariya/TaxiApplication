var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
function initialize() {
	  directionsDisplay = new google.maps.DirectionsRenderer();
		/*if(navigator.geolocation) 
		{
			var latitude;
			var longitude;
			navigator.geolocation.getCurrentPosition(
			function(position) {
					latitude = position.coords.latitude;
					longitude = position.coords.longitude;


					var myLatlng = new google.maps.LatLng(latitude,longitude);
					var mapOptions = {
						zoom: 4,
						center: myLatlng
					  }
					map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

					var marker = new google.maps.Marker({
						  position: myLatlng,
						  map: map,
						  title: 'Hello World!'
					});			
					

					
					var input = (
					document.getElementById('pac-input'));
					var input_to = (
					document.getElementById('pac-input-to'));

					var types = document.getElementById('type-selector');
					//map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
					//map.controls[google.maps.ControlPosition.TOP_LEFT].push(input_to);
					map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

					var autocomplete = new google.maps.places.Autocomplete(input);
					var autocomplete_to = new google.maps.places.Autocomplete(input_to);
					autocomplete.bindTo('bounds', map);
					autocomplete_to.bindTo('bounds', map);

					var infowindow = new google.maps.InfoWindow();
					
					var marker = new google.maps.Marker({
						map: map,
						anchorPoint: new google.maps.Point(0, -29)
					});
					
					var marker_to = new google.maps.Marker({
						map: map,
						anchorPoint: new google.maps.Point(0, -29)
					});

					google.maps.event.addListener(autocomplete, 'place_changed', function() {
					infowindow.close();
					marker.setVisible(false);
					var place = autocomplete.getPlace();
					if (!place.geometry) {
						window.alert("Autocomplete's returned place contains no geometry");
						return;
					}

					// If the place has a geometry, then present it on a map.
					if (place.geometry.viewport) {
					  map.fitBounds(place.geometry.viewport);
					} else {
					  map.setCenter(place.geometry.location);
					  map.setZoom(17);  // Why 17? Because it looks good.
					}
					marker.setIcon(({
					  url: place.icon,
					  size: new google.maps.Size(71, 71),
					  origin: new google.maps.Point(0, 0),
					  anchor: new google.maps.Point(17, 34),
					  scaledSize: new google.maps.Size(35, 35)
					}));
					marker.setPosition(place.geometry.location);
					marker.setVisible(true);

					var address = '';
					if (place.address_components) {
					  address = [
						(place.address_components[0] && place.address_components[0].short_name || ''),
						(place.address_components[1] && place.address_components[1].short_name || ''),
						(place.address_components[2] && place.address_components[2].short_name || '')
					  ].join(' ');
					}

					infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
					infowindow.open(map, marker);
	
	
			});
			
			google.maps.event.addListener(autocomplete_to, 'place_changed', function() {
					infowindow.close();
					marker_to.setVisible(false);
					var place = autocomplete_to.getPlace();
					if (!place.geometry) {
						window.alert("Autocomplete's returned place contains no geometry");
						return;
					}

					// If the place has a geometry, then present it on a map.
					if (place.geometry.viewport) {
					  map.fitBounds(place.geometry.viewport);
					} else {
					  map.setCenter(place.geometry.location);
					  map.setZoom(17);  // Why 17? Because it looks good.
					}
					marker_to.setIcon(({
					  url: place.icon,
					  size: new google.maps.Size(71, 71),
					  origin: new google.maps.Point(0, 0),
					  anchor: new google.maps.Point(17, 34),
					  scaledSize: new google.maps.Size(35, 35)
					}));
					marker_to.setPosition(place.geometry.location);
					marker_to.setVisible(true);

					var address = '';
					if (place.address_components) {
					  address = [
						(place.address_components[0] && place.address_components[0].short_name || ''),
						(place.address_components[1] && place.address_components[1].short_name || ''),
						(place.address_components[2] && place.address_components[2].short_name || '')
					  ].join(' ');
					}

					infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
					infowindow.open(map, marker_to);
	
	
			});

			setupClickListener('changetype-all', []);
			setupClickListener('changetype-address', ['address']);
			setupClickListener('changetype-establishment', ['establishment']);
			setupClickListener('changetype-geocode', ['geocode']);
		  
			google.maps.event.addDomListener(window, 'load', initialize);
					});		  
		}
	    else 
		{
			alert("Geolocation API is not avaliable");
		}
		*/
		
					
		var geo_place = new google.maps.LatLng(49.842937, 24.03991);
		var mapOptions = {
			zoom: 6,
			center: geo_place
		}
		map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
		
		directionsDisplay.setMap(map);
		
		var input = (document.getElementById('pac-input'));
		var input_to = (document.getElementById('pac-input-to'));
		
		var autocomplete = new google.maps.places.Autocomplete(input);
		autocomplete.bindTo('bounds', map);
		
		var autocomplete_to = new google.maps.places.Autocomplete(input_to);
		autocomplete_to.bindTo('bounds', map);
		
		google.maps.event.addListener(autocomplete, 'place_changed', function() {
			var infowindow = new google.maps.InfoWindow();
					infowindow.close();
					var marker = new google.maps.Marker({
						map: map,
						anchorPoint: new google.maps.Point(0, -29)
					});
					marker.setVisible(false);
					var place = autocomplete.getPlace();
					if (!place.geometry) {
						window.alert("Autocomplete's returned place contains no geometry");
						return;
					}

					// If the place has a geometry, then present it on a map.
					if (place.geometry.viewport) {
					  map.fitBounds(place.geometry.viewport);
					} else {
					  map.setCenter(place.geometry.location);
					  map.setZoom(17);  // Why 17? Because it looks good.
					}
					marker.setIcon(({
					  url: place.icon,
					  size: new google.maps.Size(71, 71),
					  origin: new google.maps.Point(0, 0),
					  anchor: new google.maps.Point(17, 34),
					  scaledSize: new google.maps.Size(35, 35)
					}));
					marker.setPosition(place.geometry.location);
					marker.setVisible(true);

					var address = '';
					if (place.address_components) {
					  address = [
						(place.address_components[0] && place.address_components[0].short_name || ''),
						(place.address_components[1] && place.address_components[1].short_name || ''),
						(place.address_components[2] && place.address_components[2].short_name || '')
					  ].join(' ');
					}

					infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
					infowindow.open(map, marker);
			});
			
			google.maps.event.addListener(autocomplete_to, 'place_changed', function() {
				var infowindow = new google.maps.InfoWindow();
					infowindow.close();
					var marker_to = new google.maps.Marker({
						map: map,
						anchorPoint: new google.maps.Point(0, -29)
					});
					marker_to.setVisible(false);
					var place = autocomplete_to.getPlace();
					if (!place.geometry) {
						window.alert("Autocomplete's returned place contains no geometry");
						return;
					}

					// If the place has a geometry, then present it on a map.
					if (place.geometry.viewport) {
					  map.fitBounds(place.geometry.viewport);
					} else {
					  map.setCenter(place.geometry.location);
					  map.setZoom(17);  // Why 17? Because it looks good.
					}
					marker_to.setIcon(({
					  url: place.icon,
					  size: new google.maps.Size(71, 71),
					  origin: new google.maps.Point(0, 0),
					  anchor: new google.maps.Point(17, 34),
					  scaledSize: new google.maps.Size(35, 35)
					}));
					marker_to.setPosition(place.geometry.location);
					marker_to.setVisible(true);

					var address = '';
					if (place.address_components) {
					  address = [
						(place.address_components[0] && place.address_components[0].short_name || ''),
						(place.address_components[1] && place.address_components[1].short_name || ''),
						(place.address_components[2] && place.address_components[2].short_name || '')
					  ].join(' ');
					}

					infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
					infowindow.open(map, marker_to);
	
	
			});
			
			setupClickListener('changetype-all', []);
			setupClickListener('changetype-address', ['address']);
			setupClickListener('changetype-establishment', ['establishment']);
			setupClickListener('changetype-geocode', ['geocode']);
}		
function calcRoute() 
		{
			  var start = document.getElementById('pac-input').value;
			  var end = document.getElementById('pac-input-to').value;

			  var request = {
				  origin: start,
				  destination: end,
				  travelMode: google.maps.TravelMode.DRIVING
			  };
			  

			  directionsService.route(request, function(response, status) {
				  if (status == google.maps.DirectionsStatus.OK) {

					 var distance = (response.routes[0].legs[0].distance.value / 1000 );
					 var duration = (response.routes[0].legs[0].duration.value / 60);
					 

					 // Display the duration:
					 //document.getElementById('duration').innerHTML += 
					//	response.routes[0].legs[0].duration.value + " seconds";
						
					var _from = document.getElementById('pac-input').value;
					var _to = document.getElementById('pac-input-to').value;
					var _telephoneNumber = document.getElementById('tel-number').value;
					//alert(_from);

					$.ajax({
						cache: false,
						type: "POST",
						url: "/Home/MakeOrder/",
						data: {
							"From": _from,
							"To": _to,
							"TelNumber": _telephoneNumber,
							"Distance" : distance,
							"Time" : duration
						},
						success: function () {},
						error: function (xhr, ajaxOptions, thrownError) {
							alert('Failed!.');
						}
					});
					
					 directionsDisplay.setDirections(response);
				  }
			   });
		}
function ConfirmOrder()
{
	var code = document.getElementById('confirm-code').value;
	document.getElementById('order_info').innerHTML = "";
	
	if(code == "1111")
	{
		calcRoute();
		document.getElementById("confirm-button").disabled = true;
		document.getElementById('order_succ').innerHTML = "Операція пройшла успішно";
		document.getElementById('order_fail').innerHTML = "";
	}
	else {
		document.getElementById('order_fail').innerHTML = "Код невірний, спробуйте щераз";
		alert("Невірний код, спробуйте ще раз");
	}
	
}
function GetPrice()
{
	var start = document.getElementById('pac-input').value;
	var end = document.getElementById('pac-input-to').value;

			  var request = {
				  origin: start,
				  destination: end,
				  travelMode: google.maps.TravelMode.DRIVING
			  };
			  

			  directionsService.route(request, function(response, status) {
				  if (status == google.maps.DirectionsStatus.OK) {

					var distance = (response.routes[0].legs[0].distance.value / 1000 );
					var duration = (response.routes[0].legs[0].duration.value / 60);
					 

					 // Display the duration:
					 //document.getElementById('duration').innerHTML += 
					//	response.routes[0].legs[0].duration.value + " seconds";
						
					var _from = document.getElementById('pac-input').value;
					var _to = document.getElementById('pac-input-to').value;
					var _telephoneNumber = document.getElementById('tel-number').value;

					$.ajax({
						cache: false,
						type: "POST",
						url: "/Home/GetPrice/",
						data: {
							"Distance" : distance
						},
						success: function (data) {
							document.getElementById('price').value = data;
							document.getElementById('order_info').innerHTML = "Підтвердіть замовлення!";
						},
						error: function (xhr, ajaxOptions, thrownError) {
							alert('Failed!.');
						}
					});
					
					document.getElementById('distance').value = distance + "км";
					document.getElementById('time').value = duration + "хв";
					
					 directionsDisplay.setDirections(response);
				  }
			   });
}
