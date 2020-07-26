var map = L.map('map').setView([48.99, -104.05],3);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {  //plantilla
    attribution: '<a href="www.osmel.com">OSMEL</a> CALDERON-BERNAL', //atribucion o a quien pertenece
}).addTo(map); //a quien voy agregar en funcion de mi plantilla


var states = [
/*
{
    "type": "Feature",
    "properties": {"party": "Republican"},
    "geometry": {
        "type": "Polygon",

        "coordinates": [[
            [-104.05, 48.99],
            [-97.22,  48.98],
            [-96.58,  45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
},
*/

{
    "type": "Feature",
    "properties": {"party": "osmel"},
    "geometry": {
        "type": "Polygon",
        "coordinates": 
        [[
            
[409128,2825472],[408504,2827824],[407016,2829168],[405744,2829264],[406080,2827968],[405888,2827608],[404976,2828952],[403848,2829192],[405072,2829912],[404832,2829408],[405384,2828784],[405936,2830344],[405864,2831304],[404040,2832792],[395760,2834952],[391344,2841480],[394152,2842944],[395304,2845320],[394224,2846376],[393960,2846256],[393648,2846664],[392568,2846928],[392736,2847408],[392448,2848584],[391992,2848872],[390912,2848152],[390744,2846520],[387288,2847648],[386568,2854704],[382872,2852904],[383472,2852544],[382800,2852232],[381024,2854872],[378600,2855040],[378984,2856312],[378384,2857440],[378720,2857344],[378672,2857728],[378792,2857512],[379128,2857536],[379104,2857704],[377304,2858184],[377472,2858472],[376320,2858784],[377808,2861688],[374904,2864568],[372696,2863776],[372768,2867448],[370320,2867112],[370320,2866584],[370824,2865936],[370608,2864760],[371976,2863752],[371616,2863488],[372408,2862744],[371496,2863200],[368424,2861016],[366672,2859024],[367392,2857440],[364176,2862792],[364152,2861880],[363528,2862552],[360936,2861304],[359976,2860056],[360336,2857752],[360720,2857392],[360792,2857728],[360984,2857728],[361032,2856744],[361968,2856384],[361344,2855280],[360504,2855064],[360840,2855520],[360864,2856384],[360408,2856720],[359952,2856432],[359928,2856696],[359856,2856648],[359760,2856816],[360144,2856744],[359976,2856888],[350760,2856336],[348816,2853480],[349440,2852568],[350592,2852712],[349416,2850360],[349776,2849208],[354360,2851920],[354888,2851488],[356424,2851512],[359016,2845800],[363888,2841552],[362352,2842704],[360120,2840424],[353280,2844672],[351792,2843904],[352128,2842824],[350952,2842248],[351360,2842560],[351096,2844192],[347688,2845128],[345912,2843016],[346248,2842320],[354264,2837976],[358656,2839248],[358152,2836800],[362976,2835072],[368280,2835720],[368232,2835576],[368568,2835336],[368448,2835240],[368976,2834808],[368856,2833752],[373128,2831208],[369744,2829384],[374352,2829744],[380136,2819544],[381168,2822448],[379512,2824872],[377592,2825160],[376680,2827152],[377568,2826888],[377712,2827608],[376656,2829624],[375192,2830128],[375384,2830920],[373128,2833632],[374304,2836680],[373632,2838072],[377376,2836968],[378360,2835072],[379848,2834832],[381000,2830968],[386928,2831616],[385248,2828928],[386160,2826720],[388848,2827464],[387816,2829528],[388488,2830176],[388680,2829888],[389064,2830296],[389208,2830920],[389016,2831976],[393168,2830824],[393072,2832432],[394104,2833272],[397440,2825808],[401328,2825904],[401448,2826984],[400560,2827680],[403968,2829024],[404496,2827200],[404952,2826552],[404232,2827272],[402840,2827248],[402696,2826648],[404016,2825568],[403968,2825400],[404088,2825160],[402816,2822472],[409128,2825472],



        ]]

    },
  

        
}


];




/*
//url='http://34.229.148.247:8080/geoserver/web_altanredes/wms?
service=WMS
&authkey=5749ae868ea5
&version=1.1.0
&request=GetMap
&layers=web_altanredes%3ACobertura%20Producto_20HBB_V01_Red%20Compartida_W26
&bbox=-1183536.0%2C1839840.0%2C1781207.99%2C3670488.0
&width=768&height=474
&srs=EPSG%3A32614
&format=application%2Fjson%3Btype%3Dgeojson';
*/

//http://localhost:8083/geoserver/wfs?request=GetFeature&service=WFS&version=1.0.0&typeName=geosolutions:WorldCountries&outputFormat=application/json&CQL_FILTER=NAME=%27Monaco%27

/*
states=JSON.parse(
);

*/


let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://inventarios.dev.com/mapanode/php/');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.responseType = 'json';
xhr.onload = function() {
    if (xhr.status !== 200) return
        console.log(xhr.response);
    //L.geoJSON(xhr.response).addTo(map);
};
xhr.send();

