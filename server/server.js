const express = require('express');
var cors = require('cors')

const port = process.env.PORT || 8080;

const app = express();

const routes = require('./routes');

app.use(express.json());

app.use(cors())

app.use('/api', routes);

app.get('/', (req, res) => res.json('Hello Rugs USA Team!'))

app.listen(port, () => {
    console.log(`Server app started on port ${port}`);
});
