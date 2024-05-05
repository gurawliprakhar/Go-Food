const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://gurawliprakhar:1234prak@cluster0.ug0cmuu.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    const collection = mongoose.connection.db.collection("food_items");
    const fetchedData = await collection.find({}).toArray();
    console.log("Fetched data:", fetchedData);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
