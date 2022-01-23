
const pool = require("../db");


  const allMovies = async (req, res) => {  
    try {
        const result = await pool.query(
          "SELECT * FROM film"
        );
    

        if (!result.rows[0]) return res.json({
            error: {
              status: 400,
            }
          });

        res.json(result.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
}

const movideById = async (req, res) => {  
    try {
        const result = await pool.query(
          `SELECT * FROM film WHERE film_id = ${req.params.id}`
        );
        
        res.json(result.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
}

const addMovie = async (req, res) => {  
    try {
        const newTodo = await pool.query(
          "SELECT * FROM film"
        );
    
        res.json(newTodo.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
}

const updateMovie = async (req, res) => {  
    try {
        const newTodo = await pool.query(
          "SELECT * FROM film"
        );
    
        res.json(newTodo.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
}

const deleteMovie = async (req, res) => {  
    try {
        const newTodo = await pool.query(
          "SELECT * FROM film"
        );
    
        res.json(newTodo.rows[0]);
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