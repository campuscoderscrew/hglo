const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 5000;

//Enable fetching
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "Testing backend" })
});

app.listen(port, () => {
    console.log(`Server running!! http://localhost:${port}`)
})

