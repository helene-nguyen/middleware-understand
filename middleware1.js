const mw1 = (req, res, next) => {
    console.log(`I AM MIDDLEWARE 1`);
    next();
    console.log(`I AM MIDDLEWARE 1 AFTER`);
};

module.exports = mw1;