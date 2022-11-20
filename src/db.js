const {Pool} = require('pg');//ORM para la conexión a la base de datos
const {db} =require('./config');//requerimos la configuración para la conexión

const pool = new Pool({//Pool hace una nueva conexión a la DB
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database
});

module.exports=pool;//Se exporta el módulo para su uso