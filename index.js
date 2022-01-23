const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//routes
const movie = require("./routes/Movie")

app.use(cors());
app.use(express.json())
app.use("/movies", movie)



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