states={};
//http://inventarios.dev.com/mapanode/php/
L.geoJSON(states, {  //https://leafletjs.com/reference-1.6.0.html#path-option
    /*
        Una Function que define las options para el diseño de líneas y polígonos GeoJSON,
         llamado internamente cuando se agregan datos. 
         El valor predeterminado es no anular los valores predeterminados:
    */
    /*
    style: function(geoJsonFeature) {
       // console.log(geoJsonFeature);
        switch (geoJsonFeature.properties.party) {
            case 'Republican': return {color: "#ff0000"};
            case 'Democrat':   return {color: "#0000ff"};
            case 'osmel':   return {color: "#ff0000"};
        }
    },*/

    
    style: {
            fillColor: "#CC9900",
            color: "red",
            weight: 1
        },  

        /*Una Function que se llamará una vez por cada Feature creado, 
          después de haber sido creado y diseñado. 
          Útil para adjuntar eventos y ventanas emergentes a las funciones. 
          El valor predeterminado es no hacer nada con las capas recién creadas:*/

    onEachFeature: function (feature, layer) {
                    //console.log(feature);

                //layer.bindPopup("Name: " + feature.properties.name + "<br>" + "Population: " + feature.properties.population);
                  //console.log(feature);
                  //return L.circleMarker(latlng, MarkerOptions);
                    //var source = new OpenLayers.Projection('EPSG:3031');
                    //var wgs84 = new OpenLayers.Projection('EPSG:4326');    
                    
                    /*
                    proj4.defs("EPSG:26910","+proj=utm +zone=10 +ellps=GRS80 +datum=NAD83 +units=m +no_defs");
                    var source = new proj4.Proj('EPSG:26910');  
                    var dest = new proj4.Proj('EPSG:4326');      
                    var p = {x: 407016, y: 2829168};
                    //[407016,2829168],
                    var result = proj4(source, dest, p);
                    console.log('Correct:', result);
                    console.log('Wrong:', p);


                  feature[0].geometry.transform(source, wgs84);
                  */

      },     

      /*  función que se utiliza para convertir coordenadas GeoJSON a LatLngs.
       El valor predeterminado es el método estático coordsToLatLng.
       */

      coordsToLatLng:   function (p) {
            var fromProjection = '+proj=tmerc +lat_0=0 +lon_0=-59.1345574 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +datum=potsdam +units=m +no_defs ';
            var toProjection = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs ";
            p = proj4(fromProjection,toProjection,p);  // reproject each point
            p = [p[1],p[0]]    // swap the values
            return p;          // return the lat/lng pair
      }


      //pointToLayer
      //style
      //onEachFeature
      //filter
      //coordsToLatLng
      //markersInheritOptions


}).addTo(map);


var iarCoordinate = [-109.05, 41.00], //[407016,2829168],
    obSource = new proj4.Proj('EPSG:4326'),
    obDest = new proj4.Proj('EPSG:3857'),        
    obResult = new proj4.Point(iarCoordinate);



proj4.transform(obSource, obDest, obResult);

console.log(obResult);


var firstProjection = 'PROJCS["NAD83 / Massachusetts Mainland",GEOGCS["NAD83",DATUM["North_American_Datum_1983",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],AUTHORITY["EPSG","6269"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.01745329251994328,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4269"]],UNIT["metre",1,AUTHORITY["EPSG","9001"]],PROJECTION["Lambert_Conformal_Conic_2SP"],PARAMETER["standard_parallel_1",42.68333333333333],PARAMETER["standard_parallel_2",41.71666666666667],PARAMETER["latitude_of_origin",41],PARAMETER["central_meridian",-71.5],PARAMETER["false_easting",200000],PARAMETER["false_northing",750000],AUTHORITY["EPSG","26986"],AXIS["X",EAST],AXIS["Y",NORTH]]';
var secondProjection = "+proj=gnom +lat_0=90 +lon_0=0 +x_0=6300000 +y_0=6300000 +ellps=WGS84 +datum=WGS84 +units=m +no_defs";

//proj4(firstProjection).inverse([242075.00535055372, 750123.32090043]);

//I'm not going to redefine those two in latter examples.
//proj4(firstProjection,secondProjection,[2,5]);



proj4.defs("EPSG:26910","+proj=utm +zone=10 +ellps=GRS80 +datum=NAD83 +units=m +no_defs");
var source = new proj4.Proj('EPSG:26910');  
var dest = new proj4.Proj('EPSG:4326');      
var p = {x: 407016, y: 2829168};
//[407016,2829168],
var result = proj4(source, dest, p);
console.log('Correct:', result);
console.log('Wrong:', p);


/*
http://34.229.148.247:8080/geoserver/web_altanredes/wms?service=WMS&authkey=5749ae868ea5&version=1.1.0&request=GetMap&layers=web_altanredes%3ACobertura%20Producto_20HBB_V01_Red%20Compartida_W26&bbox=-1183536.0%2C1839840.0%2C1781207.99%2C3670488.0&width=768&height=474&format=application%2Fjson%3Btype%3Dgeojson

&srs=EPSG%3A32614
&srs=EPSG:32614
&rs=EPSG:3857

http://34.229.148.247:8080/geoserver/web_altanredes/wms?service=WMS&authkey=5749ae868ea5&version=1.1.0&request=GetMap&layers=web_altanredes%3ACobertura%20Producto_20HBB_V01_Red%20Compartida_W26&bbox=-1183536.0%2C1839840.0%2C1781207.99%2C3670488.0&width=768&height=474&format=application%2Fjson%3Btype%3Dgeojson&crs=EPSG:32614
*/