const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('HOME PAGE BEFORE');
    /* res.send('Home Page display'); */ //Error
    console.log('Something')
    next();
    console.log('HOME PAGE AFTER');
})

module.exports = router;
