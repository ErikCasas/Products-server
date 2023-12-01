import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    price: {
      type: Number,
      require: true,
    },
    stock: {
      type: Number,
      require: true,
    },
    photoUrl: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    sale:{
      type: Boolean,
      require: true,
    }
  },
  { timestamps: false, versionKey: false }
);

const Products = model("Product", ProductSchema);

export default Products;
