const router = require("express").Router();

router.get("/product", (req, res) => {
  res.render("product", {
    name: "Air force",
    desc: "Air force shoes",
    img: "https://i.pinimg.com/236x/17/15/4d/17154d20f2b8f832d68628fd6c3978c5.jpg",
  });
});


module.exports = router;
