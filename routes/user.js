const router = require("express").Router();

router.get("/user", (req, res) => {
  res.render("index", {
    name: "titou",
    desc: "hello titou welcome to your page",
  });
});

router.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`this user has an id of ${userId}`);
});

module.exports = router;
