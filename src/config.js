const {config}= require('dotenv');//Totenv es para leer archivos .env en la carpeta raíz del proyecto
config()//Corremos la configuración de dotenv para que encuentre el archivo.env y lo ponga en memoria

//Creamos el objeto db con las variables que se traen desde .env para generar la conexión con la base de datos
//después de procesar los datos que vienen de ahi y crear el objeto se exporta como módulo
module.exports = { 
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE
    }
}