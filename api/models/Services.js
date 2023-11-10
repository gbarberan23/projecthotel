import mongoose from "mongoose";
const serviceSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    
    },
    price: {
        type: Number,
        required: true,
      },
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema );