//configuraciones globales de enrutadores o direcciones del sitio (urls)
const {
    Router
} = require('express'); //express y su dependencia router para manejar direcciones url
const router = Router();

const pool = require('../db'); //conexión con la base de datos

//funciones de control que vienen de root/src/controllers/controller que contiene funciones de respuesta al enrutamiento
const {
    bienvenida,
    login,
    signin,
    content,
    about,
    getAllElements,
    getSingleElement,
    createElement,
    deleteElement,
    updateElement
} = require('../controllers/controller');
//Funcion base
//router, por metodo get en la dirección localhost:3000/ regresa la función bienvenida que está en controller.js
router.get('/', bienvenida);

router.get('/login', login);

router.get('/signin', signin);

router.get('/content', content);

router.get('/about', about);

//CRUD CREATE READ UPDATE DELETE

//-----------------READ-----------------
router.get('/crudelement', getAllElements);

router.get('/crudelement/:id', getSingleElement);

//-----------------CREATE-----------------
router.post('/crudelement', createElement);

//-----------------DELETE-----------------
router.delete('/crudelement/:id', deleteElement);

//-----------------UPDATE-----------------
router.put('/crudelement/:id', updateElement);

// PRUEBA PARA CONEXIÓN A BASE DE DATOS
router.get('/dbconection', async (req, res) => {
    const resultado = await pool.query('SELECT NOW()');
    console.log(resultado);
    res.json(resultado.rows[0].now);
});

//exportación para su uso
module.exports = router;