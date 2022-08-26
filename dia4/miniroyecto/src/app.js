const express = require('express');
const cors = require('cors');

const errorHandling = require('./error/errorHandling')
const testsRouter = require('./router/tests.router')
const movieRouter = require('./router/movie.router')
const actorRouter = require('./router/actor.router')
const directorRouter = require('./router/director.router')
const writerRouter = require('./router/writer.router')

const app = express();

app.set('port', process.env.PORT || 5555);

app.use(cors());
app.use(express.json());

//routers
app.use(testsRouter);
app.use(movieRouter);
app.use(actorRouter);
app.use(directorRouter);
app.use(writerRouter);


app.use( (req, res, next) => {
    res.status(404);
    res.json({message: '404 Resource not found at ' + req.url})
})

app.use(errorHandling)

module.exports = app;