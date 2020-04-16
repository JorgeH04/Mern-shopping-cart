if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  } 

const path = require('path');
const express = require('express');
const passport = require('passport');
const session = require('express-session');

const app = express();

//bbdd
const { mongoose } = require('./database');
require('./config/passport');




//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(express.json());

app.use(express.static(path.join(__dirname, 'views')));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 180 * 60 * 1000 }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  res.locals.session = req.session;
  next();
})



//routes
app.use('/api/post', require('./routes/index'));
app.use(require('./routes/users'));


// server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

