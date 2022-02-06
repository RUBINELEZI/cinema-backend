const config = require("../db");
const sql = require('mssql');


const allCities = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from city");
        res.json(products.recordsets[0]);
    }
    catch (error) {
        console.log(error);
    }
}

const cityById = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        const result = await pool.request().query(
            `SELECT *
             FROM city
             WHERE CITY_ID = ${req.params.id}`
        );

        res.json(result.recordsets[0]);
    } catch (err) {
        console.error(err.message);
    }
}

const addCity = async (req, res) => {
        
    const body = req.body
    try {
        let pool = await sql.connect(config);
        
        const result = await pool.request()
        .input('CITY_ID',  body.CITY_ID)
        .input('CITY_NAME',  body.CITY_NAME)
        .input('CITY_ZIP', body.CITY_ZIP)
        .query('INSERT INTO CITY(CITY_ID, CITY_NAME, CITY_ZIP) VALUES (@CITY_ID, @CITY_NAME, @CITY_ZIP)');
        
        res.json("Succesfully added");
    } catch (err) {
        res.json(err.message);
    }
}

const updateCity = async (req, res) => {
    const body = req.body

    try {
        let pool = await sql.connect(config);
        
        const id = parseInt(req.params.id);

        const result = await pool.request()
        .input('CITY_ID',  body.CITY_ID)
        .input('CITY_NAME',  body.CITY_NAME)
        .input('CITY_ZIP', body.CITY_ZIP)
        .query(`UPDATE city SET CITY_NAME = @CITY_NAME, CITY_ZIP = @CITY_ZIP WHERE CITY_ID = ${id}`);
    
        res.json("Succesfully updated");
    } catch (err) {
        console.error(err.message);
    }
}

const deleteCity = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        let pool = await sql.connect(config);
        
        const id = parseInt(req.params.id);

        const result = await pool.request()
        .input('CITY_ID',  id)
        .query(`DELETE FROM city WHERE CITY_ID = ${id}`);
        res.json("Succesfully deleted");
    } catch (err) {
        console.error(err.message);
    }
}


module.exports = {
    allCities,
    cityById,
    addCity,
    updateCity,
    deleteCity
}