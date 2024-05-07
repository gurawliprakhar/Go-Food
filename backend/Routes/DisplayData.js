const express = require("express");
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        res.send(global.food_items); // Use global.food_items instead of global.food_item
    } catch (error) {
        console.error(error.message);
        res.send("Server Error");
    }
});

module.exports = router;
