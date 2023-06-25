const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const Router = require('../Router/routes');

const PORT = process.env.PORT || 8080

app.set('view engine', 'hbs');
app.use(express.static('public'));

hbs.registerPartials(path.resolve(__dirname, '../partials'));
app.use(Router)

app.listen(PORT, () => {
    console.log('Listening to the port at ', PORT);
});