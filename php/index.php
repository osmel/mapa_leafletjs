<?

//echo 'asd'; die;
$cURLConnection = curl_init();

ini_set('memory_limit', '-1');


curl_setopt($cURLConnection, CURLOPT_URL, 'http://34.229.148.247:8080/geoserver/web_altanredes/wms?service=WMS&authkey=5749ae868ea5&version=1.1.0&request=GetMap&layers=web_altanredes%3ACobertura%20Producto_20HBB_V01_Red%20Compartida_W26&bbox=-1183536.0%2C1839840.0%2C1781207.99%2C3670488.0&width=768&height=474&srs=EPSG%3A32614&format=application%2Fjson%3Btype%3Dgeojson');
curl_setopt($cURLConnection, CURLOPT_RETURNTRANSFER, true);

$phoneList = curl_exec($cURLConnection);
curl_close($cURLConnection);

//$jsonArrayResponse = json_decode($phoneList);

echo ($phoneList);

die;
