const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv').config();

const app = express();

var corsOptions = {
    origin: "http://localhost:5000"
  };

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to mern app!"})
})

require("./routes/user.routes")(app)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
