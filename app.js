const express = require('express');
const app = express();
const hbs = require("hbs");
const router = require('./config/routes.config');

app.use(router);
app.use(express.static("public"));

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

hbs.registerPartials(__dirname + "/views/partials");



const port = 3000;
app.listen(port, () => console.log(`Application running at port ${port}`));