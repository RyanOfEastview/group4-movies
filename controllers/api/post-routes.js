const router = require("express").Router();
const { Post, User } = require("../../models");

// GET /api/posts (movies)
router.get("/", (req, res) => {
  // Access our Post model and run .findAll() method
  Post.findAll({})
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/posts/1
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/posts
// I think this is where the API will be connected.  I THINK.
router.post("/", (req, res) => {
  // expects {username: '', email: '@.com', pw: ''}
  Post.create({
    movie_title: req.body.movie_title,
    year: req.body.year,
    post_url: req.body.post_url,
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
