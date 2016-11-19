function initMap(){

    var mapId ={
	zoom: 15,
	center: new google.maps.LatLng(35.6328964,139.8782003)
    };

    var map = new google.maps.Map(document.getElementById("map"),mapId);
}
