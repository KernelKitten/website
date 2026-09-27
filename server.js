const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const express = require('express');
const path = require('path');
const session = require('express-session');
const fs = require('fs').promises;

let pool;

async function loadConfig()
{
  const fileContent = await fs.readFile('./appsettings.json', 'utf8');
  return JSON.parse(fileContent);
}


async function connect()
{
  const config = await loadConfig();
  const dbConfig = config.Connection;

  pool = new Pool({
    user: dbConfig.user,
    host: dbConfig.host,
    database: dbConfig.database,
    password: dbConfig.password,
    port: dbConfig.port,
  });

  await pool.query('SELECT 1');
  console.log('Pool успешно инициализирован!');
}


async function start()
{
    await connect();
}

module.exports = start;