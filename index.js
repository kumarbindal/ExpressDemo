const express = require('express')
const app = express()
const port = 2002

app.get('/', (req, res) => res.send('Hello Akki!! How are you?'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
