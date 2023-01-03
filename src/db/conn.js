const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => {
    console.log(`connection established successfully..`);
  })
  .catch((e) => {
    console.log(`Oops there is some error while connecting..`);
  });
