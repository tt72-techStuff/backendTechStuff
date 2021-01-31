require("dotenv").config();

const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/auth";

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/blog.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },


  // production: {
  //   client: "pg",
  //   connection: pgConnection,
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     directory: "./database/migrations",
  //   },
  //   seeds: {
  //     directory: "./database/seeds",
  //   },
  // },

};
