var map;
    
function initMap(){

    var mapId ={
	zoom: 5,
	center: new google.maps.LatLng(35.890358,136.344221)
    };

    map = new google.maps.Map(document.getElementById("map"),mapId);
}

function setMaker(lat, lng, info, img){

    var latlng = new google.maps.LatLng(lat,lng);
    var marker = new google.maps.Marker({
	position: latlng,
	map: map
    });

    
/*    var infoWindow = new google.maps.InfoWindow({
	content: '<div class="marker"><a href=' + img + ' target=_blank><img width=100% src=' + img + '></a>'+info+'</div>'
    });
*/
    var infoWindow = new google.maps.InfoWindow({
	content: '<div class="marker">'+info+'</div>'
    });
    
    google.maps.event.addListener(marker,'mouseover',function(){
	infoWindow.open(map, marker);
    });

    google.maps.event.addListener(marker,'mouseout',function(){
	infoWindow.close();
    });
}
 
