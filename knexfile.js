require('dotenv').config()
const pg = require('pg')
if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false }
}
const sharedConfig = {
  client: 'pg',
  migrations: { directory: './api/data/migrations' },
  seeds: { directory: './api/data/seeds' },
}
module.exports = {
  development: {
    ...sharedConfig,
    connection: 'postgresql://postgres:Harperr23@localhost/build_week'
  },
  production: {
    ...sharedConfig,
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
  },
}