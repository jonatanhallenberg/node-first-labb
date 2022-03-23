import express from 'express';
import pg from 'pg';
const { Pool } = pg;
import { getMembers } from '../db/member.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/', (req, res) => {
    console.log('What is req.foo in the router?', req.foo);
    console.log(req.body);
    res.send('Funkar');
})

router.get('/', async (req, res) => {
    const members = await getMembers();
    res.json(members);
})

export default router;