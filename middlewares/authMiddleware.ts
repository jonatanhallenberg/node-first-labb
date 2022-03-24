import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.query.username === 'admin' && req.query.password === '123') {
        req.user = req.query.username;
        next()
    } else {
        res.status(401).send('Unatuhorized');
    }
}

export default authMiddleware;