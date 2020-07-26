const router=require('express').Router();

//rutas
router.get('/', (req, res) => {
     	//res.send('hola te escucho bien desde el get');
     	res.render('index'); //no es necesario q la extension se aclare, hemos definido encima, q sera por defecto ejs
});

module.exports=router;