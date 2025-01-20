const mongoose = require("mongoose");

let instance = null;

class Database {
  constructor() {
    if (!instance) {
      this.mongoConnection = null;
      instance = this;
    }
    return instance;
  }

  async connect(options) {
    let db = await mongoose.connect(options.CONNECTION_STRING);

    this.mongoConnection = db;
    console.log("Db connected");
  }
}

module.exports = Database;
