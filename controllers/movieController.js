const config = require("../db");
const sql = require('mssql');


const allMovies = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from movie");
        res.json(products.recordsets[0]);
    }
    catch (error) {
        console.log(error);
    }
}

const movideById = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        const result = await pool.request().query(
            `SELECT *
             FROM movie
             WHERE movie_id = ${req.params.id}`
        );

        res.json(result.recordsets[0]);
    } catch (err) {
        console.error(err.message);
    }
}

const addMovie = async (req, res) => {
        
    const body = req.body
    try {
        let pool = await sql.connect(config);
        
        const result = await pool.request()
        .input('MOVIE_ID',  body.MOVIE_ID)
        .input('MOVIE_TITLE',  body.MOVIE_TITLE)
        .input('MOVIE_YEAR', body.MOVIE_YEAR)
        .input('MOVIE_DESCRIPTION',  body.MOVIE_DESCRIPTION)
        .input('MOVIE_DURATION', body.MOVIE_DURATION)
        .input('MOVIE_FORMAT', body.MOVIE_FORMAT)
        .input('MOVIE_AUDIENCE', body.MOVIE_AUDIENCE)
        .query('INSERT INTO MOVIE(MOVIE_ID, MOVIE_TITLE, MOVIE_YEAR, MOVIE_DESCRIPTION, MOVIE_DURATION, MOVIE_FORMAT, MOVIE_AUDIENCE) VALUES (@MOVIE_ID, @MOVIE_TITLE, @MOVIE_YEAR, @MOVIE_DESCRIPTION, @MOVIE_DURATION, @MOVIE_FORMAT, @MOVIE_AUDIENCE)');
        
        res.json("Succesfully added");
    } catch (err) {
        res.json(err.message);
    }
}

const updateMovie = async (req, res) => {
    const body = req.body

    try {
        let pool = await sql.connect(config);
        
        const id = parseInt(req.params.id);

        const result = await pool.request()
        .input('MOVIE_ID',  body.MOVIE_ID)
        .input('MOVIE_TITLE',  body.MOVIE_TITLE)
        .input('MOVIE_YEAR', body.MOVIE_YEAR)
        .input('MOVIE_DESCRIPTION',  body.MOVIE_DESCRIPTION)
        .input('MOVIE_DURATION', body.MOVIE_DURATION)
        .input('MOVIE_FORMAT', body.MOVIE_FORMAT)
        .input('MOVIE_AUDIENCE', body.MOVIE_AUDIENCE)
        .query(`UPDATE movie SET MOVIE_TITLE = @MOVIE_TITLE, MOVIE_YEAR = @MOVIE_YEAR, MOVIE_DESCRIPTION = @MOVIE_DESCRIPTION, MOVIE_DURATION = @MOVIE_DURATION, MOVIE_FORMAT = @MOVIE_FORMAT, MOVIE_AUDIENCE = @MOVIE_AUDIENCE WHERE MOVIE_ID = ${id}`);
    
        res.json("Succesfully updated");
    } catch (err) {
        console.error(err.message);
    }
}

const deleteMovie = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const result = await pool.query('DELETE FROM movie WHERE MOVIE_ID = $1', [id]);
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