const mongoose = require("mongoose");

const db = async () => {
  await mongoose.connect(
    "mongodb+srv://bhargavdankhara17:Bhar19Dan4555@cluster0.c1g0srj.mongodb.net/blog"
  );
  console.log("Data base is connected");
};

module.exports = db;
