
/*
var wmsLayer = L.tileLayer.wms('http://34.229.148.247:8080/geoserver/web_altanredes/ows?SERVICE=WMS&authkey=5749ae868ea5', {
    layers: 'Cobertura Producto_20HBB_V01_Red Compartida_W26',
	format: 'image/png',
    transparent: true
}).addTo(map);

*/

url='http://34.229.148.247:8080/geoserver/web_altanredes/ows?SERVICE=WMS&authkey=5749ae868ea5';
url+='&format=application%2Fjson%3Btype%3Dgeojson';
url+='&bbox=-1183536.0%2C1839840.0%2C1781207.99%2C3670488.0';
url+='&width=768&height=474';
url+='&srs=EPSG%3A32614';
url+='&request=GetMap';
url+='&layers=web_altanredes%3ACobertura%20Producto_20HBB_V01_Red%20Compartida_W26';
console.log(url);

//http://34.229.148.247:8080/geoserver/web_altanredes/ows?SERVICE=WMS&authkey=5749ae868ea5&format=application%2Fjson%3Btype%3Dgeojson&layers=web_altanredes%3ACobertura%20Producto_20HBB_V01_Red%20Compartida_W26&request=GetMap&srs=EPSG%3A32614&width=768&height=474&bbox=-1183536.0%2C1839840.0%2C1781207.99%2C3670488.0

//http://34.229.148.247:8080/geoserver/web_altanredes/wms?service=WMS&authkey=5749ae868ea5&version=1.1.0&request=GetMap&layers=web_altanredes%3ACobertura%20Producto_20HBB_V01_Red%20Compartida_W26&bbox=-1183536.0%2C1839840.0%2C1781207.99%2C3670488.0&width=768&height=474&srs=EPSG%3A32614&format=application%2Fjson%3Btype%3Dgeojson

//url='http://34.229.148.247:8080/geoserver/web_altanredes/wms?service=WMS&authkey=5749ae868ea5&version=1.1.0&request=GetMap&layers=web_altanredes%3ACobertura%20Producto_20HBB_V01_Red%20Compartida_W26
//&bbox=-1183536.0%2C1839840.0%2C1781207.99%2C3670488.0&width=768&height=474&srs=EPSG%3A32614&format=application%2Fjson%3Btype%3Dgeojson';


/*
{"type":"FeatureCollection",
"totalFeatures":"unknown",
"features":[
	{"type":"Feature","id":"Cobertura Producto_20HBB_V01_Red Compartida_W26.1",
		"geometry":
			{"type":"MultiPolygon","coordinates":

 ,"geometry_name":"geom","properties":{"LEGEND":"20HBB"}}]}
*/



var geojsonFeature = 

[{
    "type": "LineString",
    "coordinates": [[19.2878600, -99.6532400], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
},

{
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [19.2878600, -99.6532400]
    }
}

];




L.geoJson(geojsonFeature).addTo(map);


/*
 L.marker([51.5, -0.09]).addTo(map)  //ponga un marcador el en mapa
    .bindPopup('Osmel.<br> CALDERON-BERNAL.') //descripcion del popup
    .openPopup();  //q abra el popup desde el inicio
*/
