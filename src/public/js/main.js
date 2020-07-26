var map = L.map('map').
//setView([19.2878600, -99.6532400],5);
setView([19.2878600, -99.6532400],5);
//setView([19.421578699999998, -99.1345574],5); //div latitud, longitud, zoom(MÀS LEJOS ES EL 1) 

const socket = io();

//plantillas de mapas	http://wiki.openstreetmap.org/wiki/tiles
//http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
//https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
//https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png
//http://a.tile.stamen.com/toner/{z}/{x}/{y}.png
// 	http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png
//https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {  //plantilla
    
    attribution: '<a href="www.osmel.com">OSMEL</a> CALDERON-BERNAL', //atribucion o a quien pertenece

   // maxZoom: 18

}).addTo(map); //a quien voy agregar en funcion de mi plantilla

/*
var wmsLayer = L.tileLayer.wms('http://34.229.148.247:8080/geoserver/web_altanredes/ows?SERVICE=WMS?&authkey=5749ae868ea5', {
    layers: 'Cobertura Producto_20HBB_V01_Red Compartida_W26',
	format: 'image/png',
    transparent: true
//	,	crs: 'EPSG:4326'
	
}).addTo(map);
*/



 

/*
 L.marker([51.5, -0.09]).addTo(map)  //ponga un marcador el en mapa
    .bindPopup('Osmel.<br> CALDERON-BERNAL.') //descripcion del popup
    .openPopup();  //q abra el popup desde el inicio
*/


 const marcador= L.marker([51.5, -0.09])
    .bindPopup('Osmel.<br> CALDERON-BERNAL.') 
    .openPopup();  

map.addLayer(marcador);  //agregando una capa nueva al mapa


//habilitar la precision alta, o hacer q nuestra localizacion sea mas precisa
//utiliza la api de geolocalizacion del navegador, para localizar mejor al usuario
map.locate({enableHighAccuracy:true}); //esto pide una autorizacion de geolocalizacion en tu navegador

//evento de localizacion encontrada, una vez q el usuario de el permiso
map.on('locationfound', e =>{
	
	console.log(e); //devuelve varias propiedades 


	 const marcador= L.marker([e.latlng.lat, e.latlng.lng])
	    .bindPopup('Londre.<br> un amigo.') 
	    .openPopup();  

	 map.addLayer(marcador);  //agregando una capa nueva al mapa

	 socket.emit('usercordenada', e.latlng);


} );


		socket.on('nuevasCoordenadas',coordenadas => {
			//console.log(coordenadas);
			//voy a enviarle un mensaje a todos los usuarios conectados
			// socket.broadcast.emit('nuevasCoordenadas', coordenadas);
			console.log(coordenadas);

			 const marcador= L.marker([coordenadas.lat, coordenadas.lng]) //+0.0001
			    .bindPopup('nuevo.<br> estoy aqui.') 
			    .openPopup();  

			 map.addLayer(marcador);  //agregando una capa nueva al mapa



		});