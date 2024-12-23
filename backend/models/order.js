const mongoose = require("mongoose")
const order = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    books: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "item",
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Pending",
      enum: ["Pending", "Placed", "Shipped", "Delivered", "Cancelled"],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("order", order)
