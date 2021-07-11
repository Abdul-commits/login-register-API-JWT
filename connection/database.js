const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/MCBIRD", {
    useCreateIndex: true,
    useUnifiedaTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection OK");
  })
  .catch(() => {
    console.log("failed");
  });