function initMap(){if(!!map_location.lat&&!!map_location.lng){generateMap(map_location)}else{gGeocode=new google.maps.Geocoder;gGeocode.geocode({address:map_location.address},function(e,t){if(t==google.maps.GeocoderStatus.OK){map_location.lat=Number(e[0].geometry.location.lat());map_location.lng=Number(e[0].geometry.location.lng());console.log("Geocode Location:",map_location);generateMap(map_location)}})}}function generateMap(e){var t=17;var a=0;var l="/wp-content/themes/firstpage/img/icn_map_pin.svg";var o="<h4>"+e.name+"</h4>"+"<p>"+e.address+"</p>";var n=[{elementType:"geometry",stylers:[{saturation:-100},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{saturation:-100},{lightness:25}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{saturation:-100}]},{featureType:"poi",elementType:"geometry",stylers:[{saturation:-100}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{saturation:-100}]},{featureType:"poi.park",elementType:"geometry",stylers:[{saturation:-100}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{saturation:-100}]},{featureType:"road",elementType:"geometry",stylers:[{saturation:-100}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{saturation:-100}]},{featureType:"road.highway",elementType:"geometry",stylers:[{saturation:-100}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{saturation:-100}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{saturation:-100}]},{featureType:"transit.line",elementType:"geometry",stylers:[{saturation:-100}]},{featureType:"transit.station",elementType:"geometry",stylers:[{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{saturation:-100}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{saturation:-100}]}];var r=new google.maps.Map(document.getElementById("office-map"),{zoom:t,mapTypeControl:false,streetViewControl:false,center:new google.maps.LatLng(e.lat+a,e.lng),mapTypeId:google.maps.MapTypeId.ROADMAP});var s=new google.maps.StyledMapType(n,{name:"Greyscale"});r.mapTypes.set("grey",s);r.setMapTypeId("grey");var p=new google.maps.LatLng(e.lat,e.lng);var i=new google.maps.Marker({position:p,map:r,icon:l});gInfoWindow=new google.maps.InfoWindow({content:o});i.addListener("click",function(){gInfoWindow.open(r,i)})}