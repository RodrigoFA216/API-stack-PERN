//ejecutará funciones cuando una url sea ejecutada o consultada
const pool = require('../db');

const bienvenida = (req, res) => {
    res.send('Este es un ejemplo de envío desde el backend de una respuesta en texto plano');
};

//CRUD CREATE READ UPDATE DELETE

//-----------------READ-----------------
const getAllElements = async (req, res, next) => {
    try {
        const allElements = await pool.query('SELECT * FROM elementos');
        console.log(allElements);
        res.json(allElements.rows);
    } catch (error) {
        next(error);
        //console.log(error.message);
        // para regresar un error personalizado usamos 
        // throw new Error('algo fue mal');
    }
}

const getSingleElement = async (req, res, next) => {
    try {
        const {
            id
        } = req.params;

        const result = await pool.query('SELECT * FROM elementos WHERE id = $1', [id]);

        console.log(result); //result estará vacío si no encontró nada

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'no se encontró el elemento'
            })
        }
        //console.log(req.params.id);//con esto ves por consola lo que se manda por el /:id
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
        //console.log(error.message);
    }
}

//-----------------CREATE-----------------
const createElement = async (req, res, next) => {
    const {
        title,
        descripcion
    } = req.body;

    //console.log(title, descripcion); 
    // muestra lo quenos manda el body en la consola se puede usar express validator o joi para validar objetos json

    try {

        const result = await pool.query('INSERT INTO elementos (title, descripcion) VALUES ($1, $2) RETURNING *', [title, descripcion]);
        res.json(result.rows[0]);

    } catch (error) {
        next(error);
        //console.log(error.message);
        // res.json({
        //     error: error.message
        // });
    }
}

//-----------------DELETE-----------------
const deleteElement = async (req, res, next) => {
    const {
        id
    } = req.params;

    try {
        const result = await pool.query('DELETE FROM elementos WHERE id = $1 RETURNING *', [id]);

        console.log(result);
        // en el objeto que devuelve en la propiedad rowcount si es 0 no lo encontró y no modificó nada
        //si es 1 si lo encontró y le dio cuello
        //gracias al RETURNING * la db va a devolver el coso que eliminó en la propiedad rows[]
    
        if (result.rowCount === 0) {
            return res.status(404).json({
                message: "Elemento no encontrado"
            });
        }
    } catch (error) {
        next(error);
    }

    return res.sendStatus(204);
};

//-----------------UPDATE-----------------
const updateElement = async (req, res, next) => {
    const {id} = req.params;
    const {title, descripcion} = req.body;
    try {
        const result = await pool.query(
            "UPDATE elementos SET title = $1, descripcion = $2 WHERE id = $3 RETURNING *", 
            [title, descripcion, id]
        );
        if (result.rows.length===0) {
            return res.status(404).json({
                message:"elemento no encontrado",
            })
        }

        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    //     console.log(error.message);
    //     res.json({
    //         error: error.message
    //     });
    }
    
};


module.exports = {
    bienvenida,
    getAllElements,
    getSingleElement,
    createElement,
    deleteElement,
    updateElement
}