
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));
// we have added views and public both to path so we can now consider them to be in this path where index.js is

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    var data = {
        name: "debasmit",
        roll: "69",
        class: "X"
    };
    res.render('index', data);
});

app.listen(port, ()=> {
    console.log(`Listening on port http://localhost:${port}`);
});
