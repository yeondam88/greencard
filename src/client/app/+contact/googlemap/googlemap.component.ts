import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  moduleId: module.id,
  selector: 'googlemap',
  templateUrl: 'googlemap.component.html',
  styleUrls: ['googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        let mapOptions: any = {
            // How zoomed in you want the map to start at (always required)
            zoom: 14,

            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(33.6862, -117.8595), // Irvine

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"gamma":"0.76"},{"lightness":"0"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#cccccc"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":"11"},{"weight":"1.00"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"lightness":"41"},{"gamma":"1"},{"weight":"1"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"gamma":".5"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#5a718f"}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        let mapElement = document.getElementById("map");

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(33.6862, -117.8595),
            map: map,
            title: 'Green Card Lotterys'
        });
    }

}
