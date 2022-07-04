
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 80;

app.use('/', express.static(path.join(__dirname, 'views')));
app.get('/', (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, ()=> {
    console.log(`Listening on port http://localhost:${port}`);
});
