const path = require('path');
const express = require('express');

const app = express();

// Serve the final html build file
app.use(express.static(path.join(__dirname, '../public/dist')));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(8080, () => console.log('Example app listening on port 8080!'));
