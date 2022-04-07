const mw2 = (req, res, next) => {
    console.log(`I AM MIDDLEWARE 2`);
    next();
    console.log('I AM MIDDLEWARE 2 AFTER');
 };
 
 module.exports = mw2;