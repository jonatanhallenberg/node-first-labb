import express from 'express';
import pg from 'pg';
const { Pool } = pg;
import { getMembers } from '../db/member';
import authMiddleware from '../middlewares/authMiddleware';
import { Request } from 'express';

const router = express.Router();

router.use(authMiddleware);

router.post('/', (req: Request, res) => {
    console.log('What is req.foo in the router?', req.foo);
    console.log(req.body);
    res.send('Funkar');
})

router.get('/', async (req, res) => {
    const members = await getMembers();
    res.json(members);
})

export default router;