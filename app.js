const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.static("public"));


app.get('/', (req, res, next) => {
    res.render('home');
})

app.get('/about', (req, res, next) => {
    res.render('about');
})

app.get('/works', (req, res, next) => {
    res.render('works');
})

app.get('/gallery', (req, res, next) => {
    res.render('gallery');
})


const port = 3000;
app.listen(port, () => console.log(`Application running at port ${port}`));