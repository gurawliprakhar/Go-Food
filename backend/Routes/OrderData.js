const express = require("express");
const router = express.Router();
const Order = require('../models/Orders'); // Corrected the path for the Orders model

router.post('/orderData', async (req, res) => {
    try {
        let data = req.body.order_data;
        data.unshift({ Order_date: req.body.order_date }); // Use unshift() to add the order date at the beginning of the array

        const existingOrder = await Order.findOne({ email: req.body.email });
        if (!existingOrder) {
            await Order.create({
                email: req.body.email,
                order_data: data
            });
        } else {
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { order_data: { $each: data } } } // Use $each to push multiple items into the array
            );
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.post('/myOrderData', async (req, res) => {
    try {
        const order = await Order.findOne({ email: req.body.email });
        if (order) {
            res.json({ orderData: order });
        } else {
            res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;