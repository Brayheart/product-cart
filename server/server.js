const express = require('express');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());


app.get('/', (req, res) => res.json('Hello Rugs USA Team!'))


app.listen(port, () => {
    console.log(`Server app started on port ${port}`);
});
