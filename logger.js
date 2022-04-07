const logger = (req, res, next) => {
    console.log('LOG');
    console.log('BEFORE IN LOGGER');
    /* console.log(`The Url is : ${ req.originalUrl }`); */
    next();
    /* return; */ //if you don't put return, it continues
    console.log('AFTER IN LOGGER'); //continue until the end
        
};

module.exports = logger;