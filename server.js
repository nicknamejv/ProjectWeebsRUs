//NOTE External Modules
const express = require('express');
const app = express();
const PORT = 4000;

//NOTE Routes
app.get('/index', (req, res) => {
    res.send('home route');
});



app.listen(PORT, () => {
    console.log(`I live on port ${PORT}`);
});