const express = require('express')
const app = express()
const port = 2002
const myvar = process.env.myvar || 'default';
const killProcess = process.env.killProcess || false;

process.on('SIGHUP', () => {
  console.log('Got SIGHUP signal.');
});

if (killProcess === true) {
  process.kill(process.pid, 'SIGHUP');
}

app.get('/', (req, res) => res.send(`Hello Akki!! How are you? Welcome home ${myvar}`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
