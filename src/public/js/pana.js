var map = L.map('map').
setView([19.2878600, -99.6532400],13);
 
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a href="www.altanredes.com">ALTAN</a> Altan-Maps',
    maxZoom: 13
}).addTo(map);

L.control.scale().addTo(map);
//L.marker([19.2878600, -99.6532400], {draggable: true}).addTo(map);


var wmsLayer = L.tileLayer.wms('http://34.229.148.247:8080/geoserver/web_altanredes/ows?SERVICE=WMS?&authkey=5749ae868ea5', {
    layers: 'Cobertura Producto_20HBB_V01_Red Compartida_W26',
	format: 'image/png',
    transparent: true
//	,	crs: 'EPSG:4326'
	
}).addTo(map);


