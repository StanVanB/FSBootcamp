const express = require('express');
const cors = require('cors');

const app = express();

// Updated Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

// Updated GET route
app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('The Server is On');
});