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
app.get('/video/:id' , (req, res) => {
    res.send('This is the SHOW page');
});

// NOTE: EDIT Route

// NOTE: UPDATE Route

// NOTE: DESTROY Route


app.listen(PORT, () => {
    console.log(`I live on port ${PORT}`);
});