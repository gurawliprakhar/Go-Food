const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://gurawliprakhar:1234prak@cluster0.ug0cmuu.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    
    const foodItemsCollection = mongoose.connection.db.collection("food_items");
    const foodItemsData = await foodItemsCollection.find({}).toArray();
    console.log("Fetched food items data:", foodItemsData);
    global.food_items = foodItemsData; // Adding fetched data to global object

    const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");
    foodCategoryCollection.find({}).toArray(function(err, foodCategoryData) {
      if (err) {
        console.error("Error fetching food category data:", err);
        return;
      }
      console.log("Fetched food category data:", foodCategoryData);
      global.foodCategory = foodCategoryData; // Adding fetched data to global object
    });

    console.log(global.food_items);
    console.log(global.foodCategory);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
