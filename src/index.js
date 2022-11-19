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
app.use(morgan('dev'));//peticiones por consola
app.use(express.json());//hecho para que express entienda json
app.use(Routes);//usamos lo que tenga rutas
app.use((err,req,res,next)=>{
    return res.json({
        message: err.message
    })
});
//Puerto de conexión
app.listen(4000);
console.log('El servidor está en el puerto 4000');