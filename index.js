const express = require('express')
const app = express()
const port = 2002
const myvar = process.env.myvar || 'default';

app.get('/', (req, res) => res.send(`Hello Akki!! How are you? Welcome home ${myvar}`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
