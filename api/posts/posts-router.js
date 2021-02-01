const express = require('express');
const Posts = require('./posts-model')
const router = express.Router();

router.get('/', (req, res, next) => {
  Posts.get(req.query)
    .then(posts => {
      res.status(200).json(posts)
    })
  .catch(error => {
    res.status(400).json(error.message)
  })
});

router.get('/:id',  (req, res) => {
  Posts.getById(req.params.id)
    .then(post => {
      res.status(200).json(post)
    })
  .catch(error => {
    res.status(400).json(error.message)
  })
});

router.post('/',  (req, res, next) => {
  Posts.insert(req.body)
    .then(newPost => {
      res.status(200).json(newPost)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
});

router.delete('/:id',  (req, res, next) => {
  Posts.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "the post has been deleted" })
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
});

router.put('/:id', (req, res, next) => {
  Posts.update(req.params.id, req.body)
    .then(() => {
      res.status(200).json(req.body)
    })
    .catch(error => {
      res.status(400).json(error.message)
    })
});

module.exports = router;