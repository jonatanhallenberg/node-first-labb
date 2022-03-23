import dotenv from 'dotenv';
import express from 'express';
import memberRouter from './routes/memberRouter.js';
import authMiddleware from './middlewares/authMiddleware.js';
//Vi anropar POST /member

dotenv.config({ path: `config/.env.${process.env.NODE_ENV}` });

const app = express()
const port = 3030

app.use(express.json());

app.use('/member', memberRouter);

app.get('/', (req, res) => {
    res.send('Hello World 123 abc!')
})

app.get('/hello', (req, res) => {
    console.log(req.query);
    res.send(`Hej ${req.query.firstname} ${req.query.lastname} från företaget ${req.query.company}!`);
})

app.get('/post/:postId/comment/:commentId', (req, res) => {
    res.json(req.params);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})