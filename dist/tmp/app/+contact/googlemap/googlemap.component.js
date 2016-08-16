"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var GooglemapComponent = (function () {
    function GooglemapComponent() {
    }
    GooglemapComponent.prototype.ngOnInit = function () {
        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            center: new google.maps.LatLng(33.6862, -117.8595),
            styles: [{ "featureType": "landscape.man_made", "elementType": "geometry", "stylers": [{ "gamma": "0.76" }, { "lightness": "0" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "color": "#cccccc" }] }, { "featureType": "poi", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": "11" }, { "weight": "1.00" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "lightness": "41" }, { "gamma": "1" }, { "weight": "1" }] }, { "featureType": "transit", "elementType": "geometry.fill", "stylers": [{ "gamma": ".5" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#5a718f" }] }]
        };
        var mapElement = document.getElementById("map");
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(33.6862, -117.8595),
            map: map,
            title: 'Green Card Lotterys'
        });
    };
    GooglemapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'googlemap',
            template: "<div>     <div id=\"map\"></div> </div>",
            styles: ["#map{height:500px;width:100%}"]
        }), 
        __metadata('design:paramtypes', [])
    ], GooglemapComponent);
    return GooglemapComponent;
}());
exports.GooglemapComponent = GooglemapComponent;
