const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  isValid,
};

function find() {
  return db("users as u")
    .join("roles as r", "u.role", "=", "r.id")
    .select("u.id", "u.username", "u.email", "r.name as role");
}

function findBy(filter) {
  return db("users as u")
    .join("roles as r", "u.role", "=", "r.id")
    .select("u.id", "u.username", "r.name as role", "u.password")
    .where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function findById(id) {
  return db("users as u")
    .join("roles as r", "u.role", "=", "r.id")
    .select("u.id", "u.username", "u.email", "r.name as role")
    .where("u.id", id)
    .first();
}

function isValid(user) {
  return Boolean(user.username && user.email && user.password && typeof user.password === "string");
}