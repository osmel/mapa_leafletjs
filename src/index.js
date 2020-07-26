const express=require('express');

const  motor=require('ejs-mate');  //requiero este

const  path=require('path');  //requiero path para evitar la contrabarras de linux y windows

const  socketIO=require('socket.io');   //min 44

const  http=require('http');  


//inicializaciones
const app=express();

const server= http.createServer(app)
const io=socketIO(server);
//const app=express();


//configuraciones
//tenemos un nuevo motor de plantilla definido
app.engine('ejs',motor);  //ejs es el nombre de como quiero q se llame el motor
//voy a establecer en mi aplicacion un nuevo motor de plantilla se llama ejs
app.set('view engine','ejs');
//console.log(__dirname);
//app.set('views',__dirname+'/views');  //establecer donde estan mis vistas
app.set('views', path.join(__dirname,'/views') );




//rutas
/*
app.get('/', (req, res) => {
     	//res.send('hola te escucho bien desde el get');
     	res.render('index'); //no es necesario q la extension se aclare, hemos definido encima, q sera por defecto ejs
});
*/
app.use( require('./routes/') ); //busca por defecto el archivo index

//sockets

require('./sockets')(io);

//ficheros estaticos (.css, imagenes, etc)
app.use(express.static(path.join(__dirname,'/public'))  ); //busca por defecto el archivo index


//levantando el servidor
server.listen(3000, () => {
    	console.log('escuchando en el puerto 3000');
});

