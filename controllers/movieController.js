const config = require("../db");
const sql = require('mssql');


const allMovies = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from cinema");
        res.json(products.recordsets);
    }
    catch (error) {
        console.log(error);
    }
}

const movideById = async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT *
             FROM film
             WHERE film_id = ${req.params.id}`
        );

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
}

const addMovie = async (req, res) => {
    const body = req.body
    try {
        var values = [
            [body.film_id, body.titulli, body.zhaner, body.dimensioni, body.kohezgjatja, body.mosha_lejuar]
        ]

        const result = await pool.query(format(
            `INSERT INTO FILM (film_id, titulli, zhaner, dimensioni, kohezgjatja, mosha_lejuar)
             VALUES %L`,
            values
        ));

        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
    }
}

const updateMovie = async (req, res) => {
    const body = req.body

    try {
        const id = parseInt(req.params.id);
        const result = await pool.query(
            `UPDATE film set titulli = $1, zhaner = $2, dimensioni = $3, kohezgjatja = $4, mosha_lejuar = $5
             WHERE film_id = $6`,
            [body.titulli, body.zhaner, body.dimensioni, body.kohezgjatja, body.mosha_lejuar, id]
        );

        res.json('Succes');
    } catch (err) {
        console.error(err.message);
    }
}

const deleteMovie = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await pool.query('DELETE FROM film WHERE film_id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
}


module.exports = {
    allMovies,
    movideById,
    addMovie,
    updateMovie,
    deleteMovie
}