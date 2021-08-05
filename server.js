// NOTE: External Modules
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const PORT = process.env.PORT || 4000;

// NOTE: Internal Modules
const controllers = require('./controllers');

// NOTE: App Config
app.set('view engine', 'ejs');

// NOTE: Middleware 
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));


// SECTION: Controller Files 
app.use('/video', controllers.video);

app.use('/comment', controllers.comment);

app.use('/genre', controllers.genre);

// SECTION: Index Page
app.get('/', (req, res) => {
  res.redirect('/video');
});

// NOTE: 404 Page
app.get("/*", (req, res) => {
    const context = {
      error: req.error,
    };
  
    res.render("videos/404", context);
  });

app.listen(PORT, () => {
    console.log(`I live on port ${PORT}`);
});
