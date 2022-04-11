// ************ Require's ************
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const userLogs = require('./middlewares/userLogs')
const adminUsers = require('./middlewares/adminUsers')
const port = 4000;
const mainRouter = require('./routes/main.js');

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(userLogs);
app.use(adminUsers);

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', './src/views'); // Seteo de la ubicación de la carpeta "views"



// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
app.use('/', mainRouter);




// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************


// ************ error handler ************
//app.use((err, req, res, next) => {
  // set locals, only providing error in development
  //res.locals.message = err.message;
  //res.locals.path = req.path;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  //res.status(err.status || 500);
  //res.render('error');
  //});
  
  // ************ exports app - dont'touch ************
  app.listen(port, () => { 
    console.log(`\\*-------------------------*\\`);
    console.log(`Server running in ${port} port`);
    console.log(`Now, you can open http://localhost:${port} in your favorite browser `);
    console.log(`Happy programming and never stop learning!`);
    console.log(`\\*-------------------------*\\`);
  });

  module.exports = app;
  