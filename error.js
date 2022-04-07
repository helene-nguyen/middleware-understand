const error = function (req, res, next) {
    res.status(404).send('ERROR 404');
    console.log("ERROR");
}

module.exports = error;