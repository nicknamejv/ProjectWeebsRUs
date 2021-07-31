// NOTE: External Modules
const express = require('express');
const app = express();
const PORT = 4000;

// NOTE: App Config
app.set('view engine', 'ejs');

// NOTE: INDEX Route
app.get('/index', (req, res) => {
    return res.render('videos/index');
});

// NOTE: CREATE Route
app.post('/new', (req, res) => {
    res.send('This is a CREATE route!');
});

// NOTE: SHOW Route 
app.get('/video/:id', (req, res) => {
    res.send('This is the SHOW page');
});

// NOTE: EDIT Route
app.get('/video/id/edit', (req, res) => {
    res.send('This is the EDIT page');
});

// NOTE: UPDATE Route
app.put('/video/id', (req, res, next) => {
    res.send('This is the UPDATE page');
    next();
});

// NOTE: DESTROY Route
app.delete('/video/id', (req, res) => {
    res.send('This is the DESTROY page');
});


app.listen(PORT, () => {
    console.log(`I live on port ${PORT}`);
});
