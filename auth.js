const auth = (req, res, next) => {
    if (req.query.admin === 'true') {
        console.log(req.query);
        //http://localhost:3000/users?admin=true
        req.admin = true;
        next();
        return;
    }// else {
        res.send('NO AUTHENTIFICATION');
        console.log('NEED AUTH');
    //} //if you remove else, common problem because execute first auth, then take the func, then continue
    //so you have to put the return in the if condition to stop

};

module.exports = auth;