//configuraciones globales de enrutadores o direcciones del sitio (urls)
const {
    Router
} = require('express'); //express y su dependencia router para manejar direcciones url desde HTTP
const router = Router();

const pool = require('../db'); //conexión con la base de datos

//funciones de control que vienen de root/src/controllers/controller 
//contiene funciones de respuesta al enrutamiento
const {
    bienvenida,
    getAllElements,
    getSingleElement,
    createElement,
    deleteElement,
    updateElement
} = require('../controllers/controller');

//Funcion base
/*
router.method('/url', funcionReferencia);

method es reemplazado por el método de http que se requiera (GET, POST, DELETE, PUT)
url va a ser la dirección a la que se va a acceder para ejecutar la funcionReferencia
*/
//router, por metodo get en la dirección localhost:4000/ regresa la función bienvenida que está en controller.js
router.get('/', bienvenida);

//-----------------RUTAS DE TESTING-----------------

// Test de envío de archivo JSON
router.get('/jsontest', (req,res) =>{
    res.json({
        propiedad: 'Este es un ejemplo de un envío de un objeto json desde el backend'
    });
});

// Prueba de conexión a la base de datos
router.get('/dbconection', async (req, res) => {
    const resultado = await pool.query('SELECT NOW()');
    console.log(resultado);
    res.json(resultado.rows[0].now);
});

//-----------------CRUD CREATE READ UPDATE DELETE-----------------

//-----------------READ-----------------
router.get('/crudelement', getAllElements);

router.get('/crudelement/:id', getSingleElement);

//-----------------CREATE-----------------
router.post('/crudelement', createElement);

//-----------------DELETE-----------------
router.delete('/crudelement/:id', deleteElement);

//-----------------UPDATE-----------------
router.put('/crudelement/:id', updateElement);

//exportación para su uso en index.js
module.exports = router;