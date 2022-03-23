const authMiddleware = (req, res, next) => {
    if (req.query.username === 'admin' && req.query.password === '123') {
        req.user = req.query.username;
        next()
    } else {
        res.status(401).send('Unatuhorized');
    }
}

export default authMiddleware;