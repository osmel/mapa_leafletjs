// a GeoJSON multipolygon
/*
var mp = {
  "type": "Feature",
  "geometry": {
    "type": "MultiPolygon",
    "coordinates": 


  },
  "properties": {
    "name": "MultiPolygon",
    "style": {
        color: "red",
        opacity: 1,
        fillColor: "white",
        fillOpacity: 1
    }
  }
};
*/

// create a map in the "map" div, set the view to a given place and zoom

/*
var map = L.map('map', {
  center: [0.8, 19.2878600],
  zoom: 1
});
*/


;

/*
var map = L.map('map').
 setView([19.2878600, -99.6532400],5);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {  //plantilla
    attribution: '<a href="www.osmel.com">OSMEL</a> CALDERON-BERNAL', //atribucion o a quien pertenece
}).addTo(map);
*/


  var mapTiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 13
  });  

  var mapTiles =L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a href="www.altanredes.com">ALTAN</a> Altan-Maps',
    maxZoom: 13
});
  //.addTo(map);

        var geojson = L.geoJSON(aa, {
              onEachFeature: function (feature, layer) {
                layer.bindPopup("Name: " + feature.properties.name + "<br>" + "Population: " + feature.properties.population);
                  console.log(feature);
                  //return L.circleMarker(latlng, MarkerOptions);
                },  
             // style:estilo_monumentos,
              //onEachFeature: popup_monumentos 
          });   



     var map = L.map('map').fitBounds(geojson.getBounds());
    mapTiles.addTo(map);
    geojson.addTo(map)


        //map.addLayer(monumentos);
/*
new L.GeoJSON(aa, {
  style: function(feature) {
      return feature.properties.style
  }
}).addTo(map);
*/