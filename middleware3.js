const mw3 = (req, res, next) => {
    console.log(`I AM MIDDLEWARE 3`);
    next();
    
 };
 
 module.exports = mw3;