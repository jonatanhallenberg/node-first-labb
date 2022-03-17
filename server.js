
const express = require("express");
const pg = require("pg");
const sum = require('./sum.js');

console.log(process.env.NODE_ENV);

const app = express()
const port = 3030

app.use(express.json())

app.post('/member', (req, res) => {
    console.log(req.body);
    res.send('Funkar');
})

app.get('/member', async (req, res) => {
    const client = new pg.Client({
        user: 'postgres',
        host: 'localhost',
        database: 'Club',
        password: 'changeme',
        port: 5432,
    })
    await client.connect()
    const dbResponse = await client.query('SELECT id, firstname, lastname, address FROM public.members;')
    await client.end()
    res.json(dbResponse.rows);
})

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