(function () {
    angular.module('starter.controllers', [])
       .controller('MapCtrl', ['$scope', loadMap]);
    function loadMap($scope) {

        try{
            var map;
            document.addEventListener("deviceready", function () {
                var div = document.getElementById("map_canvas");
                var lat = 43.6722780;
                var long = -79.3745125;
                var latLng = new plugin.google.maps.LatLng(lat, long);
               // alert(latLng);
                var mapOptions = {
                    center: latLng,
                    zoom: 13,
                    mapTypeId: plugin.google.maps.MapTypeId.ROADMAP
                };

                // Initialize the map view
                map = plugin.google.maps.Map.getMap(div, mapOptions);
               
                // Wait until the map is ready status.
                map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
            }, false);

            function onMapReady() {
                var button = document.getElementById("button");
                button.addEventListener("click", onBtnClicked, false);
            }

            function onBtnClicked() {
                map.showDialog();
            }
        }
        catch (ee) {
            console.log(ee);
            alert(ee);
        }
    }

})();

