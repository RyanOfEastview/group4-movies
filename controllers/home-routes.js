const router = require("express").Router();

// const sequelize = require('../config/connection');
const { User, Post } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
  console.log(req.session);
  console.log("======================");
  Post.findAll({
    attributes: [
        "id",
      "user_id",
      "movie_title",
      "movieDescription"
      // 'title',
      // 'created_at',
      // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    // include: [
    // {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //     include: {
    //         model: User,
    //         attributes: ['username']
    //     }
    // },
    //     {
    //         model: User,
    //         attributes: ['username']
    //     }
    // ]
  })
    .then((dbUserData) => {
      const posts = dbUserData.map((post) => post.get({ plain: true }));

      res.render("homepage", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;


// const router = require("express").Router();

// // const sequelize = require('../config/connection');
// const { User } = require("../models");

// // get all users for homepage
// router.get("/", (req, res) => {
//   console.log(req.session);
//   console.log("======================");
//   User.findAll({
//     attributes: [
//       "id",
//       "username",
//       "email",
//       // 'title',
//       // 'created_at',
//       // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//     ],
//     // include: [
//     // {
//     //     model: Comment,
//     //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//     //     include: {
//     //         model: User,
//     //         attributes: ['username']
//     //     }
//     // },
//     //     {
//     //         model: User,
//     //         attributes: ['username']
//     //     }
//     // ]
//   })
//     .then((dbUserData) => {
//       const users = dbUserData.map((user) => user.get({ plain: true }));

//       res.render("homepage", { users });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

// module.exports = router;
