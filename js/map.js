function init_map(){	
var myOptions = {
    zoom:15,center:new google.maps.LatLng(-27.586811,-48.54557299999999),mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map( 
    document.getElementById('gmap_canvas'), myOptions);
marker = new google.maps.Marker({ 
    map: map,position: new google.maps.LatLng(-27.586811,-48.54557299999999)
});
infowindow = new google.maps.InfoWindow({
    content:'<p style="color:black;text-align:left;font-weight:bold;">Meu Mapa</p><p style="color:black;text-align:left;">Rua Rafael Bandeira Florianópolis</p><br>'});
    google.maps.event.addListener(marker, 'click', function(){ 
        infowindow.open(map,marker);
    });
infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', init_map);