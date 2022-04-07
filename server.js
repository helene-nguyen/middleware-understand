//^import modules
const express = require('express');
const app = express();
//
const log = require('./logger');
const router = require('./router');
const auth = require('./auth');
const mw1 = require('./middleware1');
const mw2 = require('./middleware2');
const mw3 = require('./middleware3');
const error = require('./error');

//~middlewares
app.use(log);
//router
app.use(router);

app.use(mw1);

//log
app.use(mw2);
//auth
app.get('/users', auth, (req, res, next) => {
    console.log('USERS PAGE');
    console.log(`Request is admin = ${req.admin}`);
    res.send('Users page');
    //if you don't put next, never apply log
});

app.use(mw3);



app.use(error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running server on http://localhost:${PORT}`);
})

