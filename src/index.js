//Dependencias globales
const express = require ('express');
const morgan = require ('morgan');
const cors = require('cors');
//Dependencias locales
const Routes = require ('./routes/routes');//requerimos lo que envíe el archivo de rutas
//Configuraciones globales
const app = express();
//Configuraciones locales
app.use(cors());
app.use(morgan('dev'));//peticiones HTTP por consola
app.use(express.json());//Para que express entienda json
app.use(Routes);//usamos lo que tenga rutas
//Definimos una función next que va a recibir un error y va a regresar un json con un mensaje del error
app.use((err,req,res,next)=>{
    return res.json({
        message: err.message
    })
});
//Puerto de conexión
app.listen(4000);
console.log('El servidor está en el puerto 4000');