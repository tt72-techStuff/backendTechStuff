const router = require("express").Router();
const Users = require("./users-model.js").default;
const restricted = require("../auth/restricted-middleware.js");
const restrictRole = require('../auth/rolerestriced-middleware.js')

router.get("/", restricted, restrictRole('admin'), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get("/:id", restricted, restrictRole('admin'), (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

router.get("/current", restricted, (req, res) => {
  const { username } = req.body;

  Users.findBy({username: username})
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

module.exports = router;