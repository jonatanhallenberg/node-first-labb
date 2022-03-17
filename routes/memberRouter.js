import express from 'express';
import pg from 'pg';
const { Pool } = pg;
import { getMembers } from '../db/member.js';

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Funkar');
})

router.get('/', async (req, res) => {
    const members = await getMembers();
    res.json(members);
})

export default router;