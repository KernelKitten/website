const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const port = 3000;

async function start()
{
  await db.connect();

  app.use(express.static(path.join(__dirname, 'public')));

  app.listen(port, () =>
    {
        console.log(`🚀 Server started: http://localhost:${port}`);
    });
}

module.exports = { start };