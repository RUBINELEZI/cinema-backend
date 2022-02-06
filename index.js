const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const cors = require("cors");
const pool = require("./db");

//routes
const movie = require("./routes/Movie")
const city = require("./routes/City")

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/movies", movie)
app.use("/city", city)



app.get("/", async (req, res) => {
    try {
      const newTodo = await pool.query(
        "SELECT * FROM kinema"
      );
  
      res.json(newTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

app.listen(5000, () => {
    console.log('Server has started')
})