const express = require("express");
const app = express();
app.set("view engine", "ejs");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");

app.use("/api", userRouter);
app.use("/api", productRouter);

const port = 3000;
app.listen(port, () => {
  console.log("server is running on port 3000");
});
