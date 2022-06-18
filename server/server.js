const express = require('express');
const path = require('path');
const cors = require('cors')

const port = process.env.PORT || 8080;

const app = express();

const routes = require('./routes');

app.use(cors())

app.use(express.json());

app.use(express.static(path.join(__dirname, './app')))

app.use('/api', routes);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, './app/index.html')))

app.listen(port, () => {
    console.log(`Server app started on port ${port}`);
});
