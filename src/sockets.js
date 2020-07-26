module.exports = io =>{
	io.on('connection',(socket)=>{
		console.log('usuario conectado');

		socket.on('usercordenada',coordenadas => {
			//console.log(coordenadas);
			//voy a enviarle un mensaje a todos los usuarios conectados
			 socket.broadcast.emit('nuevasCoordenadas', coordenadas);

		});

	});

	
}