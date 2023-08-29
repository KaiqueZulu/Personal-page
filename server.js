const express = require('express');
const router = require('./JS/routes');
const app = express();
const PORT = process.env.PORT || 5000

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/'));
app.use(router);

app.listen(PORT, () => {
    console.log("Servidor rodando!");
});