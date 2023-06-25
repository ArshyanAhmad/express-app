const Router = require('express').Router()

Router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home page'
    })
})

Router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About us'
    })
});

Router.get('/weather', (req, res) => {
    res.render('Weather', {
        title: 'Weather App'
    });
});

Router.get('*', (req, res) => {
    res.render('error', {
        title: 'Page not found'
    });
});


module.exports = Router;